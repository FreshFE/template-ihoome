$(document).ready(function() {

	$('.nav-tabs-toggle a').click(function (e) {
		e.preventDefault();
		$(this).tab('show');
	});

	$('.news-bar').affix({
		offset: {
			top: 1260,
			bottom: 10
		}
	});

	$('.header').affix({
		offset: {
			top: 20
		}
	});

});