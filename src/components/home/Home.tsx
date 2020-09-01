import React, { useState, FormEvent, ChangeEvent } from 'react';

import DateComponent from '../date/DateComponent';
import Time from '../time/Time';
import Guests from '../guests/Guests';
import axios from 'axios';
import IBooking from '../../interface/IBooking';

interface IHomeProps {
	allBookings: IBooking[];
}

export default function Home(props: IHomeProps) {
	const [guestsNumber, setGuestsNumber] = useState(0);
	const [guestTime, setGuestTime] = useState(0);
	const [guestDate, setGuestDate] = useState('');

	const [firstName, setFirstName] = useState('');
	const [lastName, setLastName] = useState('');
	const [email, setEmail] = useState('');
	const [phone, setPhone] = useState('');
	const [message, setMessage] = useState('');
	const [tables, setTables] = useState(true);
	const [showTables, setShowTables] = useState(Boolean);

	function updateGuestsNumber(x: number) {
		setGuestsNumber(x);
	}

	function sendTimeFunction(time: number) {
		setGuestTime(time);
	}

	function sendDateFunction(date: string) {
		setGuestDate(date);
	}

	function updateFirstName(e: ChangeEvent<HTMLInputElement>) {
		setFirstName(e.target.value);
	}

	function updateLastName(e: ChangeEvent<HTMLInputElement>) {
		setLastName(e.target.value);
	}

	function updateEmail(e: ChangeEvent<HTMLInputElement>) {
		setEmail(e.target.value);
	}

	function updatePhone(e: ChangeEvent<HTMLInputElement>) {
		setPhone(e.target.value);
	}

	function updateMessage(e: ChangeEvent<HTMLTextAreaElement>) {
		setMessage(e.target.value);
	}

	function handleSubmit(e: FormEvent) {
		e.preventDefault();
		axios
			.post('http://localhost:8000/', {
				firstName,
				lastName,
				email,
				phone,
				date: guestDate,
				time: guestTime,
				guests: guestsNumber,
				message,
			})
			.then(function (response) {
				console.log(response);
			});
	}

	function checkForAvaliableTables() {
		let table: number = 0;
 try {
		const totalBookings = props.allBookings.filter((b) => {
			if (b.date === guestDate && b.time === guestTime) {
				return b;
			}
		});

		totalBookings.map((b) => {
			let amountOfTables = Math.ceil(b.guests / 6);
			return (table += amountOfTables);
		});

		setTables(false);

		table < 15 ? setShowTables(true) : setShowTables(false);
	}
	catch(err) {
		console.log(err)
	}
	}

	return (
		<form onSubmit={handleSubmit}>
			<div>
				<div>
					<DateComponent sendDate={sendDateFunction} />
				</div>
				<div>
					<Time sendTime={sendTimeFunction} />
				</div>
				<div>
					<Guests sendTheNumber={updateGuestsNumber} />
				</div>
				<button type='button' onClick={checkForAvaliableTables}>
					Kolla om det finns bord
				</button>
				{tables ? (
					''
				) : showTables ? (
					<div>
						<label>
							<input name='firstName' onChange={updateFirstName} />
						</label>
						<label>
							<input name='lastName' onChange={updateLastName} />
						</label>
						<label>
							<input name='email' onChange={updateEmail} />
						</label>
						<label>
							<input name='phone' onChange={updatePhone} />
						</label>
						<label>
							<textarea onChange={updateMessage} />
						</label>
						<button type='submit'>Post</button>
					</div>
				) : (
					<p>Det är slut på bord.</p>
				)}
			</div>
		</form>
	);
}
