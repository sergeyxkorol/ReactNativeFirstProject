import React from 'react';
import {fireEvent, render} from '@testing-library/react-native';
import Link from '../../src/components/Link';

describe('Link', () => {
  let callback = jest.fn();
  let queryByText;
  let queryByTestId;
  const text = 'Test Link';

  beforeEach(() => {
    ({queryByText, queryByTestId} = render(
      <Link text={text} onPressHandler={callback} />,
    ));
  });

  afterAll(() => {
    jest.resetAllMocks();
  });

  it('renders Link with correct text', () => {
    expect(queryByText('Test Link')).not.toBeNull();
  });

  it('calls passed callback on pressing', () => {
    fireEvent.press(queryByTestId('link'));

    expect(callback).toHaveBeenCalled();
  });
});
