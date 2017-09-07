import * as React from 'react';

class Home extends React.Component {
	props: any;

	constructor(props: any) {
		super();

		this.props = props;

	}

	render() {
		return (
			<div className="page-wrapper">
				<h1>Home Component</h1>
			</div>
		);
	}
}

export default Home;
