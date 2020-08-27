import React, { useState, useEffect, ChangeEvent } from 'react'

interface IDateProps{
  sendDate(date: string): void;
} 

export default function DateComponent(props: IDateProps) {
    const [guestDate, setGuestDate] = useState("");
    const [guestDateTomorrow, setGuestDateTomorrow] = useState("");
    const [guestDateDayAfterTomorrow, setGuestDateDayAfterTomorrow] = useState("");

    const [clickedDate, setClickedDate] = useState("");

      useEffect(() => {
          let date = new Date().getDate();
          let month = new Date().getMonth();

          let bookingDate = date + "/" + (month + 1);
          let bookingDateTomorrow = (date + 1) + "/" + (month + 1);
          let bookingDateDayAfterTomorrow = (date + 2) + "/" + (month + 1);

          setGuestDate(bookingDate);
          setGuestDateTomorrow(bookingDateTomorrow);
          setGuestDateDayAfterTomorrow(bookingDateDayAfterTomorrow);
      }, [])

      function handleClickedDate(e: React.MouseEvent<HTMLButtonElement>){
        setClickedDate(e.currentTarget.value);
        sendToParent();
        console.log(clickedDate)
      }

      function handleClickedDateCalendar(e: ChangeEvent<HTMLInputElement>){
        setClickedDate(e.currentTarget.value);
        sendToParent();
        console.log(e.currentTarget.value)
      }

      function sendToParent() {
        props.sendDate(clickedDate);
      }

      return (
        <>
          <div>
            <button onClick={handleClickedDate} value={guestDate}>{guestDate}</button>
            <button onClick={handleClickedDate} value={guestDateTomorrow}>{guestDateTomorrow}</button>
            <button onClick={handleClickedDate} value={guestDateDayAfterTomorrow}>{guestDateDayAfterTomorrow}</button>
            <div>
              {/* Lägg till värdet till input som ska skickas till föräldern */}
              <input type='date' id='date' name='date' onChange={handleClickedDateCalendar}/>
            </div>
          </div>
        </>
      );
}
