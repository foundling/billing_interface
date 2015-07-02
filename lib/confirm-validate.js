$('form input').not('input[type=submit]').keyup(function(event) {
  // remove all contiguous beginning/ending whitespace
  // then take the length
  // if it's 0, add invalid class, otherwise remove it
  var len = $(this).val().trim("    ").length;
  if (!len)
  {
    $(this).addClass('invalid');
  }
  else {
    $(this).removeClass('invalid');
  }
});

$('form').submit( function(event) {
  invalid_count = $('.invalid').length;
  if (invalid_count === 0) {
    return true; 
  }
  else {
    return false;
  }
});


