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

    console.log("RDP")
    
});
