// Example Snippets File for HTML5 File API course

Chapter 2:

Using File Input:

<form action="">
<label>Select a file: </label>
<input type="file" name="files" id="fileElem" />
</form>


    function init() {
        var bHaveFileAPI = (window.File && window.FileReader);

        if (!bHaveFileAPI) {
            alert("This browser doesn't support the File API");
            return;
        }

        document.getElementById("fileElem").addEventListener("change", onFileChanged);
    }

    function onFileChanged(evt) {
        alert("You selected a file: " + evt.target.files[0].name);
    }

File Information:
    
    <p>File Name:<span id="filename"></span></p>
    <p>File Size:<span id="filesize"></span></p>
    <p>File Type:<span id="filetype"></span></p>
    <p>File Data:<span id="filedata"></span></p>

    // when the user selects a file, this function will be called
    function onFileChanged(theEvt) {
        // get the file from the event information
        var thefile = theEvt.target.files[0];

        // display the file data 
        document.getElementById("filename").innerHTML = thefile.name;
        document.getElementById("filesize").innerHTML = thefile.size;
        document.getElementById("filetype").innerHTML = thefile.type;

        document.getElementById('filedata').innerHTML += fileInfo;
    }


Multiple Files:


    function onFileChanged(theEvt) {
        var files = theEvt.target.files;
        var totalBytes = 0;

        for (var i = 0; i < files.length; i++) {
            var fileInfo = "<p>File name: " + files[i].name + "; size: " + files[i].size + "; type: " + files[i].type + "</p>";
            totalBytes += files[i].size;
            document.getElementById('filedata').innerHTML += fileInfo;
        }
        document.getElementById('filedata').innerHTML += "<p>Total of " + files.length + " files, " + totalBytes + " bytes.";
    }

Drag and drop:

        document.getElementById("filedrop").addEventListener("drop", onFilesDropped);
        document.getElementById("filedrop").addEventListener("dragover", onDragOver);


    function onDragOver(theEvt) {
        theEvt.stopPropagation();
        theEvt.preventDefault();
    }

    function onFilesDropped(theEvt) {
        theEvt.stopPropagation();
        theEvt.preventDefault();

        var files = theEvt.dataTransfer.files;
        var totalBytes = 0;

        document.getElementById('filedata').innerHTML = "";

        for (var i = 0; i < files.length; i++) {
            var fileInfo = "<p>File name: " + files[i].name + "; size: " + files[i].size + "; type: " + files[i].type + "</p>";
            totalBytes += files[i].size;
            document.getElementById('filedata').innerHTML += fileInfo;
        }
        document.getElementById('filedata').innerHTML += "<p>Total of " + files.length + " files, " + totalBytes + " bytes.";
    }


Chapter 3:


Read Text File:

        var thefile = theEvt.target.files[0];
        var totalBytes = 0;

        // check to see if it is text
        if (thefile.type != "text/plain") {
            document.getElementById('filecontents').innerHTML = "No text file chosen";
            return;
        }

        var reader = new FileReader();

        reader.onload = function (evt) {
            var resultText = evt.target.result;
            document.getElementById('filecontents').innerHTML = resultText;
        }

        reader.readAsText(thefile);


Read Data URL:


        var thefile = theEvt.target.files[0];

        // check to see if it is an image
        if (!thefile.type.match("image.*")) {
            return;
        }

        var reader = new FileReader();

        reader.onload = function (evt) {
            var resultdata = evt.target.result;

            var img = new Image();
            img.src = event.target.result;
            document.getElementById('filecontents').appendChild(img);
        }

        reader.readAsDataURL(thefile);


Using File Events:

    function startread(theEvt) {
        if (thefile != null) {
            reader = new FileReader();

            reader.onloadstart = fileLoadStart;
            reader.onloadend = fileLoadEnd;
            reader.onload = fileLoad;
            reader.onerror = fileError;
            reader.onprogress = fileProgress;
            reader.onabort = fileAbort;

            reader.readAsBinaryString(thefile);
        }
        else {
            alert("No file selected to read");
        }
    }

    function abortread(theEvt) {
    	if (reader)
    		reader.abort();
    }


    function fileLoadStart(evt) {
        document.querySelector("#readprogress").innerHTML += "<p>File reading started (onloadstart)</p>";
    }
    function fileLoadEnd(evt) {
        document.querySelector("#readprogress").innerHTML += "<p>File reading has ended (onloadend)</p>";
    }
    function fileLoad(evt) {
        document.querySelector("#progCounter").innerHTML = "<p>File read progress: 100%</p>";
        document.querySelector("#readprogress").innerHTML += "<p>File reading completed (onload)</p>";
    }
    function fileProgress(evt) {
        // evt will be a ProgressEvent: http://www.w3.org/TR/progress-events/#progressevent
        if (evt.lengthComputable) {
        	if (firstProgress) {
	            firstProgress=false;        		
	            document.querySelector("#readprogress").innerHTML += "<p id='progCounter'></p>";
        	}
            var progCalc = Math.round((evt.loaded / evt.total) * 100);
            document.querySelector("#progCounter").innerHTML = "File read progress: " + progCalc + "%";
        }
    }
    function fileError(evt) {
        document.querySelector("#readprogress").innerHTML += "<p>A file read error has occurred:</p>";
        switch (evt.target.error.code) {
            case evt.target.error.NOT_FOUND_ERR:
                document.querySelector("#readprogress").innerHTML += "<p>File was not found</p>";
                break;
            case evt.target.error.NOT_READABLE_ERR:
                document.querySelector("#readprogress").innerHTML += "<p>File was unreadable</p>";
                break;
        }
    }
    function fileAbort(evt) {
        document.querySelector("#readprogress").innerHTML += "<p>File reading has been aborted</p>";
    }


Reading File Slices:


    function readentirefile() {
        document.getElementById('filecontents').innerHTML = "";
        if (thefile != null) {
            var reader = new FileReader();

            reader.onload = function (evt) {
                var resultText = evt.target.result;
                document.getElementById('filecontents').innerHTML = resultText;
            }

            reader.readAsText(thefile);
        }
    }


    function readfileslice() {
        var start = 5;
        var end = 15;

        document.getElementById('filecontents').innerHTML = "";

        // read the slice of the file
        if (thefile != null) {
            var reader = new FileReader();

            reader.onload = function (evt) {
                var resultText = evt.target.result;
                document.getElementById('filecontents').innerHTML = resultText;
            }

            if (thefile.webkitSlice) {
                var newFile = thefile.webkitSlice(start, end);
            } else if (thefile.mozSlice) {
                var newFile = thefile.mozSlice(start, end);
            }

            reader.readAsText(newFile);
        }
    }

