window.onload = function() {
	document.addEventListener('plusready', function(){
   			//console.log("所有plus api都应该在此事件发生后调用，否则会出现plus is undefined。"
   			
   		});
   		var doc = document;
        var win = window;
        function initFontSize(){
            var docEl = doc.documentElement;
            resizeEvt = 'orientationchange' in window ? 'orientationchange':'resize';   //判断窗口有没有orientationchange这个方法，有就赋值给一个变量，没有就返回resize方法。
            recalc = function () {
                var clientWidth = docEl.clientWidth;
                if(!clientWidth) return;
                fontSizeRate = (clientWidth / 640);
                var baseFontSize = 100*fontSizeRate;
                docEl.style.fontSize = baseFontSize + 'px';
              //  console.log(baseFontSize);
            };
            recalc();
            if(!doc.addEventListener) return;
            win.addEventListener(resizeEvt.recalc,false);
            doc.addEventListener('DOMContentLoaded',recalc,false);
        }
        initFontSize();    


}