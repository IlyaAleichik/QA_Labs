////////////////////////////////////////////////////////////////////////////////////// VARS
var canvasAge,
    canvasInteractive, 
    canvasDarker,
    canvasDarkerAll,
    canvasButton, ctxButton,
    canvasLogo, ctxLogo,
    canvasGun,
    canvasPackshot,
    canvasPanel, ctxPanel,
    canvasWheel,
    canvasCogwheel_1,
    canvasCogwheel_2,
    canvasCogwheel_3,
    canvasSky,
    canvasGround,
    canvasTank,
    canvasAim,
    canvasPlate,
    canvasArrowL,
    canvasArrowR,
    canvasArrowPlateR,
    canvasArrowPlateL,
    canvasFinPlate,
    canvasFinText,
    ctxFinText,
    canvasSmoke,
    canvasShot,
    canvasPattern,
	w, h;
	
var imagesToLoad = 
	{
		button: "gfx/Button.png",
		logo: "gfx/Logo.jpg",
		gun: "gfx/Gun.png",
		packshot: "gfx/Packshot_HQ.jpg",
		panel: "gfx/Panel.png",
		wheel: "gfx/Wheel.png",
		cogwheel_1: "gfx/Cogwheel_1.png",
		cogwheel_2: "gfx/Cogwheel_2.png",
		cogwheel_3: "gfx/Cogwheel_3.png",
		sky: "gfx/Sky_MQ.jpg",
		tank: "gfx/Tank.png",
		smoke: "gfx/Smoke_Tiny.png",
		smoke_2: "gfx/Smoke_Tiny_2.png",
		ShotFire: "gfx/ShotFire.png",
		ShotSmoke: "gfx/ShotSmoke.png",
		patt: "gfx/Pattern.png",
		ground: "gfx/Ground_HQ.jpg"
 	};
	
var img_button = {},
    img_logo = {},
    img_darker = {},
    img_darkerAll = {},
    img_gun = {},
	img_age = {},
	img_packshot = {};
	img_panel = {},
	img_wheel = {},
	img_cogwheel_1 = {},
	img_cogwheel_2 = {},
	img_cogwheel_3 = {},
	img_sky = {},
	img_ground = {},
	img_tank = {},
	img_plate = {},
	img_arrowR = {},
	img_arrowL = {},
	img_arrowPlateR = {},
	img_arrowPlateL = {},
	img_finPlate = {},
	img_finText = {},
	img_again = {},
	img_smoke = {},
	img_smoke_2 = {},
	img_patt = {},
	img_aim = {};

var img_ShotFire = {};
var img_ShotSmoke = {};

var butY = 234;
var logoY = 450;
var aimRad = 21;
//
var overFl = false;
//
var requestID;
//
var txtPlateHeight = 50;
var plateStatus = 0;
//
var parallaxLeft = false;
var parallaxRight = false;
var gunSpeed = 0.3;
var groundSpeed = 0.3;
var skySpeed = 0.1;
var gunMove = false;
//
var mousePos = {
		x: 0,
		y: 0
		};
//
var countDownNum = 10;
var countDownFl = false;
//
var finTextStatus = 0;
var finTextFl = false;
//
var isButtonAppear = false;
var isButtonOver = false;
//
var packshotFl = false;
//
var autoplayTmr = 0;
//
var smokes = [];
var smokeName = 0;
var smokeCount = 0;
var smokeCountMax = 3;
var smokeFl = false;
//
var shotCount = 0;
var shotFl = false;
//
var autoPlayFl = false;
var gunAutoMove = false;
//
var gunX = 0
//
var firstAutoPlayFl = true;
//
var pattBottomDelta = 10;
//
var arrowRX = 85;
var arrowRY = 338;
var arrowLX = 98;
var arrowLY = 338;
var arrowAlphaL = 0;
var arrowAlphaR = 0;
var arrowRightFl = false;
var arrowLeftFl = false;
var animateArrowFl = false;
//
var smokeTankFl = false;
var replayFl = false;
////////////////////////////////////////////////////////////////////////////////////// FUNCTIONS
function start()
{
	canvasInteractive = document.querySelector("#Interactive");
	canvasAge =  document.querySelector("#Age");
	canvasDarker = document.querySelector("#Darker");
	canvasDarkerAll = document.querySelector("#DarkerAll");
	canvasButton = document.querySelector("#Button");
	ctxButton = canvasButton.getContext('2d');
	canvasLogo = document.querySelector("#Logo");
	ctxLogo  = canvasLogo.getContext('2d');
	canvasGun = document.querySelector("#Gun");
	canvasPackshot = document.querySelector("#Packshot");
	canvasPanel = document.querySelector("#Panel");
	ctxPanel  = canvasPanel.getContext('2d');
	canvasWheel = document.querySelector("#Wheel");
	canvasCogwheel_1 = document.querySelector("#Cogwheel_1");
	canvasCogwheel_2 = document.querySelector("#Cogwheel_2");
	canvasCogwheel_3 = document.querySelector("#Cogwheel_3");
	canvasAim = document.querySelector("#Aim");
	canvasSky = document.querySelector("#Sky");
	canvasGround = document.querySelector("#Ground");
	canvasTank = document.querySelector("#Tank");
	canvasPlate       = document.querySelector("#Plate");
	canvasArrowL       = document.querySelector("#ArrowL");
	canvasArrowR       = document.querySelector("#ArrowR");
	canvasArrowPlateR       = document.querySelector("#ArrowPlateR");
	canvasArrowPlateL       = document.querySelector("#ArrowPlateL");
	canvasFinPlate       = document.querySelector("#FinPlate");
	canvasFinText       = document.querySelector("#FinText");
	ctxFinText = canvasFinText.getContext('2d');
	canvasSmoke       = document.querySelector("#Smoke");
	canvasShot       = document.querySelector("#Shot");
	canvasPattern     = document.querySelector("#Pattern");
	//
	w = canvasInteractive.width; 
	h = canvasInteractive.height;
	//
	canvasInteractive.addEventListener('mouseover', mOver, false);
	canvasInteractive.addEventListener('mouseout', mOut, false);
	canvasInteractive.addEventListener('mousemove', mMove, false);
	canvasInteractive.addEventListener('click', mClick, false);
	//
	loadImages(imagesToLoad, function(imagesLoaded)
	{
		img_button.canvas     = canvasButton;
		img_logo.canvas       = canvasLogo;
		img_age.canvas        = canvasAge;
		img_darker.canvas     = canvasDarker;
		img_darkerAll.canvas  = canvasDarkerAll;
		img_gun.canvas        = canvasGun;
		img_packshot.canvas   = canvasPackshot;
		img_panel.canvas      = canvasPanel;
		img_wheel.canvas      = canvasWheel;
		img_cogwheel_1.canvas = canvasCogwheel_1;
		img_cogwheel_2.canvas = canvasCogwheel_2;
		img_cogwheel_3.canvas = canvasCogwheel_3;
		img_aim.canvas        = canvasAim;
		img_sky.canvas        = canvasSky;
		img_ground.canvas     = canvasGround;
		img_tank.canvas       = canvasTank;
		img_plate.canvas      = canvasPlate;
		img_again.canvas      = canvasPlate;
		img_arrowR.canvas      = canvasArrowR;
		img_arrowL.canvas      = canvasArrowL;
		img_arrowPlateR.canvas = canvasArrowPlateR;
		img_arrowPlateL.canvas = canvasArrowPlateL;
		img_finPlate.canvas   = canvasFinPlate;
		img_finText.canvas    = canvasFinText;
		img_patt.canvas       = canvasPattern;
		//
		img_button.pic        = imagesLoaded.button;
		img_logo.pic          = imagesLoaded.logo;
		img_gun.pic           = imagesLoaded.gun;
		img_packshot.pic      = imagesLoaded.packshot;
		img_panel.pic         = imagesLoaded.panel;
		img_wheel.pic         = imagesLoaded.wheel;
		img_cogwheel_1.pic    = imagesLoaded.cogwheel_1;
		img_cogwheel_2.pic    = imagesLoaded.cogwheel_2;
		img_cogwheel_3.pic    = imagesLoaded.cogwheel_3;
		img_sky.pic           = imagesLoaded.sky;
		img_ground.pic        = imagesLoaded.ground;
		img_tank.pic          = imagesLoaded.tank;
		img_smoke.pic         = imagesLoaded.smoke;
		img_smoke_2.pic       = imagesLoaded.smoke_2;
		img_ShotFire.pic      = imagesLoaded.ShotFire;
		img_ShotSmoke.pic     = imagesLoaded.ShotSmoke;
		img_patt.pic          = imagesLoaded.patt;	
		
		//
		requestID = window.requestAnimationFrame(update);
		//
		init();
	});
}


//
function init()
{
	//
    img_logo.alpha = 1;
	img_logo.scale = 1;
	img_logo.x = 68 * img_logo.scale + (w - img_logo.pic.width * img_logo.scale) / 2;
	img_logo.y = h + img_logo.pic.height / 2;
	drawLogo(ctxLogo, img_logo);
	//
	img_darker.alpha = 0.9;
	img_darker.scale = 1;
    drawDarker(img_darker)
	//
	img_darkerAll.alpha = 1;
    drawDarkerAll(img_darkerAll)
	//
	img_age.alpha = 0;
	//
	img_gun.alpha = 1;
	img_gun.x = w + 50
	img_gun.y = 0
	img_gun.scale = 1;
	drawGun(img_gun);
	//
	img_packshot.alpha = 0;
	img_packshot.scale = 1;
	img_packshot.x = w / 2;
	img_packshot.y = h / 2;
	drawPackshot(img_packshot);
	//
	img_panel.alpha = 1;
	img_panel.x = 0;
	img_panel.y = h;
	img_panel.scale = 1;

    img_wheel.alpha = 1;
	img_wheel.x = 92;
	img_wheel.y = h + 37;
	img_wheel.rot = 0;
	img_wheel.scale = 1;
	drawWheel(img_wheel);
	//
	img_cogwheel_1.alpha = 1;
	img_cogwheel_1.x = 108;
	img_cogwheel_1.y = h + 40;
	img_cogwheel_1.rot = 0;
	img_cogwheel_1.scale = 1;
	drawCogwheel_1(img_cogwheel_1);
	//
	img_cogwheel_2.alpha = 1;
	img_cogwheel_2.x = 135;
	img_cogwheel_2.y = h + 54;
	img_cogwheel_2.rot = 0;
	img_cogwheel_2.scale = 1;
	drawCogwheel_2(img_cogwheel_2);
	//
	img_cogwheel_3.alpha = 1;
	img_cogwheel_3.x = 174;
	img_cogwheel_3.y = h + 32;
	img_cogwheel_3.rot = 0;
	img_cogwheel_3.scale = 1;
	drawCogwheel_3(img_cogwheel_3);
	//
	img_aim.x = w;
	img_aim.y = 265;
	img_aim.alpha = 0;
	img_aim.scale = 1;
	drawAim(img_aim);
	//
	img_sky.x = -65;
	img_sky.y = 0;
	img_sky.scale = 1;
	drawSky(img_sky);
	//
	img_ground.x = -140;
	img_ground.y = 227;
	img_ground.scale = 1;
	drawGround(img_ground);
	//
	img_tank.alpha = 0;
	img_tank.x = 89;
	img_tank.y = 128;
	img_tank.scale = 0.84;
	drawTank(img_tank);
	//
	img_plate.x = w/2;
	img_plate.y = - 70;
	img_plate.height = txtPlateHeight;
	img_plate.txtNum = 0;
	//
	img_arrowPlateR.alpha = 0;
	img_arrowPlateR.x = 63;
	img_arrowPlateR.y = 358;
	img_arrowPlateR.scale = 1;
	drawArrowPlateR(img_arrowPlateR);
	//
	img_arrowPlateL.alpha = 0;
	img_arrowPlateL.x = 63;
	img_arrowPlateL.y = 358;
	img_arrowPlateL.scale = 1;
	drawArrowPlateL(img_arrowPlateL);
	//
	img_arrowR.alpha = 0;
	img_arrowR.x = arrowRX;
	img_arrowR.y = arrowRY ;
	img_arrowR.angR1 = 290;
	img_arrowR.angR2 = 290;
	img_arrowR.scale = 1;
	drawArrowR(img_arrowR)
	//
	img_arrowL.alpha = 0;
	img_arrowL.x = arrowLX;
	img_arrowL.y = arrowLY;
	img_arrowL.angL1 = 250;
	img_arrowL.angL2 = 250;
	img_arrowL.scale = 1;
	drawArrowL(img_arrowL)
	//
	img_finPlate.alpha = 0;
	img_finPlate.x = w /2 ;
	img_finPlate.y = h/2 - 100;
	img_finPlate.scale = 3;
	drawFinPlate(img_finPlate);
	//
	ctxFinText.alpha = 1;
	ctxFinText.x = w /2 ;
	ctxFinText.y = h/2;
	//
	butY = h-100;
	img_button.alpha = 0;
	img_button.scaleX = 2.8;
	img_button.scaleY = 2.8;
	img_button.x = w/2;
	img_button.y = butY;
    //
    img_again.height = 22;
	img_again.x = 0;
	img_again.y = h;
	img_again.isOver = false;
	img_again.paramG = 0;
	img_again.paramB = 0;
	drawPlateAgain(img_again);
	//
	img_patt.height = 150;
	img_patt.alpha = 1;
	img_patt.pos = "double"; // top = top pattern, bottom = bottom pattern, double = top & bottom pattern, 
	//
	 smokeFl = true;
     smokeTankFl = true;
	//
	//
	reqAnim()
	//
    startAnim()

}

function startAnim()
{
	TweenLite.to(img_plate, 1, {y:0, ease:Expo.easeOut, onUpdate:drawPlateText, onUpdateParams:[img_plate], delay:3.3});
    TweenLite.to(img_logo, 1, {y:logoY, ease:Expo.easeOut, onUpdate:drawLogo, onUpdateParams:[ctxLogo,img_logo], delay:3.3});
    TweenLite.to(img_aim, 2.2, {x:35, alpha:1, ease:Power2.easeInOut, onUpdate:drawAim, onUpdateParams:[img_aim], delay:1.2, onComplete:function()
    	{
    	   gunAutoMove = true;
           drawPanel(img_panel);
           drawPlateText(img_plate);
           drawButton(ctxButton, img_button);
           TweenLite.to(img_age, 1, {alpha:1, ease:Power0.easeNone, onUpdate:drawAge, onUpdateParams:[img_age], delay:0.7});
    	}});
    TweenLite.to(img_gun, 2, {x:8, ease:Power2.easeInOut, onUpdate:drawGun, onUpdateParams:[img_gun], delay:1.2});
    TweenLite.to(img_ground, 2, {x:-70, ease:Power2.easeInOut, onUpdate:drawGround, onUpdateParams:[img_ground], delay:1.3});
    TweenLite.to(img_sky, 2, {x:-15, ease:Power2.easeInOut, onUpdate:drawSky, onUpdateParams:[img_sky], delay:1.3});
	TweenLite.to(img_darkerAll, 2, {alpha:0,  onUpdate:drawDarkerAll, onUpdateParams:[img_darkerAll] ,delay:1});
}
//
function goSecondFrame()
{
	replayFl = true
	TweenLite.to(img_logo, 0.5, {y:h + img_logo.pic.height / 2, ease:Power2.easeOut, onUpdate:drawLogo, onUpdateParams:[ctxLogo, img_logo]});
	TweenLite.to(img_wheel, 0.9, {y:387, ease:Expo.easeOut, onUpdate:drawWheel, onUpdateParams:[img_wheel] });
	TweenLite.to(img_cogwheel_1, 0.9, {y:390, ease:Expo.easeOut, onUpdate:drawCogwheel_1, onUpdateParams:[img_cogwheel_1] });
	TweenLite.to(img_cogwheel_2, 0.9, {y:405, ease:Expo.easeOut, onUpdate:drawCogwheel_2, onUpdateParams:[img_cogwheel_2] });
	TweenLite.to(img_cogwheel_3, 0.9, {y:383, ease:Expo.easeOut, onUpdate:drawCogwheel_3, onUpdateParams:[img_cogwheel_3] });
	TweenLite.to(img_arrowPlateR, 0.9, {alpha:1, ease:Expo.easeOut, onUpdate:drawArrowPlateR, onUpdateParams:[img_arrowPlateR], delay:0.8});
	TweenLite.to(img_arrowPlateL, 0.9, {alpha:1, ease:Expo.easeOut, onUpdate:drawArrowPlateL, onUpdateParams:[img_arrowPlateL], delay:0.8});
	TweenLite.to(img_arrowL, 0.9, {alpha:arrowAlpha = 0, y:arrowLY, ease:Expo.easeOut, onUpdate:drawArrowL, onUpdateParams:[img_arrowL], delay:0.8});
	TweenLite.to(img_arrowR, 0.9, {alpha:arrowAlpha = 0, y:arrowRY, ease:Expo.easeOut, onUpdate:drawArrowR, onUpdateParams:[img_arrowR], delay:0.8});
	TweenLite.to(img_cogwheel_3, 0.1, {alpha:1, ease:Expo.easeOut, onUpdate:drawCogwheel_3, onUpdateParams:[img_cogwheel_3], delay:0.6, onComplete:function()
		{
			animateArrowFl = true;
			arrowAlphaR = 0.8;
			arrowAlphaL = 0.8;
			animateArrow();
		}});
	TweenLite.to(img_panel, 0.9, {y:385, ease:Expo.easeOut, onUpdate:drawPanel, onUpdateParams:[img_panel],  onComplete:function()
		{
			countDownFl = true;
			setTimeout(timer,1000);
			gunMove = true;
		}});
	TweenLite.to(img_plate, 0.6, {y:-70, ease:Power2.easeOut, onUpdate:drawPlateText, onUpdateParams:[img_plate], onComplete:function()
		{
			plateStatus = 1
			img_plate.height = 70;
			TweenLite.to(img_plate, 1, {y:0, ease:Expo.easeOut, onUpdate:drawPlateText, onUpdateParams:[img_plate]});
		}});
}
function animateArrow()
{
	if(animateArrowFl === true)
	{
		TweenLite.to(img_arrowL, 0.6, {angL2: 218, alpha: arrowAlphaL, ease:Power1.easeInOut, onUpdate:drawArrowL, onUpdateParams:[img_arrowL], delay:0.6});
		TweenLite.to(img_arrowR, 0.6, {angR2: 322, alpha: arrowAlphaR, ease:Power1.easeInOut, onUpdate:drawArrowR, onUpdateParams:[img_arrowR], onComplete:function()
		{
			arrowAlpha = 0;
			TweenLite.to(img_arrowL, 0.6, {angL2: 250, angL1: 250, alpha: arrowAlpha, ease:Power1.easeInOut, onUpdate:drawArrowL, onUpdateParams:[img_arrowL], delay:0.6});
			TweenLite.to(img_arrowR, 0.6, {angR2: 290, angR1: 290, alpha: arrowAlpha, ease:Power1.easeInOut, onUpdate:drawArrowR, onUpdateParams:[img_arrowR], onComplete:function()
				{
					animateArrow();
				}});
		}});
	}else{
		if(arrowLeftFl === true && arrowRightFl === false)
		{
			arrowAlphaL = 0.8;
			arrowAlphaR = 0.3;
			TweenLite.to(img_arrowL, 0.3, {angL2: 218, alpha: arrowAlphaL, ease:Power0.easeNone, onUpdate:drawArrowL, onUpdateParams:[img_arrowL]});
			TweenLite.to(img_arrowR, 0.3, {angR2: 322, alpha: arrowAlphaR, ease:Power0.easeNone, onUpdate:drawArrowR, onUpdateParams:[img_arrowR], onComplete:function()
				{
					animateArrow();
				}});
		}
		if(arrowLeftFl === false && arrowRightFl === true)
		{
			arrowAlphaL = 0.3;
			arrowAlphaR = 0.8;
			TweenLite.to(img_arrowL, 0.3, {angL2: 218, alpha: arrowAlphaL, ease:Power0.easeNone, onUpdate:drawArrowL, onUpdateParams:[img_arrowL]});
			TweenLite.to(img_arrowR, 0.3, {angR2: 322, alpha: arrowAlphaR, ease:Power0.easeNone, onUpdate:drawArrowR, onUpdateParams:[img_arrowR], onComplete:function()
				{
					animateArrow();
				}});
		}
		if(arrowLeftFl === false && arrowRightFl === false)
		{
			arrowAlphaL = 0.3;
			arrowAlphaR = 0.3;
			TweenLite.to(img_arrowL, 0.3, {angL2: 218, alpha: arrowAlphaL, ease:Power0.easeNone, onUpdate:drawArrowL, onUpdateParams:[img_arrowL]});
			TweenLite.to(img_arrowR, 0.3, {angR2: 322, alpha: arrowAlphaR, ease:Power0.easeNone, onUpdate:drawArrowR, onUpdateParams:[img_arrowR], onComplete:function()
				{
					animateArrow();
				}});
		}
	}
}
//
function addSmoke(xPos, yPos)
{
	var smoke = new Smoke(xPos, yPos, smokeName);
	//
	smokes.push(smoke);
	//
	smokeName ++;
	//
	if(smokeName === 100)
	{
		smokeName = 0;
	}
}

//
function removeSmoke(sName)
{
	for(var i = 0; i < smokes.length; i ++)
	{
		if(smokes[i].getName() === sName)
		{
			smokes.splice(i, 1);
		}
	}
}
/////////////////////////
function update()
{
	//console.log(gunMove)
	//
		if(firstAutoPlayFl === true)
		{
			autoplayTmr ++;
			if(autoplayTmr === 600)
			{
				finTextStatus = 0;
		    	finTextArray();
		    	drawFinText(ctxFinText);
				autoplayTmr = 0
				gunAutoMove = false;
				autoPlayFire()
				firstAutoPlayFl = false;
				TweenLite.to(img_logo, 0.7, {alpha:0, ease:Power2.easeOut, onUpdate:drawLogo, onUpdateParams:[ctxLogo, img_logo], delay:3.8});
				TweenLite.to(img_plate, 0.6, {y:-70, ease:Power2.easeOut, onUpdate:drawPlateText, onUpdateParams:[img_plate]});
			}
		}
        /////
	    if(autoPlayFl === true)
	    {
	    	autoplayTmr ++;
	    	if(autoplayTmr === 500)
	    	{
	    		autoPlayFl = false;
	    		restartBanner();
	    	}
	    }
	    //////smoke
	    if(smokeFl === true)
	    {
		    smokeCount ++;
			if(smokeCount === smokeCountMax)
			{
				smokeCount = 0;
				if(smokeTankFl === false)
				{
                     addSmoke(136, 271);
				}else
				{
					addSmoke(img_ground.x + 298, 272);
				}
			}
			var sCtx = canvasSmoke.getContext("2d");
			sCtx.clearRect(0, 0, w, h);
			for(var j = 0; j < smokes.length; j ++)
			{
				if(smokeTankFl === false)
				{
					smokes[j].update(img_smoke);
				}else{
					smokes[j].update(img_smoke_2);
				}
			}
	    }
		/////////////////shot
		if(shotFl === true)
		{
			shotCount++;
		}
		if(shotCount === 3)
		{
			addShot(95 , 265, 1.6);
			//shotFl = false;
			//shotCount = 0;
		}
		if(shotCount === 5)
		{
			addShot(85 , 265, 1.3);
			shotFl = false;
			shotCount = 0;
		}
		var wCtx = canvasShot.getContext("2d");
		wCtx.clearRect(0, 0, w, h);
		drawShot(wCtx);
		/////////////////////
	if(finTextFl === true)
	{
        drawFinText(ctxFinText);
	}
	if(gunMove === true && parallaxLeft === true && img_gun.x <= 60)
	{
		drawGun(img_gun);
		drawAim(img_aim);
		drawGround(img_ground);
		drawSky(img_sky);
		img_gun.x += gunSpeed;
		TweenLite.to(img_aim, 0.4, {x:img_gun.x + 27, ease:Power2.easeOut, onUpdate:drawAim, onUpdateParams:[img_aim], delay:0.2});
		img_ground.x -= groundSpeed;
		img_sky.x -= skySpeed;
		img_wheel.rot += 1.5;
		img_cogwheel_1.rot -= 4;
		img_cogwheel_2.rot += 3;
		img_cogwheel_3.rot -= 2;
		drawWheel(img_wheel);
		drawCogwheel_1(img_cogwheel_1);
		drawCogwheel_2(img_cogwheel_2);
		drawCogwheel_3(img_cogwheel_3);
	}
	if(gunMove === true && img_gun.x > 60 ){
		document.getElementById("Interactive").style.cursor = "auto";
		finTextStatus = 1;
		finTextArray()
		gunMove = false;
		fire()
	}
	if(gunMove === true && parallaxRight === true && img_gun.x > 0)
	{
		drawGun(img_gun);
		drawAim(img_aim);
		drawGround(img_ground);
		drawSky(img_sky);
		img_gun.x -= gunSpeed;
		TweenLite.to(img_aim, 0.4, {x:img_gun.x + 27, ease:Power2.easeOut, onUpdate:drawAim, onUpdateParams:[img_aim], delay:0.2});
		img_ground.x += groundSpeed;
		img_sky.x += skySpeed;
		img_wheel.rot -= 1.5;
		img_cogwheel_1.rot += 4;
		img_cogwheel_2.rot -= 3;
		img_cogwheel_3.rot += 2;
		drawWheel(img_wheel);
		drawCogwheel_1(img_cogwheel_1);
		drawCogwheel_2(img_cogwheel_2);
		drawCogwheel_3(img_cogwheel_3);
	}
	//
	if(gunAutoMove === true)
	{
		if(gunX < 80)
		{
			gunX ++;
			drawGun(img_gun);
			drawAim(img_aim);
			drawGround(img_ground);
			drawSky(img_sky);
			img_gun.x += gunSpeed/2;
			TweenLite.to(img_aim, 0.1, {x:img_gun.x + 27, ease:Power2.easeOut, onUpdate:drawAim, onUpdateParams:[img_aim], delay:0.2});
			img_ground.x -= groundSpeed/4;
			img_sky.x -= skySpeed/4;
		}
		if(gunX > 79)
		{
			gunX ++;
			drawGun(img_gun);
			drawAim(img_aim);
			drawGround(img_ground);
			drawSky(img_sky);
			img_gun.x -= gunSpeed/2;
			TweenLite.to(img_aim, 0.1, {x:img_gun.x + 27, ease:Power2.easeOut, onUpdate:drawAim, onUpdateParams:[img_aim], delay:0.2});
			img_ground.x += groundSpeed/4;
			img_sky.x += skySpeed/4;
		}
		if(gunX === 240)
		{
			gunX = 0;
		}
	}
	requestID = window.requestAnimationFrame(update);
}
function fire()
{
   animateArrowFl = false;
   animateArrow();
   smokeFl = false;	
   smokeTankFl = false;
   autoplayTmr = 0
   gunMove = false;
   countDownFl = false;
   TweenLite.killTweensOf(img_arrowL)
   TweenLite.killTweensOf(img_arrowR)
   TweenLite.to(img_arrowL, 0.2, {alpha: 0.3, ease:Power1.easeOut, onUpdate:drawArrowL, onUpdateParams:[img_arrowL]});
   TweenLite.to(img_arrowR, 0.2, {alpha: 0.3, ease:Power1.easeOut, onUpdate:drawArrowR, onUpdateParams:[img_arrowR]});
   TweenLite.to(img_arrowPlateR, 0.3, {alpha:0.7, ease:Power0.easeNone, onUpdate:drawArrowPlateR, onUpdateParams:[img_arrowPlateR]});
   TweenLite.to(img_arrowPlateL, 0.3, {alpha:0.7, ease:Power0.easeNone, onUpdate:drawArrowPlateL, onUpdateParams:[img_arrowPlateL]});
   TweenLite.to(img_gun, 0.1, {alpha:1, onUpdate:drawGun, onUpdateParams:[img_gun], delay:0.2, onComplete:function()
   	{
       addShot(img_gun.x + 16, 150, 2.8);
       shotFl = true
   	}});
   TweenLite.to(img_aim, 0.2, {alpha:0, onUpdate:drawAim, onUpdateParams:[img_aim]});
   img_tank.x = img_ground.x + 157
   img_tank.y = 250
   drawTank(img_tank);
   TweenLite.to(img_tank, 0.2, {alpha:1, onUpdate:drawTank, onUpdateParams:[img_tank], delay:0.3, onComplete:function()
   	{
      smokeFl = true;
   	}});
   TweenLite.to(img_gun, 0.18, {y:-40, ease:Expo.easeOut, onUpdate:drawGun, onUpdateParams:[img_gun], delay:0.3, onComplete:function()
   	{
   	   TweenLite.to(img_gun, 1, {y:0, ease:Power1.easeOut, onUpdate:drawGun, onUpdateParams:[img_gun]});
       TweenLite.to(img_gun, 0.1, {y:0, onUpdate:drawGun, onUpdateParams:[img_gun], delay:3, onComplete:function()
       	{
       		finPlateIn();
       	}});
   	}});
}
function autoPlayFire()
{
   autoplayTmr = 0
   gunMove = false;
   countDownFl = false;
   animateArrowFl = false;
   TweenLite.killTweensOf(img_arrowL)
   TweenLite.killTweensOf(img_arrowR)
   TweenLite.to(img_arrowL, 0.2, {alpha: 0, ease:Power1.easeOut, onUpdate:drawArrowL, onUpdateParams:[img_arrowL]});
   TweenLite.to(img_arrowR, 0.2, {alpha: 0, ease:Power1.easeOut, onUpdate:drawArrowR, onUpdateParams:[img_arrowR]});
   TweenLite.to(img_arrowPlateR, 0.3, {alpha:0, ease:Power0.easeNone, onUpdate:drawArrowPlateR, onUpdateParams:[img_arrowPlateR]});
   TweenLite.to(img_arrowPlateL, 0.3, {alpha:0, ease:Power0.easeNone, onUpdate:drawArrowPlateL, onUpdateParams:[img_arrowPlateL]});
   TweenLite.to(img_gun, 0.1, {alpha:1, onUpdate:drawGun, onUpdateParams:[img_gun], delay:1, onComplete:function()
   	{
       addShot(img_gun.x + 16, 150, 2.8);
   	}});
   TweenLite.to(img_aim, 0.2, {alpha:0, onUpdate:drawAim, onUpdateParams:[img_aim], delay:0.8});
   TweenLite.to(img_gun, 0.18, {y:-40, ease:Expo.easeOut, onUpdate:drawGun, onUpdateParams:[img_gun], delay:1.1, onComplete:function()
   	{
   	   TweenLite.to(img_gun, 1, {y:0, ease:Power1.easeOut, onUpdate:drawGun, onUpdateParams:[img_gun]});
       TweenLite.to(img_gun, 0.1, {y:0, onUpdate:drawGun, onUpdateParams:[img_gun], delay:2.8, onComplete:function()
       	{
       		finPlateIn();
       	}});
   	}});
}
function finPlateIn()
{
	document.getElementById("Interactive").style.cursor = "auto";
	finTextFl = true;
	goFinText();
	img_logo.alpha = 0;
	img_logo.scale = 0.5;
	img_logo.x = 68 * img_logo.scale + (w - img_logo.pic.width * img_logo.scale) / 2 + 0.5;
	img_logo.y = 104 
	drawLogo(ctxLogo,img_logo)
	TweenLite.to(img_finPlate, 1, {y:h/2 - 30, scale: 1, alpha:1,  ease:Expo.easeOut, onUpdate:drawFinPlate, onUpdateParams:[img_finPlate]});
	TweenLite.to(img_logo, 0.5, {y:104, alpha:1, scale:1,  ease:Back.easeOut, onUpdate:drawLogo, onUpdateParams:[ctxLogo, img_logo], delay:0.8, onComplete:function()
		{
			img_aim.alpha = 0
			drawAim(img_aim);
			finPlateOut();
			img_packshot.alpha = 1;
	        drawPackshot(img_packshot);
		}});
}
//
function finPlateOut()
{
	outFinText();
	img_plate.y = - 70
	drawPlateText(img_plate)
    drawPattern(img_patt);
	TweenLite.to(img_logo, 1, {y:74,  ease:Expo.easeOut, onUpdate:drawLogo, onUpdateParams:[ctxLogo, img_logo], delay:3.5});
	TweenLite.to(img_finPlate, 0.7, {y:h/2, scale: 3, alpha:0,  ease:Power2.easeIn, onUpdate:drawFinPlate, onUpdateParams:[img_finPlate], delay:3.2, onComplete:function()
		{
			goPackshot()
		}});
}
function goPackshot()
{
	autoPlayFl = true;
	smokeFl = false;
	packshotFl = true;
	isButtonAppear = true;
	TweenLite.to(img_button, 0.8, {/*x: (w - img_button.pic.width) / 2, y:butY,*/ alpha: 1, scaleX:1, scaleY:1, ease: Bounce.easeOut, onUpdate:drawButton, onUpdateParams:[ctxButton,img_button], delay: 0.2});
	TweenLite.to(img_packshot, 0.1, {x: w / 2, y: h / 2, scale:0.96, ease: Expo.easeOut, onUpdate:drawPackshot, onUpdateParams:[img_packshot], delay: 0.45});
	TweenLite.to(img_packshot, 0.3, {x: w / 2, y: h / 2, scale:1, ease: Back.easeOut, onUpdate:drawPackshot, onUpdateParams:[img_packshot], delay: 0.55});
	TweenLite.to(img_again, 0.8, {y:h - img_again.height, ease: Power3.easeOut, onUpdate:drawPlateAgain, onUpdateParams:[img_again], delay: 0.8});
}
//
function inRad(num) {
	return num * Math.PI / 180;
}
function timer(){
	if(countDownFl === true)
	{
	    countDownNum --;
	    if(countDownNum >= 0)
	    {
            drawPanel(img_panel);
	    }
	    if (countDownNum === 0){
	    	gunMove = false;
	    	finTextStatus = 0;
	    	finTextArray();
	    	autoPlayFire();
	    	TweenLite.to(img_plate, 0.6, {y:-70, ease:Power2.easeOut, onUpdate:drawPlateText, onUpdateParams:[img_plate]});
	        setTimeout(function(){},1000);
	    } else {
	        setTimeout(timer,1000);
	    }
    }
}
// mouse over
function mOver(evt)
{
	overFl = true;
	//
}

// mouse out
function mOut(evt)
{
	overFl = false;
	//
	if(gunMove === true)
	{
       TweenLite.to(img_arrowPlateR, 0.8, {alpha:1, ease:Expo.easeOut, onUpdate:drawArrowPlateR, onUpdateParams:[img_arrowPlateR]});
    }
    if(isButtonAppear === true)
	{
		if(isButtonOver === true)
		{
			isButtonOver = false;
			TweenLite.to(img_button, 0.7, {/*x:-(img_button.pic.width - w)  / 2, y:butY,*/ scaleX:1, scaleY:1, ease: Elastic.easeOut, onUpdate:drawButton, onUpdateParams:[ctxButton, img_button]});
		}
		if(img_again.isOver === true)
		{
			img_again.isOver = false;
			TweenLite.killTweensOf(img_again);
			TweenLite.to(img_again, 0.5, {y:h - img_again.height, paramG: 0, paramB: 0, ease: Power2.easeOut, onUpdate:drawPlateAgain, onUpdateParams:[img_again]});
		}
	}
}


// mouse move
function mMove(evt)
{
	if(replayFl === true)
	{
		firstAutoPlayFl = false;
	}

	if(gunAutoMove === true)
	{
        gunAutoMove = false;
	    goSecondFrame();
	}
	if(gunMove === true)
	{
       mousePos = getMousePos(evt);
    }
    ////////////////
    var leftBorder = 31;
    var topBorder = 327;
    var halfBorderLeft = 91;
    var halfBorderRight = 93;
	if(mousePos.x > leftBorder && mousePos.x < 92 && mousePos.y > topBorder && mousePos.y < 444 && gunMove === true)
       {
         	parallaxRight = true;
       }else{
          	parallaxRight = false;
       }
       	if(mousePos.x > 93 && mousePos.x < 153 && mousePos.y > topBorder && mousePos.y < 444 && gunMove === true)
       {
         	parallaxLeft = true;
       }else{
        	parallaxLeft = false;
       }
       	if(mousePos.x > leftBorder && mousePos.x < 153 && mousePos.y > topBorder && mousePos.y < 444 && gunMove === true)
       {
         	document.getElementById("Interactive").style.cursor = "pointer";
	        TweenLite.to(img_plate, 0.6, {y:-70, ease:Power2.easeOut, onUpdate:drawPlateText, onUpdateParams:[img_plate]});

       }else{
       	if(gunMove === true)
       {
	        TweenLite.to(img_plate, 1, {y:0, ease:Expo.easeOut, onUpdate:drawPlateText, onUpdateParams:[img_plate]});
         	document.getElementById("Interactive").style.cursor = "auto";
         	animateArrowFl = true;
         	arrowLeftFl = false;
       	    arrowRightFl = false;
         	if(arrowLeftFl === false)
         	{
         		arrowAlphaL = 0.8;
         		arrowAlphaR = 0.8;
         		TweenLite.to(img_arrowPlateL, 0.3, {alpha:1, ease:Power0.easeNone, onUpdate:drawArrowPlateL, onUpdateParams:[img_arrowPlateL]});
         	}
         	if(arrowRightFl === false)
         	{
         		arrowAlphaL = 0.8;
         		arrowAlphaR = 0.8;
         		TweenLite.to(img_arrowPlateR, 0.3, {alpha:1, ease:Power0.easeNone, onUpdate:drawArrowPlateR, onUpdateParams:[img_arrowPlateR]});
         	}

       }
       }
       // animate ArrowPlate alpha
       if(mousePos.x > leftBorder && mousePos.x < halfBorderLeft && mousePos.y > topBorder && mousePos.y < 375 && gunMove === true)
       {
       	animateArrowFl = false;
       	arrowLeftFl = true;
       	arrowRightFl = false;
       	TweenLite.to(img_arrowPlateL, 0.3, {alpha:1, ease:Power0.easeNone, onUpdate:drawArrowPlateL, onUpdateParams:[img_arrowPlateL]});
       	TweenLite.to(img_arrowPlateR, 0.3, {alpha:0.7, ease:Power0.easeNone, onUpdate:drawArrowPlateR, onUpdateParams:[img_arrowPlateR]});
       }
       if(mousePos.x > halfBorderRight && mousePos.x < 310 && mousePos.y > topBorder && mousePos.y < 375 && gunMove === true)
       {
       	animateArrowFl = false;
       	arrowLeftFl = false;
       	arrowRightFl = true;
       	TweenLite.to(img_arrowPlateL, 0.3, {alpha:0.7, ease:Power0.easeNone, onUpdate:drawArrowPlateL, onUpdateParams:[img_arrowPlateL]});
       	TweenLite.to(img_arrowPlateR, 0.3, {alpha:1, ease:Power0.easeNone, onUpdate:drawArrowPlateR, onUpdateParams:[img_arrowPlateR]});
       }
       //
       ///////////////////// fin button
       if(isButtonAppear === true)
	{
		mousePos = getMousePos(evt);
		var leftBorder = (w - img_button.pic.width) / 2;
		var topBorder = butY-img_button.pic.height/2;
		//
		if(mousePos.x > leftBorder && mousePos.x < (leftBorder + img_button.pic.width))
		{
			if(mousePos.y > topBorder && mousePos.y < (topBorder + img_button.pic.height))
			{
				if(isButtonOver === false && isButtonAppear === true)
				{
					isButtonOver = true;
					TweenLite.killTweensOf(img_button);
					TweenLite.to(img_button, 0.4, {/*x:-(img_button.pic.width * 1.15 - w)  / 2, y:(butY - (img_button.pic.height * 1.15 - img_button.pic.height) / 2), */scaleX:1.15, scaleY:1.15, alpha: 1, ease: Back.easeOut, onUpdate:drawButton, onUpdateParams:[ctxButton, img_button]});
				}
			}
			else
			{
				if(isButtonOver === true && isButtonAppear === true)
				{
					isButtonOver = false;
					TweenLite.killTweensOf(img_button);
					TweenLite.to(img_button, 0.7, {/*x:-(img_button.pic.width - w)  / 2, y:butY,*/ scaleX:1, scaleY:1, alpha: 1, ease: Elastic.easeOut, onUpdate:drawButton, onUpdateParams:[ctxButton, img_button]});
				}
			}
		}
		else
		{
			if(isButtonOver === true && isButtonAppear === true)
			{
				isButtonOver = false;
				TweenLite.killTweensOf(img_button);
				TweenLite.to(img_button, 0.7, {/*x:-(img_button.pic.width - w)  / 2, y:butY,*/ scaleX:1, scaleY:1, alpha: 1, ease: Elastic.easeOut, onUpdate:drawButton, onUpdateParams:[ctxButton, img_button]});
			}
		}
		//
		if(mousePos.y > (h - img_again.height))
		{
			if(img_again.isOver === false)
			{
				img_again.isOver = true;
				TweenLite.killTweensOf(img_again);
				TweenLite.to(img_again, 0.4, {y:h - img_again.height - 2, ease:Elastic.easeOut, onUpdate:drawPlateAgain, onUpdateParams:[img_again]});
				TweenLite.to(img_again, 0.24, {paramG: 80, paramB: 10, ease:Power1.easeOut});
			}
		}
		else
		{
			if(img_again.isOver === true)
			{
				img_again.isOver = false;
				TweenLite.killTweensOf(img_again);
				TweenLite.to(img_again, 0.4, {y:h - img_again.height, paramG: 0, paramB: 0, ease: Power2.easeOut, onUpdate:drawPlateAgain, onUpdateParams:[img_again]});
			}

		}
	}
	if(packshotFl === true)
	{
		document.getElementById("Interactive").style.cursor = "pointer";
	}

}

//
function mClick(evt)
{
   if(packshotFl === true)
	{
		if(mousePos.y < (h - img_again.height))
		{
			ExitApi.exit();
		}
		else
		{
			autoplayTmr = 0;
			autoPlayFl = true;
			//restartFl = false;
			restartBanner();
		}
	}
}
//
function restartBanner()
{

	replayFl = false;
	arrowLeftFl = false;
    arrowRightFl = false;
	arrowRX = 85;
    arrowRY = 338;
    arrowLX = 98;
    arrowLY = 338;
    arrowAlphaL = 0;
    arrowAlphaR = 0;
    animateArrowFl = false;
	smokeName = 0;
    smokeCount = 0;
    smokeCountMax = 3;
	firstAutoPlayFl = true;
	autoplayTmr = 0;
	finTextFl = false;
	isButtonAppear = false;
	packshotFl = false;
	aimRad = 21;
    overFl = false;
	//txtPlateHeight = 40;
	plateStatus = 0;
	parallaxLeft = false;
	parallaxRight = false;
	gunMove = false;
    countDownNum = 10;
	countDownFl = false;
	finTextStatus = 0;
	finTextArray()
	drawFinText(ctxFinText);
	packshotFl = false;
	autoplayTmr = 0;
    gunAutoMove = false;
    gunX = 0;
    autoPlayFl = false;
	document.getElementById("Interactive").style.cursor = "auto";
	TweenLite.to(img_logo, 0.6, {alpha:0, ease: Power3.easeOut, onUpdate:drawLogo, onUpdateParams:[ctxLogo, img_logo]});
	TweenLite.to(img_again, 0.8, {y:h, ease: Power3.easeOut, onUpdate:drawPlateAgain, onUpdateParams:[img_again]});
	TweenLite.to(img_darkerAll, 1, {alpha:1, ease: Power1.easeIn, onUpdate:drawDarkerAll, onUpdateParams:[img_darkerAll], onComplete:function()
		{
			img_patt.alpha = 0;
	        drawPattern(img_patt);
	        //
			isButtonOver = false;
			//
			clearAll();
			//
			init();
		}});
}
//
function clearAll()
{
	canvasInteractive.getContext('2d').clearRect(0, 0, w, h);
	canvasAge.getContext('2d').clearRect(0, 0, w, h);
	canvasDarker.getContext('2d').clearRect(0, 0, w, h);
	canvasButton.getContext('2d').clearRect(0, 0, w, h);
	canvasLogo.getContext('2d').clearRect(0, 0, w, h);
	canvasGun.getContext('2d').clearRect(0, 0, w, h);
	canvasPackshot.getContext('2d').clearRect(0, 0, w, h);
	canvasPanel.getContext('2d').clearRect(0, 0, w, h);
	canvasWheel.getContext('2d').clearRect(0, 0, w, h);
	canvasCogwheel_1.getContext('2d').clearRect(0, 0, w, h);
	canvasCogwheel_2.getContext('2d').clearRect(0, 0, w, h);
	canvasCogwheel_3.getContext('2d').clearRect(0, 0, w, h);
	canvasAim.getContext('2d').clearRect(0, 0, w, h);
	canvasSky.getContext('2d').clearRect(0, 0, w, h);
	canvasGround.getContext('2d').clearRect(0, 0, w, h);
	canvasTank.getContext('2d').clearRect(0, 0, w, h);
	canvasPlate.getContext('2d').clearRect(0, 0, w, h);
	canvasArrowL.getContext('2d').clearRect(0, 0, w, h);
	canvasArrowR.getContext('2d').clearRect(0, 0, w, h);
	canvasArrowPlateR.getContext('2d').clearRect(0, 0, w, h);
	canvasArrowPlateL.getContext('2d').clearRect(0, 0, w, h);
	canvasFinPlate.getContext('2d').clearRect(0, 0, w, h);
	canvasSmoke.getContext('2d').clearRect(0, 0, w, h);
}


/////////////////////////////////////////////// SERVICE
function getMousePos(evt)
{
   var rect = canvasInteractive.getBoundingClientRect();
   return {
	  x: evt.clientX - rect.left,
	  y: evt.clientY - rect.top
   };
}

//
function loadImages(imagesToBeLoaded, drawCallback)
{
	var imagesLoaded = {};
	var loadedImages = 0;
	var numberOfImagesToLoad = 0;
	//
	for(var name in imagesToBeLoaded)
	{
		numberOfImagesToLoad++;
	}
	
	for(var name in imagesToBeLoaded)
	{
		imagesLoaded[name] = new Image();
		imagesLoaded[name].onload = function()
		{
			if(++loadedImages >= numberOfImagesToLoad)
			{
				drawCallback(imagesLoaded);
			}
		};
		//
		imagesLoaded[name].src = imagesToBeLoaded[name];
	}
}
//
function radian(a)
{
	return a * Math.PI / 180;
}

////////////////////////////////////////////////////////////////////////////////////// ACTIONS
window.onLoad = start();
/////////////////////////external FUNCTIONS

//aim
function drawAim(aimObj)
{
	var ctx = aimObj.canvas.getContext('2d');
	//
	ctx.clearRect(0, 0, w, h);
	//
	ctx.save();
	//
	ctx.translate(aimObj.x, aimObj.y);
	ctx.scale(aimObj.scale, aimObj.scale)
	//
	ctx.globalAlpha = aimObj.alpha;
	//
	ctx.beginPath();
	ctx.arc(0, 0, aimRad, 0, 2* Math.PI, false);
	ctx.lineWidth = 3;
	ctx.strokeStyle = "rgb(255, 255, 255)";
	ctx.stroke();
	//
	ctx.beginPath();
	ctx.moveTo(-aimRad - 5, 0);
	ctx.lineTo(-aimRad + aimRad / 4, 0);
	ctx.moveTo(aimRad + 5, 0);
	ctx.lineTo(aimRad - aimRad / 4, 0);
	ctx.moveTo(0, -aimRad - 5);
	ctx.lineTo(0, -aimRad + aimRad / 4);
	ctx.moveTo(0, aimRad + 5);
	ctx.lineTo(0, aimRad - aimRad / 4);
	ctx.stroke();
	//
	ctx.beginPath();
	ctx.moveTo(-5, 4);
	ctx.lineTo(0, -3);
	ctx.lineTo(5, 4);
	ctx.strokeStyle = "rgb(15, 219, 3)";
	ctx.stroke();
	//
	ctx.restore();
}

//arrowLeft
function drawArrowL(arrObj)
{
	var ctx = arrObj.canvas.getContext('2d');
	ctx.clearRect(0, 0, w, h);
	//
	ctx.save();
	ctx.translate(arrObj.x, arrObj.y);
	ctx.scale(arrObj.scale, arrObj.scale)
	//
	var curveRad = 56;
	var strokeThikness = 7;
	//
	ctx.beginPath();
	ctx.arc(0, curveRad, curveRad, radian(arrObj.angL1), radian(arrObj.angL2 + 0.1), true);
	ctx.lineWidth = strokeThikness;
	ctx.strokeStyle = "rgba(255, 255, 255, " + arrObj.alpha +")";
    ctx.stroke();
	//
	var arrX = curveRad * Math.cos(radian(arrObj.angL2));
	var arrY = curveRad * Math.sin(radian(arrObj.angL2));
	//
	ctx.beginPath();
	ctx.translate(arrX, arrY + curveRad);
	ctx.rotate(radian(arrObj.angL2 + 90));
	//
	ctx.moveTo(0, - strokeThikness -2);
	ctx.lineTo(-strokeThikness * 1.9 - 6, 0);
	ctx.lineTo(0, strokeThikness + 2);
	ctx.lineTo(0, - strokeThikness);
	//
	ctx.fillStyle = "rgba(255, 255, 255, " + arrObj.alpha +")";
	ctx.fill();
	//
	ctx.restore();
}

//arrowRight
function drawArrowR(arrObj)
{
	var ctx = arrObj.canvas.getContext('2d');
	ctx.clearRect(0, 0, w, h);
	//
	ctx.save();
	ctx.translate(arrObj.x, arrObj.y);
	ctx.scale(arrObj.scale, arrObj.scale)
	//
	var curveRad = 56;
	var strokeThikness = 7;
	//
	ctx.beginPath();
	ctx.arc(0, curveRad, curveRad, radian(arrObj.angR1), radian(arrObj.angR2 + 0.1));
	ctx.lineWidth = strokeThikness;
	ctx.strokeStyle = "rgba(255, 255, 255, " + arrObj.alpha +")";
    ctx.stroke();
	//
	var arrX = curveRad * Math.cos(radian(arrObj.angR2));
	var arrY = curveRad * Math.sin(radian(arrObj.angR2));
	//
	ctx.beginPath();
	ctx.translate(arrX, arrY + curveRad);
	ctx.rotate(radian(arrObj.angR2 + 270));
	//
	ctx.moveTo(0, - strokeThikness -2);
	ctx.lineTo(-strokeThikness * 1.9 - 6, 0);
	ctx.lineTo(0, strokeThikness + 2);
	ctx.lineTo(0, - strokeThikness);
	//
	ctx.fillStyle = "rgba(255, 255, 255, " + arrObj.alpha +")";
	ctx.fill();
	//
	ctx.restore();
}

//ArrowPlateL
function drawArrowPlateL(arrPlateObj)
{
	var ctx = arrPlateObj.canvas.getContext('2d');
	//
    ctx.save();
    //
	ctx.globalAlpha = arrPlateObj.alpha;
	ctx.translate(arrPlateObj.x, arrPlateObj.y);
    ctx.scale(arrPlateObj.scale, arrPlateObj.scale);
    //
    ctx.beginPath(); 
    ctx.arc(28, 30, 60, 1.5 * Math.PI, 0.5 * Math.PI, true);
    ctx.closePath() 
    ctx.clearRect(-99, -99, w, h)
    //
     var grd = ctx.createLinearGradient(0,40,0,-40);
    grd.addColorStop(0,"rgba(152, 236, 55, " + arrPlateObj.alpha*0.001 + ")");
    grd.addColorStop(1,"rgba(152, 236, 55, " + arrPlateObj.alpha*0.9 + ")");
    ctx.fillStyle = grd;
    ctx.fill()
	//
	ctx.restore();

}

//ArrowPlateR
function drawArrowPlateR(arrPlateObj)
{
	var ctx = arrPlateObj.canvas.getContext('2d');
	//
    ctx.save();
    //
	ctx.globalAlpha = arrPlateObj.alpha;
	ctx.translate(arrPlateObj.x, arrPlateObj.y);
    ctx.scale(arrPlateObj.scale, arrPlateObj.scale);
    //
    ctx.beginPath(); 
    ctx.arc(31, 30, 60, 1.5 * Math.PI, 0.5 * Math.PI, false); 
    ctx.closePath() 
    ctx.clearRect(-99, -99, w + 100, h + 100)
    //
     var grd = ctx.createLinearGradient(0,40,0,-40);
    grd.addColorStop(0,"rgba(152, 236, 55, " + arrPlateObj.alpha*0.001 + ")");
    grd.addColorStop(1,"rgba(152, 236, 55, " + arrPlateObj.alpha*0.9 + ")");
    ctx.fillStyle = grd;
    ctx.fill()
	//
	ctx.restore();

}

//cogwheel 1
function drawCogwheel_1(imgObj)
{
	var ctx = imgObj.canvas.getContext('2d');
	//
	ctx.clearRect(0, 0, w, h);
	ctx.globalAlpha = imgObj.alpha;
	//
	ctx.save();
	ctx.translate(imgObj.x, imgObj.y);
	ctx.scale(imgObj.scale, imgObj.scale);
	ctx.rotate(radian(imgObj.rot));
	//
	ctx.translate(- imgObj.pic.width/2, - imgObj.pic.height/2);
	//
	ctx.drawImage(imgObj.pic, 0, 0, imgObj.pic.width, imgObj.pic.height);

	ctx.restore();
}
// cogwheel 2
function drawCogwheel_2(imgObj)
{
	var ctx = imgObj.canvas.getContext('2d');
	//
	ctx.clearRect(0, 0, w, h);
	ctx.globalAlpha = imgObj.alpha;
	//
	ctx.save();
	ctx.translate(imgObj.x, imgObj.y);
	ctx.scale(imgObj.scale, imgObj.scale);
	ctx.rotate(radian(imgObj.rot));
	//
	ctx.translate(- imgObj.pic.width/2, - imgObj.pic.height/2);
	//
	ctx.drawImage(imgObj.pic, 0, 0, imgObj.pic.width, imgObj.pic.height);

	ctx.restore();
}

// cogwheel 3
function drawCogwheel_3(imgObj)
{
	var ctx = imgObj.canvas.getContext('2d');
	//
	ctx.clearRect(0, 0, w, h);
	ctx.globalAlpha = imgObj.alpha;
	//
	ctx.save();
	ctx.translate(imgObj.x, imgObj.y);
	ctx.scale(imgObj.scale, imgObj.scale);
	ctx.rotate(radian(imgObj.rot));
	//
	ctx.translate(- imgObj.pic.width/2, - imgObj.pic.height/2);
	//
	ctx.drawImage(imgObj.pic, 0, 0, imgObj.pic.width, imgObj.pic.height);

	ctx.restore();
}
// Gun
function drawGun(gunObj)
{
	var ctx = gunObj.canvas.getContext('2d');
	//
	ctx.clearRect(0, 0, w, h);
	ctx.globalAlpha = gunObj.alpha;
	//
	ctx.save();
	ctx.translate(gunObj.x, gunObj.y);
	ctx.scale(gunObj.scale, gunObj.scale);
	//
	ctx.drawImage(gunObj.pic, 0, 0, gunObj.pic.width, gunObj.pic.height);

	ctx.restore();
}

// packshot
function drawPackshot(packshotObj)
{
	var ctx = packshotObj.canvas.getContext('2d');
	//
	ctx.clearRect(0, 0, w, h);
	//
	ctx.globalAlpha = packshotObj.alpha;
	//
	ctx.save();
	ctx.translate(packshotObj.x, packshotObj.y);
	ctx.scale(packshotObj.scale, packshotObj.scale);
	ctx.translate(- packshotObj.pic.width/2, - packshotObj.pic.height/2);
	//
	ctx.drawImage(packshotObj.pic, 0, 0, packshotObj.pic.width, packshotObj.pic.height);

	ctx.restore();
}
//
function reqAnim()
{
 var lastTime = 0;
 var vendors = ['ms', 'moz', 'webkit', 'o']; 
 //
 for(var x = 0; x < vendors.length && !window.requestAnimationFrame; ++x)
 {
  window.requestAnimationFrame = window[vendors[x]+'RequestAnimationFrame'];
  window.cancelAnimationFrame = window[vendors[x]+'CancelAnimationFrame'] || window[vendors[x]+'CancelRequestAnimationFrame'];
 }
 //
 if (!window.requestAnimationFrame)
 {
  window.requestAnimationFrame = function(callback, element)
  {
   var currTime = new Date().getTime();
   var timeToCall = Math.max(0, 16 - (currTime - lastTime));
   var id = window.setTimeout(function(){callback(currTime + timeToCall);}, timeToCall);
   lastTime = currTime + timeToCall;
   return id;
  };
 }
 //
 if (!window.cancelAnimationFrame)
 {
  window.cancelAnimationFrame = function(id)
  {
   clearTimeout(id);
  };
 }
}
