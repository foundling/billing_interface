var Radiotracer =  function() {
    
    
    // cache the DOM elements
    var $section_label = $('#radiotracer-label');
    var $section_block = $('#radiotracer-block');

    // bind events
    $section_label.on('click',toggleBlock);

    function toggleBlock() {
        $section_block.toggleClass('hidden');
    }

};

var radiotracer = new Radiotracer();
