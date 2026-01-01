import React, { useState } from "react";
import { Search, Moon, Sun, Menu, X, ArrowRight, Mail } from "lucide-react";
const ContactSubscribe = () => {
	const [email, setEmail] = useState("");
	const [message, setMessage] = useState("");
	const [subscribeEmail, setSubscribeEmail] = useState("");

	const handleContactSubmit = (e) => {
		e.preventDefault();
		alert(`Message sent!\nEmail: ${email}\nMessage: ${message}`);
		setEmail("");
		setMessage("");
	};

	const handleSubscribe = (e) => {
		e.preventDefault();
		alert(`Subscribed with: ${subscribeEmail}`);
		setSubscribeEmail("");
	};

	return (
		<div className="mb-24 grid grid-cols-1 md:grid-cols-2 gap-12">
			{/* Contact Form */}
			<div className="bg-[#F4F0EA] dark:bg-[#2A2622] p-8 rounded-2xl">
				<h3 className="text-2xl font-medium text-[#3A3530] dark:text-white mb-2 font-serif">
					Get in Touch
				</h3>
				<p className="text-sm text-[#6B665E] dark:text-[#9C968E] mb-6">
					Have a question or want to collaborate? Drop us a message.
				</p>

				<form onSubmit={handleContactSubmit} className="space-y-4">
					<div>
						<label className="block text-sm font-medium text-[#2D2A26] dark:text-white mb-2">
							Email Address
						</label>
						<input
							type="email"
							value={email}
							onChange={(e) => setEmail(e.target.value)}
							required
							className="w-full px-4 py-2 rounded-lg bg-white dark:bg-[#1C1A17] text-[#2D2A26] dark:text-white border border-[#E6E1D8] dark:border-[#332F2A] focus:outline-none focus:ring-2 focus:ring-[#D95D39]"
							placeholder="your@email.com"
						/>
					</div>

					<div>
						<label className="block text-sm font-medium text-[#2D2A26] dark:text-white mb-2">
							Message
						</label>
						<textarea
							value={message}
							onChange={(e) => setMessage(e.target.value)}
							required
							rows={4}
							className="w-full px-4 py-2 rounded-lg bg-white dark:bg-[#1C1A17] text-[#2D2A26] dark:text-white border border-[#E6E1D8] dark:border-[#332F2A] focus:outline-none focus:ring-2 focus:ring-[#D95D39]"
							placeholder="Tell us what's on your mind..."
						/>
					</div>

					<button
						type="submit"
						className="w-full px-6 py-3 bg-[#3A3530] dark:bg-white text-white dark:text-[#1C1A17] font-medium rounded-full hover:opacity-90 transition-all duration-300"
					>
						Send Message
					</button>
				</form>
			</div>

			{/* Newsletter Subscribe */}
			<div className="bg-[#F4F0EA] dark:bg-[#2A2622] p-8 rounded-2xl flex flex-col justify-center">
				<div className="mb-6">
					<Mail className="text-[#D95D39] mb-4" size={32} />
					<h3 className="text-2xl font-medium text-[#3A3530] dark:text-white mb-2 font-serif">
						Subscribe to Newsletter
					</h3>
					<p className="text-sm text-[#6B665E] dark:text-[#9C968E]">
						Get the latest articles and insights delivered directly to your
						inbox. No spam, unsubscribe anytime.
					</p>
				</div>

				<form onSubmit={handleSubscribe} className="space-y-4">
					<div>
						<input
							type="email"
							value={subscribeEmail}
							onChange={(e) => setSubscribeEmail(e.target.value)}
							required
							className="w-full px-4 py-3 rounded-lg bg-white dark:bg-[#1C1A17] text-[#2D2A26] dark:text-white border border-[#E6E1D8] dark:border-[#332F2A] focus:outline-none focus:ring-2 focus:ring-[#D95D39]"
							placeholder="Enter your email"
						/>
					</div>

					<button
						type="submit"
						className="w-full px-6 py-3 bg-[#D95D39] text-white font-medium rounded-full hover:opacity-90 transition-all duration-300"
					>
						Subscribe Now
					</button>
				</form>

				<p className="text-xs text-[#6B665E] dark:text-[#9C968E] mt-4">
					By subscribing, you agree to our Privacy Policy and consent to receive
					updates.
				</p>
			</div>
		</div>
	);
};
export default ContactSubscribe;
