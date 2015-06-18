( function(){
/* Logic wrapped in a IIFE to prevent global scope issues with other js files
 
 APPROACH: when anything inside the radiotracer-block is clicked, check event.target
 to see which item was clicked. If it's a check box, get its name attribute value
 and toggle the disabled attribute on the adjacent text input with same name.
 The name should be radiotracer.
 
*/

var $radiotracer_block = $('.radiotracer-block');

var abc = [];

$radiotracer_block.click( function(e) {
  if (e.target.nodeName === 'INPUT' && 
      e.target.className === 'radiotracer' &&
      e.target.type === 'checkbox')
  {
    var rt_text_input = 'input[type=text][name=' + e.target.name + ']';
    var $disabled = $(rt_text_input).attr('disabled'); 
    var text = $disabled ? '' : 'lot #';
    $(rt_text_input).val(text);
    $(rt_text_input).attr('disabled',!$disabled);
    $(rt_text_input).toggleClass('.disabled-text-input');
   
    if (e.target.name === 'other')
    {
      $('input[type=text][name=radiotracer-other]').attr('disabled',false); 
    }
  }

});

/*
 * released for injection section of radiotracer block
 */
var $rfi_radio_group = $('input[type=radio][name=rfi]');
var $rfi_text_input = $('input[type=text][name=rfi]');
$rfi_radio_group.change( function() {
  if ($(this).val() === 'yes')
  {
    $rfi_text_input.prop('disabled',function(i,v){return !v});
    $rfi_text_input.css('color','black');
  }
  else {
    $rfi_text_input.val('');
    $rfi_text_input.prop('disabled','false');  
  }
});
}());
