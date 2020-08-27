import React from 'react';

import IBooking from '../../interface/IBooking';
import ICustomer from '../../interface/ICustomer';

interface IAdminProps {
	allBookings: IBooking[];
	allCustomers: ICustomer[];
}

export default function Admin(props: IAdminProps) {
	console.log(props);

	return <div></div>;
}
