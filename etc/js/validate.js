
var valid = false;

$('form input[name="proj_code"]').keyup( function() {

    var len = $(this).val().length;
    
    if( !valid && len === 3 )
    {
        console.log('turn green');
        $('.requirement').toggleClass('red-bg').toggleClass('green-bg');
        valid = true;
    }
 
     else if (valid && len !== 3 )
    {
        $('.requirement').toggleClass('green-bg').toggleClass('red-bg');
        valid = false;
    }

});