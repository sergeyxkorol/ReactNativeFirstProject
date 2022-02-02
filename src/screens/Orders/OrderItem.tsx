import {useNavigation} from '@react-navigation/native';
import React, {FC, useEffect, useState} from 'react';
import {View, Text} from 'react-native';
import commonStyles from '../../commonStyles';
import Link from '../../components/Link';
import {STACK_ROUTES} from '../../constants/routes';
import ProductItem from './ProductItem';
import styles from './styles';

type Relation = {
  id: string;
  type: string;
};

type Props = {
  data: {
    id: string;
    relationships: {
      line_items: {
        data: Relation[];
      };
    };
  };
  included: Relation[];
};

const Orders: FC<Props> = ({data, included}) => {
  const [lineItems, setLineItems] = useState(null);
  const navigation = useNavigation();

  useEffect(() => {
    // ToDo: cahnge to a real API request
    const lineItemsList = data.relationships.line_items.data.map(({id}) => {
      return included.find(
        ({id: includedItemId, type}) =>
          includedItemId === id && type === 'line_item',
      );
    });

    setLineItems(lineItemsList);
  }, [data, included]);

  const viewOrderDetails = () => {
    // ToDo: pass an order id for real API request
    navigation.navigate(STACK_ROUTES.ORDER_DETAILS, {orderId: data.id});
  };

  return (
    <View style={[commonStyles.generalWrapper, styles.wrapper]}>
      <View style={styles.orderItem}>
        <View style={styles.date}>
          {/* ToDo: use formatted real date */}
          <Text style={[commonStyles.text, styles.dateText]}>30/11/2019</Text>
          <Text style={[commonStyles.text, styles.dateText]}>10:34</Text>
        </View>
        <View>
          {lineItems?.map(lineItem => (
            <ProductItem key={lineItem.id} data={lineItem} />
          ))}
        </View>

        <View style={styles.link}>
          <Link text="View order Details" onPressHandler={viewOrderDetails} />
        </View>
      </View>
    </View>
  );
};

export default Orders;
