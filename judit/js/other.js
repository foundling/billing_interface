var Other = function() {
   
    // cache the DOM elements
    var $section_label = $('#other-label');
    var $section_block = $('#other-block');

    // bind events
    $section_label.on('click',toggleBlock);

    function toggleBlock() {
        $section_block.toggleClass('hidden');
    }

};

var other = new Other();
