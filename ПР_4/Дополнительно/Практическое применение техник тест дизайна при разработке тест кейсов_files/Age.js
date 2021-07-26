//
function drawAge(ageObj)
{
	var ctx = ageObj.canvas.getContext('2d');
	//
	ctx.clearRect(0, 0, w, h)
	ctx.save();
	//
	ctx.globalAlpha = ageObj.alpha;
	//
	ctx.fillStyle = "rgba(0, 0, 0, "+ (ageObj.alpha - 0.5) + ")";
	ctx.fillRect(134, 578, 26, 22);
	//
	ctx.fillStyle = "rgba(255, 255, 255, 0.8)";
	ctx.font = ageFont
	ctx.fillText("12+", 137, 594);
	//
	ctx.restore();
}