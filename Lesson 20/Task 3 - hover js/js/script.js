var table = document.querySelector('table');

table.addEventListener('mouseover', function(event) {
	var target = event.target;
  if (target.tagName == 'TD') {
  	target.classList.add('color');
  }
	console.dir(event.target);
})