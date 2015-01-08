window.AudioContext = window.AudioContext || window.webkitAudioContext;

var aCtx = new AudioContext(),
    currentOscillator = null,
    currentGain = null,
    curKey = null,
    canvas = document.querySelector('canvas'),
    ctx = canvas.getContext('2d'),
    keys = [],
    playing = false;

var key = function (settings) {
    this.freq = settings.freq;
    this.pos = settings.pos;
    this.color = settings.color;
}

key.prototype.play = function () {
    var osc = aCtx.createOscillator(),
        gain = aCtx.createGain();

    osc.type = "sine";
    osc.frequency.value = this.freq;
    osc.start(0);
    currentOscillator = osc;
    currentGain = gain;

    gain.gain.value = 1;
    osc.connect(gain);
    gain.connect(aCtx.destination);
};

key.prototype.down = function () {
    ctx.fillStyle = "black";
    ctx.fillRect(this.pos.x, this.pos.y, this.pos.w, this.pos.h);
};

key.prototype.up = function () {
    ctx.fillStyle = this.color;
    ctx.fillRect(this.pos.x, this.pos.y, this.pos.w, this.pos.h);
};

function checkKeys(x, y) {
    keys.forEach(function (e) {
        if (x > e.pos.x && x < e.pos.x + e.pos.w && y > e.pos.y && y < e.pos.y + e.pos.h) {
            e.play();
            e.down();
        } else {
            e.up();
        }
    });
};

canvas.width = 500;
canvas.height = 200;

for (var i = 0; i < 20; i++) {

    var r = ~~ (Math.random() * 255),
        g = ~~ (Math.random() * 255),
        b = ~~ (Math.random() * 255);

    keys.push(
    new key({
        freq: 100 + i * 100,
        pos: {
            x: i * 20,
            y: 0,
            w: 20,
            h: canvas.height
        },
        color: "rgb(" + r + "," + g + "," + b + ")"
    }));

    ctx.fillStyle = "rgb(" + r + "," + g + "," + b + ")";
    ctx.fillRect(i * 20, 0, 20, canvas.height);
}


canvas.addEventListener('mousedown', function (e) {
    playing = true;
    checkKeys(e.x, e.y);
});

canvas.addEventListener('touchstart', function (e) {
    e.preventDefault();
    playing = true;
    checkKeys(e.x, e.y);
});

canvas.addEventListener('mousemove', function (e) {
    if (playing) {
        currentGain.gain.value = 0;
        checkKeys(e.pageX, e.pageY);
    }
});

canvas.addEventListener('touchmove', function (e) {
    if (playing) {
        var touches = e.changedTouches;
        currentGain.gain.value = 0;
        for(var t = 0; t < touches.length; t++){
            checkKeys(touches[t].pageX, touches[t].pageY);
        }
    }
});

canvas.addEventListener('mouseup', function (e) {
    currentGain.gain.value = 0;
    playing = false;
    checkKeys(0,0);
});

canvas.addEventListener('touchend', function (e) {
    currentGain.gain.value = 0;
    playing = false;
    checkKeys(0,0);
});