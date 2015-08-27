var Radiotracer =  function() {
    
    
    // cache the DOM elements
    var $section_label = $('#radiotracer-label');
    var $section_block = $('#radiotracer-block');
    var $validation_required = $section_block.find('.validation-required'); 

    // bind events
    $section_label.on('click',toggleBlock);
    $section_block.on('click',enableInputOnCheck);
    $validation_required.each( function(index,value) {
            $(value).on('keyup', validateOnTheFly);
    });

    function toggleBlock() {
        $section_block.toggleClass('hidden');
    }

    function enableInputOnCheck(event) {
        var input_name = event.target.name;
        if (event.target.nodeName === 'INPUT') {
            var isEnabled = $('input[name="'+ input_name + '-lot-number"]').prop('disabled');
            $('input[name="'+ input_name + '-lot-number"]').
                prop('disabled',!isEnabled);     

            // for the one 'other' case where there are two forms to enable 
            if (input_name === 'other') {
                $('input[name="'+ input_name + '-rt-name"]').prop('disabled',!isEnabled);
            }
        }

    }

    function validateOnTheFly(event) { 
        // validate time inputs on the fly, just a ui indication though 
        // validation is still done for these on submision
        var re = /^[0-2][0-3]:[0-5][0-9]:[0-5][0-9]$/; 
        var timeval = $(this).val(); 
        re.test(timeval) ? markTimeValid($(this)) : markTimeInvalid ($(this)); 
    }

    function validate() {
        var invalid = $section_block.find('.invalid-input');
        if (invalid.length === 0) {
            return true;
        }
        else {
            return false;
        }
    }

    return {
        validate: validate
    }
};

var radiotracer = new Radiotracer();
