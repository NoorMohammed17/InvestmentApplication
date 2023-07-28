import React, { useState } from "react";
import Header from "./components/Header/Header";
import UserInput from "./components/UserInput/UserInput";
import ResultsTable from "./components/ResultsTable/ResultsTable";

function App() {
  const [userInputData, setUserInputData] = useState(null);

  const calculateHandler = (userInput) => {
    setUserInputData(userInput);
  };

  const yearlyData = []; // per-year results

  if (userInputData) {
    let currentSavings = userInputData["current-savings"];
    const yearlyContribution = userInputData["yearly-contribution"];
    const expectedReturn = userInputData["expected-return"] / 100;
    const duration = userInputData["duration"];

    for (let i = 0; i < duration; i++) {
      const yearlyInterest = currentSavings * expectedReturn;
      currentSavings += yearlyInterest + yearlyContribution;
      yearlyData.push({
        year: i + 1,
        yearlyInterest: yearlyInterest,
        savingsEndOfYear: currentSavings,
        yearlyContribution: yearlyContribution,
      });
    }
  }

  return (
    <div>
      <Header />
      <UserInput onCalculate={calculateHandler} />
      {!userInputData && (
        <p style={{ textAlign: "center" }}>No investment calculated yet</p>
      )}
      {userInputData && <ResultsTable data={yearlyData} initialInvestment={userInputData['current-savings']} />}
    </div>
  );
}

export default App;
