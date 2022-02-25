import {action} from '@storybook/addon-actions';
import {text} from '@storybook/addon-knobs';
import {storiesOf} from '@storybook/react-native';
import React from 'react';
import Link from './index';
import CenterView from '../CenterView';

storiesOf('Link', module)
  .addDecorator(getStory => <CenterView>{getStory()}</CenterView>)
  .add('Default link', () => (
    <Link
      text={text('Link text', 'Hello World')}
      onPressHandler={action('clicked-link')}
    />
  ));
