// Smoke Class
function Smoke (xPos, yPos, sName)
{
	if(smokeTankFl === false)
	{
		this._x = xPos + 4 * Math.random() - 2;
		this._y = yPos + 8 * Math.random() - 9;

		//
		var scale = 0.5 + 0.4 * Math.random();
		this._xScale = scale;
		this._yScale = scale;

		//
		this._alpha = 0.4 + 0.2 * Math.random();

		//
		this._name = sName;

		//
		this._sSpeed = 0.9 + 0.4 * Math.random();

		//
		this._ang = 360 * Math.random();
    }else{
    	this._x = xPos + 4 * Math.random() - 2;
		this._y = yPos + 8 * Math.random() - 9;

		//
		var scale = 0.5 + 0.4 * Math.random();
		this._xScale = scale;
		this._yScale = scale;

		//
		this._alpha = 0.3 + 0.2 * Math.random();

		//
		this._name = sName;

		//
		this._sSpeed = 0.9 + 0.4 * Math.random();

		//
		this._ang = 360 * Math.random();
    }
}

//
Smoke.prototype.update = function(sObj)
{
	if(smokeTankFl === false)
	{
		this._sSpeed *= 0.998;
		//
		this._x = this._x  - this._sSpeed / 4;
		this._y -= this._sSpeed;
		//
		if(this._xScale < 1.5)
		{
			this._xScale *= 1.022;
			this._yScale *= 1.022;
		}
		//
		this._alpha -= 0.004;
		//
		if(this._alpha <= 0)
		{
			removeSmoke(this._name);
		}
		else
		{
	            this._draw(sObj);
		}
		if(smokeFl === false)
		{
			removeSmoke(this._name);
		}
    }else{
        this._sSpeed *= 0.950;
		//
		this._x = this._x  + this._sSpeed * 1.2;
		this._y -= this._sSpeed;
		//
		if(this._xScale < 1.5)
		{
			this._xScale *= 1.022;
			this._yScale *= 1.022;
		}
		//
		this._alpha -= 0.015;
		//
		if(this._alpha <= 0)
		{
			removeSmoke(this._name);
		}
		else
		{
	            this._draw(sObj);
		}
		if(smokeFl === false)
		{
			removeSmoke(this._name);
		}
    }
}

// Name
Smoke.prototype.getName = function()
{
	return this._name;
}

//
Smoke.prototype._draw = function(sObj)
{
	var ctx = canvasSmoke.getContext("2d");
	//
	ctx.save();
	ctx.translate(this._x, this._y);
	ctx.rotate(radian(this._ang));
	ctx.scale(this._xScale, this._yScale);
	ctx.globalAlpha = this._alpha;
	//
	ctx.drawImage(sObj.pic, - sObj.pic.width / 2,  - sObj.pic.height / 2, sObj.pic.width, sObj.pic.height);
	//
	ctx.restore();
}