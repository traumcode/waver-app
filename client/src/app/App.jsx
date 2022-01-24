import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import React, { useEffect, useState } from "react";
import Layout from "../components/ui/Layout.js";
import Home from "../pages/Home";
import Discover from "../pages/Discover";
import './App.scss'
import NotFound from "../pages/NotFound";
import ArtistDetails from "../pages/ArtistDetails";
import Profile from "../pages/Profile";


function App() {
	const [ currentPageTitle ] = useState("WAVr~");

	return (
			<Router>
				<Switch>
					{/*<Route exact path="/login" component={LoginPage}/>*/}
					{/*<Route exact path="/register" component={RegisterPage}/>*/}
					<Layout currentPageTitle={currentPageTitle}>
						<Switch>
							<Route exact path={[ "/home", "/" ]} component={Home}/>
							<Route exact path="/discover" component={Discover}/>
							<Route exact path="/artist/:artistName" component={ArtistDetails}/>
							<Route exact path="/:username/profile/" component={Profile}/>

							<Route component={NotFound}/>
						</Switch>
					</Layout>
				</Switch>
			</Router>
	);
}

export default App;
