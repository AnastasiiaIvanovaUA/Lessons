// знайти ul елемент та знайти другий li (Task 1)
console.log(document.body.children[1]); // <ul>...</ul>
console.log(document.body.children[1].children[1]); // <li> CSS </li>

// знайти елемент з класом list, знайти другий li і змінити в ньому текст, зробити текст в div червоним (Task 2)
console.log(document.getElementsByClassName("list")); // HTMLCollection [ul.list]
console.log(document.body.children[3].children[1]); // <li> CSS </li>
document.body.children[3].children[1].innerHTML = " Java Script ";
document.body.children[2].style.color = "red";

// до чекбокса додати атрибут checked
var elem = document.getElementById("input");
elem.setAttribute("checked", "");
console.log(document.body.innerHTML); // У input виводить усі атрибути включно з новим

// якщо параграф має клас text, то видалити його і навпаки
var elem = document.getElementById("p");
elem.classList.toggle("text");
console.log(document.body.innerHTML); // у "р" клас залишився, а вміст text пропав 

// додати в список ul - 5 елементів li з текстом від 1 до 5

var parent = document.getElementById('list');

for (var i = 1; i <= 5; i++) {
	var li = document.createElement('li');
	li.innerHTML = i;
	parent.appendChild(li);
} 
// на сайті добавлені ul від 1 до 5