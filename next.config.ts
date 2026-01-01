import type { NextConfig } from "next";
import nextMDX from "@next/mdx";

const withMDX = nextMDX({
	extension: /\.(md|mdx)$/,
});

const nextConfig: NextConfig = {
	pageExtensions: ["ts", "tsx", "mdx", "md"],
	reactCompiler: true,

	images: {
		remotePatterns: [
			{
				protocol: "https",
				hostname: "images.unsplash.com",
				port: "",
				pathname: "/**",
			},
		],
	},
};

module.exports = nextConfig;

export default withMDX(nextConfig);
