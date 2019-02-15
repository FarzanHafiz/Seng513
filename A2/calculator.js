function input(num) {
    document.form.display.value = document.form.display.value + num;
}

function equal() {
    var exp = document.form.display.value;
    if (exp) {
    document.form.display.value = eval(document.form.display.value);
    }
}

function allClear() {
    document.form.display.value = "";
}

