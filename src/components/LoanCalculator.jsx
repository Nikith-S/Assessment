import "../App.css";
import React, { useState } from "react";
import LoanAmount from "./LoanAmount";
import LoanPeriod from "./LoanPeriod";
import Header from "./Header";

const LoanCalculator = () => {
  const minLoanAmount = 5000.000;
  const maxLoanAmount = 17897.000;
  const minLoanPeriod = 6;
  const maxLoanPeriod = 18;

  const [loanAmount, setLoanAmount] = useState(14000.000);
  const [loanPeriod, setLoanPeriod] = useState(12);

  const getVehicleInfo = (amount) => {
    if (amount >= 17500) return { name: "Honda ADV 160 CBS", year: 2023, maxFunding: 17448.500 };
    if (amount >= 14000) return { name: "Honda Vario 160", year: 2022, maxFunding: 15000.000 };
    if (amount >= 10000) return { name: "Honda Beat Street", year: 2021, maxFunding: 12000.000 };
    return { name: "Unknown Vehicle", year: "N/A", maxFunding: 10000.000 };
  };

  const { name: vehicleName, year: vehicleYear, maxFunding } = getVehicleInfo(loanAmount);

  const handleApplyLoan = () => {
    const monthlyInstallment = Math.round(loanAmount / loanPeriod);
    console.log("Loan Amount:", loanAmount);
    console.log("Loan Period:", loanPeriod, "months");
    console.log("Estimated Installment:", monthlyInstallment);
    console.log("Vehicle:", vehicleName, "Year:", vehicleYear);
    console.log("Maximum Funding:", maxFunding);
    console.log("Maximum Loan Amount:", maxLoanAmount);
  };

  return (
    <div className="main-container">
      <div className="main-box">
        <Header />
        <div className="box">
          <h5>Maximum Funding</h5>
          <p className="rp-money">
            <strong>Rp {maxFunding.toLocaleString()}</strong>
          </p>
          <hr />
          <p className="vehicle">
            {vehicleName} <br /> {vehicleYear}
          </p>
        </div>

        <LoanAmount
          loanAmount={loanAmount}
          setLoanAmount={setLoanAmount}
          minLoanAmount={minLoanAmount}
          maxLoanAmount={maxLoanAmount} 
        />

        <LoanPeriod
          loanPeriod={loanPeriod}
          setLoanPeriod={setLoanPeriod}
          minLoanPeriod={minLoanPeriod}
          maxLoanPeriod={maxLoanPeriod}
        />

        <div className="box">
          <h5 className="left-align">Estimated Monthly Installments</h5>
          <p className="left-align large-font-bold">
            Rp {Math.round(loanAmount / loanPeriod).toLocaleString()}
          </p>
          <p>
            Installments will change according to the results of the verification of the physical conditions of the vehicle at the batch office.
          </p>
          <button onClick={handleApplyLoan}>APPLY LOAN</button>
        </div>
      </div>
    </div>
  );
};

export default LoanCalculator;
