var bHaveFileAPI = (window.File && window.FileReader);

if (!bHaveFileAPI) {
    alert("This browser doesn't support the File API");
    return;
}

document.getElementById("fileElem").addEventListener("change", onFileChanged);

function onFileChanged(theEvt) {
	console.log(theEvt);
    var files = theEvt.target.files;
    var totalBytes = 0;

    for (var i = 0; i < files.length; i++) {
        var fileInfo = "<p>File name: " + files[i].name + "; size: " + files[i].size + "; type: " + files[i].type + "</p>";
        totalBytes += files[i].size;
        document.getElementById('filedata').innerHTML += fileInfo;
	    window.localStorage.setItem('path', files[i].fullPath);
    }
    document.getElementById('filedata').innerHTML += "<p>Total of " + files.length + " files, " + totalBytes + " bytes.";
    
}

