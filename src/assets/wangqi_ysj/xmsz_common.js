//头部
$(function () {
	$('.nav').click(function () {
		if ($(window).width() < 768) {
			$(".menu").height($("body").height());
			$('.menu').slideToggle(300);
			$(this).toggleClass("nav1");
		} else {
			if ($(this).hasClass("nav1")) {
				$(this).removeClass("nav1");
				$(".menu").animate({
					"left": "0",
					opacity: "show"
				});
			} else {
				$(this).addClass("nav1");
				$(".menu").animate({
					"left": "100px",
					opacity: "hide"
				});
			}
			return false;
		}
	});
});
$(function () {
	$(".foot_1 a:eq(0)").addClass("hover");
	$(".foot1 dt .foot2:eq(0)").show();
	$('.foot_1 a').hover(function () {
		$(this).addClass('hover').siblings().removeClass('hover');
		$('.foot1 dt .foot2:eq(' + $(this).index() + ')').show().siblings().hide();
	});
});

$('.mobile_foot1').html($('.foot .foot1 .foot2').html());

//$(".banner .swiper-slide:eq(0)").addClass("ba1")
$(".banner .swiper-slide:eq(2)").addClass("ba3");
/*$(function(){
	//获取要定位元素距离浏览器顶部的距离
	var navH = $(window).width()/2;
	//滚动条事件
	$(window).scroll(function(){
		//获取滚动条的滑动距离
		var scroH = $(this).scrollTop();
		//滚动条的滑动距离大于等于定位元素距离浏览器顶部的距离，就固定，反之就不固定
		if(scroH>=navH){
		$(".bodyright").show();
		}else if(scroH<navH){
		$(".bodyright").hide();
		}
	});
});*/

$(".bodyright").show();

jQuery.fn.float = function (settings) {
	if (typeof settings == "object") {
		settings = jQuery.extend({
			//延迟
			delay: 1000,
			//位置偏移
			offset: {
				left: 0,
				right: 0,
				top: 0,
				bottom: 0
			},
			position: "rm" //位置
		}, settings || {});
		var winW = $(window).width();
		var winH = $(window).height();

		//根据参数获取位置数值
		function getPosition($applyTo, position) {
			var _pos = null;
			switch (position) {
				case "rm":
					$applyTo.data("offset", "right");
					$applyTo.data("offsetPostion", settings.offset.right);
					_pos = {
						right: settings.offset.right,
						top: winH / 2 - $applyTo.innerHeight() / 2
					};
					break;
				case "lm":
					$applyTo.data("offset", "left");
					$applyTo.data("offsetPostion", settings.offset.left);
					_pos = {
						left: settings.offset.left,
						top: winH / 2 - $applyTo.innerHeight() / 2
					};
					break;
				case "rb":
					_pos = {
						right: settings.offset.right,
						top: winH - $applyTo.innerHeight()
					};
					break;
				case "lb":
					_pos = {
						left: settings.offset.left,
						top: winH - $applyTo.innerHeight()
					};
					break;
				case "l":
					_pos = {
						left: settings.offset.left,
						top: settings.offset.top
					};
					break;
				case "r":
					_pos = {
						right: settings.offset.right,
						top: settings.offset.top
					};
					break;
				case "t":
					$applyTo.data("offset", "top");
					$applyTo.data("offsetPostion", settings.offset.top);
					_pos = {
						left: settings.offset.left,
						top: settings.offset.top
					};
					break;
				case "b":
					$applyTo.data("offset", "bottom");
					$applyTo.data("offsetPostion", settings.offset.bottom);
					_pos = {
						left: settings.offset.left,
						top: winH - $applyTo.innerHeight()
					};
					break;
			}
			return _pos;
		}
		//设置容器位置
		function setPosition($applyTo, position, isUseAnimate) {
			var scrollTop = $(window).scrollTop();
			var scrollLeft = $(window).scrollLeft();
			var _pos = getPosition($applyTo, position);
			_pos.top += scrollTop;
			isUseAnimate && $applyTo.stop().animate(_pos, settings.delay) || $applyTo.css(_pos);
		}
		return this.each(function () {
			var $this = $(this);
			$this.css("position", "absolute");
			settings.style && $this.css(settings.style);
			setPosition($this, settings.position);
			$(this).data("isAllowScroll", true);
			$(window).scroll(function () {
				$this.data("isAllowScroll") && setPosition($this, settings.position, true);
			});
		})
	} else {
		var speed = arguments.length > 1 && arguments[1] || "fast";
		this.each(function () {
			if (settings == "clearOffset") {
				var _c = {};
				if ($(this).data("offset")) {
					_c[$(this).data("offset")] = 0;
					$(this).data("isAllowScroll", false);
					$(this).stop().animate(_c, speed);
				}
			} else if (settings == "addOffset") {
				var _c = {};
				if ($(this).data("offset") && $(this).data("offsetPostion")) {
					_c[$(this).data("offset")] = $(this).data("offsetPostion");
					$(this).stop().animate(_c, speed);
					$(this).data("isAllowScroll", true);
				}

			} else if (settings == "setScrollDisable") {
				$(this).data("isAllowScroll", false);
			} else if (settings == "setScrollUsable") {
				$(this).data("isAllowScroll", true);
			}
		})
	}
}

//index
$(function () {
	$(".index_menu li:eq(0)").addClass("hover");
	//$(".index_pc dl:gt(0)").hide();
	$('.index_menu li').click(function () {
		$(this).addClass('hover').siblings().removeClass('hover');
		//$('.index_pc dl:eq('+$(this).index()+')').show().siblings().hide();	
	});
});


if ($(window).width() < 768) {

	//$(".index_pc dl").find("dd:gt(2)").addClass("index_nosee")
	//$('.index_pc').width($(window).width()+2);
	$(".footer").height($(".mobile_foot1").height() + 115);
	$('.head_fx').addClass('activehead');
	$('header').addClass('activehead');

	$('#gotop').click(function () {
		$('html,body').animate({
			scrollTop: '0px'
		}, 400);
	});

	var activen=0;




	$(window).scroll(function () {
		if ($(window).scrollTop() >= 10) {
			$('.mobile_foot').show();

			if(activen==0){
			$('#mobileNav .dropbtn').removeClass('isActive');
			$('#mobileNav').removeClass('navOn');
			$('header').removeClass('activehead');
			}
			$('.head_fx').removeClass('activehead');


		} else {

			$('.mobile_foot').hide();
			$('#mobileNav .dropbtn').addClass('isActive');
			$('#mobileNav').addClass('navOn');
			$('header').addClass('activehead');
			$('.head_fx').addClass('activehead');

		}
	});





} else {
	//$('.index_pc').width($(window).width()+4);
	//$(".footer").height($(".foot_pc").height()+$(".foot").height())
}


$(".index_menu li:last").addClass("index_last");
$(function () {
	$('.index dl dd').hover(function () {
		$(this).toggleClass('hover').siblings().removeClass('hover');
		$(this).find("em i").show(300).parents(".index dl dd").siblings("em i").hide(300);
	});
});

$(function () {
		$(".index3_top li:eq(0)").addClass("hover");
		$(".index3_list ul:eq(0)").show();
		$('.index3_top li').hover(function () {
			$(this).addClass('hover').siblings().removeClass('hover');
			$('.index3_list ul:eq(' + $(this).index() + ')').show().siblings().hide();
		});
	})
	//$(".index4_list").height($(".index4_list li").height()+$(".index4_list li").height())
$(".foot_pc dd").height($(".foot_pc dl").height() - 6)


$(function () {
	$('.bodyright dd').hover(function () {
		$(this).toggleClass('hover');
		$(this).find("p").toggle();
	});
})
$('.bodyright dt').click(function () {
	$('html,body').animate({
		scrollTop: '0px'
	}, 300); //返回顶部所用的时间 返回顶部也可调用goto()函数
});

//成功案例
$(function () {
	$('.case_list li').hover(function () {
		$(this).toggleClass("hover");
	});
})
$(".case_list li:nth-child(3n)").addClass("case_nr")
	//$(".case_list li:nth-child(3n)").after("<li class='case_clear'></li>")

//新闻
$(".news_4 li:last").addClass("new_4n");

//邮件
$(function () {
	$(".mail_one2 span:eq(0)").addClass("hover");
	$(".mail_one3 ul:eq(0)").show();
	$('.mail_one2 span').hover(function () {
		$(this).addClass('hover').siblings().removeClass('hover');
		$('.mail_one3 ul:eq(' + $(this).index() + ')').show().siblings().hide();
	});
})
$(".mail_one3 li:even").addClass("mail_odd");
$(".mail_three .swiper-slide tr:even").addClass("mail_t1");
$(".mail_2 li:odd").addClass("ml_r");
$(function () {
	$('.mail_three1 dt span').click(function () {
		$(".blackscreen").fadeIn();
		$('.mail_enter').show();
	});
	$('.mail_enter .mail_enter1 .mail_1 span').click(function () {
		$(".blackscreen").fadeOut();
		$('.mail_enter').hide();
	});
	$('.blackscreen').click(function () {
		$(".blackscreen").fadeOut();
		$('.mail_enter').hide();
	});
})
$(".res .pagination li:last").addClass("reslast");


//about
//$(".about1").height($(window).height()-$("header").height());

//app
$(".app_three1 li:odd").after("<li class='appclear'></li>")

//$(".res1").height($(window).height()-$("header").height());
//咨询
$(function () {
	$(".one_z1 li:eq(0)").addClass("hover");
	$(".one_act .one_act1:eq(0)").show();
	$('.one_z1 li').hover(function () {
		$(this).addClass('hover').siblings().removeClass('hover');
		$('.one_act .one_act1:eq(' + $(this).index() + ')').show().siblings().hide();
	});
})
$(".zx_tc").css('max-height', $(window).height() * 0.8);
$(function () {
	$('.zx_four dl dt .zx_open').click(function () {
		$(".blackscreen").show();
	});
	$('.zx_tc .close1').click(function () {
		$(".blackscreen").hide();
		$('.zx_tc').hide();
	});
})
$(".zx_four dl dt:odd").addClass("zxodd")


var set_pc_height;
if ($(".index_pc").length > 0) {
	set_pc_height = self.setInterval("chk_height()", 50);
}

function chk_height() {
	var img_height = $(".index_pc dl dt img").height();
	if (img_height > 0) {
		setHeight(img_height)
	}
}

function setHeight(img_height) {
	$(".index_pc dl dd").height(img_height);
	set_pc_height = window.clearInterval(set_pc_height);
}
