import React, {FC, useState} from 'react';
import {
  Image,
  ImageSourcePropType,
  ScrollView,
  ScrollViewProps,
  StyleSheet,
  View,
} from 'react-native';

type ImageItem = {
  id: string;
  src: string;
};

import Dot from '../assets/dots/dots-active-no.svg';
import DotActive from '../assets/dots/dots-active-yes.svg';

const ImagesSlider: FC<{images: ImageItem[]}> = ({images}) => {
  const [currentImage, setCurrentImage] = useState(0);

  const handleScroll = ({nativeEvent}) => {
    const image = Math.ceil(
      nativeEvent.contentOffset.x / nativeEvent.layoutMeasurement.width,
    );

    if (image !== currentImage) {
      setCurrentImage(image);
    }
  };

  return (
    <View style={styles.sliderWrapper}>
      <ScrollView
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onScroll={handleScroll}
        style={styles.scrollWrapper}>
        {images.map(({id, src}) => (
          <Image key={id} source={src as ImageSourcePropType} />
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
    padding: 20,
  },

  scrollWrapper: {
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
