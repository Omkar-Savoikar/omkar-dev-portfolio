"use client";

import Link from "next/link";
import { motion } from "motion/react";

export default function HireMe() {
	return (
		<div className='flex h-full w-full flex-col items-center justify-center py-4'>
			<h2 className='text-3xl md:text-4xl'>Do you have a project?</h2>
			<div className='relative h-fit w-fit'>
				<motion.svg
					animate={{ rotate: 360 }}
					transition={{ duration: 8, ease: "linear", repeat: Infinity }}
					viewBox='0 0 300 300'
					className='h-64 w-64 md:h-125 md:w-125'
				>
					<defs>
						<path id='circlePath' d='M 150, 150 m -60, 0 a 60, 60 0 0, 1 120, 0 a 60, 60 0 0, 1 -120, 0' />
					</defs>
					<text fill='#000'>
						<textPath xlinkHref='#circlePath' className='text-xl'>
							Full Stack Developer and UI Designer
						</textPath>
					</text>
				</motion.svg>
				<Link
					href='/contact'
					className='absolute inset-0 m-auto flex h-16 w-16 items-center justify-center rounded-full bg-black text-white no-underline md:h-28 md:w-28'
				>
					Hire Me
				</Link>
			</div>
		</div>
	);
}
