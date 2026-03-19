"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavLink({ link }: { link: { url: string; title: string } }) {
	const pathName = usePathname();

	return (
		<Link
			href={link.url}
			className={`rounded-lg p-2 no-underline ${pathName === link.url ? "bg-black text-white hover:bg-black/80" : "bg-transparent hover:bg-black/10"}`}
		>
			{link.title}
		</Link>
	);
}
