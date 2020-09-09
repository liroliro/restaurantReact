import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import DateComponent from './DateComponent';

test('should contain Time component', () => {
    let sendFunctionProps = jest.fn();
    const {getByText} = render(<DateComponent sendDate={sendFunctionProps} />)

    let Btn = getByText(/01-jan/)

    fireEvent.click(Btn);

    expect(sendFunctionProps).toHaveBeenCalled();
});