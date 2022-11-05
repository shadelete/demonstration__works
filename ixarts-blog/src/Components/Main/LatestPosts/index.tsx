import React from 'react';

const LatestPosts = () => {
	return (
		<section>
			<div className="container max-w-[1150px] mx-auto px-4">
				<div className="flex flex-col gap-10">

					<div className="flex flex-row items-center justify-between">
						<h1 className="text-[2.5rem] font-bold">Latest <span className="linear">Posts</span></h1>
						<div className="flex flex-row items-center gap-2">
							<span className="hidden md:block">View all posts</span>
							<img className="cursor-pointer" src={process.env.PUBLIC_URL + 'assets/img/arrow.svg'} alt=""/>
						</div>
					</div>

					<div className="flex flex-col gap-10 md:grid md:grid-cols-3">

						<div className="bg-[#1E293B] rounded-2xl overflow-hidden">
							<img src={process.env.PUBLIC_URL + 'assets/img/posts/1.jpg'} alt=""/>
							<div className="p-4 text-center flex flex-col gap-2">
								<h4 className="text-[#F8FAFC] text-[1.7rem] font-bold">Lorem ipsum dolor</h4>
								<span className="text-gray-400 mb-5">April 24, 2022 - 5 min read</span>
								<p>
									Nunc non posuere consectetur, justo erat semper enim, non hendrerit dui odio id enim.
								</p>
							</div>
						</div>

						<div className="bg-[#1E293B] rounded-2xl overflow-hidden">
							<img src={process.env.PUBLIC_URL + 'assets/img/posts/2.jpg'} alt=""/>
							<div className="p-4 text-center flex flex-col gap-2">
								<h4 className="text-[#F8FAFC] text-[1.7rem] font-bold">Lorem ipsum dolor</h4>
								<span className="text-gray-400 mb-5">April 24, 2022 - 5 min read</span>
								<p>
									Nunc non posuere consectetur, justo erat semper enim, non hendrerit dui odio id enim.
								</p>
							</div>
						</div>

						<div className="bg-[#1E293B] rounded-2xl overflow-hidden">
							<img src={process.env.PUBLIC_URL + 'assets/img/posts/3.jpg'} alt=""/>
							<div className="p-4 text-center flex flex-col gap-2">
								<h4 className="text-[#F8FAFC] text-[1.7rem] font-bold">Lorem ipsum dolor</h4>
								<span className="text-gray-400 mb-5">April 24, 2022 - 5 min read</span>
								<p>
									Nunc non posuere consectetur, justo erat semper enim, non hendrerit dui odio id enim.
								</p>
							</div>
						</div>

					</div>



				</div>
			</div>
		</section>
	);
};

export default LatestPosts;
