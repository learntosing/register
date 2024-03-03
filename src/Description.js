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
				Join the Mount Baker Toppers and rekindle your love for singing, or
				elevate your vocal journey to the next stage. Imagine yourself
				performing onstage at the Fairhaven green, blending voices and creating
				harmony with fellow music enthusiasts. This is your chance to connect
				with a community that shares your interest, to learn from each other,
				and to shine on stage together. Our rehearsals kick off on May 14th,
				building up to a finale concert in June. We're seeking singers who've
				dabbled in vocal music before—whether in church choirs, garage bands, or
				solo performances—and are now looking to take their skills to a communal
				stage.
			</p>
		</div>
	);
}

export default Description;
