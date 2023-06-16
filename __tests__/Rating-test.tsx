import React from 'react';
import { render } from '@testing-library/react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import Rating from '../src/components/Rating';

jest.mock('@fortawesome/react-native-fontawesome', () => ({
    FontAwesomeIcon: ''
}))

describe('Rating', () => {
  const data = 4.5;

  it('renders the rating correctly', () => {
    const { getByText, getByTestId } = render(<Rating data={data} />);
    const ratingText = getByText(data.toString());
    const ratingIcon = getByTestId("ratingIconTest");

    expect(ratingText).toBeTruthy();
    expect(ratingIcon.props.icon).toEqual(faStar);
  });
});