import React, {FC, useEffect, useState} from 'react';
import {View} from 'react-native';
import OrderItem from './OrderItem';

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
    <View>
      {orders.map(order => (
        <OrderItem data={order} included={included} />
      ))}
    </View>
  );
};

export default Orders;
