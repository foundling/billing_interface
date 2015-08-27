var Form = function(form_modules) {
    
    var module,
        irv, // intermediate return value, for clarity
        rv = true,
        // cache dom
        $submit_btn = $('input[type="submit"]');

    // bind events
    $submit_btn.on('click', validate);

    function validate(e) {
        
        // IF RV is TRUE: FORM IS VALID
        
        for (module in form_modules) {
            if (form_modules[module].validate) {
                console.log('validating ' + module + '!');
                irv = form_modules[module].validate();
                console.log('status for ' + module + ': ' + irv);
                rv = rv && irv; 
            }
        }
        console.log('validation result: ' + rv + "\n" + "\n");

        if (!rv) {
            rv = true;
            e.preventDefault();
        } 

       
    }

}
