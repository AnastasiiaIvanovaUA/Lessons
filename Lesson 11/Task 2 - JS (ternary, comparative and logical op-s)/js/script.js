// a = 6; b = 3; a > b
a = 6;
b = 3;
console.log(a > b); // true

// a = 3; b = 3; a == b
a = 3;
b = 3;
console.log(a == b); // true

// a = 3; b = 6; a != b
a = 3;
b = 6;
console.log(a != b); // true

// a = 1; b=””; a === b
a = 1;
b = "";
console.log(a === b); // false

// ‘B’ > ‘A’, ‘a’ > ‘Z’
console.log(`B` > `A`); // true 
console.log(`a` > `Z`); // true 

// a = false; b = 0; a>=b
a = false;
b = 0;
console.log(a >= b); // true

// (‘2’ === 2) ? ‘ok’ : ‘not’
var result = ("2" === 2) ? `ok` : `not`;
console.log(result); // not

// Практика: умова а = 5, b = 3;
var a = 5; 
var b = 3;

// (a > b) && (a === b)
console.log((a > b) && (a === b)); // false

// true && 0 && (‘a’ < ‘Z’)
console.log(true && 0 && ("a" < "Z")); // 0

// (a > b) || true || (‘2’ == 2) || (false == ‘’)
console.log((a > b) || true || ("2" == 2)); //true

// (a < b) && (0 == false)
console.log((a > b) && (0 == false)); //true

// !(2 == 2) || (true && ‘’)
console.log(!(2==2) || (true && "")); // пуста строка 

