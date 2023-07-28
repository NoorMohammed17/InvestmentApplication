import React from "react";
import styles from "./ResultsTable.module.css"

const formatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
  minimumFractionDigits: 2,
  maximumFractionDigits: 2,
});
 

const ResultsTable = (props) => {
  return (
    <table className={styles.result}>
      <thead>
        <tr>
          <th>Year</th>
          <th>Total Savings</th>
          <th>Interest (Year)</th>
          <th>Total Interest</th>
          <th>Invested Capital</th>
        </tr>
      </thead>
      <tbody>
        {props.data.map((yearData) => (
            <tr key={yearData.year}>
            <td>{yearData.year}</td>
            <td>{formatter.format(yearData.savingsEndOfYear)}</td>
            <td>{formatter.format(yearData.yearlyContribution)}</td>
            <td>{formatter.format(yearData.savingsEndOfYear - props.initialInvestment - yearData.yearlyContribution * yearData.year)}</td>
            <td>{formatter.format( props.initialInvestment + yearData.yearlyContribution * yearData.year)}</td>
          </tr>

          ))
          
          //   <tr>
          //   <td>YEAR NUMBER</td>
          //   <td>TOTAL SAVINGS END OF YEAR</td>
          //   <td>INTEREST GAINED IN YEAR</td>
          //   <td>TOTAL INTEREST GAINED</td>
          //   <td>TOTAL INVESTED CAPITAL</td>
          // </tr>

        }
      
      </tbody>
    </table>
  );
};

export default ResultsTable;
