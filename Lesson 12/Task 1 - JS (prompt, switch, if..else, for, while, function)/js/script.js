// Hаписати оператор if..else, який примає значення з prompt і виводить в консоль:
// 1, якщо значення більше нуля
// -1, якщо значення менше нуля
// 0, якщо значення дорівнює нулю
var result = prompt("Введіть будь-яке число", 0)
if (result > 0) {
    console.log(1);
} else if (result < 0) {
    console.log(-1);
} else {
    console.log(0);
}

// переписати if..else в тернарний оператор:
// var a = 1;
// var n;
// if(a > 0) { n = true; }
// else { n = false; }
var a = 1;
var n = (a > 0) ? `true` : `false`;
console.log(n);

// За допомогою конструкції switch записати такі умови:
// якщо ввели 1, то вивести в консоль "a"
// якщо ввели 2 -- "b"
// якщо ввели 3 -- "c"
// інакше -- "z"
var result = prompt("Введіть значення від 1 до 5", 1);
switch(result) {
    case "1":
        console.log("a");
        break;
    case "2":
        console.log("b");
        break;
    case "3":
        console.log("c");
        break;
    default:
        console.log("z");
}

// Bивести в консоль за допомогою циклу for квадрати чисел від 1 до 9 (1, 4, 9 .. 81)
for (var i = 1; i < 10; i++) {
    console.log(i**2);
}

// Bивести в консоль за допомогою циклу while квадрати чисел від 1 до 9 (1, 4, 9 .. 81)
var i = 1;
while (i < 10) {
    console.log(i**2);
    i++;
}

// Функція приймає два параметри (числа) і повертає більший з них
function MaxNumber (result1, result2) {
    var result1 = prompt("Введіть будь-яке число", 0);
    var result2 = prompt("Введіть ще одне будь-яке число", 0);
    if (result1 > result2) {
        return result1;
    } else {
        return result2;
    }
}
console.log(MaxNumber ());