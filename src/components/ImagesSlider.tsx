import React, {FC, useCallback, useState} from 'react';
import {
  Image,
  ImageSourcePropType,
  Pressable,
  ScrollView,
  StyleSheet,
  useWindowDimensions,
  View,
} from 'react-native';

type ImageItem = {
  id: string;
  src: string;
};

import Dot from '../assets/dots/dots-active-no.svg';
import DotActive from '../assets/dots/dots-active-yes.svg';

type Props = {
  images: ImageItem[];
  onPressHandler: Function;
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
        {images.map(({id, src}) => (
          <View key={id} style={[styles.slide, {width}]}>
            <Pressable onPress={() => onPressHandler(id)}>
              <Image
                key={id}
                source={src as ImageSourcePropType}
                style={styles.image}
              />
            </Pressable>
          </View>
        ))}
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

const styles = StyleSheet.create({
  sliderWrapper: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 20,
    paddingBottom: 20,
  },

  scrollWrapper: {
    width: '100%',
  },

  slide: {
    justifyContent: 'center',
    alignItems: 'center',
  },

  image: {
    width: 250,
  },

  dots: {
    flexDirection: 'row',
    alignSelf: 'center',
    position: 'absolute',
    bottom: 0,
  },

  dot: {
    marginRight: 5,
  },
});

export default ImagesSlider;
