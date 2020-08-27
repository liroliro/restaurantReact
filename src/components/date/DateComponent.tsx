import React, { useState, useEffect, ChangeEvent } from 'react';
import Calendar from 'react-calendar';

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

	const [calendar, setCalendar] = useState('');

	useEffect(() => {
		let date = new Date().getDate();
		let month = new Date().getMonth();

		let bookingDate = date + '/' + (month + 1);
		let bookingDateTomorrow = date + 1 + '/' + (month + 1);
		let bookingDateDayAfterTomorrow = date + 2 + '/' + (month + 1);

		setGuestDate(bookingDate);
		setGuestDateTomorrow(bookingDateTomorrow);
		setGuestDateDayAfterTomorrow(bookingDateDayAfterTomorrow);
	}, []);

	useEffect(() => {
		sendToParent();
	}, [clickedDate]);

	function handleClickedDate(e: React.MouseEvent<HTMLButtonElement>) {
		setClickedDate(e.currentTarget.value);
	}

	function handleClickedDateCalendar(e: ChangeEvent<HTMLInputElement>) {
		setClickedDate(e.currentTarget.value);
		sendToParent();
		console.log(e.currentTarget.value);
	}

	function sendToParent() {
		props.sendDate(clickedDate);
	}

	function updateCalendar(e: ChangeEvent) {
		setCalendar(e.target.value);
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
					{/* Lägg till värdet till input som ska skickas till föräldern */}
					<input
						type='date'
						id='date'
						name='date'
						onChange={handleClickedDateCalendar}
					/>
				</div>
				<div>
					<Calendar onChange={updateCalendar} value={calendar} />
				</div>
			</div>
		</>
	);
}
