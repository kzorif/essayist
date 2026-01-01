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
		<main className="max-w-[1000px] mx-auto pt-32 pb-20 px-6">
			<article>
				{/* Header */}
				<header className="text-center mb-20">
					<h1 className="text-6xl md:text-8xl font-serif mb-8">
						{post.title.main}
						<span className="block opacity-60 mt-2">{post.title.accent}</span>
					</h1>

					<p className="text-xl opacity-60 mb-8">{post.subtitle}</p>

					{/* Metadata */}
					<div className="flex justify-center items-center gap-4 text-sm opacity-60">
						<time dateTime={post.publishedAt}>
							{new Date(post.publishedAt).toLocaleDateString("en-US", {
								year: "numeric",
								month: "long",
								day: "numeric",
							})}
						</time>
						<span>·</span>
						<span>{post.readingTime}</span>
					</div>
				</header>

				{/* Hero Image */}
				<div className="relative w-full aspect-[21/9] mb-24 rounded-3xl overflow-hidden">
					<Image
						src={post.heroImage}
						alt={post.heroImageAlt}
						fill
						className="object-cover"
						priority
						sizes="(max-width: 1000px) 100vw, 1000px"
					/>
				</div>

				{/* Content - MDX rendered content */}
				<div className="prose prose-lg max-w-none mx-auto prose-headings:font-serif prose-headings:text-[#221F1D] dark:prose-headings:text-[#EEECE5] prose-p:text-[#221F1D]/80 dark:prose-p:text-[#EEECE5]/80 prose-a:text-[#D2603C] prose-a:no-underline hover:prose-a:underline prose-strong:text-[#221F1D] dark:prose-strong:text-[#EEECE5] prose-code:text-[#D2603C] prose-code:bg-[#EEECE5]/50 dark:prose-code:bg-white/5 prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded prose-code:before:content-[''] prose-code:after:content-['']">
					{children}
				</div>

				{/* Footer Actions */}
				<footer className="mt-24 flex justify-between items-center border-t border-[#E6E3DB] dark:border-white/10 pt-12">
					<div className="flex gap-4">
						<button
							onClick={() => setLiked(!liked)}
							aria-label={liked ? "Unlike post" : "Like post"}
							className="p-2 hover:opacity-60 transition-opacity rounded-lg hover:bg-[#EEECE5]/50 dark:hover:bg-white/5"
						>
							<Heart
								size={24}
								className={
									liked ? "fill-[#D2603C] text-[#D2603C]" : "text-current"
								}
							/>
						</button>

						<button
							onClick={handleShare}
							aria-label="Share post"
							className="p-2 hover:opacity-60 transition-opacity rounded-lg hover:bg-[#EEECE5]/50 dark:hover:bg-white/5"
						>
							<Share2 size={24} />
						</button>
					</div>
				</footer>

				<ShareModal
					open={showShare}
					onClose={() => setShowShare(false)}
					post={post}
				/>
			</article>
		</main>
	);
};

export default BlogPost;
