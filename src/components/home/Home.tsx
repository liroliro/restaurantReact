import React, { useState, FormEvent, ChangeEvent, useEffect } from 'react';

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
	const [validation, setValidation] = useState(false);
	const [showTables, setShowTables] = useState(Boolean);

	useEffect(() => {
		if (guestTime === 0 || guestsNumber === 0 || guestDate === '') {
			return;
		} else {
			setValidation(true);
		}
	}, [guestTime, guestsNumber, guestDate]);

	function updateGuestsNumber(number: number) {
		setGuestsNumber(number);
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
			.then((response) => {
				console.log(response);
			});
	}

	function checkForAvaliableTables() {
		let table: number = 0;

		const totalBookings = props.allBookings.filter((b) => {
			if (b.date === guestDate && b.time === guestTime) {
				return b;
			}
			return null;
		});

		totalBookings.map((b) => {
			let amountOfTables = Math.ceil(b.guests / 6);
			return (table += amountOfTables);
		});

		setTables(false);

		table < 15 ? setShowTables(true) : setShowTables(false);
	}

	const validatedButton = (
		<button
			type='button'
			className='Btn-search'
			onClick={checkForAvaliableTables}
		>
			Sök efter lediga bord
		</button>
	);

	const unvalidatedButton = (
		<button disabled className='Btn-search'>
			Sök efter lediga bord
		</button>
	);

	return (
		<div className='header'>
			<h2 className='header-text'>Välkommen till DinnerSpace</h2>
			<form onSubmit={handleSubmit}>
				<div>
					<div>
						<span>Välj ett datum</span>
						<DateComponent sendDate={sendDateFunction} />
					</div>
					<div>
						<span>Välj en tid</span>
						<Time sendTime={sendTimeFunction} />
					</div>
					<span>Hur många gäster</span>
					<div className='guestHome'>
						<Guests sendTheNumber={updateGuestsNumber} />
					</div>
					{validation ? validatedButton : unvalidatedButton}
					{tables ? (
						''
					) : showTables ? (
						<div>
							<div className='bokingConfirm'>
								Du vill boka bord den {guestDate} klockan {guestTime}.00 för{' '}
								{guestsNumber} {''}personer.
							</div>
							<div className='bokingConfirm'>
								{' '}
								Fyll i dina uppgifter för att genomföra bokningen.
							</div>
							<label>
								<input
									name='firstName'
									onChange={updateFirstName}
									placeholder='Förnamn'
								/>
							</label>
							<label>
								<input
									name='lastName'
									onChange={updateLastName}
									placeholder='Efternamn'
								/>
							</label>
							<label>
								<input
									name='email'
									onChange={updateEmail}
									placeholder='Email'
								/>
							</label>
							<label>
								<input
									name='phone'
									onChange={updatePhone}
									placeholder='Telefonnummer'
								/>
							</label>
							<label>
								<textarea onChange={updateMessage} placeholder='Meddelande' />
							</label>
							<button type='submit'>Post</button>
						</div>
					) : (
						<p>Det är slut på bord.</p>
					)}
				</div>
			</form>
		</div>
	);
}
