var stage = new createjs.Stage("appArea");

var rect1 = new createjs.Shape();

rect1.graphics.beginFill('indigo').drawRoundRect(-100, -100, 50, 50, 6);
rect1.x = 100;
rect1.y = 100;
rect1.name = 'rect';



//Add Shape instance to stage display list.
stage.addChild(rect1);
//Update stage will render next frame
stage.update();



rect1.on('mousedown', function(i){
	//Doesn't seem right to me. Is there is any alternvative.
});
