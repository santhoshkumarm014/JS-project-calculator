const disply = document.getElementById("display");

function display(number) {
    disply.value += number;
}

function clear() {
    disply.value = 0;
}

function calculate() {
    try {
        disply.value = eval(disply.value);
    }
    catch {
        console.log("Error");
    }
}

function del() {
    disply.value = disply.value.slice(0, -1);
}