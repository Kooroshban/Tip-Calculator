const billAmount = document.getElementById("bill");
const tipPercentage = document.getElementById("tip");
const btnMain = document.getElementById("btn");
const totalPraice = document.getElementById("total");
console.log(bill);
console.log(tip);
console.log(btn);
console.log(total);
btnMain.addEventListener("click", () => {
  const billValue = Number(billAmount.value);
  const tipValue = Number(tipPercentage.value);
  const totaleValue = billValue * (1 + tipValue);
  totalPraice.textContent = totaleValue;
});
