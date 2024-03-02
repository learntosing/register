import React, { useState } from "react";

function Register() {
	const [formData, setFormData] = useState({
		firstName: "",
		lastName: "",
		email: "",
		phone: "",
		referralSource: "",
	});

	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData((prevState) => ({
			...prevState,
			[name]: value,
		}));
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		// Here, you will handle form submission, e.g., sending data to Google Sheets and sending emails
		console.log(formData);
	};

	return (
		<div className="register">
			<h2>Register Now</h2>
			<form onSubmit={handleSubmit}>
				<input
					type="text"
					name="firstName"
					placeholder="First Name"
					value={formData.firstName}
					onChange={handleChange}
					required
				/>
				<input
					type="text"
					name="lastName"
					placeholder="Last Name"
					value={formData.lastName}
					onChange={handleChange}
					required
				/>
				<input
					type="email"
					name="email"
					placeholder="Email"
					value={formData.email}
					onChange={handleChange}
					required
				/>
				<input
					type="text"
					name="phone"
					placeholder="Phone Number"
					value={formData.phone}
					onChange={handleChange}
					required
				/>
				<div>
					Where did you hear about us?
					<label>
						<input
							type="radio"
							name="referralSource"
							value="Newspaper"
							onChange={handleChange}
						/>{" "}
						Newspaper
					</label>
					<label>
						<input
							type="radio"
							name="referralSource"
							value="Online"
							onChange={handleChange}
						/>{" "}
						Online
					</label>
					<label>
						<input
							type="radio"
							name="referralSource"
							value="Word of mouth"
							onChange={handleChange}
						/>{" "}
						Word of mouth
					</label>
				</div>
				<button type="submit">Submit</button>
			</form>
		</div>
	);
}

export default Register;
