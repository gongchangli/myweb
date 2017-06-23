
var wow = new WOW({
    boxClass: 'wow',
    animateClass: 'animated',
    offset: 0,
    mobile: true,
    live: true
});
wow.init();





$(".navbar-nav > li > a").mouseenter(function(){
	$(this).addClass("bgys").parent().siblings().children().removeClass("bgys")
})



$("#bsdw>div").mouseenter(function(){
	$(this).css({
		"animation":"boxsd 0.5s",
		
	})
	
	
})
$("#bsdw>div").mouseleave(function(){
	$(this).css({
		"animation":"",
		
	})
	
	
})