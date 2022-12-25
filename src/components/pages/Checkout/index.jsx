import React, { useState, useEffect } from 'react';

import Detail from '../../organisms/Detail';
import Payment from '../../organisms/Payment';
import Total from '../../organisms/Total';
import Loading from '../../atoms/Loading';

import { CheckoutContext } from './context';
import { API_GET_CART } from './const';
import { CheckoutStyles } from './styles';

const Checkout = () => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState({});

  useEffect(() => {
      fetch(API_GET_CART)
          .then(response => {
            setData(response.json(response));
            setLoading(false);
          });
  }, []);

  if (loading) return <Loading />;

  return (
    <CheckoutContext.Provider value={data}>
      <CheckoutStyles>
        <div className="details">
          <Detail />
          <Payment />
        </div>
        <div className="total">
          <Total />
        </div>
      </CheckoutStyles>
    </CheckoutContext.Provider>
  )
}

export default Checkout
