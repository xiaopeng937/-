var a=null; //取男女性别
var music=1;

$(function(){
	var audio = $("#bg-music")[0];
	$('#showOn').click(function(){
		$('#showOn').toggle();
		$('#showOff').toggle();
		music=0;
		audio.pause(); 
	});
	$('#showOff').click(function(){
		$('#showOn').toggle();
		$('#showOff').toggle();
		music=1;
		audio.play(); 
	});
	
	$("#boy").click(function(){
		$('#boy').addClass("selected");
		$('#girl').removeClass("selected");
		a="boy";
	});
	$("#girl").click(function(){
		$('#girl').addClass("selected");
		$('#boy').removeClass("selected");
		a="girl";
	});
	
	$("#img_boy").click(function(){
		$("#boy").click();
	});
	
	$("#img_girl").click(function(){
		$("#girl").click();
	});
	
	$('#GoClick').click(function(){
		window.location.href="loading.html?sex="+a+"&m="+music;
//		if(a==="boy"){
//			window.location.href="loading.html?sex="+a;
//		}else if(a==="girl"){
//			window.location.href="loading.html?sex="+a;
//		}else{
//			alert("请选择性别后再确定！")
//		}
	});
});