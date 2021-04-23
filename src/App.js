import React, { useState } from 'react';
import Form from './components/Form';
import Installments from './components/Installments';

export default function App() {
  const [capitalValue, setCapitalValue] = useState('1000');
  const [interestRate, setInterestRate] = useState('0.5');
  const [timeTotal, setTimeTotal] = useState('1');

  const handleCapitalChange = (newCapital) => {
    setCapitalValue(newCapital);
  };
  const handleInterestChange = (newInterest) => {
    setInterestRate(newInterest);
  };
  const handleTimeChange = (newTime) => {
    setTimeTotal(newTime);
  };
  return (
    <div className="container">
      <div style={{ textAlign: 'center' }}>
        <h1>React - Juros Compostos</h1>
      </div>
      <div>
        <Form
          capitalValue={capitalValue}
          interestRate={interestRate}
          timeTotal={timeTotal}
          onCapital={handleCapitalChange}
          onInterest={handleInterestChange}
          onTime={handleTimeChange}
        />
      </div>
      <div>
        <Installments
          capital={capitalValue}
          interest={interestRate}
          numberOfMonths={timeTotal}
        />
      </div>
    </div>
  );
}
