import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { compileMDX } from "next-mdx-remote/rsc";
import fs from "fs";
import path from "path";
import BlogPost from "@/components/BlogPost";
import {
	Tooltip,
	CodeBlock,
	Quote,
	KeyTakeaway,
} from "@/components/MDXComponents";

/* -------------------------------------------------------------------------- */
/*                                   METADATA                                 */
/* -------------------------------------------------------------------------- */
export async function generateMetadata({
	params,
}: {
	params: Promise<{ slug: string }>;
}): Promise<Metadata> {
	const { slug } = await params;
	const { meta } = await import("@/data/meta");

	if (meta.slug !== slug) return {};

	const title = `${meta.title.main} — ${meta.title.accent}`;

	return {
		metadataBase: new URL(
			process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000",
		),
		title,
		description: meta.excerpt,
		openGraph: {
			type: "article",
			title,
			description: meta.excerpt,
			url: `/blog/${meta.slug}`,
			images: [
				{
					url: meta.ogImage,
					width: 1200,
					height: 630,
					alt: title,
				},
			],
		},
		twitter: {
			card: "summary_large_image",
			title,
			description: meta.excerpt,
			images: [meta.ogImage],
			creator: meta.author.handle,
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
	const { meta } = await import("@/data/meta");

	if (meta.slug !== slug) {
		notFound();
	}

	// Read MDX file from filesystem
	const mdxPath = path.join(process.cwd(), "src/data/content.mdx");
	const source = fs.readFileSync(mdxPath, "utf8");

	// Compile MDX with custom components
	const { content } = await compileMDX({
		source,
		components: {
			Tooltip,
			CodeBlock,
			Quote,
			KeyTakeaway,
		},
		options: {
			parseFrontmatter: false,
		},
	});

	return (
		<div className="bg-[#F9F8F4] dark:bg-[#141311] text-[#221F1D] dark:text-[#EEECE5] min-h-screen antialiased">
			<BlogPost post={meta}>{content}</BlogPost>
		</div>
	);
}
