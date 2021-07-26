// 
var textPlate = {};
textPlate.textArray = new Array();
var textObj = {};
var arrayNum = 0
//
function drawFinText(ctx)
{
	if(finTextStatus === 0)
	{
		arrayNum = 2;
	}else{
		arrayNum = 0;
	}
	//
	ctx.save()
	//
	ctx.translate(ctx.x, ctx.y);
	ctx.clearRect(-w/2, -h/2, w, h )

	//
	ctx.textBaseline = "middle";
	ctx.textAlign = "center";
	ctx.fillStyle = "rgb(255, 255, 255)";
	//
	for(var i = arrayNum; i<textPlate.textArray.length;i++)
		{
			ctx.font = textPlate.textArray[i].font;
			ctx.fillText(textPlate.textArray[i].text, textPlate.textArray[i].x, textPlate.textArray[i].y);
		}
	ctx.restore();
}
//
function finTextArray()
{
		textObj = {};
    	textObj.x = w;
		textObj.y = bannerText_4_y;
		textObj.font = bannerText_4_font;
		textObj.text = bannerText_4;
		textPlate.textArray.push(textObj);

		textObj = {};
    	textObj.x = w;
		textObj.y = bannerText_4_1_y;
		textObj.font = bannerText_4_1_font;
		textObj.text = bannerText_4_1;
		textPlate.textArray.push(textObj);
		
		textObj = {};
		textObj.x = w;
		textObj.y = bannerText_5_y;
		textObj.font = bannerText_5_font;
		textObj.text = bannerText_5;
		textPlate.textArray.push(textObj);

		textObj = {};
		textObj.x = w;
		textObj.y = bannerText_6_y;
		textObj.font = bannerText_6_font;
		textObj.text = bannerText_6;
		textPlate.textArray.push(textObj);

		textObj = {};
		textObj.x = w;
		textObj.y = bannerText_6_1_y;
		textObj.font = bannerText_6_1_font;
		textObj.text = bannerText_6_1;
		textPlate.textArray.push(textObj);
		
		
		textObj = {};
		textObj.x = w;
		textObj.y = bannerText_7_y;
		textObj.font = bannerText_7_font;
		textObj.text = bannerText_7;
		textPlate.textArray.push(textObj);

		textObj = {};
		textObj.x = w;
		textObj.y = bannerText_7_1_y;
		textObj.font = bannerText_7_1_font;
		textObj.text = bannerText_7_1;
		textPlate.textArray.push(textObj);
		
		

}
function goFinText()
{
	if(finTextStatus === 0)
	{
    TweenLite.to(textPlate.textArray[3], 1, { x:0, ease:Expo.easeOut, delay:0.5});
    TweenLite.to(textPlate.textArray[4], 1, { x:0, ease:Expo.easeOut, delay:0.65});
    TweenLite.to(textPlate.textArray[5], 1, { x:0, ease:Expo.easeOut, delay:0.8});
    TweenLite.to(textPlate.textArray[6], 1, { x:0, ease:Expo.easeOut, delay:0.95});
    }else{
    	TweenLite.to(textPlate.textArray[0], 1, { x:0, ease:Expo.easeOut, delay:0.5});
        TweenLite.to(textPlate.textArray[1], 1, { x:0, ease:Expo.easeOut, delay:0.65});
        TweenLite.to(textPlate.textArray[2], 1, { x:0, ease:Expo.easeOut, delay:0.8});
    }
}
function outFinText()
{
	if(finTextStatus === 0)
	{
    TweenLite.to(textPlate.textArray[3], 0.7, { x:-w, ease:Power2.easeIn, delay:3});
    TweenLite.to(textPlate.textArray[4], 0.7, { x:-w, ease:Power2.easeIn, delay:3.1});
    TweenLite.to(textPlate.textArray[5], 0.7, { x:-w, ease:Power2.easeIn, delay:3.2});
    TweenLite.to(textPlate.textArray[6], 0.7, { x:-w, ease:Power2.easeIn, delay:3.3, onComplete:function()
    	{
    		textPlate.textArray[3].x = w;
    		textPlate.textArray[4].x = w;
    		textPlate.textArray[5].x = w;
    		textPlate.textArray[6].x = w;
    	}});
    }else{
    	TweenLite.to(textPlate.textArray[0], 0.7, { x:-w, ease:Power2.easeIn, delay:3});
    	TweenLite.to(textPlate.textArray[1], 0.7, { x:-w, ease:Power2.easeIn, delay:3.1});
	    TweenLite.to(textPlate.textArray[2], 0.7, { x:-w, ease:Power2.easeIn, delay:3.2, onComplete:function()
	    	{
	    		textPlate.textArray[0].x = w;
	    		textPlate.textArray[1].x = w;
	    		textPlate.textArray[2].x = w;
	    	}});
    }
}