import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Time from './Time';

test('should contain Time component', () => {
    let sendFunctionProps = jest.fn();
    const {getByText} = render(<Time sendTime={sendFunctionProps} />)

    let Btn = getByText(/18/ || /21/)

    fireEvent.click(Btn);

    expect(sendFunctionProps).toHaveBeenCalled();
});