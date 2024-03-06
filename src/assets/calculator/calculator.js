const screen = document.querySelector("#screen");
let screenValue = "0";
let lockedValue = null;
let previousValue = null;
let operator = null;
let equalsPressed = false;

addNumListeners();
addDecListener();
addFunctionListerns();
addScreenListener();

function addNumListeners() {
  const buttons = document.querySelectorAll(".num");

  buttons.forEach((button) => {
    button.addEventListener("click", (e) => {
      const num = e.target.firstChild.innerText;
      screen.innerText = screenValue;

      if (equalsPressed) {
        equalsPressed = false;
        lockedValue = null;
        previousValue = null;
        operator = null;
        screenValue = "0";
      }

      if (screenValue !== "0") {
        if (screenValue.replace(/[\.,]/g, "").length < 9) screenValue += num;
        if (screenValue.length > 3) screenValue = format(screenValue);
      } else {
        screenValue = num;
      }

      screen.innerText = screenValue;
    });
  });
}

function addDecListener() {
  const decButton = document.getElementById("dec");

  decButton.addEventListener("click", () => {
    screenValue = screenValue.split("");
    screenValue.push(".");
    screenValue = format(screenValue.join(""));
    screen.innerText = screenValue;
  });
}

function format(val) {
  lengthFix(val);

  const isDec = val.includes(".");
  const separate = val.split(".");
  const decimal = separate[1];

  const split = separate[0].replace(/,/g, "").split("");
  let isNegative = null;

  if (split[0] === "-") {
    isNegative = true;
    split.shift();
  }

  for (let i = split.length - 3; i > 0; i -= 3) {
    split.splice(i, 0, ",");
  }

  if (isNegative) split.unshift("-");
  if (isDec) split.push(".");
  if (decimal) split.push(decimal);

  return split.join("");
}

function lengthFix(val) {
  // console.log(screen, val);
  valLen = val.replace(/,/g, "").length;
  if (valLen <= 6) screen.style.fontSize = "85px";
  if (valLen === 7) screen.style.fontSize = "68px";
  if (valLen === 8) screen.style.fontSize = "60px";
  if (valLen === 9) screen.style.fontSize = "53px";
}

function operate(previousValue, operator, currentValue) {
  if (operator === "+") return previousValue + currentValue;
  if (operator === "-") return previousValue - currentValue;
  if (operator === "*") return previousValue * currentValue;
  if (operator === "/") return previousValue / currentValue;
}

function addFunctionListerns() {
  function plus() {
    const plusButton = document.getElementById("plus");

    plusButton.addEventListener("click", (e) => {
      functionPress();
      operator = "+";
    });
  }

  function minus() {
    const minusButton = document.getElementById("minus");

    minusButton.addEventListener("click", (e) => {
      functionPress();
      operator = "-";
    });
  }

  function times() {
    const timesButton = document.getElementById("times");

    timesButton.addEventListener("click", (e) => {
      functionPress();
      operator = "*";
    });
  }

  function divide() {
    const divideButton = document.getElementById("divide");

    divideButton.addEventListener("click", (e) => {
      functionPress();
      operator = "/";
    });
  }

  function ac() {
    const clear = document.getElementById("ac");

    clear.addEventListener("click", (e) => {
      previousValue = null;
      currentValue = null;
      lockedValue = null;
      operator = null;
      screenValue = "0";
      screen.innerText = screenValue;
      lengthFix(screenValue);
    });
  }

  function invert() {
    const invert = document.getElementById("invert");

    invert.addEventListener("click", (e) => {
      if (screenValue === "0") return;
      if (screenValue[0] === "-") {
        screenValue = screenValue.split("");
        screenValue.shift();
        screenValue = screenValue.join("");
      } else {
        screenValue = "-" + screenValue;
      }
      screen.innerText = screenValue;
    });
  }

  function percentage() {
    const perc = document.getElementById("percentage");

    perc.addEventListener("click", (e) => {
      currVal = Number(screenValue.replace(/,/g, ""));
      screenValue = format((currVal * 0.01).toString());
      console.log(currVal * 0.01);
      screen.innerText = screenValue;
    });
  }

  function equals() {
    const equalsButton = document.getElementById("equals");

    equalsButton.addEventListener("click", () => {
      if (!equalsPressed) equalsPressed = true;
      evalutate();
    });
  }

  plus();
  minus();
  times();
  divide();
  ac();
  invert();
  percentage();
  equals();
}

function addScreenListener() {
  const acButton = document.getElementById("acp");

  screen.addEventListener("DOMSubtreeModified", () => {
    if (screenValue !== "0" || previousValue) {
      acButton.innerText = "C";
      acButton.style.pointerEvents = "none";
    }
    if (screenValue === "0") {
      acButton.innerText = "AC";
      acButton.style.pointerEvents = "none";
    }
  });
}

function evalutate() {
  if (!previousValue) return;
  const currentValue = Number(screenValue.replace(/,/g, ""));
  let result = null;

  if ((lockedValue && operator === "/") || (lockedValue && operator === "-")) {
    result = operate(currentValue, operator, previousValue);
  } else {
    result = operate(previousValue, operator, currentValue);
  }

  if (result.toString().length > 9) {
    console.log(">9");
    screen.innerText = result.toExponential(2).toString();
    screenValue = result.toExponential(2).toString();
  } else {
    screen.innerText = format(result.toString());
    screenValue = format(result.toString());
  }

  if (equalsPressed && !lockedValue) {
    lockedValue = currentValue;
  }

  previousValue = lockedValue ? lockedValue : result;
}

function functionPress() {
  if (operator && !equalsPressed) {
    evalutate();
  } else if (equalsPressed) {
    equalsPressed = false;
    lockedValue = null;
    previousValue = Number(screenValue.replace(/,/g, ""));
  } else {
    previousValue = Number(screenValue.replace(/,/g, ""));
  }

  screenValue = "0";
}
