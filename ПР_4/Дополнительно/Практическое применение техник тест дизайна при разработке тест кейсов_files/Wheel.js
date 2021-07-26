// PNG
function drawWheel(imgObj)
{
	var ctx = imgObj.canvas.getContext('2d');
	//
	ctx.clearRect(0, 0, w, h);
	ctx.globalAlpha = imgObj.alpha;
	//
	ctx.save();
	ctx.translate(imgObj.x, imgObj.y);
	ctx.scale(imgObj.scale, imgObj.scale)
	ctx.rotate(radian(imgObj.rot));
	//
	ctx.translate(- imgObj.pic.width/2, - imgObj.pic.height/2);
	//
	ctx.drawImage(imgObj.pic, 0, 0, imgObj.pic.width, imgObj.pic.height);

	ctx.restore();
}