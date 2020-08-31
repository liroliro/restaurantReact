import React, { useState, useEffect } from 'react';

import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

interface IDateProps {
	sendDate(date: string): void;
}

export default function DateComponent(props: IDateProps) {
	const [guestDate, setGuestDate] = useState('');
	const [guestDateTomorrow, setGuestDateTomorrow] = useState('');
	const [guestDateDayAfterTomorrow, setGuestDateDayAfterTomorrow] = useState(
		''
	);

	const [clickedDate, setClickedDate] = useState('');

	useEffect(() => {
		let date = new Date();
		let dateString = date.toLocaleDateString(undefined, {day:'2-digit'}) + ' ' + date.toLocaleDateString(undefined, {month:'short'});
		let month = new Date().getMonth();

		let bookingDate = date.getDate() + '/' + (month + 1);
		let bookingDateTomorrow = dateString + 1 + '/' + (month + 1);
		let bookingDateDayAfterTomorrow = date.setDate(date.getDate() + 2) + '/' + (month + 1);

		setGuestDate(dateString);
		setGuestDateTomorrow(bookingDateTomorrow);
		setGuestDateDayAfterTomorrow(bookingDateDayAfterTomorrow);
	}, []);

	useEffect(() => {
		sendToParent();
	}, [clickedDate]);

	function handleClickedDate(e: React.MouseEvent<HTMLButtonElement>) {
		setClickedDate(e.currentTarget.value);
	}

	function sendToParent() {
		props.sendDate(clickedDate);
	}

	function updateCalendar(e: Date) {
		let date = e.getDate();
		let month = e.getMonth();
		let bookingDate = date + '/' + (month + 1);
		setClickedDate(bookingDate);
	}

	return (
		<>
			<div>
				<button onClick={handleClickedDate} value={guestDate} type='button'>
					{guestDate}
				</button>
				<button
					onClick={handleClickedDate}
					value={guestDateTomorrow}
					type='button'
				>
					{guestDateTomorrow}
				</button>
				<button
					onClick={handleClickedDate}
					value={guestDateDayAfterTomorrow}
					type='button'
				>
					{guestDateDayAfterTomorrow}
				</button>
				<div>
					<Calendar onClickDay={updateCalendar} />
				</div>
			</div>
		</>
	);
}
