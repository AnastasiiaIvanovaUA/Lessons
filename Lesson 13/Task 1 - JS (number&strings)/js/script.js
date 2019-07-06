// Функція приймає межі випадкового числа (min, max) і виводить в консоль парне воно чи не парне 
function NumberDefinition(min, max) {
    var rand = min + Math.random() * (max + 1 - min);
    rand = Math.floor(rand);
    if (rand % 2 == 0) {
        console.log("Число парне");
    } else {
    console.log("Число НЕ парне");
    }
    return rand;
}
alert(NumberDefinition(1,15));


// Є масив строк [‘lorem’, ‘ipsum’, ‘is’, ‘simply’, ‘dummy’] або будь який інший, пройтися циклом по масивові 
// та об’єднати в строку, в якій кожне слово з великої літери
var arr = ["Lorem", "ipsum", "is", "simply", "dummy"];
for (i = 0; i < arr.length; i++) {
    console.log(arr[i]);
} // Пройшлась циклом по масивові

str = arr.join(" ");
console.log(str); // Об'єднала масив в строку

let a = str;
let b = "";
for (j = 0; j < a.length; j++) {
    b += (a[j - 1] == ' ') ? a[j].toUpperCase() : a[j];
}
console.log(b); // Всі слова строки з Великої літери

// Функція приймає дві строки і повертає більшу з них
function FindingString (str1, str2) {
    var str1 = prompt("Введіть будь-який текст", );
    var str2 = prompt("Введіть ще один будь-який текст", );
    if (str1.length > str2.length) {
        return str1;
    } else {
        return str2;
    }
}
console.log(FindingString());