import React, {FC, useState} from 'react';
import {
  Image,
  ImageSourcePropType,
  Pressable,
  ScrollView,
  useWindowDimensions,
  View,
} from 'react-native';
import styles from './styles';

import Dot from '../../assets/dots/dots-active-no.svg';
import DotActive from '../../assets/dots/dots-active-yes.svg';

type ImageItem = {
  id: string;
  src: string;
};

type Props = {
  images: ImageItem[];
  onPressHandler?: Function;
};

const ImagesSlider: FC<Props> = ({images, onPressHandler}) => {
  const [currentImage, setCurrentImage] = useState(0);

  const handleScroll = ({nativeEvent}) => {
    const image = Math.ceil(
      nativeEvent.contentOffset.x / nativeEvent.layoutMeasurement.width,
    );

    if (image !== currentImage) {
      setCurrentImage(image);
    }
  };

  const {width} = useWindowDimensions();

  return (
    <View style={styles.sliderWrapper}>
      <ScrollView
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onScroll={handleScroll}
        style={styles.scrollWrapper}>
        {images.map(({id, src}) => {
          const image = (
            <Image
              key={id}
              source={src as ImageSourcePropType}
              style={styles.image}
            />
          );
          return (
            <View key={id} style={[styles.slide, {width}]}>
              {onPressHandler ? (
                <Pressable onPress={() => onPressHandler(id)}>
                  {image}
                </Pressable>
              ) : (
                image
              )}
            </View>
          );
        })}
      </ScrollView>

      <View style={styles.dots}>
        {images.map(({id}, index) =>
          index === currentImage ? (
            <DotActive key={id} style={styles.dot} />
          ) : (
            <Dot key={id} style={styles.dot} />
          ),
        )}
      </View>
    </View>
  );
};

export default ImagesSlider;
