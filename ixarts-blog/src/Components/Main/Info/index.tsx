import React from 'react';
import './index.scss'

const Info = () => {

	return (
		<section className="info">
			<div className="container max-w-[1150px] mx-auto px-4">
				<div className="flex flex-col lg:flex-row items-center justify-center gap-5 lg:grid lg:grid-cols-[2fr_1fr]">
					<div className="order-2 lg:order-1 flex flex-col gap-5 items-center lg:items-start">
						<h1 className="text-[2rem] font-bold">Hi there, I’m <span className="linear">Ixartz</span> 👋</h1>
						<p className="text-[1.2rem] text-center lg:text-start font-md">
							Lorem ipsum dolor sit amet, consectetur adipiscing elit.
							Phasellus malesuada nisi tellus, non imperdiet nisi tempor at.
							Lorem ipsum dolor sit amet, <span className="linear">consectetur</span> adipiscing elit,
							sed do eiusmod tempor incididunt ut labore et <span className="linear">dolore</span>.
						</p>
						<ul className="flex flex-row justify-around md:justify-start gap-2.5">
							<li><img src={process.env.PUBLIC_URL + 'assets/img/brands/Twitter.svg'} alt=""/></li>
							<li><img src={process.env.PUBLIC_URL + 'assets/img/brands/facebook.svg'} alt=""/></li>
							<li><img src={process.env.PUBLIC_URL + 'assets/img/brands/linkedin.svg'} alt=""/></li>
							<li><img src={process.env.PUBLIC_URL + 'assets/img/brands/Youtube.svg'} alt=""/></li>
						</ul>
					</div>
					<div className="order-1 lg:order-2">
						<img src={process.env.PUBLIC_URL + 'assets/img/Man.png'} alt=""/>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Info;
