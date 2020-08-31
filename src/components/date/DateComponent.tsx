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
	const [showCalendar, setShowCalendar] = useState(false);

	useEffect(() => {
		let date = new Date();
		let dateString =
			date.toLocaleDateString(undefined, { day: '2-digit' }) +
			' ' +
			date.toLocaleDateString(undefined, { month: 'short' });

		let tomorrow = new Date();
		tomorrow.setDate(tomorrow.getDate() + 1);
		let tomorrowsDate =
			tomorrow.toLocaleDateString(undefined, { day: '2-digit' }) +
			' ' +
			tomorrow.toLocaleDateString(undefined, { month: 'short' });

		let dayAfterTomorrow = new Date();
		dayAfterTomorrow.setDate(dayAfterTomorrow.getDate() + 2);
		let dayAfterTomorrowsDate =
			dayAfterTomorrow.toLocaleDateString(undefined, { day: '2-digit' }) +
			' ' +
			dayAfterTomorrow.toLocaleDateString(undefined, { month: 'short' });

		setGuestDate(dateString);
		setGuestDateTomorrow(tomorrowsDate);
		setGuestDateDayAfterTomorrow(dayAfterTomorrowsDate);
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
		let dateString =
			e.toLocaleDateString(undefined, { day: '2-digit' }) +
			' ' +
			e.toLocaleDateString(undefined, { month: 'short' });

		setClickedDate(dateString);
	}

	return (
		<>
			<div>
				<div>
					<i
						className='fas fa-calendar-week'
						onClick={() => setShowCalendar(true)}
					></i>
					{showCalendar ? <Calendar onClickDay={updateCalendar} /> : ''}
				</div>
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
			</div>
		</>
	);
}
