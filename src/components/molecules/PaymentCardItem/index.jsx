import React, { useContext } from 'react';

import { CheckoutContext } from '../../pages/Checkout/context';

import { CardStyles } from './styles';

// Map this payment card and manage if already API
// Assumtions have been selected
const PaymentCardItem = () => {
  const { creditCardName, creditCardNumber, creditCardExpiration } = useContext(CheckoutContext);

  return (
    <CardStyles>
      <div className="checkbox">
        <input type="radio" checked={true} className="radio"/>
      </div>
      <div className="detail">
        <div className="card">
          <div className="img-wrapper">img</div>
          <div className="text-detail">
            <div className="">Visa - {creditCardNumber}</div>
            <div className="">{creditCardName} | exp. {creditCardExpiration}</div>
            <div className="">Edit | Delete</div>
          </div>
        </div>

        <div className="security">
          <input type="text" />
          3-digits on back of card
        </div>
      </div>
    </CardStyles>
  )
}

export default PaymentCardItem