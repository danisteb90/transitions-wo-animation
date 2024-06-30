"use client";

import gsap from "gsap";
import { useEffect } from "react";

const Template = ({ children }) => {
	useEffect(() => {
		const tl = gsap.timeline();

		tl.to(".transition-wrapper", {
			opacity: 1,
			y: 0,
			duration: 1.25,
			ease: "power1",
		});
	}, []);

	return (
		<div className="transition-wrapper opacity-0 relative translate-y-5">
			{children}
		</div>
	);
};

export default Template;
