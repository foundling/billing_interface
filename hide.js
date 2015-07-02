var $isotope_checkbox = $('.isotope-header');
var $isotope_block =  $('.isotope-block');
var $radiotracer_checkbox = $('.radiotracer-header');
var $radiotracer_block = $('.radiotracer-block');
var $other_checkbox = $('.other-header');
var $other_block = $('.other-block');





$isotope_checkbox.on('click', function() {
	$isotope_block.toggleClass('hidden');
});

$radiotracer_checkbox.on('click', function() {
	$radiotracer_block.toggleClass('hidden');
});

$other_checkbox.on('click', function() {
	$other_block.toggleClass('hidden');
});
