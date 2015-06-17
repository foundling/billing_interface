/*
 * Project Code Validator 
 *
 *
 *
 *
 */

(function() {
var $required = $('.required');
var $project_code_input = $('form input[name="project-code"]'); 
var $project_code_details = $('#proj-code-details');
var cache = {};

$project_code_input.keyup( function() {
    var value = $(this).val();
    var len = value.length;
    
    if(len === 3)
    {
      if (cache[value]) {
        console.log('no get request. using cached value for', value);
        $required.addClass('valid');
        $project_code_input.addClass('isValid');
        return;
      }
      else {
        console.log('get request for',value);
        $.get("../scripts/validateProjectCode.php",{'code':value}).done(function(data) {
          if (data.length) {
            $required.addClass('valid');
            $project_code_input.addClass('isValid');
            cache[value] = data;
            console.log('code ' + value + ' was cached!');
          }
          else {
            $required.removeClass('valid');
            $project_code_input.removeClass('isValid');
          }
        });
      }
    }
 
    else if (len !== 3 )
    {
        $required.removeClass('valid');
        $project_code_input.removeClass('isValid');
    }
});
}());
