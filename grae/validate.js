var valid = false;
var $required = $('.required');
var $project_code_input = $('form input[name="project-code"]'); 
var $project_code_details = $('#proj-code-details');

$project_code_input.keyup( function() {

    var value = $(this).val();
    var len = value.length;
    
    if( !valid && len === 3 )
    {
      $.get("../scripts/validateProjectCode.php",{'code':value}).done(function(data) {
        if (data.length) {
          $required.toggleClass('valid');
          valid = true;
          console.log(data);
        }
      });
    }
 
    else if (valid && len !== 3 )
    {
        $required.toggleClass('valid');
        valid = false;
    }
});
