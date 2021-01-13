import React, { Component } from 'react';

import { withRouter } from 'react-router-dom';

import './login.styles.scss';

import CustomInput from '../custom-input/custom-input.component';
import CustomButton from '../custom-button/custom-button.component';

class LogIn extends Component {
	constructor() {
		super();

		this.state = {
			name: '',
			password: '',
			error: null
		}
	};

	onInputChange = event => {
		this.setState({ [event.target.name]: event.target.value })
	}

	handleSubmit = event => {
		event.preventDefault();

		const { name, password } = this.state;

		const storedName = localStorage.getItem('name');
		const storedPassword = localStorage.getItem('password');

		if (name !== storedName || password !== storedPassword) {
			this.setState({ error: 'Invalid credentials' });
			return;
		}

		localStorage.setItem('authenticated', true);

		this.props.history.push('/');
	}

	render() {
		const { name, password, error } = this.state;

		return (
			<div className='login-container'>
				{
					error ?
						<div className='error-message'>{error}</div> :
						null
				}

				<h2 className='title'>Log in</h2>

				<form className='signin-form' onSubmit={this.handleSubmit}>
					<CustomInput
						type='text'
						name='name'
						value={name}
						label='Name'
						onChange={this.onInputChange}
						required
					/>

					<CustomInput
						type='password'
						name='password'
						value={password}
						label='Password'
						onChange={this.onInputChange}
						required
					/>

					<CustomButton type='submit'>LOG IN</CustomButton>
				</form>
			</div>
		)
	}
};

export default withRouter(LogIn);