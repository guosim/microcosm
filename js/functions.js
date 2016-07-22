$(window).scroll(function(){
	var wScroll = $(this).scrollTop();

	$('.logo').css({
		'transform' : 'translate(0px, '+ wScroll /2 +'%)'
	});

	$('.logo').css(
		'opacity', '1' - wScroll/600
	);

	$('.dragonfly').css({
		'transform' : 'translate(0px, -'+ wScroll /40 +'%)'
	});

});