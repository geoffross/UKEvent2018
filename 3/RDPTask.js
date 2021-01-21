// Add task for Incident
if (session.user.Analyst) { 
    app.custom.formTasks.add('Incident', "Launch RDP", function (formObj, viewModel) {

        console.log("RDP");
        
    });
}
