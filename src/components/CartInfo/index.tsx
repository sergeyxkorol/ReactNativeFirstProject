import React, {FC} from 'react';
import {Text, View} from 'react-native';
import commonStyles from '../../commonStyles';
import styles from './styles';

type Props = {
  data: {
    item_count: number;
    display_item_total: number;
    display_ship_total: string;
    display_adjustment_total: string;
    display_tax_total: string;
    display_total: string;
  };
};

const regularTextStyle = [
  commonStyles.text,
  commonStyles.textRegular,
  styles.text,
];

const totalTextStyles = [
  commonStyles.text,
  commonStyles.textRegular,
  styles.textTotal,
];

const Link: FC<Props> = ({data}) => (
  <View style={[commonStyles.pane, styles.pane]}>
    <Text
      style={[commonStyles.text, commonStyles.textHeader, styles.textHeader]}>
      Price Details
    </Text>

    <View style={styles.row}>
      <Text style={regularTextStyle}>
        Price ({data.item_count} {data.item_count === 1 ? 'item' : 'items'})
      </Text>
      <Text style={regularTextStyle}>{data.display_item_total}</Text>
    </View>
    <View style={styles.row}>
      <Text style={regularTextStyle}>Delivery</Text>
      <Text style={regularTextStyle}>{data.display_ship_total}</Text>
    </View>
    <View style={styles.row}>
      <Text style={regularTextStyle}>Discount</Text>
      <Text style={[...regularTextStyle, styles.discount]}>
        -{data.display_adjustment_total}
      </Text>
    </View>
    <View style={styles.row}>
      <Text style={regularTextStyle}>Tax</Text>
      <Text style={regularTextStyle}>{data.display_tax_total}</Text>
    </View>

    <View style={[styles.row, styles.topBorder]}>
      <Text style={totalTextStyles}>Ammount Payable</Text>
      <Text style={totalTextStyles}>{data.display_total}</Text>
    </View>
  </View>
);

export default Link;
