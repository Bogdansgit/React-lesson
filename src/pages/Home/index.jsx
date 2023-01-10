import React, { Suspense } from "react";
import HeroSection from '../../components/HeroSection';

const DemoSection = React.lazy(() => import('../../components/DemoSection'));

function Home () {

	return (
		<>
			<HeroSection/>
			<Suspense fallback={<div>Loading...</div>}>
				<DemoSection/>
			</Suspense>
		</>
	)
};

export default Home;