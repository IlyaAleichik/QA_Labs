//
function drawDarkerAll(dObj)
{
	var ctx = dObj.canvas.getContext("2d");
	//
	ctx.clearRect(0, 0, w, h)
	ctx.save();
	ctx.fillStyle = "rgba(0, 0, 0, " + dObj.alpha + ")";
	ctx.fillRect(0, 0, w, h);
	ctx.restore();
}