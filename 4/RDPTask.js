// Set permissions for the task for Incident
app.custom.formTasks.add('Incident', null, function (formObj, viewModel) {
	formObj.boundReady(function(){

		//If the user is not an analyst, hide the task
		if (!session.user.Analyst) { 
			$( ".taskmenu li:contains('Launch RDP')" ).hide() 
		} 
	});
	return;
});

// Add task for Incident
app.custom.formTasks.add('Incident', "Launch RDP", function (formObj, viewModel) {

    RDP()
    
});

// Set permissions for the task for Change
app.custom.formTasks.add('ChangeRequest', null, function (formObj, viewModel) {
	formObj.boundReady(function(){

		//If the user is not an analyst, hide the task
		if (!session.user.Analyst) { 
			$( ".taskmenu li:contains('Launch RDP')" ).hide() 
		} 
	});
	return;
});

// Add task for Change
app.custom.formTasks.add('ChangeRequest', "Launch RDP", function (formObj, viewModel) {

    RDP()
    
});

function RDP() {

    var CIList = []

    pageForm.viewModel.HasRelatedWorkItems.forEach(function (CI) {
        // If Windows Computer or System Center Managed Computer (Server OS) Class
        if (CI.ClassTypeId == "ea99500d-8d52-fc52-b5a5-10dcd1e9d2bd" || CI.ClassTypeId == "e1ae9104-c9a3-467f-adba-33f801db7d37") {
            CIList.push({Text: CI.DisplayName, Id: CI.DisplayName})
        }
    })

    console.log(CIList);
}