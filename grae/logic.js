var form = {};

form.$el = $('form');
form.sections = form.$el.find('.section');

var s1 = form.sections.eq(0);
s1_els = s1.find('input');
