//关闭顶部导航广告
$(function() {
	$(".close_top").click(function(){
		$(this).toggleClass('add');
		$("#layout_adt").toggleClass('hide');
	});
	// 图片延迟加载
	$("img").lazyload({
		effect : "fadeIn",
		placeholder:"img/lazyload-bg.gif",   
	});
	//搜索下拉框
//	$(".search-keyword").focus(function(){
//		$(this).val("");
//	});
	var searchInfo=function(){
		var searchValue=$(".search-keyword").val()
		$.ajax({
			type:"get",
			url:"https://gsp0.baidu.com/5a1Fazu8AA54nxGko9WTAnF6hhy/su",
			async:true,
			data:{
				 wd: searchValue,
                 sc: 'hao123'
			},
			dataType:'jsonp',
			jsonp:'cb',
			cache:false,
			success:function(data){
				var ul=$(".search_result ul");
				var str = "";
				var dataList=data['s'];
				for( var k in dataList){
				 str += "<li>"+dataList[k]+"</li>"
				}
				ul.html(str);
			},
			error:function(error){
				console.error('没有获取到')
			}
			
		});
	};
	searchInfo()
	$(".search-keyword").keyup(function(){
		$(".search_result").show();
		searchInfo();
	});
	$("html").click(function(){
		$(".search_result").hide();
	})
		
	
	
})




//悬浮导航效果
$(document).ready(function() {
	//	var topMain=$("#charact").offset().top;
	//	alert(topMain);
	var Logo = $("#layout_float_nav");
	$(window).scroll(function() {
		if ($(window).scrollTop() > 700) {
			Logo.addClass("ScrollNav");
		} else {
			Logo.removeClass("ScrollNav");
		}
	});

});


//详细列表缓慢下拉效果 
//1我要先获取所有的有子下拉菜单的元素  x
//2我要获取所有子下拉菜单  y
//3我要给所有x元素加上hover事件
//4我要做出一个函数  鼠标移到x上去就显示y 并且附加下拉的动画
//5我点击谁就把效果给哪个y
$(document).ready(function() {
	$(".scrollx").hover(function() {
		$(this).find(".scrolly").stop().slideDown("slow");
		$(this).find('.shouji').addClass('h');
	}, function() {
		$(this).find(".scrolly").stop().slideUp("slow");
		$(this).find('.shouji').removeClass('h');
	});

});


//右侧从右边到左边效果
//我要获得最右边的小图标
//再获得要动的元素
//给他们分别设置width到100%动画

$(document).ready(function() {

	$('#right_float .yidong').hover(function() {

		$(this).find('.l_rw').stop().animate({
			'width': '50px'
		}, 400);
	}, function() {
		$(this).find('.l_rw').stop().animate({
			'width': '0px'
		}, 400);
	});



});
$(document).ready(function() {

	$('#right_float .yidong').hover(function() {

		$(this).find('.l_rw3').stop().animate({
			'width': '132px'
		}, 400);
	}, function() {
		$(this).find('.l_rw3').stop().animate({
			'width': '0px'
		}, 400);
	});



});
$(document).ready(function() {

	$('#right_float .yidong').hover(function() {

		$(this).find('.l_rw2').stop().animate({
			'width': '75px'
		}, 400);
	}, function() {
		$(this).find('.l_rw2').stop().animate({
			'width': '0px'
		}, 400);
	});



});



// 左侧滚动显示
//给窗口加滚动条事件
$(function() {
	var index=null;
	function srollFloat(){
		// 获得窗口滚动上去的距离
		var ling = $(document).scrollTop();
		// 如果滚动距离大于1320的时候让滚动框出来
		if (ling > 1320) {
			$('#float_left').show();
		}
		if (1320 < ling && ling < 2110) {
			// 让第一层的数字隐藏，文字显示，让其他兄弟元素的li数字显示，文字隐藏
			$('#float_left ul li').eq(0).find('.icon').hide().siblings('.name').css('display', 'block');
			$('#float_left ul li').eq(0).siblings('li').find('.icon').css('display', 'block').siblings('.name').hide();
			index=0;
		} else if (ling < 2700) {
			$('#float_left ul li').eq(1).find('.icon').hide().siblings('.name').css('display', 'block');
			$('#float_left ul li').eq(1).siblings('li').find('.icon').css('display', 'block').siblings('.name').hide();
			index=1;
		} else if (ling < 3160) {
			$('#float_left ul li').eq(2).find('.icon').hide().siblings('.name').css('display', 'block');
			$('#float_left ul li').eq(2).siblings('li').find('.icon').css('display', 'block').siblings('.name').hide();
			index=2;
		} else if (ling < 3696) {
			$('#float_left ul li').eq(3).find('.icon').hide().siblings('.name').css('display', 'block');
			$('#float_left ul li').eq(3).siblings('li').find('.icon').css('display', 'block').siblings('.name').hide();
			index=3;
		} else if (ling < 4224) {
			$('#float_left ul li').eq(4).find('.icon').hide().siblings('.name').css('display', 'block');
			$('#float_left ul li').eq(4).siblings('li').find('.icon').css('display', 'block').siblings('.name').hide();
			index=4;
		} else if (ling < 4752) {
			$('#float_left ul li').eq(5).find('.icon').hide().siblings('.name').css('display', 'block');
			$('#float_left ul li').eq(5).siblings('li').find('.icon').css('display', 'block').siblings('.name').hide();
			index=5;
		} else if (ling < 5280) {
			$('#float_left ul li').eq(6).find('.icon').hide().siblings('.name').css('display', 'block');
			$('#float_left ul li').eq(6).siblings('li').find('.icon').css('display', 'block').siblings('.name').hide();
			index=6;
		} else if (ling < 5808) {
			$('#float_left ul li').eq(7).find('.icon').hide().siblings('.name').css('display', 'block');
			$('#float_left ul li').eq(7).siblings('li').find('.icon').css('display', 'block').siblings('.name').hide();
			index=7;
		} else if (ling < 6336) {
			$('#float_left ul li').eq(8).find('.icon').hide().siblings('.name').css('display', 'block');
			$('#float_left ul li').eq(8).siblings('li').find('.icon').css('display', 'block').siblings('.name').hide();
			index=8;
		} else if (ling < 6864) {
			$('#float_left ul li').eq(9).find('.icon').hide().siblings('.name').css('display', 'block');
			$('#float_left ul li').eq(9).siblings('li').find('.icon').css('display', 'block').siblings('.name').hide();
			index=9;
		}
		if (ling > 6880 || ling < 1320) {
			$('#float_left').hide();
		}
	}
	
	$(window).bind('scroll',srollFloat);
	
	
	$('#float_left ul li').click(function(){
		index=$(this).index();
		$(this).find('.icon').hide().siblings('.name').css('display', 'block');
		$(this).siblings('li').find('.icon').css('display', 'block').siblings('.name').hide();
			$(window).unbind("scroll",srollFloat);
			if(index===0){
				$("body,html").animate({scrollTop:1902},500,function(){
					$(window).bind('scroll',srollFloat);
				});
			}else if(index===1){
				$("body,html").animate({scrollTop:2500},500,function(){
					$(window).bind('scroll',srollFloat);
				});
			}else if(index===2){
				
				$("body,html").animate({scrollTop:3000},500,function(){
					$(window).bind('scroll',srollFloat);
				});
			}else if(index===3){
				$("body,html").animate({scrollTop:3500},500,function(){
					$(window).bind('scroll',srollFloat);
				});
			}else if(index===4){
				$("body,html").animate({scrollTop:4100},500,function(){
					$(window).bind('scroll',srollFloat);
				});
			}else if(index===5){
				$("body,html").animate({scrollTop:4600},500,function(){
					$(window).bind('scroll',srollFloat);
				});
			}else if(index===6){
				$("body,html").animate({scrollTop:5100},500,function(){
					$(window).bind('scroll',srollFloat);
				});
			}else if(index===7){
				$("body,html").animate({scrollTop:5600},500,function(){
					$(window).bind('scroll',srollFloat);
				});
			}else if(index===8){
				$("body,html").animate({scrollTop:6100},500,function(){
					$(window).bind('scroll',srollFloat);
				});
			}else if(index===9){
				$("body,html").animate({scrollTop:6600},500,function(){
					$(window).bind('scroll',srollFloat);
				});
			}
	});
	
	$('#float_left ul li').hover(function() {
			$(this).find('.icon').hide().siblings('.name').css({
				'display': 'block',
				'background': '#fff',
				'color': '#666'
			});
		}, function() {
			var curIndex = $(this).index();
			if(curIndex == index){
				return;
			}
			$(this).find('.icon').css({
				'display': 'block',
				'background': '#f4f4f4',
				'color': '#B8B8B8'
			}).siblings('.name').hide().css({
				'display': 'none',
				'background': '',
				'color': ''
			});
		});
	//alert(curIndex);
})

	
//主要区域的tab切换
$(document).ready(function() {
	var li_tab = $('.floor_top .tab li');
	li_tab.mouseenter(function() {
		$(this).addClass('on');
		$(this).siblings().removeClass('on');
		var num = $(this).index();
		$(this).parents('.floor').find('.J-domLazy').eq(num).css('display', 'block');
		$(this).parents('.floor').find('.J-domLazy').eq(num).siblings('.J-domLazy').css('display', 'none');
	});


});

//底部社区轮转

$(document).ready(function() {
	var index = 0;
	var len = $(".hots-and-share-wai .J-domLazy").length; //获取到当前li的个数 并且减去1
	//当点击左按扭时的效果
	// alert(len);
	$(".floor-zone-main .switch-prev").click(function() {
		if (index == len) {
			index = 0
		};
		index++;
		$(".hots-and-share-wai .J-domLazy").eq(index).fadeIn().siblings().hide();
	});

	//当点击右按扭时的效果
	$(".floor-zone-main .switch-next").click(function() {
		if (index == 0) {
			index = len
		}
		index--;
		$(".hots-and-share-wai .J-domLazy").eq(index).fadeIn().siblings().hide();
	});


});


/*大图轮播*/

//需要获得的元素
//1、获得所有大图的集合      pics
//2、获得所有大li标签的集合    blis
//3、获得所有小li标签的集合   和 i的集合    slis   slii
//4、获得左右按钮   

//需要考虑的事件以及事件联动
//3、小i图标总是与大图相对应
//1、点击左右按钮  大图切换  大li上面的小i图标切换同时对应相应的大li背景改变  !!!!记得清除定时器
//2、鼠标放在大li上面  显示小li列表
//4、鼠标放在小li上切换图片
//5、每隔一秒切换一次图片 同时对应相应的大li  和小li 和i

$(document).ready(function() {
	//获得元素
	var pics = $('#main_pic .banner-pic ul li');
	var blis = $('#main_pic .banner-ctrl li');
	var slii = $('#main_pic .banner-ctrl li .ctrl-dot i');
	var slip = $('#main_pic .banner-ctrl li .title-item .title-list p');
	var lbtn = $('#layout_main_pic #main_pic .banner-prev');
	var rbtn = $('#layout_main_pic #main_pic .banner-next');
	var bbg = $('#layout_main_pic')

		//把几个条件关联一起的变量
	var index = 0;
	var arr = ['#c7032b','99cce1' ,'#9D5CFE', '#FFFFFF', '#c4010f', '#6539E6', '#FDAB01', '#DD073B', '#478FFE', '#CE46CE', '#5E21BD', '#EB1587', '#1A192B', '#FF0E3E', '#FFB500', '#F5091D', '#478FFE']
		//定义一个每秒运行的函数轮播图片
	function chan() {
		//pics.eq(index).parent('#main_pic .banner-pic').find('li').eq(index).siblings('li').css('display','none');
		pics.css('display', 'none');
		//console.log(pics.find('li').size());
		pics.eq(index).css('display', 'block');
		//让小按钮变成黄色
		slii.removeClass('yellow');
		slii.eq(index).addClass('yellow');
		//选中这个li标签
		slii.parent().removeClass('current');
		slii.eq(index).parent().addClass('current');
		//让li标签宽度变高同时改变成选中的颜色
		slii.parents('li').find('.bg').removeClass('current');
		slii.eq(index).parents('li').find('.bg').addClass('current');
		//让最外面背景改变
		bbg.css('background', arr[index]);
		index += 1;
		if (index >= pics.length) {
			index = 0
		};

	}
	timer = setInterval(chan, 2000);

	//点击效果  点击之后大图切换


	/*lbtn[0].onclick=function(){
		alert('gun');
		clearInterval(timer);
		if(index==pics.length){index=0};
		++index;
		pics.css('display','none');
		pics.eq(index).css('display','block');
	};*/
	lbtn.click(function() {
		//点击之后清空定时器
		clearInterval(timer);
		//通过判断使其自增同时改变图片

		if (index == 0) {
			index = pics.length
		};
		index--;
		bbg.css('background', arr[index]);
		pics.css('display', 'none');
		pics.eq(index).css('display', 'block');
		/*使下面li变化*/
		//让小按钮变成黄色
		slii.removeClass('yellow');
		slii.eq(index).addClass('yellow');
		//选中这个li标签
		slii.parent().removeClass('current');
		slii.eq(index).parent().addClass('current');
		//让li标签宽度变高同时改变成选中的颜色
		slii.parents('li').find('.bg').removeClass('current');
		slii.eq(index).parents('li').find('.bg').addClass('current');

	});

	rbtn.click(function() {
		//点击之后清空定时器
		clearInterval(timer);
		//通过判断使其自增同时改变图片
		if (index == pics.length) {
			index = 0
		}
		bbg.css('background', arr[index]);
		pics.css('display', 'none');
		pics.eq(index).css('display', 'block');
		/*使下面li变化*/
		//让小按钮变成黄色
		slii.removeClass('yellow');
		slii.eq(index).addClass('yellow');
		//选中这个li标签
		slii.parent().removeClass('current');
		slii.eq(index).parent().addClass('current');
		//让li标签宽度变高同时改变成选中的颜色
		slii.parents('li').find('.bg').removeClass('current');
		slii.eq(index).parents('li').find('.bg').addClass('current');
		//先运行代码后让其自增
		index++;

	});



	//鼠标在大图时候暂停定时器
	$('.banner-pic').mouseenter(function() {
		clearInterval(timer);
	});
	$('.banner-pic').mouseleave(function() {
		timer = setInterval(chan, 2000);
	});
	//鼠标放在li标签时  让li被选中current状态
	blis.mouseenter(function() {
		//鼠标移上去清除定时器
		clearInterval(timer);
		//清除自动动时候的li及其子元素上的样式
		slii.parent().removeClass('current');
		slii.parents('li').find('.bg').removeClass('current');
		//给li加上相应的鼠标移入事件

		$(this).addClass('mouse-hover').siblings().removeClass('mouse-hover');
		$(this).find('.title-item p:first-child i').addClass('yellow');
		//找到class为yellow的i 确认他现在的下标值 赋值给index并更改图片
		index = $(this).data('num');
		bbg.css('background', arr[index]);
		pics.css('display', 'none');
		pics.eq(index).css('display', 'block');

	});
	blis.mouseleave(function() {
		//鼠标开始定时器
		clearInterval(timer);
		$(this).find('.title-item p:last-child i').removeClass('yellow');
		timer = setInterval(chan, 2000);
		$(this).removeClass('mouse-hover');
		$(this).find('.bg').addClass('current');
		$(this).find('.ctrl-dot').addClass('current');
		slii.eq(index).addClass('yellow');
	});
	//鼠标放在p标签时候的状态
	$('.banner-ctrl p').mouseenter(function() {
		index = $('.banner-ctrl p').index(this);
		bbg.css('background', arr[index]);
		pics.css('display', 'none');
		pics.eq(index).css('display', 'block');
		$(this).find('i').removeClass('yellow');
		$(this).siblings().find('i').removeClass('yellow');
		$(this).children('i').addClass('yellow');
	});
	$('.banner-ctrl p').mouseleave(function() {
		//		index = $('.banner-ctrl p').index(this);
		slii.eq(index).addClass('yellow');
		slii.eq(index).siblings().removeClass('yellow');
	});

});