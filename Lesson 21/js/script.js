var xhr = new XMLHttpRequest();
xhr.open('GET', 'https://my-json-server.typicode.com/typicode/demo/posts', false);
xhr.send();
if (xhr.status != 200){
    alert ('Помилка' + xhr.status + ': ' + xhr.statusText);
} else {
    alert (xhr.responseText);
}
