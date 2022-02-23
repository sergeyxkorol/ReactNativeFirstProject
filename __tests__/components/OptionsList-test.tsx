import React from 'react';
import {fireEvent, render} from '@testing-library/react-native';
import OptionsList from '../../src/components/OptionsList/OptionsList';

describe('OptionsList', () => {
  const options = [
    {id: '01', name: 'Option 1'},
    {id: '02', name: 'Option 2'},
  ];
  const selectedOptionId = '01';
  const callback = jest.fn();

  let queryByTestId;

  beforeEach(() => {
    ({queryByTestId} = render(
      <OptionsList
        options={options}
        selectedOptionId={selectedOptionId}
        onPressHandler={callback}
      />,
    ));
  });

  afterAll(() => {
    jest.resetAllMocks();
  });

  it('renders OptionsList', () => {
    expect(queryByTestId('optionsList')).not.toBeNull();
  });

  it('calls callback on press on the option', () => {
    fireEvent.press(queryByTestId('option01'));

    expect(callback).toHaveBeenCalledWith('01');
  });
});
