import React, { useState } from 'react';

import DateComponent from '../date/DateComponent'
import Time from '../time/Time';
import Guests from '../guests/Guests';

export default function Home() {
  const [guestsNumber, setGuestsNumber] = useState(0);

  const [guestTime, setGuestTime] = useState(0);

  const [guestDate, setGuestDate] = useState("")

  function updateGuestsNumber(x: number) {
    setGuestsNumber(x);
  }

  function sendTimeFunction(time: number) {
    setGuestTime(time);
  }

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
}
