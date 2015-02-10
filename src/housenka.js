var game = (function ($, w, undefined) {
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

    function _updateVisitCount() {
        var visits = $.cookie("visits");
        if (typeof (visits) === 'undefined') {
            visits = 0;
        }
        visits++;

        var date = new Date();
        //var nextYr = new Date().setYear(now.getFullYear() + 1);
        date.setFullYear(2020, 1, 1);

        $.cookie('visits', visits, { expires: date });
        return visits;
    }

    function init(options) {
        _initCanvas(options.canvasName);
        backgroundColor = options.backColor;
        _paintCanvas();
        var visits = _updateVisitCount();
    }

    return {
        init: init
    }
})(jQuery, window);

$(document).ready(function () {
    game.init({ canvasName: 'canvas', backColor : 'orange' });
});


