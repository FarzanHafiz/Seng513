function input(num) {
    var exp = document.form.display.value;
    document.form.display.value = exp + num;
}

function equal() {
    var exp = document.form.display.value;
    try {
        if (exp) {
        document.form.display.value = eval(exp);
        }
    }
    catch (e) {
        document.form.display.value = "Invalid";
    }   
}

function allClear() {
    document.form.display.value = "";
}