import React, {FC, useEffect, useState} from 'react';
import OrderItem from '../../components/OrderItem';

import mockData from './data.json';

const Orders: FC = () => {
  const [orders, setOrders] = useState([]);
  const [included, setIncluded] = useState([]);

  useEffect(() => {
    // ToDo: load real orders from API
    setOrders(mockData?.data);
    setIncluded(mockData?.included);
  }, []);

  return (
    <>
      {orders.map(order => (
        <OrderItem key={order.id} data={order} included={included} />
      ))}
    </>
  );
};

export default Orders;
