$(function(){
	$(".nav a").mouseenter(function(){
		$(this).addClass("active").siblings().removeClass("active")
	})
	$(".nav a").mouseleave(function(){
		$(".nav a").removeClass("active")
	})
	/*lunbo*/
	var mySwiper = new Swiper ('.swiper-container', {
    
    loop: true,
    
    // 如果需要分页器
    pagination: '.swiper-pagination',
    
    // 如果需要前进后退按钮
    nextButton: '.swiper-button-next',
    prevButton: '.swiper-button-prev',
    
    
  })        
	/*totop*/
	$(window).scroll(function(){
		var i=$(window).scrollTop();
		if(i>100)
		{
			$(".toTop").fadeIn()
		}
		else{
			$(".toTop").fadeOut()
		}
		
	})
	$(".toTop").click(function(){
		 $('body,html').animate({scrollTop:0},1000);
	})
	


	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
})
