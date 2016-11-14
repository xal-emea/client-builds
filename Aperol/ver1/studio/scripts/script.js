// JavaScript Document
window.onload = initEB;

var container;

function initEB() {
	if (EB.isInitialized()) {
		startAd();
	}
	else {
		EB.addEventListener(EBG.EventName.EB_INITIALIZED, startAd);
	}
}

function sendMessageToCustomScript(message) {
	message.adId = EB._isLocalMode ? null : EB._adConfig.adId;
	window.parent.postMessage(JSON.stringify(message), "*" );
}

function startAd(){
	container = document.getElementById('container');
	


	addEventListeners();

	sendMessageToCustomScript({
		type: "modifyBanner",
		isFloating: false,
		isPushdown: true,
		style: {
			width:'100%',
			height:'100px',
			clip: "rect(auto auto auto auto)"
		}
	});

	sendMessageToCustomScript({
		type:"setStyle",
		selector:"#ebDiv" + EB._adConfig.rnd,
		style: {
			width:"100%",
			height:"100px"
		}
	});
}

function addEventListeners(){
	container.onclick = function(){ EB.clickthrough(); };
}