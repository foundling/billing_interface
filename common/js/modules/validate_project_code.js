function validateProjectCode($input_el, $msg_el, code_table) {

    var code_table = {
        'EXISTS' : 'The project exists and is valid',
        'NOEXIST' : 'There is no project code by that name',
        'CLOSED' : 'This project is closed',
    };

    var val = $input_el.val();

    if (val.length === 3) { 

        /*
        $.get(validation_url ,{'code' : project_code }).
            done( function(data) {
                if (data === 'EXISTS') {
                    markValid();
                }
                updateMsg(data);
            });
        */
        var data = 'CLOSED';
        var data = 'NOEXIST';
        var data = 'EXISTS';

        if (data === 'EXISTS') {
            markValid($input_el, $msg_el);
        }
        if (data === 'NOEXIST') {
            markInvalid($input_el, $msg_el);
        }
        if (data === 'CLOSED') {
            markInvalid($input_el, $msg_el);
        }

        updateMsg($msg_el, data, code_table);
    }
    else {
        markInvalid($input_el, $msg_el);
        clearValidationMsg($msg_el);
        removeValidationMsgStyle($msg_el);
    }
}

function markTimeValid($time_input) {
    $time_input.addClass('valid-input');
    $time_input.removeClass('invalid-input');
}

function markTimeInvalid($time_input) {
    $time_input.addClass('invalid-input');
    $time_input.removeClass('valid-input');
}


function markValid($input_el, $msg_el) {
    $input_el.addClass('valid-input');
    $input_el.removeClass('invalid-input');

    $msg_el.addClass('valid-msg');
    $msg_el.removeClass('invalid-msg');

}

function markInvalid($input_el, $msg_el) {
    $input_el.addClass('invalid-input');
    $input_el.removeClass('valid-input');

    $msg_el.addClass('invalid-msg');
    $msg_el.removeClass('valid-msg');
}

function updateMsg($msg_el, data, code_table)
{
    $msg_el.text(code_table[data]);
}

function clearValidationMsg($msg_el) {
    $msg_el.text('');
}

function removeValidationMsgStyle($msg_el) {
    $msg_el.attr('class','');
}
