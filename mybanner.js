/*
	banner切换插件	
*/
(function($){
	$.fn.banner = function(options){
		var banner = this,
			img = banner.find("a"),
			imgLen = img.length,
			index = 0;
		var options = $.extend(options);
		var bannerDh = "<div class='banner-dh'>";
		for(var i = 0;i<imgLen;i++){
			bannerDh += "<span></span>";
		}
		bannerDh += "</div>"
		banner.append(bannerDh);
		var span = banner.find(".banner-dh span");
		img.eq(0).css("right","0");
		span.eq(0).addClass("dhcurrent");
		/*点击按钮*/
		span.click(function(){
			$(this).addClass("dhcurrent").siblings().removeClass("dhcurrent");
			index = $(this).index();
			img.css("zIndex","1");
			img.eq(index).css("zIndex","3").animate({
				right:"0"
			},options.clickspeed,function(){
				img.eq(index).siblings().css({
					"zIndex":"1",
					"right":"-100%"
				})
			});
		})
		/*自动播放*/
		if(options.autoplay){
			time = setInterval(ap,options.autoSpeed);
			banner.mousemove(function(){
				clearInterval(time);
			});
			banner.mouseout(function(){
				time = setInterval(ap,options.autoSpeed);
			});
			function ap(){
				if(index == (img.length - 1)){
						index = -1;
				}
				index += 1;
				img.css("zIndex","1");
				img.eq(index).css("zIndex","3").animate({
						right:"0"
					},options.clickspeed,function(){
								img.eq(index).siblings().css("right","-100%");
							}
					);
				span.eq(index).addClass("dhcurrent").siblings().removeClass("dhcurrent");
				}
				
			}
		
		};
	
})(jQuery)