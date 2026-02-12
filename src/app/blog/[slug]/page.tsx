import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { compileMDX } from "next-mdx-remote/rsc";
import {
	Tooltip,
	CodeBlock,
	Quote,
	KeyTakeaway,
	Section,
	DropCapParagraph,
	P,
	InlineCode,
} from "@/components/MDXComponents";
import fs from "fs";
import path from "path";
import BlogPost from "@/components/BlogPost";

/* -------------------------------------------------------------------------- */
/*                                   TYPES                                    */
/* -------------------------------------------------------------------------- */
type PostMeta = {
	slug: string;
	tags: Array<{
		name: string;
		featured: boolean;
	}>;
	title: {
		main: string;
		accent: string;
	};
	subtitle: string;
	excerpt: string;
	heroImage: string;
	heroImageAlt: string;
	ogImage: string;
	author: {
		name: string;
		handle: string;
	};
	publishedAt: string;
	readingTime: string;
	categories: string[];
};

/* -------------------------------------------------------------------------- */
/*                                   METADATA                                 */
/* -------------------------------------------------------------------------- */
export async function generateMetadata({
	params,
}: {
	params: Promise<{ slug: string }>;
}): Promise<Metadata> {
	const { slug } = await params;
	const mdxPath = path.join(process.cwd(), "src/data/content.mdx");
	const source = fs.readFileSync(mdxPath, "utf8");

	const { frontmatter } = await compileMDX<PostMeta>({
		source,
		options: {
			parseFrontmatter: true,
		},
	});

	if (frontmatter.slug !== slug) return {};

	const title = `${frontmatter.title.main} — ${frontmatter.title.accent}`;
	return {
		metadataBase: new URL(
			process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000",
		),
		title,
		description: frontmatter.excerpt,
		openGraph: {
			type: "article",
			title,
			description: frontmatter.excerpt,
			url: `/blog/${frontmatter.slug}`,
			images: [
				{
					url: frontmatter.ogImage,
					width: 1200,
					height: 630,
					alt: title,
				},
			],
		},
		twitter: {
			card: "summary_large_image",
			title,
			description: frontmatter.excerpt,
			images: [frontmatter.ogImage],
			creator: frontmatter.author.handle,
		},
	};
}

/* -------------------------------------------------------------------------- */
/*                                     PAGE                                   */
/* -------------------------------------------------------------------------- */
export default async function Page({
	params,
}: {
	params: Promise<{ slug: string }>;
}) {
	const { slug } = await params;
	const mdxPath = path.join(process.cwd(), "src/data/content.mdx");
	const source = fs.readFileSync(mdxPath, "utf8");

	// Compile MDX with custom components and parse frontmatter
	const { content, frontmatter } = await compileMDX<PostMeta>({
		source,
		components: {
			Tooltip,
			CodeBlock,
			Quote,
			KeyTakeaway,
			Section,
			DropCapParagraph,
			P,
			p: P, // Map default <p> to P component
			code: InlineCode, // Map inline <code> to InlineCode
			InlineCode,
		},
		options: {
			parseFrontmatter: true,
		},
	});

	if (frontmatter.slug !== slug) {
		notFound();
	}

	return (
		<div className="bg-[#F9F8F4] dark:bg-[#141311] text-[#221F1D] dark:text-[#EEECE5] min-h-screen antialiased">
			<BlogPost post={frontmatter}>{content}</BlogPost>
		</div>
	);
}
