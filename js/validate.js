
var valid = false;

$('form input[name="proj_code"]').keyup( function() {
    var len = $(this).val().length;
    
    if( !valid && len === 3 )
    {
        var proj_code = $(this).val();

        $.get("../scripts/validateProjectCode.php", function(data) {
          $('.requirement').toggleClass('red-bg').toggleClass('green-bg');
          console.log('get request returned');
        });

        valid = true;
    }
 
     else if (valid && len !== 3 )
    {
        $('.requirement').toggleClass('green-bg').toggleClass('red-bg');
        valid = false;
    }

});
