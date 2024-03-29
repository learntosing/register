import React, { useState } from "react";
import emailjs from "emailjs-com";

const Register = () => {
	const [isSubmitting, setIsSubmitting] = useState(false);
	const [submissionMessage, setSubmissionMessage] = useState("");

	emailjs.init("TbMEX_EcYQ67mvmIX");

	const sendEmail = (e) => {
		e.preventDefault();
		setIsSubmitting(true); // Indicate submission start
		setSubmissionMessage(""); // Reset submission message

		// First, send email to the admin
		emailjs
			.sendForm(
				"service_28g1c54",
				"template_dscgf8v",
				e.target,
				"TbMEX_EcYQ67mvmIX"
			)
			.then((result) => {
				console.log("Admin Email Sent:", result.text);
				// Then, send confirmation email to the participant
				return emailjs.sendForm(
					"service_28g1c54",
					"template_nimj5d9",
					e.target,
					"TbMEX_EcYQ67mvmIX"
				);
			})
			.then((result) => {
				setIsSubmitting(false); // End submission
				alert("You have completed your registration. Thank you!");
				setSubmissionMessage(
					"Thank you for registering! Check your email for confirmation."
				);
				console.log("Participant Email Sent:", result.text);
				// Optionally, reset the form here
			})

			.catch((error) => {
				setIsSubmitting(false); // End submission on error
				setSubmissionMessage("Oops! Something went wrong. Please try again.");
				console.log("Email Error:", error.text);
			});
	};

	return (
		<div>
			<h2>Register Now</h2>
			<form onSubmit={sendEmail}>
				<div>
					<label>First Name:</label>
					<input
						type="text"
						name="firstName"
						required
					/>
				</div>
				<div>
					<label>Last Name:</label>
					<input
						type="text"
						name="lastName"
						required
					/>
				</div>
				<div>
					<label>Email:</label>
					<input
						type="email"
						name="email"
						required
					/>
				</div>
				<div>
					<label>Phone:</label>
					<input
						type="tel"
						name="phone"
					/>
				</div>
				<div>
					<label>How did you hear about us?</label>
					<select
						name="referralSource"
						required>
						<option value="">Select one</option>
						<option value="newspaper">Newspaper</option>
						<option value="online">Online</option>
						<option value="word of mouth">Word of Mouth</option>
					</select>
				</div>
				<div>
					<label>City or Town:</label>
					<select
						name="cityOrTown"
						required>
						<option value="">Please select</option>
						<option value="Bellingham, WA">Bellingham, WA</option>
						<option value="Mount Vernon, WA">Mount Vernon, WA</option>
						<option value="Anacortes, WA">Anacortes, WA</option>
						<option value="Sedro-Woolley, WA">Sedro-Woolley, WA</option>
						<option value="Burlington, WA">Burlington, WA</option>
						<option value="Lynden, WA">Lynden, WA</option>
						<option value="Ferndale, WA">Ferndale, WA</option>
						// Add more cities and towns as needed
					</select>
				</div>
				<button
					type="submit"
					disabled={isSubmitting}>
					{isSubmitting ? "Submitting..." : "Submit"}
				</button>
			</form>
			{isSubmitting && <div>Loading...</div>}
			{!isSubmitting && submissionMessage && (
				<div
					className={
						submissionMessage.startsWith("Oops!")
							? "submission-message error"
							: "submission-message"
					}>
					{submissionMessage}
				</div>
			)}
		</div>
	);
};

export default Register;
