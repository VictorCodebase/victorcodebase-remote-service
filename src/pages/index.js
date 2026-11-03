import Head from "next/head";
import fs from "fs";
import path from "path";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import dynamic from "next/dynamic";
import ProjectsSection from "../components/ProjectsSection";

const CredentialsModal = dynamic(
    () => import("../components/CredentialsModal"),
    { ssr: false },
);

// Edit these in one place.
const THESIS =
    "Software engineer building for real constraints: low compute, scarce data, unreliable networks.";
// Credentials whose title contains one of these (in this order) are shown first.
const PINNED = ["aws community day", "open source", "azure ai"];

const rank = (c) => {
    const i = PINNED.findIndex((p) => c.title.toLowerCase().includes(p));
    return i === -1 ? PINNED.length : i;
};

export default function Index({ products, credentials, projects }) {
    const [modalOpen, setModalOpen] = useState(false);
    const featured = [...credentials]
        .sort((a, b) => rank(a) - rank(b))
        .slice(0, 3);

    return (
        <div className="min-h-screen bg-gray-50 font-sans text-gray-800">
            <Head>
                <title>Mark Kithinji | Software Engineer</title>
                <meta name="description" content={THESIS} />
            </Head>

            {/* --- Hero: one container width (max-w-6xl) shared with every section below --- */}
            <section className="bg-white border-b border-gray-200">
                <div className="max-w-6xl mx-auto px-6 py-10 flex flex-col sm:flex-row items-start gap-6">
                    <div className="flex-shrink-0 w-20 h-20 rounded-full border-2 border-gray-100 shadow overflow-hidden">
                        <Image
                            src="/images/profile_2.png"
                            alt="Mark Victor Kithinji"
                            width={80}
                            height={80}
                            className="object-cover"
                        />
                    </div>

                    <div className="flex-1 min-w-0">
                        <h1 className="text-3xl font-bold text-gray-900 tracking-tight">
                            Mark Kithinji
                        </h1>
                        <p className="text-lg text-gray-600 mt-1 max-w-2xl leading-snug">
                            {THESIS}
                        </p>

                        <ul className="flex flex-wrap items-center gap-x-5 gap-y-1 mt-3 text-sm text-gray-500">
                            <li>Nairobi, Kenya</li>
                            <li>BSc Computer Technology, JKUAT (2026)</li>
                        </ul>

                        <div className="flex flex-wrap gap-3 mt-5">
                            <a
                                href="/Mark_Victor_Kithinji_Resume.pdf"
                                download
                                className="inline-flex items-center h-9 px-4 bg-blue-600 text-white rounded-md text-sm font-medium hover:bg-blue-700 transition"
                            >
                                Resume
                            </a>
                            <a
                                href="https://www.linkedin.com/in/mark-kithinji-68aa14246/"
                                target="_blank"
                                rel="noreferrer"
                                className="inline-flex items-center h-9 px-4 bg-white border border-gray-300 text-gray-700 rounded-md text-sm font-medium hover:bg-gray-50 transition"
                            >
                                LinkedIn
                            </a>
                            <a
                                href="https://github.com/VictorCodebase"
                                target="_blank"
                                rel="noreferrer"
                                className="inline-flex items-center h-9 px-4 bg-gray-800 text-white rounded-md text-sm font-medium hover:bg-gray-900 transition"
                            >
                                GitHub
                            </a>
                        </div>

                        {/* Credentials: same rhythm as the buttons above; "View all" is the last chip */}
                        <div className="flex flex-wrap gap-2 mt-4">
                            {featured.map((cred) => (
                                <a
                                    key={cred.id}
                                    href={cred.link}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="flex items-center gap-2 text-sm bg-white border border-gray-200 rounded-full pl-2 pr-3.5 py-1.5 text-gray-700 hover:border-blue-300 hover:text-blue-700 transition"
                                >
                                    <span className="relative w-5 h-5 flex-shrink-0">
                                        <Image
                                            src={cred.image}
                                            alt=""
                                            fill
                                            className="object-contain"
                                        />
                                    </span>
                                    {cred.title}
                                </a>
                            ))}
                            <button
                                onClick={() => setModalOpen(true)}
                                className="flex items-center text-sm font-medium text-blue-600 bg-white border border-blue-200 hover:bg-blue-50 rounded-full px-3.5 py-1.5 transition"
                            >
                                View all {credentials.length}
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            {/* --- Projects & Collaborations --- */}
            <ProjectsSection projects={projects} />

            {/* --- Products --- */}
            <main className="max-w-6xl mx-auto px-6 pb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-8 border-l-4 border-blue-600 pl-4">
                    Software Products
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {products.map((product) => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </div>
            </main>

            <footer className="bg-gray-100 py-8 text-center text-gray-500 text-sm">
                <p>
                    &copy; {new Date().getFullYear()} VictorCodebase. All rights
                    reserved.
                </p>
            </footer>

            {modalOpen && (
                <CredentialsModal
                    credentials={credentials}
                    onClose={() => setModalOpen(false)}
                />
            )}
        </div>
    );
}

function ProductCard({ product }) {
    return (
        <div
            className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden flex flex-col hover:shadow-md transition-shadow duration-300"
            id={product.id}
        >
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
                        <span className="text-gray-400 font-medium">
                            {product.name}
                        </span>
                    )}
                    <div className="absolute top-4 right-4 bg-gray-900 text-white text-xs px-2 py-1 rounded z-10">
                        {product.version}
                    </div>
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

            <div className="p-6 pt-14 flex-1 flex flex-col">
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {product.name}
                </h3>

                {/* Outcome: never clamped */}
                {product.outcome && (
                    <p className="text-sm font-semibold text-gray-900 leading-snug mb-2">
                        {product.outcome}
                    </p>
                )}
                <p className="text-gray-600 text-sm mb-4 leading-relaxed line-clamp-2">
                    {product.description}
                </p>

                {product.stack?.length > 0 && (
                    <div className="mb-4">
                        <p className="text-xs font-semibold text-gray-400 mb-2">
                            Stack
                        </p>
                        <div className="flex flex-wrap gap-1.5">
                            {product.stack.map((tech) => (
                                <span
                                    key={tech}
                                    className="text-xs bg-gray-100 text-gray-600 px-2 py-0.5 rounded-full"
                                >
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </div>
                )}

                <div className="mb-5">
                    <p className="text-xs font-semibold text-gray-400 mb-2">
                        Platforms
                    </p>
                    <div className="space-y-2">
                        {product.platforms.map((plat, index) => (
                            <div
                                key={index}
                                className="flex justify-between items-center text-sm"
                            >
                                <span className="font-medium text-gray-700">
                                    {plat.name}
                                </span>
                                {plat.link ? (
                                    <a
                                        href={plat.link}
                                        className="text-blue-600 hover:underline text-xs bg-blue-50 px-2 py-1 rounded"
                                    >
                                        Download
                                    </a>
                                ) : (
                                    <span className="text-gray-400 text-xs italic">
                                        {plat.release_date}
                                    </span>
                                )}
                            </div>
                        ))}
                    </div>
                </div>

                <div className="pt-4 border-t border-gray-100 flex gap-3 mt-auto">
                    {product.links.documentation && (
                        <Link
                            href={product.links.documentation}
                            className="text-sm text-blue-300 hover:text-blue-600 font-medium"
                        >
                            Read Documentation
                        </Link>
                    )}
                    {product.links.article && (
                        <>
                            <span className="text-sm text-gray-300">|</span>
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
                    {product.links.repository &&
                        product.links.repository !== "#" && (
                            <>
                                <span className="text-sm text-gray-300">|</span>
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

export async function getStaticProps() {
    const read = (f) =>
        JSON.parse(fs.readFileSync(path.join(process.cwd(), f)));
    return {
        props: {
            products: read("products.json"),
            credentials: read("certifications.json"),
            projects: read("projects.json"),
        },
    };
}
