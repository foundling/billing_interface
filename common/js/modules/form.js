var Form = function(form_modules) {
    
    var module,
        irv, // intermediate return value, for clarity
        rv = true,
        // cache dom
        $submit_btn = $('input[type="submit"]'),
        $error_box = $('#submission-error-box'),
        $error_list = $('#error-list'),
        errors = [];


    // bind events
    $submit_btn.on('click', validate);

    function validate(e) {

        clearErrors(); 

        // NOTE: IF RV is TRUE: FORM IS VALID

        for (module in form_modules) {
            if (form_modules[module].validate) {
                console.log('validating ' + module + '!');
                irv = form_modules[module].validate();
                if (!irv) { errors.push(module)}
                console.log('status for ' + module + ': ' + irv);
                rv = rv && irv; 
            }
        }
        console.log('validation result: ' + rv + "\n" + "\n");

        if (!rv) {
            e.preventDefault();
            report();
            rv = true; // resetting rv to default as true for subsequent attempts
        } 
    }

    function report() {
        $error_box.removeClass('hidden');
        $error_box.addClass('active-errors');

        errors.forEach( function(value, index) {
            var $li = $('<li>' + value.replace('_',' ') + '</li>');
            $error_list.append($li);
        });
    }

    function clearErrors() {
        $error_box.addClass('hidden');
        $error_box.removeClass('active-errors');

        errors = [];
        $error_list.empty();
    }

}
