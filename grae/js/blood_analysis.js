var BloodAnalysis =  function() {
    
    
    // cache the DOM elements
    var $section_label = $('#blood-analysis-label');
    var $section_block = $('#blood-analysis-block');

    // bind events
    $section_label.on('click',toggleBlock);

    function toggleBlock() {
        $section_block.toggleClass('hidden');
    }


};

var blood_analysis = new BloodAnalysis();
