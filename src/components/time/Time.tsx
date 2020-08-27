import React, { useState, useEffect } from 'react';

interface ITimeProps {
	sendTime(time: number): void;
}

export default function Time(props: ITimeProps) {
	const [theTime, setTheTime] = useState(0);

	useEffect(() => {
		sendToParent();
	}, [theTime]);

	function handleClick(e: React.MouseEvent<HTMLButtonElement>) {
		setTheTime(Number(e.currentTarget.value));
	}

	function sendToParent() {
		props.sendTime(theTime);
	}

	return (
		<div>
			<button name='hej' value='18' onClick={handleClick} type='button'>
				18:00
			</button>
			<button name='hej' value='21' onClick={handleClick} type='button'>
				21:00
			</button>
		</div>
	);
}
