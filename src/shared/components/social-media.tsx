import * as React from 'react';

class SocialMedia extends React.Component {
	props: any;

	constructor(props: any) {
		super();

		this.props = props;

	}

	render() {
		return (
			<div className='page-wrapper'>
				<h1>Social Media</h1>
			</div>
		);
	}
}

export default SocialMedia;
