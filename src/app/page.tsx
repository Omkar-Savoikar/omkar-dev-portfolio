import Image from "next/image";

export default function HomePage() {
	return (
		<>
			<div className='relative h-1/2 w-full lg:h-full lg:w-1/2'>
				<Image
					src='/images/hero.png'
					alt='Hero image'
					fill
					className='object-contain object-center'
					draggable={false}
				/>
			</div>

			<div className='flex w-full flex-col justify-center gap-8 lg:h-full lg:w-1/2'>
				<h1 className='text-4xl font-bold md:text-6xl'>Crafting Digital Experiences, Designing Tomorrow</h1>
				<p className='md:text-xl'>
					Welcome to my digital canvas, where innovation and creativity converge. With a keen eye for
					aesthetics and a mastery of code, my portfolio showcases a diverse collection of projects that
					reflect my commitment to excellence.
				</p>
				<div className='flex gap-4'>
					<button className='cursor-pointer rounded-lg bg-black p-4 text-white ring-1 ring-black'>
						View My Work
					</button>
					<button className='cursor-pointer rounded-lg p-4 ring-1 ring-black'>Contact Me</button>
				</div>
			</div>
		</>
	);
}
