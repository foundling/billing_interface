(function() {
function new_lot_field_div() {

  var div = document.createElement('DIV');
  div.className = "lot-number";

  var label = document.createElement('LABEL');
  label.appendChild(document.createTextNode('Lot Number'));

  var input = document.createElement('INPUT');
  input.type = "TEXT";

  var rmv_lot_div = document.createElement('DIV');
  rmv_lot_div.className = 'rmv';

  var rmv_lot_txt = document.createTextNode('-');
  rmv_lot_div.appendChild(rmv_lot_txt);
  //<div id="add-lot-number" class="add">Add Another Lot #</div>

  div.appendChild(label);
  div.appendChild(input);
  div.appendChild(rmv_lot_div);
  return div; 
}

$add_lot_number_btn = $('#add-lot-number');
$add_lot_number_parent_div = $add_lot_number_btn.parent();
$last_lot_number = $('.lot-numbers').last();

$add_lot_number_btn.click( function() {
  var new_lot_field = new_lot_field_div();
  $last_lot_number.after().append(new_lot_field);
});


// removing additional lot number fields
// when an .rmv class is clicked
// get its parent.  this is what you remove.
// go up one parent from that to do the removel.
$('.contrast-agent-block').on('click','.rmv', function() {
  $(this).parent().remove();
});

}());
