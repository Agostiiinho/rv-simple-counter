let currentNumber = document.getElementById("currentNumber");

let increase = () => {
  currentNumber.innerHTML++;
  console.log(currentNumber.innerHTML);

  if (currentNumber.innerHTML > 0) {
    currentNumber.style.color = "green";
  }
};

let decrease = () => {
  currentNumber.innerHTML--;
  console.log(currentNumber.innerHTML);

  if (currentNumber.innerHTML < 0) {
    currentNumber.style.color = "red";
  }
};

let resetCounter = () => {
  currentNumber.innerHTML = 0;

  currentNumber.style.color = "#5155EE";
};
