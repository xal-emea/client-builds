var bg=document.getElementById("bg"),flag=document.getElementById("flag"),light=document.getElementById("light"),backText=document.getElementById("backText"),d_line=document.getElementById("dottedLine"),man=document.getElementById("man"),sun=document.getElementById("sun"),txt1=document.getElementById("text1"),txt2=document.getElementById("text2"),txt3=document.getElementById("text3"),txt4=document.getElementById("text4"),fTxt1=document.getElementById("footerText1"),fTxt2=document.getElementById("footerText2"),fTxt3=document.getElementById("footerText3"),fTxt4=document.getElementById("footerText4"),cta=document.getElementById("button"),top=document.getElementById("top"),footer=document.getElementById("footer");setTimeout(function(){bg.className+=" anim",flag.className+=" anim",man.className+=" anim",txt1.style.cssText="opacity:1;",light.style.cssText="opacity:1;",fTxt1.style.cssText="opacity:1;",fTxt2.style.cssText="opacity:1;",fTxt3.style.cssText="opacity:1;"},10),setTimeout(function(){txt1.style.cssText="opacity:0; left:50px;",txt2.style.cssText="opacity:1;",fTxt1.style.cssText="opacity:0;",fTxt2.style.cssText="opacity:0;",fTxt3.style.cssText="opacity:0;"},2500),setTimeout(function(){fTxt4.style.cssText="opacity:1;"},2600),setTimeout(function(){fTxt4.style.cssText="opacity:0;",txt2.style.cssText="opacity:0; left:50px;",txt3.style.cssText="opacity:1;",fTxt1.style.cssText="opacity:1;",fTxt2.style.cssText="opacity:1;",fTxt3.style.cssText="opacity:1;"},5e3),setTimeout(function(){sun.style.cssText="z-index:10;",light.style.cssText="opacity:0;",txt3.style.cssText="opacity:0; left:50px;",txt4.style.cssText="opacity:1;",backText.style.cssText="opacity:1;",cta.style.cssText="height:33px;"},8500),setTimeout(function(){flag.style.cssText="transition:all .2s;-webkit-transition:all .2s;opacity:0;",flag2.style.opacity="1"},15e3);