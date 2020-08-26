import React from 'react'

export default function DateComponent() {
    function todayDate() {
        let date = new Date().getDate();
        console.log(date)

        return date;
      }
      return (
        <>
          <div>
            <button value={todayDate()}>Idag</button>
            <button>Imorgon</button>
            <button>Dagen efter imorgon haha</button>
            <div>
              <input type='date' id='date' name='date' />
            </div>
          </div>
        </>
      );
}
