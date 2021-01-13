import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

import './home-page.styles.scss';

class HomePage extends Component {
	constructor(props) {
		super(props);

		this.state = {
			posts: []
		}
	}

	componentDidMount() {
		fetch('https://jsonplaceholder.typicode.com/posts')
			.then(res => res.json())
			.then(data => {
				this.setState({ posts: data.slice(0, 10) });
			});
	}

	render() {
		const isAuthenticated = localStorage.getItem('authenticated');
		const { posts } = this.state;

		const Posts = posts.map(({ id, title, body }) => (
			<div key={id} className='post'>
				<h2 className='post-title'>{title}</h2>
				<p className='post-body'>{body}</p>
			</div>
		))

		if (!isAuthenticated) {
			return (<Redirect to='/signup' />)
		} else {
			return (
				<div className='posts-container'>
					{
						(posts.length < 1) ?
						<div className='loading-message'>Loading...</div> :
						(Posts)
					}
				</div>
			)
		}
		
	}
};

export default HomePage;