import React from 'react';

const Footer = () => {
	return (
		<footer>
			<section>
				<div className="container max-w-[1150px] mx-auto px-4">
					<div className="flex flex-col items-center justify-start gap-5 md:grid md:grid-cols-2 lg:grid-cols-[3fr_1fr]">
						<p className="text-[1rem] text-center lg:text-start items-center">
							© Copyright 2022 by Ixartz’s blog.
							Built with <span className="text-[red]">♥</span> by <span className="linear">Shadetele</span>
						</p>
						<ul className="flex flex-row justify-around items-center gap-5">
							<a href="#"><img src={process.env.PUBLIC_URL + 'assets/img/icons/github.svg'} alt=""/></a>
							<a href="#"><img src={process.env.PUBLIC_URL + 'assets/img/icons/facebook.svg'} alt=""/></a>
							<a href="#"><img src={process.env.PUBLIC_URL + 'assets/img/icons/linkedin.svg'} alt=""/></a>
							<a href="#"><img src={process.env.PUBLIC_URL + 'assets/img/icons/twitter.svg'} alt=""/></a>
						</ul>
					</div>
				</div>
			</section>
		</footer>
	);
};

export default Footer;
