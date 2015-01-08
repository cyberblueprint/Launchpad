var canvas = document.getElementById('appArea');
var ctx = canvas.getContext('2d');

canvas.height = window.innerHeight;
canvas.width = window.innerWidth;


var width = window.innerWidth;
var height = window.innerHeight;

var shapelist = [];



function Square (x, y, size, ctx, src) {
    this.x = x;
    this.y = y;
    this.size = size;
    this.ctx = ctx;
    this.src = "http://localhost" + window.location.pathname.substring(0, window.location.pathname.lastIndexOf('/') + 1) + "buttons/boton" + src + ".mp3";
    this.selected = false;
    this.color = 'indigo';
}

Square.prototype.render = function () {
    ctx.beginPath();
    ctx.rect(this.x, this.y, this.size, this.size);
    if (this.selected) {
        ctx.fillStyle = "gold";
    } else  {
        ctx.fillStyle = this.color;
    }
    ctx.fill();
};


var drawSquares = function () {
    var theSize = width/3 - 10;
    var space = theSize + 10;
    for (var i = 0; i < 12; i++) {
        if (i >= 0 && i <= 3) {
            var theX = 0;
            var theY = i * (space);
        } else if (i > 3 && i <= 7 ) {
            var theX = space;
            var theY = (i - 4) * (space);
        } else {
            var theX = space * 2;
            var theY = (i - 8) * (space);
        }
        
        var square = new Square(theX, theY, theSize, ctx, i);
        square.render();
        shapelist.push(square);
    };
};


var getCoords = function (x, y) {
    var validCoords = [];

    for(var index in shapelist){
        var shape = shapelist[index];
        var startX = shape.x;
        var endX = shape.x + shape.size;
        var startY = shape.y;
        var endY = shape.y + shape.size;

        if (x >= startX && x <= endX && y >= startY && y <= endY) {
            validCoords.push(shape);
        }
    }
    return validCoords;
} 

// encerrar en una funcion para que? porque e.touches no existe todavia
//canvas.addEventListener('touchstart', startEvent, false)

var startEvent = function(e) {
    canvas.addEventListener('touchstart', function (e) {
        for (var i = 0; i < e.touches.length; i++) { 
        console.log(e.touches.length);
            var shapes = getCoords(e.touches[i].pageX, e.touches[i].pageY);
            // if shapes exists from a click event   
            if (shapes.length) {       
                var selectedShape = shapes[shapes.length-1];
                selectedShape.selected = true;
                var endEvent = function () {
				    selectedShape.selected = false;
				    canvas.removeEventListener('touchend', endEvent, false);
					console.log(selectedShape);
					render();
				};
                canvas.addEventListener('touchend', endEvent, false);          
            }
            render();
        }        
    }, false);
   
}


var render = function () {
    ctx.clearRect(0, 0, this.width, this.height);
    for(index in shapelist){
        shapelist[index].render();
    }
};

drawSquares();
startEvent();
render();
