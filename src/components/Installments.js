import React from 'react';
import Installment from './Installment';

export default function Installments(props) {
  const { numberOfMonths, capital, interest } = props;

  return (
    <div>
      <Installment valor={capital} mes={numberOfMonths} multiplica={interest} />
    </div>
  );
}
