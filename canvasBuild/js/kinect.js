function writeMessage(message) {
  text.setText(message);
  layer.draw();
}

var stage = new Kinetic.Stage({
  container: 'container',
  width: 578,
  height: 200
});
var layer = new Kinetic.Layer();

var text = new Kinetic.Text({
  x: 10,
  y: 10,
  fontFamily: 'Calibri',
  fontSize: 24,
  text: '',
  fill: 'white'
});

var triangle = new Kinetic.RegularPolygon({
  x: 190,
  y: 120,
  sides: 3,
  radius: 80,
  fill: '#00D2FF',
  stroke: 'black',
  strokeWidth: 4
});

triangle.on('touchmove', function() {
  var touchPos = stage.getPointerPosition();
  var x = touchPos.x - 190;
  var y = touchPos.y - 40;
  writeMessage('x: ' + x + ', y: ' + y);
});

var circle = new Kinetic.Circle({
  x: 380,
  y: stage.height()/2,
  radius: 70,
  fill: 'red',
  stroke: 'black',
  strokeWidth: 4
});

circle.on('touchstart', function() {
  writeMessage('Touchstart circle');
});
circle.on('touchend', function() {
  writeMessage('Touchend circle');
});

layer.add(triangle);
layer.add(circle);
layer.add(text);
stage.add(layer);