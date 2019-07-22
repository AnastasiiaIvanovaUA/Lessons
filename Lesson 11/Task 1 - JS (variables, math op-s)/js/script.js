// Створити змінну name зi своїм ім’ям і оголосити змінну student, тоді присвоїти student своє ім'я
var name = "Anastasiia";
var student;
student = name;
console.log(student); // Anastasiia


// Виконати завдання: 11%2
var a = 11 % 2;
console.log(a); // 1

var b = 11;
var c = 2;
var d = b % c;
console.log(d); // 1


// Виконати завдання: 36%3
var A = 36 % 3;
console.log(A);  // 0

var B = 36;
var C = 3;
var D = B % C;
console.log(D); // 0


// Виконати завдання: "5" + 2 
var e = "5" + 2;
console.log(e); // 52


// Виконати завдання: "Hello" + 5
var E = "Hello" + 5;
console.log(E); // Hello5


// Яка різниця між ++х і х++?
x = 1;
y = x++;

console.log(x); // 2
console.log(y); // 1

X = 1;
Y = ++X;

console.log(X); // 2
console.log(Y); // 2 

// Різниця в тому, що ++х спочатку збільшить значення х, а тоді поверне вже збільшене значення до у
// А х++ теж збільшить значення х, однак поверне до у значення, яке х має ДО збільшення 