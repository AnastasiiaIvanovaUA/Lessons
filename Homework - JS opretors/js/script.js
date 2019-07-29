// Перевірити чи число знаходиться в діапазоні від 25 до 99 включно (25 і 99 входять в діапазон) 
// Число ввести за допомогою prompt. Якщо відвідувач ввів число не з діапазону - попросити ввести ще раз, і так далі 
// Цикл повинен питати число поки відвідувач не введе число з діапазону, або не натисне кнопку Cancel (ESC)

var num = prompt("Введіть будь-яке число", 0);

if (num == null) {
   console.log("Cancel was pressed");
}
else {
   console.log("OK was pressed");
       if (num < 26 && num > 100){ 
           console.log(num);
       } else{
           console.log("The number is out of range");
       }
   }

// Вивести в консоль всі непарні числа від 20 до 40
for (i = 20; i < 41; i++) {
    if (i % 2 !== 0) {
        console.log(i);
    }
}


/* Переписати код через тернарний оператор
if(a === b) { 
    rezult = "a and b are equal";
    } else if(a > b) { 
         rezult = "a is greater";
    } else { 
         rezult = "b is greater"; 
    } */

var code = (a === b) ? rezult = "a and b are equal" :
(a > b) ? rezult = "a is greater" :
(a < b) ? rezult = "b is greater" :
"";


// Написати функцію яка приймає два параметри range(a, b) і виводить непарні числа від a до b. 
function range (a, b) {

    var a = prompt("Number a?", '');
    var b = prompt("Number b? Can be more than a", '');

    for (i = a; i <= b; i++) {
         if (i % 2 !== 0) {
              console.log(i)
         }
    } 
}

range();