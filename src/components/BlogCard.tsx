const BlogCard = ({ image, category, title, excerpt }) => {
	return (
		<article className="group flex flex-col h-full bg-transparent">
			<div className="aspect-[3/2] w-full overflow-hidden rounded-xl bg-gray-100 dark:bg-[#2A2622] relative mb-6">
				<img
					src={image}
					alt={title}
					className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
				/>
			</div>

			<div className="flex flex-col flex-grow">
				<div className="flex items-center gap-2 mb-3 text-xs font-medium uppercase tracking-widest text-[#6B665E]/60 dark:text-[#9C968E]/60">
					{category}
				</div>

				<h3 className="text-2xl font-medium text-[#3A3530] dark:text-white mb-3 leading-snug group-hover:text-[#D95D39] transition-colors font-serif">
					{title}
				</h3>

				<p className="text-sm text-[#6B665E] dark:text-[#9C968E] leading-relaxed line-clamp-2">
					{excerpt}
				</p>
			</div>
		</article>
	);
};
export default BlogCard;
