"use client";

import { motion, useInView } from "motion/react";
import { useRef } from "react";

import SkillPill from "@/src/components/SkillPill";

const skills: string[] = [
	"HTML5",
	"CSS3",
	"JavaScript",
	"TypeScript",
	"NextJS",
	"ReactJS",
	"Vite",
	"NodeJs",
	"ExpressJs",
	"Tailwind",
	"MongoDB",
	"Postgres",
	"C",
	"Python",
	"Flask",
	"Django",
];

export default function SkillsContainer() {
	const skillRef = useRef<HTMLDivElement | null>(null);
	const isSkillRefInView = useInView(skillRef, { margin: "-100px", once: true });

	return (
		<div ref={skillRef} className='flex w-full flex-col justify-center gap-6'>
			<motion.h1
				initial={{ x: "-100vw" }}
				animate={isSkillRefInView ? { x: 0 } : {}}
				className='text-2xl font-bold'
			>
				Skills
			</motion.h1>
			<motion.div
				initial={{ x: "-100vw" }}
				animate={isSkillRefInView ? { x: 0 } : {}}
				transition={{ delay: 0.5 }}
				className='flex flex-wrap gap-4'
			>
				{skills.map((skill) => (
					<SkillPill key={skill} title={skill} />
				))}
			</motion.div>
		</div>
	);
}
