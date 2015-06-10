
// rfi is short for released for injection
var $rfi_radio_group = $('input[name=released_for_injection]');  
var $rfi_yes_btn = $('input[name=released_for_injection][value=yes]');
var $rfi_text_input = $('input[name=released_for_injection][type=text]');

$rfi_radio_group.change( function() {
  console.log('button changed state!');
  if ( $rfi_yes_btn.is(':checked') ) {
    $rfi_text_input.attr('disabled',false).css('color','black');  
  }
  else {
    $rfi_text_input.attr('disabled',true).css('color','lightgray'); 
  }
});
