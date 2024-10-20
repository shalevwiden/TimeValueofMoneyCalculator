// Function to calculate Future Value (FV)
function calculateFV() {
    // Get input values from the FV section
    let pv = parseFloat(document.getElementById("pvInput").value);
    let r = parseFloat(document.getElementById("rateInputFV").value) / 100;
    let t = parseFloat(document.getElementById("timeInputFV").value);
    
    // Calculate Future Value using FV = PV * (1 + r)^t
    if (!isNaN(pv) && !isNaN(r) && !isNaN(t)) {
        let fv = pv * Math.pow((1 + r), t);
        document.getElementById("resultFV").innerText = fv.toFixed(2);
    } else {
        document.getElementById("resultFV").innerText = "Invalid input!";
    }
}

// Function to calculate Present Value (PV)
function calculatePV() {
    // Get input values from the PV section
    let fv = parseFloat(document.getElementById("fvInput").value);
    let r = parseFloat(document.getElementById("rateInputPV").value) / 100;
    let t = parseFloat(document.getElementById("timeInputPV").value);
    
    // Calculate Present Value using PV = FV / (1 + r)^t
    if (!isNaN(fv) && !isNaN(r) && !isNaN(t)) {
        let pv = fv / Math.pow((1 + r), t);
        document.getElementById("resultPV").innerText = pv.toFixed(2);
    } else {
        document.getElementById("resultPV").innerText = "Invalid input!";
    }
}
