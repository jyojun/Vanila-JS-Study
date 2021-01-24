const calculator = document.querySelector(".calculator");
const buttonLines = calculator.querySelectorAll(".buttonLine");

const cancel = buttonLines[0].querySelector("#C");

const seven = buttonLines[1].querySelector("#seven");
const eight = buttonLines[1].querySelector("#eight");
const nine = buttonLines[1].querySelector("#nine");
const plus = buttonLines[1].querySelector("#plus");

const four = buttonLines[2].querySelector("#four");
const five = buttonLines[2].querySelector("#five");
const six = buttonLines[2].querySelector("#six");
const minus = buttonLines[2].querySelector("#minus");

const one = buttonLines[3].querySelector("#one");
const two = buttonLines[3].querySelector("#two");
const three = buttonLines[3].querySelector("#three");
const multiply = buttonLines[3].querySelector("#multiply");

const zero = buttonLines[4].querySelector("#zero");
const equal = buttonLines[4].querySelector("#equal");
const divide = buttonLines[4].querySelector("#divide");

const result = buttonLines[0].querySelector(".monitor");

let status = null;
let inputValue = "0";
let preValue = 0;
let resultValue = 0;
result.value = 0;

function addOutput(event){
    //console.log(event.target.id);
    const eventId = event.target.id;
    //console.log(result.value.length);

    if(inputValue === '0'){
        if(eventId === 'seven'){
            inputValue = '7';
        } else if(eventId === 'eight') {
            inputValue = '8';
        } else if(eventId === 'nine') {
            inputValue = '9';
        } else if(eventId === 'four') {
            inputValue = '4';
        } else if(eventId === 'five') {
            inputValue = '5';
        } else if(eventId === 'six') {
            inputValue = '6';
        } else if(eventId === 'one') {
            inputValue = '1';
        } else if(eventId === 'two') {
            inputValue = '2';
        } else if(eventId === 'three') {
            inputValue = '3';
        } else {
            inputValue = '0';
        }
    }
    else{
        if(eventId === 'seven'){
            inputValue += '7';
        } else if(eventId === 'eight') {
            inputValue += '8';
        } else if(eventId === 'nine') {
            inputValue += '9';
        } else if(eventId === 'four') {
            inputValue += '4';
        } else if(eventId === 'five') {
            inputValue += '5';
        } else if(eventId === 'six') {
            inputValue += '6';
        } else if(eventId === 'one') {
            inputValue += '1';
        } else if(eventId === 'two') {
            inputValue += '2';
        } else if(eventId === 'three') {
            inputValue += '3';
        } else {
            inputValue += '0';
        }
    }

    result.innerText = `${inputValue}`;
}

function resetValue(){
    inputValue = '0';
    preValue = 0;
    resultValue = 0;
    status = null;
    result.innerText = `${inputValue}`;
}
function displayNumber(){
    let currentValue = parseInt(inputValue);
    if(status !== null){
        if(status === '+'){
            resultValue += currentValue;
        }
        else if(status === '-'){
            resultValue -= currentValue;
        }
        else if(status === '*'){
            resultValue *= currentValue;
        }
        else{
            resultValue /= currentValue;
        }
    } else{
        resultValue = currentValue;
    }
    result.innerText = `${resultValue}`;
    
}

function calculate(event){
    let currentValue = parseInt(inputValue);
    const eventId = event.target.id;
    preValue = currentValue;
    if(status !== null){
        if(status === '+'){
            resultValue += preValue;
        }
        else if(status === '-'){
            resultValue -= preValue;
        }
        else if(status === '*'){
            resultValue *= preValue;
        }
        else{
            resultValue /= preValue;
        }
    } else{
        resultValue = preValue;
    }
    //console.log(eventId);

    if(eventId === 'plus'){
        status = '+'
    } else if(eventId === 'minus'){
        status = '-'
    } else if(eventId === 'multiply'){
        status = '*'
    } else {
        status = '/'
    }
    inputValue = '0';
    result.innerText = `${resultValue}`;
}

function displayResult(){

}

function init(){
    
    // number input
    seven.addEventListener("click", addOutput)
    eight.addEventListener("click", addOutput)
    nine.addEventListener("click", addOutput)
    four.addEventListener("click", addOutput)
    five.addEventListener("click", addOutput)
    six.addEventListener("click", addOutput)
    one.addEventListener("click", addOutput)
    two.addEventListener("click", addOutput)
    three.addEventListener("click", addOutput)
    zero.addEventListener("click", addOutput)

    // reset 
    cancel.addEventListener("click", resetValue);

    // calculate
    plus.addEventListener("click", calculate);
    minus.addEventListener("click", calculate);
    multiply.addEventListener("click", calculate);
    divide.addEventListener("click", calculate);

    // result
    equal.addEventListener("click", displayNumber);

    result.innerText = `${inputValue}`;

}

init();