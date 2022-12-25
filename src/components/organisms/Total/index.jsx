import React, { useContext, useState } from 'react';

import Card from '../../atoms/Card';
import Checkbox from '../../atoms/Checkbox';
import Button from '../../atoms/Button';
import { CheckoutContext } from '../../pages/Checkout/context';

import { TotalStyles } from './styles';

const Total = () => {
  const [agree, setAgree] = useState(false);

  const {
    sellerNotes,
    price,
    quantity,
    serviceFee,
    delivery,
    deliveryFee,
    termsOfUse,
  } = useContext(CheckoutContext);

  const allTicket = price * quantity;
  const allFee = serviceFee * quantity;
  const totalPrice = allTicket + allFee;

  const handleCancel = () => alert('Cancel Order');

  const handleOrder = () => {
    if (!agree) return alert('Please read and agree the Terms of Use');

    alert('Ordered');
  };

  return (
    <Card>
      <TotalStyles>
        <div className="total-wrapper">
          <div className="text">Total</div>
          <div className="total">${totalPrice}</div>
        </div>

        <h4>Tikects</h4>
        <div className="ticket-wrapper">
          <div className="text">Resale Tickets: ${price} x {quantity}</div>
          <div className="total">${allTicket}</div>
        </div>

        <h4>Notes From Seller</h4>
        <p>{sellerNotes}</p>

        <h4>Fees</h4>
        <div className="fees-wrapper">
          <div className="text">Service Fee: ${serviceFee} x {quantity}</div>
          <div className="total">${allFee}</div>
        </div>

        <h4>Delivery</h4>
        <div className="delivery-wrapper">
          <div className="text">{delivery}</div>
          <div className="total">{deliveryFee}</div>
        </div>

        <Button
          text="Cancel Order"
          onClick={handleCancel}
          ghost={true}
        />

        <Checkbox
          type="primary"
          label={<span>I have read and agree to the current <a href={termsOfUse}>Terms of Use</a></span>}
          value={agree}
          onChange={() => setAgree(!agree)}
        />

        <Button
          text="Place Order"
          onClick={handleOrder}
        />

        noted
      </TotalStyles>
    </Card>
  )
}

export default Total