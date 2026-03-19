"use client";

import { useScroll } from "motion/react";
import { useRef } from "react";

import Brain from "@/src/assets/Brain";
import Biography from "@/src/components/Biography";
import SkillsContainer from "@/src/components/SkillsContainer";
import ExperienceContainer from "@/src/components/ExperienceContainer";

export default function AboutPage() {
	const containerRef = useRef<HTMLDivElement | null>(null);
	const { scrollYProgress } = useScroll({ container: containerRef });

	return (
		<div ref={containerRef} className="relative overflow-scroll flex h-full w-full">
			<div className='flex h-full w-full flex-col gap-32 px-2 md:w-1/2 md:py-10 lg:py-20'>
				<Biography />
				<SkillsContainer />
				<ExperienceContainer />
			</div>
			<div className='sticky inset-0 z-10 hidden h-full items-center justify-center md:flex md:w-1/2'>
				<Brain scrollYProgress={scrollYProgress} />
			</div>
		</div>
	);
}
