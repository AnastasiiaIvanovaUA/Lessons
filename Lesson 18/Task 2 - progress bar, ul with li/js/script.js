function userProgress(time) {
    var start = 0;
    var time = Math.round(time*1000/100);
    var progressElement = document.getElementById('user-progress');
    var intervalId = setInterval(function() {
        if (start>100) {
            clearInterval(intervalId);
            userProgressCallBack();
        } else {
            progressElement.value = start;
        }
        start++;
    }, time);
}
function userProgressCallBack() {
    document.querySelector('.hidden-block').style.display = 'block';
}
userProgress(5);



$("ul").css('list-style-type', 'decimal')

$(document).ready(function(){
    $("#btn").click(function(){
        $("ul").append("<li>Appended item</li>");
      });
});

