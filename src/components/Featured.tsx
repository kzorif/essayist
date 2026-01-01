import React, { useState } from "react";
import { Search, Moon, Sun, Menu, X, ArrowRight, Mail } from "lucide-react";
const Featured = () => {
	return (
		<div className="mb-24">
			<div className="flex items-baseline justify-between mb-8 border-b border-[#E6E1D8] dark:border-[#332F2A] pb-4">
				<h3 className="text-3xl font-normal text-[#3A3530] dark:text-white font-serif">
					Featured
				</h3>
				<a
					href="#"
					className="text-sm font-medium text-[#6B665E] hover:text-[#3A3530] transition-colors"
				>
					View Archive
				</a>
			</div>

			<article className="group relative grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
				<div className="aspect-[4/3] w-full overflow-hidden rounded-2xl bg-gray-100 dark:bg-[#2A2622]">
					<img
						src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&q=80"
						alt="React code on a monitor screen"
						className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
					/>
				</div>

				<div className="flex flex-col justify-center py-4">
					<div className="flex items-center gap-3 mb-4 text-xs font-medium uppercase tracking-widest text-[#6B665E] dark:text-[#9C968E]">
						<span>Frontend</span>
						<span>•</span>
						<span>Oct 24, 2023</span>
					</div>

					<h2 className="text-3xl md:text-4xl font-medium text-[#3A3530] dark:text-white mb-6 leading-tight group-hover:text-[#D95D39] transition-colors font-serif">
						Understanding React Server Components in 2024
					</h2>

					<p className="text-[#6B665E] dark:text-[#9C968E] mb-8 leading-relaxed font-light text-lg">
						A deep dive into how RSCs are changing the way we build web
						applications, moving logic to the server while keeping interactions
						on the client.
					</p>

					<div className="flex items-center justify-between">
						<a
							href="#"
							className="inline-flex items-center gap-2 text-[#3A3530] dark:text-white font-medium hover:opacity-70 transition-opacity group"
						>
							Read Story{" "}
							<ArrowRight
								size={18}
								className="transition-transform group-hover:translate-x-1"
							/>
						</a>
					</div>
				</div>
			</article>
		</div>
	);
};
export default Featured;
