import React, { useState, ChangeEvent, FormEvent, useEffect } from 'react';
import IBooking from '../../interface/IBooking';

import axios from 'axios';

interface IFormCollectorProps {
	data: IBooking;
}

export default function FormCollector(props: IFormCollectorProps) {
	const [bookingDate, setBookingDate] = useState(props.data.date);
	const [bookingTime, setBookingTime] = useState(props.data.time);
	const [bookingGuests, setBookingGuests] = useState(props.data.guests);
	const [bookingMessage, setBookingMessage] = useState(props.data.message);

	function handleDate(e: ChangeEvent<HTMLInputElement>) {
		setBookingDate(e.target.value);
	}

	function handleTime(e: ChangeEvent<HTMLInputElement>) {
		setBookingTime(Number(e.target.value));
	}

	function handleGuests(e: ChangeEvent<HTMLInputElement>) {
		setBookingGuests(Number(e.target.value));
	}

	function handleMessage(e: ChangeEvent<HTMLInputElement>) {
		setBookingMessage(e.target.value);
	}

	function handleUpdate(e: FormEvent) {
		e.preventDefault();

		const newBooking = {
			_id: props.data._id,
			date: bookingDate,
			time: bookingTime,
			guests: bookingGuests,
			message: bookingMessage,
			customerId: props.data.customerId,
		};

		axios
			.put(`http://localhost:8000/update/${props.data._id}`, { newBooking })
			.then((response) => {
				console.log(response);
			});
	}

	function handleDelete(id: string) {
		console.log('Du försöker ta bort id: ' + id);

		axios.delete(`http://localhost:8000/delete/${id}`, {}).then((response) => {
			console.log(response);
		});

		window.location.reload(true);
	}

	return (
		<form onSubmit={handleUpdate}>
			<input value={bookingDate} key={props.data.date} onChange={handleDate} />

			<input value={bookingTime} key={props.data.time} onChange={handleTime} />

			<input
				value={bookingGuests}
				key={props.data.guests}
				onChange={handleGuests}
			/>

			<input
				value={bookingMessage}
				key={props.data.message}
				onChange={handleMessage}
			/>
			<button
				onClick={() => {
					handleDelete(props.data._id);
				}}
				type='button'
			>
				Ta bort bokning
			</button>

			<button type='submit'>Uppdatera bokning</button>
		</form>
	);
}
