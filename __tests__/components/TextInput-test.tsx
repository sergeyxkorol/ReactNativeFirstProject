import React from 'react';
import {fireEvent, render} from '@testing-library/react-native';
import TextInput from '../../src/components/TextInput';

describe('TextInput', () => {
  const label = 'Test';
  const callback = jest.fn();
  const text = 'Test text';
  const errorMessage = 'Error!';

  let queryByTestId;
  let queryByText;

  beforeEach(() => {
    ({queryByTestId, queryByText} = render(
      <TextInput label={label} onChange={callback} />,
    ));
  });

  afterAll(() => {
    jest.resetAllMocks();
  });

  it('renders TextInput', () => {
    expect(queryByTestId('textInputWrapper')).not.toBeNull();
  });

  it('calls callback on text input', () => {
    fireEvent.changeText(queryByTestId('textInput'), text);

    expect(callback).toHaveBeenCalledWith(text);
  });

  it('do not render error message', () => {
    expect(queryByTestId('textInputError')).toBeFalsy();
    expect(queryByText(errorMessage)).toBeFalsy();
  });

  it('renders error message', () => {
    const {queryByTestId, queryByText} = render(
      <TextInput label={label} onChange={callback} error={errorMessage} />,
    );

    expect(queryByTestId('textInputError')).not.toBeNull();
    expect(queryByText(errorMessage)).not.toBeNull();
  });
});
