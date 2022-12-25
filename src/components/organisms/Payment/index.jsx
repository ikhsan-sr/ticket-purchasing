import React, { useContext } from 'react';

import Card from '../../atoms/Card';
import PaymentCardItem from '../../molecules/PaymentCardItem';
import { CheckoutContext } from '../../pages/Checkout/context';

import { PaymentStyles } from './styles';

const Payment = () => {
  const { termsOfUse } = useContext(CheckoutContext);

  return (
    <PaymentStyles>
      <Card>
        <h2>Payment
          <img src="/checkmark.png" alt="payment" className="title-img" />
          <img src="/ticketmaster.jpg" alt="ticketmaster" className="ticketmaster" />
        </h2>
        <h3>Use Credit / Debit Card</h3>

        {/* Map this payment card and manage if already API */}
        {/* Assumtions have been selected */}
        <PaymentCardItem />

        <div className="new-card">
          +
          <img src="/cards.png" alt="add-card" />
          Add New Card
        </div>

        <hr />

        <h3>Or Pay With</h3>
        <b>By using a digital wallet and continuing past this page, you have read and are accepting the
          <a href={termsOfUse} target="_blank" rel="noreferrer">{' '}Terms of Use</a>
        </b>
      </Card>
    </PaymentStyles>
  )
}

export default Payment