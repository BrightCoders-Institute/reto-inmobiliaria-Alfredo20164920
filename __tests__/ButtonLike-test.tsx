import React from 'react';
import { render } from '@testing-library/react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import ButtonLike from '../src/components/ButtonLike';

jest.mock('@fortawesome/react-native-fontawesome', () => ({
    FontAwesomeIcon: ''
}))

describe('ButtonLike', () => {
    it('renders the heart icon correctly', () => {
        const { getByTestId } = render(<ButtonLike />);
        const heartIcon = getByTestId('heartIcon');

        expect(heartIcon).toBeTruthy();
        expect(heartIcon.props.icon.iconName).toEqual('heart');
        expect(heartIcon.props.size).toEqual(15);
        expect(heartIcon.props.style).toEqual(expect.any(Object));
        expect(heartIcon.props.style.color).toEqual('#fff');
    });
});