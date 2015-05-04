var $isotope_checkbox = $('.isotope-heading');
var $isotope_block =  $('.block-isotope');
var $radiotracer_checkbox = $('.radiotracer-heading');
var $radiotracer_block = $('.block-radiotracer');
var $other_checkbox = $('.other-heading');
var $other_block = $('.block-other');




$isotope_checkbox.on('click', function() {
	$isotope_block.toggleClass('hidden');
});

$radiotracer_checkbox.on('click', function() {
	$radiotracer_block.toggleClass('hidden');
});

$other_checkbox.on('click', function() {
	$other_block.toggleClass('hidden');
});