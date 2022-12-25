import React from 'react';

import Card from '../../atoms/Card';
import PaymentCardItem from '../../molecules/PaymentCardItem';

import { PaymentStyles } from './styles';

const Payment = () => {
  return (
    <PaymentStyles>
      <Card>
        <h2>Payment</h2>
        <h3>Use Credit / Debit Card</h3>

        {/* Map this payment card and manage if already API */}
        {/* Assumtions have been selected */}
        <PaymentCardItem />

        <div className="new-card">
          Add New Card
        </div>

        <h3>Or Pay With</h3>
        <p>By using a digital wallet and continuing past this page, you have read and are accepting the Terms of Use.</p>
      </Card>
    </PaymentStyles>
  )
}

export default Payment