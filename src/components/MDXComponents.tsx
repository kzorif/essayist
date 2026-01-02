"use client";

import React, { useState, useEffect } from "react";
import { Copy, Lightbulb } from "lucide-react";
import { codeToHtml } from "shiki";

/* ----------------------------- */
/* Tooltip */
/* ----------------------------- */
export const Tooltip = ({
	term,
	definition,
	children,
}: {
	term: string;
	definition: string;
	children: React.ReactNode;
}) => {
	const [show, setShow] = useState(false);

	return (
		<span
			className="relative cursor-help inline-block align-baseline border-b border-[#D2603C]/30 hover:border-[#D2603C] transition-colors"
			onMouseEnter={() => setShow(true)}
			onMouseLeave={() => setShow(false)}
		>
			<span className="text-[#D2603C] font-medium">{children}</span>
			{show && (
				<span className="absolute bottom-full left-1/2 -translate-x-1/2 mb-4 w-64 p-4 bg-[#F9F8F4] dark:bg-[#1F1D1B] border border-[#E6E3DB] dark:border-white/10 rounded-xl shadow-lg z-50 text-left pointer-events-none">
					<span className="block text-[#D2603C] text-[10px] font-bold uppercase tracking-widest mb-1">
						Definition
					</span>
					<span className="block text-[#221F1D] dark:text-[#EEECE5] font-serif text-lg mb-2">
						{term}
					</span>
					<span className="block text-[#221F1D]/60 dark:text-[#EEECE5]/60 text-xs leading-relaxed">
						{definition}
					</span>
					<span className="absolute bottom-[-6px] left-1/2 -translate-x-1/2 rotate-45 w-3 h-3 bg-[#F9F8F4] dark:bg-[#1F1D1B] border-r border-b border-[#E6E3DB] dark:border-white/10"></span>
				</span>
			)}
		</span>
	);
};

/* ----------------------------- */
/* Code Block with Shiki */
/* ----------------------------- */
interface LogicStep {
	title: string;
	description: string;
}

export const CodeBlock = ({
	code,
	logic = [],
	language = "typescript",
}: {
	code: string;
	logic?: LogicStep[];
	language?: string;
}) => {
	const [view, setView] = useState<"code" | "logic">("code");
	const [copied, setCopied] = useState(false);
	const [highlightedCode, setHighlightedCode] = useState("");

	useEffect(() => {
		const highlight = async () => {
			const html = await codeToHtml(code, {
				lang: language,
				theme: "github-dark",
			});
			setHighlightedCode(html);
		};
		highlight();
	}, [code, language]);

	const handleCopy = () => {
		navigator.clipboard.writeText(code);
		setCopied(true);
		setTimeout(() => setCopied(false), 2000);
	};

	return (
		<div className="my-16 -mx-6 md:-mx-12 lg:-mx-24 bg-[#141311] rounded-3xl overflow-hidden shadow-2xl border border-white/5">
			<div className="flex items-center justify-between px-6 py-4 border-b border-white/5 bg-[#1F1D1B]">
				<div className="flex items-center gap-3">
					<div className="flex gap-1.5">
						<div className="w-2.5 h-2.5 rounded-full bg-[#FF5F56]"></div>
						<div className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E]"></div>
						<div className="w-2.5 h-2.5 rounded-full bg-[#27C93F]"></div>
					</div>
					<span className="ml-4 text-xs font-mono text-white/30 tracking-wide uppercase">
						ExpensiveCalculation.jsx
					</span>
				</div>
				<div className="flex bg-black/20 rounded-lg p-1 gap-1 backdrop-blur-sm">
					<button
						onClick={() => setView("code")}
						className={`px-4 py-1.5 rounded-md text-[10px] font-bold uppercase tracking-widest cursor-pointer select-none transition-all ${view === "code"
								? "bg-[#D2603C] text-white"
								: "text-white/40 hover:text-white"
							}`}
					>
						Code
					</button>
					{logic.length > 0 && (
						<button
							onClick={() => setView("logic")}
							className={`px-4 py-1.5 rounded-md text-[10px] font-bold uppercase tracking-widest cursor-pointer select-none transition-all ${view === "logic"
									? "bg-[#D2603C] text-white"
									: "text-white/40 hover:text-white"
								}`}
						>
							Logic
						</button>
					)}
				</div>
			</div>

			{view === "code" ? (
				<div className="relative group">
					<div className="absolute right-4 top-4 z-10">
						<button
							onClick={handleCopy}
							className="text-white/20 hover:text-white transition-colors p-2 bg-white/5 rounded-lg hover:bg-white/10 backdrop-blur-sm flex items-center gap-2"
						>
							<Copy size={14} />
							<span className="text-[10px] font-bold uppercase tracking-widest">
								{copied ? "Copied!" : "Copy"}
							</span>
						</button>
					</div>
					<div
						className="overflow-x-auto bg-[#141311] [&_pre]:p-8 [&_pre]:bg-transparent [&_pre]:text-sm [&_pre]:leading-relaxed"
						dangerouslySetInnerHTML={{ __html: highlightedCode }}
					/>
				</div>
			) : (
				<div className="p-10 bg-[#141311] min-h-[300px]">
					<div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
						{logic.map((step, index) => (
							<div
								key={index}
								className={`bg-[#1F1D1B] p-6 rounded-xl border border-white/5 relative group hover:border-[#D2603C]/30 transition-colors ${index === 1 ? "md:mt-8" : index === 2 ? "md:mt-16" : ""
									}`}
							>
								<div className="absolute -top-3 left-6 bg-[#141311] px-2 text-[#D2603C] font-mono text-xs">
									{String(index + 1).padStart(2, "0")}
								</div>
								<div className="mb-3 text-white font-serif text-lg">
									{step.title}
								</div>
								<p className="text-white/50 text-xs leading-relaxed">
									{step.description}
								</p>
							</div>
						))}
					</div>
				</div>
			)}
		</div>
	);
};

/* ----------------------------- */
/* Quote */
/* ----------------------------- */
export const Quote = ({
	children,
	author,
}: {
	children: React.ReactNode;
	author?: string;
}) => (
	<blockquote className="relative my-16 p-0 border-none">
		<p className="text-3xl md:text-4xl font-serif italic text-[#221F1D] dark:text-[#EEECE5] leading-snug relative z-10 m-0 text-center">
			"{children}"
		</p>
		{author && (
			<cite className="block mt-6 text-center text-sm text-[#221F1D]/60 dark:text-[#EEECE5]/60 not-italic">
				— {author}
			</cite>
		)}
		<div className="h-1 w-20 bg-[#D2603C] mx-auto mt-8 rounded-full opacity-50"></div>
	</blockquote>
);

/* ----------------------------- */
/* Key Takeaway */
/* ----------------------------- */
export const KeyTakeaway = ({ children }: { children: React.ReactNode }) => (
	<div className="mt-20 bg-gradient-to-br from-[#EEECE5]/40 to-[#F9F8F4] dark:from-white/5 dark:to-transparent p-10 rounded-3xl border border-white dark:border-white/5 shadow-sm max-w-3xl mx-auto">
		<h3 className="font-serif text-3xl font-normal text-[#221F1D] dark:text-[#EEECE5] mb-6 flex items-center gap-3">
			<Lightbulb className="text-[#D2603C]" size={28} />
			Key Takeaway
		</h3>
		<p className="mb-0 text-[#221F1D]/70 dark:text-[#EEECE5]/70 text-lg font-normal leading-relaxed">
			{children}
		</p>
	</div>
);
