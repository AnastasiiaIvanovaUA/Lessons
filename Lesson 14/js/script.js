// Додавати елементи в масив через метод prompt(), поки користувач ненатисне cancel
var MyVar = [];
var tmp = 0;
for(var i; true; i++){
   tmp = prompt("", "");
   if (tmp == null){
       break;
       } else {
       MyVar.push(tmp);
   }
}


// Знайти суму елементів двовимірного масиву
var arr = [
    [1, 7], 
    [5, 5], 
    [6, 4]
];
var sum =  0;
for (var i = 0; i < arr.length; i++) {
    for (var j = 0; j < arr[i].length; j++) {
        sum += arr[i][j];
    }
}
console.log(sum); // 28


// Розбити строку lorem по розділювачу ‘ ’ і вивести в консоль слова, довжиною більше 5
var text = "Contrary to popular belief, lorem ipsum is not simply random text";
var newArr = text.split(" ").filter(function(el) {
    return el.length > 5;
});
console.log(newArr); // "Contrary", "popular", "belief", "simply", "random"


// Дано масив [1, 9, 22, 7, 6] потрібно додати число 8 після 22
var arr = ["1", "9", "22", "7", "6"];
console.log(arr);
arr.splice(3, 0, "8");
console.log(arr); 


// Написати функцію randomNumber(number), яка наповнює масив випадковими числами від 0 до 100, де number довжина масиву
function randomNumber(number, max) {
    return Array.apply(null, Array(number)).map(function() {
        return Math.round(Math.random() * max);
    });
}
console.log(randomNumber(5, 100));


// Перевірити чи в масиві є число, яке вводиться через prompt()
var arr = [2, 3, 6, 7];
var result = parseInt(prompt("Введіть число від 1 до 10", ""));
for (var i = 0; i < arr.length; i++) {
    if (result == arr[i]) {
        console.log("Влучив!");
    } else {
        console.log("Промазав!");
    }
}


// За допомогою методу forEach знайти найдовше слово в строці lorem
function longestWord (string) {
    var string = "Contrary to popular belief";
    var str = string.split(" ");
    var longest = 0;
    var word = null;
    for (var i = 0; i < str.length - 1; i++) {
        if (longest < str[i].length) {
            longest = str[i].length;
            word = str[i];
        }
    }
    return word;
}
console.log(longestWord()); // Contrary


// За допомогою методу map створити масив квадратів масиву arr = [8, 6, 12, 10];
var Array = [8, 6, 12, 10];
var NewArray = Array.map(function(elem) {
    return elem ** 2;
});
console.log(NewArray); // [64, 36, 144, 100]

var Arr = [8, 6, 12, 10];
var NewArr = [];
for (i = 0; i < Arr.length; i++) {
    var sqr = Arr[i] * Arr[i];
    NewArr.push(sqr);
}
// console.log(NewArr); // [64, 36, 144, 100]