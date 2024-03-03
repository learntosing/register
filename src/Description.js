import React from "react";

function Description() {
	return (
		<div className="Description">
			<div>
				<img
					src={`${process.env.PUBLIC_URL}/Toppers.png`}
					alt="Mount Baker Toppers Logo"
					style={{ maxWidth: "100%", height: "auto" }}
				/>
			</div>
			<h1>Learn to sing with the Mount Baker Toppers!</h1>
			<p>
				This group is here to reignite (or spark!) your passion for singing.
				Fulfill your dream of appearing on stage at the Fairhaven green. Make
				new friends and harmonize with them. Wave to your friends and family!
				Rehearsals start May 14th, and the big concert is in June.
			</p>
		</div>
	);
}

export default Description;
