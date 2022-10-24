let logJS;
let lpasJs;


document.querySelector('.brr').onclick = myClickTwo;

function myClickTwo() {
    logJS = document.querySelector('.log').value;
    lpasJs = document.querySelector('.pas').value;
    if (logJS == numberJS) {
        alert("Верное имя");
        console.log(nameJS)
        console.log(numberJS)

    } else {
        alert('s')
    }

}
