var game = (function () {
    "use strict";
    var canvas = $('#canvas')[0];
    var context = canvas.getContext("2d");
    var canvasWidth = $('#canvas').width();
    var canvasHeight = $('#canvas').height();

    function paintCanvas() {
        context.fillStyle = 'orange';
        context.fillRect(0, 0, canvasWidth, canvasHeight);
        context.strokeStyle = 'black';
        context.strokeRect(0, 0, canvasWidth, canvasHeight);
    }

    function init() {
        paintCanvas();
    }

    return {
        init: init
    }
})();

$(document).ready(function () {
    game.init();
});


