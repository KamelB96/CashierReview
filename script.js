//create variables to hold the cashier and overall scores

//holds cashier number data box
let cashier = 0

//creates a cashier total data box
let c_tot = 0


let c_num = 0
let overall = 0
let o_tot = 0
let o_num = 0

let cashierScore = document.querySelector("#cashierScore")
let overallScore = document.querySelector("#overallScore")

//cashier button 1
cashierScoreBtn1 = document.querySelector("#cashier-1")
cashierScoreBtn1.addEventListener("click", function() {
	c_tot = c_tot + 1 //adding 1 to score
	c_num = c_num + 1
	cashier = c_tot / c_num
	cashierScore.textContent = cashier
})

//cashier button 2
cashierScoreBtn2 = document.querySelector("#cashier-2")
cashierScoreBtn2.addEventListener("click", function() {
	c_tot = c_tot + 2 //adding 2 to score
	c_num = c_num + 1
	cashier = c_tot / c_num
	cashierScore.textContent = cashier
})

//cashier button 3
cashierScoreBtn3 = document.querySelector("#cashier-3")
cashierScoreBtn3.addEventListener("click", function() {
	c_tot = c_tot + 3 //adding 3 to score
	c_num = c_num + 1
	cashier = c_tot / c_num
	cashierScore.textContent = cashier
})


//cashier button 4
cashierScoreBtn4 = document.querySelector("#cashier-4")
cashierScoreBtn4.addEventListener("click", function() {
	c_tot = c_tot + 4 //adding 4 to score
	c_num = c_num + 1
	cashier = c_tot / c_num
	cashierScore.textContent = cashier
})


//overall button 1
overallScoreBtn1 = document.querySelector("#overall-1")
overallScoreBtn1.addEventListener("click", function() {
	o_tot = o_tot + 1 //adding 1 to overall
	o_num = o_num + 1
	overall = o_tot / o_num
	overallScore.textContent = overall
})


//overall button 2
overallScoreBtn2 = document.querySelector("#overall-2")
overallScoreBtn2.addEventListener("click", function() {
	o_tot = o_tot + 2 //adding 1 to overall
	o_num = o_num + 1
	overall = o_tot / o_num
	overallScore.textContent = overall
})

//overall button 3
overallScoreBtn3 = document.querySelector("#overall-3")
overallScoreBtn3.addEventListener("click", function() {
	o_tot = o_tot + 3 //adding 3 to overall
	o_num = o_num + 1
	overall = o_tot / o_num
	overallScore.textContent = overall
})

//overall button 4
overallScoreBtn4 = document.querySelector("#overall-4")
overallScoreBtn4.addEventListener("click", function() {
	o_tot = o_tot + 4 //adding 4 to overall
	o_num = o_num + 1
	overall = o_tot / o_num
	overallScore.textContent = overall
})

let showHide = document.querySelector("#show-hide")
showHide.addEventListener('click',function(){
  let scoresDiv = document.querySelector("#show-scores")

  cashierScore.textContent = cashier
  overallScore.textContent = overall

  let btnText = showHide.textContent
  if(btnText === "Display Ratings"){
	scoresDiv.style.display = "block"
	showHide.innerHTML = "Hide Ratings"
  }
  else{
	scoresDiv.style.display = "none"
	showHide.innerHTML = "Display Ratings"
  }
})





// second cashier
let cashier11 = 0
let c_tot11 = 0
let c_num11 = 0
let overall11 = 0
let o_tot11 = 0
let o_num11 = 0

let cashierScore11 = document.querySelector("#cashierScore11")
let overallScore11 = document.querySelector("#overallScore11")

//cashier button 1
cashierScoreBtn11 = document.querySelector("#cashier-11")
cashierScoreBtn11.addEventListener("click", function() {
	c_tot11 = c_tot11 + 1 //adding 1 to score
	c_num11 = c_num11 + 1
	cashier11 = c_tot11 / c_num11
	cashierScore11.textContent = cashier11
})

//cashier button 2
cashierScoreBtn12 = document.querySelector("#cashier-12")
cashierScoreBtn12.addEventListener("click", function() {
	c_tot11 = c_tot11 + 2 //adding 2 to score
	c_num11 = c_num11 + 1
	cashier11 = c_tot11 / c_num11
	cashierScore11.textContent = cashier11
})

//cashier button 3
cashierScoreBtn13= document.querySelector("#cashier-13")
cashierScoreBtn13.addEventListener("click", function() {
	c_tot11 = c_tot11 + 3 //adding 3 to score
	c_num11 = c_num11 + 1
	cashier11 = c_tot11 / c_num11
	cashierScore11.textContent = cashier11
})


//cashier button 4
cashierScoreBtn14 = document.querySelector("#cashier-14")
cashierScoreBtn14.addEventListener("click", function() {
	c_tot11 = c_tot11 + 4 //adding 4 to score
	c_num11 = c_num11 + 1
	cashier11 = c_tot11 / c_num11
	cashierScore11.textContent = cashier11
})


//overall button 1
overallScoreBtn11 = document.querySelector("#overall-11")
overallScoreBtn11.addEventListener("click", function() {
	o_tot11 = o_tot11 + 1 //adding 1 to overall
	o_num11 = o_num11 + 1
	overall11 = o_tot11 / o_num11
	overallScore11.textContent = overall11
})


//overall button 2
overallScoreBtn12 = document.querySelector("#overall-12")
overallScoreBtn12.addEventListener("click", function() {
	o_tot11 = o_tot11 + 2 //adding 2 to overall
	o_num11 = o_num11 + 1
	overall11 = o_tot11 / o_num11
	overallScore11.textContent = overall11
})

//overall button 3
overallScoreBtn13 = document.querySelector("#overall-13")
overallScoreBtn13.addEventListener("click", function() {
    o_tot11 = o_tot11 + 3 //adding 3 to overall
	o_num11 = o_num11 + 1
	overall11 = o_tot11 / o_num11
	overallScore11.textContent = overall11
})

//overall button 4
overallScoreBtn14 = document.querySelector("#overall-14")
overallScoreBtn14.addEventListener("click", function() {
	o_tot11 = o_tot11 + 4 //adding 4 to overall
	o_num11 = o_num11 + 1
	overall11 = o_tot11 / o_num11
	overallScore11.textContent = overall11
})

let showHide2 = document.querySelector("#show-hide2")
showHide2.addEventListener('click',function(){
  let scoresDiv2 = document.querySelector("#show-scores2")

  cashierScore11.textContent = cashier11
  overallScore11.textContent = overall11

  let btnText2 = showHide2.textContent
  if(btnText2 === "Display Ratings2"){
	scoresDiv2.style.display = "block"
	showHide2.innerHTML = "Hide Ratings"
  }
  else{
	scoresDiv2.style.display = "none"
	showHide2.innerHTML = "Display Ratings"
  }
})