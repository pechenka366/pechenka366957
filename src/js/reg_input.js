let numberJS;
let nameJS;
let passJS

document.querySelector('.br').onclick = myClick;


function myClick(){
    numberJS = document.querySelector('.numbeer').value;
    nameJS = document.querySelector('.namee').value;
    passJS = document.querySelector('.passs').value;
    let passTwoJS = document.querySelector('.passsTwo').value;
    console.log(nameJS)
    console.log(numberJS)
    
    if (passJS !== passTwoJS){
        alert("Пароли не совпадают")
    }
    else{
        alert(nameJS + ", Вы успешно зарегестрировались")
    }
}




