import React, { useState } from 'react';

interface ITimeProps {
  sendTime(time: number): void;
}

export default function Time(props: ITimeProps) {
  const [theTime, setTheTime] = useState(0);

  function handleClick(e: React.MouseEvent<HTMLButtonElement>) {
    setTheTime(Number(e.currentTarget.value));
    sendToParent();
  }

  function sendToParent() {
    props.sendTime(theTime);
  }

  return (
    <div>
      <button name='hej' value='18' onClick={handleClick}>
        18:00
      </button>
      <button name='hej' value='21' onClick={handleClick}>
        21:00
      </button>
    </div>
  );
}
