import React from 'react';

interface ITimeProps {
	sendTime(time: number): void;
}

export default function Time(props: ITimeProps) {
	function handleClick(e: React.MouseEvent<HTMLButtonElement>) {
		sendToParent(Number(e.currentTarget.value));
	}

	function sendToParent(number: number) {
		props.sendTime(number);
	}

	return (
		<div className='timeComponent'>
			<span>
				<button value='18' onClick={handleClick} type='button'>
					18:00
				</button>
			</span>
			<span>
				<button value='21' onClick={handleClick} type='button'>
					21:00
				</button>
			</span>
		</div>
	);
}
