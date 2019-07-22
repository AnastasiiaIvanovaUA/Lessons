// Написати метод який поверне строку вигляду “html - 5”
var skill = {
    name: 'html',
    level: 5,
    FullName: function() {
        return this.name + " - " + this.level
    }
}
console.log(skill.FullName());

// Додати метод newString() в прототип String, який буде робити першу і останню літеру строки великою
var text = "lorem ipsum is simply dummy elit";

function lastLetterToUpperCase(str) {
  str = str.split(' ');
  arr = [];
  for (i = 0; i < str.length; i++) {
    newString = str[i].charAt(0).toLowerCase() + str[i].substring(1, str[i].length - 1) + str[i].charAt(str[i].length - 1).toUpperCase();
    arr.push(newString);
  }
  string = arr.join(' ');
  return string;
}
console.log(lastLetterToUpperCase(text));

function firstLetterToUpperCase () {
    return text.split(" ").map(function(item) {
      return item.charAt(0).toUpperCase() + item.slice(1).toLowerCase();
    }).join(" ");
}
  console.log(firstLetterToUpperCase(text));