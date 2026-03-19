"use client";

import { AnimatePresence, motion } from "motion/react";
import { usePathname } from "next/navigation";
import { ReactNode } from "react";

const motionText: Record<string, string> = {
	"/": "Home",
	"/about": "About",
	"/portfolio": "Portfolio",
	"/contact": "Contact",
};

export default function TransitionProvider({ children }: { children: ReactNode }) {
	const pathName = usePathname();

	return (
		<main className='flex h-[calc(100vh-6rem)] min-h-0 w-full flex-1'>
			<AnimatePresence mode='wait'>
				<div key={pathName} className='h-full w-full'>
					<motion.div
						className='fixed top-0 left-0 z-20 h-screen w-screen bg-black'
						initial={{ y: "-100%" }}
						animate={{ y: ["-100%", "0%", "100%"] }}
						transition={{ duration: 2, ease: "easeOut", times: [0, 0.5, 1] }}
					/>
					<motion.div
						className='fixed inset-0 z-30 m-auto h-fit w-fit text-4xl text-white'
						initial={{ opacity: 1 }}
						animate={{ opacity: [0, 1, 0], transition: { delay: 0.5 } }}
						exit={{ opacity: 0 }}
						transition={{ duration: 1.5, ease: "easeInOut", times: [0, 0.5, 1] }}
					>
						{motionText[pathName]}
					</motion.div>
					<motion.div
						className='fixed top-0 left-0 z-20 h-screen w-screen bg-black'
						initial={{ y: "100%" }}
						animate={{ y: ["100%", "0%", "-100%"] }}
						transition={{ duration: 2, ease: "easeOut", times: [0, 0.5, 1] }}
					/>
					<motion.section
						className='relative flex h-full w-full flex-1 flex-col items-center justify-center gap-4 overflow-scroll px-4 sm:px-8 md:px-12 lg:flex-row lg:px-20 xl:px-48'
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						transition={{ duration: 2, delay: 0, ease: "easeOut" }}
					>
						{children}
					</motion.section>
				</div>
			</AnimatePresence>
		</main>
	);
}
