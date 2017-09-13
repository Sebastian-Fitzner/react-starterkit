import * as React from 'react';
import { Route } from 'react-router';
import { Link } from 'react-router-dom';
import SocialMedia from '../components/social-media';
import './layout-default.scss';

const logo = require('./../assets/logo.svg');

class LayoutDefault extends React.Component {
	props: any;

	constructor(props: any) {
		super();

		this.props = props;

	}

	render() {
		return (
			<div className='page-wrapper'>
				<div className='r-header'>
					<img src={logo} className='c-logo' alt='logo'/>
					<h2>Welcome to React</h2>
				</div>
				<div className='c-navigation'>
					<Link to='/'>Home</Link>
				</div>
				<main className='r-main'>
					{this.props.children}
				</main>
				<footer>
					<Route path='/home' component={SocialMedia}/>
				</footer>
			</div>
		);
	}
}

export default LayoutDefault;
