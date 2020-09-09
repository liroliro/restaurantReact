import React, { useState, ChangeEvent } from 'react';
import './Guests.scss';

interface IGuestsProps {
	sendTheNumber(theNumber: number): void;
}

export default function Guests(props: IGuestsProps) {
	const [showLastSix, setShowLastSix] = useState(false);
	const [hideButton, setHideButton] = useState(true);

	function handleOptions(e: React.MouseEvent<HTMLButtonElement>) {
		e.currentTarget.className = 'guest-btn-style';
		sendToParent(Number(e.currentTarget.value));
	}

	function sendToParent(number: number) {
		props.sendTheNumber(number);
	}

	function handleShowLastSix() {
		setShowLastSix(true);
		setHideButton(false);
	}

	return (
		<React.Fragment>
			<div className='guestsConstainer'>
<<<<<<< HEAD
				<div className="firstSix">

					<div className="buttonContainer">
						<button value='1' onClick={handleOptions} type='button' className='unclicked-guest'>
=======
				<div className='firstSix'>
					<div className='buttonContainer'>
						<button value='1' onClick={handleOptions} type='button'>
>>>>>>> d2108e340a3ddb46dc635944922c8edca192d191
							1
						</button>
					</div>
<<<<<<< HEAD
					<div className="buttonContainer">
						<button value='2' onClick={handleOptions} type='button' className='unclicked-guest'>
=======
					<div className='buttonContainer'>
						<button value='2' onClick={handleOptions} type='button'>
>>>>>>> d2108e340a3ddb46dc635944922c8edca192d191
							2
						</button>
					</div>
<<<<<<< HEAD
					<div className="buttonContainer">
						<button value='3' onClick={handleOptions} type='button' className='unclicked-guest'>
=======
					<div className='buttonContainer'>
						<button value='3' onClick={handleOptions} type='button'>
>>>>>>> d2108e340a3ddb46dc635944922c8edca192d191
							3
						</button>
					</div>

<<<<<<< HEAD
					<div className="buttonContainer">
						<button value='4' onClick={handleOptions} type='button' className='unclicked-guest'>
=======
					<div className='buttonContainer'>
						<button value='4' onClick={handleOptions} type='button'>
>>>>>>> d2108e340a3ddb46dc635944922c8edca192d191
							4
						</button>
					</div>

<<<<<<< HEAD
					<div className="buttonContainer">
						<button value='5' onClick={handleOptions} type='button' className='unclicked-guest'>
=======
					<div className='buttonContainer'>
						<button value='5' onClick={handleOptions} type='button'>
>>>>>>> d2108e340a3ddb46dc635944922c8edca192d191
							5
						</button>
					</div>

<<<<<<< HEAD
					<div className="buttonContainer">
						<button value='6' onClick={handleOptions} type='button' className='unclicked-guest'>
=======
					<div className='buttonContainer'>
						<button value='6' onClick={handleOptions} type='button'>
>>>>>>> d2108e340a3ddb46dc635944922c8edca192d191
							6
						</button>
					</div>
					{hideButton ? (
						<div className='moreButton'>
							<button type='button' onClick={handleShowLastSix}>
								fler gäster...
							</button>
						</div>
					) : null}
				</div>
				{showLastSix ? (
<<<<<<< HEAD
					<div className="lastSix">
						<div className="buttonContainer">
							<button value='7' onClick={handleOptions} type='button' className='unclicked-guest'>
=======
					<div className='lastSix'>
						<div className='buttonContainer'>
							<button value='7' onClick={handleOptions} type='button'>
>>>>>>> d2108e340a3ddb46dc635944922c8edca192d191
								7
							</button>
						</div>

<<<<<<< HEAD
						<div className="buttonContainer">
							<button value='8' onClick={handleOptions} type='button' className='unclicked-guest'>
=======
						<div className='buttonContainer'>
							<button value='8' onClick={handleOptions} type='button'>
>>>>>>> d2108e340a3ddb46dc635944922c8edca192d191
								8
							</button>
						</div>

<<<<<<< HEAD
						<div className="buttonContainer">
							<button value='9' onClick={handleOptions} type='button' className='unclicked-guest'>
=======
						<div className='buttonContainer'>
							<button value='9' onClick={handleOptions} type='button'>
>>>>>>> d2108e340a3ddb46dc635944922c8edca192d191
								9
							</button>
						</div>

<<<<<<< HEAD
						<div className="buttonContainer">
							<button value='10' onClick={handleOptions} type='button' className='unclicked-guest'>
=======
						<div className='buttonContainer'>
							<button value='10' onClick={handleOptions} type='button'>
>>>>>>> d2108e340a3ddb46dc635944922c8edca192d191
								10
							</button>
						</div>

<<<<<<< HEAD
						<div className="buttonContainer">
							<button value='11' onClick={handleOptions} type='button' className='unclicked-guest'>
=======
						<div className='buttonContainer'>
							<button value='11' onClick={handleOptions} type='button'>
>>>>>>> d2108e340a3ddb46dc635944922c8edca192d191
								11
							</button>
						</div>

<<<<<<< HEAD
						<div className="buttonContainer">
							<button value='12' onClick={handleOptions} type='button' className='unclicked-guest'>
=======
						<div className='buttonContainer'>
							<button value='12' onClick={handleOptions} type='button'>
>>>>>>> d2108e340a3ddb46dc635944922c8edca192d191
								12
							</button>
						</div>
					</div>
				) : null}
			</div>
		</React.Fragment>
	);
}
