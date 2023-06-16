import React from 'react';
import { render } from '@testing-library/react-native';
import Card from '../src/components/Card';

jest.mock('@fortawesome/react-native-fontawesome', () => ({
    FontAwesomeIcon: ''
}))

describe('Card', () => {
  const hotel = {
    id: 1,
    name: 'Hotel ABC',
    address: '123 Main St',
    number_rooms: 2,
    number_restrooms: 1,
    area: 1000,
    cost_month: 2000,
    rating: 4.5,
  };

  it('renders the hotel name correctly', () => {
    const { getByText } = render(<Card hotel={hotel} />);
    const nameElement = getByText(hotel.name);

    expect(nameElement).toBeTruthy();
  });

  it('renders the hotel address correctly', () => {
    const { getByText } = render(<Card hotel={hotel} />);
    const addressElement = getByText(hotel.address);

    expect(addressElement).toBeTruthy();
  });

  it('renders the number of rooms correctly', () => {
    const { getByText } = render(<Card hotel={hotel} />);
    const roomsElement = getByText(hotel.number_rooms.toString());

    expect(roomsElement).toBeTruthy();
  });

  it('renders the number of restrooms correctly', () => {
    const { getByText } = render(<Card hotel={hotel} />);
    const restroomsElement = getByText(hotel.number_restrooms.toString());

    expect(restroomsElement).toBeTruthy();
  });

  it('renders the area correctly', () => {
    const { getByText } = render(<Card hotel={hotel} />);
    const areaElement = getByText(`${hotel.area} ft`);

    expect(areaElement).toBeTruthy();
  });

  it('renders the cost per month correctly', () => {
    const { getByText } = render(<Card hotel={hotel} />);
    const costElement = getByText(`$${hotel.cost_month}/m`);

    expect(costElement).toBeTruthy();
  });

  it('renders the rating correctly', () => {
    const { getByTestId } = render(<Card hotel={hotel} />);
    const ratingElement = getByTestId('rating-component-test');

    expect(ratingElement).toBeTruthy();
  });

  it('renders the ImageContainer component', () => {
    const { getByTestId } = render(<Card hotel={hotel} />);
    const imageContainerElement = getByTestId('image-container-test');

    expect(imageContainerElement).toBeTruthy();
  });

  it('renders the Details component', () => {
    const { getByTestId } = render(<Card hotel={hotel} />);
    const detailsElement = getByTestId('details-test');

    expect(detailsElement).toBeTruthy();
  });
});