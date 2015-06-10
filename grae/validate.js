var valid = false;
var $required = $('.required');
var $project_code_input = $('form input[name="project-code"]'); 
var $project_code_details = $('#proj-code-details');

$project_code_input.keyup( function() {

    var len = $(this).val().length;
    
    if( !valid && len === 3 )
    {
        $required.toggleClass('valid');
        valid = true;
        console.log('turn green');
    }
 
    else if (valid && len !== 3 )
    {
        $required.toggleClass('valid');
        valid = false;
    }
});
