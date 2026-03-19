"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export type ItemType = {
	id: number;
	color: string;
	title: string;
	desc: string;
	img: string;
	link: string;
};

const items: ItemType[] = [
	{
		id: 0,
		color: "from-violet-300 to-indigo-300",
		title: "LogoHunt",
		desc: "Provide a website URL and LogoHunt will fetch you its logo.",
		img: "/images/LogoHunt.png",
		link: "https://logohunt.vercel.app",
	},
	{
		id: 1,
		color: "from-indigo-300 to-blue-300",
		title: "WordQuest",
		desc: "A hangman styled game where users has 9 lives and 2 hints to guess the word.",
		img: "/images/WordQuest.png",
		link: "https://nine-lives-of-code.vercel.app",
	},
	{
		id: 2,
		color: "from-blue-300 to-green-300",
		title: "Jii",
		desc: "A Global B2B Marketplace for Manufacturers & Dealers. All-inclusive platform that brings together manufacturers, dealers, workers, and customers to meet their your business needs.",
		img: "/images/JiiApp.png",
		link: "https://www.jiiapp.com",
	},
];

export default function WorkCarousel() {
	const [index, setIndex] = useState(0);

	useEffect(() => {
		const interval = setInterval(() => {
			setIndex((prev) => (prev === items.length - 1 ? 0 : prev + 1));
		}, 5000);

		return () => clearInterval(interval);
	}, [index]);

	return (
		<div
			key={items[index].id}
			className={`relative flex h-full w-full items-center justify-center bg-linear-to-r ${items[index].color}`}
		>
			<div className='mx-auto flex w-5/6 flex-col items-center justify-center gap-8 rounded-2xl bg-white p-4 text-black'>
				<h3 className='text-xl font-bold md:text-2xl lg:text-3xl xl:text-4xl'>{items[index].title}</h3>
				<div className='flex w-full flex-col gap-2'>
					<div className='relative aspect-video w-1/2 self-center'>
						<Image
							src={items[index].img}
							alt='project preview'
							draggable={false}
							fill
							className='object-contain object-center'
						/>
					</div>
					<p className='flex w-full justify-center text-justify lg:text-lg'>{items[index].desc}</p>
					<a
						href={items[index].link}
						target='_blank'
						className={`flex w-fit self-end rounded-xl bg-linear-to-r ${items[index].color} px-2 py-4 text-black hover:opacity-80`}
					>
						See Demo
					</a>
				</div>
			</div>
			<div className='absolute bottom-0 flex h-fit w-full flex-row items-center justify-center gap-4 p-4'>
				{items.map((item) => (
					<button
						key={item.id}
						className={`h-5 w-5 cursor-pointer rounded-full border border-gray-200 hover:bg-white ${item.id === index && "bg-gray-200"}`}
						onClick={() => setIndex(item.id)}
					/>
				))}
			</div>
		</div>
	);
}
