var ContrastAgent =  function() {
    
    
    // cache the DOM elements
    var $section_label = $('#contrast-agent-label');
    var $section_block = $('#contrast-agent-block');

    // bind events
    $section_label.on('click',toggleBlock);
    $section_block.on('click',delegateAction);


    function toggleBlock() {
        $section_block.toggleClass('hidden');
    }

    function delegateAction(event) {
        var regex_clone = /.*clone.*/,
            regex_remove = /.*remove.*/,
            regex_original = /original/,
            $parentNode = $(event.target.parentNode);

        if (regex_clone.test(event.target.className)) {
            cloneInput($parentNode);
        }
        else if (regex_remove.test(event.target.className) && !regex_original.test(event.target.parentNode.id)) {
            deleteClone($parentNode);
        }

    }

    function cloneInput($el) {
            // note: .after returns $el.
            $el.after( 
                        $el.clone().
                        removeAttr('id')
                     ).
                     next().
                     find('input').
                     val(''); 
    }

    function deleteClone($el) {
        $el.remove();
    }

};

var contrast_agent = new ContrastAgent();
