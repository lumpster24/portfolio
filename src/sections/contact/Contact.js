import { useRef, useState } from "react";
import emailjs from "emailjs-com";

import styles from "./Contact.module.css";
import ConfirmationModal from "./ConfirmationModal";

export default function Contact() {
	const [isPending, setIsPending] = useState(false);
	const [showConfirm, setShowConfirm] = useState(false);
	const [sendFailed, setSendFailed] = useState(false);
	const [emailSent, setEmailSent] = useState(false);

	const form = useRef();

	const submitHandler = (e) => {
		e.preventDefault();
		setIsPending(true);
		setSendFailed(null);
		setEmailSent(false);

		// ib, cd: question: just curious - is there any reason you're using chain syntax rather than try/catch?
		emailjs
			.sendForm(
				"portfolio_inquieres",
				"portfolio_template",
				form.current,
				"luyzdEdGWr0UK3k0x"
			)
			.then(
				(result) => {
					// ib, cd: thought: you generally don't want console logs in your code
					console.log(result.text);
					e.target.reset();
					setEmailSent(true);
					setShowConfirm(true);
					setIsPending(false);
				},
				(error) => {
					// ib, cd: suggestion: it doesn't seem like there's any indication to the user if the send email fails.
					// i would build something around that
					console.log(error.text);
					setSendFailed(error.text);
					setIsPending(false);
				}
			);
	};

	return (
		<div className={`${styles["form-container"]} fadeIn`}>
			<h1 className="page-header">Contact me</h1>

			<form
				onSubmit={submitHandler}
				className={`text ${styles.form}`}
				ref={form}
			>
				<div className="flex--col">
					<label htmlFor="name">Name:</label>
					<input
						required
						type="text"
						id="name"
						className={`text ${styles.input}`}
						name="name"
					></input>
				</div>

				<div className="flex--col">
					<label htmlFor="email">Email address:</label>
					<input
						required
						type="email"
						id="email"
						className={`text ${styles.input}`}
						name="email"
					></input>
				</div>

				<div className={`flex--col ${styles["two-col"]}`}>
					<label htmlFor="subject">Subject:</label>
					<input
						required
						type="text"
						id="subject"
						className={`text ${styles.input}`}
						name="subject"
					></input>
				</div>

				<div className={`flex--col ${styles["two-col"]}`}>
					<label htmlFor="message">Message:</label>
					<textarea
						required
						id="message"
						className={`text ${styles.input}`}
						name="message"
					></textarea>
				</div>

				{/* ib, cd: suggestion: rather than rendering two "different" buttons I would put the isPending logic
        on the disabledProp and button text */}
				{!isPending ? (
					<button className={styles.btn}>Send</button>
				) : (
					<button disabled className={styles.btn}>
						Loading...
					</button>
				)}
			</form>
			{/* ib, cd: question: what's the difference between emailSent and showConfirm? */}
			{emailSent && showConfirm && (
				<ConfirmationModal
					setShowConfirm={setShowConfirm}
					sendFailed={sendFailed}
				/>
			)}
		</div>
	);
}
