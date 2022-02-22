import React from 'react';
import {fireEvent, render} from '@testing-library/react-native';
import Modal from '../../src/components/Modal/Modal';

const mockedGoBack = jest.fn();

jest.mock('@react-navigation/native', () => {
  const actualNav = jest.requireActual('@react-navigation/native');
  return {
    ...actualNav,
    useNavigation: () => ({
      goBack: mockedGoBack,
    }),
  };
});

describe('Modal', () => {
  let queryByText;
  let queryByTestId;

  beforeEach(() => {
    ({queryByText, queryByTestId} = render(
      <Modal icon={undefined} title={'Test text'} />,
    ));
  });

  afterAll(() => {
    jest.resetAllMocks();
  });

  it('renders Modal', () => {
    expect(queryByTestId('modal')).not.toBeNull();
    expect(queryByText('Test text')).not.toBeNull();
  });

  it('calls goBack on press on the default button', () => {
    fireEvent.press(queryByTestId('button'));

    expect(mockedGoBack).toHaveBeenCalledTimes(1);
  });
});
