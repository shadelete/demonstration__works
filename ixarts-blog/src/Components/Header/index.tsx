import React from 'react';
import './index.scss'

const Header = () => {
	return (
		<header className="header">
			<div className="container max-w-[1150px] mx-auto px-4">
				<div className="flex flex-row items-center justify-between py-2">
					<a className="inline-flex items-center" href="#">
						<img className="md:max-w-[50%]" src={process.env.PUBLIC_URL + 'assets/img/logo.svg'} alt="Logo"/>
						<h1 className="linear text-3xl font-bold invisible md:visible">Ixart's Blog</h1>
					</a>
					<nav className="flex flex-row gap-3 ">
						<a className="text-xl" href="#">Blog</a>
						<a className="text-xl" href="#">Newletter</a>
						<a className="text-xl" href="#">Twitter</a>
					</nav>
				</div>
			</div>
		</header>
	);
};

export default Header;
