var SubjectInformation = function() {

    // cache the DOM elements
    var $section_label = $('#subject-information-label');
    var $section_block = $('#subject-information-block');
    var $subject_information_human = $('#subject-information-human');
    var $subject_information_animal = $('#subject-information-animal');
    var $subject_information_phantom = $('#subject-information-phantom');
    var $subject_type_select = $('select[name="subject-type"]');

    // bind events
    $section_label.on('click',toggleBlock);
    $subject_type_select.on('change',showOnlySelected);

    function toggleBlock() {
        $section_block.toggleClass('hidden');
    }

    function showOnlySelected() {
        /*
         * feature to add:
         *   leave data in forms that are unselected, but add a field to module 
         *   that indicates which form should be picked up on form submission.
         *
         *   This lets users avoid having to reenter data, but still submit only
         *   active form. 
         */

        var selection = $(this).val();
        [
            'human',
            'animal',
            'phantom'
        ].forEach( function(val,index) {

            if (val === selection) {
                $('#subject-information-' + val).show();
            }
            else {
                $('#subject-information-' + val).hide();
            }
        });

    }

};

var subject_information = new SubjectInformation();
