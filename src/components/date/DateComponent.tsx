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

	const [btnState, setBtnState] = useState(false);

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

	function handleClickedDate(e: React.MouseEvent<HTMLButtonElement>) {
		sendToParent(e.currentTarget.value);
		setBtnState(!btnState);
	}

	function sendToParent(string: string) {
		props.sendDate(string);
	}

	function updateCalendar(e: Date) {
		let dateString =
			e.toLocaleDateString(undefined, { day: '2-digit' }) +
			' ' +
			e.toLocaleDateString(undefined, { month: 'short' });

		sendToParent(dateString);
	}

	let btn_class = btnState ? 'clickedButton' : 'unclickedButton';

	return (
		<>
			<div className='dateComponent'>
				<span>
					<button
						onClick={handleClickedDate}
						value={guestDate}
						type='button'
						className={btn_class}
					>
						{guestDate}
					</button>
				</span>
				<span>
					<button
						onClick={handleClickedDate}
						value={guestDateTomorrow}
						type='button'
						className={btn_class}
					>
						{guestDateTomorrow}
					</button>
				</span>
				<span>
					<button
						onClick={handleClickedDate}
						value={guestDateDayAfterTomorrow}
						type='button'
						className={btn_class}
					>
						{guestDateDayAfterTomorrow}
					</button>
				</span>
				<span>
					<i
						className='fas fa-calendar-week fa-lg'
						onClick={() => setShowCalendar(true)}
					></i>
					{showCalendar ? <Calendar onClickDay={updateCalendar} /> : ''}
				</span>
			</div>
		</>
	);
}
