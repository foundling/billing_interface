/* 
 * Form Validation
 * Requires that the input have 'required_element' class
 */

var form = {};

form.$el = $('form');
form.required_elements = form.$el.find('.required-element');

form.$el.submit(function(e){
  var isValid = true;
  form.required_elements.each(function(index,element){
    if (! $(this).hasClass('isValid'))
    {  
     /* isValid = false;  // prevents form submission
      return false; // stops further iteration
      */
      return (isValid = false);
   }
  });

  return isValid;
});
