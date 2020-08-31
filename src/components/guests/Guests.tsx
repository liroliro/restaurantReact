import React, { useState, useEffect } from 'react';

interface IGuestsProps {
	sendTheNumber(theNumber: number): void;
}

export default function Guests(props: IGuestsProps) {
	const [selectedOption, setSelectedOption] = useState(0);

	useEffect(() => {
		sendToParent();
	}, [selectedOption]);

	function handleOptions(e: React.MouseEvent<HTMLButtonElement>) {
		setSelectedOption(Number(e.currentTarget.value));
	}

	function sendToParent() {
		props.sendTheNumber(selectedOption);
	}

	return (
		<div>
			<button value='1' onClick={handleOptions} type='button'>
				1
			</button>
			<button value='2' onClick={handleOptions} type='button'>
				2
			</button>
			<button value='3' onClick={handleOptions} type='button'>
				3
			</button>
			<button value='4' onClick={handleOptions} type='button'>
				4
			</button>
			<button value='5' onClick={handleOptions} type='button'>
				5
			</button>
			<button value='6' onClick={handleOptions} type='button'>
				6
			</button>
			<button value='7' onClick={handleOptions} type='button'>
				7
			</button>
			<button value='8' onClick={handleOptions} type='button'>
				8
			</button>
			<button value='9' onClick={handleOptions} type='button'>
				9
			</button>
			<button value='10' onClick={handleOptions} type='button'>
				10
			</button>
			<button value='11' onClick={handleOptions} type='button'>
				11
			</button>
			<button value='12' onClick={handleOptions} type='button'>
				12
			</button>
		</div>
	);
}
