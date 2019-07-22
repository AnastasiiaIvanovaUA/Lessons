// Hаписати калькулятор з методами add() додає два значення, mul() перемножає їх
function add () {
    var numberOne, numberTwo, result;

    numberOne = document.getElementById("numberOne").value;
    numberOne = parseInt(numberOne);

    numberTwo = document.getElementById("numberTwo").value;
    numberTwo = parseInt(numberTwo);

    result = numberOne + numberTwo;

    document.getElementById("out").innerHTML = result;
}

function mul () {
    var numberOne, numberTwo, result;

    numberOne = document.getElementById("numberOne").value;
    numberOne = parseInt(numberOne);

    numberTwo = document.getElementById("numberTwo").value;
    numberTwo = parseInt(numberTwo);

    result = numberOne * numberTwo;

    document.getElementById("out").innerHTML = result;
}

//  ще один варіант для калькулятора, однак без взаємодії з користувачем 

var calc = function(op) {

    var Sum = function() {
        var sum = 0;
        for (item of arguments) {
            console.log(item);
            sum += item;
        }
        return sum;
    }

    var Mul = function() {
        var mul = 1;
        for (item of arguments) {
            console.log(item);
            sum *= item;
        }
        return mul;
    }
    return(op == "+") ? Sum : Mul;
}
console.log(calc("*")(1, 5, 8, 9));


// Написати таймер Timer через прототипи з методами start(), stop(), reset()
window.onload = () => {
    let hour = 0;
    let minute = 0;
    let seconds = 0;
    let totalSeconds = 0;
      
    let intervalId = null;
      
function startTimer() {
    ++totalSeconds;
    hour = Math.floor(totalSeconds /3600);
    minute = Math.floor((totalSeconds - hour*3600)/60);
    seconds = totalSeconds - (hour*3600 + minute*60);
    
    document.getElementById("hour").innerHTML =hour;
    document.getElementById("minute").innerHTML =minute;
    document.getElementById("seconds").innerHTML =seconds;
}
    
document.getElementById('start-btn').addEventListener('click', () => {
    intervalId = setInterval(startTimer, 1000);
})
      
document.getElementById('stop-btn').addEventListener('click', () => {
    if (intervalId)
    clearInterval(intervalId);
});
        
document.getElementById('reset-btn').addEventListener('click', () => {
    totalSeconds = 0;
    document.getElementById("hour").innerHTML = '0';
    document.getElementById("minute").innerHTML = '0';
    document.getElementById("seconds").innerHTML = '0';
});
}