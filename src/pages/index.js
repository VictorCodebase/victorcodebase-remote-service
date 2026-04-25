import Head from "next/head";
import fs from "fs";
import path from "path";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import dynamic from "next/dynamic";
import ProjectsSection from "../components/ProjectsSection";

// Lazy-load the modal so it's not in the initial bundle
const CredentialsModal = dynamic(() => import("../components/CredentialsModal"), { ssr: false });

export default function Index({ products, credentials, projects }) {
	const [modalOpen, setModalOpen] = useState(false);

	return (
		<div className="min-h-screen bg-gray-50 font-sans text-gray-800">
			<Head>
				<title>Product Repository</title>
				<meta name="description" content="Software products by VictorCodebase" />
			</Head>

			{/* --- Header / Bio Section --- */}
			<section className="bg-white border-b border-gray-200">
				<div className="max-w-5xl mx-auto px-6 py-8 flex flex-col md:flex-row md:items-start items-center gap-6">
					{/* Profile Image */}
					<div className="flex-shrink-0">
						<div className="w-20 h-20 rounded-full border-2 border-gray-100 shadow overflow-hidden">
							<Image
								src="/images/profile_1.png"
								alt="Mark Victor Kithinji"
								width={80}
								height={80}
								className="object-cover"
							/>
						</div>
					</div>

					{/* Bio + Credentials */}
					<div className="flex-1 min-w-0 text-center md:text-left">
						{/* Name + bio */}
						<h1 className="text-xl font-bold text-gray-800 mb-0.5">VictorCodebase | Product Repository</h1>
						<p className="text-sm text-gray-500 mb-4">Mark Kithinji — Software Developer based in Kenya.</p>

						{/* CTA Buttons */}
						<div className="flex flex-wrap justify-center md:justify-start gap-3 mb-5">
							<a
								href="/Mark_Victor_Kithinji_Resume.pdf"
								download
								className="px-4 py-1.5 bg-blue-600 text-white rounded-md text-sm font-medium hover:bg-blue-700 transition"
							>
								Resume
							</a>
							<a
								href="https://www.linkedin.com/in/mark-kithinji-68aa14246/"
								target="_blank"
								rel="noreferrer"
								className="px-4 py-1.5 bg-white border border-gray-300 text-gray-700 rounded-md text-sm font-medium hover:bg-gray-50 transition"
							>
								LinkedIn
							</a>
							<a
								href="https://github.com/VictorCodebase"
								target="_blank"
								rel="noreferrer"
								className="px-4 py-1.5 bg-gray-800 text-white rounded-md text-sm font-medium hover:bg-gray-900 transition"
							>
								GitHub
							</a>
						</div>

						{/* Credentials Strip */}
						<div>
							<div className="flex items-center gap-2 mb-2">
								<span className="text-xs font-semibold text-gray-400 uppercase tracking-wider">
									Credentials
								</span>
								<button
									onClick={() => setModalOpen(true)}
									className="text-xs text-blue-500 hover:text-blue-700 font-medium"
								>
									View all →
								</button>
							</div>
							<div className="flex flex-wrap gap-2">
								{credentials.slice(0, 3).map((cred) => (
									<a
										key={cred.id}
										href={cred.link}
										target="_blank"
										rel="noreferrer"
										className="flex items-center gap-1.5 text-xs bg-gray-50 border border-gray-200 rounded-full px-2.5 py-1 text-gray-600 hover:border-blue-300 hover:bg-blue-50 hover:text-blue-700 transition"
									>
										<div className="relative w-4 h-4 flex-shrink-0">
											<Image
												src={cred.image}
												alt={cred.title}
												fill
												className="object-contain"
											/>
										</div>
										<span>{cred.title}</span>
									</a>
								))}
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* --- Products Section --- */}
			<main className="max-w-6xl mx-auto px-6 py-12">
				<h2 className="text-2xl font-bold text-gray-900 mb-8 border-l-4 border-blue-600 pl-4">Software Products</h2>

				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
					{products.map((product) => (
						<ProductCard key={product.id} product={product} />
					))}
				</div>
			</main>

			{/* --- Projects & Collaborations --- */}
			<div className="border-t border-gray-200">
				<ProjectsSection projects={projects} />
			</div>

			{/* Footer */}
			<footer className="bg-gray-100 py-8 text-center text-gray-500 text-sm">
				<p>&copy; {new Date().getFullYear()} VictorCodebase. All rights reserved.</p>
			</footer>

			{/* Credentials Modal */}
			{modalOpen && <CredentialsModal credentials={credentials} onClose={() => setModalOpen(false)} />}
		</div>
	);
}

// --- Component: Product Card ---
function ProductCard({ product }) {
	return (
		<div
			className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden flex flex-col hover:shadow-md transition-shadow duration-300"
			id={product.id}
		>
			{/* Cover + Logo */}
			<div className="relative">
				<div className="h-48 bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center relative group overflow-hidden">
					{product.images?.cover ? (
						<Image
							src={product.images.cover}
							alt={`${product.name} cover`}
							fill
							className="object-cover group-hover:scale-105 transition-transform duration-300"
						/>
					) : (
						<span className="text-gray-400 font-medium">{product.name}</span>
					)}
					<div className="absolute top-4 right-4 bg-gray-900 text-white text-xs px-2 py-1 rounded z-10">{product.version}</div>
				</div>

				{product.images?.logo && (
					<div className="absolute -bottom-10 left-6 w-20 h-20 bg-white rounded-full shadow-lg border-4 border-white flex items-center justify-center z-20">
						<Image
							src={product.images.logo}
							alt={`${product.name} logo`}
							width={64}
							height={64}
							className="object-contain rounded-full"
						/>
					</div>
				)}
			</div>

			{/* Content */}
			<div className="p-6 pt-14 flex-1 flex flex-col">
				<div className="mb-3">
					<h3 className="text-xl font-bold text-gray-900">{product.name}</h3>
				</div>

				{/* Description — clamped to 2 lines */}
				<p className="text-gray-600 text-sm mb-4 leading-relaxed line-clamp-2">{product.description}</p>

				{/* Stack */}
				{product.stack?.length > 0 && (
					<div className="mb-4">
						<p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">Stack</p>
						<div className="flex flex-wrap gap-1.5">
							{product.stack.map((tech) => (
								<span key={tech} className="text-xs bg-gray-100 text-gray-600 px-2 py-0.5 rounded-full">
									{tech}
								</span>
							))}
						</div>
					</div>
				)}

				{/* Platforms */}
				<div className="mb-5">
					<p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">Platforms</p>
					<div className="space-y-2">
						{product.platforms.map((plat, index) => (
							<div key={index} className="flex justify-between items-center text-sm">
								<span className="font-medium text-gray-700">{plat.name}</span>
								{plat.link ? (
									<a
										href={plat.link}
										className="text-blue-600 hover:underline text-xs bg-blue-50 px-2 py-1 rounded"
									>
										Download
									</a>
								) : (
									<span className="text-gray-400 text-xs italic">{plat.release_date}</span>
								)}
							</div>
						))}
					</div>
				</div>

				{/* Action Links */}
				<div className="pt-4 border-t border-gray-100 flex gap-3 mt-auto">
					{product.links.documentation && (
						<Link href={product.links.documentation} className="text-sm text-blue-300 hover:text-blue-600 font-medium">
							Read Documentation
						</Link>
					)}
					{product.links.article && (
						<>
							<p className="text-sm font-medium">|</p>
							<a
								href={product.links.article}
								target="_blank"
								rel="noreferrer"
								className="text-sm text-blue-300 hover:text-blue-600 font-medium"
							>
								Article
							</a>
						</>
					)}
					{product.links.repository && product.links.repository !== "#" && (
						<>
							<p className="text-sm font-medium">|</p>
							<a
								href={product.links.repository}
								target="_blank"
								rel="noreferrer"
								className="text-sm text-blue-300 hover:text-blue-600 font-medium"
							>
								GitHub
							</a>
						</>
					)}
				</div>
			</div>
		</div>
	);
}

// --- Data Fetching ---
export async function getStaticProps() {
	const productsPath = path.join(process.cwd(), "products.json");
	const products = JSON.parse(fs.readFileSync(productsPath));

	const credentialsPath = path.join(process.cwd(), "certifications.json");
	const credentials = JSON.parse(fs.readFileSync(credentialsPath));

	const projectsPath = path.join(process.cwd(), "projects.json");
	const projects = JSON.parse(fs.readFileSync(projectsPath));

	return {
		props: { products, credentials, projects },
	};
}
