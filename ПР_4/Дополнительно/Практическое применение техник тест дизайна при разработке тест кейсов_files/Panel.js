var drawPanel = function(imgObj)
{
	var ctx = imgObj.canvas.getContext('2d');
	//
    ctx.clearRect(0, 0, w, h);
	//
	ctx.globalAlpha = imgObj.alpha;
	//
	ctx.save();
	//
	ctx.translate(imgObj.x, imgObj.y);
	//
	ctx.scale(imgObj.scale, imgObj.scale)
	//ctx.translate(0, 0);
	//
	ctx.drawImage(imgObj.pic, 0, 0, imgObj.pic.width, imgObj.pic.height);
	//
	ctx.font = bannerText_8_font;
	ctx.textBaseline = "middle";
	ctx.textAlign = "center";
	ctx.fillStyle = "#ffffff";
	ctx.fillText(bannerText_8, 84, 150);
	//
	ctx.font = bannerText_9_font;
	ctx.textBaseline = "middle";
	ctx.textAlign = "center";
	ctx.fillStyle = "#ffffff";
	if(countDownNum < 10)
	{
       ctx.fillText(bannerText_9 + "0" + countDownNum, 83, 170);
	}else{
		ctx.fillText(bannerText_9 + countDownNum, 83, 170);
	}
	//
	ctx.restore();
};