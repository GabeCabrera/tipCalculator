//Main.js//

let getBill = document.getElementById(`bill`);
let getPercent = document.getElementById(`percent`);
let getTip = document.getElementById(`tip`);
let getTotal = document.getElementById(`total`);
let calcBtn = document.getElementById(`calcButton`);

calcBtn.addEventListener(`click`, calc);

function calc(e) {
	e.preventDefault();
	var bill = parseFloat(getBill.value);
	var tip = parseFloat(getPercent.value);
	var percent = tip / 100;
	var tipTotal = bill * percent;
	var billTotal = bill + tipTotal;

	getTip.value = (tipTotal).toFixed(2);
	getTotal.value = (billTotal).toFixed(2);
}