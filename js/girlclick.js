var str = location.href; //获取到整个地址
var num = str.indexOf("?");
str = str.substr(num + 3);
var m=str;
var t =1;
var f =4;
$(function() {
	var audio = $("#bg-music")[0];
	if(str==="0"){
		$('#showOn').toggle();
		$('#showOff').toggle();
		audio.pause();
	}
	//music
	$('#showOn').click(function(){
		$('#showOn').toggle();
		$('#showOff').toggle();
		m=0;
		audio.pause();
	});
	$('#showOff').click(function(){
		$('#showOn').toggle();
		$('#showOff').toggle();
		m=1;
		audio.play();
	});
	
	$('#fase').click(function() {
		//		$(this).siblings('ul').toggle().parent().siblings('li').hide();
		$(this).siblings('ul').toggle().parent().toggleClass("Top1").siblings('li').toggle();
		$(this).siblings('p').toggle();
		if($(this).attr("src") == "img/faseOff.png") {
			$(this).attr("src", "img/faseOn.png")
		} else {
			$(this).attr("src", "img/faseOff.png")
		}
	});

	$('#fushi').click(function() {
		//		$(this).siblings('ul').toggle().parent().siblings('li').hide();
		$(this).siblings('ul').toggle().parent().toggleClass("Top1").siblings('li').toggle();
		$(this).siblings('p').toggle();
		if($(this).attr("src") == "img/fuOff.png") {
			$(this).attr("src", "img/fuOn.png")
		} else {
			$(this).attr("src", "img/fuOff.png")
		}
	});
	//T
	$('.nav>li>img').click(function() {
		var ID = $(this).attr('id');
		switch(ID) {
			case 'tou1':
				$('.right>img#m1').attr("src","img/girlT1.png");
				t=1;
				break;
			case 'tou2':
				$('.right>img#m1').attr("src","img/girlT2.png");
				t=2;
				break;
			case 'tou3':
				$('.right>img#m1').attr("src","img/girlT3.png");
				t=3;
				break;
			case 'tou4':
				$('.right>img#m1').attr("src","img/girlT4.png");
				t=4;
				break;
			default:
				$('.right>img#m1').attr("src","img/girlT1.png");
		}
	});
	//服饰
	$('.nav2>li>img').click(function() {
		var ID = $(this).attr('id');
		switch(ID) {
			case 'fu1':
				$('.right>img#m2').attr("src","img/girlF1.png");
				f=1;
				break;
			case 'fu2':
				$('.right>img#m2').attr("src","img/girlF2.png");
				f=2;
				break;
			case 'fu3':
				$('.right>img#m2').attr("src","img/girlF3.png");
				f=3;
				break;
			case 'fu4':
				$('.right>img#m2').attr("src","img/girlF4.png");
				f=4;
				break;
			default:
				$('.right>img#m2').attr("src","img/girlF4.png");
		}
	});
	
	$('#aGain').click(function(){
		$('.right>img#m1').attr("src","img/girlT1.png");
		$('.right>img#m2').attr("src","img/girlF4.png");
		return false;
	})
	
	$("#BGclick").click(function(){
		window.location.href="BGchoose.html?sex=girl&t="+t+"&f="+f+"&m="+m;
	});

});