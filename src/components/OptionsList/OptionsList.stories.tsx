import {action} from '@storybook/addon-actions';
import {select} from '@storybook/addon-knobs';
import {storiesOf} from '@storybook/react-native';
import React from 'react';
import OptionsList from './OptionsList';
import CenterView from '../CenterView';

const options = [
  {
    id: '01',
    name: 'Option 1',
  },
  {
    id: '02',
    name: 'Option 2',
  },
  {
    id: '03',
    name: 'Option 3',
  },
];
const optionsId = options.map(({id}) => id);

storiesOf('OptionsList', module)
  .addDecorator(getStory => <CenterView>{getStory()}</CenterView>)
  .add('Default options', () => (
    <OptionsList
      options={options}
      selectedOptionId={select('selected option id', optionsId, optionsId[0])}
      onPressHandler={action('option-click')}
    />
  ));
