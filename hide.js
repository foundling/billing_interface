var $isotope_checkbox = $('input[name=isotope-only]');
var $isotope_block =  $('.block-isotope');
var $radiotracer_checkbox = $('input[name=radiotracer]');
var $radiotracer_block = $('.block-radiotracer');
var $other_checkbox = $('input[name=other]');
var $other_block = $('.block-other');


$isotope_checkbox.change( function() {
	$isotope_block.toggleClass('hidden');
});

$radiotracer_checkbox.change( function() {
	$radiotracer_block.toggleClass('hidden');
});

$other_checkbox.change( function() {
	$other_block.toggleClass('hidden');
});