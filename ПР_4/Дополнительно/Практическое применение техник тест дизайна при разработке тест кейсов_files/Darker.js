//
function drawDarker(dObj)
{
	var ctx = dObj.canvas.getContext("2d");
	//
	ctx.clearRect(0, 0, w, h)
	ctx.globalAlpha = dObj.alpha;
	ctx.scale(dObj.scale, dObj.scale);
	ctx.translate(dObj.x, dObj.y);
	ctx.save();
	//
	if(dObj.alpha < 0.001)
	{
	 dObj.alpha = 0;
	}
	else if(dObj.alpha > 1)
	{
	 dObj.alpha = 1;
	}
	var grd = ctx.createRadialGradient(w/2,h/2 - 99,80,w/2,h/2 - 99,w/2 + 150);
	grd.addColorStop(0,"rgba(0, 0, 0, 0)");
	grd.addColorStop(1,"rgba(0, 0, 0, " + dObj.alpha + ")");	
	ctx.fillStyle = grd;
	ctx.fillRect(0,0,w,h);
	//
	ctx.restore();
}