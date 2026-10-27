import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";


const IMG = "/learn-about/afraken";

const IMAGES = {
    hero: `${IMG}/team-photo.jpg`, // website home page screenshot
    homePage: `${IMG}/home-page.png`,
    eventsPage: `${IMG}/events-page.png`,
    inspiration: `${IMG}/aisec-inspiration.png`,
    figma: `${IMG}/figma-mockups.png`, // Figma mockup process
    vmStress: `${IMG}/vm-utilisation.png`, // VM at over 100% utilisation
    jmeterBefore: `${IMG}/jmeter-before.png`,
    jmeterAfter: `${IMG}/jmeter-after.png`,
    gtmetrix: `${IMG}/gtmetrix-report.png`,
    team: `${IMG}/team-photo.jpg`, // team in front of JHUB / JKUAT banners
    me: `${IMG}/mark.jpg`,
    awsCert: `${IMG}/aws-community-day-cert.png`,
};

const LINKS = {
    figmaBoard:
        "https://www.figma.com/board/6DtAmZfGjp3HMwNQAOVMas/AFRAKEN---Strategic-plan?node-id=0-1&t=7NF90yk1BGpxIExp-1",
    awsCred: "https://creds.awscommunityday.com/c/ACD-ACDKEN-2026-SPK-0003",
    linkedin: "https://www.linkedin.com/in/mark-kithinji-68aa14246/",
    email: "victorkithinji@outlook.com",
    phone: "+254790405421",
};

const TEAM = [
    {
        name: "Mark Victor Kithinji",
        linkedin: LINKS.linkedin,
    },
    {
        name: "Samuel Gicheha",
        linkedin: "https://www.linkedin.com/in/sirgicheha",
    },
    {
        name: "Allan Njoroge",
        linkedin: "https://www.linkedin.com/in/allan-njoroge-868542309",
    },
    {
        name: "Derrick Richard",
        linkedin: "https://www.linkedin.com/in/derickrichards",
    },
    {
        name: "Rony Maruga",
        linkedin: "https://www.linkedin.com/in/rony-maruga",
    },
    {
        name: "Kositany Ck",
        linkedin: "https://www.linkedin.com/in/kositany-ck-460725275/",
    },
];

const SECTIONS = [
    ["summary", "At a glance"],
    ["challenge", "The challenge"],
    ["decision", "The key decision"],
    ["evidence", "Evidence"],
    ["design", "Design process"],
    ["team", "Team & delivery"],
    ["outcome", "Outcome"],
    ["status", "Site status"],
];

function NavLink({ id, active, children }) {
    return (
        <a
            href={`#${id}`}
            className={`block text-sm px-3 py-1.5 rounded transition-colors ${
                active === id
                    ? "bg-blue-50 text-blue-700 font-medium"
                    : "text-gray-600 hover:text-gray-900 hover:bg-gray-100"
            }`}
        >
            {children}
        </a>
    );
}

function Code({ children }) {
    return (
        <code className="font-mono text-sm bg-gray-100 text-gray-800 px-1.5 py-0.5 rounded">
            {children}
        </code>
    );
}

function SectionHeading({ id, children }) {
    const copyLink = () =>
        navigator.clipboard.writeText(
            window.location.origin + window.location.pathname + "#" + id,
        );
    return (
        <div className="flex items-center justify-between">
            <h2 className="text-2xl font-bold text-gray-900 border-b pb-2 flex-1">
                {children}
            </h2>
            <button
                onClick={copyLink}
                className="text-gray-400 hover:text-blue-600 transition-colors text-sm px-3 py-1 rounded hover:bg-gray-100"
                title="Copy link"
            >
                🔗 Copy Link
            </button>
        </div>
    );
}

// Screenshot with caption. Click opens the full-size image (screenshots have small text).
function Figure({ src, alt, caption, width = 1600, height = 900 }) {
    return (
        <figure className="space-y-2">
            <a
                href={src}
                target="_blank"
                rel="noopener noreferrer"
                className="block border border-gray-200 rounded-lg overflow-hidden bg-white hover:border-blue-300 transition-colors"
            >
                <Image
                    src={src}
                    alt={alt}
                    width={width}
                    height={height}
                    style={{ width: "100%", height: "auto" }}
                />
            </a>
            <figcaption className="text-xs text-gray-500 leading-relaxed">
                {caption}
            </figcaption>
        </figure>
    );
}

function Callout({ title, children }) {
    return (
        <div className="bg-orange-50 border-l-4 border-orange-700 p-4 rounded-r">
            <h4 className="font-bold text-orange-800 text-sm uppercase mb-1">
                {title}
            </h4>
            <div className="text-orange-900 text-sm leading-relaxed">
                {children}
            </div>
        </div>
    );
}

function Stat({ value, label, note }) {
    return (
        <div className="bg-white border border-gray-200 rounded-lg p-4">
            <p className="text-2xl font-extrabold text-gray-900">{value}</p>
            <p className="text-sm font-semibold text-gray-700 mt-1">{label}</p>
            <p className="text-xs text-gray-400 mt-1">{note}</p>
        </div>
    );
}

export default function AfrakenProject() {
    const [activeSection, setActiveSection] = useState("");

    useEffect(() => {
        const onScroll = () => {
            let current = "";
            document.querySelectorAll("section[id]").forEach((s) => {
                if (window.scrollY >= s.offsetTop - 150)
                    current = s.getAttribute("id");
            });
            setActiveSection(current);
        };
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    return (
        <div className="min-h-screen bg-gray-50 text-gray-800 font-sans selection:bg-blue-100">
            <Head>
                <title>AFRAKEN Website Project | Learn About</title>
                <meta
                    name="description"
                    content="How a team of six second-year students built and tuned a WordPress site for AFRAKEN on a 1 GB server, with load-test evidence."
                />
            </Head>

            {/* Header (swap for your shared header component if you have one) */}
            <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
                <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        <Link
                            href="/"
                            className="font-bold text-xl text-blue-600 hover:opacity-80"
                        >
                            VictorCodebase
                        </Link>
                        <span className="text-gray-300">/</span>
                        <span className="text-gray-500 text-sm">
                            Learn about
                        </span>
                        <span className="text-gray-300">/</span>
                        <h1 className="font-semibold text-gray-700">AFRAKEN</h1>
                    </div>
                    <span className="text-xs font-mono bg-gray-100 px-2 py-1 rounded text-gray-500">
                        Case study
                    </span>
                </div>
            </header>

            <div className="max-w-7xl mx-auto px-6 py-12 flex flex-col lg:flex-row gap-12">
                {/* Sidebar */}
                <aside className="hidden lg:block w-56 flex-shrink-0">
                    <nav className="sticky top-24 space-y-1">
                        <p className="uppercase text-xs font-bold text-gray-400 mb-4 tracking-wider">
                            On this page
                        </p>
                        {SECTIONS.map(([id, label]) => (
                            <NavLink key={id} id={id} active={activeSection}>
                                {label}
                            </NavLink>
                        ))}
                    </nav>
                </aside>

                <main className="flex-1 max-w-3xl space-y-14">
                    {/* Title + hero image */}
                    <div className="space-y-5">
                        <h1 className="text-4xl font-extrabold text-gray-900 tracking-tight">
                            Building AFRAKEN&apos;s website on a 1 GB server
                        </h1>
                        <p className="text-lg text-gray-600 leading-relaxed">
                            A team of six second-year students, no WordPress
                            experience, and a free-tier VM. <br /> This page
                            walks through the decisions, the measurements, and
                            how we managed to scale a WordPress site on a{" "}
                            <i>1 GB free-tier server</i> to handle spiky
                            traffic, cutting request latency from 114s to under
                            5s..
                        </p>
                        <div className="relative w-full h-80 bg-gray-200 rounded-lg border-2 border-dashed border-gray-300 overflow-hidden text-gray-500 flex items-center justify-center">
                            <Image
                                src={IMAGES.hero}
                                alt="The AFRAKEN website home page"
                                fill
                                priority
                                className="object-cover rounded-lg p-2"
                            />
                        </div>
                    </div>

                    {/* AT A GLANCE */}
                    <section id="summary" className="scroll-mt-28 space-y-6">
                        <SectionHeading id="summary">
                            At a glance
                        </SectionHeading>

                        <dl className="grid sm:grid-cols-2 gap-x-8 gap-y-3 text-sm">
                            {[
                                [
                                    "Client",
                                    "AFRAKEN, Association of France Alumni in Kenya",
                                ],
                                [
                                    "My role",
                                    "Team lead and technical decision-maker",
                                ],
                                [
                                    "When",
                                    "May to Aug 2024, JKUAT / Jhub Africa attachment (year 2)",
                                ],
                                ["Team", "6 students"],
                                [
                                    "Stack",
                                    "WordPress, Google Cloud VM (e2-micro), Cloudflare CDN",
                                ],
                                [
                                    "Result",
                                    "Delivered and released to members. Attachment unit graded A.",
                                ],
                            ].map(([k, v]) => (
                                <div key={k} className="flex gap-3">
                                    <dt className="w-20 flex-shrink-0 font-semibold text-gray-400">
                                        {k}
                                    </dt>
                                    <dd className="text-gray-700">{v}</dd>
                                </div>
                            ))}
                        </dl>

                        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                            <Stat
                                value="A"
                                label="GTmetrix grade"
                                note="Performance 99%, Structure 93%"
                            />
                            <Stat
                                value="752 ms"
                                label="Largest Contentful Paint"
                                note="Lighthouse 11, Jul 2024"
                            />
                            <Stat
                                value="114 s → 4.8 s"
                                label="Slowest request"
                                note="JMeter, 50 concurrent users"
                            />
                            <Stat
                                value="1 GB"
                                label="RAM available"
                                note="Free-tier e2-micro"
                            />
                        </div>
                        <p className="text-xs text-gray-400">
                            All figures come from the prototype stage on the
                            free-tier VM, which is where the team built and
                            demoed the site.
                        </p>
                    </section>

                    {/* CHALLENGE */}
                    <section id="challenge" className="scroll-mt-28 space-y-5">
                        <SectionHeading id="challenge">
                            The challenge
                        </SectionHeading>
                        <p className="text-gray-600 leading-relaxed">
                            AFRAKEN asked for a members&apos; website with a
                            clear list of requirements and one fixed preference:{" "}
                            <strong>WordPress</strong>. None of us had used it,
                            and none of us had published a website before. We
                            were also second-years the organisation had never
                            worked with, so access to their hosting, database
                            and domain had to be earned.
                        </p>
                        <ul className="list-disc pl-5 space-y-2 text-gray-600">
                            <li>
                                <strong>No hosting access yet.</strong> We
                                needed somewhere to build, so I set the project
                                up on a Google Cloud VM. Staying inside the free
                                tier meant an e2-micro: 2 vCPUs, 1 GB RAM.
                            </li>
                            <li>
                                <strong>A client likely to move.</strong> They
                                were unhappy with their provider, so whatever we
                                chose might be where they stayed.
                            </li>
                            <li>
                                <strong>Ambiguous goals.</strong> I turned broad
                                requirements into tasks the team could pick up,
                                checking with mentors and the client when
                                something was unclear.
                            </li>
                        </ul>
                        <Figure
                            src={IMAGES.vmStress}
                            alt="VM monitoring showing CPU utilisation above 100 percent"
                            caption="The VM under load, with utilisation above 100%. Pages stalled and timed out, which slowed the whole team."
                        />
                    </section>

                    {/* DECISION */}
                    <section id="decision" className="scroll-mt-28 space-y-5">
                        <SectionHeading id="decision">
                            The key decision: cache at the edge
                        </SectionHeading>
                        <p className="text-gray-600 leading-relaxed">
                            Rather than fight for more compute, I read the
                            requirements for what they implied about traffic:
                        </p>
                        <ul className="list-disc pl-5 space-y-2 text-gray-600">
                            <li>
                                <strong>Read-heavy.</strong> Members check what
                                is on, and visitors learn about the
                                organisation.
                            </li>
                            <li>
                                <strong>Mostly static.</strong> The only
                                personalisation was member-only sections.
                            </li>
                            <li>
                                <strong>Spiky.</strong> Before events, many
                                alumni would confirm details at the same time.
                            </li>
                        </ul>
                        <p className="text-gray-600 leading-relaxed">
                            That profile suits a CDN: serve repeat reads from
                            the edge and leave the VM for the work only it can
                            do. I chose <strong>Cloudflare</strong> for its
                            cost, its widespread use, and its documentation,
                            which makes the setup easier for whoever maintains
                            it next.
                        </p>
                    </section>

                    {/* EVIDENCE */}
                    <section id="evidence" className="scroll-mt-28 space-y-6">
                        <SectionHeading id="evidence">Evidence</SectionHeading>
                        <p className="text-gray-600 leading-relaxed">
                            I used JMeter to load-test the site with concurrent
                            users, and GTmetrix for page-level performance. I
                            did not capture a GTmetrix report before optimising,
                            so the before picture comes from JMeter and the VM
                            metrics.
                        </p>

                        <div className="space-y-6">
                            <Figure
                                src={IMAGES.jmeterBefore}
                                alt="JMeter results table before optimisation"
                                width={1919}
                                height={1058}
                                caption="Before: samples 29 to 65 (20 Jul 2024). Slowest request 113,765 ms, latency up to 107,811 ms, average 11,654 ms across 65 samples. Responses were about 179 KB each."
                            />
                            <Figure
                                src={IMAGES.jmeterAfter}
                                alt="JMeter results table after optimisation"
                                width={1465}
                                height={580}
                                caption="After: samples 4,964 to 4,982 (22 Jul 2024), taken during a long concurrent run. Most requests complete in roughly 500 to 1,000 ms, the slowest at 4,813 ms, peak latency 507 ms. Responses were about 85 KB each."
                            />
                            <Figure
                                src={IMAGES.gtmetrix}
                                alt="GTmetrix report showing grade A, performance 99 percent, structure 93 percent, LCP 752 milliseconds"
                                caption="GTmetrix, 22 Jul 2024: grade A, performance 99%, structure 93%, LCP 752 ms."
                            />
                        </div>

                        <Callout title="How to read these">
                            The two JMeter captures show different windows of
                            different runs, so they are not an exact
                            like-for-like percentage. They show the order of
                            magnitude: requests that took tens of seconds and
                            ran into timeouts versus requests that finish in
                            under a second or two.
                        </Callout>
                    </section>

                    {/* DESIGN */}
                    <section id="design" className="scroll-mt-28 space-y-5">
                        <SectionHeading id="design">
                            Design process
                        </SectionHeading>
                        <p className="text-gray-600 leading-relaxed">
                            I drew on AISEC&apos;s site for structure, then
                            mocked up the pages in Figma before building. Fast
                            pages let the team iterate on the real site without
                            waiting on it.
                        </p>
                        <div className="grid sm:grid-cols-2 gap-5">
                            <Figure
                                src={IMAGES.inspiration}
                                alt="AISEC website used as inspiration"
                                caption="The AISEC site we used as a reference."
                            />
                            <Figure
                                src={IMAGES.figma}
                                alt="Figma mockups of the AFRAKEN site"
                                caption="Mockups in Figma."
                            />
                            <Figure
                                src={IMAGES.homePage}
                                alt="AFRAKEN home page"
                                caption="Delivered home page."
                            />
                            <Figure
                                src={IMAGES.eventsPage}
                                alt="AFRAKEN events page"
                                caption="Delivered events page."
                            />
                        </div>
                    </section>

                    {/* TEAM */}
                    <section id="team" className="scroll-mt-28 space-y-5">
                        <SectionHeading id="team">
                            Team &amp; delivery
                        </SectionHeading>
                        <p className="text-gray-600 leading-relaxed">
                            As lead I made the final call on technology, ran the
                            team check-ins, and kept stakeholders in the loop.
                            Tasks were tracked on a{" "}
                            <a
                                href={LINKS.figmaBoard}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-blue-600 underline"
                            >
                                Figma strategic board
                            </a>{" "}
                            rather than a standard tracker, and I matched work
                            to what each person did best.
                        </p>
                        <ul className="list-disc pl-5 space-y-2 text-gray-600">
                            <li>
                                Phone and meeting access to the AFRAKEN
                                chairpersons for quick clarifications and
                                feedback sessions.
                            </li>
                            <li>
                                Progress slides for the Jhub project manager on
                                pacing and priorities.
                            </li>
                            <li>
                                Mentor input when a goal needed translating into
                                tasks.
                            </li>
                        </ul>

                        <Figure
                            src={IMAGES.team}
                            alt="The AFRAKEN project team in front of Jhub and JKUAT banners"
                            caption="The team at JKUAT, in front of the Jhub Africa and JKUAT banners."
                        />

                        <ul className="grid sm:grid-cols-2 gap-x-6 gap-y-2 text-sm">
                            {TEAM.map((m, i) => (
                                <li
                                    key={i}
                                    className="flex items-baseline justify-between gap-3 border-b border-gray-100 py-1.5"
                                >
                                    <span className="text-gray-800 font-medium">
                                        {m.name}{" "}
                                        <span className="text-gray-400 font-normal">
                                            {m.role}
                                        </span>
                                    </span>
                                    <a
                                        href={m.linkedin}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-blue-600 hover:underline text-xs"
                                    >
                                        LinkedIn
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </section>

                    {/* OUTCOME */}
                    <section id="outcome" className="scroll-mt-28 space-y-5">
                        <SectionHeading id="outcome">Outcome</SectionHeading>
                        <p className="text-gray-600 leading-relaxed">
                            The prototype held up in client demos, and AFRAKEN
                            was impressed enough to give us access to their
                            hosting provider, databases and domain. From that
                            point their provider served the site.
                        </p>
                        <ol className="list-decimal pl-5 space-y-2 text-gray-600">
                            <li>
                                <strong>Migration.</strong> We moved the site to
                                their preferred provider. A day later it crashed
                                completely, even though it was a fresh WordPress
                                instance.
                            </li>
                            <li>
                                <strong>Recovery.</strong> I backed up the
                                databases, had the provider wipe the VM, and
                                reconfigured WordPress and the site myself. The
                                association&apos;s trust in the work grew from
                                there.
                            </li>
                            <li>
                                <strong>Release.</strong> The site went live to
                                AFRAKEN&apos;s members and the attachment was
                                completed with an A for the unit.
                            </li>
                            <li>
                                <strong>Follow-on work.</strong> AFRAKEN later
                                asked me to add a voting mechanism to the site
                                for electing a new chairperson, which ran
                                successfully. The project also led to the
                                EcoPulse Alliance engagement.
                            </li>
                        </ol>
                    </section>

                    {/* STATUS */}
                    <section id="status" className="scroll-mt-28 space-y-5">
                        <div className="border border-gray-200 bg-white rounded-lg p-5 flex flex-col sm:flex-row gap-5 items-start">
                            <div className="relative w-full sm:w-56 aspect-[4/3] flex-shrink-0 bg-gray-100 rounded border border-gray-200 overflow-hidden">
                                <Image
                                    src={IMAGES.awsCert}
                                    alt="AWS Community Day Kenya speaker credential"
                                    fill
                                    className="object-contain p-1"
                                />
                            </div>
                            <div className="space-y-2">
                                <p className="font-semibold text-gray-900">
                                    Later presented at AWS Community Day Kenya
                                </p>
                                <p className="text-sm text-gray-600 leading-relaxed">
                                    I used the constraints from this project in
                                    my 2026 talk, &quot;Architecting for African
                                    Realities&quot;, on keeping systems reliable
                                    with limited compute and infrastructure.
                                </p>
                                <a
                                    href={LINKS.awsCred}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-block text-sm text-blue-600 hover:underline"
                                >
                                    View speaker credential
                                </a>
                            </div>
                        </div>
                    </section>

                    {/* CONTACT */}
                    <section className="border-t border-gray-200 pt-8 space-y-3">
                        <h2 className="text-lg font-bold text-gray-900">
                            Referees available on request
                        </h2>
                        <p className="text-sm text-gray-600">
                            Mark Victor Kithinji, software engineer, Nairobi,
                            Kenya.
                        </p>
                        <div className="flex flex-wrap gap-3 text-sm">
                            <a
                                href={`mailto:${LINKS.email}`}
                                className="text-blue-600 hover:underline"
                            >
                                {LINKS.email}
                            </a>
                            <span className="text-gray-300">|</span>
                            <a
                                href={`tel:${LINKS.phone}`}
                                className="text-blue-600 hover:underline"
                            >
                                {LINKS.phone}
                            </a>
                            <span className="text-gray-300">|</span>
                            <a
                                href={LINKS.linkedin}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-blue-600 hover:underline"
                            >
                                LinkedIn
                            </a>
                        </div>
                    </section>
                </main>
            </div>
        </div>
    );
}
