var canvas = document.getElementById('appArea');
var ctx = canvas.getContext('2d');
var width = window.innerWidth;
var height = window.innerHeight;
var shapelist = [];

canvas.height = window.innerHeight;
canvas.width = window.innerWidth;



document.addEventListener('touchmove', function (e) {
    e.preventDefault();
});

document.addEventListener('mousedown', function (e) {
    e.preventDefault();
});

// document.addEventListener('mouseup', function (e) {
//     e.preventDefault();
// });

// document.addEventListener('mouseenter', function (e) {
//     e.preventDefault();
// });

// document.addEventListener('mouseleave', function (e) {
//     e.preventDefault();
// });

// document.addEventListener('mouseover', function (e) {
//     e.preventDefault();
// });

// document.addEventListener('mousemove', function (e) {
//     e.preventDefault();
// });

// document.addEventListener('dblclick', function (e) {
//     e.preventDefault();
// });

// $("document").on("tap", function (e) {
//     e.preventDefault();
// });


var Square = function (x, y, size, ctx, src) {
    this.x = x;
    this.y = y;
    this.size = size;
    this.ctx = ctx;
    this.selected = false;
    this.color = 'indigo';
    this.src = window.location.pathname.substring(0, window.location.pathname.lastIndexOf('/') + 1) + "buttons/boton" + src + ".mp3";
    this.addEventListener('touchstart', function(e)) {
        alert('hi');
    };
};


Square.prototype.render = function() {
    ctx.beginPath();
    ctx.rect(this.x, this.y, this.size, this.size);
    if (this.selected) {
        ctx.fillStyle = "gold";
    } else  {
        ctx.fillStyle = this.color;
    }
    ctx.fill();
};


var generateSquares = function () {
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
};

var startEvent = function(e) {
    var self = this;
    canvas.addEventListener('touchstart', function (e) {
         // var shapesTouched = []; 
         // can also use active shape
        for (var i = 0; i < e.touches.length; i++) { 
            var shapes = getCoords(e.touches[i].pageX, e.touches[i].pageY);
            // if shapes exists from a click event   
            if (shapes.length) {       
                var selectedShape = shapes[shapes.length-1];
                selectedShape.selected = true;
                var audio = new Media(selectedShape.src);
                audio.play();

                canvas.addEventListener('touchend', function(e) {
                    for (var i = 0; i < e.changedTouches.length; i++) {
                        var endSelected = getCoords(e.changedTouches[i].pageX, e.changedTouches[i].pageY);
                        
                        if(endSelected.length) {
                            var shapeSelected = endSelected[endSelected.length-1];
                            shapeSelected.selected = false;
                            audio.stop();
                            audio.release();
                        }
                        render();
                    }                    
                }, false);

            }
            render();
        }        
    }, false);  
}


// var endEvent = function (e) {
//     canvas.addEventListener('touchend', function(e) {
//         for (var i = 0; i < e.changedTouches.length; i++) {
//             var endSelected = getCoords(e.changedTouches[i].pageX, e.changedTouches[i].pageY);
            
//             if(endSelected.length) {
//                 var shapeSelected = endSelected[endSelected.length-1];
//                 shapeSelected.selected = false;
//                 audio.stop();
//                 audio.release();
//             }
//             render();
//         }                    
//     }, false);      
// };


var render = function(){
    ctx.clearRect(0, 0, this.width, this.height);
    for(index in shapelist){
        shapelist[index].render();
    }
};

generateSquares();
startEvent();
// endEvent();
render(); 
