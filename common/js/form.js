var Form = function() {
    
    // cache dom
    var $submit_btn = $('input[type="submit"]');

    // bind events
    $submit_btn.on('submit', validate);

    function validate() {
        console.log('hi');
    }
}

var form = new Form();
