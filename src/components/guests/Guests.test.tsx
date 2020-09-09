import React from 'react';

import { render, fireEvent } from '@testing-library/react';
import Guests from './Guests';


test('should contain Guest component', () => {
    let sendFunction = jest.fn();
    const { getByText } = render(<Guests sendTheNumber={sendFunction} />)

    let moreGuestBtn = getByText(/fler gäster.../)

    fireEvent.click(moreGuestBtn)
});

test('should contain Guest component', () => {
    let sendFunction = jest.fn();
    const { getByText } = render(<Guests sendTheNumber={sendFunction} />)

    let moreGuestBtn = getByText(/fler gäster.../)

    fireEvent.click(moreGuestBtn)
});
