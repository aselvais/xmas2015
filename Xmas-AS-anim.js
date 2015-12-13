(function (lib, img, cjs, ss) {

	var p; // shortcut to reference prototypes

// library properties:
	lib.properties = {
		width: 500,
		height: 300,
		fps: 20,
		color: "#FFFFFF",
		manifest: []
	};


// symbols:


	(lib.SnowBall = function () {
		this.initialize();

		// Layer 1
		this.shape = new cjs.Shape();
		this.shape.graphics.f("#0066CC").s().p("AghAjQgPgPgBgUQABgTAPgOQAOgPATgBQAUABAPAPQAOAOAAATQAAAUgOAPQgPAOgUAAQgTAAgOgOg");
		this.shape.setTransform(5, 5);

		this.addChild(this.shape);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0, 0, 10, 10);


	(lib.BgBlack = function () {
		this.initialize();

		// Layer 1
		this.shape = new cjs.Shape();
		this.shape.graphics.f("#000000").s().p("EgnDAXbMAAAgu2MBOHAAAMAAAAu2g");
		this.shape.setTransform(250, 150);

		this.addChild(this.shape);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0, 0, 500, 300);


	(lib.asteroid = function () {
		this.initialize();

		// Layer 1
		this.shape = new cjs.Shape();
		this.shape.graphics.f().s("#FFFFFF").ss(1, 1, 1).p("AmRBDICRmJIBfgyIBuhQICKB4IBfhLIBzAAIBfCWIAACWIhLA8IBVCKIAAA3IkECbIAACgIjVhBIAAjIIiRAAIilBGIAAiMg");
		this.shape.setTransform(40.3, 45.8);

		this.addChild(this.shape);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(-1, -1, 82.5, 93.5);


// stage content:
	(lib.XmasASanim = function (mode, startPosition, loop) {
		this.initialize(mode, startPosition, loop, {});

		// SnowBall
		this.instance = new lib.SnowBall("synched", 0);
		this.instance.setTransform(-1, 82, 1, 1, 0, 0, 0, 5, 5);

		this.timeline.addTween(cjs.Tween.get(this.instance).wait(201));

		// Steroid
		this.instance_1 = new lib.asteroid("synched", 0);
		this.instance_1.setTransform(145.3, 66.3, 1, 1, 0, 0, 0, 40.3, 45.8);
		this.instance_1._off = true;

		this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(24).to({_off: false}, 0).wait(1).to({
			rotation: 1.6,
			x: 146.8,
			y: 66.8
		}, 0).wait(1).to({rotation: 3.2, x: 148.3, y: 67.4}, 0).wait(1).to({
			rotation: 4.7,
			x: 149.7,
			y: 67.9
		}, 0).wait(1).to({rotation: 6.3, x: 151.2, y: 68.4}, 0).wait(1).to({
			rotation: 7.9,
			x: 152.6,
			y: 68.9
		}, 0).wait(1).to({rotation: 9.5, x: 154.1, y: 69.5}, 0).wait(1).to({
			rotation: 11.1,
			x: 155.6,
			y: 70
		}, 0).wait(1).to({rotation: 12.6, x: 157.1, y: 70.5}, 0).wait(1).to({
			rotation: 14.2,
			x: 158.5,
			y: 71.1
		}, 0).wait(1).to({rotation: 15.8, x: 160.1, y: 71.5}, 0).wait(1).to({
			rotation: 17.4,
			x: 161.5,
			y: 72.1
		}, 0).wait(1).to({rotation: 18.9, x: 163, y: 72.6}, 0).wait(1).to({
			rotation: 20.5,
			x: 164.5,
			y: 73.2
		}, 0).wait(1).to({rotation: 22.1, x: 165.9, y: 73.7}, 0).wait(1).to({
			rotation: 23.7,
			x: 167.4,
			y: 74.2
		}, 0).wait(1).to({rotation: 25.3, x: 168.9, y: 74.7}, 0).wait(1).to({
			rotation: 26.8,
			x: 170.3,
			y: 75.3
		}, 0).wait(1).to({rotation: 28.4, x: 171.8, y: 75.8}, 0).wait(1).to({
			rotation: 30,
			x: 173.3,
			y: 76.3
		}, 0).wait(1).to({startPosition: 0}, 0).wait(1).to({startPosition: 0}, 0).wait(1).to({startPosition: 0}, 0).wait(1).to({startPosition: 0}, 0).wait(1).to({startPosition: 0}, 0).wait(1).to({startPosition: 0}, 0).wait(1).to({startPosition: 0}, 0).wait(1).to({startPosition: 0}, 0).wait(1).to({startPosition: 0}, 0).wait(1).to({startPosition: 0}, 0).wait(1).to({startPosition: 0}, 0).wait(1).to({startPosition: 0}, 0).wait(1).to({startPosition: 0}, 0).wait(1).to({startPosition: 0}, 0).wait(1).to({startPosition: 0}, 0).wait(1).to({startPosition: 0}, 0).wait(1).to({startPosition: 0}, 0).wait(1).to({startPosition: 0}, 0).wait(1).to({startPosition: 0}, 0).wait(1).to({startPosition: 0}, 0).wait(1).to({startPosition: 0}, 0).wait(1).to({startPosition: 0}, 0).wait(1).to({startPosition: 0}, 0).wait(1).to({startPosition: 0}, 0).wait(1).to({startPosition: 0}, 0).wait(1).to({startPosition: 0}, 0).wait(1).to({startPosition: 0}, 0).wait(1).to({startPosition: 0}, 0).wait(1).to({startPosition: 0}, 0).wait(1).to({startPosition: 0}, 0).wait(1).to({startPosition: 0}, 0).wait(1).to({startPosition: 0}, 0).wait(1).to({startPosition: 0}, 0).wait(1).to({startPosition: 0}, 0).wait(1).to({startPosition: 0}, 0).wait(1).to({startPosition: 0}, 0).wait(1).to({startPosition: 0}, 0).wait(1).to({startPosition: 0}, 0).wait(1).to({startPosition: 0}, 0).wait(1).to({startPosition: 0}, 0).wait(1).to({startPosition: 0}, 0).wait(1).to({startPosition: 0}, 0).wait(1).to({startPosition: 0}, 0).wait(1).to({startPosition: 0}, 0).wait(1).to({startPosition: 0}, 0).wait(1).to({startPosition: 0}, 0).wait(1).to({startPosition: 0}, 0).wait(1).to({startPosition: 0}, 0).wait(1).to({startPosition: 0}, 0).wait(1).to({startPosition: 0}, 0).wait(1).to({startPosition: 0}, 0).wait(1).to({startPosition: 0}, 0).wait(1).to({startPosition: 0}, 0).wait(1).to({startPosition: 0}, 0).wait(1).to({startPosition: 0}, 0).wait(1).to({startPosition: 0}, 0).wait(1).to({startPosition: 0}, 0).wait(1).to({startPosition: 0}, 0).wait(1).to({startPosition: 0}, 0).wait(1).to({startPosition: 0}, 0).wait(1).to({startPosition: 0}, 0).wait(1).to({startPosition: 0}, 0).wait(1).to({startPosition: 0}, 0).wait(1).to({startPosition: 0}, 0).wait(1).to({startPosition: 0}, 0).wait(1).to({startPosition: 0}, 0).wait(1).to({startPosition: 0}, 0).wait(1).to({startPosition: 0}, 0).wait(1).to({startPosition: 0}, 0).wait(1).to({startPosition: 0}, 0).wait(1).to({startPosition: 0}, 0).wait(1).to({startPosition: 0}, 0).wait(1).to({startPosition: 0}, 0).wait(1).to({startPosition: 0}, 0).wait(1).to({startPosition: 0}, 0).wait(1).to({startPosition: 0}, 0).wait(1).to({startPosition: 0}, 0).wait(1).to({startPosition: 0}, 0).wait(1).to({startPosition: 0}, 0).wait(1).to({startPosition: 0}, 0).wait(1).to({startPosition: 0}, 0).wait(1).to({startPosition: 0}, 0).wait(1).to({startPosition: 0}, 0).wait(1).to({startPosition: 0}, 0).wait(1).to({startPosition: 0}, 0).wait(1).to({startPosition: 0}, 0).wait(1).to({startPosition: 0}, 0).wait(1).to({startPosition: 0}, 0).wait(1).to({startPosition: 0}, 0).wait(1).to({startPosition: 0}, 0).wait(1).to({startPosition: 0}, 0).wait(1).to({startPosition: 0}, 0).wait(1).to({startPosition: 0}, 0).wait(1).to({startPosition: 0}, 0).wait(1).to({startPosition: 0}, 0).wait(1).to({startPosition: 0}, 0).wait(1).to({startPosition: 0}, 0).wait(1).to({startPosition: 0}, 0).wait(1).to({startPosition: 0}, 0).wait(1).to({startPosition: 0}, 0).wait(1).to({startPosition: 0}, 0).wait(1).to({startPosition: 0}, 0).wait(1).to({startPosition: 0}, 0).wait(1).to({startPosition: 0}, 0).wait(1).to({startPosition: 0}, 0).wait(1).to({startPosition: 0}, 0).wait(1).to({startPosition: 0}, 0).wait(1).to({startPosition: 0}, 0).wait(1).to({startPosition: 0}, 0).wait(1).to({startPosition: 0}, 0).wait(1).to({startPosition: 0}, 0).wait(1).to({startPosition: 0}, 0).wait(1).to({startPosition: 0}, 0).wait(1).to({startPosition: 0}, 0).wait(1).to({startPosition: 0}, 0).wait(1).to({startPosition: 0}, 0).wait(1).to({startPosition: 0}, 0).wait(1).to({startPosition: 0}, 0).wait(1).to({startPosition: 0}, 0).wait(1).to({startPosition: 0}, 0).wait(1).to({startPosition: 0}, 0).wait(1).to({startPosition: 0}, 0).wait(1).to({startPosition: 0}, 0).wait(1).to({startPosition: 0}, 0).wait(1).to({startPosition: 0}, 0).wait(1).to({startPosition: 0}, 0).wait(1).to({startPosition: 0}, 0).wait(1).to({startPosition: 0}, 0).wait(1).to({startPosition: 0}, 0).wait(1).to({startPosition: 0}, 0).wait(1).to({startPosition: 0}, 0).wait(1).to({startPosition: 0}, 0).wait(1).to({startPosition: 0}, 0).wait(1).to({startPosition: 0}, 0).wait(1).to({startPosition: 0}, 0).wait(1).to({startPosition: 0}, 0).wait(1).to({startPosition: 0}, 0).wait(1).to({startPosition: 0}, 0).wait(1).to({startPosition: 0}, 0).wait(1).to({startPosition: 0}, 0).wait(1).to({startPosition: 0}, 0).wait(1).to({startPosition: 0}, 0).wait(1).to({startPosition: 0}, 0).wait(1).to({startPosition: 0}, 0).wait(1).to({startPosition: 0}, 0).wait(1).to({startPosition: 0}, 0).wait(1).to({startPosition: 0}, 0).wait(1).to({startPosition: 0}, 0).wait(1).to({startPosition: 0}, 0).wait(1).to({startPosition: 0}, 0).wait(1).to({startPosition: 0}, 0).wait(1).to({startPosition: 0}, 0).wait(1).to({startPosition: 0}, 0).wait(1).to({startPosition: 0}, 0).wait(1).to({startPosition: 0}, 0).wait(1).to({startPosition: 0}, 0).wait(1).to({startPosition: 0}, 0).wait(1));

		// SpaceShip
		this.shape = new cjs.Shape();
		this.shape.graphics.f().s("#FFFFFF").ss(2, 1, 1).p("AAAhsIBaDZIhahKIhZBGg");
		this.shape.setTransform(247.7, 143.8);
		this.shape._off = true;

		this.timeline.addTween(cjs.Tween.get(this.shape).wait(21).to({_off: false}, 0).to({_off: true}, 179).wait(1));

		// BackGround
		this.instance_2 = new lib.BgBlack("synched", 0);
		this.instance_2.setTransform(250, 150, 1, 1, 0, 0, 0, 250, 150);
		this.instance_2._off = true;

		this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(9).to({_off: false}, 0).to({_off: true}, 1).wait(4).to({_off: false}, 0).to({_off: true}, 3).wait(2).to({_off: false}, 0).to({_off: true}, 1).wait(1).to({_off: false}, 0).wait(180));

	}).prototype = p = new cjs.MovieClip();
	p.nominalBounds = new cjs.Rectangle(244, 227, 10, 10);

})(lib = lib || {}, images = images || {}, createjs = createjs || {}, ss = ss || {});
var lib, images, createjs, ss;