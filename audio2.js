var App = {
	initialize: function () {
		//this.mediaPlayer();
		this.playAudio();
		this.stopAudio();
		this.touchEvents();
		this.preventScroll();
	},
	preventScroll: function () {
		$(document).bind('touchmove', function(e) {
    		e.preventDefault();
    	});
	},
	/*mediaPlayer: function () {
		var path = window.location.pathname;
		var src = path.substring(0, lastIndexOf("/") + 1);
		var media = new Media();*/
	},
	playAudio: function (src) {
		var media = new Media(src, onSuccess, onError);
		media.play();
	},
	stopAudio: function (src) {
		media.stop();
	},
	touchEvents: function () {
		var box = document.getElementById('box');
		box.addEventListener('touchstart', function () {
			box.style.backgroundColor = 'gold';
			media.play('android_asset/www/butons/boton1.mp3');
		});
		box.addEventListener('touchend', function () {
			box.style.backgroundColor = 'indigo';
			media.stop('android_asset/www/butons/boton1.mp3');
		});
		var box2 = document.getElementById('box2');
		box2.addEventListener('touchstart', function () {
			box2.style.backgroundColor = 'gold';
			media.play('android_asset/www/butons/boton2.mp3');
		});
		box2.addEventListener('touchend', function () {
			box2.style.backgroundColor = 'indigo';
			media.stop('android_asset/www/butons/boton2.mp3');
		});
		var box3 = document.getElementById('box3');
		box3.addEventListener('touchstart', function () {
			box3.style.backgroundColor = 'gold';
			media.play('android_asset/www/butons/boton3.mp3');
		});
		box3.addEventListener('touchend', function () {
			box3.style.backgroundColor = 'indigo';
			media.stop('android_asset/www/butons/boton3.mp3');
		});
		var box4 = document.getElementById('box4');
		box4.addEventListener('touchstart', function () {
			box4.style.backgroundColor = 'gold';
			media.play('android_asset/www/butons/boton4.mp3');
		});
		box4.addEventListener('touchend', function () {
			box4.style.backgroundColor = 'indigo';
			media.stop('android_asset/www/butons/boton4.mp3');
		});
		var box5 = document.getElementById('box5');
		box5.addEventListener('touchstart', function () {
			box5.style.backgroundColor = 'gold';
			media.play('android_asset/www/butons/boton5.mp3');
		});
		box5.addEventListener('touchend', function () {
			box5.style.backgroundColor = 'indigo';
			media.stop('android_asset/www/butons/boton5.mp3');
		});
		var box6 = document.getElementById('box6');
		box6.addEventListener('touchstart', function () {
			box6.style.backgroundColor = 'gold';
			media.play('android_asset/www/butons/boton6.mp3');
		});
		box6.addEventListener('touchend', function () {
			box6.style.backgroundColor = 'indigo';
			media.stop('android_asset/www/butons/boton6.mp3');
		});
		var box7 = document.getElementById('box7');
		box7.addEventListener('touchstart', function () {
			box7.style.backgroundColor = 'gold';
			media.play('android_asset/www/butons/boton7.mp3');
		});
		box7.addEventListener('touchend', function () {
			box7.style.backgroundColor = 'indigo';
			media.stop('android_asset/www/butons/boton7.mp3');
		});
		var box8 = document.getElementById('box8');
		box8.addEventListener('touchstart', function () {
			box8.style.backgroundColor = 'gold';
			media.play('android_asset/www/butons/boton8.mp3');
		});
		box8.addEventListener('touchend', function () {
			box8.style.backgroundColor = 'indigo';
			media.stop('android_asset/www/butons/boton8.mp3');
		});
		var box9 = document.getElementById('box9');
		box9.addEventListener('touchstart', function () {
			box9.style.backgroundColor = 'gold';
			media.play('android_asset/www/butons/boton9.mp3');
		});
		box9.addEventListener('touchend', function () {
			box9.style.backgroundColor = 'indigo';
			media.stop('android_asset/www/butons/boton9.mp3');
		});
		var box10 = document.getElementById('box10');
		box10.addEventListener('touchstart', function () {
			box10.style.backgroundColor = 'gold';
			media.play('android_asset/www/butons/boton10.mp3');
		});
		box10.addEventListener('touchend', function () {
			box10.style.backgroundColor = 'indigo';
			media.stop('android_asset/www/butons/boton10.mp3');
		});
		var box11 = document.getElementById('box11');
		box11.addEventListener('touchstart', function () {
			box11.style.backgroundColor = 'gold';
			media.play('android_asset/www/butons/boton11.mp3');
		});
		box11.addEventListener('touchend', function () {
			box11.style.backgroundColor = 'indigo';
			media.stop('android_asset/www/butons/boton11.mp3');
		});
		var box12 = document.getElementById('box12');
		box12.addEventListener('touchstart', function () {
			box12.style.backgroundColor = 'gold';
			media.play('android_asset/www/butons/boton12.mp3');
		});
		box12.addEventListener('touchend', function () {
			box12.style.backgroundColor = 'indigo';
			media.stop('android_asset/www/butons/boton12.mp3');
		});
	}
};

/*
var App = {
	initialize: function () {
		var box = document.getElementById('box');
		box.addEventListener('touchstart', function(event) {
		    for (var i = 0; i < event.touches.length; i++) {
		        var touch = event.touches[i];
		        var elem = document.elementFromPoint(touch.pageX, touch.pageY);
		        switch (elem.id) {
		            case 'manuel':
		                serial.write('1');
		                break;
		            case 'rythme':
		                serial.write('2');
		                break;
		            case 'melodie':
		                serial.write('3');
		                break;
		            case 'sequenceur':
		                serial.write('4');
		                break;
		        }
		    }
		});
		box.addEventListener('touchend', function(event) {
		    var contains = false;
		    for (var i = 0; i < event.touches.length; i++) {
		        var touch = event.touches[i];
		        var elem = document.elementFromPoint(touch.pageX, touch.pageY);
		        if (elem.id === 'manuel') contains = true;
		    }
		    if (!contains) serial.write('0');
		});
	}
};
*/