import React, { useEffect, useState } from 'react';
import { Link, useHistory, useLocation } from 'react-router-dom'
import { Pulse } from "./svgs/svgs";

function Header(props) {
	const [ currentPageTitle, setCurrentPageTitle ] = useState("");
	const [ user, setUser ] = useState(JSON.parse(localStorage.getItem('profile')));

	const history = useHistory();
	const location = useLocation();


	useEffect(() => {
		window.location.pathname === "/home" ? setCurrentPageTitle("waver~") : setCurrentPageTitle(window.location.pathname.replace("/", ""))
		return () => console.log("Cleared")
	}, [ window.location.pathname, currentPageTitle ])



	return (
		<header>
			<nav className="navbar">
				<div className="navbar-title-logo">
					<Pulse/>
					<h1 className="navbar-title">{currentPageTitle}</h1>
				</div>
				{!user ? (
					<ul className="navbar-nav-up-s">
						<Link className="navbar-link" to="/login">
							<li className="nav-item-s login-button"><i className="bi bi-box-arrow-in-right login-symbol" style={{ margin: "10px" }}/>log in
							</li>
						</Link>
						<Link className="navbar-link" to="/register">
							<li className="nav-item-s">
								<button className='register-button'>register</button>
							</li>
						</Link>

					</ul>) : (
					<ul className="navbar-nav-up">
						<Link className="navbar-link" to={`/${user}/profile/`}>
							<li className="nav-item-s"><i className="bi bi-person-circle"/></li>
						</Link>
						<Link className="navbar-link" to={`/${user}/wishlist/`}>
							<li className="nav-item-s" style={{ fontSize: "calc(2rem + 0.4vw)" }}><i className="bi bi-soundwave"/></li>
						</Link>
						<Link className="navbar-link" to={`/${user}/cart/`}>
							<li className="nav-item-s"><i className="bi bi-bag"/></li>
						</Link>
						<Link className="navbar-link" to="/collections">
							<li className="nav-item-s" style={{ fontSize: "calc(2rem + 0.4vw)" }}><i className="bi bi-list"/></li>
						</Link>
							<div className="nav-item-s">
								{/*<button onClick={logout} className='eject-logout-button'><i className="fas fa-eject"/></button>*/}
							</div>
					</ul>
				)}
			</nav>
			<div className="container-md">
				<div className="title-container">
					<div className="title-effect1">
						<h1 className="current-page-title">WAVER</h1>
					</div>
					<div className="title-effect2">
						<h1 className="current-page-title2">WAVER</h1>
					</div>
				</div>
				<ul className="header-menu navbar-nav">
					<Link className="header-link nav-item-s" to="/home">
						<li>
							<button className="offset" style={{ border: "1px solid #3dffc6f5" }}>home</button>
						</li>
					</Link>
					<Link className="header-link nav-item-s " to="/discover">
						<li>
							<button className="slide">discover</button>
						</li>
					</Link>
					<Link className="header-link nav-item-s" to="/collections">
						<li>
							<button className="close">collections</button>
						</li>
					</Link>
					<Link className="header-link nav-item-s" to="/manifest">
						<li>
							<button className="slide">manifest</button>
						</li>
					</Link>
					<Link className="header-link nav-item-s" to="/magazine">
						<li>
							<button className="close">magazine</button>
						</li>
					</Link>
					<Link className="header-link nav-item-s" to="/magazine">
						<li>
							<button className="fill">magazine</button>
						</li>
					</Link>
				</ul>
			</div>
			<div className="red-bar"/>
		</header>
	);
}

export default Header;