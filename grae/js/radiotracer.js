var Radiotracer =  function() {
    
    
    // cache the DOM elements
    var $section_label = $('#radiotracer-label');
    var $section_block = $('#radiotracer-block');

    // bind events
    $section_label.on('click',toggleBlock);
    $section_block.on('click',enableInputOnCheck);

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

};

var radiotracer = new Radiotracer();
