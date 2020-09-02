import React, { useState, useEffect } from 'react';

interface ITimeProps {
	sendTime(time: number): void;
}

export default function Time(props: ITimeProps) {
	const [theTime, setTheTime] = useState(0);
	const [btnState, setBtnState] = useState(false);

	useEffect(() => {
		sendToParent();
	}, [theTime]);

	function handleClick(e: React.MouseEvent<HTMLButtonElement>) {
		setTheTime(Number(e.currentTarget.value));
		setBtnState(!btnState);
	}

	function sendToParent() {
		props.sendTime(theTime);
	}

	let btn_class = btnState ? 'clickedButton' : 'unclickedButton';

	return (
		<div>
			<button
				value='18'
				onClick={handleClick}
				type='button'
				className={btn_class}
			>
				18:00
			</button>
			<button
				value='21'
				onClick={handleClick}
				type='button'
				className={btn_class}
			>
				21:00
			</button>
		</div>
	);
}
