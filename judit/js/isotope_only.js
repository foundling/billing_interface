var IsotopeOnly = function() {

   // cache Dom 
   var $section_label = $('#isotope-only-label');
   var $section_block = $('#isotope-only-block');

   // bind events
   $section_label.on('click', toggle_block);

   function toggle_block() {
       $section_block.toggleClass('hidden');
   }
}

var isotope_only = new IsotopeOnly();

