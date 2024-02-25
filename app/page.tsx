import Image from 'next/image';
import Hero from './_components/hero';
import Footer from './_components/footer';
import FeaturedProducts from './_components/featuredProducts';

export default function Home() {
	return (
		<main>
			<Hero />
			<FeaturedProducts />
			<Footer />
		</main>
	);
}
