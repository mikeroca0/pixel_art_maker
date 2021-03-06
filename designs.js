// Select color input
// Select size input
var color = "";
// When size is submitted by the user, call makeGrid()
var sizePicker = document.querySelector("#sizePicker");
sizePicker.addEventListener("submit", function (event) {
    event.preventDefault();
    var heightElement = document.getElementById("inputHeight");
    var widthElement = document.getElementById("inputWidth");
    var height = heightElement.value;
    var width = widthElement.value;
    makeGrid(height, width);
})
function makeGrid(h, w) {

// Your code goes here!

// Deletes previous table if any

    var x = 1;
    var t = "table" + x;
    var row = document.getElementById(t);
    while (row !== null) {
        row.remove();
        x = ++x;
        t = "table" + x;
        row = document.getElementById(t);
    }

// Draws canvas

    var table = document.querySelector("#pixelCanvas");
    for (var i = 1; i <= h; i++) {
        table.insertAdjacentHTML("afterbegin", "<tr id = table" + i + "></tr>");
        var line = document.querySelector("#table" + i);
        for (var j = 1; j <= w; j++) {
            line.insertAdjacentHTML("afterbegin","<td id = cell" + i + j +"></td>");
        }
    }

// Adds color to cell

    document.getElementById("pixelCanvas").addEventListener("click", function () {
        var colorElement = document.getElementById("colorPicker");
        var color = colorElement.value;
        var click = event.target.id;
        var elem = document.getElementById(click);
        var attrib = elem.hasAttribute("style");
        if (attrib === true) {
            elem.removeAttribute("style");
        } else {
            elem.style.backgroundColor = color;
        }
    })
}
