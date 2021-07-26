// 
function drawPlateText(ptObj)
{
	var sizes = new Array(0, 0.35, 0.65, 1);
	var finAlpha = 0.4;
	//
	var ctx = ptObj.canvas.getContext('2d');
	//
	ctx.clearRect(0, 0, w, h);
	//
	ctx.save();
	ctx.translate(ptObj.x, ptObj.y - 1);
	//
	ctx.beginPath();
	ctx.rect(-w/2, 0, w, ptObj.height);
	//
	var plateGrad = ctx.createLinearGradient(-w/2, 0, w/2, 0);
    plateGrad.addColorStop(sizes[0], "rgba(175, 30, 20, " + finAlpha + ")");
    plateGrad.addColorStop(sizes[1], "rgb(175, 30, 20)");
    plateGrad.addColorStop(sizes[2], "rgb(175, 30, 20)");
    plateGrad.addColorStop(sizes[3], "rgba(175, 30, 20, " + finAlpha + ")");
    ctx.fillStyle = plateGrad;
// ctx.fillStyle =	"rgb(255, 255, 255)";
    ctx.fill();
    //
	/*ctx.globalCompositeOperation = "source-in";
	ctx.beginPath();
	ctx.globalAlpha = 0.35;
	ctx.fillRect(0, 0, w, ptObj.height);
	//
	ctx.globalAlpha = 1;
	ctx.globalCompositeOperation = "destination-over";
	ctx.beginPath();
	ctx.rect(0, 0, w, ptObj.height);
	ctx.fillStyle = plateGrad;
    ctx.fill();
    //
    ctx.globalCompositeOperation = "source-over";
    //
    var plateGrad2 = ctx.createLinearGradient(0, 0, w, 0);
    plateGrad2.addColorStop(sizes[0], "rgba(185, 90, 20, " + finAlpha + ")");
    plateGrad2.addColorStop(sizes[1], "rgb(185, 90, 20)");
    plateGrad2.addColorStop(sizes[2], "rgb(185, 90, 20)");
    plateGrad2.addColorStop(sizes[3], "rgba(185, 90, 20, " + finAlpha + ")");
    ctx.fillStyle = plateGrad2;
    ctx.fillRect(0, 0, w, 1);*/
    //
	ctx.textBaseline = "middle";
	ctx.textAlign = "center";
	ctx.fillStyle = "rgb(255, 255, 255)";
	//
	ctx.save();	
	drawTextInTextPlate(ctx,ptObj);
	ctx.restore();
	/*if(plateStatus === 0)
	{
	  ctx.font = bannerText_1_font;
      ctx.fillText(bannerText_1, w / 2, ptObj.height / 2 + 3);
	}else{
		ctx.font = bannerText_2_font;
		ctx.fillText(bannerText_2, w / 2, ptObj.height / 2 - 7);
		ctx.font = bannerText_3_font;
		ctx.fillText(bannerText_3, w / 2, ptObj.height/2 + 11);
	}*/
	//
	ctx.restore();
}

// 
function drawPlateAgain(ptObj)
{
	var ctx = ptObj.canvas.getContext('2d');
	//
	ctx.clearRect(0, 0, w, h);
	//
	ctx.save();
	ctx.translate(ptObj.x, ptObj.y);
	//
	ctx.beginPath();
	ctx.rect(0, 0, w, ptObj.height + 50);
	//
	var plateGrad = ctx.createLinearGradient(0, 0, w, 0);
    plateGrad.addColorStop(0, "rgba(255, " + Math.floor(ptObj.paramG) + ", " + Math.floor(ptObj.paramB) + ", 0)");
    plateGrad.addColorStop(0.33, "rgba(255, " + Math.floor(ptObj.paramG) + ", " + Math.floor(ptObj.paramB) + ", 0.9)");
    plateGrad.addColorStop(0.66, "rgba(255, " + Math.floor(ptObj.paramG) + ", " + Math.floor(ptObj.paramB) + ", 0.9)");
    plateGrad.addColorStop(1, "rgba(255, " + Math.floor(ptObj.paramG) + ", " + Math.floor(ptObj.paramB) + ", 0)");
    ctx.fillStyle = plateGrad;
    ctx.fill();
    //
   	ctx.font = bannerText_10_font;
	ctx.textBaseline = "middle";
	ctx.textAlign = "center";
	ctx.fillStyle = "rgba(255, 255, 255, 0.9)";
	//
	ctx.shadowColor = "rgb(10, 5, 2)";
	ctx.shadowBlur = 3;
	ctx.shadowOffsetY = 1;
	//
	ctx.fillText(bannerText_10, w / 2, ptObj.height / 2);
	//
	ctx.restore();
}