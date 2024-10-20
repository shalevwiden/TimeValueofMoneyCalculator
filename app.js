// Get references to the HTML elements
const calculateFVButton = document.getElementById("calculate_fv");
const calculatePVButton = document.getElementById("calculate_pv");
const resultDisplay = document.getElementById("result");

// Function to calculate Future Value (FV)
function calculateFV() {
  const pv = parseFloat(document.getElementById("pv").value);
  const rate = parseFloat(document.getElementById("rate_fv").value);
  const time = parseFloat(document.getElementById("time_fv").value);

  if (isNaN(pv) || isNaN(rate) || isNaN(time)) {
    resultDisplay.textContent = "Please enter valid numbers for PV, rate, and time.";
    return;
  }

  const fv = pv * Math.pow((1 + rate), time);
  resultDisplay.textContent = `Future Value (FV): $${fv.toFixed(2)}`;
}

// Function to calculate Present Value (PV)
function calculatePV() {
  const fv = parseFloat(document.getElementById("fv").value);
  const rate = parseFloat(document.getElementById("rate_pv").value);
  const time = parseFloat(document.getElementById("time_pv").value);

  if (isNaN(fv) || isNaN(rate) || isNaN(time)) {
    resultDisplay.textContent = "Please enter valid numbers for FV, rate, and time.";
    return;
  }

  const pv = fv / Math.pow((1 + rate), time);
  resultDisplay.textContent = `Present Value (PV): $${pv.toFixed(2)}`;
}

// Event listeners for the buttons
calculateFVButton.addEventListener("click", calculateFV);
calculatePVButton.addEventListener("click", calculatePV);
