var Radiotracer =  function() {
    
    
    // cache the DOM elements
    var $section_label = $('#radiotracer-label');
    var $section_block = $('#radiotracer-block');
    var $validation_required = $('.validation-required');


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


    function validateOnTheFly() {
        var re = /^[0-2][0-3]:[0-5][0-9]:[0-5][0-9]$/;
        var timeval = $(this).val();
        re.test(timeval) ? markValid($(this)) : markInvalid ($(this));
    }

    function markValid($element) {
        $element.addClass('valid-input');
        $element.removeClass('invalid-input');
    }

    function markInvalid($element) {
        $element.addClass('invalid-input');
        $element.removeClass('valid-input');
    }

    function validate() {
    }

    return {
        validate: validate
    }
};

var radiotracer = new Radiotracer();
