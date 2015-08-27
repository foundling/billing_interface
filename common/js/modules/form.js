var Form = function() {
    
    // cache dom
    var $submit_btn = $('input[type="submit"]');

    // bind events
    $submit_btn.on('click', validate);

    function validate(e) {
        e.preventDefault();
    }
}

var form = new Form();
