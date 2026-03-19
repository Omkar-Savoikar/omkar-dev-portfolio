export default function Biography() {
	return (
		<div className='flex w-full flex-col justify-center gap-6'>
			<h1 className='text-2xl font-bold'>Biography</h1>
			<p className='text-lg'>
				A software engineer focused on building reliable, scalable systems with clean architecture and strong
				fundamentals. I enjoy digging deep into how things work, from low-level behavior to high-level design
				trade-offs. My work emphasizes correctness, performance, and maintainability over quick fixes. I like
				exploring complex problems, understanding them fully, and turning them into simple, practical solutions.
			</p>
			{/* Quote */}
			<span className='italic'>
				I like going down rabbit holes until things make sense, always exploring beyond the surface. I&apos;d
				rather understand how things work than just make them work - the details are where the truth hides.
			</span>
			{/* Sign */}
			<div className='self-end font-semibold'>
				{/* Paste Sign SVG instead of name */}
				OMKAR SAVOIKAR
			</div>
		</div>
	);
}
