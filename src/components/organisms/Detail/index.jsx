import React, { useContext } from 'react';

import Card from '../../atoms/Card';
import { CheckoutContext } from '../../pages/Checkout/context';

import { DETAIL_TEXT } from './const';
import { DetailStyles } from './styles';

const Detail = () => {
  const { delivery, deliveryFee, deliveryDate } = useContext(CheckoutContext);

  return (
    <DetailStyles>
      <Card>
        <div className="">Delivery</div>
        <div className="">{delivery} - {deliveryFee}</div>
        <div className="">Tickets Available by {deliveryDate} <br/>{DETAIL_TEXT}</div>
      </Card>
    </DetailStyles>
  )
}

export default Detail