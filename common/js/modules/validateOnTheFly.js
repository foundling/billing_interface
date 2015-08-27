function validateOnTheFly(event) {
    var re = /^[0-2][0-3]:[0-5][0-9]:[0-5][0-9]$/;
    var timeval = $(this).val();
    re.test(timeval) ? markTimeValid($(this)) : markTimeInvalid ($(this));
}
