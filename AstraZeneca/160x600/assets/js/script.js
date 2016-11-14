// SET OUR VARIABLES
var bg = document.getElementById("bg");
var flag = document.getElementById("flag");
var light = document.getElementById("light");
var backText =document.getElementById("backText");

var txt1 = document.getElementById("text1");
var txt2 = document.getElementById("text2");
var txt3 = document.getElementById("text3");
var txt4 = document.getElementById("text4");

var fTxt1 = document.getElementById("footerText1");
var fTxt2 = document.getElementById("footerText2");
var fTxt3 = document.getElementById("footerText3");
var fTxt4 = document.getElementById("footerText4");
var cta = document.getElementById("button");

var top = document.getElementById("top");
var footer = document.getElementById("footer");

// SET TIMEOUTS FOR ANIMATIONS
setTimeout(function(){
	bg.className +=" anim";
	flag.className +=" anim";

	fTxt1.style.cssText = "left: 50%;transform: translate(-50%, 0);";
	fTxt2.style.cssText = "left: 50%;transform: translate(-50%, 0);";
	fTxt3.style.cssText = "left: 50%;transform: translate(-50%, 0);";

	footer.style.cssText = "height:70px;opacity:1;";
},10);

setTimeout(function(){
	txt1.style.cssText = "opacity:1;left:4px;";
	light.style.cssText = "opacity:1;";
},400);

setTimeout(function(){
	txt1.style.cssText = "opacity:0;left:0px;";
	txt2.style.cssText = "opacity:1;left:10px;";

	fTxt1.style.cssText = "opacity:0;";
	fTxt2.style.cssText = "opacity:0;";
	fTxt3.style.cssText = "opacity:0;";

	footer.style.cssText = "height:30px;";
	
},3500);

setTimeout(function(){
	fTxt4.style.cssText = "left: 50%;transform: translate(-50%, 0);";
},3600);

setTimeout(function(){
	fTxt4.style.cssText = "opacity:0;";
	txt2.style.cssText = "opacity:0;left:0px;";
	txt3.style.cssText = "opacity:1;left:10px;";

	fTxt1.style.cssText = "left: 50%;transform: translate(-50%, 0);opacity:1;";
	fTxt2.style.cssText = "left: 50%;transform: translate(-50%, 0);opacity:1;";
	fTxt3.style.cssText = "left: 50%;transform: translate(-50%, 0);opacity:1;";

	footer.style.cssText = "height:70px;";
	backText.style.cssText = "height:100%;";
},6000);

setTimeout(function(){
	backText.style.cssText = "height:0%;";

	txt3.style.cssText = "opacity:0;left:0px;";
	txt4.style.cssText = "opacity:1;left:10px;";

	cta.style.cssText = "height:33px;";
},8500);

setTimeout(function(){
	flag.style.cssText = "transition:all .2s;-webkit-transition:all .2s;opacity:0;";
	flag2.style.opacity = "1";
},15000);