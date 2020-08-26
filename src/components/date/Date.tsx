import React from 'react';
// let dateControl = document.querySelector('input[type="date"]');
// dateControl.value = '2017-06-01';

export default function Date() {
  function todayDate(): void {
    var date = Date().getDate();
  }
  return (
    <>
      <div>
        <button value={Date}>Idag</button>
        <button>Imorgon</button>
        <button>Dagen efter imorgon haha</button>
        <div>
          <input type='date' id='date' name='date' />
        </div>
      </div>
    </>
  );
}
