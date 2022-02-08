import {useNavigation} from '@react-navigation/native';
import React, {FC, useEffect, useState} from 'react';
import {
  Pressable,
  ScrollView,
  Text,
  useWindowDimensions,
  View,
} from 'react-native';
import {STACK_ROUTES} from '../../constants/routes';
import commonStyles from '../../commonStyles';
import OrderDetailsProduct, {
  Product,
} from '../../components/OrderDetailsProduct';
import styles from './styles';

import mockData from './data.json';

const labelTextStyle = [
  commonStyles.text,
  commonStyles.textRegular,
  styles.text,
  styles.label,
];

const descriptionTextStyle = [
  commonStyles.text,
  commonStyles.textRegular,
  styles.descritpion,
];

type OrderData = {
  attributes: {
    number: string;
    created_at: string;
    display_total: string;
    state: string;
  };
};

const OrderDetails: FC = () => {
  const [data, setData] = useState<OrderData | null>(null);
  const [products, setProducts] = useState<Product[] | null>(null);
  const navigation = useNavigation();
  const {height} = useWindowDimensions();

  useEffect(() => {
    // ToDo: make real API requests
    setData(mockData.data);
    setProducts(mockData.included);
  }, []);

  const onAddressPress = () => {
    navigation.navigate(STACK_ROUTES.MAP);
  };

  return (
    <View style={{...commonStyles.safeArea, height}}>
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        contentContainerStyle={[commonStyles.generalWrapper, styles.wrapper]}>
        <View style={styles.info}>
          <View style={styles.row}>
            <Text style={labelTextStyle}>Order Id</Text>
            <Text style={descriptionTextStyle}>{data?.attributes.number}</Text>
          </View>
          <View style={styles.row}>
            <Text style={labelTextStyle}>Order Date</Text>
            {/* ToDo: Use formatted date */}
            <Text style={descriptionTextStyle}>
              {data?.attributes.created_at}
            </Text>
          </View>
          <View style={styles.row}>
            <Text style={labelTextStyle}>Total Ammount</Text>
            <Text style={descriptionTextStyle}>
              {data?.attributes.display_total}
            </Text>
          </View>
          <View style={styles.row}>
            <Text style={labelTextStyle}>Payment Mode</Text>
            <Text style={descriptionTextStyle}>COD</Text>
          </View>
          <View style={styles.row}>
            <Text style={labelTextStyle}>Shipping Address</Text>
            <Pressable onPress={onAddressPress} style={styles.descritpion}>
              <Text style={descriptionTextStyle}>
                TestTestTestTestTestTestTestTestTestTestTestTestTestTestTest
              </Text>
            </Pressable>
          </View>
          <View style={styles.row}>
            <Text style={labelTextStyle}>Status</Text>
            <Text style={[...descriptionTextStyle, styles.status]}>
              {data?.attributes.state}
            </Text>
          </View>
        </View>

        <View>
          <Text
            style={[
              commonStyles.text,
              commonStyles.textHeader,
              styles.headerText,
            ]}>
            Ordered Products
          </Text>
          <View>
            {products?.map(product => (
              <OrderDetailsProduct key={product.id} data={product} />
            ))}
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default OrderDetails;
