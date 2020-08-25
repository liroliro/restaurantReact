import React from 'react';

import Date from '../date/Date';
import Time from '../time/Time';
import Guests from '../guests/Guests';

export default function Home() {
	return (
		<form method='POST' action='http://localhost:8000/bookings'>
			<div>
				<div>
					<Date />
				</div>
				<div>
					<Time />
				</div>
				<div>
					<Guests />
				</div>
				<button formMethod='POST'>Skicka</button>
			</div>
		</form>
	);
}
