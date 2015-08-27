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


    // bind events
    $project_type_buttons.on('mousedown', uncheck);

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

    // PROJECT CODE VALIDATION
    function validateProjectCode() {
        var val = $project_code_input.val();
        if (val.length === 3) { 

            /*
            $.get(validation_url ,{'code' : project_code }).
                done( function(data) {
                    if (data === 'EXISTS') {
                        markAsValid();
                    }
                    updateMsg(data);
                });
            */
            data = 'CLOSED';
            data = 'NOEXIST';
            data = 'EXISTS';

            if (data === 'EXISTS') {
                markAsValid();
            }
            if (data === 'NOEXIST') {
                markAsInvalid();
            }
            if (data === 'CLOSED') {
                markAsInvalid();
            }

            updateMsg(data);
        }
        else {
            markAsInvalid();
            clearValidationMsg();
            removeValidationMsgStyle();
        }
    }

    function markAsValid() {
        $project_code_input.addClass('valid-input');
        $project_code_input.removeClass('invalid-input');

        $project_code_msg.addClass('valid-msg');
        $project_code_msg.removeClass('invalid-msg');

    }

    function markAsInvalid() {
        $project_code_input.addClass('invalid-input');
        $project_code_input.removeClass('valid-input');

        $project_code_msg.addClass('invalid-msg');
        $project_code_msg.removeClass('valid-msg');
    }

    function updateMsg(data)
    {
        $project_code_msg.text(code_table[data]);
    }

    function clearValidationMsg() {
        $project_code_msg.text('');
    }

    function removeValidationMsgStyle() {
        $project_code_msg.attr('class','');
    }


    // bind events
    $project_code_input.on('keyup',validateProjectCode);
};

var base_details = new Base_Details();
