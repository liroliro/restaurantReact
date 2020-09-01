import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import './App.css';
import Home from './components/home/Home';

import axios from 'axios';
import Admin from './components/admin/Admin';
import IBooking from './interface/IBooking';
import ICustomer from './interface/ICustomer';

function App() {
	let defaultBookingValue: IBooking[] = [];
	let defaultCustomerValue: ICustomer[] = [];
	const [bookings, setBookings] = useState(defaultBookingValue);
	const [customers, setCustomer] = useState(defaultCustomerValue);

	useEffect(() => {
		axios.get('http://localhost:8000/bookings').then((res) => {
			let bookings: IBooking[] = res.data;
			setBookings(bookings);
			console.log(bookings)
		});
	}, []);

	useEffect(() => {
		axios.get('http://localhost:8000/customers').then((res) => {
			let allCustomers: ICustomer[] = res.data;
			setCustomer(allCustomers);
			console.log(allCustomers)
		});
	}, []);

	return (
		<Router>
			<div>
				<nav>
					<ul>
						<li>
							<Link to='/'>Home</Link>
						</li>
						<li>
							<Link to='/admin'>Admin</Link>
						</li>
					</ul>
				</nav>

				<Switch>
					<Route path='/admin'>
						<Admin allBookings={bookings} allCustomers={customers} />
					</Route>
					<Route exact path='/'>
						<Home allBookings={bookings} />
					</Route>
				</Switch>
			</div>
		</Router>
	);
}

export default App;
