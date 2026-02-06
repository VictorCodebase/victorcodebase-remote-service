import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";

export default function BudgetAuditDocs() {
	const [activeSection, setActiveSection] = useState("");

	// Simple scroll spy to highlight active section in sidebar
	useEffect(() => {
		const handleScroll = () => {
			const sections = document.querySelectorAll("section[id]");
			let current = "";
			sections.forEach((section) => {
				const sectionTop = section.offsetTop;
				if (scrollY >= sectionTop - 150) {
					current = section.getAttribute("id");
				}
			});
			setActiveSection(current);
		};
		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	return (
		<div className="min-h-screen bg-gray-50 text-gray-800 font-sans selection:bg-blue-100">
			<Head>
				<title>MultiViewer | Documentation</title>
				<meta name="description" content="User guide and documentation for MultiViewer." />
			</Head>
		</div>
	);
}
