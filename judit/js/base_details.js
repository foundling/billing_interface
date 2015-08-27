var Base_Details = function() {

    // cache the DOM
    var $project_code_input = $('#project-code'); 
    var $project_type = $('input[name="project-type"]');
    var $project_code_msg = $('#project-code-validation-msg');
    var $project_type_buttons = $(':radio'); 


    var code_table = {
        'EXISTS' : 'The project exists and is valid',
        'NOEXIST' : 'There is no project code by that name',
        'CLOSED' : 'This project is closed',
    };
    var validation_url = '../scripts/validateProjectCode.php'; 


    // events
    $project_type_buttons.on('mousedown', uncheck);

    // a function I jacked from HexInteractive's solution on SO: 
    // http://stackoverflow.com/questions/4957207/how-to-check-uncheck-radio-button-on-click
    // lets you uncheck radiobuttons
    function uncheck(e) {
        var $self = $(this);
        if( $self.is(':checked') ){
            var uncheck = function(){
              setTimeout(function(){$self.removeAttr('checked');},0);
            };
            var unbind = function(){
              $self.unbind('mouseup',up);
            };
            var up = function(){
              uncheck();
              unbind();
            };

            $self.bind('mouseup',up);
            $self.one('mouseout', unbind);
        }
    }

    // bind events
    $project_code_input.on('keyup', function() {
        validateProjectCode($project_code_input,$project_code_msg, code_table);
    });

} 

var base_details = new Base_Details();
