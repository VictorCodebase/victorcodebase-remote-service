import { useEffect, useRef } from "react";
import Image from "next/image";

export default function CredentialsModal({ credentials, onClose }) {
	const overlayRef = useRef(null);

	// Close on Escape key
	useEffect(() => {
		const handleKey = (e) => {
			if (e.key === "Escape") onClose();
		};
		window.addEventListener("keydown", handleKey);
		document.body.style.overflow = "hidden";
		return () => {
			window.removeEventListener("keydown", handleKey);
			document.body.style.overflow = "";
		};
	}, [onClose]);

	const handleOverlayClick = (e) => {
		if (e.target === overlayRef.current) onClose();
	};

	const badges = credentials.filter((c) => c.type === "badge");
	const certs = credentials.filter((c) => c.type === "certification");

	return (
		<div
			ref={overlayRef}
			onClick={handleOverlayClick}
			className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4"
		>
			<div className="bg-white rounded-2xl shadow-2xl w-full max-w-3xl max-h-[85vh] flex flex-col">
				{/* Header */}
				<div className="flex items-center justify-between px-6 py-4 border-b border-gray-100">
					<h2 className="text-lg font-bold text-gray-900">Badges & Certifications</h2>
					<button
						onClick={onClose}
						className="w-8 h-8 rounded-full flex items-center justify-center text-gray-400 hover:text-gray-700 hover:bg-gray-100 transition"
						aria-label="Close"
					>
						✕
					</button>
				</div>

				{/* Scrollable content */}
				<div className="overflow-y-auto px-6 py-6 space-y-8">
					{/* Badges */}
					<section>
						<h3 className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-4">Badges</h3>
						<div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
							{badges.map((badge) => (
								<a
									key={badge.id}
									href={badge.link}
									target="_blank"
									rel="noreferrer"
									className="flex flex-col items-center gap-2 p-4 rounded-xl border border-gray-100 hover:border-blue-200 hover:bg-blue-50/40 transition group"
								>
									<div className="relative w-20 h-20">
										<Image src={badge.image} alt={badge.title} fill className="object-contain" />
									</div>
									<span className="text-xs text-center text-gray-600 group-hover:text-blue-700 font-medium leading-tight">
										{badge.title}
									</span>
								</a>
							))}
						</div>
					</section>

					{/* Certifications */}
					<section>
						<h3 className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-4">Certifications</h3>
						<div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
							{certs.map((cert) => (
								<a
									key={cert.id}
									href={cert.link}
									target="_blank"
									rel="noreferrer"
									className="flex gap-3 items-center p-3 rounded-xl border border-gray-100 hover:border-blue-200 hover:bg-blue-50/40 transition group"
								>
									<div className="relative w-16 h-12 flex-shrink-0 rounded overflow-hidden bg-gray-50">
										<Image src={cert.image} alt={cert.title} fill className="object-cover" />
									</div>
									<div className="min-w-0">
										<p className="text-sm font-medium text-gray-800 group-hover:text-blue-700 leading-tight line-clamp-2">
											{cert.title}
										</p>
										{cert.issuer && <p className="text-xs text-gray-400 mt-0.5">{cert.issuer}</p>}
									</div>
								</a>
							))}
						</div>
					</section>
				</div>
			</div>
		</div>
	);
}
