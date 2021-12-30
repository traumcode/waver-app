import React from 'react';
import Header from '../Header'
import Footer from '../Footer'

function Layout(props) {
	return (
		<div style={{ overflow: 'hidden' }}>
			<Header currentPageTitle={props.currentPageTitle}/>
				<div className="container main-container">
					<main>{props.children}</main>
				</div>
			<Footer/>
		</div>
	);
}

export default Layout;