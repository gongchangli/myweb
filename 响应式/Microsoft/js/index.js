$(function(){
 
var sltp;

$(window).scroll(function(){
	sltp=$(document).scrollTop();
	if (sltp>=50) {
		$("#topnav").fadeOut()
	} else{
		$("#topnav").fadeIn()
	}
})


































})
