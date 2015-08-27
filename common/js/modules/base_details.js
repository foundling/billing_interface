var Base_Details = function() {

    // cache the DOM
    var $project_code_input = $('#project-code'); 
    var $project_type = $('input[name="project-type"]');
    var $project_code_msg = $('#project-code-validation-msg');
    var $project_type_buttons = $(':radio');
    var validation_url = '../scripts/validateProjectCode.php'; 


    // bind events
    $project_type_buttons.on('mousedown', uncheck);
    $project_code_input.on('keyup', function() {
        validateProjectCode($project_code_input,$project_code_msg);
    });

    function uncheck(e) {
        var $self = $(this);
        if( $self.is(':checked') ){
            var uncheck = function(){
              setTimeout(function(){$self.removeAttr('checked');},0);
            };
            var unbind = function(){
              $self.unbind('mouseup',up);
            };
            var up = function(){
              uncheck();
              unbind();
            };

            $self.bind('mouseup',up);
            $self.one('mouseout', unbind);
        }
    }

    function validate() {
        var rv = false, 
            $checked = $project_type.filter( function(index, item) {
                return $(item).is(':checked');
           })

           if ( ($project_code_input.attr('class') === 'valid-input') && ($checked.length > 0) ) {
               // cant be both proj and checked radio
                rv = false;
           }
           else if ( ($project_code_input.attr('class') === 'valid-input') || ($checked.length > 0) ) {
               // if one is true
                rv = true;
           }

           else {
               rv = false;
           }
        
           return rv;
    }
    
    return {
        validate: validate,
    }
}

var base_details = new Base_Details();
