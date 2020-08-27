import React, { useState } from 'react';

import DateComponent from '../date/DateComponent';
import Time from '../time/Time';
import Guests from '../guests/Guests';

export default function Home() {
	const [guestsNumber, setGuestsNumber] = useState(0);
	const [guestTime, setGuestTime] = useState(0);

	function updateGuestsNumber(x: number) {
		setGuestsNumber(x);
	}

<<<<<<< HEAD
	function sendTimeFunction(time: number) {
		setGuestTime(time);
	}
=======
  const [guestDate, setGuestDate] = useState("")

  function updateGuestsNumber(x: number) {
    setGuestsNumber(x);
  }
>>>>>>> 423089827153576584c847b2ccfd4304fbaa3ce9

	return (
		// <form method='POST' action='http://localhost:8000/bookings'>
		<div>
			<label>
				<input name='firstName' />
			</label>
			<label>
				<input name='lastName' />
			</label>
			<label>
				<input name='email' />
			</label>
			<label>
				<input name='phone' />
			</label>
			<div>
				<DateComponent />
			</div>
			<div>
				<Time sendTime={sendTimeFunction} />
			</div>
			<div>
				<Guests sendTheNumber={updateGuestsNumber} />
			</div>
			{/* <button formMethod='POST'>Skicka</button> */}
			<p>{guestTime}</p>
			<p>{guestsNumber}</p>
		</div>

<<<<<<< HEAD
		// </form>
	);
=======
  function sendDateFunction(date: string){
    setGuestDate(date);
  }

  return (
    // <form method='POST' action='http://localhost:8000/bookings'>
    <div>
      <div>
        <DateComponent sendDate={sendDateFunction}/>
      </div>
      <div>
        <Time sendTime={sendTimeFunction} />
      </div>
      <div>
        <Guests sendTheNumber={updateGuestsNumber} />
      </div>
      {/* <button formMethod='POST'>Skicka</button> */}
      <p>{guestTime}</p>
      <p>{guestsNumber}</p>
      <p>{guestDate}</p>
    </div>

    // </form>
  );
>>>>>>> 423089827153576584c847b2ccfd4304fbaa3ce9
}
