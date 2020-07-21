var str = location.href; //获取到整个地址
var num = str.indexOf("?");
str = str.substr(num + 1);
var MusicID=document.getElementById("music");
var keyValue = str.split("&"); 
var obj = {};
for (var i = 0; i < keyValue.length; i++) {
        var item = keyValue[i].split("=");
//		var item = str.split("/");
//      alert(item[0]);
        obj[i] = item[1];
};
var url =obj[0];
var m = obj[1];
function LoadingBar(id) {
	this.loadbar = $("#" + id);
	this.percentEle = $(".percent", this.loadbar);
	this.percentNumEle = $(".percentNum", this.loadbar);
	this.max = 100;
	this.currentProgress = 0;
}
LoadingBar.prototype = {
	constructor: LoadingBar,
	setMax: function(maxVal) {
		this.max = maxVal;
	},
	setProgress: function(val) {
		if(val >= this.max) {
			val = this.max;
		}
		this.currentProgress = parseInt((val / this.max) * 100) + "%";
		this.percentEle.width(this.currentProgress);
		this.percentNumEle.text(this.currentProgress);
		
	}
};

$(function() {
	var audio = $("#bg-music")[0];
	//判断音乐是否关闭
	if(m==="0"){
		$('#showOn').toggle();
		$('#showOff').toggle();
		audio.pause();
	}
	//
	var loadbar = new LoadingBar("loadBar01");
	var max = 1000;
	loadbar.setMax(max);
	var i = 0;
	var time = setInterval(function() {
		loadbar.setProgress(i);
		if(i == max) {
			clearInterval(time);
//			if(str==="boy"){
//				window.location.href="boy.html";
//			}else if(str==="girl"){
//				window.location.href="girl.html";
//			}else{
//				alert("请选择性别后再做此操作！");
//				window.location.href="index.html";
//			} 
			window.location.href=obj[0]+".html?m="+m;
			return; 
		}
		i += 4;
	}, 39);
	//music
	$('#showOn').click(function(){
		$('#showOn').toggle();
		$('#showOff').toggle();
		m="0";
		audio.pause();
	});
	$('#showOff').click(function(){
		$('#showOn').toggle();
		$('#showOff').toggle();
		m="1";
		audio.play();
	});
});