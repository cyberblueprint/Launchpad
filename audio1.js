// (function () {
//     $(document).bind('touchmove', function(e) {
//         e.preventDefault();
//     });
//     var box = document.getElementById('launchpad');
//     box.addEventListener('touchstart', function (e) {
//         e.target.style.backgroundColor = 'gold';
//         var songName = e.target.getAttribute('data-src');
//         var audio = new Media(songName);
//         audio.play();
//         box.addEventListener('touchend', function (e) {
//             e.target.style.backgroundColor = 'indigo';
//             audio.stop();
//             audio.release();
//         }, false);
//     }, false); 
// }());

(function () {
    var buttons = document.getElementByClassName('box');
    for (var i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener('touchstart', function (e) {
            e.target.style.backgroundColor = 'gold';
            var songName = e.target.getAttribute('data-src');
            var audio = new Media(songName);
            audio.play();
            buttons[i].addEventListener('touchend', function (e) {
                e.target.style.backgroundColor = 'indigo';
                audio.stop();
                audio.release();
            }, false);
        }, false);
    };
})());
    


// var launchpad = document.getElementById('launchpad');
// launchpad.addEventListener('touchstart', function (e) {
//     e.target.style.backgroundColor = 'gold';
//     var audioPlayer = document.createElement('audio');
//     var songName = e.target.getAttribute('data-src');
//     var songPlaying = document.getElementById('player');

//     audioPlayer.id = 'player';
//     audioPlayer.src = songName;
//     document.body.appendChild(audioPlayer);
//     audioPlayer.play();

//     audioPlayer.addEventListener('ended', function (e) {
//         e.target.style.backgroundColor = 'indigo';
//         audioPlayer.parentNode.removeChild(audioPlayer);
//         e.target.id = '';
//     }, false);
    
// }, false);






// var App = {
//     initialize: function () {
//         var media = null;
//         this.touchEvents();
//     },

//     touchEvents: function () {
//         x
//         media = new Media();
//         var src = e.target.getAttribute('data-src');
//         var box = document.getElementById('launchpad');
//         box.addEventListener('touchstart', function () {
//             e.target.style.backgroundColor = 'black';
//             media.play(src);
//         });
//         box.addEventListener('touchend', function () {
//             e.target.backgroundColor = 'red';
//             media.stop(src);
//         });
//    }
// }

