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
