import React, { useContext } from 'react';

import { CheckoutContext } from '../../pages/Checkout/context';

import { CardStyles } from './styles';

// Map this payment card and manage if already API
// Assumtions have been selected
const PaymentCardItem = () => {
  const { creditCardName, creditCardNumber, creditCardExpiration } = useContext(CheckoutContext);

  const handleEdit = () => alert('Handle edit');
  const handleDelete = () => alert('Handle delete');

  return (
    <CardStyles>
      <div className="checkbox">
        <input type="radio" checked={true} className="radio"/>
      </div>
      <div className="detail">
        <div className="card">
          <div className="img-wrapper">
            <img src="/visa.png" alt="visa" />
          </div>
          <div className="text-detail">
            <div className="name">Visa - {creditCardNumber}</div>
            <div className="exp">{creditCardName} | exp. {creditCardExpiration}</div>
            <div className="action">
              <span className="text-button" onClick={handleEdit}>Edit</span> |
              <span className="text-button" onClick={handleDelete}>{' '}Delete</span>
            </div>
          </div>
        </div>

        <div className="security">
          <div className="label">Security Code</div>
          <input type="password" maxLength={3}/>
          <img src="/card.png" alt="security" />
          3-digits on back of card
        </div>
      </div>
    </CardStyles>
  )
}

export default PaymentCardItem