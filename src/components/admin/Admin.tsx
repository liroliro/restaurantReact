import React from 'react';

import IBooking from '../../interface/IBooking';
import ICustomer from '../../interface/ICustomer';

import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';

interface IAdminProps {
	allBookings: IBooking[];
	allCustomers: ICustomer[];
}

export default function Admin(props: IAdminProps) {
	console.log(props);

	return (
		<div>
			<FullCalendar
				plugins={[dayGridPlugin]}
				initialView='dayGridMonth'
				events={[
					{
						title: 'event 1',
						date: '2020-08-25',
					},
				]}
			/>
		</div>
	);
}
