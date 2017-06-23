
	
 var mySwiper = new Swiper ('.swiper-container', {
   direction: 'vertical',
    loop: true,
    
    // 如果需要分页器
    pagination: '.swiper-pagination',
    paginationClickable :true,
    keyboardControl : true,
    mousewheelControl : true,
  onInit: function(swiper){ //Swiper2.x的初始化是onFirstInit
    swiperAnimateCache(swiper); //隐藏动画元素 
    swiperAnimate(swiper); //初始化完成开始动画
  }, 
  onSlideChangeEnd: function(swiper){ 
    swiperAnimate(swiper); //每个slide切换结束时也运行当前slide动画
  } 
  }) 
      
	/*mySwiper.wrapperTransitionEnd(function () {//
	$('.ani-slide').removeClass('ani-slide')
	$('.swiper-slide').eq(mySwiper.activeIndex).addClass('ani-slide')
	},true);
	*/