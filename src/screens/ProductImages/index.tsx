import {useRoute} from '@react-navigation/native';
import React, {FC} from 'react';
import {ScrollView, useWindowDimensions} from 'react-native';
import ImagesSlider from '../../components/ImagesSlider/ImagesSlider';

const ProductImages: FC = () => {
  const route = useRoute();
  const imagesList = route.params?.imagesList;

  const {height} = useWindowDimensions();

  return (
    <ScrollView
      contentInsetAdjustmentBehavior="automatic"
      contentContainerStyle={{height}}>
      <ImagesSlider images={imagesList} />
    </ScrollView>
  );
};

export default ProductImages;
