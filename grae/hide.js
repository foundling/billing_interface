var $subject_block =  $('.subject-block');
var $subject_header =  $('.subject-header');


/*$subject_header.on('click', function() {
	$subject_block.toggleClass('hidden');
});*/


var $subject_type_selector = $('#subject-type-selector');

$subject_type_selector.on('change', function() {
	if (this.value === 'animal')
	{
		// cache these
		$('.human-subject-types').hide();
		$('.human-details').hide();

		$('.phantom-subject-description').hide();

		$('.animal-subject-types').show();
		$('.animal-details').show();
	}

	else if (this.value === 'human')
	{
		$('.human-subject-types').show();
		$('.human-details').show();

		$('.phantom-subject-description').hide();

		$('.animal-subject-types').hide();
		$('.animal-details').hide();
	}

	else if (this.value === 'phantom')
	{
		$('.human-subject-types').hide();
		$('.human-details').hide();

		$('.phantom-subject-description').show();

		$('.animal-subject-types').hide();
		$('.animal-details').hide();
	}
});

var $blood_analysis_type = $("select[name=blood-analysis-type]");
var $arterial_sub_menu = $('.arterial-block');
var $venous_sub_menu = $('.venous-block');

$blood_analysis_type.on('change', function() {
	if (this.value === 'arterial') {
		$arterial_sub_menu.show();
		$venous_sub_menu.hide();
	}
	else if (this.value === 'venous') {
		$arterial_sub_menu.hide();
		$venous_sub_menu.show();
	}
});
