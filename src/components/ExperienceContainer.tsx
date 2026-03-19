"use client";

import { motion, useInView } from "motion/react";
import { useRef } from "react";

type ExperienceType = {
	id: number;
	designation: string;
	description: string;
	time: string;
	company: string;
};

const experiences: ExperienceType[] = [
	{
		id: 3,
		company: "Infuse Consulting India Pvt Ltd",
		description:
			"Focused on strengthening security, stability, and developer workflows across multiple product services. Worked on AWS infrastructure, serverless upgrades, automated testing, and internal training programs to improve team efficiency and release reliability.",
		designation: "Software Engineer",
		time: "August 2025 - Present",
	},
	{
		id: 2,
		company: "Infuse Consulting India Pvt Ltd",
		description:
			"Built and maintained full-stack features for a large testing platform, optimized deployment pipelines, and helped keep the system compliant with enterprise security standards. Regularly worked with clients, fixed production issues, and mentored junior developers.",
		designation: "Associate Software Engineer",
		time: "August 2023 - August 2025",
	},
	{
		id: 1,
		company: "Infuse Consulting India Pvt Ltd",
		description:
			"Worked on experimental features, bug fixes, and test improvements while learning the full development lifecycle. Built proof-of-concepts that were later adopted into production systems.",
		designation: "Team Intern",
		time: "Jan 2023 - August 2023",
	},
	{
		id: 0,
		company: "",
		description:
			"Designed and developed full-stack applications for freelance clients, handling architecture, implementation, and deployment. Built scalable web and mobile solutions using React, Node.js, and AWS, with emphasis on performance, security, and clean, maintainable code. Managed projects end-to-end, from requirement discussions to production delivery.",
		designation: "Freelance Full-Stack Engineer",
		time: "Past - Present",
	},
];

export default function ExperienceContainer() {
	const expRef = useRef<HTMLDivElement | null>(null);
	const isExpRefInView = useInView(expRef, { margin: "-100px", once: true });

	return (
		<div ref={expRef} className='flex w-full flex-col justify-center gap-6 pb-10'>
			<motion.h1
				initial={{ x: "-100vw" }}
				animate={isExpRefInView ? { x: 0 } : {}}
				className='text-2xl font-bold'
			>
				Experience
			</motion.h1>
			<motion.div
				initial={{ x: "-100vw" }}
				animate={isExpRefInView ? { x: 0 } : {}}
				transition={{ delay: 0.5 }}
				className='grid h-full w-full px-4'
			>
				{experiences.map((experience) => (
					<div key={experience.id} className='flex h-full w-full flex-row gap-4'>
						<div className='flex h-full w-fit justify-center'>
							<div className='flex w-1 justify-center rounded bg-gray-600'>
								<div className='h-5 w-full rounded-full bg-white ring-4 ring-red-500' />
							</div>
						</div>
						<div className='flex flex-1 flex-col pt-5'>
							<p className='rounded-s-lg rounded-b-lg bg-white p-3 font-semibold'>
								{experience.designation}
							</p>
							<p className='p-3 text-sm italic'>{experience.description}</p>
							<p className='p-3 text-sm font-semibold text-red-400'>{experience.time}</p>
							{experience.company && (
								<p className='w-fit rounded bg-white p-2 text-sm font-semibold'>{experience.company}</p>
							)}
						</div>
					</div>
				))}
			</motion.div>
		</div>
	);
}
