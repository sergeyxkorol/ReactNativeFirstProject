import {action} from '@storybook/addon-actions';
import {text} from '@storybook/addon-knobs';
import {storiesOf} from '@storybook/react-native';
import React from 'react';
import TextInput from './index';
import CenterView from '../CenterView';

storiesOf('TextInput', module)
  .addDecorator(getStory => <CenterView>{getStory()}</CenterView>)
  .add('Simple input', () => (
    <TextInput
      label={text('Input text', 'Hello Text Input')}
      onChange={action('changed-text-input')}
    />
  ))
  .add('Input with default value', () => (
    <TextInput
      label={text('Input text', 'Hello Text Input')}
      onChange={action('changed-text-input-with-error')}
      defaultValue={text('Default Value', 'Default text')}
    />
  ))
  .add('Input with error message', () => (
    <TextInput
      label={text('Input text', 'Hello Text Input')}
      onChange={action('changed-text-input-with-error')}
      error={text('Error Message', 'Error!')}
    />
  ))
  .add('Password input', () => (
    <TextInput
      label={text('Input text', 'Hello Password Input')}
      onChange={action('changed-password-input')}
      secureTextEntry={true}
    />
  ));
