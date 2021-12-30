import React, { useState } from 'react';

function SearchBar(props) {
	const [ input, setInput ] = useState("");
	return (
		<div className="searchBox1">
			<form onSubmit={e => {e.preventDefault()}} name="search">
				<input
					value={input}
					type="text"
					className="searchInput1"
					name="txt"
					onInput={(e) => setInput(e.target.value)}
					onMouseOut={() => setInput("")}
					onKeyPress={props.handleSearch}
					placeholder="Please tell me an artist or a release"
				/>
			</form>
			<i className="fas fa-search search-bar"/>
		</div>
	);
}

export default SearchBar;