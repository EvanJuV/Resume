$(document).ready(function() {
	var skillBars = $('.skill-bar');
	$.each(skillBars, function() {
		percent = $(this).attr('data-percent');
		$(this).append('<div style="width:' + percent + '%"></div>');
	});
});