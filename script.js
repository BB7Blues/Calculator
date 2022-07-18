function add(a,b){

    return a + b;
}

function multiply(a,b){
    return a * b;
}

function subtract(a,b){
    return a - b ;
}

function divide(a,b){
    return a/b;
}

function operate(a,b,c){

    if (b == "+") return add(a,c);
    if (b == "-") return subtract(a,c);
    if (b == "*") return multiply(a,c);
    if (b == "/") return divide(a,c);

}

const numberPad = document.querySelector('.numbers');
const operatorPad = document.querySelector('.operators');

for (let i = 1 ; i < 10;i++){
    let knopf = document.createElement('div');
    let num   = document.createElement('div');
    knopf.classList.add('nButton');
    num.classList.add('nummer');
    knopf.setAttribute('id',"n" + i);
    num.textContent = i;
    numberPad.appendChild(knopf);
    knopf.appendChild(num);

}
for (let i = 1 ; i < 5;i++){
    let knopf = document.createElement('div');
    let num   = document.createElement('div');
    knopf.classList.add('oButton');
    num.classList.add('operator');
    num.setAttribute('id', "op" +i);
    knopf.setAttribute('id',"o" + i);
    
    operatorPad.appendChild(knopf);
    knopf.appendChild(num);
}

const plus = document.getElementById('op1');
const minus = document.getElementById('op2');
const teilen = document.getElementById('op3');
const mal = document.getElementById('op4');
plus.textContent = "+";
minus.textContent = "-";
teilen.textContent = "/";
mal.textContent = "x";




const values = document.querySelector('.valueContainer');

const buttons = document.querySelectorAll('.nButton');

buttons.forEach(btn => {
    
    btn.addEventListener('click', () =>{
        let text = btn.querySelector('.nummer');
        let value = document.createElement('div');
        value.classList.add('displayValue');
        value.textContent = btn.textContent;
        console.log(btn.textContent);
        values.appendChild(value);
    });
    
    
});

    



