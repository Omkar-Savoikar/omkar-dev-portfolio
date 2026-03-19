"use client";

import { motion } from "motion/react";

export default function Hello() {
	return (
		<div className='flex h-fit items-center text-6xl md:h-full md:w-1/2'>
			<div>
				{"Say Hello".split("").map((letter, index) => (
					<motion.span
						key={index}
						initial={{ opacity: 1 }}
						animate={{ opacity: 0 }}
						transition={{ duration: 3, repeat: Infinity, delay: index * 0.1 }}
					>
						{letter}
					</motion.span>
				))}
				😊
			</div>
		</div>
	);
}
