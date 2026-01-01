import Navbar from "./Navbar";
import Hero from "./Hero";
import Featured from "./Featured";
import LatestStories from "./LatestStories";
import ContactSubscribe from "./ContactSubscribe";

const HomePage = () => {
	return (
		<div className="bg-[#FDFBF7] dark:bg-[#1C1A17] text-[#2D2A26] dark:text-[#EAE5DE] min-h-screen">
			<Navbar currentPage="home" />

			<main className="container mx-auto px-4 sm:px-6 lg:px-40 pt-32 pb-16">
				<Hero />
				<Featured />
				<LatestStories />
				<ContactSubscribe />
			</main>
		</div>
	);
};
export default HomePage;
