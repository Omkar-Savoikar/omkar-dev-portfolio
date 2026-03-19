"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { motion } from "motion/react";

import HamburgerIcon from "../assets/HamburgerIcon";
import CloseIcon from "../assets/CloseIcon";
import NavLink from "./NavLink";

const links = [
	{ url: "/", title: "Home" },
	{ url: "/about", title: "About" },
	{ url: "/portfolio", title: "Portfolio" },
	{ url: "/contact", title: "Contact" },
];

const images = [
	{ src: "/icons/github.png", alt: "GitHub logo", href: "https://www.github.com/Omkar-Savoikar" },
	{ src: "/icons/gmail.png", alt: "Gmail logo", href: "mailto:omkarsavoikar@gmail.com" },
	{ src: "/icons/linkedin.png", alt: "LinkedIn logo", href: "https://www.linkedin.com/in/omkar--savoikar" },
	{ src: "/icons/whatsapp.png", alt: "Whatsapp logo", href: "https://wa.me/919168813418" },
	{ src: "/icons/x.png", alt: "X logo", href: "https://x.com/OmkarSavoikar" },
];

const listVariants = {
	closed: {
		x: "100vw",
	},
	opened: {
		x: 0,
		transition: {
			when: "beforeChildren",
			staggerChildren: 0.2,
		},
	},
};

const listItemVariants = {
	closed: {
		x: "-10vw",
		opacity: 0,
	},
	opened: {
		x: 0,
		opacity: 1,
	},
};

export default function Navbar() {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<header className='flex h-24 shrink-0 items-center justify-between px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48'>
			{/* Links */}
			<nav className='hidden w-1/3 items-center justify-start gap-4 md:flex'>
				{links.map((link) => (
					<NavLink key={link.title} link={link} />
				))}
			</nav>
			{/* Logo */}
			<div className='flex h-full w-1/2 items-center justify-center md:hidden lg:flex'>
				<Link
					href='/'
					className='flex items-center justify-center gap-1 rounded-2xl bg-black p-2 text-sm font-semibold text-white no-underline'
				>
					<span className='flex items-center justify-center p-1'>Omkar</span>
					<span className='flex items-center justify-center rounded-lg bg-white p-1 text-black'>
						Savoikar
					</span>
				</Link>
			</div>
			{/* Socials */}
			<div className='hidden w-1/3 items-center justify-end gap-4 md:flex'>
				{images.map((image) => (
					<Link
						key={image.src}
						href={image.href}
						draggable={false}
						target='_blank'
						rel='noopener noreferrer'
						referrerPolicy='no-referrer'
						className='relative aspect-square h-10 w-10 rounded-lg no-underline hover:bg-black/10'
					>
						<Image
							src={image.src}
							alt={image.alt}
							fill
							draggable={false}
							className='object-contain object-center'
						/>
					</Link>
				))}
			</div>
			<div className='flex h-full w-fit items-center justify-center md:hidden'>
				<motion.button
					className='relative z-50 flex h-10 w-10 cursor-pointer flex-col items-center justify-center'
					onClick={() => setIsOpen((prev) => !prev)}
					whileTap={{ scale: 1.1 }}
				>
					{isOpen ? <CloseIcon /> : <HamburgerIcon />}
				</motion.button>
			</div>
			{isOpen && (
				<motion.div
					className='absolute inset-0 z-10 flex h-screen w-screen flex-col items-center justify-center gap-8 bg-black text-3xl text-white no-underline'
					variants={listVariants}
					initial='closed'
					animate='opened'
				>
					{links.map((link) => (
						<motion.button
							key={link.url}
							variants={listItemVariants}
							onClick={() => setIsOpen((prev) => !prev)}
						>
							<Link className='no-underline' href={link.url}>
								{link.title}
							</Link>
						</motion.button>
					))}
				</motion.div>
			)}
		</header>
	);
}
