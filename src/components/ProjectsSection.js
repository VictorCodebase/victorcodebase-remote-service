import Image from "next/image";
import { useState } from "react";

function ProjectCard({ project }) {
	const [imgIdx, setImgIdx] = useState(0);

	return (
		<div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden flex flex-col hover:shadow-md transition-shadow duration-300">
			{/* Gallery preview */}
			{project.gallery?.length > 0 && (
				<div className="relative h-44 bg-gray-100 overflow-hidden group">
					<Image
						src={project.gallery[imgIdx]}
						alt={`${project.name} preview`}
						fill
						className="object-cover group-hover:scale-105 transition-transform duration-300"
					/>
					{/* Dot nav if multiple images */}
					{project.gallery.length > 1 && (
						<div className="absolute bottom-2 left-0 right-0 flex justify-center gap-1.5 z-10">
							{project.gallery.map((_, i) => (
								<button
									key={i}
									onClick={() => setImgIdx(i)}
									className={`w-1.5 h-1.5 rounded-full transition ${
										i === imgIdx ? "bg-white" : "bg-white/50"
									}`}
								/>
							))}
						</div>
					)}
					{/* Type badge */}
					<span className="absolute top-3 left-3 text-xs bg-gray-900/80 text-white px-2 py-0.5 rounded z-10">{project.type}</span>
				</div>
			)}

			<div className="p-5 flex-1 flex flex-col">
				<div className="flex items-start justify-between gap-2 mb-1">
					<h3 className="text-base font-bold text-gray-900 leading-tight">{project.name}</h3>
				</div>
				<p className="text-xs text-gray-400 mb-3">{project.date}</p>
				<p className="text-sm text-gray-600 leading-relaxed flex-1 line-clamp-3">{project.description}</p>

				{/* Contributors */}
				{project.contributors?.length > 0 && (
					<div className="mt-4">
						<p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-1.5">Contributors</p>
						<div className="flex flex-wrap gap-x-3 gap-y-1">
							{project.contributors.map((c) => (
								<a
									key={c.name}
									href={c.link}
									target="_blank"
									rel="noreferrer"
									className="text-xs text-blue-500 hover:underline"
								>
									{c.name}
								</a>
							))}
						</div>
					</div>
				)}

				{/* Links */}
				<div className="mt-4 pt-4 border-t border-gray-100 flex gap-3 flex-wrap">
					{project.links?.live && (
						<a
							href={project.links.live}
							target="_blank"
							rel="noreferrer"
							className="text-sm text-blue-600 hover:text-blue-800 font-medium"
						>
							Open Project ↗
						</a>
					)}
					{project.links?.article && (
						<>
							{project.links?.live && <span className="text-sm text-gray-300">|</span>}
							<a
								href={project.links.article}
								target="_blank"
								rel="noreferrer"
								className="text-sm text-blue-300 hover:text-blue-600 font-medium"
							>
								Article
							</a>
						</>
					)}
					{!project.links?.live && !project.links?.article && (
						<span className="text-xs text-gray-400 italic">Links coming soon</span>
					)}
				</div>
			</div>
		</div>
	);
}

export default function ProjectsSection({ projects }) {
	return (
		<section className="max-w-6xl mx-auto px-6 py-12">
			<h2 className="text-2xl font-bold text-gray-900 mb-2 border-l-4 border-gray-400 pl-4">Projects & Collaborations</h2>
			<p className="text-sm text-gray-500 mb-8 pl-5">Freelance work and collaborative builds I&apos;ve been a part of.</p>
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
				{projects.map((project) => (
					<ProjectCard key={project.id} project={project} />
				))}
			</div>
		</section>
	);
}
