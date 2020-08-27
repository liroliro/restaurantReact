import React, { useState, FormEvent, ChangeEvent } from 'react';

import DateComponent from '../date/DateComponent';
import Time from '../time/Time';
import Guests from '../guests/Guests';
import axios from 'axios';

export default function Home() {
	const [guestsNumber, setGuestsNumber] = useState(0);
	const [guestTime, setGuestTime] = useState(0);
	const [guestDate, setGuestDate] = useState('');

	const [firstName, setFirstName] = useState('');
	const [lastName, setLastName] = useState('');
	const [email, setEmail] = useState('');
	const [phone, setPhone] = useState('');
	const [message, setMessage] = useState('');

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

	return (
		<form onSubmit={handleSubmit}>
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
				<div>
					<DateComponent sendDate={sendDateFunction} />
				</div>
				<div>
					<Time sendTime={sendTimeFunction} />
				</div>
				<div>
					<Guests sendTheNumber={updateGuestsNumber} />
				</div>
			</div>
			<button type='submit'>Post</button>
		</form>
	);
}
