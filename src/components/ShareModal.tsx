const ShareModal = ({ open, onClose, post }) => {
	const url = window.location.href;

	const copyLink = async () => {
		await navigator.clipboard.writeText(url);
	};

	if (!open) return null;

	return (
		<div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm">
			<div className="bg-[#F9F8F4] dark:bg-[#1F1D1B] rounded-3xl p-8 w-full max-w-md shadow-2xl relative">
				<button
					onClick={onClose}
					className="absolute right-5 top-5 text-[#221F1D]/40 hover:text-[#D2603C]"
				>
					<X size={20} />
				</button>

				<h3 className="font-serif text-2xl text-[#221F1D] dark:text-[#EEECE5] mb-6">
					Share this post
				</h3>

				<div className="grid grid-cols-2 gap-4 mb-6">
					<a
						href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(
							url,
						)}&text=${encodeURIComponent(post.title.main)}`}
						target="_blank"
						className="share-btn"
					>
						Twitter
					</a>

					<a
						href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(
							url,
						)}`}
						target="_blank"
						className="share-btn"
					>
						LinkedIn
					</a>

					<a
						href={`https://wa.me/?text=${encodeURIComponent(
							post.title.main + " " + url,
						)}`}
						target="_blank"
						className="share-btn"
					>
						WhatsApp
					</a>

					<button onClick={copyLink} className="share-btn">
						Copy Link
					</button>
				</div>

				<div className="text-xs text-[#221F1D]/50 dark:text-[#EEECE5]/40 text-center">
					Looks great on social — preview included ✨
				</div>
			</div>
		</div>
	);
};
export default ShareModal;
