/* 
 * Form Validation
 * Requires that the input have 'required_element' class
 *  if it doesn't, then one of the following three radio buttons
 *  should be checked: maintenance, validation, raw_isotope_run
 */

var $form = $('form');
var $dummy_codes = $('input[name=dummy_code]');
var required_elements = $form.find('.required-element');

$form.submit(function(e){
  var codeIsValid = true;
  var dummyCodeIsChecked = $dummy_codes.filter(
    function(i,element) { 
      return element.checked
    }
  )
  required_elements.each(function(index,element){
    if (! $(this).hasClass('isValid'))
    {  
     /* isValid = false;  // prevents form submission
      return false; // stops further iteration
      */
      codeIsValid = false;
    }
  });

  console.log(codeIsValid);
  console.log(dummyCodeIsChecked.length);
  return codeIsValid || !!dummyCodeIsChecked.length;
});
