$("#sj").mouseenter(function() {
	$(".shouji2").css("display", "block")
})
$("#sj").mouseleave(function() {
	$(".shouji2").css("display", "none")
})
$(".topNavRight li").eq(3).mouseenter(function() {
	$(".wode").css("display", "block")
	$(".topNavRight li").eq(3).css("background-color", "#fff")
})
$(".topNavRight li").eq(3).mouseleave(function() {
	$(".wode").css("display", "none")
	$(".topNavRight li").eq(3).css("background-color", "")
})
$("#header .topNavRight a").mouseenter(function() {
	$(this).css("color", "#C81623")
})
$("#header .topNavRight a").mouseleave(function() {
		$(this).css("color", "")
	})
	/*轮播部分*/
var i = null;
$(".jd li").mouseenter(function() {
	$(this).addClass("#banner red1").siblings().removeClass("#banner red1")
	i = $(this).index();
	n = i;
	$(".tu li").eq(i).fadeIn().siblings().fadeOut();
})
$(".lunbo").mouseenter(function() {
	$(".jt").fadeIn();
	clearInterval(timer)
})
$(".lunbo").mouseleave(function() {
	$(".jt").fadeOut();
	timer = setInterval(move, 2000)
})
var n = null;
var timer = null;
timer = setInterval(move, 2000)

function move() {
	n++
	if(n == 8) {
		n = 0
	}
	$(".jd li").eq(n).addClass("#banner red1").siblings().removeClass("#banner red1")
	$(".tu li").eq(n).fadeIn().siblings().fadeOut();
}
$(".jtr").click(function() {
	n++
	if(n == 8) {
		n = 0
	}
	$(".jd li").eq(n).addClass("#banner red1").siblings().removeClass("#banner red1")
	$(".tu li").eq(n).fadeIn().siblings().fadeOut();
})
$(".jtl").click(function() {
		n--;
		if(n == -1) {
			n = 8
		}
		$(".jd li").eq(n).addClass("#banner red1").siblings().removeClass("#banner red1")
		$(".tu li").eq(n).fadeIn().siblings().fadeOut();
	})
	/*轮播部分*/
	/*banner侧拉导航*/
$(".banner_left li,.banner_left_X").hover(function() {
	$(".banner_left_X").show()
}, function() {
	$(".banner_left_X").hide()
})
var a = null; //侧拉导航索引号
$(".banner_left li").mouseenter(function() {
		a = $(this).index();
		$(".banner_left_X > div").eq(a).show().siblings().hide();
	})
	/*banner侧拉导航*/
	/*banner右侧选项卡*/
var b = null
$(".banner_right_top1 li").mouseenter(function() {
		$(this).addClass("biankuang").siblings().removeClass("biankuang")
		b = $(this).index();
		if(b == 2) {
			b = 1
		}
		$(".banner_right_btm div").eq(b).show().siblings().hide();
	})
	/*banner右侧选项卡*/
$("#right-nav-list2 li").eq(0).click(function() {
		$("body,html").animate({
			"scrollTop": 0
		})
	})
	/*返回顶部*/
	/*banner右侧选项卡*/
$(".banner_right_3_1 li:lt(4)").mouseenter(function() {
	$(".banner_right_3_1").stop().slideUp();
	$(".banner_right_3_2").stop().slideDown();
})
var zhi = null
$(".banner_right_3_2-1 li").mouseenter(function() {
	$(this).addClass("brr_top_color").siblings().removeClass("brr_top_color")
	zhi = $(this).index()
	$(".banner_right_3_2-2_he > div").eq(zhi).stop().slideDown().siblings().stop().slideUp()
})
$(".banner_right_3_2-2 span").click(function() {
	$(".banner_right_3_1").stop().slideDown();
	$(".banner_right_3_2").stop().slideUp();
})
$("banner_right_3_2-1")
	/*banner右侧选项卡*/
	/*网页搜索*/
var gao = $("#header").height() + $("#banner").height();
$(window).scroll(function() {
	var aa = $(document).scrollTop()
	if(aa >= gao) {
		$(".wyss").slideDown();
	} else {
		$(".wyss").slideUp();
	}

})

/*网页搜索*/
/*倒计时*/

var intDiff = parseInt(3559); //倒计时总秒数量
function timer1(intDiff) {
	window.setInterval(function() {
		var day = 0,
			hour = 0,
			minute = 59,
			second = 59; //时间默认值       
		if(intDiff > 0) {
			day = Math.floor(intDiff / (60 * 60 * 24));
			hour = Math.floor(intDiff / (60 * 60)) - (day * 24);
			minute = Math.floor(intDiff / 60) - (day * 24 * 60) - (hour * 60);
			second = Math.floor(intDiff) - (day * 24 * 60 * 60) - (hour * 60 * 60) - (minute * 60);
		}
		if(minute <= 9) minute = '0' + minute;
		if(second <= 9) second = '0' + second;
		$('#day_show').html(day + "天");
		$('#hour_show').html('<s id="h"></s>' + hour + '时');
		$('#minute_show').html('<s></s>' + minute + '分');
		$('#second_show').html('<s></s>' + second + '秒');
		intDiff--;
	}, 1000);
}
$(function() {
	timer1(intDiff);
});
/*倒计时*/
/*秒杀选项卡*/
$(".bodyer1_btm_left").mouseenter(function() {
	$(".bodyer1_btm_left_jt").show();
})
$(".bodyer1_btm_left").mouseleave(function() {
	$(".bodyer1_btm_left_jt").hide();
})
$(".jt_l").click(function() {
	$(".bodyer1_btm_left_1").show();
	$(".bodyer1_btm_left_2").hide();
})
$(".jt_r").click(function() {
	$(".bodyer1_btm_left_2").show();
	$(".bodyer1_btm_left_1").hide();
})

/*秒杀选项卡*/

/*主体2的轮播*/
var a = null;
$(".bo_jd li").mouseenter(function() {
	$(this).addClass("#bodyer red2").siblings().removeClass("#bodyer red2")
	a = $(this).index();
	b = a;
	$(".lb li").eq(a).fadeIn().siblings().fadeOut();
})
$(".bo").mouseenter(function() {
	$(".bo_jt").fadeIn();
	clearInterval(timer2)
})
$(".bo").mouseleave(function() {
	$(".bo_jt").fadeOut();
	timer2 = setInterval(move1, 2000)
})
var b = null;
var timer2 = null;
timer2 = setInterval(move1, 2000)

function move1() {
	b++
	if(b == 3) {
		b = 0
	}
	$(".bo_jd li").eq(b).addClass("#bodyer red2").siblings().removeClass("#bodyer red2")
	$(".lb li").eq(b).fadeIn().siblings().fadeOut();
}
$(".bo_jt2").click(function() {
	b++
	if(b == 3) {
		b = 0
	}
	$(".bo_jd li").eq(b).addClass("#bodyer red2").siblings().removeClass("#bodyer red2")
	$(".lb li").eq(b).fadeIn().siblings().fadeOut();
})
$(".bo_jt1").click(function() {
		b--;
		if(b == -1) {
			b = 2
		}
		$(".bo_jd li").eq(b).addClass("#bodyer red2").siblings().removeClass("#bodyer red2")
		$(".lb li").eq(b).fadeIn().siblings().fadeOut();
	})
	/*主体2的轮播*/
	/*排行榜选项卡*/
$(".bodyer2_3_btm_top li").mouseenter(function() {
	var q = $(this).index()
	switch(q) {
		case 0:
			$(".kuai").stop().animate({
				left: '8px'
			})
			break;
		case 1:
			$(".kuai").stop().animate({
				left: '81px'
			})
			break;
		case 2:
			$(".kuai").stop().animate({
				left: '155px'
			})
			break;
		case 3:
			$(".kuai").stop().animate({
				left: '230px'
			})
			break;
		case 4:
			$(".kuai").stop().animate({
				left: '300px'
			})
			break;
		default:
			break;
	}
	$(".bodyer2_3_btm_btm div").eq(q).show().siblings().hide();
})

/*排行榜选项卡*/
/*左侧导航*/
$(".left li").mouseenter(function() {
	$(this).addClass("ba_red2")
})
$(".left li").mouseleave(function() {
	$(this).removeClass("ba_red2")
})

$(".left li").eq(8).click(function() {
		$("body,html").animate({
			"scrollTop": 0
		})
	})
	/*左侧滚动条监听事件*/
var height0 = $("#header").height() + $("#banner").height() + $(".bodyer1").height() + $(".bodyer2").height() + $(".bodyer_3").height() + $(".bodyer4").height();
var height1;
var height2;
var height3;
var height4;
var height5;
var height6;
var height7;
height1 = height0 + $(".bodyer_5").height();
height2 = height1 + $(".bodyer_6").height();
height3 = height2 + $(".bodyer_7").height();
height4 = height3 + $(".bodyer_8").height();
height5 = height4 + $(".bodyer_11").height();
height6 = height5 + $(".bodyer_12").height();
height7 = height6 + $(".bodyer_13").height();
$(window).scroll(function() {
			var aa = $(document).scrollTop()
			if(aa >= height0) {
				$("#left").fadeIn();
				$("#left li").eq(0).addClass("#left bgred").siblings().removeClass("#left bgred");
				
				if(aa >= height1) {
					$("#left li").eq(1).addClass("#left bgred").siblings().removeClass("#left bgred");
					
					if(aa >= height2) {
						$("#left li").eq(2).addClass("#left bgred").siblings().removeClass("#left bgred");
						
						if(aa >= height3) {
							$("#left li").eq(3).addClass("#left bgred").siblings().removeClass("#left bgred");
							 
							if(aa >= height4) {
								$("#left li").eq(4).addClass("#left bgred").siblings().removeClass("#left bgred");
								 
								if(aa >= height5) {
									$("#left li").eq(5).addClass("#left bgred").siblings().removeClass("#left bgred");
									
									if(aa >= height6) {
										$("#left li").eq(6).addClass("#left bgred").siblings().removeClass("#left bgred");
										 
										if(aa >= height7) {
											$("#left li").eq(7).addClass("#left bgred").siblings().removeClass("#left bgred");
											
										}
									}
								}

							}

						}

					}
				}
			} else {
				$("#left").fadeOut();
			}
			
			})
			$(".left li").eq(0).click(function() {
					$("body,html").stop().animate({
						'scrollTop':height0,
					})
					
				})
			
			$(".left li").eq(1).click(function() {
					$("body,html").stop().animate({
						'scrollTop':height1,
					})
					
				})
			$(".left li").eq(2).click(function() {
					$("body,html").stop().animate({
						'scrollTop':height2,
					})
					
				})
			
			$(".left li").eq(3).click(function() {
					$("body,html").stop().animate({
						'scrollTop':height3,
					})
					
				})
			
			$(".left li").eq(4).click(function() {
					$("body,html").stop().animate({
						'scrollTop':height4,
					})
					
				})
			
			$(".left li").eq(5).click(function() {
					$("body,html").stop().animate({
						'scrollTop':height5,
					})
					
				})
			$(".left li").eq(6).click(function() {
					$("body,html").stop().animate({
						'scrollTop':height6,
					})
					
				})
			
			$(".left li").eq(7).click(function() {
					$("body,html").stop().animate({
						'scrollTop':height7,
					})
					
				})
		/*左侧滚动条监听事件*/
		/*左侧导航*/
		/*过度动画*/
		$(".bodyer5_right_btm li").mouseenter(function() {
			var a = $(this).index()
			$(".bodyer5_right_btm img").eq(a).stop().animate({
				left: "-5px"
			})
		}) 
		$(".bodyer5_right_btm li").mouseleave(function() {
			var a = $(this).index()
			$(".bodyer5_right_btm img").eq(a).stop().animate({
				left: "0px"
			})
		})
		/*过度动画*/
		/*视频轮播的开始*/

		var c = null; $(".lbsp_jd li").mouseenter(function() {
			$(this).addClass("#bodyer red2").siblings().removeClass("#bodyer red2")
			c = $(this).index();
			d = c;
			$(".lbsp_tu li").eq(c).fadeIn().siblings().fadeOut();
		}) 
		$(".lbsp").mouseenter(function() {
			$(".lbsp_jt").fadeIn();
			clearInterval(timer3);
		}) 
		$(".lbsp").mouseleave(function() {
			$(".lbsp_jt").fadeOut();
			timer3 = setInterval(move2, 2000);
		})
		var d = null;
		var timer3 = null; timer3 = setInterval(move2, 2000);

		function move2() {
			d++
			if(d == 3) {
				d = 0
			}
			$(".lbsp_jd li").eq(d).addClass("#bodyer red2").siblings().removeClass("#bodyer red2")
			$(".lbsp_tu li").eq(d).fadeIn().siblings().fadeOut();
		}
		$(".lbsp_jt_r").click(function() {
			d++
			if(d == 3) {
				d = 0
			}
			$(".lbsp_jd li").eq(d).addClass("#bodyer red2").siblings().removeClass("#bodyer red2")
			$(".lbsp_tu li").eq(d).fadeIn().siblings().fadeOut();
		}) 
		$(".lbsp_jt_l").click(function() {
			d--;
			if(d == -1) {
				d = 2
			}
			$(".lbsp_jd li").eq(d).addClass("#bodyer red2").siblings().removeClass("#bodyer red2")
			$(".lbsp_tu li").eq(d).fadeIn().siblings().fadeOut();
		})

		/*视频轮播的开始*/
		/*主体6 的选项卡*/
		$(".bodyer_6_btm_l_btm_3").hover(function() {
			$(".bodyer_6_btm_l_btm_3_jt").fadeIn()
		}, function() {
			$(".bodyer_6_btm_l_btm_3_jt").fadeOut()
		}) 
		$(".bodyer_6_btm_l_btm_3_jt_l").click(function() {
			$(".bodyer_6_btm_l_btm_3_1").css("transform", "translateX(-570px)")
		}) 
		$(".bodyer_6_btm_l_btm_3_jt_r").click(function() {
			$(".bodyer_6_btm_l_btm_3_1").css("transform", "translateX(0px)")
		})

		$(".bodyer_6_btm_l_btm_31").hover(function() {
			$(".bodyer_6_btm_l_btm_3_jt1").fadeIn()
		}, function() {
			$(".bodyer_6_btm_l_btm_3_jt1").fadeOut()
		}) 
		$(".bodyer_6_btm_l_btm_3_jt_l1").click(function() {
			$(".bodyer_6_btm_l_btm_3_11").css("transform", "translateX(-570px)")
		}) 
		$(".bodyer_6_btm_l_btm_3_jt_r1").click(function() {
			$(".bodyer_6_btm_l_btm_3_11").css("transform", "translateX(0px)")
		})
		/*主体6 的选项卡*/
		/*主体7 的选项卡*/
		$(".bodyer_7_btm_l_btm_3").hover(function() {
			$(".bodyer_7_btm_l_btm_3_jt").fadeIn()
		}, function() {
			$(".bodyer_7_btm_l_btm_3_jt").fadeOut()
		}) 
		$(".bodyer_7_btm_l_btm_3_jt_l").click(function() {
			$(".bodyer_7_btm_l_btm_3_1").css("transform", "translateX(-570px)")
		})
		$(".bodyer_7_btm_l_btm_3_jt_r").click(function() {
			$(".bodyer_7_btm_l_btm_3_1").css("transform", "translateX(0px)")
		})

		$(".bodyer_7_btm_l_btm_31").hover(function() {
			$(".bodyer_7_btm_l_btm_3_jt1").fadeIn()
		}, function() {
			$(".bodyer_7_btm_l_btm_3_jt1").fadeOut()
		}) 
		$(".bodyer_7_btm_l_btm_3_jt_l1").click(function() {
			$(".bodyer_7_btm_l_btm_3_11").css("transform", "translateX(-570px)")
		})
		$(".bodyer_7_btm_l_btm_3_jt_r1").click(function() {
			$(".bodyer_7_btm_l_btm_3_11").css("transform", "translateX(0px)")
		})
		/*主体7 的选项卡*/
		/*主体8 的选项卡*/
		$(".bodyer_8_btm_l_btm_3").hover(function() {
			$(".bodyer_8_btm_l_btm_3_jt").fadeIn()
		}, function() {
			$(".bodyer_8_btm_l_btm_3_jt").fadeOut()
		})
		$(".bodyer_8_btm_l_btm_3_jt_l").click(function() {
			$(".bodyer_8_btm_l_btm_3_1").css("transform", "translateX(-570px)")
		}) 
		$(".bodyer_8_btm_l_btm_3_jt_r").click(function() {
			$(".bodyer_8_btm_l_btm_3_1").css("transform", "translateX(0px)")
		})

		$(".bodyer_8_btm_l_btm_31").hover(function() {
			$(".bodyer_8_btm_l_btm_3_jt1").fadeIn()
		}, function() {
			$(".bodyer_8_btm_l_btm_3_jt1").fadeOut()
		})
		$(".bodyer_8_btm_l_btm_3_jt_l1").click(function() {
			$(".bodyer_8_btm_l_btm_3_11").css("transform", "translateX(-570px)")
		}) 
		$(".bodyer_8_btm_l_btm_3_jt_r1").click(function() {
			$(".bodyer_8_btm_l_btm_3_11").css("transform", "translateX(0px)")
		})
		/*主体8 的选项卡*/

		/*主体11 的选项卡*/
		$(".bodyer_11_btm_l_btm_3").hover(function() {
			$(".bodyer_11_btm_l_btm_3_jt").fadeIn()
		}, function() {
			$(".bodyer_11_btm_l_btm_3_jt").fadeOut()
		})
		$(".bodyer_11_btm_l_btm_3_jt_l").click(function() {
			$(".bodyer_11_btm_l_btm_3_1").css("transform", "translateX(-570px)")
		}) 
		$(".bodyer_11_btm_l_btm_3_jt_r").click(function() {
			$(".bodyer_11_btm_l_btm_3_1").css("transform", "translateX(0px)")
		})

		$(".bodyer_11_btm_l_btm_31").hover(function() {
			$(".bodyer_11_btm_l_btm_3_jt1").fadeIn()
		}, function() {
			$(".bodyer_11_btm_l_btm_3_jt1").fadeOut()
		}) 
		$(".bodyer_11_btm_l_btm_3_jt_l1").click(function() {
			$(".bodyer_11_btm_l_btm_3_11").css("transform", "translateX(-570px)")
		})
		$(".bodyer_11_btm_l_btm_3_jt_r1").click(function() {
			$(".bodyer_11_btm_l_btm_3_11").css("transform", "translateX(0px)")
		})
		/*主体11 的选项卡*/

		/*主体12 的选项卡*/
		$(".bodyer_12_btm_l_btm_3").hover(function() {
			$(".bodyer_12_btm_l_btm_3_jt").fadeIn()
		}, function() {
			$(".bodyer_12_btm_l_btm_3_jt").fadeOut()
		})
		$(".bodyer_12_btm_l_btm_3_jt_l").click(function() {
			$(".bodyer_12_btm_l_btm_3_1").css("transform", "translateX(-570px)")
		}) 
		$(".bodyer_12_btm_l_btm_3_jt_r").click(function() {
			$(".bodyer_12_btm_l_btm_3_1").css("transform", "translateX(0px)")
		})

		$(".bodyer_12_btm_l_btm_31").hover(function() {
			$(".bodyer_12_btm_l_btm_3_jt1").fadeIn()
		}, function() {
			$(".bodyer_12_btm_l_btm_3_jt1").fadeOut()
		}) 
		$(".bodyer_12_btm_l_btm_3_jt_l1").click(function() {
			$(".bodyer_12_btm_l_btm_3_11").css("transform", "translateX(-570px)")
		}) 
		$(".bodyer_12_btm_l_btm_3_jt_r1").click(function() {
			$(".bodyer_12_btm_l_btm_3_11").css("transform", "translateX(0px)")
		})
		/*主体12 的选项卡*/

		/*主体13 的选项卡*/
		$(".bodyer13_1_btm_2").hover(function() {
			$(".bodyer13_1_btm_2jt").fadeIn()
		}, function() {
			$(".bodyer13_1_btm_2jt").fadeOut()
		}) 
		$(".bodyer13_1_btm_2_l1").click(function() {
			$(".bodyer13_1_btm_2_1").css("transform", "translateX(-380px)")
		}) 
		$(".bodyer13_1_btm_2_r1").click(function() {
			$(".bodyer13_1_btm_2_1").css("transform", "translateX(0px)")
		})
		/*1*/
		$(".bodyer13_1_btm_3").hover(function() {
			$(".bodyer13_1_btm_3jt").fadeIn()
		}, function() {
			$(".bodyer13_1_btm_3jt").fadeOut()
		})
		$(".bodyer13_1_btm_3_l1").click(function() {
			$(".bodyer13_1_btm_2_2").css("transform", "translateX(-380px)")
		}) 
		$(".bodyer13_1_btm_3_r1").click(function() {
			$(".bodyer13_1_btm_2_2").css("transform", "translateX(0px)")
		})
		/*2*/
		$(".bodyer13_1_btm_4").hover(function() {
			$(".bodyer13_1_btm_4jt").fadeIn()
		}, function() {
			$(".bodyer13_1_btm_4jt").fadeOut()
		})
		$(".bodyer13_1_btm_4_l1").click(function() {
			$(".bodyer13_1_btm_2_3").css("transform", "translateX(-380px)")
		})
		$(".bodyer13_1_btm_4_r1").click(function() {
			$(".bodyer13_1_btm_2_3").css("transform", "translateX(0px)")
		})
		/*主体13 的选项卡*/