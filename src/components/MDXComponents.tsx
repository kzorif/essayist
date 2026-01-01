"use client";

import React, { useState } from "react";
import { Copy, Lightbulb } from "lucide-react";

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
			className="relative cursor-help border-b border-[#D2603C]/30 hover:border-[#D2603C] transition-colors"
			onMouseEnter={() => setShow(true)}
			onMouseLeave={() => setShow(false)}
		>
			<span className="text-[#D2603C] font-medium">{children}</span>
			{show && (
				<span className="absolute bottom-full left-1/2 -translate-x-1/2 mb-4 w-64 p-4 bg-[#F9F8F4] dark:bg-[#1F1D1B] border border-[#E6E3DB] dark:border-white/10 rounded-xl shadow-lg z-50 text-left pointer-events-none">
					<span className="block text-[#D2603C] text-[10px] font-bold uppercase tracking-widest mb-1">
						Definition
					</span>
					<span className="block font-serif text-lg mb-2 text-[#221F1D] dark:text-[#EEECE5]">
						{term}
					</span>
					<span className="text-xs opacity-70 leading-relaxed">
						{definition}
					</span>
				</span>
			)}
		</span>
	);
};

/* ----------------------------- */
/* Code Block */
/* ----------------------------- */
interface LogicStep {
	title: string;
	description: string;
}

export const CodeBlock = ({
	code,
	logic = [],
}: {
	code: string;
	logic?: LogicStep[];
}) => {
	const [view, setView] = useState<"code" | "logic">("code");
	const [copied, setCopied] = useState(false);

	const copy = () => {
		navigator.clipboard.writeText(code);
		setCopied(true);
		setTimeout(() => setCopied(false), 2000);
	};

	return (
		<div className="my-16 bg-[#141311] rounded-3xl overflow-hidden border border-white/5">
			{/* Header */}
			<div className="flex justify-between items-center px-6 py-4 bg-[#1F1D1B]">
				<span className="text-xs font-mono text-white/30">Code Example</span>
				<div className="flex gap-2">
					<button
						onClick={() => setView("code")}
						className={`px-3 py-1 text-xs rounded transition-colors ${
							view === "code"
								? "bg-[#D2603C] text-white"
								: "text-white/40 hover:text-white/60"
						}`}
					>
						Code
					</button>
					{logic.length > 0 && (
						<button
							onClick={() => setView("logic")}
							className={`px-3 py-1 text-xs rounded transition-colors ${
								view === "logic"
									? "bg-[#D2603C] text-white"
									: "text-white/40 hover:text-white/60"
							}`}
						>
							Logic
						</button>
					)}
				</div>
			</div>

			{/* Content */}
			{view === "code" ? (
				<div className="relative">
					<button
						onClick={copy}
						className="absolute right-4 top-4 px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 transition-colors text-xs text-white/70 hover:text-white flex items-center gap-2"
					>
						<Copy size={14} />
						{copied ? "Copied!" : "Copy"}
					</button>
					<pre className="p-8 pt-16 text-sm text-[#A9B7C6] overflow-x-auto">
						<code>{code}</code>
					</pre>
				</div>
			) : (
				<div className="p-8 grid md:grid-cols-3 gap-6">
					{logic.map((step, i) => (
						<div key={i} className="bg-[#1F1D1B] p-6 rounded-xl">
							<div className="text-[#D2603C] text-xs font-bold mb-2">
								Step {i + 1}
							</div>
							<h4 className="text-white font-serif text-lg mb-2">
								{step.title}
							</h4>
							<p className="text-xs text-white/60 leading-relaxed">
								{step.description}
							</p>
						</div>
					))}
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
	<blockquote className="my-16 text-center">
		<p className="text-3xl md:text-4xl italic font-serif leading-relaxed">
			"{children}"
		</p>
		{author && (
			<cite className="block mt-4 text-sm opacity-60 not-italic">
				— {author}
			</cite>
		)}
		<div className="h-1 w-20 bg-[#D2603C] mx-auto mt-8 rounded-full" />
	</blockquote>
);

/* ----------------------------- */
/* Key Takeaway */
/* ----------------------------- */
export const KeyTakeaway = ({ children }: { children: React.ReactNode }) => (
	<div className="mt-20 p-10 rounded-3xl bg-[#EEECE5]/50 dark:bg-white/5 border border-[#E6E3DB] dark:border-white/5">
		<h3 className="flex items-center gap-3 font-serif text-3xl mb-4 text-[#221F1D] dark:text-[#EEECE5]">
			<Lightbulb className="text-[#D2603C]" size={32} />
			Key Takeaway
		</h3>
		<p className="text-lg opacity-70 leading-relaxed">{children}</p>
	</div>
);
