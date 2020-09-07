import React, { useState } from 'react';
import axios from 'axios';

import './Admin.scss';
import IBooking from '../../interface/IBooking';
import ICustomer from '../../interface/ICustomer';
import Calendar from 'react-calendar';
import FormCollector from '../formCollector/FormCollector';
import { Link } from 'react-router-dom';

interface IAdminProps {
	allBookings: IBooking[];
	allCustomers: ICustomer[];
}

interface IAdminResult {
	success: IBooking[];
}

export default function Admin(
	props: IAdminProps,
	confirmedBookings: IAdminResult
) {
	const [bookings, setBookings] = useState(confirmedBookings.success);
	const [showBookings, setShowBookings] = useState(false);

	function updateCalendar(e: Date) {
		let dateString =
			e.toLocaleDateString(undefined, { day: '2-digit' }) +
			' ' +
			e.toLocaleDateString(undefined, { month: 'short' });

		checkForAvaliableTables(dateString);
	}

	function checkForAvaliableTables(dateString: string) {
		const totalBookings = props.allBookings.filter((b) => {
			if (b.date === dateString) {
				const customer = props.allCustomers.filter((c)=> {
					if(b.customerId === c._id) {
						return c;
					} return null;
				})

				let summedBooking = {
					booking: b,
					customer: customer
				}

				return summedBooking;
			} else {
				return null
			}
		});

		console.log(totalBookings)


		// setBookings(totalBookings);
		setShowBookings(true);
	}

	function handleDelete(id: string) {
		axios.delete(`http://localhost:8000/delete/${id}`, {}).then((response) => {
			const updatedBookings = bookings.filter((b) => {
				if (b._id !== id) {
					return b;
				}
				return null;
			});

			setBookings(updatedBookings);
		});
	}

	return (
		<div className='header'>
			<h2 className='header-text'>Välkommen till <Link to='/' className='adminLink'>DinnerSpace</Link></h2>
			<div>
				<Calendar onClickDay={updateCalendar} />
			</div>
			<div>
				<div className='form-container'>
					<h2 className='adminHeading'>Datum</h2>
					<h2 className='adminHeading'>Tid</h2>
					<h2 className='adminHeading'>Antal</h2>
					<h2 className='adminHeading'>Meddelande</h2>
				</div>
				{showBookings
					? bookings.map((m) => {
							return (
								<FormCollector
									data={m}
									key={m._id}
									handleDelete={handleDelete}
								/>
							);
					  })
					: null}
			</div>
		</div>
	);
}
