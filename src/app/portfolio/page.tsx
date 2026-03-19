import HireMe from "@/src/components/HireMe";
import WorkCarousel from "@/src/components/WorkCarousel";

export default function PortfolioPage() {
	return (
		<div className='relative h-full w-full'>
			<div className='flex h-full w-full items-center justify-center text-8xl'>My Works</div>
			<WorkCarousel />
			<HireMe />
		</div>
	);
}
