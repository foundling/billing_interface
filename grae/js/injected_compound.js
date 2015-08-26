var InjectedCompound =  function() {
    
    
    // cache the DOM elements
    var $section_label = $('#injected-compound-label');
    var $section_block = $('#injected-compound-block');
    var $validation_required = $section_block.find('.validation-required'); 

    // bind events
    $section_label.on('click',toggleBlock);

    function toggleBlock() {
        $section_block.toggleClass('hidden');
    }
};

var injected_compound = new InjectedCompound();
