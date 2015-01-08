 window.AudioContext = window.AudioContext || window.webkitAudioContext;

var aCtx = new AudioContext(),
    currentOscillator = null,
    currentGain = null,
    canvas = document.querySelector('canvas'),
    ctx = canvas.getContext('2d'),
    keys = [],
    playing = false;

var key = function (settings) {
    this.freq = settings.freq;
    this.pos = settings.pos;
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

function checkKeys(x, y) {
    keys.forEach(function (e) {
        if (x > e.pos.x && x < e.pos.x + e.pos.w && y > e.pos.y && y < e.pos.y + e.pos.h) {
            e.play();
        }
    });
};

canvas.width = 500;
canvas.height = 200;

for (var i = 0; i < 20; i++) {
    keys.push(
    new key({
        freq: i*100,
        pos: {
            x: i * 20,
            y: 0,
            w: 20,
            h: canvas.height
        }
    }));

    var r = ~~ (Math.random() * 255),
        g = ~~ (Math.random() * 255),
        b = ~~ (Math.random() * 255);
    ctx.fillStyle = "rgb(" + r + "," + g + "," + b + ")";
    ctx.fillRect(i * 20, 0, 20, canvas.height);
}


canvas.addEventListener('touchstart', function (e) {
    playing = true;
    checkKeys(e.x, e.y);
});

canvas.addEventListener('mousemove', function (e) {
    if(playing){
        currentGain.gain.value = 0;
        checkKeys(e.x, e.y);
    }
});

canvas.addEventListener('touchend', function (e) {
    currentGain.gain.value = 0;
    playing = false;
});