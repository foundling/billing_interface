var IssuesComments =  function() {
    
    
    // cache the DOM elements
    var $section_label = $('#issues-comments-label');
    var $section_block = $('#issues-comments-block');

    // bind events
    $section_label.on('click',toggleBlock);

    function toggleBlock() {
        $section_block.toggleClass('hidden');
    }


};

var issues_comments = new IssuesComments();
