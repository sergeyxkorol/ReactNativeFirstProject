import {useRoute} from '@react-navigation/native';
import React, {FC} from 'react';
import {ScrollView} from 'react-native';
import ImagesSlider from '../../components/ImagesSlider/ImagesSlider';
import styles from './styles';

const ProductImages: FC = () => {
  const route = useRoute();
  const imagesList = route.params?.imagesList;

  return (
    <ScrollView
      contentInsetAdjustmentBehavior="automatic"
      contentContainerStyle={styles.contentContainer}>
      <ImagesSlider images={imagesList} />
    </ScrollView>
  );
};

export default ProductImages;
