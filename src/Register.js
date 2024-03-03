import React from "react";
import emailjs from "emailjs-com";

const Register = () => {
	// Initialize EmailJS with your public key (replace initialization if needed)
	emailjs.init("TbMEX_EcYQ67mvmIX");

	const sendEmail = (e) => {
		e.preventDefault(); // Prevents the default form submission action

		// Sending email to the administrator
		emailjs
			.sendForm(
				"service_28g1c54",
				"template_dscgf8v",
				e.target,
				"TbMEX_EcYQ67mvmIX"
			)
			.then(
				(result) => {
					console.log("Admin Email Sent:", result.text);
					// Once the admin email is sent, send the confirmation to the participant
					sendConfirmationEmail(e.target);
				},
				(error) => {
					console.log("Admin Email Error:", error.text);
				}
			);
	};

	const sendConfirmationEmail = (form) => {
		// Sending confirmation email to the participant
		emailjs
			.sendForm(
				"service_28g1c54",
				"template_nimj5d9",
				form,
				"TbMEX_EcYQ67mvmIX"
			)
			.then(
				(result) => {
					console.log("Participant Email Sent:", result.text);
					// Here, you could clear the form, show a success message, etc.
				},
				(error) => {
					console.log("Participant Email Error:", error.text);
				}
			);
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
				<button type="submit">Submit</button>
			</form>
		</div>
	);
};

export default Register;
