import React from 'react';
import { render } from '@testing-library/react-native';
import ImageContainer from '../src/components/ImageContainer';

jest.mock('@fortawesome/react-native-fontawesome', () => ({
    FontAwesomeIcon: ''
}))

describe('ImageContainer', () => {
  const rating = 4.5;

  it('renders the image correctly', () => {
    const { getByTestId } = render(<ImageContainer rating={rating} />);
    const image = getByTestId('imageTest');

    expect(image).toBeTruthy();
  });

  it('renders the rating component', () => {
    const { getByTestId } = render(<ImageContainer rating={rating} />);
    const ratingComponent = getByTestId('rating-component-test');

    expect(ratingComponent).toBeTruthy();
  });
});