function powNumber(){
  let numberToRead = Number(document.getElementById("number").value)
  let pow = numberToRead * numberToRead * numberToRead
  let answer = document.getElementById("answer")
  return answer.innerHTML = pow
}
