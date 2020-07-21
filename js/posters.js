var str = location.href; //获取到整个地址
var num = str.indexOf("?");//获取？后面的数据
str = str.substr(num+1); 
var keyValue = str.split("&"); 
var obj = {};
for (var i = 0; i < keyValue.length; i++) {
        var item = keyValue[i].split("=");
//		var item = str.split("/");
//      alert(item[1]);
        obj[i] = item[1];
};

var s = obj[0];

$(function(){
	$('img#m').attr("src",s);
	
	$('#FHbutton').click(function(){
		window.location.href="BGchoose.html?sex="+obj[1]+"&t=" + obj[2] + "&f=" + obj[3];
	});
});

//img/B1/boy1-1.png