if (session.user.Analyst) { 
	// Add task for Incident
    app.custom.formTasks.add('Incident', "Launch RDP", function (formObj, viewModel) {

        console.log("RDP");
        
    });

	// Add task for Change
    app.custom.formTasks.add('ChangeRequest', "Launch RDP", function (formObj, viewModel) {

        console.log("RDP");
        
    });
}

function RDP() {

    var CIList = [];

    pageForm.viewModel.HasRelatedWorkItems.forEach(function (CI) {
        // If Windows Computer or System Center Managed Computer (Server OS) Class
        if (CI.ClassTypeId == "ea99500d-8d52-fc52-b5a5-10dcd1e9d2bd" || CI.ClassTypeId == "e1ae9104-c9a3-467f-adba-33f801db7d37") {
            CIList.push({Text: CI.DisplayName, Id: CI.DisplayName});
        }
    });

    $('body').find("#RDPHTML").remove();
    //use requirejs to load the HTML template first
    require(["text!/CustomSpace/RDPTask/RDPWindow.html"], function (template) {
        //make a jQuery obj
        cont = $(template);
            
        //create a view model to handle the UX
        var _RDPWindow = new kendo.observable({
            CIDropDown: CIList,
            okClick: function () {
                //They clicked OK
                var device = $('#CIDropDownSelect').val();

                RDPWindow.close();

                // This is the app-launcher call
                window.location = 'cireson-app-launcher://launch/rdp?client=' + device;
            },
            cancelClick: function () {
                RDPWindow.close();
            }
        });
        
        //create the kendo window
        RDPWindow = cont.kendoWindow({
            title: "Launch RDP",
            resizable: false,
            modal: true,
            viewable: false,
            width: 500,
            height: 300,
            close: function () {
            },
            activate: function () {
                //on window activate bind the view model to the loaded template content
                kendo.bind(cont, _RDPWindow);
            }
        }).data("kendoWindow");
        
        //now open the window
        RDPWindow.open().center();
    });
}