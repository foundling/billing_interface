/*
 * Project Code Validator 
 *
 *
 *
 *
 */

code_table = {
	'NOEXIST' : 'There is no project code by that name',
	'CLOSED' : 'This project is closed',
}

$proj_code_status_msg = $('#proj-code-status-message');

var $required = $('.validity');
var $project_code_input = $('form input[name=proj-code]'); 
$project_code_input.val('');
var cache = {};

$project_code_input.keyup( function() {
	$proj_code_status_msg.html('');
    var value = $(this).val();
    var len = value.length;
    
    if(len === 3)
    {
      if (cache[value]) {
        console.log('no get request. using cached value for', value);
        $required.addClass('status-ok');
        $project_code_input.addClass('isValid');
        return;
      }
      else {
        	console.log('get request for',value);
        	$.get("../scripts/validateProjectCode.php",{'code':value}).done(function(data) {
			console.log(data);
			console.log(code_table[data]);
          	if (data === 'EXISTS') {
					$required.addClass('status-ok');
					$project_code_input.addClass('isValid');
					cache[value] = data;
					console.log('code ' + value + ' was cached!');
          	}
          	else if (data === 'NOEXIST' || data === 'CLOSED') {
					$proj_code_status_msg.html(code_table[data]);
					$required.removeClass('status-ok');
					$project_code_input.removeClass('isValid');
          	}
        	});
      }
	}
 
   	else (len !== 3 )
   	{
			$required.removeClass('status-ok');
			$project_code_input.removeClass('isValid');
   	}
});
