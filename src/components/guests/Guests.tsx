import React, { useState, ChangeEvent } from 'react';

export default function Guests() {
	const [selectedOption, setSelectedOption] = useState('');

	function handleOptions(e: ChangeEvent<HTMLInputElement>) {
		setSelectedOption(e.target.value);
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
			<p>{selectedOption}</p>
		</>
	);
}
