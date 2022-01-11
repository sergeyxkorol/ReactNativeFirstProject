import React, {FC} from 'react';
import {Image, Pressable, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import commonStyles from '../../commonStyles';
import {STACK_ROUTES} from '../../constants/routes';
import ProductInfo from '../ProductInfo';
import ProductControls from './ProductControls';
import styles from './styles';

type Props = {
  data: Object;
  count?: number;
  onChangeCount?: (id: string, updatedCount: number) => void;
  onDelete?: (id: string) => void;
};

const ProductItem: FC<Props> = ({data, count, onChangeCount, onDelete}) => {
  const navigation = useNavigation();
  const productId = data.id || '';

  return (
    <View style={[commonStyles.pane, styles.pane]}>
      <View style={styles.dataWrapper}>
        <Pressable
          onPress={() =>
            navigation.navigate(STACK_ROUTES.PRODUCT, {
              productId,
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
            link={productId}
          />
        </View>
      </View>

      {(onChangeCount || onDelete) && (
        <View style={styles.controls}>
          <ProductControls
            productId={productId}
            productCount={count}
            onChangeCount={onChangeCount}
            onDelete={() => onDelete && onDelete(productId)}
          />
        </View>
      )}
    </View>
  );
};

export default ProductItem;
