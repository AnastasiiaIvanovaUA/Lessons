function add() {
    var input = document.getElementById('text');
    var newInput = input.cloneNode(true);
    var out = document.getElementById('out0');

    out.appendChild(newInput);
}

function remove() {
    var input = document.getElementById('text');
    var newInput = input.remove(input);

    newInput.removeChild(cloneNode);
}

// Однак видаляє навіть батьківський input, який після видалення неможливо додати

function Add() {
    var doubleInput = document.getElementById('button-addon1');
    var button = document.getElementById('button-addon2');

    var newDoubleInput = doubleInput.cloneNode(true);
    var newButton = button.cloneNode(true);

    var outOne = document.getElementById('out');

    outOne.appendChild(newDoubleInput);
    outOne.appendChild(newButton);
}

function Remove() {
    var doubleInput = document.getElementById('button-addon1');
    var newDoubleInput = doubleInput.remove(doubleInput);

    var button = document.getElementById('button-addon2');
    var newButton = button.remove(button);


    newDoubleInput.removeChild(cloneNode);
    newButton.removeChild(cloneNode);
}