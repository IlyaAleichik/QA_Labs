// PNG
function drawTank(imgObj)
{
	var ctx = imgObj.canvas.getContext('2d');
	//
	ctx.globalAlpha = imgObj.alpha;
	//
	ctx.save();
	ctx.clearRect(0, 0, w, h);
	ctx.translate(imgObj.x, imgObj.y);
	ctx.scale(imgObj.scale, imgObj.scale);
	//
	ctx.drawImage(imgObj.pic, 0, 0, imgObj.pic.width, imgObj.pic.height);

	ctx.restore();
}