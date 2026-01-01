const Hero = () => {
	return (
		<section className="mb-24">
			<div className="relative overflow-hidden rounded-3xl bg-[#F4F0EA] dark:bg-[#2A2622]">
				<div className="flex flex-col md:flex-row min-h-[500px]">
					<div className="flex-1 p-10 md:p-16 flex flex-col justify-center gap-8 z-10">
						<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/50 dark:bg-white/5 w-fit border border-[#E6E1D8] dark:border-[#332F2A] backdrop-blur-sm">
							<span className="h-1.5 w-1.5 rounded-full bg-[#D95D39]"></span>
							<span className="text-xs font-medium text-[#2D2A26] dark:text-white uppercase tracking-widest">
								New Issue
							</span>
						</div>

						<h2 className="text-5xl md:text-7xl font-light leading-[1] tracking-tight text-[#3A3530] dark:text-white font-serif">
							The art of <br />
							<span className="italic font-light text-[#D95D39]">
								digital crafting.
							</span>
						</h2>

						<p className="text-lg md:text-xl text-[#6B665E] dark:text-[#9C968E] max-w-lg leading-relaxed font-light">
							Exploring the intersection of logic and aesthetics in modern web
							development.
						</p>

						<div className="flex items-center gap-4 mt-2">
							<a
								href="#"
								className="inline-flex items-center justify-center px-8 py-3 bg-[#3A3530] text-[#FDFBF7] dark:bg-white dark:text-[#1C1A17] font-medium rounded-full hover:opacity-90 transition-all duration-300"
							>
								Start Reading
							</a>
							<span className="text-sm text-[#6B665E] dark:text-[#9C968E]">
								or browse topics ↓
							</span>
						</div>
					</div>

					<div className="md:w-1/2 min-h-[300px] md:min-h-full relative overflow-hidden">
						<div
							className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 hover:scale-105"
							style={{
								backgroundImage:
									'url("https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=800&q=80")',
							}}
						></div>
						<div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-l from-[#F4F0EA]/80 via-transparent to-transparent dark:from-[#2A2622] dark:to-transparent"></div>
					</div>
				</div>
			</div>
		</section>
	);
};
export default Hero;
