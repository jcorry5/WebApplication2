



$(document).ready(function () {
    $('#ColourPaletteAcc').hide();
    $('#shapeAccordaian').hide();
    $('#canvasDiv').hide();
    $('#right-side-menu').hide();
    $('#controlMenuButton').hide();
    $('#closeImage').hide();


    $('#closeImage').click(function () {
        closeImageDisplay();
    });

    $('#controlMenuButton').click(function () {
        $('#side-menu').show();
        $('#controlMenuButton').hide();
    });

    $('#closebutton').click(function () {
        $('#side-menu').hide();
        $('#controlMenuButton').show();
    });

    $('#colourdrop').click(function () {
        if ($('#ColourPaletteAcc').is(':hidden')) {
            $('#ColourPaletteAcc').show();
        } else {
            $('#ColourPaletteAcc').hide();
        }

    });

    $('#shapeAccbutton').click(function () {
        if ($('#shapeAccordaian').is(':hidden')) {
            $('#shapeAccordaian').show();
        } else {
            $('#shapeAccordaian').hide();
        }

    });

    $('#openTestImage').click(function () {
        openImageDisplay();
        openTestImage();
    });

    function openImageDisplay() {
        $('#canvasDiv').show();
        $('#fileSelectdiv').hide();
        $('#closeImage').show();
    }

    $('#erase').click(function () {
        erase();
    });

    function closeImageDisplay() {
        $('#canvasDiv').hide();
        $('#closeImage').hide();
        $('#fileSelectdiv').show();
        erase();
    }

    function erase() {
        canvas = document.getElementById("image-canvas");
        context = canvas.getContext("2d");
        context.clearRect(0, 0, canvas.width, canvas.height);
        context.save();
    }

    
});

