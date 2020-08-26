import React, { useState, ChangeEvent } from 'react';

interface IGuestsProps {
  sendTheNumber(theNumber: number): void;
}

export default function Guests(props: IGuestsProps) {
  const [selectedOption, setSelectedOption] = useState(0);

  function handleOptions(e: ChangeEvent<HTMLInputElement>) {
    setSelectedOption(Number(e.target.value));
  }

  function sendToParent() {
    props.sendTheNumber(selectedOption);
  }

  return (
    <>
      <p>Guests works</p>
      <div>
        <label>
          1
          <input
            type='radio'
            name='guests'
            value='1'
            onChange={handleOptions}
          />
        </label>
        <label>
          2
          <input
            type='radio'
            name='guests'
            value='2'
            onChange={handleOptions}
          />
        </label>
        <label>
          3
          <input
            type='radio'
            name='guests'
            value='3'
            onChange={handleOptions}
          />
        </label>
        <label>
          4
          <input
            type='radio'
            name='guests'
            value='4'
            onChange={handleOptions}
          />
        </label>
      </div>
      <button type='button' onClick={sendToParent}>
        Skicka
      </button>
    </>
  );
}
