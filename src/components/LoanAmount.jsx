import React from "react";

const LoanAmount = ({ loanAmount, setLoanAmount, minLoanAmount, maxLoanAmount }) => {
  return (
    <div className="box">
    
      <h5>Loan Amount</h5>


      <input
        type="range"
        onChange={(e) => setLoanAmount(Number(e.target.value))}
        min={minLoanAmount}
        max={maxLoanAmount}
        value={loanAmount}
        style={{ width: "100%" }}
      />

<div style={{ display: "flex", justifyContent: "space-between" }}>
        <span>Rp {minLoanAmount.toLocaleString()}</span>
        <span>Rp {maxLoanAmount.toLocaleString()}</span>
      </div>

      <p>Selected: Rp {loanAmount.toLocaleString()}</p>
    </div>
  );
};

export default LoanAmount;
