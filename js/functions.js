$(window).scroll(function(){
	var wScroll = $(this).scrollTop();

	$('.logo').css({
		'transform' : 'translate(0px, '+ wScroll /2 +'%)'
	});

	$('.dragonfly').css({
		'transform' : 'translate(0px, -'+ wScroll /40 +'%)'
	});

});