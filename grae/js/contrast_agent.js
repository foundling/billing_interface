var ContrastAgent =  function() {
    
    
    // cache the DOM elements
    var $section_label = $('#contrast-agent-label');
    var $section_block = $('#contrast-agent-block');
    var $validation_required = $section_block.find('.validation-required');

    // bind events
    $section_label.on('click',toggleBlock);
    $section_block.on('click',delegateAction);
    $validation_required.each( function(index,value) {
            $(value).on('keyup', validateProjectCode.validateOnTheFly);
    });

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
        validate: validate,
    }

};

var contrast_agent = new ContrastAgent();
