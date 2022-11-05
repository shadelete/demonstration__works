import React from 'react';

const ProjectRecent = () => {
	return (
		<section>
			<div className="container max-w-[1150px] mx-auto px-4">
				<div className="flex flex-col gap-10">
					<h1 className="text-[2.5rem] font-bold">Recent <span className="linear">Projects</span></h1>
					<div className="bg-[#151E31] p-4 rounded-xl flex flex-col items-center gap-5 md:grid md:grid-cols-[1fr_4fr]">
						<img className="max-w-[35%] md:max-w-[100%] md:mx-auto p-1 md:p-4" src={process.env.PUBLIC_URL + 'assets/img/projectsicons/1.png'} alt=""/>
						<div className="flex flex-col gap-2 items-center md:items-start">
							<div className="flex flex-row gap-2 items-center">
								<h4 className="text-white text-xl font-medium">Project 1</h4>
								<span className="p-4 bg-[#00FF40] text-white font-medium rounded-3xl">Web Design</span>
							</div>
							<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse bibendum.
								Nunc non posuere consectetur, justo erat semper enim, non hendrerit dui odio id enim.
							</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default ProjectRecent;
