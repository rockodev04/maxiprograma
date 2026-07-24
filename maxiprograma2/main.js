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
