(function (window)
{

	/**
	 *
	 * @param size
	 * @constructor
	 */
	function SnowBall()
	{
		this.Shape_constructor(); // super call
		this.activate();
	}

	var p = createjs.extend(SnowBall, createjs.Shape);

	/**
	 *
	 * @param size
	 */
	p.getShape = function ()
	{
//		this.graphics.clear();
		this.graphics.beginStroke(_config.ACOLOR);
//		this.graphics.moveTo(0, 100);

		this.graphics.drawCircle(0, 0, 15);
		this.x = 0;
		this.y = 100;

	};

	/**
	 * handle reinit for poolings sake
	 * @param size
	 */
	p.activate = function (size)
	{
		this.getShape();
		// p.beginFill("DeepSkyBlue").drawCircle(0, 0, 50);
	};

	/**
	 * handle what a SnowBall does to itself every frame
	 * @param event
	 */
	p.tick = function (event)
	{
		this.x += 5;
	};


	window.SnowBall = createjs.promote(SnowBall, "Shape");

}(window));