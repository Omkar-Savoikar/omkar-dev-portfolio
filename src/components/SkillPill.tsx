export default function SkillPill({ title }: { title: string }) {
	return (
		<div className='w-fit cursor-pointer rounded border bg-black p-2 text-sm text-white shadow shadow-black transition-colors hover:scale-105 hover:bg-white hover:text-black hover:shadow-lg'>
			{title}
		</div>
	);
}
