"use strict";

var $grid = $('.grid').imagesLoaded( function() {
    // init Packery after all images have loaded
    $grid.packery({
        itemSelector: '.grid-item',
        percentPosition: true
    });
});

