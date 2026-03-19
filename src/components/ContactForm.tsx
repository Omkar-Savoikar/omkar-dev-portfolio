"use client";

import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

export default function ContactForm() {
	const [submission, setSubmission] = useState<boolean | null>(null);
	const formRef = useRef<HTMLFormElement | null>(null);

	const sendMessage = async (event: React.SubmitEvent<HTMLFormElement>) => {
		event.preventDefault();

		if (!formRef.current) {
			setSubmission(false);
			setTimeout(() => {
				setSubmission(null);
			}, 5000);
			return;
		}

		try {
			await emailjs.sendForm(
				process.env.NEXT_PUBLIC_EMAIL_SERVICE_ID!,
				process.env.NEXT_PUBLIC_EMAIL_TEMPLATE_ID!,
				formRef.current,
				{
					publicKey: process.env.NEXT_PUBLIC_EMAIL_PUBLIC_KEY!,
				},
			);
			setSubmission(true);
			formRef.current.reset();
		} catch {
			setSubmission(false);
		} finally {
			setTimeout(() => {
				setSubmission(null);
			}, 5000);
		}
	};

	return (
		<form
			ref={formRef}
			className='my-auto flex h-1/2 flex-1 flex-col justify-center gap-4 rounded-xl bg-red-50 p-10 text-xl md:h-fit md:w-1/2'
			onSubmit={sendMessage}
		>
			<span>Hi Omkar,</span>
			<label htmlFor='message' aria-label='message'></label>
			<textarea
				id='message'
				name='message'
				rows={6}
				required
				className='resize-none border-b-2 border-black bg-transparent outline-none focus:border-black focus:ring-0 focus:outline-none focus:placeholder:text-transparent'
				placeholder='I have a business proposition for you and would like to connect and discuss it with you'
			/>
			<label htmlFor='email'>My email is</label>
			<input
				type='email'
				id='email'
				name='email'
				required
				placeholder='omkarsavoikar@gmail.com'
				className='border-b-2 border-black bg-transparent outline-none focus:border-black focus:ring-0 focus:outline-none focus:placeholder:text-transparent'
			/>
			<span>Regards</span>
			<button
				type='submit'
				className='mx-auto w-full rounded bg-purple-300 p-4 font-semibold text-gray-600 md:w-1/2'
			>
				Send
			</button>
			{submission !== null &&
				(submission ? (
					<span className='font-semibold text-green-500'>Your message was sent successfully</span>
				) : (
					<span className='font-semibold text-red-500'>Something went wrong in sending your message</span>
				))}
		</form>
	);
}
