import React from 'react';

import { Switch, Route } from 'react-router-dom';

import NavBar from './components/navbar/navbar.component';
import HomePage from './components/home-page/home-page.component';
import SignUp from './components/signup/signup.component';
import LogIn from './components/login/login.component';
import CompanyInfo from './components/company-info/company-info.component';

const App = () => (
	<div className="App">
		<NavBar />
		<Switch>
			<Route exact path='/'>
				<HomePage />
			</Route>
			<Route exact path='/about'>
				<CompanyInfo />
			</Route>
			<Route exact path='/signup'>
				<SignUp />
			</Route>
			<Route exact path='/login'>
				<LogIn />
			</Route>
		</Switch>
	</div>
);

export default App;
