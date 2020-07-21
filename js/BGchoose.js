var str = location.href; //获取到整个地址
var num = str.indexOf("?");//获取？后面的数据
str = str.substr(num+1);  //sex=girl$t=1&f=4
var keyValue = str.split("&"); 
var obj = {};
for (var i = 0; i < keyValue.length; i++) {
        var item = keyValue[i].split("=");
//      alert(item[1]);
        obj[i] = item[1];
};
var sex = obj[0];
var t = obj[1];
var f = obj[2];
var all = t+f;

$(function(){
	var audio = $("#bg-music")[0];
	if(obj[3]==="0"){
		$('#showOn').toggle();
		$('#showOff').toggle();
		audio.pause();
	}
	//music
	$('#showOn').click(function(){
		$('#showOn').toggle();
		$('#showOff').toggle();
		var m=0;
		audio.pause();
	});
	$('#showOff').click(function(){
		$('#showOn').toggle();
		$('#showOff').toggle();
		var m=1;
		audio.play();
	});
	
	switch(sex) {
		case 'girl':
			//初始化B景
			var img = "img/B1/girl"+t+"-"+f+".png";
			$('img#m').attr("src",img);
			
			//选择B景
			$('#BG1').click(function(){
				$('img#m').attr("src",img);
			});
			$('#BG2').click(function(){
				$('img#m').attr("src","img/B2/girl"+t+"-"+f+".png");
			});
			$('#BG3').click(function(){
				$('img#m').attr("src","img/B3/girl"+t+"-"+f+".png");
			});
			$('#BG4').click(function(){
				$('img#m').attr("src","img/B4/girl"+t+"-"+f+".png");
			});
			break;
		case 'boy':
			//初始化B景
			var img = "img/B1/boy"+t+"-"+f+".png";
			$('img#m').attr("src",img);
			
			//选择B景
			$('#BG1').click(function(){
				$('img#m').attr("src",img);
			});
			$('#BG2').click(function(){
				$('img#m').attr("src","img/B2/boy"+t+"-"+f+".png");
			});
			$('#BG3').click(function(){
				$('img#m').attr("src","img/B3/boy"+t+"-"+f+".png");
			});
			$('#BG4').click(function(){
				$('img#m').attr("src","img/B4/boy"+t+"-"+f+".png");
			});
			break;
		default:
			alert("请选择人物");
			window.location.href="index.html";
	}
	//返回按钮
	$('#FHbutton').click(function(){
		if(sex==="girl"){
			$('#FHbutton').attr("href","girl.html");
		}else{
			$('#FHbutton').attr("href","boy.html");
		}
		
	});
	
	//生成海报按钮
	$("#Posters").click(function(){
		var url = $('#img img').attr("src");
		window.location.href="posters.html?src="+url+"&sex="+sex+"&t="+t+"&f="+f;
	});
});
