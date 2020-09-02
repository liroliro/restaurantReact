import React, { useState, useEffect, FormEvent, ChangeEvent } from 'react';
import axios from 'axios';

import IBooking from '../../interface/IBooking';
import ICustomer from '../../interface/ICustomer';
import Calendar from 'react-calendar';
import FormCollector from '../formCollector/FormCollector';

interface IAdminProps {
	allBookings: IBooking[];
	allCustomers: ICustomer[];
}

interface IAdminResult {
	success: IBooking[];
}

export default function Admin(props: IAdminProps, state: IAdminResult) {
	const [clickedDate, setClickedDate] = useState('');
	const [bookings, setBookings] = useState(state.success);
	const [showBookings, setShowBookings] = useState(false);

	useEffect(() => {
		checkForAvaliableTables();
	}, [clickedDate]);

	function updateCalendar(e: Date) {
		let dateString =
			e.toLocaleDateString(undefined, { day: '2-digit' }) +
			' ' +
			e.toLocaleDateString(undefined, { month: 'short' });
		setClickedDate(dateString);
	}

	function checkForAvaliableTables() {
		const totalBookings = props.allBookings.filter((b) => {
			if (b.date === clickedDate) {
				return b;
			}
		});

		setBookings(totalBookings);
		setShowBookings(true);
	}

	return (
		<>
			<div>
				<Calendar onClickDay={updateCalendar} />
			</div>

			<div>
				{showBookings
					? bookings.map((m) => {
							return <FormCollector data={m} key={m._id} />;
					  })
					: null}
			</div>
		</>
	);
}
