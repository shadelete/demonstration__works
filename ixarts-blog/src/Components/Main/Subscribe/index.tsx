import React from 'react';

const Subscribe = () => {
	return (
		<section>
			<div className="container max-w-[1150px] mx-auto px-4">
				<div className="flex flex-col gap-5 lg:grid lg:grid-cols-2 lg:items-center">
					<div className="flex flex-col gap-5">
						<h1 className="text-[2.5rem] font-bold">Subscribe to my <span className="linear">Newsletters</span></h1>
						<p className="text-[0.8rem] text-[#CBD5E1] font-normal">
							Lorem ipsum dolor sit amet, consectetur adipiscing elit.
							Phasellus malesuada nisi tellus, non imperdiet nisi tempor at.
						</p>
					</div>
					<div className="grid grid-cols-[3fr_1fr] py-2 px-4 rounded-[1.6rem] items-center bg-[#1E293B] lg:h-fit">
						<input placeholder="Enter your Email" className="outline-none bg-[transparent] px-5 py-4 relative rounded-3xl w-full" type="text"/>
						<span className="linear-bg text-black font-medium px-4 py-2 rounded-[1rem] text-center">Subscribe</span>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Subscribe;
