import React, { useContext } from 'react';
import moment from 'moment';

import Card from '../../atoms/Card';
import { CheckoutContext } from '../../pages/Checkout/context';

import { DETAIL_TEXT, DATE_FORMAT } from './const';
import { DetailStyles } from './styles';

const Detail = () => {
  const { delivery, deliveryFee, deliveryDate } = useContext(CheckoutContext);
  const dateDelivery = moment(deliveryDate).format(DATE_FORMAT);

  return (
    <Card>
      <DetailStyles>
        <h2>Delivery
          <img src="/checkmark.png" alt="delivery" />
        </h2>
        <h4>{delivery} - {deliveryFee}</h4>

        <div className="detail">Tickets Available by {dateDelivery}
          <br/>
          {DETAIL_TEXT}
        </div>
      </DetailStyles>
    </Card>
  )
}

export default Detail