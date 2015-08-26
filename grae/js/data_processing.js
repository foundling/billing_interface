var DataProcessing =  function() {
    
    
    // cache the DOM elements
    var $section_label = $('#data-processing-label');
    var $section_block = $('#data-processing-block');

    // bind events
    $section_label.on('click',toggleBlock);

    function toggleBlock() {
        $section_block.toggleClass('hidden');
    }


};

var data_processing = new DataProcessing();
