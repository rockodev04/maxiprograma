function greater() {
  let one = Number(document.getElementById('one').value)
  let two = Number(document.getElementById('two').value)
  let range = 10
  if (one > range) {
    alert(`The number ${one} is greater ${range}`)
  }
  if (two > range) {
    alert(`The number ${two} is greater ${range}`)
  }

  if (one < range) {
    alert(`The number ${one} is lower than ${range}`)
  }

  if (two < range) {
    alert(`The number ${two} is lower than ${range}`)
  }

  if (one == range && two == range) {
    alert(`The number are same value`)
  }
}

function lower() {
  let one = Number(document.getElementById('lone').value)
  let two = Number(document.getElementById('ltwo').value)
  let lowernumber = document.getElementById('lowernumber')

  if (one < two) {
    lowernumber.innerHTML = `The number ${one} is lower than ${two}`
  }

  if (two < one) {
    lowernumber.innerHTML = `The number ${two} is lower than ${one}`
  }
}

function greaterorequal() {
  let one = Number(document.getElementById('gone').value)
  let two = Number(document.getElementById('gtwo').value)
  let numbergreaterorequal = document.getElementById('numbergreaterorequal')

  if (one > two) {
    numbergreaterorequal.innerHTML = `The number ${one} is greater`
  } else {

  }

  if (two > one) {
    numbergreaterorequal.innerHTML = `The number ${two} is greater`
  }

  if (one < two) {
    numbergreaterorequal.innerHTML = `The number ${one} is lower`
  }

  if (two < one) {
    numbergreaterorequal.innerHTML = `The number ${two} is lower`
  }

  if (one == two) {
    numbergreaterorequal.innerHTML = `Are equal numbers`
  }
}

// ============================================
// CODE STYLE: UNCLE BOB
// ============================================


function determineSign(number) {
  if (number > 0) return 'positive';
  if (number < 0) return 'negative';
  return 'zero';
}

function formatResultMessage(number, sign) {
  const cssClass = sign; 
  const article = sign === 'zero' ? 'is' : 'is';
  return `<p class="${cssClass}">The number ${number} ${article} ${sign}</p>`;
}

function checkNumbers() {
  const firstInput = document.getElementById('first-number');
  const secondInput = document.getElementById('second-number');
  const resultDisplay = document.getElementById('result-display');

  const firstNumber = parseFloat(firstInput.value);
  const secondNumber = parseFloat(secondInput.value);

  if (isNaN(firstNumber) || isNaN(secondNumber)) {
    resultDisplay.innerHTML = '<p class="negative">Please enter valid numbers in both fields.</p>';
    return;
  }

  const firstSign = determineSign(firstNumber);
  const secondSign = determineSign(secondNumber);

  const firstMessage = formatResultMessage(firstNumber, firstSign);
  const secondMessage = formatResultMessage(secondNumber, secondSign);

  resultDisplay.innerHTML = firstMessage + secondMessage;
}

document.getElementById('check-button').addEventListener('click', checkNumbers);

// ============================================
// CODE STYLE: UNCLE BOB
// ============================================

function evenOrodd(){
  const firstInput = Number(document.getElementById('even-number').value);
  const secondInput = Number(document.getElementById('evensecond-number').value);
  const resultDisplay = document.getElementById('display');


  if (isNaN(firstInput) || isNaN(secondInput)) {
    resultDisplay.innerHTML = '<p class="negative">Please enter valid numbers in both fields.</p>';
    return;
  }

  if(firstInput %2 === 0 ){
    return resultDisplay.innerHTML = `The number ${firstInput} is Even,`
  }else if (secondInput %2 === 0){
    return resultDisplay.innerHTML = `The number ${secondInput} is Even.`
  }else{
    return resultDisplay.innerHTML = `The number is odd.`
  }
}

document.getElementById('checkevenOrodd-button').addEventListener('click', evenOrodd);

function deduct(){
  const firstInput = Number(document.getElementById('purchase-amount').value);
  const resultDisplay = document.getElementById('discount');
  const discountOne = .1
  const discountTwo = .18
  const purchase = 1000
  const purchasehigh = 10000


  if (isNaN(firstInput)) {
    resultDisplay.innerHTML = '<p class="negative">Please enter valid numbers in both fields.</p>';
    return;
  }

  if(firstInput > purchasehigh ){
    let totaldiscountHight = firstInput - (firstInput * discountTwo) 
    resultDisplay.innerHTML = `Total purchase $ : ${totaldiscountHight}`
  }else if(firstInput >= purchase){
    let totaldiscount = firstInput - (firstInput * discountOne) 
    resultDisplay.innerHTML = `Total purchase $ : ${totaldiscount}`
  }else{
    resultDisplay.innerHTML = `Total purchase $ : ${firstInput}`
  }
}

document.getElementById('checkdiscount-button').addEventListener('click', deduct);

function HighNumber(){
  const firstInput = Number(document.getElementById('first').value);
  const secondInput = Number(document.getElementById('second').value);
  const thirdInput = Number(document.getElementById('third').value);
  const fourthInput = Number(document.getElementById('fourth').value);
  const resultDisplay = document.getElementById('highnumber');
  const listnumbers = [firstInput,secondInput,thirdInput,fourthInput]
  
  if (isNaN(firstInput) || isNaN(secondInput) || isNaN(thirdInput) || isNaN(fourthInput)) {
    resultDisplay.innerHTML = '<p class="negative">Please enter valid numbers in both fields.</p>';
    return;
  }

  let HighnumberAmoungnumbers = Math.max(...listnumbers)
  
  resultDisplay.innerHTML = `
    <p>All numbers: ${listnumbers.join(', ')}</p>
    <p class="positive">The highest number is ${HighnumberAmoungnumbers}.</p>
  `;

}

document.getElementById('highnumber-button').addEventListener('click', HighNumber);

function LowNumber(){
  const firstInput = Number(document.getElementById('lfirst').value);
  const secondInput = Number(document.getElementById('lsecond').value);
  const thirdInput = Number(document.getElementById('lthird').value);
  const fourthInput = Number(document.getElementById('lfourth').value);
  const resultDisplay = document.getElementById('lownumber');
  const listnumbers = [firstInput,secondInput,thirdInput,fourthInput]

  if (isNaN(firstInput) || isNaN(secondInput) || isNaN(thirdInput) || isNaN(fourthInput)) {
    resultDisplay.innerHTML = '<p class="negative">Please enter valid numbers in both fields.</p>';
    return;
  }
  
  let LownumberAmoungnumbers = Math.min(...listnumbers) 

  resultDisplay.innerHTML = `
    <p>All numbers: ${listnumbers.join(', ')}</p>
    <p class="positive">The lowest number is ${LownumberAmoungnumbers}.</p>
  `;

}

document.getElementById('lownumber-button').addEventListener('click', LowNumber);

function HighOrlowerNumber(){
  const firstInput = Number(document.getElementById('hlfirst').value);
  const secondInput = Number(document.getElementById('hlsecond').value);
  const thirdInput = Number(document.getElementById('hlthird').value);
  const fourthInput = Number(document.getElementById('hlfourth').value);
  const fivethInput = Number(document.getElementById('hlfiveth').value);
  const resultDisplay = document.getElementById('hldisplay');
  const listnumbers = [firstInput,secondInput,thirdInput,fourthInput,fivethInput]

  if (isNaN(firstInput) || isNaN(secondInput) || isNaN(thirdInput) || isNaN(fourthInput) || isNaN(fivethInput)) {
    resultDisplay.innerHTML = '<p class="negative">Please enter valid numbers in both fields.</p>';
    return;
  }
  
  let LownumberAmoungnumbers = Math.min(...listnumbers) 
  let HighnumberAmoungnumbers = Math.max(...listnumbers)

  resultDisplay.innerHTML = `
    <p>All numbers: ${listnumbers.join(', ')}</p>
    <p class="positive">The highest number is ${HighnumberAmoungnumbers}.</p>
    <p class="positive">The lowest number is ${LownumberAmoungnumbers}.</p>
  `;

}

document.getElementById('hlnumber-button').addEventListener('click', HighOrlowerNumber);

function Filternumber(){
  const firstInput = Number(document.getElementById('ffirst').value);
  const secondInput = Number(document.getElementById('fsecond').value);
  const thirdInput = Number(document.getElementById('fthird').value);
  const fourthInput = Number(document.getElementById('ffourth').value);
  const resultDisplay = document.getElementById('filter');
  const zero = 0
  const listnumbers = [firstInput,secondInput,thirdInput,fourthInput]

  if (
    firstInput === zero || isNaN(firstInput) ||secondInput === zero || isNaN(secondInput) ||thirdInput === zero || isNaN(thirdInput) ||
    fourthInput === zero || isNaN(fourthInput)
  ) {
    resultDisplay.innerHTML = '<p class="negative">Please enter valid numbers in all fields.</p>';
    return;
  }
  
  const highestThanoneHundred = listnumbers.filter(number => number > 100);

  resultDisplay.innerHTML = `
    <p>All numbers: ${listnumbers.join(', ')}</p>
    <p class="positive">The highest numbers than one hundred are ${highestThanoneHundred}.</p>
  `;

}

document.getElementById('filternumber-button').addEventListener('click', Filternumber);


function lowestnumberthanonehundred(){
  const firstInput = Number(document.getElementById('lohfirst').value);
  const secondInput = Number(document.getElementById('lohsecond').value);
  const thirdInput = Number(document.getElementById('lohthird').value);
  const fourthInput = Number(document.getElementById('lohfourth').value);
  const resultDisplay = document.getElementById('lowestnumber');
  const zero = 0
  const listnumbers = [firstInput,secondInput,thirdInput,fourthInput]

  if (
    firstInput === zero || isNaN(firstInput) ||secondInput === zero || isNaN(secondInput) ||thirdInput === zero || isNaN(thirdInput) ||
    fourthInput === zero || isNaN(fourthInput)
  ) {
    resultDisplay.innerHTML = '<p class="negative">Please enter valid numbers in all fields.</p>';
    return;
  }
  
  const lowestThanoneHundred = listnumbers.filter(number => number < 100);

  resultDisplay.innerHTML = `
    <p>All numbers: ${listnumbers.join(', ')}</p>
    <p class="positive">The highest numbers than one hundred are ${lowestThanoneHundred}.</p>
  `;

}

document.getElementById('lowestnumberthanonehundred-button').addEventListener('click', lowestnumberthanonehundred);

function conversionminutes(){
  const firstInput = Number(document.getElementById('minutes').value);
  const resultDisplay = document.getElementById('conversion');
  const zero = 0
  const minutes = 60
  

  if (firstInput === zero || isNaN(firstInput) ) {
    resultDisplay.innerHTML = '<p class="negative">Please enter only numbers in a field.</p>';
    return;
  }

  if(firstInput > minutes){
    let minutesTohours = firstInput / minutes
    return resultDisplay.innerHTML = `<p class="positive"><strong>${firstInput}</strong> minutes are equivalent to <strong>${minutesTohours}</strong> hour(s)..</p>`
  }

  resultDisplay.innerHTML = `<p>Your time is less than an hour: <strong>${firstInput}</strong> minutes.</p>`;

}

document.getElementById('conversion-button').addEventListener('click', conversionminutes);