import Image from "next/image";
import { useState } from "react";

function ProjectCard({ project }) {
    const [imgIdx, setImgIdx] = useState(0);
    const links = project.links || {};
    const hasLinks =
        links.live || links.about || links.article || links.documentation;

    return (
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden flex flex-col hover:shadow-md transition-shadow duration-300">
            {project.gallery?.length > 0 && (
                <div className="relative h-44 bg-gray-100 overflow-hidden group">
                    <Image
                        src={project.gallery[imgIdx]}
                        alt={`${project.name} preview`}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    {project.gallery.length > 1 && (
                        <div className="absolute bottom-2 left-0 right-0 flex justify-center gap-1.5 z-10">
                            {project.gallery.map((_, i) => (
                                <button
                                    key={i}
                                    onClick={() => setImgIdx(i)}
                                    aria-label={`Show image ${i + 1}`}
                                    className={`w-1.5 h-1.5 rounded-full transition ${i === imgIdx ? "bg-white" : "bg-white/50"}`}
                                />
                            ))}
                        </div>
                    )}
                    <span className="absolute top-3 left-3 text-xs bg-gray-900/80 text-white px-2 py-0.5 rounded z-10">
                        {project.type}
                    </span>
                </div>
            )}

            <div className="p-5 flex-1 flex flex-col">
                <h3 className="text-base font-bold text-gray-900 leading-tight">
                    {project.name}
                </h3>
                <p className="text-xs text-gray-400 mt-1 mb-3">
                    {project.date}
                </p>

                {/* Outcome: the claim, never clamped */}
                {project.outcome && (
                    <p className="text-sm font-semibold text-gray-900 leading-snug mb-2">
                        {project.outcome}
                    </p>
                )}
                <p className="text-sm text-gray-600 leading-relaxed line-clamp-2">
                    {project.description}
                </p>

                {project.contribution && (
                    <p className="text-sm text-gray-600 leading-relaxed mt-3">
                        <span className="font-semibold text-gray-800">
                            My part:{" "}
                        </span>
                        {project.contribution}
                    </p>
                )}

                {project.tags?.length > 0 && (
                    <div className="flex flex-wrap gap-1.5 mt-4">
                        {project.tags.map((t) => (
                            <span
                                key={t}
                                className="text-xs bg-gray-100 text-gray-600 px-2 py-0.5 rounded-full"
                            >
                                {t}
                            </span>
                        ))}
                    </div>
                )}

                {project.contributors?.length > 1 && (
                    <div className="mt-4">
                        <p className="text-xs font-semibold text-gray-400 mb-1.5">
                            Team
                        </p>
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

                <div className="mt-auto pt-4">
                    <div className="border-t border-gray-100 pt-4 flex gap-x-3 gap-y-1 flex-wrap">
                        {links.about && (
                            <a
                                href={links.about}
                                className="text-sm text-blue-600 hover:text-blue-800 font-medium"
                            >
                                About project
                            </a>
                        )}
                        {links.live && (
                            <a
                                href={links.live}
                                target="_blank"
                                rel="noreferrer"
                                className="text-sm text-blue-600 hover:text-blue-800 font-medium"
                            >
                                Open project ↗
                            </a>
                        )}
                        {links.article && (
                            <a
                                href={links.article}
                                target="_blank"
                                rel="noreferrer"
                                className="text-sm text-blue-400 hover:text-blue-600 font-medium"
                            >
                                Article ↗
                            </a>
                        )}
                        {links.documentation && (
                            <a
                                href={links.documentation}
                                target="_blank"
                                rel="noreferrer"
                                className="text-sm text-blue-400 hover:text-blue-600 font-medium"
                            >
                                Documentation ↗
                            </a>
                        )}
                        {!hasLinks && (
                            <span className="text-xs text-gray-400 italic">
                                Links coming soon
                            </span>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default function ProjectsSection({ projects }) {
    return (
        <section className="max-w-6xl mx-auto px-6 py-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-2 border-l-4 border-gray-400 pl-4">
                Projects &amp; Collaborations
            </h2>
            <p className="text-sm text-gray-500 mb-8 pl-5">
                Internships, freelance work, research and talks.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects.map((project) => (
                    <ProjectCard key={project.id} project={project} />
                ))}
            </div>
        </section>
    );
}
