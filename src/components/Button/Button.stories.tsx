import {action} from '@storybook/addon-actions';
import {select, text} from '@storybook/addon-knobs';
import {storiesOf} from '@storybook/react-native';
import React from 'react';
import Button from '../../../src/components/Button/Button';
import {ButtonColor} from '../../../src/components/Button/Button.types';
import CenterView from '../CenterView';

const colorOptions = [
  ButtonColor.Submit,
  ButtonColor.Cancel,
  ButtonColor.Grayed,
];

storiesOf('Button', module)
  .addDecorator(getStory => <CenterView>{getStory()}</CenterView>)
  .add('Submit with text', () => (
    <Button
      buttonColor={select('Color', colorOptions, colorOptions[0])}
      text={text('Button text', 'Hello Button')}
      onPressHandler={action('clicked-button')}
    />
  ));
