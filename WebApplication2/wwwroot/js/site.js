function openTestImage() {
    var base_image = new Image();
    base_image.src = "../images/test.jpg";
    base_image.onload = function () {
        canvas = document.getElementById("image-canvas");
        canvas2 = document.getElementById("anno-canvas");
        context = canvas.getContext("2d");
        canvas.width = base_image.width;
        canvas2.width = base_image.width;
        canvas.height = base_image.height;
        canvas2.height = base_image.height;
        context.drawImage(base_image, 0, 0);


    };
}


document.getElementById("files").addEventListener("change", readImage, false);
function readImage() {

    var canvas = document.getElementById("image-canvas");
    var canvas2 = document.getElementById("anno-canvas");
    var context = canvas.getContext("2d");
    if (this.files && this.files[0]) {
        $(document).ready(function () {
            $('#canvasDiv').show();
            $('#fileSelectdiv').hide();
            $('#closeImage').show();
        });
        var FR = new FileReader();
        FR.onload = function (e) {
            var img = new Image();
            img.addEventListener("load", function () {
                canvas.width = img.width;
                canvas2.width = img.width;
                canvas.height = img.height;
                canvas2.height = img.height;
                context.drawImage(img, 0, 0);
            });
            img.src = e.target.result;
        };
        FR.readAsDataURL(this.files[0]);
    }
}

document.getElementById('downloadImage').addEventListener('click', function () {
    download(this, 'image-canvas', 'test.png');
}, false);

function download(link, canvas, filename) {
    link.href = document.getElementById(canvas).toDataURL();
    link.download = filename;
}

addEventListener("dragover", function (evt) {

    evt.preventDefault();

}, false);



// Handle dropped image file - only Firefox and Google Chrome
var dropZone = ocument.getElementById('dropZone');
dropZone.addEventListener("drop", function (evt) {
    var files = evt.dataTransfer.files;
    if (files.length > 0) {
        var file = files[0];
        if (typeof FileReader !== "undefined" && file.type.indexOf("image") !== -1) {
            var reader = new FileReader();
            // Note: addEventListener doesn't work in Google Chrome for this event
            reader.onload = function (evt) {
                img.src = evt.target.result;
                
            };
            reader.readAsDataURL(file);
        }
    }
    evt.preventDefault();
}, false);  