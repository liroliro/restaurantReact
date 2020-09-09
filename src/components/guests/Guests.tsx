import React from 'react';
import './Guest.scss';

interface IGuestsProps {
	sendTheNumber(theNumber: number): void;
}

export default function Guests(props: IGuestsProps) {
	function handleOptions(e: React.MouseEvent<HTMLButtonElement>) {
		e.currentTarget.className = 'guest-btn-style';
		sendToParent(Number(e.currentTarget.value));
	}

	function sendToParent(number: number) {
		props.sendTheNumber(number);
	}

	return (
		<div className='horizontal-scroll-wrapper'>
			<div>
				<button value='1' onClick={handleOptions} type='button' className='unclicked-guest'>
					1
				</button>
			</div>
			<div>
				<button value='2' onClick={handleOptions} type='button' className='unclicked-guest'>
					2
				</button>
			</div>
			<div>
				<button value='3' onClick={handleOptions} type='button' className='unclicked-guest'>
					3
				</button>
			</div>
			<div>
				<button value='4' onClick={handleOptions} type='button' className='unclicked-guest'>
					4
				</button>
			</div>

			<div>
				<button value='5' onClick={handleOptions} type='button' className='unclicked-guest'>
					5
				</button>
			</div>

			<div>
				<button value='6' onClick={handleOptions} type='button' className='unclicked-guest'>
					6
				</button>
			</div>

			<div>
				<button value='7' onClick={handleOptions} type='button' className='unclicked-guest'>
					7
				</button>
			</div>

			<div>
				<button value='8' onClick={handleOptions} type='button' className='unclicked-guest'>
					8
				</button>
			</div>

			<div>
				<button value='9' onClick={handleOptions} type='button' className='unclicked-guest'>
					9
				</button>
			</div>

			<div>
				<button value='10' onClick={handleOptions} type='button' className='unclicked-guest'>
					10
				</button>
			</div>

			<div>
				<button value='11' onClick={handleOptions} type='button' className='unclicked-guest'>
					11
				</button>
			</div>

			<div>
				<button value='12' onClick={handleOptions} type='button' className='unclicked-guest'>
					12
				</button>
			</div>

			<div className='paddles'>
				<button className='left-paddle' type='button' value='<'></button>
				<button className='right-paddle' type='button' value='>'>
					12
				</button>
				{/* <a className='prev' onClick={this.scroll.bind(null, -1)}>
					&#10094;
				</a> */}
			</div>
		</div>
	);
}
