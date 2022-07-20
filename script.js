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
const specialPad = document.querySelector('.specialContain');
const specialPad2 = document.querySelector('.specialContain2');

for (let i = 0 ; i < 2;i++){
    let knopf = document.createElement('div');
    let num   = document.createElement('div');
    knopf.classList.add('sButton');
    num.classList.add('special');
    knopf.setAttribute('id',"sBo" + i);
    num.setAttribute('id', "sBottom" +i);
    num.textContent = i;
    specialPad2.appendChild(knopf);
    knopf.appendChild(num);

}

for (let i = 0 ; i < 2;i++){
    let knopf = document.createElement('div');
    let num   = document.createElement('div');
    knopf.classList.add('sButton');
    num.classList.add('special');
    knopf.setAttribute('id',"sB" + i);
    num.setAttribute('id', "s" +i);
    num.textContent = i;
    specialPad.appendChild(knopf);
    knopf.appendChild(num);

}

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
let numberArrayNew = [];
let numberArrayOld = [];
let operatorArray = [];
let fullNumbernew = 0;
let fullNumberold = 0;
const plus = document.getElementById('op1');
const minus = document.getElementById('op2');
const teilen = document.getElementById('op3');
const mal = document.getElementById('op4');
const clearBtn = document.getElementById('s0');
const delBtn = document.getElementById('s1');
const zero = document.getElementById('sBottom0');
const equal = document.getElementById('sBottom1');
zero.textContent = "0";
equal.textContent   = "=";
clearBtn.textContent = "AC";
delBtn.textContent   = "DEL";
plus.textContent = "+";
plus.setAttribute('moperator',"+");
minus.textContent = "-";
minus.setAttribute('moperator',"-");
teilen.textContent = "";
teilen.setAttribute('moperator',"/");
mal.textContent = "x";
mal.setAttribute('moperator',"*");

function clearDisplay(){

    let everything = values.querySelectorAll('.displayValue');
    everything.forEach(a =>{
        values.removeChild(a);
    });
    numberArrayNew = [];
    numberArrayOld = [];
    operatorArray = [];
    fullNumbernew = 0;
    fullNumberold = 0;
}


const values = document.querySelector('.valueContainer');
const operateButtons = document.querySelectorAll('.oButton');
const acBtn = document.getElementById('sB0');
const zeroBtn = document.getElementById('sBo0');
const equalBtn = document.getElementById('sBo1');
const buttons = document.querySelectorAll('.nButton');


acBtn.addEventListener('click', clearDisplay);
zeroBtn.addEventListener('click', ()=> {

    let text = document.getElementById('sBottom0');
    let value = document.createElement('div');
    value.classList.add('displayValue');
    value.textContent = text.textContent;
    numberArrayNew.push(value.textContent);
    fullNumbernew = parseInt(numberArrayNew.reduce((total,num) => {
      
        return total  = total + num;
    },0))

    values.appendChild(value);


});
equalBtn.addEventListener('click', ()=> {
   let value = document.createElement('div');
    
   
   let everything = values.querySelectorAll('.displayValue');
    everything.forEach(a =>{
        values.removeChild(a);
    });

    value.classList.add('displayValue');
    value.textContent = operate(fullNumberold,operatorArray,fullNumbernew);
    fullNumbernew = operate(fullNumberold,operatorArray,fullNumbernew);
    numberArrayNew = [];
    numberArrayOld = [];
    operatorArray = [];
    numberArrayNew.push(fullNumbernew);
    fullNumberold = 0;
    values.appendChild(value);

});

operateButtons.forEach(btn => {
    
    btn.addEventListener('click', () =>{
        if (operatorArray[0] == "+" || operatorArray[0] == "-" || operatorArray[0] == "*" || operatorArray[0] == "/") {
            let value = document.createElement('div');
    
   
            let everything = values.querySelectorAll('.displayValue');
             everything.forEach(a =>{
                 values.removeChild(a);
             });
         
             value.classList.add('displayValue');
             value.textContent = operate(fullNumberold,operatorArray,fullNumbernew);
             fullNumbernew = operate(fullNumberold,operatorArray,fullNumbernew);
             numberArrayNew = [];
             numberArrayOld = [];
             operatorArray = [];
             numberArrayNew.push(fullNumbernew);
             fullNumberold = 0;
             values.appendChild(value);
        }
        let mop = btn.querySelector('.operator');
        let value = document.createElement('div');
        value.classList.add('displayValue');
        value.textContent = btn.textContent;
        console.log(mop.getAttribute('moperator'));
        fullNumberold = fullNumbernew;
        fullNumbernew = 0;
        numberArrayOld = numberArrayNew;
        numberArrayNew = [];
        operatorArray.push(mop.getAttribute('moperator'));
        console.log("op array");
        console.log(operatorArray);
        values.appendChild(value);
    });
    
    
});

buttons.forEach(btn => {
    
    btn.addEventListener('click', () =>{
        
        let value = document.createElement('div');

        value.classList.add('displayValue');

        value.textContent = btn.textContent;

        numberArrayNew.push(value.textContent);

        console.log(numberArrayNew);

        console.log(numberArrayOld);

        // Machst aus 2 auf einanderfolgenden Zahlen ohne Operator eine
        fullNumbernew = parseInt(numberArrayNew.reduce((total,num) => {
         
            return total  = total + num;
        },0))
        console.log(fullNumbernew);
        console.log(fullNumberold);
        values.appendChild(value);
    });
    
    
});