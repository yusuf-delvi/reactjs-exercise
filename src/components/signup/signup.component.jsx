import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';

import './signup.styles.scss';

import CustomInput from '../custom-input/custom-input.component';
import CustomButton from '../custom-button/custom-button.component';

class SignUp extends Component {
	constructor() {
		super();

		this.state = {
			name: '',
			email: '',
			phone: '',
			password: '',
			profession: ''
		}
	};

	onInputChange = event => {
		this.setState({ [event.target.name]: event.target.value})
	}

	handleSubmit = event => {
		event.preventDefault();

		const { name, password } = this.state;

		localStorage.setItem('name', name);
		localStorage.setItem('password', password);

		this.props.history.push('/login');
	}

	render() {
		const { name, email, phone, password, profession } = this.state;

		return (
			<div className='signup-container'>
				<h2 className='title'>Sign up</h2>
				
				<form className='signup-form' onSubmit={this.handleSubmit}>
					<CustomInput
						type='text'
						name='name'
						value={name}
						label='Name'
						onChange={this.onInputChange}
						required
					/>

					<CustomInput
						type='email'
						name='email'
						value={email}
						label='Email'
						onChange={this.onInputChange}
						required
					/>

					<CustomInput
						type='tel'
						name='phone'
						value={phone}
						label='Phone Number'
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

					<div className='input-container'>
						<label htmlFor="profession" className='input-label'>Profession</label>
						<select 
							name="profession" 
							onChange={this.onInputChange}
							value={profession}
							id="profession" 
							required
						>
							<option value="">Select your profession</option>
							<option value="business">Business</option>
							<option value="self-employed">Self-employed</option>
							<option value="job">Corporate Job</option>
						</select>
					</div>

					<CustomButton type='submit'>SIGN UP</CustomButton>

					<Link to='/login' style={{ marginTop: '20px', display: 'block' }}>
						Already have an account
					</Link>
				</form>
			</div>
		)
	}
};

export default withRouter(SignUp);