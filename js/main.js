'use strict';

var c = document.getElementById("c_1");
var ctx = c.getContext("2d");
// ctx.globalAlpha = 0.5;
// ctx.globalCompositeOperation = "lighter";
// ctx.globalCompositeOperation = "destination-over";

// var number = 50;
// var imgUrl = "http://yhamano.com/wp-content/uploads/2015/12/320x240.gif";
// var imgUrl = "icon.png";
var imgUrls = [
// Paste your list between these lines:
//------------------------------------------------------------

//------------------------------------------------------------
];

// var image = new Image();
// image.src = imgUrl;

function exec() {
    var number = document.getElementById("number").value;

    ctx.clearRect(0, 0, c.width, c.height);
    for(var i = 0; i < number; i++) {
        drawImage();
    }
}

function drawImage() {
    var randomX = Math.random() * c.width;
    var randomY = Math.random() * c.height;
    var randomTheta = Math.random() * 2 * Math.PI;
    var randomSrc = imgUrls[parseInt(Math.random() * imgUrls.length)];

    console.log("random src: " + randomSrc);

    var image = new Image();
    image.src = randomSrc;

    image.onload = function () {
        // console.log("image width: " + image.width);

        ctx.save();
        // ctx.translate(c.width / 2, c.height / 2);
        // ctx.translate(image.width / 2, image.height / 2);
        ctx.translate(randomX, randomY);
        ctx.rotate(randomTheta);
        if (image.width <= 600) {
            ctx.drawImage(image, -image.width / 2, -image.height / 2);
        } else {
            ctx.drawImage(image, -image.width / 2, -image.height / 2, image.width /2, image.height / 2);
        }
        // transparentWhite(ctx.getImageData(0, 0, image.width, image.height));

        ctx.restore();
    };
}

function transparentWhite(imgd) {
    // not work..
    var pix = imgd.data;

    // Loops through all of the pixels and modifies the components.
    for (var i = 0, n = pix.length; i <n; i += 4) {
        if (pix[i] == 255 && pix[i+1] == 255 && pix[i+2] == 255) {
            //pixel is white
            pix[i+3] == 0;
        } else {
            //pixel is not white, modify it.
        }
    }

    ctx.putImageData(imgd, 0, 0);
}
// document.getElementById("range_1").onchange = exec;
