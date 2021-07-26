//
function drawPattern(patObj)
{
	var ctx = patObj.canvas.getContext('2d');
	//
	ctx.clearRect(0, 0, w, h);
	//
	drawGradient(patObj);
	//
	var pattern = ctx.createPattern(patObj.pic, 'repeat');
	ctx.fillStyle = pattern;
	ctx.globalCompositeOperation = "source-in";	
	ctx.fillRect(0, 0, w, h);
	//
	ctx.globalCompositeOperation = "destination-over";	
	drawGradient(patObj);
}

//
function drawGradient(patObj)
{
	var ctx = patObj.canvas.getContext('2d');
	//
	ctx.save();
	//
	var pHeight;
	//
	if(patObj.pos != "bottom")
	{
		pHeight = patObj.height;
		//
		ctx.translate(0, 0);
	}
	else
	{
		pHeight = patObj.height - pattBottomDelta;
		//
		ctx.translate(w, h);
		ctx.rotate(Math.PI);
	}
	//
	if(patObj.alpha < 0.001)
	{
		patObj.alpha = 0;
	}
	else if(patObj.alpha > 1)
	{
		patObj.alpha = 1;
	}
	//
	var grd = ctx.createLinearGradient(0, 0, 0, pHeight);
	grd.addColorStop(0, "rgba(0, 0, 0, " +  patObj.alpha * 0.8 + ")"); 
	grd.addColorStop(1, "rgba(0, 0, 0, 0)");
	//
	ctx.fillStyle = grd;
	ctx.fillRect(0, 0, w, pHeight);
	//
	if(patObj.pos === "double")
	{
		ctx.translate(w, h);
		ctx.rotate(Math.PI);
		//
		grd = ctx.createLinearGradient(0, 0, 0, patObj.height - pattBottomDelta);
		grd.addColorStop(0, "rgba(0, 0, 0, " +  patObj.alpha * 0.8 + ")"); 
		grd.addColorStop(1, "rgba(0, 0, 0, 0)");
		//
		ctx.fillStyle = grd;
		ctx.fillRect(0, 0, w, pHeight);
	}
	//
	ctx.restore();
}