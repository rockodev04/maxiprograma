function powNumber(){
  let numberToRead = Number(document.getElementById("number").value)
  let pow = numberToRead * numberToRead * numberToRead
  let answer = document.getElementById("answer")
  return answer.innerHTML = pow
}

function calculateage(){
  let currentYear = Number(document.getElementById('year').value)
  let bornYear = Number(document.getElementById('born').value)
  let ageUser = currentYear - bornYear
  let age = document.getElementById('age')
  return age.innerHTML = `Your age is ${ageUser}`
}

function timeToArrive(){
  let distance = Number(document.getElementById('distance').value)
  let speedCar = Number(document.getElementById('speed').value)
  let time =  distance / speedCar 
  let arrival = document.getElementById('time')
  return arrival.innerHTML = `Your arrival time is ` + time
}

function salary(){
  let paycheck = Number(document.getElementById('paycheck').value)
  let pay = 15000
  let commission = .05
  let payTotal =  paycheck * commission + pay 
  let cash = document.getElementById('cash')
  return cash.innerHTML = `Your cash is ` + payTotal
}

function average(){
  let firstGrade = Number(document.getElementById('first').value)
  let secondGrade = Number(document.getElementById('second').value)
  let thirdGrade = Number(document.getElementById('thrid').value)
  let averageGrade =  (firstGrade + secondGrade + thirdGrade) / 3
  let result = document.getElementById('result')
  return result.innerHTML = `Your average grade is ` + averageGrade
}

function squaremeters(){
  let totalmeters = Number(document.getElementById('meters').value)
  let coveredmeters = Number(document.getElementById('covered').value)
  let percent = 100
  let percentcovered =  (coveredmeters /  totalmeters ) * percent
  let uncovered = percent - percentcovered
  let percentresult = document.getElementById('percentresult')
  let uncoveredresult = document.getElementById('uncover')
  
  percentresult.innerHTML = `Percent covered: ` + percentcovered + `%`
  uncoveredresult.innerHTML = `Percent uncovered: ` + uncovered + `%`
}

function discount(){
  let totalpurchase = Number(document.getElementById('total').value)
  let percentdiscount = 15
  let percent = 100
  let originalprice = (totalpurchase * percentdiscount) / percent
  let pricewithdiscount = totalpurchase - originalprice

  let totaldiscount = document.getElementById('totaldiscount')
  return totaldiscount.innerHTML = `Your total with discount is  ` + pricewithdiscount
}

function totalgener(){
  let totalmen = Number(document.getElementById('totalmen').value)
  let totalwomen = Number(document.getElementById('totalwomen').value)
  let percent = 100
  let totalpeople = totalmen + totalwomen
  let percentmen = (totalmen / totalpeople) * percent
  let percentwomen = (totalwomen / totalpeople) * percent

  let resultmen = document.getElementById('resultmen')
  let resultwomen = document.getElementById('resultwomen')

  resultmen.innerHTML = `Percent men: ` + percentmen + `%`
  resultwomen.innerHTML = `Percent women: ` + percentwomen + `%`
} 

function operations(){
  let firstnumber = Number(document.getElementById('numberone').value)
  let secondnumber = Number(document.getElementById('numbertwo').value)

  let add = firstnumber + secondnumber
  let subtract = firstnumber - secondnumber
  let multiply = firstnumber * secondnumber
  let division = firstnumber / secondnumber

  let resultadd = document.getElementById('add')
  let resultsubtract = document.getElementById('subtract')
  let resultmultiply = document.getElementById('multiply')
  let resultdivision = document.getElementById('division')

  resultadd.innerHTML = `Your add is: ` + add
  resultsubtract.innerHTML = `Your subtract is : ` + subtract
  resultmultiply.innerHTML = `Your multiply is : ` + multiply
  resultdivision.innerHTML = `Your division is : ` + division
}