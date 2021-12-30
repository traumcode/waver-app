import React, { useState } from 'react';

function Profile(props) {

	console.log(props)
	return (
		<div>
			<h1>sdsad</h1>
			<h1>sdsadf</h1>
			{props.match.params.username}
		</div>
	);
}

export default Profile;