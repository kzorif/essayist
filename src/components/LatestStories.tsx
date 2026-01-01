import React, { useState } from "react";
import { Search, Moon, Sun, Menu, X, ArrowRight, Mail } from "lucide-react";
import BlogCard from "./BlogCard";
const LatestStories = () => {
	const [visiblePosts, setVisiblePosts] = useState(6);

	const blogPosts = [
		{
			image:
				"https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&q=80",
			category: "Design",
			title: "The Art of CSS Grid: Building Complex Layouts",
			excerpt:
				"Move beyond flexbox and discover how Grid can simplify your page structure.",
		},
		{
			image:
				"https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=600&q=80",
			category: "Backend",
			title: "Optimizing Node.js Performance for Scale",
			excerpt:
				"Is your event loop blocked? Learn how to diagnose bottlenecks effectively.",
		},
		{
			image:
				"https://images.unsplash.com/photo-1516116216624-53e697fedbea?w=600&q=80",
			category: "Opinion",
			title: "Why TypeScript is Winning the Web",
			excerpt:
				"Type safety isn't just a trend; it's a necessity for large teams.",
		},
		{
			image:
				"https://images.unsplash.com/photo-1605379399642-870262d3d051?w=600&q=80",
			category: "DevOps",
			title: "Docker for Frontend Developers",
			excerpt:
				"Stop saying 'it works on my machine'. A practical guide to containers.",
		},
		{
			image:
				"https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=600&q=80",
			category: "Lifestyle",
			title: "Designing a Productive Home Office",
			excerpt: "The aesthetics of your environment affect your code and mind.",
		},
		{
			image:
				"https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=600&q=80",
			category: "Security",
			title: "Auth0 vs Custom Auth: What to Choose?",
			excerpt:
				"We compare managed authentication services against rolling your own JWT.",
		},
		{
			image:
				"https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600&q=80",
			category: "Frontend",
			title: "Next.js 14: What's New and Exciting",
			excerpt: "Server actions, improved caching, and more performance wins.",
		},
		{
			image:
				"https://images.unsplash.com/photo-1587620962725-abab7fe55159?w=600&q=80",
			category: "Design",
			title: "Animation Principles for Web Interfaces",
			excerpt: "Making your UI feel alive with thoughtful motion design.",
		},
		{
			image:
				"https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=600&q=80",
			category: "Backend",
			title: "GraphQL vs REST: Making the Right Choice",
			excerpt: "Understanding when each API pattern makes the most sense.",
		},
	];

	const loadMore = () => {
		setVisiblePosts((prev) => Math.min(prev + 3, blogPosts.length));
	};

	return (
		<>
			<div className="flex items-baseline justify-between mb-10 border-b border-[#E6E1D8] dark:border-[#332F2A] pb-4">
				<h3 className="text-3xl font-normal text-[#3A3530] dark:text-white font-serif">
					Latest Stories
				</h3>
			</div>

			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16 mb-24">
				{blogPosts.slice(0, visiblePosts).map((post, index) => (
					<BlogCard key={index} {...post} />
				))}
			</div>

			{visiblePosts < blogPosts.length && (
				<div className="flex justify-center py-8">
					<button
						onClick={loadMore}
						className="text-sm font-medium text-[#2D2A26] dark:text-white border-b border-[#2D2A26] dark:border-white pb-0.5 hover:opacity-50 transition-opacity"
					>
						Load More Stories
					</button>
				</div>
			)}
		</>
	);
};
export default LatestStories;
