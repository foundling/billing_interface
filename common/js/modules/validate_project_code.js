function validateProjectCode($input_el, $msg_el, code_table) {

    var code_table = {
        'EXISTS' : 'The project exists and is valid',
        'NOEXIST' : 'There is no project code by that name',
        'CLOSED' : 'This project is closed',
    };

    var val = $input_el.val();

    function markAsValid() {
        $input_el.addClass('valid-input');
        $input_el.removeClass('invalid-input');

        $msg_el.addClass('valid-msg');
        $msg_el.removeClass('invalid-msg');

    }

    function markAsInvalid() {
        $input_el.addClass('invalid-input');
        $input_el.removeClass('valid-input');

        $msg_el.addClass('invalid-msg');
        $msg_el.removeClass('valid-msg');
    }

    function updateMsg()
    {
        console.log($msg_el, data, code_table);
        $msg_el.text(code_table[data]);
    }

    function clearValidationMsg() {
        $msg_el.text('');
    }

    function removeValidationMsgStyle() {
        $msg_el.attr('class','');
    }

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
        var data = 'CLOSED';
        var data = 'EXISTS';
        var data = 'NOEXIST';

        if (data === 'EXISTS') {
            markAsValid();
        }
        if (data === 'NOEXIST') {
            markAsInvalid();
        }
        if (data === 'CLOSED') {
            markAsInvalid();
        }

        updateMsg();
    }
    else {
        markAsInvalid();
        clearValidationMsg();
        removeValidationMsgStyle();
    }
}
