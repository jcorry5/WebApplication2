


var canvas = document.getElementById('anno-canvas');
var imageCanvas = document.getElementById('image-canvas');
var context = imageCanvas.getContext('2d');
var ctx = canvas.getContext('2d');
//Variables
var canvasx, canvasy;
var last_mousex = last_mousey = 0;
var mousex = mousey = 0;
var mousedown = false;
var penWidth =2;
var colour = 'black';
var shape = 'rect';


function shapes(choice) {
    shape = choice;
}

function penSize(size) {
    penWidth = size;
    document.getElementById("pensize").innerHTML = penWidth;
}

function colourChoice(choice) {
    colour = choice;
}

//Mousedown
$(canvas).on('mousedown', function (e) {
    canvasx = $(canvas).offset().left;
    canvasy = $(canvas).offset().top;
    last_mousex = parseInt(e.clientX - canvasx);
    last_mousey = parseInt(e.clientY - 76);
    mousedown = true;
});

//Mouseup
$(canvas).on('mouseup', function (e) {
    mousedown = false;
    context.beginPath();
    context.strokeStyle = colour;
    context.lineWidth = penWidth;
    var width = mousex - last_mousex;
    var height = mousey - last_mousey;
    switch (shape) {
        case 'rect':
            context.rect(last_mousex, last_mousey, width, height);
            context.stroke();
            break;

        case 'line':
            context.moveTo(last_mousex, last_mousey);
            context.lineTo(mousex, mousey);
            context.stroke();
            break;

        case 'arrow':
            context.moveTo(last_mousex, last_mousey);
            var headlen = 10;   // length of head in pixels
            var angle = Math.atan2(mousey - last_mousey, mousex - last_mousex);
            context.lineTo(mousex, mousey);
            context.lineTo(mousex - headlen * Math.cos(angle - Math.PI / 6), mousey - headlen * Math.sin(angle - Math.PI / 6));
            context.moveTo(mousex, mousey);
            context.lineTo(mousex - headlen * Math.cos(angle + Math.PI / 6), mousey - headlen * Math.sin(angle + Math.PI / 6));
            context.stroke();
            break;
        case 'quad':
            context.moveTo(last_mousex, last_mousey + (mousey - last_mousey) / 2);
            context.bezierCurveTo(last_mousex, last_mousey, mousex, last_mousey, mousex, last_mousey + (mousey - last_mousey) / 2);
            context.bezierCurveTo(mousex, mousey, last_mousex, mousey, last_mousex, last_mousey + (mousey - last_mousey) / 2);
            context.closePath();
            context.stroke();
            // drawing quadrant lines
            var midX = ((mousex - last_mousex) / 2) + last_mousex;
            var midY = ((mousey - last_mousey) / 2) + last_mousey;
            //horizontal
            context.beginPath();
            context.strokeStyle = colour;
            context.lineWidth = penWidth;
            context.moveTo(last_mousex, midY);
            context.lineTo(mousex, midY);
            context.stroke();
           

            //vertical
            context.beginPath();
            context.strokeStyle = colour;
            context.lineWidth = penWidth;
            context.moveTo(midX, last_mousey);
            context.lineTo(midX, mousey);
            context.stroke();
            break;
    }
    ctx.clearRect(0, 0, canvas.width, canvas.height);
});

//Mousemove
$(canvas).on('mousemove', function (e) {
    mousex = parseInt(e.clientX - canvasx);
    mousey = parseInt(e.clientY - 76);
    if (mousedown) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.beginPath();
        ctx.strokeStyle = colour;
        ctx.lineWidth = penWidth;
        var width = mousex - last_mousex;
        var height = mousey - last_mousey;
        switch (shape) {
            case 'rect':
                ctx.rect(last_mousex, last_mousey, width, height);
                ctx.stroke();
                break;

            case 'line':
                ctx.moveTo(last_mousex, last_mousey);
                ctx.lineTo(mousex, mousey);
                ctx.stroke();
                break;

            case 'arrow':
                ctx.moveTo(last_mousex, last_mousey);
                var headlen = 10;   // length of head in pixels
                var angle = Math.atan2(mousey - last_mousey, mousex - last_mousex);
                ctx.lineTo(mousex, mousey);
                ctx.lineTo(mousex - headlen * Math.cos(angle - Math.PI / 6), mousey - headlen * Math.sin(angle - Math.PI / 6));
                ctx.moveTo(mousex, mousey);
                ctx.lineTo(mousex - headlen * Math.cos(angle + Math.PI / 6), mousey - headlen * Math.sin(angle + Math.PI / 6));
                ctx.stroke();
                break;
            case 'quad':
                ctx.moveTo(last_mousex, last_mousey + (mousey - last_mousey) / 2);
                ctx.bezierCurveTo(last_mousex, last_mousey, mousex, last_mousey, mousex, last_mousey + (mousey - last_mousey) / 2);
                ctx.bezierCurveTo(mousex, mousey, last_mousex, mousey, last_mousex, last_mousey + (mousey - last_mousey) / 2);
                ctx.closePath();
                ctx.stroke();

                // drawing quadrant lines
                var midX = ((mousex - last_mousex) / 2) + last_mousex;
                var midY = ((mousey - last_mousey) / 2) + last_mousey;
                //horizontal
                ctx.beginPath();
                ctx.strokeStyle = colour;
                ctx.lineWidth = penWidth;
                ctx.moveTo(last_mousex, midY);
                ctx.lineTo(mousex, midY);
                ctx.stroke();

                //vertical
                ctx.beginPath();
                ctx.strokeStyle = colour;
                ctx.lineWidth = penWidth;
                ctx.moveTo(midX, last_mousey);
                ctx.lineTo(midX, mousey);
                ctx.stroke();
                break;
        }

        

    }
    
});
