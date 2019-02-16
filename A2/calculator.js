var invalid = false;

function input(num) {
    if (invalid === true) {
        allClear();
        invalid = false;
    }
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
    invalid = true;
    }  
}

function backSpace() {
    var exp = document.form.display.value;
    document.form.display.value = exp.substring(0, exp.length - 1);
}

function allClear() {
    document.form.display.value = "";
}