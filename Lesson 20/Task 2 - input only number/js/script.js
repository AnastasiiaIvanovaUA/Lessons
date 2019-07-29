function inputForNumber (event) {
    var char = String.fromCharCode(event.which);
    if(!(/[0-9]/.test(char))) {
        event.preventDefault();
    }
}