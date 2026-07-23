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

function numbergreaterthanzero() {
  let one = Number(document.getElementById('pnone').value)
  let two = Number(document.getElementById('pntwo').value)
  let numberpositiveornegative = document.getElementById('numberpositiveornegative')
  let zero = 0
  let result = ''

  if (one > zero) {
    result += `The number ${one} is positive<br>`
  }

  if (two > zero) {
    result += `The number ${two} is positive<br>`
  }

  if (one < zero) {
    result += `The number ${one} is negative<br>`
  }

  if (two < zero) {
    result += `The number ${two} is negative<br>`
  }

  if (one == zero && two == zero) {
    result += `Both number are zero<br>`
  }

  numberpositiveornegative.innerHTML = result
}

