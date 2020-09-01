import React, { useState, useEffect, FormEvent } from 'react';
import axios from 'axios';

import IBooking from '../../interface/IBooking';
import ICustomer from '../../interface/ICustomer';
import Calendar from 'react-calendar';

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

	function handleSubmit(e: FormEvent) {
		e.preventDefault();
		axios.put('http://localhost:8000/update', {}).then(function (response) {
			console.log(response);
		});
	}


	function handleDelete(id: string) {
		console.log("Du försöker ta bort id: " + id);
		axios.delete('http://localhost:8000/delete/' + id, {}).then(function (response) {
			bookings.map((m) => {

			})	
	
			console.log(response);
		});
		// e.preventDefault();
	}

	return (
		<>
			<div>
				<Calendar onClickDay={updateCalendar} />
			</div>

			<div>
				<table key='Table'>
					<thead>
						<tr>
							<th key='date'>Datum</th>
							<th key='time'>Tid</th>
							<th key='guests'>Antal</th>
							<th key='message'>Meddelande</th>
						</tr>
					</thead>
					{showBookings
						? bookings.map((m) => {
								return (
									<tbody key={m._id}>
										<tr>
											<td>{m.date}</td>
											<td>{m.time}</td>
											<td>{m.guests}</td>
											<td>{m.message}</td>
											{/* <td><button onClick={() => handleSubmit(m._id)}>Ta bort bokning</button></td> */}
											<td><button onClick={() => {handleDelete(m._id)} }>Ta bort bokning</button></td>
										</tr>
									</tbody>
								);
						  })
						: null}
				</table>
			</div>

			
		</>
	);
}
