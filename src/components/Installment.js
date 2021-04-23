import React from 'react';

export default function Installment({ valor, mes, multiplica }) {
  const moneyFormatter = Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  });

  function formatMoney(value) {
    return moneyFormatter.format(value);
  }

  function formatPercentage(value) {
    return `${value.toFixed(2).replace('.', ',')}%`;
  }

  let totalValue = [];
  let id = 1;
  let valorFixo = valor;
  const interestDecimal = 1 + multiplica / 100;
  for (let i = 0; i < mes; i++) {
    valor = valor * interestDecimal;

    totalValue.push({
      id: id++,
      valores: valor,
      juros: multiplica,
    });
  }

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'center',
      }}
    >
      {totalValue.map((valor) => {
        const diferentialCapital = (valorFixo - valor.valores) * -1;

        const diferentialPercentage =
          ((valorFixo - valor.valores) / valorFixo) * 100 * -1;

        const formattedInstallmentValue = `${formatMoney(valor.valores)}`;

        const formattedDiferential = `${formatMoney(diferentialCapital)}`;

        const formattedPercentage = `${formatPercentage(
          diferentialPercentage
        )}`;

        return (
          <div
            style={{
              border: '1px solid grey',
              borderRadius: '5%',
              padding: '5px',
              margin: '5px',
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              width: '15%',
            }}
          >
            <span
              style={{
                fontSize: '0.7rem',
                fontWeight: 'bold',
                marginRight: '5px',
              }}
            >{`MÊS ${valor.id}: `}</span>
            {valor.juros > 0 && (
              <div
                style={{
                  color: '#2ed573',
                  display: 'flex',
                  flexDirection: 'column',
                  fontSize: '0.8rem',
                }}
              >
                <span style={{ fontWeight: 'bold' }}>
                  {formattedInstallmentValue}
                </span>
                <span
                  style={{ fontWeight: 'bold' }}
                >{`+${formattedDiferential}`}</span>
                <span style={{ color: '#01a3a4' }}>{formattedPercentage}</span>
              </div>
            )}
            {valor.juros <= 0 && (
              <div
                style={{
                  color: '#d63031',
                  display: 'flex',
                  flexDirection: 'column',
                  fontSize: '0.8rem',
                }}
              >
                <span style={{ fontWeight: 'bold' }}>
                  {formattedInstallmentValue}
                </span>
                <span style={{ fontWeight: 'bold' }}>
                  {formattedDiferential}
                </span>
                <span style={{ color: '#e15f41' }}>{formattedPercentage}</span>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
