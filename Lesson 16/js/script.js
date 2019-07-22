// написати функцію яка буде повертати методи для виведення і задання iмені
var person = {
  firstName: 'Ivan',
  lastName: 'Ivanov',
  get fullName() {
    return '${person.firstName} ${person.lastName}';
  },
  set fullName(value) {
    const parts = value.split(' ');
    this.firstName = parts[0];
    this.lastName = parts[1];
  }
};
person.fullName = 'Ivan Ivanov';
console.log(person)


// Створіть об'єкт calculator з методами: sum () повертає суму двох значень, mul () повертає добуток двох значень
var calculator = {
    number1: 2,
    number2: 3,
    sum: function() {
        console.log(this.number1 + this.number2);
    },
    mul: function() {
        console.log(this.number1 * this.number2)
    }
}
calculator.sum();
calculator.mul();


// Переписати об'єкт calculator з методами через конструктор
function Calculator() {
    this.number = function() {
      this.number1 = 2;
      this.number2 = 3;
    };
    this.sum = function() {
      return this.number1 + this.number2;
    };
    this.mul = function() {
      return this.number1 * this.number2;
    };
  }
  var calculator = new Calculator();
  calculator.number();
console.log("Сума: " + calculator.sum());
console.log("Добуток: " + calculator.mul());


// Явно задати контекст(this) для цих фунцій
function sum () {
  console.log(this.number1 + this.number2);
}
function mul () {
  console.log(this.number1 * this.number2);
}
var calculator = {
  number1: 2,
  number2: 3
};
sum.call(calculator);
mul.call(calculator);