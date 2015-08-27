var app = app || {};

app.modules = {
    base_details : base_details,
    subject_information : subject_information, 
    injected_compound : injected_compound,
    radiotracer : radiotracer,
    contrast_agent : contrast_agent,
    blood_analysis : blood_analysis,
    data_processing : data_processing,
    issues_comments : issues_comments,
}

var form = new Form(app.modules);
