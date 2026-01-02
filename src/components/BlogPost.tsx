"use client";
import React, { useState } from "react";
import { Heart, Share2 } from "lucide-react";
import ShareModal from "@/components/ShareModal";
import Image from "next/image";

interface PostMeta {
	slug: string;
	title: {
		main: string;
		accent: string;
	};
	subtitle: string;
	heroImage: string;
	heroImageAlt: string;
	publishedAt: string;
	readingTime: string;
	tags: Array<{ name: string; featured: boolean }>;
	categories: string[];
}

interface BlogPostProps {
	post: PostMeta;
	children: React.ReactNode;
}

const BlogPost = ({ post, children }: BlogPostProps) => {
	const [liked, setLiked] = useState(false);
	const [showShare, setShowShare] = useState(false);

	const handleShare = async () => {
		try {
			if (navigator.share) {
				await navigator.share({
					title: `${post.title.main} — ${post.title.accent}`,
					text: post.subtitle,
					url: window.location.href,
				});
			} else {
				setShowShare(true);
			}
		} catch (error: any) {
			if (error.name !== "AbortError") {
				console.error("Share failed:", error);
				setShowShare(true);
			}
		}
	};

	return (
		<main className="flex-1 w-full max-w-[1000px] mx-auto pt-32 pb-20 px-6 lg:px-10">
			<article className="flex flex-col w-full">
				{/* Tags */}
				<div className="flex flex-wrap items-center justify-center gap-3 mb-8">
					{post.tags.map((tag, index) => (
						<span
							key={index}
							className={`px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest ${tag.featured
									? "bg-[#D2603C]/10 text-[#D2603C] border border-[#D2603C]/20"
									: "bg-[#EEECE5]/60 dark:bg-white/5 text-[#221F1D]/60 dark:text-[#EEECE5]/60"
								}`}
						>
							{tag.name}
						</span>
					))}
				</div>

				{/* Title */}
				<div className="mb-16 text-center max-w-4xl mx-auto">
					<h1 className="font-serif text-6xl md:text-8xl font-normal text-[#221F1D] dark:text-[#EEECE5] leading-[0.95] tracking-tight mb-8">
						{post.title.main} <br />
						<i className="font-serif italic text-[#D2603C] font-light pr-2">
							{post.title.accent}
						</i>
					</h1>
					<p className="text-xl md:text-2xl text-[#221F1D]/60 dark:text-[#EEECE5]/60 leading-relaxed font-light max-w-2xl mx-auto">
						{post.subtitle}
					</p>
				</div>

				{/* Hero Image */}
				<div className="w-full aspect-[16/9] md:aspect-[2.4/1] rounded-3xl overflow-hidden mb-20 relative shadow-lg group">
					<div className="absolute inset-0 bg-gradient-to-t from-[#221F1D]/20 to-transparent z-10"></div>
					<Image
						src={post.heroImage}
						alt={post.heroImageAlt}
						fill
						className="object-cover transition-transform duration-[2s] group-hover:scale-105"
						priority
						sizes="(max-width: 1000px) 100vw, 1000px"
					/>
				</div>

				{/* Content */}
				<div className="prose prose-lg max-w-2xl mx-auto prose-headings:font-serif prose-headings:font-normal prose-headings:text-[#221F1D] dark:prose-headings:text-[#EEECE5] prose-p:text-[#221F1D]/80 dark:prose-p:text-[#EEECE5]/80 prose-p:leading-8 prose-p:font-normal prose-a:text-[#D2603C] prose-a:no-underline hover:prose-a:underline prose-strong:text-[#221F1D] dark:prose-strong:text-[#EEECE5] prose-code:text-[#A63D1E] dark:prose-code:text-[#D2603C] prose-code:bg-[#EEECE5] dark:prose-code:bg-white/10 prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded prose-code:text-sm prose-code:font-mono prose-code:before:content-[''] prose-code:after:content-[''] prose-h2:text-4xl prose-h2:md:text-5xl prose-h2:mt-20 prose-h2:mb-8">
					{children}
				</div>

				{/* Footer Actions */}
				<div className="mt-24 border-t border-[#E6E3DB] dark:border-white/10 pt-12 flex flex-col md:flex-row justify-between items-center gap-8 max-w-3xl mx-auto">
					<div className="flex gap-3">
						{post.categories.map((category, index) => (
							<a
								key={index}
								href="#"
								className="px-5 py-2 bg-white dark:bg-white/5 rounded-full text-xs font-bold uppercase tracking-wide text-[#221F1D]/60 dark:text-[#EEECE5]/60 border border-[#E6E3DB] dark:border-white/10 hover:border-[#D2603C] hover:text-[#D2603C] transition-all"
							>
								{category}
							</a>
						))}
					</div>
					<div className="flex items-center gap-4">
						<button
							onClick={() => setLiked(!liked)}
							className="flex items-center gap-2 text-[#221F1D]/60 hover:text-[#D2603C] transition-colors group"
						>
							<Heart
								size={24}
								className={`transition-all ${liked ? "fill-[#D2603C] text-[#D2603C]" : ""
									}`}
							/>
							<span className="text-xs font-bold uppercase tracking-widest">
								Like
							</span>
						</button>
						<button
							onClick={handleShare}
							className="flex items-center gap-2 text-[#221F1D]/60 hover:text-[#D2603C] transition-colors"
						>
							<Share2 size={24} />
							<span className="text-xs font-bold uppercase tracking-widest">
								Share
							</span>
						</button>
					</div>
				</div>
			</article>

			<ShareModal
				open={showShare}
				onClose={() => setShowShare(false)}
				post={post}
			/>
		</main>
	);
};

export default BlogPost;
