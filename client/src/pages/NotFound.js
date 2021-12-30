import { Link } from 'react-router-dom';

const NotFound = () => {
	return (
		<div className="not-found">
			<h1>Sorry</h1>
			<h2>This page doesn't exist</h2>
			<Link to='/'>
				Back to the homepage..
			</Link>
		</div>
	)
}

export default NotFound;