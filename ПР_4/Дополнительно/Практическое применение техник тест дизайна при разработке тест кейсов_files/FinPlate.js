// 
function drawFinPlate(imgObj)
{
	var ctx = imgObj.canvas.getContext('2d');

	//
	ctx.save();
	ctx.globalAlpha = imgObj.alpha;
	ctx.translate(imgObj.x, imgObj.y);
	ctx.scale(imgObj.scale, imgObj.scale);
	//
	ctx.clearRect(-w/2 - 10, -h/2, w + 10, h + 300)
    //
    if(imgObj.alpha < 0.001)
	{
	 imgObj.alpha = 0;
	}
	else if(imgObj.alpha > 1)
	{
	 imgObj.alpha = 1;
	}
	//
    var grd = ctx.createRadialGradient(0,0,24,0, -20,160);
    grd.addColorStop(0,"rgba(161, 28, 22, "+ imgObj.alpha + ")");
    grd.addColorStop(1,"rgba(36, 38, 43, "+ imgObj.alpha + ")");
    ctx.fillStyle = grd;
    ctx.fillRect(-w/2,-h/2,w,h + 100);
    //
    ctx.beginPath()
    ctx.moveTo(-w/2 - 2,-h/2+113);
	ctx.lineTo(0,-h/2+135);
	ctx.lineTo(w/2 + 2 ,-h/2+113);
	ctx.lineTo(w/2 + 2 ,-h/2+588);
	ctx.lineTo(0,-h/2+604);
	ctx.lineTo(-w/2 - 2,-h/2+588);
	ctx.closePath() 
	ctx.shadowBlur = 15;
    ctx.shadowOffsetY = 3;
    ctx.shadowColor = "#a71a15";
	ctx.fillStyle = "#191919";
	ctx.fill();
	ctx.lineWidth = 1
	ctx.strokeStyle = "#d50c0c"
	//
	ctx.stroke();
	//
	ctx.restore();

}