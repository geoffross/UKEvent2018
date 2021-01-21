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

    console.log(CIList);
}