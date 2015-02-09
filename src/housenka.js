var game = (function () {
    "use strict";
    var canvas;
    var context;
    var canvasWidth;
    var canvasHeight;
    var backgroundColor;

    function _initCanvas(canvasName) {
        canvas = $('#' + canvasName)[0];
        context = canvas.getContext("2d");
        canvasWidth = $('#' + canvasName).width();
        canvasHeight = $('#' + canvasName).height();
    }

    function _paintCanvas() {
        context.fillStyle = backgroundColor;
        context.fillRect(0, 0, canvasWidth, canvasHeight);
        context.strokeStyle = 'black';
        context.strokeRect(0, 0, canvasWidth, canvasHeight);
    }

    function init(options) {
        _initCanvas(options.canvasName);
        backgroundColor = options.backColor;
        _paintCanvas();
    }

    return {
        init: init
    }
})();

$(document).ready(function () {
    game.init({ canvasName: 'canvas', backColor: 'orange' });
    game.init({ canvasName: 'another', backColor: 'blue' });
    game.init({ canvasName: 'test', backColor: 'red' });
});


