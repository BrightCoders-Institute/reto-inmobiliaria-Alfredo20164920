import React from 'react';
import { render } from '@testing-library/react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faBed } from '@fortawesome/free-solid-svg-icons';
import Service from '../src/components/Service';

jest.mock('@fortawesome/react-native-fontawesome', () => ({
    FontAwesomeIcon: ''
}))

describe('Service', () => {
  const text = '3 Beds';
  const icon = faBed;

  it('renders the text and icon correctly', () => {
    const { getByText, getByTestId } = render(<Service text={text} icon={icon} />);
    const serviceText = getByText(text);
    const serviceIcon = getByTestId("serviceTest");

    expect(serviceText).toBeTruthy();
    expect(serviceIcon.props.icon).toEqual(icon);
  });
});