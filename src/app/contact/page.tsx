import ContactForm from "@/src/components/ContactForm";
import Hello from "@/src/components/Hello";

export default function ContactPage() {
	return (
		<div className='flex h-full w-full flex-col md:flex-row'>
			<Hello />
			<ContactForm />
		</div>
	);
}
