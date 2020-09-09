import React from 'react';

import { render } from '@testing-library/react';
import Admin from './Admin';

test('Should contain h2s', () => {
	const { container } = render(
		<Admin
			allBookings={[
				{
					_id: 'blabla',
					date: '19/8',
					time: 18,
					guests: 18,
					message: 'Hejhej',
					customerId: 1234567890,
				},
			]}
			allCustomers={[
				{
					id: '1',
					firstName: 'Oscar',
					lastName: 'Mattsson',
					email: 'hello@gmail.com',
					phone: '1234567890',
				},
			]}
		/>
	);

	let h2element = container.querySelector('h2');
	expect(h2element).toBeInTheDocument();
});

test('should contain string Datum', () => {
	const { getByText } = render(
		<Admin
			allBookings={[
				{
					_id: 'blabla',
					date: '19/8',
					time: 18,
					guests: 18,
					message: 'Hejhej',
					customerId: '1234567890',
				},
			]}
			allCustomers={[
				{
					_id: '1',
					firstName: 'Oscar',
					lastName: 'Mattsson',
					email: 'hello@gmail.com',
					phone: '1234567890',
				},
			]}
		/>
	);

	let dateString = getByText('Datum');
	expect(dateString).toBeInTheDocument;
});
