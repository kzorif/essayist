"use client";
import React, { useState } from "react";
import { Search, Moon, Sun, Menu, X, ArrowRight, Mail } from "lucide-react";

// Navbar Component
const Navbar = ({ currentPage = "home" }) => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const [isDark, setIsDark] = useState(false);
	const [isSearchOpen, setIsSearchOpen] = useState(false);

	const toggleTheme = () => {
		setIsDark(!isDark);
		document.documentElement.classList.toggle("dark");
	};

	return (
		<header className="fixed top-0 z-50 w-full bg-[#FDFBF7]/95 dark:bg-[#1C1A17]/95 backdrop-blur-md border-b border-[#E6E1D8]/50 dark:border-[#332F2A]/50 transition-all duration-300">
			<div className="container mx-auto px-4 sm:px-6 lg:px-40 h-20 flex items-center justify-between">
				<a href="#" className="flex items-center gap-3 group">
					<div className="relative flex items-center justify-center w-9 h-9 rounded-lg bg-[#3A3530] dark:bg-white text-white dark:text-[#3A3530] shadow-sm transition-transform group-hover:rotate-3 group-hover:scale-105">
						<span className="font-serif font-bold italic text-xl leading-none pt-0.5">
							T
						</span>
					</div>
					<span className="text-xl font-bold tracking-tight text-[#3A3530] dark:text-white font-serif">
						TechLog<span className="text-[#D95D39]">.</span>
					</span>
				</a>

				<div className="flex items-center gap-6 md:gap-8">
					<nav className="hidden md:flex items-center gap-8">
						<a
							href="#"
							className={`text-sm font-medium transition-colors ${currentPage === "home" ? "text-[#2D2A26] dark:text-white" : "text-[#6B665E] dark:text-[#9C968E]"} hover:text-[#D95D39]`}
						>
							Home
						</a>
						<a
							href="#"
							className={`text-sm font-medium transition-colors ${currentPage === "about" ? "text-[#2D2A26] dark:text-white" : "text-[#6B665E] dark:text-[#9C968E]"} hover:text-[#D95D39]`}
						>
							About
						</a>
						<a
							href="#"
							className={`text-sm font-medium transition-colors ${currentPage === "products" ? "text-[#2D2A26] dark:text-white" : "text-[#6B665E] dark:text-[#9C968E]"} hover:text-[#D95D39]`}
						>
							Products
						</a>
					</nav>

					<div className="hidden md:block w-px h-4 bg-[#E6E1D8] dark:bg-[#332F2A]"></div>

					<div className="flex items-center gap-2">
						<button
							onClick={toggleTheme}
							className="p-2 text-[#2D2A26] dark:text-white hover:bg-[#F4F0EA] dark:hover:bg-[#2A2622] rounded-full transition-colors"
							aria-label="Toggle theme"
						>
							{isDark ? <Sun size={20} /> : <Moon size={20} />}
						</button>

						{currentPage === "home" && (
							<button
								onClick={() => setIsSearchOpen(!isSearchOpen)}
								className="p-2 text-[#2D2A26] dark:text-white hover:bg-[#F4F0EA] dark:hover:bg-[#2A2622] rounded-full transition-colors"
								aria-label="Search"
							>
								<Search size={20} />
							</button>
						)}

						<button
							onClick={() => setIsMenuOpen(!isMenuOpen)}
							className="md:hidden p-2 text-[#2D2A26] dark:text-white hover:bg-[#F4F0EA] dark:hover:bg-[#2A2622] rounded-full transition-colors"
							aria-label="Menu"
						>
							{isMenuOpen ? <X size={24} /> : <Menu size={24} />}
						</button>
					</div>
				</div>
			</div>

			{/* Mobile Menu */}
			{isMenuOpen && (
				<div className="md:hidden bg-[#FDFBF7] dark:bg-[#1C1A17] border-t border-[#E6E1D8] dark:border-[#332F2A]">
					<nav className="container mx-auto px-4 py-4 flex flex-col gap-4">
						<a
							href="#"
							className="text-sm font-medium text-[#2D2A26] dark:text-white"
						>
							Home
						</a>
						<a
							href="#"
							className="text-sm font-medium text-[#6B665E] dark:text-[#9C968E]"
						>
							About
						</a>
						<a
							href="#"
							className="text-sm font-medium text-[#6B665E] dark:text-[#9C968E]"
						>
							Products
						</a>
					</nav>
				</div>
			)}

			{/* Search Bar */}
			{isSearchOpen && currentPage === "home" && (
				<div className="bg-[#FDFBF7] dark:bg-[#1C1A17] border-t border-[#E6E1D8] dark:border-[#332F2A]">
					<div className="container mx-auto px-4 sm:px-6 lg:px-40 py-4">
						<input
							type="text"
							placeholder="Search articles..."
							className="w-full px-4 py-2 rounded-lg bg-[#F4F0EA] dark:bg-[#2A2622] text-[#2D2A26] dark:text-white placeholder-[#6B665E] dark:placeholder-[#9C968E] focus:outline-none focus:ring-2 focus:ring-[#D95D39]"
						/>
					</div>
				</div>
			)}
		</header>
	);
};
export default Navbar;
