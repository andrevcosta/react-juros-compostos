import React from 'react';

export default function Form(props) {
  const {
    capitalValue,
    interestRate,
    timeTotal,
    onCapital,
    onInterest,
    onTime,
  } = props;

  const handleCapitalInputChange = (event) => {
    const newCapital = +event.target.value;
    onCapital(newCapital);
  };
  const handleInterestInputChange = (event) => {
    const newInterest = +event.target.value;
    onInterest(newInterest);
  };
  const handleTimeInputChange = (event) => {
    const newTime = +event.target.value;
    onTime(newTime);
  };
  return (
    <div style={{ padding: '5px' }}>
      <div style={styles.flexRow}>
        <div className="input-field" style={{ width: '30%' }}>
          <input
            id="inputCapitalValue"
            type="number"
            value={capitalValue}
            onChange={handleCapitalInputChange}
            step="100"
            min="100"
            max="1000000000"
            autoFocus
          />
          <label className="active" htmlFor="inputCapitalValue">
            Montante inicial:
          </label>
        </div>

        <div className="input-field" style={{ width: '30%' }}>
          <input
            id="inputInterestRate"
            type="number"
            value={interestRate}
            onChange={handleInterestInputChange}
            step="0.1"
            min="-12"
            max="12"
          />
          <label className="active" htmlFor="inputInterestRate">
            Taxa de juros mensal:
          </label>
        </div>

        <div className="input-field" style={{ width: '30%' }}>
          <input
            id="inputTimeTotal"
            type="number"
            value={timeTotal}
            onChange={handleTimeInputChange}
            step="1"
            min="1"
          />
          <label className="active" htmlFor="inputTimeTotal">
            Periodo (meses):
          </label>
        </div>
      </div>
    </div>
  );
}

const styles = {
  flexRow: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
};
