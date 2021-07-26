var drawButton = function(ctx, obj) {

	ctx.save();
	//
	ctx.shadowColor = "black";
	ctx.shadowBlur = 10;
	ctx.shadowOffsetY = 2;
	//
	ctx.transform(obj.scaleX, 0, 0, obj.scaleY, obj.x, obj.y);
	ctx.clearRect(-w/2, -h/2, w, h);
	ctx.globalAlpha = obj.alpha;
	ctx.drawImage(obj.pic, - obj.pic.width / 2, - obj.pic.height / 2, obj.pic.width, obj.pic.height);
    // font
	ctx.font = buttonFont;
	ctx.textBaseline = "middle";
	ctx.textAlign = "center";
	ctx.fillStyle = "#ffffff";
	//
	ctx.shadowColor = "#14090a";
	ctx.shadowBlur = 2;
	ctx.shadowOffsetY = 1;
	//
	ctx.fillText(buttonText, 0, - 8);
	ctx.fillText(buttonText2, 0, 8);
	//
	ctx.restore();

};