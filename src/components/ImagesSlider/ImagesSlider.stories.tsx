import {action} from '@storybook/addon-actions';
import {storiesOf} from '@storybook/react-native';
import React from 'react';
import ImagesSlider from '../../../src/components/ImagesSlider/ImagesSlider';
import CenterView from '../CenterView';

const imagesList = [
  {id: '01', src: require('../../assets/product.png')},
  {id: '02', src: require('../../assets/product.png')},
  {id: '03', src: require('../../assets/product.png')},
];

storiesOf('ImagesSlider', module)
  .addDecorator(getStory => <CenterView>{getStory()}</CenterView>)
  .add('Default slider', () => <ImagesSlider images={imagesList} />)
  .add('Click on slide', () => (
    <ImagesSlider
      images={imagesList}
      onPressHandler={action('clicked-slide')}
    />
  ));
