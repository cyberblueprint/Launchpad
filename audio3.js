var App = (function () {
    // // Ads popup
    // $(document).on("mobileinit", function () {
    //   setTimeout(function () {
    //     $('popupVideo').popup();
    //   }, 50000);
    // });

    // Prevent touchmove
    $(document).bind('touchmove', function(e) {
        e.preventDefault();
    });
    var box = document.getElementById('launchpad');
    box.addEventListener('touchstart', function (e) {
        if(e.target.tagName === 'DIV') {
            e.target.style.backgroundColor = 'gold';
            var songName = e.target.getAttribute('data-src');
            var audio = new Media(songName);
            audio.play();
            box.addEventListener('touchend', function (e) {
                e.target.style.backgroundColor = 'indigo';
                audio.stop();
                audio.release();   
            }, false);
        }
    }, false);

    var box = document.getElementById('loadpad');
    box.addEventListener('touchstart', function (e) {
        if(e.target.tagName === 'DIV') {
            // window.requestFileSystem(LocalFileSystem.PERSISTENT, 0, gotFS, fail);
            window.requestFileSystem(LocalFileSystem.PERSISTENT, 0, function(fileSystem){
                alert("ok");
             },
             function(error){
                console.log('File System Error: ' + error.code);
                 }
              );
            // function onSuccess(fileSystem) {
            //     console.log(fileSystem.name);
            //     console.log(fileSystem.root.name);
            // }
        }
    }, false);
   //  collectMedia: function(path, recursive, level) {
   //    if (level === undefined)
   //       level = 0;
   //    var directoryEntry = new DirectoryEntry('', path);
   //    if(!directoryEntry.isDirectory) {
   //       console.log('The provided path is not a directory');
   //       return;
   //    }
   //    var directoryReader = directoryEntry.createReader();
   //    directoryReader.readEntries(
   //       function (entries) {
   //          var appFile;
   //          var extension;
   //          for (var i = 0; i < entries.length; i++) {
   //             if (entries[i].name === '.')
   //                continue;
 
   //             extension = entries[i].name.substr(entries[i].name.lastIndexOf('.'));
   //             if (entries[i].isDirectory === true && recursive === true)
   //                Application.collectMedia(entries[i].fullPath, recursive, level + 1);
   //             else if (entries[i].isFile === true && $.inArray(extension, AppFile.EXTENSIONS) >= 0)
   //             {
   //                appFile = new AppFile(entries[i].name, entries[i].fullPath);
   //                appFile.addFile();
   //                console.log('File saved: ' + entries[i].fullPath);
   //             }
   //          }
   //       },
   //       function(error) {
   //          console.log('Unable to read the directory. Errore: ' + error.code);
   //       }
   //    );
 
   //    if (level === 0)
   //       $(document).trigger('endupdate');
   //    console.log('Current path analized is: ' + path);
   // },
}());

// (function () {
//     var buttons = document.getElementByClassName('box');
//     for (var i = 0; i < buttons.length; i++) {
//         buttons[i].addEventListener('touchstart', function (e) {
//             e.target.style.backgroundColor = 'gold';
//             var songName = e.target.getAttribute('data-src');
//             var audio = new Media(songName);
//             audio.play();
//             buttons[i].addEventListener('touchend', function (e) {
//                 e.target.style.backgroundColor = 'indigo';
//                 audio.stop();
//                 audio.release();
//             }, false);
//         }, false);
//     };
// })());
    


var launchpad = document.getElementById('launchpad');
launchpad.addEventListener('touchstart', function (e) {
    e.target.style.backgroundColor = 'gold';
    var audioPlayer = document.createElement('audio');
    var songName = e.target.getAttribute('data-src');
    var songPlaying = document.getElementById('player');

    audioPlayer.id = 'player';
    audioPlayer.src = songName;
    document.body.appendChild(audioPlayer);
    audioPlayer.play();

    audioPlayer.addEventListener('ended', function (e) {
        e.target.style.backgroundColor = 'indigo';
        audioPlayer.parentNode.removeChild(audioPlayer);
        e.target.id = '';
    }, false);
    
}, false);






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

