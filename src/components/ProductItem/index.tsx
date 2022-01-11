import React, {FC} from 'react';
import {Image, Pressable, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import commonStyles from '../../commonStyles';
import {STACK_ROUTES} from '../../constants/routes';
import ProductInfo from '../ProductInfo';
import styles from './styles';

type Props = {
  data: Object;
};

const ProductItem: FC<Props> = ({data}) => {
  const navigation = useNavigation();

  return (
    <View style={[commonStyles.pane, styles.pane]}>
      <View style={styles.dataWrapper}>
        <Pressable
          onPress={() =>
            navigation.navigate(STACK_ROUTES.PRODUCT, {
              productId: data.id,
            })
          }>
          <Image
            source={{uri: 'https://picsum.photos/100'}}
            style={styles.image}
          />
        </Pressable>

        <View>
          <ProductInfo
            data={{
              name: data.attributes.name,
              display_price: data.attributes.display_price,
            }}
            link={data.id}
          />
        </View>
      </View>
    </View>
  );
};

export default ProductItem;