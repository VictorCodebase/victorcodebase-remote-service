import Head from "next/head";
import fs from "fs";
import path from "path";
import Link from "next/link";

export default function Index({ products }) {
	return (
		<div className="min-h-screen bg-gray-50 font-sans text-gray-800">
			<Head>
				<title>VictorCodebase | Product Repository</title>
				<meta name="description" content="Software products by VictorCodebase" />
			</Head>

			{/* --- Header / Bio Section --- */}
			<section className="bg-white border-b border-gray-200">
				<div className="max-w-5xl mx-auto px-6 py-12 md:py-20 flex flex-col md:flex-row items-center gap-8">
					{/* Profile Image Placeholder */}
					<div className="flex-shrink-0">
						<div className="w-32 h-32 md:w-40 md:h-40 bg-gray-200 rounded-full border-4 border-gray-100 shadow-inner flex items-center justify-center text-gray-400">
							<span className="text-xs">Profile Img</span>
						</div>
					</div>

					{/* Bio Text */}
					<div className="text-center md:text-left flex-1">
						<h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">VictorCodebase Repository</h1>
						<p className="text-lg text-gray-600 mb-6 leading-relaxed max-w-2xl">
							Hello, I am Mark (Victor) Kithinji, a software developer in Kenya. On my leisure time, i work on projects that make my life, and that of those I hold dear, easier in one way or the other.
							<br /> Here is a repository of all products, should you find any useful, please consider staring it on GitHub!
						</p>

						{/* CTA Buttons */}
						<div className="flex flex-wrap justify-center md:justify-start gap-4">
							<button className="px-6 py-2 bg-blue-600 text-white rounded-md font-medium hover:bg-blue-700 transition">
								Download Resume
							</button>
							<a
								href="https://linkedin.com"
								target="_blank"
								rel="noreferrer"
								className="px-6 py-2 bg-white border border-gray-300 text-gray-700 rounded-md font-medium hover:bg-gray-50 transition"
							>
								LinkedIn
							</a>
							<a
								href="https://github.com"
								target="_blank"
								rel="noreferrer"
								className="px-6 py-2 bg-gray-800 text-white rounded-md font-medium hover:bg-gray-900 transition"
							>
								GitHub
							</a>
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

			{/* Footer */}
			<footer className="bg-gray-100 py-8 text-center text-gray-500 text-sm">
				<p>&copy; {new Date().getFullYear()} VictorCodebase. All rights reserved.</p>
			</footer>
		</div>
	);
}

// --- Component: Product Card ---
function ProductCard({ product }) {
	return (
		<div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden flex flex-col hover:shadow-md transition-shadow duration-300">
			{/* Image Placeholder area */}
			<div className="h-48 bg-gray-100 flex items-center justify-center border-b border-gray-100 relative group">
				<span className="text-gray-400 font-medium"></span>
				{/* Version Badge */}
				<div className="absolute top-4 right-4 bg-gray-900 text-white text-xs px-2 py-1 rounded">{product.version}</div>
			</div>

			<div className="p-6 flex-1 flex flex-col">
				{/* Header */}
				<div className="mb-4">
					<h3 className="text-xl font-bold text-gray-900">{product.name}</h3>
				</div>

				{/* Description */}
				<p className="text-gray-600 text-sm mb-6 flex-1 leading-relaxed">{product.description}</p>

				{/* Platforms */}
				<div className="mb-6">
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
				<div className="pt-4 border-t border-gray-100 flex gap-3">
					{product.links.documentation && (
						<Link href={product.links.documentation} className="text-sm text-gray-600 hover:text-blue-600 font-medium">
							Docs
						</Link>
					)}
					{product.links.article && (
						<a
							href={product.links.article}
							target="_blank"
							rel="noreferrer"
							className="text-sm text-gray-600 hover:text-blue-600 font-medium"
						>
							Article
						</a>
					)}
				</div>
			</div>
		</div>
	);
}

// --- Data Fetching ---
export async function getStaticProps() {
	// Read the JSON file from the root directory
	const filePath = path.join(process.cwd(), "products.json");
	const jsonData = fs.readFileSync(filePath);
	const products = JSON.parse(jsonData);

	return {
		props: {
			products,
		},
	};
}
