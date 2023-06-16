import React from 'react';
import { render } from '@testing-library/react-native';
import Details from '../src/components/Details';

jest.mock('@fortawesome/react-native-fontawesome', () => ({
    FontAwesomeIcon: ''
}))

describe('Details', () => {
  const details = {
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
    const { getByText } = render(<Details details={details} />);
    const nameElement = getByText(details.name);

    expect(nameElement).toBeTruthy();
  });

  it('renders the hotel address correctly', () => {
    const { getByText } = render(<Details details={details} />);
    const addressElement = getByText(details.address);

    expect(addressElement).toBeTruthy();
  });

  it('renders the number of rooms correctly', () => {
    const { getByText } = render(<Details details={details} />);
    const roomsElement = getByText(details.number_rooms.toString());

    expect(roomsElement).toBeTruthy();
  });

  it('renders the number of restrooms correctly', () => {
    const { getByText } = render(<Details details={details} />);
    const restroomsElement = getByText(details.number_restrooms.toString());

    expect(restroomsElement).toBeTruthy();
  });

  it('renders the area correctly', () => {
    const { getByText } = render(<Details details={details} />);
    const areaElement = getByText(`${details.area} ft`);

    expect(areaElement).toBeTruthy();
  });

  it('renders the cost per month correctly', () => {
    const { getByText } = render(<Details details={details} />);
    const costElement = getByText(`$${details.cost_month}/m`);

    expect(costElement).toBeTruthy();
  });

  it('renders the ButtonLike component', () => {
    const { getByTestId } = render(<Details details={details} />);
    const buttonLikeElement = getByTestId('buttonLike-component-test');

    expect(buttonLikeElement).toBeTruthy();
  });
});