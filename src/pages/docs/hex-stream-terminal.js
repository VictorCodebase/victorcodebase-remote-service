import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";

// NavLink helper (same pattern as Budget Audit docs)
function NavLink({ id, active, children }) {
	return (
		<a
			href={`#${id}`}
			className={`block text-sm px-3 py-1.5 rounded transition-colors ${
				active === id ? "bg-blue-50 text-blue-700 font-medium" : "text-gray-600 hover:text-gray-900 hover:bg-gray-100"
			}`}
		>
			{children}
		</a>
	);
}

// Inline code style
function Code({ children }) {
	return <code className="font-mono text-sm bg-gray-100 text-gray-800 px-1.5 py-0.5 rounded">{children}</code>;
}

// Code block
function CodeBlock({ children, lang = "" }) {
	return (
		<pre className="bg-gray-900 text-gray-100 rounded-lg p-4 overflow-x-auto text-sm font-mono leading-relaxed">
			<code>{children}</code>
		</pre>
	);
}

// Command card
function CommandCard({ name, hexId, args, signature, example, description }) {
	return (
		<div className="border border-gray-200 rounded-lg p-5 space-y-3 bg-white hover:border-blue-300 transition-colors">
			<div className="flex items-center gap-3 flex-wrap">
				<span className="font-mono font-bold text-blue-700 text-base">{name}</span>
				<span className="font-mono text-xs bg-gray-100 text-gray-500 px-2 py-0.5 rounded">{hexId}</span>
				<span className="text-xs text-gray-400">
					{args} arg{args !== 1 ? "s" : ""}
				</span>
			</div>
			<p className="text-gray-600 text-sm">{description}</p>
			<div>
				<p className="text-xs uppercase font-bold text-gray-400 mb-1 tracking-wider">Signature</p>
				<Code>
					{name} {signature.join(" ")}
				</Code>
			</div>
			<div>
				<p className="text-xs uppercase font-bold text-gray-400 mb-1 tracking-wider">Example</p>
				<CodeBlock>{example}</CodeBlock>
			</div>
		</div>
	);
}

export default function HexStreamTerminalDocs() {
	const [activeSection, setActiveSection] = useState("");

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

	const copyLink = (id) => {
		navigator.clipboard.writeText(window.location.origin + window.location.pathname + "#" + id);
	};

	return (
		<div className="min-h-screen bg-gray-50 text-gray-800 font-sans selection:bg-blue-100">
			<Head>
				<title>Hex Stream Terminal | Documentation</title>
				<meta name="description" content="User guide and documentation for the Custom Hex Stream Terminal." />
			</Head>

			{/* Header */}
			<header className="bg-white border-b border-gray-200 sticky top-0 z-50">
				<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
					<div className="flex items-center gap-3">
						<Link href="/" className="font-bold text-xl text-blue-600 hover:opacity-80">
							VictorCodebase
						</Link>
						<span className="text-gray-300">/</span>
						<h1 className="font-semibold text-gray-700">Hex Stream Terminal Docs</h1>
					</div>
					<span className="text-xs font-mono bg-gray-100 px-2 py-1 rounded text-gray-500">v1.0.0</span>
				</div>
			</header>

			<div className="max-w-7xl mx-auto px-6 py-12 flex flex-col lg:flex-row gap-12">
				{/* Sidebar */}
				<aside className="hidden lg:block w-64 flex-shrink-0">
					<nav className="sticky top-24 space-y-1">
						<p className="uppercase text-xs font-bold text-gray-400 mb-4 tracking-wider">Contents</p>
						<NavLink id="overview" active={activeSection}>
							Overview
						</NavLink>
						<NavLink id="prerequisites" active={activeSection}>
							Prerequisites & Setup
						</NavLink>
						<NavLink id="running" active={activeSection}>
							Running the Terminal
						</NavLink>
						<NavLink id="hex-mode" active={activeSection}>
							Hex Mode
						</NavLink>
						<NavLink id="hex-anatomy" active={activeSection}>
							Understanding the Hex Stream
						</NavLink>
						<NavLink id="readable-mode" active={activeSection}>
							Readable (String) Mode
						</NavLink>
						<NavLink id="commands" active={activeSection}>
							Command Reference
						</NavLink>
						<NavLink id="color-modes" active={activeSection}>
							Color Modes
						</NavLink>
						<NavLink id="pipelines" active={activeSection}>
							How It Works (Pipelines)
						</NavLink>
						<NavLink id="examples" active={activeSection}>
							Full Examples
						</NavLink>
						<NavLink id="troubleshooting" active={activeSection}>
							Troubleshooting & FAQ
						</NavLink>
						<NavLink id="glossary" active={activeSection}>
							Glossary
						</NavLink>
					</nav>
				</aside>

				{/* Main content */}
				<main className="flex-1 max-w-4xl space-y-16">
					{/* Intro */}
					<div className="space-y-4">
						<h1 className="text-4xl font-extrabold text-gray-900 tracking-tight">
							Getting Started with Hex Stream Terminal
						</h1>
						<p className="text-lg text-gray-600 leading-relaxed">
							Welcome to the Custom Terminal, a fun and extensible Python terminal that accepts both raw hex streams
							and human-readable string commands. This guide will get you cloned, set up, and sending your first
							commands.
						</p>
						<div className="relative w-full my-6 h-84 bg-gray-200 rounded-lg border-2 border-dashed border-gray-300 flex items-center justify-center overflow-hidden text-gray-500">
							<Image
								src="/custom-terminal/terminal_img_banner_02.png"
								alt="Hex Stream Terminal banner"
								fill
								className="object-cover rounded-lg p-2"
							/>
						</div>
						<div className="flex gap-4 flex-wrap">
							<a
								href="https://github.com/VictorCodebase/CustomTerminal"
								target="_blank"
								rel="noopener noreferrer"
								className="inline-flex items-center gap-2 bg-gray-900 hover:bg-gray-700 text-white text-sm font-medium px-4 py-2 rounded-lg transition-colors"
							>
								<svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
									<path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
								</svg>
								View on GitHub
							</a>
						</div>
					</div>

					{/* OVERVIEW */}
					<section id="overview" className="scroll-mt-28 space-y-6 py-4">
						<div className="flex items-center justify-between">
							<h2 className="text-2xl font-bold text-gray-900 border-b pb-2 flex-1">A. Overview</h2>
							<button
								onClick={() => copyLink("overview")}
								className="text-gray-400 hover:text-blue-600 transition-colors text-sm px-3 py-1 rounded hover:bg-gray-100"
								title="Copy link"
							>
								🔗 Copy Link
							</button>
						</div>

						<p className="text-gray-600">
							The Custom Terminal is a Python-based terminal emulator with two operating modes. It was originally
							designed to interpret raw <strong>hex streams</strong> as drawing commands, and has since been extended
							to also accept <strong>human-readable string commands</strong> via the <Code>--readable</Code> flag.
							Both modes ultimately resolve to the same hex execution pipeline under the hood, ensuring consistent,
							validated behaviour.
						</p>

						<div className="grid sm:grid-cols-2 gap-4">
							<div className="bg-gray-900 text-orange-400 rounded-lg p-4 font-mono text-sm space-y-1">
								<p className="text-gray-400 text-xs mb-2"># Hex mode (default)</p>
								<p>0x01 0x03 0x50 0x18 0x01 0xFF</p>
							</div>
							<div className="bg-gray-900 text-stone-300 rounded-lg p-4 font-mono text-sm space-y-1">
								<p className="text-gray-400 text-xs mb-2"># Readable mode (--readable)</p>
								<p>screen_setup 80 24 16colors</p>
							</div>
						</div>

						<p className="text-gray-600">
							Both examples above are equivalent: they set up an 80×24 screen in 16-color mode. The terminal
							translates readable commands into hex before executing them.
						</p>
					</section>

					{/* PREREQUISITES */}
					<section id="prerequisites" className="scroll-mt-28 space-y-6 py-4">
						<div className="flex items-center justify-between">
							<h2 className="text-2xl font-bold text-gray-900 border-b pb-2 flex-1">B. Prerequisites & Setup</h2>
							<button
								onClick={() => copyLink("prerequisites")}
								className="text-gray-400 hover:text-blue-600 transition-colors text-sm px-3 py-1 rounded hover:bg-gray-100"
								title="Copy link"
							>
								🔗 Copy Link
							</button>
						</div>

						<div className="space-y-4">
							<h3 className="font-semibold text-xl text-gray-800">1. Requirements</h3>
							<ul className="list-disc pl-5 space-y-2 text-gray-600">
								<li>
									<strong>Python 3.8 or higher</strong>: Download from{" "}
									<a
										href="https://www.python.org/downloads/"
										className="text-blue-600 underline"
										target="_blank"
										rel="noopener noreferrer"
									>
										python.org
									</a>
									.
								</li>
								<li>
									<strong>argparse</strong>: standard library, included with Python.
								</li>
								<li>
									<strong>sys</strong>: standard library, included with Python.
								</li>
								<li>
									A terminal emulator: <Code>bash</Code>, <Code>zsh</Code>, <Code>cmd</Code>, or{" "}
									<Code>PowerShell</Code>.
								</li>
							</ul>

							<div className="bg-orange-50 border-l-4 border-orange-700 p-4 rounded-r">
								<h4 className="font-bold text-orange-800 text-sm uppercase mb-1">No pip installs needed</h4>
								<p className="text-orange-900 text-sm">
									This project uses only Python standard library modules. No <Code>pip install</Code> step
									is required. As long as you have Python 3.8+, you're ready to go.
								</p>
							</div>

							<h3 className="font-semibold text-xl text-gray-800 mt-6">2. Clone the Repository</h3>
							<CodeBlock>{`git clone https://github.com/VictorCodebase/CustomTerminal.git
cd CustomTerminal`}</CodeBlock>

							<p className="text-gray-600">
								That's it. No build step, no virtual environment required. The project runs directly with
								Python.
							</p>
						</div>
					</section>

					{/* RUNNING */}
					<section id="running" className="scroll-mt-28 space-y-6 py-4">
						<div className="flex items-center justify-between">
							<h2 className="text-2xl font-bold text-gray-900 border-b pb-2 flex-1">C. Running the Terminal</h2>
							<button
								onClick={() => copyLink("running")}
								className="text-gray-400 hover:text-blue-600 transition-colors text-sm px-3 py-1 rounded hover:bg-gray-100"
								title="Copy link"
							>
								🔗 Copy Link
							</button>
						</div>

						<p className="text-gray-600">
							The entry point is <Code>terminal.py</Code>. Run it with or without the <Code>--readable</Code> flag
							depending on which mode you want.
						</p>

						<div className="space-y-4">
							<div>
								<p className="text-sm font-semibold text-gray-700 mb-2">Hex mode (default):</p>
								<CodeBlock>python terminal.py</CodeBlock>
							</div>
							<div>
								<p className="text-sm font-semibold text-gray-700 mb-2">Human-readable string mode:</p>
								<CodeBlock>python terminal.py --readable</CodeBlock>
							</div>
						</div>

						<p className="text-gray-600">
							Once running, the terminal will wait for your input. Type a command (or paste a hex stream) and press
							Enter to execute it.
						</p>
					</section>

					{/* HEX MODE */}
					<section id="hex-mode" className="scroll-mt-28 space-y-6 py-4">
						<div className="flex items-center justify-between">
							<h2 className="text-2xl font-bold text-gray-900 border-b pb-2 flex-1">D. Hex Mode</h2>
							<button
								onClick={() => copyLink("hex-mode")}
								className="text-gray-400 hover:text-blue-600 transition-colors text-sm px-3 py-1 rounded hover:bg-gray-100"
								title="Copy link"
							>
								🔗 Copy Link
							</button>
						</div>

						<p className="text-gray-600">
							In hex mode (the default), you input raw hex byte streams separated by spaces or commas. The terminal
							parses each stream, validates it, and executes the corresponding commands.
						</p>

						<div className="bg-orange-50 border-l-4 border-orange-700 p-4 rounded-r">
							<h4 className="font-bold text-orange-800 text-sm uppercase mb-1">Stream Structure</h4>
							<p className="text-orange-900 text-sm">
								Every valid command stream begins with a <strong>command byte</strong> (<Code>0x01</Code>–
								<Code>0x08</Code>), followed by the correct number of argument bytes, and ends with{" "}
								<Code>0xFF</Code> (end-of-file marker). Multiple commands can be chained in a single input.
							</p>
						</div>

						<div>
							<p className="text-sm font-semibold text-gray-700 mb-2">
								Example: set up screen then draw a character:
							</p>
							<CodeBlock>{`0x01 0x03 0x50 0x18 0x01 0xFF 0x02 0x04 0x00 0x00 0x07 0x41 0xFF`}</CodeBlock>
							<p className="text-gray-500 text-sm mt-2">
								This sets up an 80×24 screen in 16-color mode, then draws the character <Code>A</Code> in white
								at position (0, 0).
							</p>
						</div>
					</section>

					{/* HEX STREAM ANATOMY */}
					<section id="hex-anatomy" className="scroll-mt-28 space-y-6 py-4">
						<div className="flex items-center justify-between">
							<h2 className="text-2xl font-bold text-gray-900 border-b pb-2 flex-1">
								E. Understanding the Hex Stream
							</h2>
							<button
								onClick={() => copyLink("hex-anatomy")}
								className="text-gray-400 hover:text-blue-600 transition-colors text-sm px-3 py-1 rounded hover:bg-gray-100"
								title="Copy link"
							>
								🔗 Copy Link
							</button>
						</div>

						<p className="text-gray-600">
							Every hex stream follows a strict but simple structure. Once you understand the anatomy of a single
							command stream, you can read and write any input the terminal accepts.
						</p>

						{/* Anatomy diagram */}
						<div>
							<h3 className="font-semibold text-xl text-gray-800 mb-4">Stream Anatomy</h3>
							<p className="text-gray-600 mb-4">
								A single command stream is made up of three parts, in order, with the full input terminated by a
								final <Code>0xFF</Code> end-of-file byte:
							</p>

							{/* Visual byte layout */}
							<div className="overflow-x-auto">
								<div className="flex items-stretch gap-1 min-w-max font-mono text-xs mb-2">
									<div className="flex flex-col items-center">
										<div className="bg-orange-700 text-white px-3 py-2 rounded font-bold text-center min-w-[72px]">
											0x01
										</div>
										<span className="text-orange-800 font-semibold mt-1 text-center text-[11px]">
											Command ID
										</span>
									</div>
									<div className="flex flex-col items-center">
										<div className="bg-stone-700 text-white px-3 py-2 rounded font-bold text-center min-w-[72px]">
											0x03
										</div>
										<span className="text-stone-700 font-semibold mt-1 text-center text-[11px]">
											Arg Length
										</span>
									</div>
									<div className="flex flex-col items-center">
										<div className="bg-blue-500 text-white px-3 py-2 rounded font-bold text-center min-w-[72px]">
											0x50
										</div>
										<span className="text-blue-700 font-semibold mt-1 text-center text-[11px]">
											Arg 1
										</span>
									</div>
									<div className="flex flex-col items-center">
										<div className="bg-blue-500 text-white px-3 py-2 rounded font-bold text-center min-w-[72px]">
											0x18
										</div>
										<span className="text-blue-700 font-semibold mt-1 text-center text-[11px]">
											Arg 2
										</span>
									</div>
									<div className="flex flex-col items-center">
										<div className="bg-blue-500 text-white px-3 py-2 rounded font-bold text-center min-w-[72px]">
											0x01
										</div>
										<span className="text-blue-700 font-semibold mt-1 text-center text-[11px]">
											Arg 3
										</span>
									</div>
									<div className="flex flex-col items-center">
										<div className="bg-gray-400 text-white px-3 py-2 rounded font-bold text-center min-w-[72px]">
											↓
										</div>
										<span className="text-gray-500 font-semibold mt-1 text-center text-[11px]">
											next cmd or…
										</span>
									</div>
									<div className="flex flex-col items-center">
										<div className="bg-rose-800 text-white px-3 py-2 rounded font-bold text-center min-w-[72px]">
											0xFF
										</div>
										<span className="text-rose-800 font-semibold mt-1 text-center text-[11px]">
											End of File
										</span>
									</div>
								</div>
							</div>
							<p className="text-gray-500 text-xs mt-1 italic">
								Example: screen_setup 80 24 16colors as a single-command stream
							</p>
						</div>

						{/* The three byte roles explained */}
						<div className="space-y-5">
							<div className="border border-orange-200 bg-orange-50 rounded-lg p-4 space-y-2">
								<div className="flex items-center gap-2">
									<span className="font-mono font-bold text-orange-800 bg-orange-100 px-2 py-0.5 rounded text-sm">
										Byte 1 — Command ID
									</span>
								</div>
								<p className="text-gray-700 text-sm">
									Always the first byte in a command stream. Ranges from <Code>0x01</Code> to{" "}
									<Code>0x08</Code>, each mapping to one of the eight available commands. The terminal
									uses this byte to know which command to run and what to expect in the bytes that follow.
								</p>
								<div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mt-2 font-mono text-xs">
									{[
										["0x01", "screen_setup"],
										["0x02", "draw_char"],
										["0x03", "draw_line"],
										["0x04", "render_text"],
										["0x05", "cursor_move"],
										["0x06", "draw_at_cursor"],
										["0x07", "clear_screen"],
										["0x08", "render"],
									].map(([hex, name]) => (
										<div
											key={hex}
											className="flex items-center gap-1.5 bg-white border border-orange-200 rounded px-2 py-1"
										>
											<span className="text-orange-700 font-bold">{hex}</span>
											<span className="text-gray-600 text-[11px]">{name}</span>
										</div>
									))}
								</div>
							</div>

							<div className="border border-stone-300 bg-stone-50 rounded-lg p-4 space-y-2">
								<div className="flex items-center gap-2">
									<span className="font-mono font-bold text-stone-700 bg-stone-200 px-2 py-0.5 rounded text-sm">
										Byte 2 — Argument Length
									</span>
								</div>
								<p className="text-gray-700 text-sm">
									The second byte declares how many instruction bytes follow. The terminal reads exactly
									this many bytes as the command's arguments, no more and no less. This is how the parser
									knows where one command ends and the next begins, enabling reliable command chaining.
								</p>
								<p className="text-gray-700 text-sm">
									Some commands have a <strong>fixed, strict length</strong> requirement (e.g.{" "}
									<Code>screen_setup</Code> always requires exactly 3 argument bytes). Others have a{" "}
									<strong>minimum length</strong>. For example, <Code>draw_line</Code> requires at least
									enough bytes to encode the start position (x1, y1), end position (x2, y2), color, and one character. <Code>render_text</Code> accepts up to 99 argument
									bytes, allowing long text strings.
								</p>
								<div className="overflow-x-auto mt-2">
									<table className="text-xs w-full border-collapse">
										<thead>
											<tr className="bg-stone-100">
												<th className="text-left px-3 py-2 text-stone-700 font-bold">
													Command
												</th>
												<th className="text-left px-3 py-2 text-stone-700 font-bold">
													Length type
												</th>
												<th className="text-left px-3 py-2 text-stone-700 font-bold">
													Arg count
												</th>
											</tr>
										</thead>
										<tbody className="font-mono">
											{[
												["screen_setup", "strict", "3"],
												["draw_char", "strict", "4"],
												["draw_line", "strict", "6"],
												["render_text", "variable", "3 + text length (max 99)"],
												["cursor_move", "strict", "2"],
												["draw_at_cursor", "strict", "2"],
												["clear_screen", "strict", "0"],
												["render", "strict", "0"],
											].map(([cmd, type, count]) => (
												<tr key={cmd} className="border-t border-stone-100 bg-white">
													<td className="px-3 py-1.5 text-blue-700">{cmd}</td>
													<td className="px-3 py-1.5 text-gray-600">{type}</td>
													<td className="px-3 py-1.5 text-gray-600">{count}</td>
												</tr>
											))}
										</tbody>
									</table>
								</div>
							</div>

							<div className="border border-orange-100 bg-orange-50 rounded-lg p-4 space-y-2">
								<div className="flex items-center gap-2">
									<span className="font-mono font-bold text-orange-800 bg-orange-100 px-2 py-0.5 rounded text-sm">
										Bytes 3…N — Instruction Bytes
									</span>
								</div>
								<p className="text-gray-700 text-sm">
									The remaining bytes carry the actual arguments, in the exact order defined by the
									command's signature. Each byte is interpreted as an ASCII character value and converted
									accordingly: <Code>0x50</Code> becomes the integer <Code>80</Code>, <Code>0x41</Code>{" "}
									becomes the character <Code>A</Code>, and <Code>0x07</Code> becomes the color index for{" "}
									<Code>white</Code> in the current color mode. The expected type (int, string, or char)
									is determined by the command's signature for that argument position.
								</p>
							</div>

							<div className="border border-rose-200 bg-rose-50 rounded-lg p-4 space-y-2">
								<div className="flex items-center gap-2">
									<span className="font-mono font-bold text-rose-800 bg-rose-100 px-2 py-0.5 rounded text-sm">
										Final Byte — End of File (0xFF)
									</span>
								</div>
								<p className="text-gray-700 text-sm">
									The entire input must be terminated with a single <Code>0xFF</Code> byte. This signals
									to the parser that there are no further commands to read. A missing <Code>0xFF</Code>{" "}
									will cause a validation error.
								</p>
							</div>
						</div>

						{/* Command chaining */}
						<div>
							<h3 className="font-semibold text-xl text-gray-800 mb-3">Command Chaining</h3>
							<p className="text-gray-600 mb-3">
								Multiple commands can be chained together in a single input. After the terminal has consumed the
								argument bytes declared by a command's length byte, it expects the very next byte to be another
								command ID (or the <Code>0xFF</Code> end-of-file marker). The argument length byte makes this
								unambiguous: the parser always knows exactly how many bytes belong to the current command before
								it looks ahead.
							</p>
							<div className="overflow-x-auto">
								<div className="flex items-stretch gap-1 min-w-max font-mono text-xs mb-2">
									{[
										{ byte: "0x01", label: "cmd: screen_setup", color: "bg-orange-700" },
										{ byte: "0x03", label: "len: 3", color: "bg-stone-700" },
										{ byte: "0x50", label: "width=80", color: "bg-blue-500" },
										{ byte: "0x18", label: "height=24", color: "bg-blue-500" },
										{ byte: "0x01", label: "16colors", color: "bg-blue-500" },
										{ byte: "0x02", label: "cmd: draw_char", color: "bg-orange-700" },
										{ byte: "0x04", label: "len: 4", color: "bg-stone-700" },
										{ byte: "0x00", label: "x=0", color: "bg-blue-500" },
										{ byte: "0x00", label: "y=0", color: "bg-blue-500" },
										{ byte: "0x07", label: "white", color: "bg-blue-500" },
										{ byte: "0x41", label: "char='A'", color: "bg-blue-500" },
										{ byte: "0xFF", label: "EOF", color: "bg-rose-800" },
									].map((b, i) => (
										<div key={i} className="flex flex-col items-center">
											<div
												className={`${b.color} text-white px-2 py-2 rounded font-bold text-center min-w-[56px]`}
											>
												{b.byte}
											</div>
											<span className="text-gray-500 mt-1 text-center text-[10px] max-w-[56px] leading-tight">
												{b.label}
											</span>
										</div>
									))}
								</div>
							</div>
							<p className="text-gray-500 text-xs mt-1 italic">
								Two chained commands: screen_setup then draw_char, terminated by 0xFF
							</p>
							<p className="text-gray-600 mt-4">
								Error handling is applied independently at each command boundary. If an argument count is wrong
								or an unknown command byte is encountered, the error is caught and reported precisely for that
								command, without corrupting the interpretation of surrounding commands in the chain.
							</p>
						</div>

						{/* Worked example streams */}
						<div>
							<h3 className="font-semibold text-xl text-gray-800 mb-4">Worked Example Streams</h3>
							<p className="text-gray-600 mb-6">
								The streams below are real examples you can try. Each is broken down byte by byte so you can
								follow exactly how the parser reads them. Paste any of the raw streams into the terminal to see
								them in action.
							</p>

							{/* Stream 1 */}
							<div className="space-y-3 mb-10">
								<div className="flex items-center gap-3">
									<span className="bg-gray-900 text-orange-400 font-mono text-xs px-2 py-1 rounded">
										Stream 1
									</span>
									<h4 className="font-semibold text-gray-800">Setup → draw character → draw line</h4>
								</div>
								<CodeBlock>{`0x01 0x03 0x50 0x18 0x01  0x02 0x04 0x00 0x00 0x07 0x41  0x03 0x06 0x3C 0x02 0x03 0x0A 0x07 0x2A  0xFF`}</CodeBlock>
								<div className="overflow-x-auto">
									<table className="text-xs w-full border-collapse">
										<thead>
											<tr className="bg-gray-100">
												<th className="text-left px-3 py-2 text-gray-600 font-bold">
													Bytes
												</th>
												<th className="text-left px-3 py-2 text-gray-600 font-bold">
													Role
												</th>
												<th className="text-left px-3 py-2 text-gray-600 font-bold">
													Interpretation
												</th>
											</tr>
										</thead>
										<tbody>
											{[
												["0x01", "Command ID", "screen_setup"],
												["0x03", "Arg length", "3 argument bytes follow"],
												["0x50", "Arg 1 — width", "0x50 = 80 → screen width: 80"],
												["0x18", "Arg 2 — height", "0x18 = 24 → screen height: 24"],
												["0x01", "Arg 3 — color mode", "0x01 → 16colors"],
												["0x02", "Command ID", "draw_char"],
												["0x04", "Arg length", "4 argument bytes follow"],
												["0x00", "Arg 1 — x", "0x00 = 0"],
												["0x00", "Arg 2 — y", "0x00 = 0"],
												["0x07", "Arg 3 — color", "0x07 → white (16colors index)"],
												["0x41", "Arg 4 — char", "0x41 = ASCII 'A'"],
												["0x03", "Command ID", "draw_line"],
												["0x06", "Arg length", "6 argument bytes follow"],
												["0x3C", "Arg 1 — x1", "0x3C = 60"],
												["0x02", "Arg 2 — y1", "0x02 = 2"],
												["0x03", "Arg 3 — x2", "0x03 = 3"],
												["0x0A", "Arg 4 — y2", "0x0A = 10"],
												["0x07", "Arg 5 — color", "0x07 → white"],
												["0x2A", "Arg 6 — char", "0x2A = ASCII '*'"],
												["0xFF", "End of File", "Stream complete"],
											].map(([bytes, role, interp], i) => (
												<tr
													key={i}
													className={`border-t border-gray-100 ${i % 2 === 0 ? "bg-white" : "bg-gray-50"}`}
												>
													<td className="px-3 py-1.5 font-mono text-gray-900 font-semibold">
														{bytes}
													</td>
													<td className="px-3 py-1.5 text-gray-600">{role}</td>
													<td className="px-3 py-1.5 text-gray-700">{interp}</td>
												</tr>
											))}
										</tbody>
									</table>
								</div>
							</div>

							{/* Stream 2 */}
							<div className="space-y-3 mb-10">
								<div className="flex items-center gap-3">
									<span className="bg-gray-900 text-orange-300 font-mono text-xs px-2 py-1 rounded">
										Stream 2
									</span>
									<h4 className="font-semibold text-gray-800">Stream 1 + cursor move at the end</h4>
								</div>
								<CodeBlock>{`0x01 0x03 0x50 0x18 0x01  0x02 0x04 0x00 0x00 0x07 0x41  0x03 0x06 0x3C 0x02 0x03 0x0A 0x07 0x2A  0x05 0x02 0x14 0x05  0xFF`}</CodeBlock>
								<p className="text-gray-600 text-sm">
									Identical to Stream 1, with one additional command appended before <Code>0xFF</Code>:
								</p>
								<div className="overflow-x-auto">
									<table className="text-xs w-full border-collapse">
										<thead>
											<tr className="bg-gray-100">
												<th className="text-left px-3 py-2 text-gray-600 font-bold">
													Bytes
												</th>
												<th className="text-left px-3 py-2 text-gray-600 font-bold">
													Role
												</th>
												<th className="text-left px-3 py-2 text-gray-600 font-bold">
													Interpretation
												</th>
											</tr>
										</thead>
										<tbody>
											{[
												["0x05", "Command ID", "cursor_move"],
												["0x02", "Arg length", "2 argument bytes follow"],
												["0x14", "Arg 1 — x", "0x14 = 20"],
												["0x05", "Arg 2 — y", "0x05 = 5"],
												["0xFF", "End of File", "Stream complete"],
											].map(([bytes, role, interp], i) => (
												<tr
													key={i}
													className={`border-t border-gray-100 ${i % 2 === 0 ? "bg-white" : "bg-gray-50"}`}
												>
													<td className="px-3 py-1.5 font-mono text-gray-900 font-semibold">
														{bytes}
													</td>
													<td className="px-3 py-1.5 text-gray-600">{role}</td>
													<td className="px-3 py-1.5 text-gray-700">{interp}</td>
												</tr>
											))}
										</tbody>
									</table>
								</div>
								<p className="text-gray-500 text-xs italic">
									This demonstrates how chaining works: appending the next command's bytes, with the
									parser reading the cursor_move command ID immediately after consuming draw_line's 6
									declared argument bytes.
								</p>
							</div>

							{/* Stream 3 */}
							<div className="space-y-3 mb-10">
								<div className="flex items-center gap-3">
									<span className="bg-gray-900 text-stone-300 font-mono text-xs px-2 py-1 rounded">
										Stream 3
									</span>
									<h4 className="font-semibold text-gray-800">Setup → render text ("hello brother")</h4>
								</div>
								<CodeBlock>{`0x01 0x03 0x50 0x18 0x01  0x04 0x10 0x28 0x02 0x07 0x68 0x65 0x6C 0x6C 0x6F 0x20 0x62 0x72 0x6F 0x74 0x68 0x65 0x72  0xFF`}</CodeBlock>
								<div className="overflow-x-auto">
									<table className="text-xs w-full border-collapse">
										<thead>
											<tr className="bg-gray-100">
												<th className="text-left px-3 py-2 text-gray-600 font-bold">
													Bytes
												</th>
												<th className="text-left px-3 py-2 text-gray-600 font-bold">
													Role
												</th>
												<th className="text-left px-3 py-2 text-gray-600 font-bold">
													Interpretation
												</th>
											</tr>
										</thead>
										<tbody>
											{[
												[
													"0x01 0x03 0x50 0x18 0x01",
													"screen_setup",
													"80 × 24, 16colors (same as above)",
												],
												["0x04", "Command ID", "render_text"],
												["0x10", "Arg length", "16 argument bytes follow"],
												["0x28", "Arg 1 — x", "0x28 = 40"],
												["0x02", "Arg 2 — y", "0x02 = 2"],
												["0x07", "Arg 3 — color", "0x07 → white"],
												["0x68 0x65 0x6C 0x6C 0x6F", "Text bytes 1–5", "h e l l o"],
												["0x20", "Text byte 6", "0x20 = ASCII space"],
												[
													"0x62 0x72 0x6F 0x74 0x68 0x65 0x72",
													"Text bytes 7–13",
													"b r o t h e r",
												],
												[
													"0xFF",
													"End of File",
													'Stream complete. Total: "hello brother" (13 bytes) + 3 positional args = 16 ✓',
												],
											].map(([bytes, role, interp], i) => (
												<tr
													key={i}
													className={`border-t border-gray-100 ${i % 2 === 0 ? "bg-white" : "bg-gray-50"}`}
												>
													<td className="px-3 py-1.5 font-mono text-gray-900 font-semibold">
														{bytes}
													</td>
													<td className="px-3 py-1.5 text-gray-600">{role}</td>
													<td className="px-3 py-1.5 text-gray-700">{interp}</td>
												</tr>
											))}
										</tbody>
									</table>
								</div>
								<p className="text-gray-500 text-xs italic">
									Notice how the length byte <Code>0x10</Code> (=16) tells the parser exactly how many
									bytes of text to consume, even though text is variable-length. The arg count is the key:
									3 fixed args (x, y, color) + 13 character bytes = 16.
								</p>
							</div>

							{/* Stream 4 */}
							<div className="space-y-3 mb-4">
								<div className="flex items-center gap-3">
									<span className="bg-gray-900 text-orange-200 font-mono text-xs px-2 py-1 rounded">
										Stream 4
									</span>
									<h4 className="font-semibold text-gray-800">
										Full composition: text, two lines, and "Merry Christmas!!"
									</h4>
								</div>
								<CodeBlock>{`0x01 0x03 0x50 0x18 0x01 0x04 0x10 0x28 0x02 0x07 0x68 0x65 0x6C 0x6C 0x6F 0x20 0x62 0x72 0x6F 0x74 0x68 0x65 0x72 0x03 0x06 0x3C 0x02 0x03 0x0A 0x07 0x2A 0x03 0x06 0x0A 0x02 0x0A 0x16 0x01 0x2A 0x04 0x14 0x1E 0x0C 0x06 0x4D 0x65 0x72 0x72 0x79 0x20 0x43 0x68 0x72 0x69 0x73 0x74 0x6D 0x61 0x73 0x21 0x21 0xFF`}</CodeBlock>
								<div className="overflow-x-auto">
									<table className="text-xs w-full border-collapse">
										<thead>
											<tr className="bg-gray-100">
												<th className="text-left px-3 py-2 text-gray-600 font-bold">
													Bytes
												</th>
												<th className="text-left px-3 py-2 text-gray-600 font-bold">
													Command
												</th>
												<th className="text-left px-3 py-2 text-gray-600 font-bold">
													Interpretation
												</th>
											</tr>
										</thead>
										<tbody>
											{[
												[
													"0x01 0x03 0x50 0x18 0x01",
													"screen_setup",
													"80 × 24, 16colors",
												],
												[
													"0x04 0x10 0x28 0x02 0x07 …0x72",
													"render_text",
													'x=40, y=2, white, "hello brother" (13 chars, total 16 args)',
												],
												[
													"0x03 0x06 0x3C 0x02 0x03 0x0A 0x07 0x2A",
													"draw_line",
													"x1=60, y1=2, x2=3, y2=10, white, '*'",
												],
												[
													"0x03 0x06 0x0A 0x02 0x0A 0x16 0x01 0x2A",
													"draw_line",
													"x1=10, y1=2, x2=10, y2=22, red (0x01), '*'",
												],
												[
													"0x04 0x14 0x1E 0x0C 0x06 …0x21 0x21",
													"render_text",
													'x=30, y=12, cyan (0x06), "Merry Christmas!!" (17 chars, total 20 args)',
												],
												["0xFF", "End of File", "5 chained commands, stream complete"],
											].map(([bytes, cmd, interp], i) => (
												<tr
													key={i}
													className={`border-t border-gray-100 ${i % 2 === 0 ? "bg-white" : "bg-gray-50"}`}
												>
													<td className="px-3 py-1.5 font-mono text-gray-900 font-semibold break-all max-w-[180px]">
														{bytes}
													</td>
													<td className="px-3 py-1.5 text-orange-700 font-semibold whitespace-nowrap">
														{cmd}
													</td>
													<td className="px-3 py-1.5 text-gray-700">{interp}</td>
												</tr>
											))}
										</tbody>
									</table>
								</div>

								<div className="bg-orange-50 border-l-4 border-orange-700 p-4 rounded-r mt-2">
									<h4 className="font-bold text-orange-800 text-sm uppercase mb-1">
										The "Merry Christmas!!" text breakdown
									</h4>
									<p className="text-orange-900 text-sm">
										The final render_text has length byte <Code>0x14</Code> = 20. That's: 3 fixed
										args (x=<Code>0x1E</Code>=30, y=<Code>0x0C</Code>=12, color=<Code>0x06</Code>
										=cyan) + 17 text character bytes = 20 ✓. The text{" "}
										<Code>
											0x4D 0x65 0x72 0x72 0x79 0x20 0x43 0x68 0x72 0x69 0x73 0x74 0x6D 0x61
											0x73 0x21 0x21
										</Code>{" "}
										decodes as M-e-r-r-y-[space]-C-h-r-i-s-t-m-a-s-!-! = "Merry Christmas!!"
									</p>
								</div>
							</div>
						</div>

						{/* Quick reference: ASCII to hex */}
						<div>
							<h3 className="font-semibold text-xl text-gray-800 mb-3">Common ASCII → Hex Reference</h3>
							<p className="text-gray-600 text-sm mb-3">
								Instruction bytes for characters and numbers are plain ASCII. Here are frequently used values:
							</p>
							<div className="overflow-x-auto">
								<table className="text-xs w-full border-collapse">
									<thead>
										<tr className="bg-gray-100">
											<th className="text-left px-3 py-2 font-bold text-gray-600">
												Char / Value
											</th>
											<th className="text-left px-3 py-2 font-bold text-gray-600">Hex</th>
											<th className="text-left px-3 py-2 font-bold text-gray-600">Decimal</th>
										</tr>
									</thead>
									<tbody>
										{[
											["Space ( )", "0x20", "32"],
											["!", "0x21", "33"],
											["*", "0x2A", "42"],
											["0", "0x30", "48"],
											["9", "0x39", "57"],
											["A", "0x41", "65"],
											["Z", "0x5A", "90"],
											["a", "0x61", "97"],
											["z", "0x7A", "122"],
											["Width 80", "0x50", "80"],
											["Height 24", "0x18", "24"],
											["Height 30", "0x1E", "30"],
										].map(([char, hex, dec], i) => (
											<tr
												key={i}
												className={`border-t border-gray-100 ${i % 2 === 0 ? "bg-white" : "bg-gray-50"}`}
											>
												<td className="px-3 py-1.5 text-gray-700">{char}</td>
												<td className="px-3 py-1.5 font-mono text-orange-700 font-semibold">
													{hex}
												</td>
												<td className="px-3 py-1.5 text-gray-500">{dec}</td>
											</tr>
										))}
									</tbody>
								</table>
							</div>
						</div>
					</section>

					{/* READABLE MODE */}
					<section id="readable-mode" className="scroll-mt-28 space-y-6 py-4">
						<div className="flex items-center justify-between">
							<h2 className="text-2xl font-bold text-gray-900 border-b pb-2 flex-1">F. Readable (String) Mode</h2>
							<button
								onClick={() => copyLink("readable-mode")}
								className="text-gray-400 hover:text-blue-600 transition-colors text-sm px-3 py-1 rounded hover:bg-gray-100"
								title="Copy link"
							>
								🔗 Copy Link
							</button>
						</div>

						<p className="text-gray-600">
							Launched with <Code>python terminal.py --readable</Code>, this mode accepts natural command strings.
							Each string command is validated, converted to its hex equivalent internally, then executed through the
							same hex pipeline.
						</p>

						<div className="space-y-3">
							<p className="text-sm font-semibold text-gray-700">Example session:</p>
							<CodeBlock>{`screen_setup 80 24 16colors
draw_char 5 3 green @
render_text 10 5 cyan Hello World
render`}</CodeBlock>
						</div>

						<p className="text-gray-600">
							Commands are entered one per line. Each command name must match exactly (case-sensitive) and be followed
							by the correct number of arguments in order.
						</p>
					</section>

					{/* COMMAND REFERENCE */}
					<section id="commands" className="scroll-mt-28 space-y-6 py-4">
						<div className="flex items-center justify-between">
							<h2 className="text-2xl font-bold text-gray-900 border-b pb-2 flex-1">G. Command Reference</h2>
							<button
								onClick={() => copyLink("commands")}
								className="text-gray-400 hover:text-blue-600 transition-colors text-sm px-3 py-1 rounded hover:bg-gray-100"
								title="Copy link"
							>
								🔗 Copy Link
							</button>
						</div>

						<p className="text-gray-600">
							All accepted commands are listed below. Commands apply to both hex mode and readable mode. The signature
							column shows the argument order for readable mode.
						</p>

						<div className="space-y-4">
							<CommandCard
								name="screen_setup"
								hexId="0x01"
								args={3}
								signature={["<width: int>", "<height: int>", "<color_mode: string>"]}
								example="screen_setup 80 24 16colors"
								description="Initialises the screen with the given dimensions and color mode. Must be called before any draw commands."
							/>
							<CommandCard
								name="draw_char"
								hexId="0x02"
								args={4}
								signature={["<x: int>", "<y: int>", "<color: string>", "<char: char>"]}
								example="draw_char 0 0 white A"
								description="Draws a single character at the specified (x, y) position in the given color."
							/>
							<CommandCard
								name="draw_line"
								hexId="0x03"
								args={6}
								signature={["<x1: int>", "<y1: int>", "<x2: int>", "<y2: int>", "<color: string>", "<char: char>"]}
								example="draw_line 60 2 60 10 white *"
								description="Draws a vertical line starting at (x1, y1) to (x2, y2), filled with the specified character and color."
							/>
							<CommandCard
								name="render_text"
								hexId="0x04"
								args={"variable (up to 99)"}
								signature={["<x: int>", "<y: int>", "<color: string>", "<text: string...>"]}
								example="render_text 40 2 white hello brother"
								description="Renders a string of text starting at (x, y) in the given color. The text can span multiple words. All remaining tokens after the color argument are treated as the text."
							/>
							<CommandCard
								name="cursor_move"
								hexId="0x05"
								args={2}
								signature={["<x: int>", "<y: int>"]}
								example="cursor_move 20 5"
								description="Moves the cursor to the specified (x, y) position without drawing anything."
							/>
							<CommandCard
								name="draw_at_cursor"
								hexId="0x06"
								args={2}
								signature={["<color: string>", "<char: char>"]}
								example="draw_at_cursor white A"
								description="Draws a single character at the current cursor position in the given color. Use cursor_move first to position the cursor."
							/>
							<CommandCard
								name="clear_screen"
								hexId="0x07"
								args={0}
								signature={[]}
								example="clear_screen"
								description="Clears the entire screen. Takes no arguments."
							/>
							<CommandCard
								name="render"
								hexId="0x08"
								args={0}
								signature={[]}
								example="render"
								description="Flushes and renders everything drawn so far to the screen. Call this after your drawing commands to display output."
							/>
						</div>
					</section>

					{/* COLOR MODES */}
					<section id="color-modes" className="scroll-mt-28 space-y-6 py-4">
						<div className="flex items-center justify-between">
							<h2 className="text-2xl font-bold text-gray-900 border-b pb-2 flex-1">H. Color Modes</h2>
							<button
								onClick={() => copyLink("color-modes")}
								className="text-gray-400 hover:text-blue-600 transition-colors text-sm px-3 py-1 rounded hover:bg-gray-100"
								title="Copy link"
							>
								🔗 Copy Link
							</button>
						</div>

						<p className="text-gray-600">
							The <Code>screen_setup</Code> command accepts one of three color mode strings. The mode you choose
							determines which color names are valid for subsequent draw commands.
						</p>

						<div className="space-y-5">
							<div>
								<h3 className="font-semibold text-lg text-gray-800 mb-2">monochrome</h3>
								<p className="text-gray-600 text-sm mb-3">
									Two colors only: <Code>black</Code> and <Code>white</Code>.
								</p>
								<div className="flex gap-2">
									<span className="px-3 py-1 rounded-full bg-black text-white text-xs font-mono">
										black
									</span>
									<span className="px-3 py-1 rounded-full bg-white border text-black text-xs font-mono">
										white
									</span>
								</div>
							</div>

							<div>
								<h3 className="font-semibold text-lg text-gray-800 mb-2">16colors</h3>
								<p className="text-gray-600 text-sm mb-3">Standard 16-color terminal palette.</p>
								<div className="flex flex-wrap gap-2 text-xs font-mono">
									{[
										"black",
										"red",
										"green",
										"yellow",
										"blue",
										"magenta",
										"cyan",
										"white",
										"bright_black",
										"bright_red",
										"bright_green",
										"bright_yellow",
										"bright_blue",
										"bright_magenta",
										"bright_cyan",
										"bright_white",
									].map((c) => (
										<span
											key={c}
											className="px-2 py-1 rounded bg-gray-100 text-gray-700 border border-gray-200"
										>
											{c}
										</span>
									))}
								</div>
							</div>

							<div>
								<h3 className="font-semibold text-lg text-gray-800 mb-2">256colors</h3>
								<p className="text-gray-600 text-sm">
									Extended 256-color mode. Refer to the repository for the complete color mapping.
								</p>
							</div>
						</div>
					</section>

					{/* PIPELINES */}
					<section id="pipelines" className="scroll-mt-28 space-y-6 py-4">
						<div className="flex items-center justify-between">
							<h2 className="text-2xl font-bold text-gray-900 border-b pb-2 flex-1">I. How It Works (Pipelines)</h2>
							<button
								onClick={() => copyLink("pipelines")}
								className="text-gray-400 hover:text-blue-600 transition-colors text-sm px-3 py-1 rounded hover:bg-gray-100"
								title="Copy link"
							>
								🔗 Copy Link
							</button>
						</div>

						<p className="text-gray-600">
							Under the hood, both modes pass through rigorous validation and parsing before execution. Understanding
							the pipeline helps you debug unexpected errors.
						</p>

						<div className="space-y-8">
							<div>
								<h3 className="font-semibold text-xl text-gray-800 mb-3">Hex Pipeline</h3>
								<div className="space-y-2">
									{[
										[
											"Hex Input Validation",
											"Ensures every token in the raw input is parseable as a hex byte.",
										],
										[
											"Command Parsing",
											"Splits the stream into individual command chunks, each terminated by 0xFF.",
										],
										[
											"Command Validation",
											"Verifies each chunk has the correct number of argument bytes for its command.",
										],
										[
											"Command Execution",
											"Iterates through validated commands and executes each one.",
										],
									].map(([title, desc], i) => (
										<div key={i} className="flex gap-4 items-start">
											<span className="flex-shrink-0 w-6 h-6 bg-orange-700 text-white text-xs font-bold rounded-full flex items-center justify-center mt-0.5">
												{i + 1}
											</span>
											<div>
												<span className="font-semibold text-gray-800">{title}</span>
												<span className="text-gray-500">: {desc}</span>
											</div>
										</div>
									))}
								</div>
							</div>

							<div>
								<h3 className="font-semibold text-xl text-gray-800 mb-3">String (Readable) Pipeline</h3>
								<div className="space-y-2">
									{[
										[
											"Pipeline Instantiation",
											"StringCommandController identifies the command and instantiates the matching CommandPipeline subclass.",
										],
										[
											"Structure Validation",
											"Checks that the correct number of arguments is provided.",
										],
										[
											"Argument Validation",
											"Ensures each argument matches its expected type (int, string, char) and is a recognised value (e.g. valid color name).",
										],
										["Hex Conversion", "Converts all arguments to their hex byte representations."],
										["Execution", "Passes the assembled hex stream to the standard hex executor."],
									].map(([title, desc], i) => (
										<div key={i} className="flex gap-4 items-start">
											<span className="flex-shrink-0 w-6 h-6 bg-stone-700 text-white text-xs font-bold rounded-full flex items-center justify-center mt-0.5">
												{i + 1}
											</span>
											<div>
												<span className="font-semibold text-gray-800">{title}</span>
												<span className="text-gray-500">: {desc}</span>
											</div>
										</div>
									))}
								</div>
							</div>
						</div>
					</section>

					{/* EXAMPLES */}
					<section id="examples" className="scroll-mt-28 space-y-6 py-4">
						<div className="flex items-center justify-between">
							<h2 className="text-2xl font-bold text-gray-900 border-b pb-2 flex-1">J. Full Examples</h2>
							<button
								onClick={() => copyLink("examples")}
								className="text-gray-400 hover:text-blue-600 transition-colors text-sm px-3 py-1 rounded hover:bg-gray-100"
								title="Copy link"
							>
								🔗 Copy Link
							</button>
						</div>

						<div className="space-y-8">
							<div>
								<h3 className="font-semibold text-xl text-gray-800 mb-2">
									Example 1: Hello World (readable mode)
								</h3>
								<p className="text-gray-600 text-sm mb-3">
									Set up an 80×24 screen, write "Hello World" in cyan at position (10, 5), then render.
								</p>
								<CodeBlock>{`screen_setup 80 24 16colors
render_text 10 5 cyan Hello World
render`}</CodeBlock>
							</div>

							<div>
								<h3 className="font-semibold text-xl text-gray-800 mb-2">Example 2: Hello World (hex mode)</h3>
								<p className="text-gray-600 text-sm mb-3">The exact equivalent as a hex stream:</p>
								<CodeBlock>{`0x01 0x03 0x50 0x18 0x01 0xFF 0x04 0x63 0x0A 0x05 0x06 0x48 0x65 0x6C 0x6C 0x6F 0x20 0x57 0x6F 0x72 0x6C 0x64 0xFF 0x08 0x00 0xFF`}</CodeBlock>
							</div>

							<div>
								<h3 className="font-semibold text-xl text-gray-800 mb-2">
									Example 3: Drawing a border (readable mode)
								</h3>
								<p className="text-gray-600 text-sm mb-3">
									Set up a screen and draw a line of asterisks along the top.
								</p>
								<CodeBlock>{`screen_setup 80 24 16colors
draw_line 0 0 80 0 white *
render`}</CodeBlock>
							</div>

							<div>
								<h3 className="font-semibold text-xl text-gray-800 mb-2">
									Example 4: Cursor positioning (readable mode)
								</h3>
								<p className="text-gray-600 text-sm mb-3">
									Move the cursor then draw at the cursor's position.
								</p>
								<CodeBlock>{`screen_setup 80 24 16colors
cursor_move 40 12
draw_at_cursor yellow #
render`}</CodeBlock>
							</div>
						</div>
					</section>

					{/* TROUBLESHOOTING */}
					<section id="troubleshooting" className="scroll-mt-28 space-y-6 py-4">
						<div className="flex items-center justify-between">
							<h2 className="text-2xl font-bold text-gray-900 border-b pb-2 flex-1">K. Troubleshooting & FAQ</h2>
							<button
								onClick={() => copyLink("troubleshooting")}
								className="text-gray-400 hover:text-blue-600 transition-colors text-sm px-3 py-1 rounded hover:bg-gray-100"
								title="Copy link"
							>
								🔗 Copy Link
							</button>
						</div>

						<div className="space-y-5">
							{[
								{
									q: "The terminal says my hex value is invalid.",
									a: "Make sure every token starts with 0x and is followed by exactly two hex digits (e.g. 0x0A, not 0xA). Check that you haven't included extra spaces or stray characters.",
								},
								{
									q: "I get an 'incorrect argument count' error.",
									a: "Double-check the command signature in the Command Reference section. Each command expects a specific number of arguments. For render_text, remember that all words after the color argument are treated as the text (no quotes needed).",
								},
								{
									q: "My color name isn't recognised.",
									a: "Color names are case-sensitive and must match exactly (e.g. bright_blue not BrightBlue). Also confirm that the color you're using is available in the color mode you initialised with screen_setup.",
								},
								{
									q: "Nothing is showing up on screen.",
									a: "Make sure you call render after your drawing commands. Without render, buffered draw operations are not displayed.",
								},
								{
									q: "Python says 'module not found' for argparse.",
									a: "argparse is part of the Python standard library since Python 3.2. Ensure you're running Python 3.8 or higher with python --version.",
								},
							].map(({ q, a }, i) => (
								<div key={i} className="border border-gray-200 rounded-lg p-4 bg-white space-y-2">
									<p className="font-semibold text-gray-800">Q: {q}</p>
									<p className="text-gray-600 text-sm">A: {a}</p>
								</div>
							))}
						</div>
					</section>

					{/* GLOSSARY */}
					<section id="glossary" className="scroll-mt-28 space-y-6 py-4">
						<div className="flex items-center justify-between">
							<h2 className="text-2xl font-bold text-gray-900 border-b pb-2 flex-1">L. Glossary</h2>
							<button
								onClick={() => copyLink("glossary")}
								className="text-gray-400 hover:text-blue-600 transition-colors text-sm px-3 py-1 rounded hover:bg-gray-100"
								title="Copy link"
							>
								🔗 Copy Link
							</button>
						</div>

						<div className="space-y-4">
							{[
								[
									"Hex stream",
									"A sequence of hexadecimal byte values (e.g. 0x01 0x03 ...) representing commands and their arguments.",
								],
								[
									"0xFF (END_OF_FILE)",
									"A sentinel byte that marks the end of a command stream. Every command sequence must be terminated with 0xFF.",
								],
								[
									"Command byte",
									"The first byte of a command stream that identifies which command to run (e.g. 0x01 = screen_setup).",
								],
								[
									"Readable mode",
									"The --readable flag enables human-readable string commands instead of raw hex input.",
								],
								[
									"Color mode",
									"The palette mode used by the terminal: monochrome, 16colors, or 256colors. Set via screen_setup.",
								],
								[
									"Cursor",
									"A virtual pointer to a position on screen. Moved with cursor_move, used by draw_at_cursor.",
								],
								[
									"Pipeline",
									"The series of validation and transformation steps that a command passes through before execution.",
								],
								[
									"CommandPipeline",
									"A base class in the codebase extended by each command's specific pipeline implementation, following the Open/Closed Principle.",
								],
							].map(([term, def]) => (
								<div key={term} className="flex gap-4">
									<dt className="font-mono font-semibold text-blue-700 w-44 flex-shrink-0 text-sm pt-0.5">
										{term}
									</dt>
									<dd className="text-gray-600 text-sm">{def}</dd>
								</div>
							))}
						</div>
					</section>
				</main>
			</div>
		</div>
	);
}
