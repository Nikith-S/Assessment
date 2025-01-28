import React from "react";

const LoanPeriod = ({ loanPeriod, setLoanPeriod, minLoanPeriod, maxLoanPeriod }) => {

  return (
    <div className="box">
      <h5>Loan Period</h5>
      <input
        type="range"
        min={minLoanPeriod}
        max={maxLoanPeriod}
        value={loanPeriod}
        style={{ width: "100%" }}
        onChange={(e) => setLoanPeriod(Number(e.target.value))}
      />
     <div style={{ display: "flex", justifyContent: "space-between" }}>
        <span>{minLoanPeriod} months</span>
        <span> {maxLoanPeriod} months</span>
      </div>
    </div>
  );
};

export default LoanPeriod;
