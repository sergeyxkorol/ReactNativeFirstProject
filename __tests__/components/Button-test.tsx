import React from 'react';
import {fireEvent, render} from '@testing-library/react-native';
import Button from '../../src/components/Button/Button';
import {ButtonColor} from '../../src/components/Button/Button.types';

describe('Button', () => {
  let callback = jest.fn();
  let queryByText;
  let queryByTestId;
  const text = 'Test Button';

  beforeEach(() => {
    ({queryByText, queryByTestId} = render(
      <Button
        buttonColor={ButtonColor.Submit}
        text={text}
        onPressHandler={callback}
      />,
    ));
  });

  afterAll(() => {
    jest.resetAllMocks();
  });

  it('renders Button with correct text', () => {
    expect(queryByText('Test Button')).not.toBeNull();
  });

  it('calls passed callback on pressing', () => {
    fireEvent.press(queryByTestId('button'));

    expect(callback).toHaveBeenCalled();
  });
});
