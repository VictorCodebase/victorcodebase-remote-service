import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";

const SLIDES_URL =
    "https://www.figma.com/slides/okPcFALW5VtcUPvQcaOKhN/Untitled?t=5UsKep8meoLjv54Y-6"; 
const CREDENTIAL_URL =
    "https://creds.awscommunityday.com/c/ACD-ACDKEN-2026-SPK-0003";
const CREDENTIAL_CODE = "ACD-ACDKEN-2026-SPK-0003";
const NOTEBOOK_URL =
    "https://colab.research.google.com/drive/1whLXsTevBXL6wF1H2G04e6QZo1m2LaRB#scrollTo=mgjoSVWQUQ_q";

const IMG = {
    award: "/learn-about/aws-talk/0J0A1024.jpg",
    certificate: "/learn-about/aws-talk/aws-community-day-cert.png",
    misEnvelope: "/learn-about/aws-community-day/mis-climate-envelope.png",
    gtmetrixBaseline: "/learn-about/aws-community-day/gtmetrix-baseline.png",
    gtmetrixCdn: "/learn-about/afraken/gtmetrix-report.png",
    jmeterBefore: "/learn-about/afraken/jmeter-before.png",
    jmeterAfter: "/learn-about/afraken/jmeter-after.png",
};

const SECTIONS = [
    ["glance", "At a glance"],
    ["thesis", "The thesis"],
    ["data", "Constraint: scarce data"],
    ["compute", "Constraint: scarce compute"],
    ["takeaways", "Takeaways"],
    ["record", "The record"],
];

/* ---------------------------- helpers ---------------------------- */
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

function Callout({ title, children }) {
    return (
        <div className="bg-orange-50 border-l-4 border-orange-700 p-4 rounded-r">
            <h4 className="font-bold text-orange-800 text-sm uppercase mb-1">
                {title}
            </h4>
            <div className="text-orange-900 text-sm space-y-1">{children}</div>
        </div>
    );
}

function Section({ id, letter, title, children }) {
    const copyLink = () =>
        navigator.clipboard.writeText(
            window.location.origin + window.location.pathname + "#" + id,
        );
    return (
        <section id={id} className="scroll-mt-28 space-y-6 py-4">
            <div className="flex items-center justify-between">
                <h2 className="text-2xl font-bold text-gray-900 border-b pb-2 flex-1">
                    {letter}. {title}
                </h2>
                <button
                    onClick={copyLink}
                    className="text-gray-400 hover:text-blue-600 transition-colors text-sm px-3 py-1 rounded hover:bg-gray-100"
                    title="Copy link"
                >
                    🔗 Copy Link
                </button>
            </div>
            {children}
        </section>
    );
}

function Figure({ src, alt, caption }) {
    return (
        <figure className="space-y-2">
            <a
                href={src}
                target="_blank"
                rel="noopener noreferrer"
                className="block bg-white border border-gray-200 rounded-lg overflow-hidden hover:border-blue-300 transition-colors"
            >
                <Image
                    src={src}
                    alt={alt}
                    width={1600}
                    height={900}
                    className="w-full h-auto"
                />
            </a>
            <figcaption className="text-xs text-gray-500 italic">
                {caption}
            </figcaption>
        </figure>
    );
}

function Stat({ value, label }) {
    return (
        <div className="bg-white border border-gray-200 rounded-lg p-4">
            <p className="font-mono font-bold text-xl text-blue-700">{value}</p>
            <p className="text-xs text-gray-500 mt-1 leading-snug">{label}</p>
        </div>
    );
}

function Table({ head, rows }) {
    return (
        <div className="overflow-x-auto">
            <table className="text-sm w-full border-collapse">
                <thead>
                    <tr className="bg-gray-100">
                        {head.map((h) => (
                            <th
                                key={h}
                                className="text-left px-3 py-2 text-gray-600 font-bold"
                            >
                                {h}
                            </th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {rows.map((r, i) => (
                        <tr
                            key={i}
                            className={`border-t border-gray-100 ${i % 2 === 0 ? "bg-white" : "bg-gray-50"}`}
                        >
                            {r.map((c, j) => (
                                <td
                                    key={j}
                                    className={`px-3 py-2 ${j === 0 ? "font-semibold text-gray-800" : "text-gray-600"}`}
                                >
                                    {c}
                                </td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

/* ------------------------------ page ----------------------------- */
export default function AwsCommunityDayTalk() {
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
                <title>
                    Architecting for African Realities | AWS Community Day Kenya
                </title>
                <meta
                    name="description"
                    content="A 30-minute AWS Community Day Kenya talk on building reliable systems under scarce compute, infrastructure and data, with measured results from two real projects."
                />
            </Head>

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
                        <h1 className="font-semibold text-gray-700">
                            AWS Community Day Talk
                        </h1>
                    </div>
                    <span className="text-xs font-mono bg-gray-100 px-2 py-1 rounded text-gray-500">
                        Jul 2026
                    </span>
                </div>
            </header>

            <div className="max-w-7xl mx-auto px-6 py-12 flex flex-col lg:flex-row gap-12">
                <aside className="hidden lg:block w-64 flex-shrink-0">
                    <nav className="sticky top-24 space-y-1">
                        <p className="uppercase text-xs font-bold text-gray-400 mb-4 tracking-wider">
                            Contents
                        </p>
                        {SECTIONS.map(([id, label]) => (
                            <NavLink key={id} id={id} active={activeSection}>
                                {label}
                            </NavLink>
                        ))}
                    </nav>
                </aside>

                <main className="flex-1 max-w-4xl space-y-16">
                    {/* Intro */}
                    <div className="space-y-4">
                        <h1 className="text-4xl font-extrabold text-gray-900 tracking-tight">
                            Architecting for African Realities
                        </h1>
                        <p className="text-lg text-gray-600 leading-relaxed">
                            A 30-minute session at AWS Community Day Kenya
                            (Pwani Edition) on keeping systems reliable when
                            compute, infrastructure and data are all scarce,
                            told through two projects I built and measured.
                        </p>
                        <Figure
                            src={IMG.award}
                            alt="Mark Kithinji receiving the speaker award at AWS Community Day Kenya"
                            caption="Receiving the speaker award at AWS Community Day Kenya (Pwani Edition), July 2026."
                        />
                        <div className="flex gap-4 flex-wrap">
                            <a
                                href={CREDENTIAL_URL}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 bg-gray-900 hover:bg-gray-700 text-white text-sm font-medium px-4 py-2 rounded-lg transition-colors"
                            >
                                Verify speaker credential ↗
                            </a>
                            <iframe
                                style={{
                                    border: "1px solid rgba(0, 0, 0, 0.1)",
                                }}
                                width="800"
                                height="450"
                                src="https://embed.figma.com/slides/3P7Yj7ZC4H116ycGIxB3bE/AWS-talk--Copy-?node-id=25-20&embed-host=share"
                                allowFullScreen
                                title="AWS Talk Figma Slides"
                            ></iframe>
                        </div>
                    </div>

                    {/* A */}
                    <Section id="glance" letter="A" title="At a glance">
                        <div className="grid sm:grid-cols-3 gap-4">
                            <Stat
                                value="114 s → 4.8 s"
                                label="Worst-case request time on a 1 GB server (JMeter, AFRAKEN)"
                            />
                            <Stat
                                value="4.2 s → 0.8 s"
                                label="Largest Contentful Paint after adding a CDN (controlled demo)"
                            />
                            <Stat
                                value="67,500+"
                                label="Hand-collected training rows avoided by changing the modelling approach (MeadowAI)"
                            />
                        </div>
                        <Table
                            head={["", ""]}
                            rows={[
                                [
                                    "Event",
                                    "AWS Community Day Kenya, Pwani Edition, July 2026",
                                ],
                                [
                                    "Session",
                                    "“Architecting for African Realities”, 30 minutes",
                                ],
                                [
                                    "Role",
                                    "Speaker. Content drawn from systems I designed, built and measured",
                                ],
                                [
                                    "Projects covered",
                                    "AFRAKEN (cloud and performance), MeadowAI (data and ML architecture)",
                                ],
                                [
                                    "Credential",
                                    `Speaker credential, code ${CREDENTIAL_CODE}`,
                                ],
                            ]}
                        />
                    </Section>

                    {/* B */}
                    <Section id="thesis" letter="B" title="The thesis">
                        <p className="text-gray-600">
                            Most architecture advice assumes plentiful compute,
                            clean data and dependable networks. Many African
                            deployments get none of the three. The talk argues
                            for treating the constraint as the design input
                            rather than something to work around: read the
                            requirements closely, then choose the architecture
                            the constraint allows.
                        </p>
                        <div className="grid sm:grid-cols-3 gap-4">
                            {[
                                [
                                    "Compute",
                                    "A free-tier VM with 2 vCPUs and 1 GB of RAM had to serve a read-heavy public site.",
                                ],
                                [
                                    "Infrastructure",
                                    "Hosting options either demanded large long-term commitments up front or fit the free tier’s narrow envelope.",
                                ],
                                [
                                    "Data",
                                    "Public datasets covered other continents well. For African crops there was almost nothing to train on.",
                                ],
                            ].map(([t, d]) => (
                                <div
                                    key={t}
                                    className="border border-gray-200 rounded-lg p-4 bg-white space-y-1"
                                >
                                    <p className="font-semibold text-blue-700">
                                        {t}
                                    </p>
                                    <p className="text-sm text-gray-600">{d}</p>
                                </div>
                            ))}
                        </div>
                    </Section>

                    {/* C */}
                    <Section
                        id="data"
                        letter="C"
                        title="Constraint: scarce data (MeadowAI)"
                    >
                        <p className="text-gray-600">
                            MeadowAI predicts crop suitability and long-term
                            profitability for farm managers. My starting
                            architecture was the standard one for this kind of
                            product, and it made a data demand the region could
                            not meet.
                        </p>
                        <Callout title="The arithmetic">
                            <p>
                                135 crop varieties (classes) at 500 samples
                                each, the conservative floor that still risks
                                overfitting, is <strong>67,500 rows</strong>. At
                                the usual 1,000 per class it is{" "}
                                <strong>135,000 rows</strong>, all collected by
                                hand. That is a project in itself, with donors.
                            </p>
                        </Callout>
                        <p className="text-gray-600">
                            After five classifier iterations and months of
                            research, I changed the approach instead of the
                            dataset: <strong>climate envelope modelling</strong>
                            . It is a white-box method that compares a region’s
                            climate against each crop’s ideal growing
                            conditions, so it runs on historical weather records
                            that are freely available, and its output can be
                            explained to the person acting on it.
                        </p>
                        <Table
                            head={[
                                "",
                                "Conventional ML pipeline",
                                "Climate envelope pipeline",
                            ]}
                            rows={[
                                [
                                    "Input",
                                    "Labelled samples per crop (67,500 to 135,000 rows)",
                                    "Historical weather data (open)",
                                ],
                                [
                                    "Architecture",
                                    "Data sources → ingest gateway → data lake → crop prediction ML → dashboard",
                                    "Data sources → API Gateway → Lambda → S3 → dashboard and API",
                                ],
                                [
                                    "Data effort",
                                    "Manual collection at scale",
                                    "API ingestion",
                                ],
                                [
                                    "Explainability",
                                    "Model-dependent",
                                    "Transparent by construction",
                                ],
                            ]}
                        />
                        <Figure
                            src={IMG.misEnvelope}
                            alt="MeadowAI climate envelope modelling notebook"
                            caption="Climate envelope modelling in the working notebook."
                        />
                        <p className="text-gray-500 text-sm">
                            <a
                                href={NOTEBOOK_URL}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-blue-600 underline"
                            >
                                Open the notebook ↗
                            </a>{" "}
                            · Product story and field research:{" "}
                            <Link
                                href="/learn-about/mis-project"
                                className="text-blue-600 underline"
                            >
                                MeadowAI project page
                            </Link>
                        </p>
                    </Section>

                    {/* D */}
                    <Section
                        id="compute"
                        letter="D"
                        title="Constraint: scarce compute (AFRAKEN)"
                    >
                        <p className="text-gray-600">
                            AFRAKEN needed a WordPress site for an alumni
                            association. To stay inside Google Cloud’s free tier
                            we ran an <Code>e2-micro</Code>: 2 vCPUs, 30 GB
                            storage and <strong>1 GB of RAM</strong>. The
                            question was how to make that serve traffic reliably
                            without compromising any requirement.
                        </p>
                        <Callout title="What the requirements said">
                            <p>
                                <strong>Read-heavy:</strong> members follow
                                updates and visitors learn about the
                                organisation. <strong>Mostly static:</strong>{" "}
                                the only personalisation was member-only
                                sections. <strong>Spikes mattered:</strong>{" "}
                                around key events many alumni check details at
                                once.
                            </p>
                            <p>
                                Conclusion: the cheapest request is the one the
                                server never sees, so cache at the browser and
                                at the CDN.
                            </p>
                        </Callout>
                        <h3 className="font-semibold text-xl text-gray-800">
                            Measuring each step
                        </h3>
                        <p className="text-gray-600">
                            To isolate what each optimisation bought, I rebuilt
                            the problem as a small site on an AWS VM and re-ran
                            GTmetrix after every change.
                        </p>
                        <Table
                            head={[
                                "Step",
                                "Grade",
                                "Performance",
                                "Structure",
                                "LCP",
                            ]}
                            rows={[
                                ["Baseline", "D", "61%", "73%", "4.2 s"],
                                [
                                    "gzip + cache headers + keep-alive",
                                    "D",
                                    "61%",
                                    "84%",
                                    "3.9 s",
                                ],
                                [
                                    "CDN (CloudFront)",
                                    "A",
                                    "99%",
                                    "94%",
                                    "822 ms",
                                ],
                            ]}
                        />
                        <p className="text-gray-500 text-xs italic">
                            GTmetrix does not read cache headers on its free
                            tier, so the browser-caching benefit is understated
                            here.
                        </p>
                        <div className="grid md:grid-cols-1 gap-4">
                            
                            <Figure
                                src={IMG.gtmetrixCdn}
                                alt="GTmetrix with CDN, grade A"
                                caption="With a CDN: grade A, LCP 822 ms."
                            />
                        </div>
                        <h3 className="font-semibold text-xl text-gray-800">
                            The production result
                        </h3>
                        <p className="text-gray-600">
                            On the live AFRAKEN site, running on the 1 GB VM
                            with Cloudflare for cost and documentation, the same
                            principle held: GTmetrix{" "}
                            <strong>
                                Performance 99%, Structure 93%, LCP 752 ms
                            </strong>
                            . I load-tested with JMeter before and after.
                        </p>
                        <Table
                            head={["JMeter", "Before", "After"]}
                            rows={[
                                ["Slowest request", "113,765 ms", "4,813 ms"],
                                ["Typical request", "≈ 3,000 ms", "≈ 800 ms"],
                                ["Highest latency", "107,811 ms", "498 ms"],
                            ]}
                        />
                        <div className="grid md:grid-cols-2 gap-4">
                            <Figure
                                src={IMG.jmeterBefore}
                                alt="JMeter results before optimisation"
                                caption="Before: samples #29 to #65."
                            />
                            <Figure
                                src={IMG.jmeterAfter}
                                alt="JMeter results after optimisation"
                                caption="After: samples #4,964 to #4,982, taken during an extended concurrent test run."
                            />
                        </div>
                        <p className="text-gray-500 text-sm">
                            Full project story:{" "}
                            <Link
                                href="/learn-about/afraken-project"
                                className="text-blue-600 underline"
                            >
                                AFRAKEN project page
                            </Link>
                        </p>
                    </Section>

                    {/* E */}
                    <Section id="takeaways" letter="E" title="Takeaways">
                        <div className="space-y-3">
                            {[
                                [
                                    "Read the requirements as architecture.",
                                    "A read-heavy, mostly static workload pointed straight at caching. A need for predictions, not per-crop classification, pointed at envelope modelling.",
                                ],
                                [
                                    "Choose optimisations that complement the requirements.",
                                    "Member-only content kept working. The load dropped without removing a feature.",
                                ],
                                [
                                    "Isolate and measure every change.",
                                    "One change at a time, re-measured, so each decision can be defended with a number.",
                                ],
                                [
                                    "Replace the input you cannot get with one you can.",
                                    "Hand-collected labels became openly available weather history, and the product became viable.",
                                ],
                            ].map(([t, d], i) => (
                                <div key={t} className="flex gap-4 items-start">
                                    <span className="flex-shrink-0 w-6 h-6 bg-orange-700 text-white text-xs font-bold rounded-full flex items-center justify-center mt-0.5">
                                        {i + 1}
                                    </span>
                                    <div>
                                        <span className="font-semibold text-gray-800">
                                            {t}
                                        </span>
                                        <span className="text-gray-500">
                                            {" "}
                                            {d}
                                        </span>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <p className="text-gray-600">
                            In both cases, clever architecture is what made the
                            solution viable. It worked.
                        </p>
                    </Section>

                    {/* F */}
                    <Section id="record" letter="F" title="The record">
                        <div className="grid md:grid-cols-2 gap-6 items-start">
                            <Figure
                                src={IMG.certificate}
                                alt="AWS Community Day Kenya 2026 speaker certificate"
                                caption="Speaker certificate, AWS Community Day Kenya 2026."
                            />
                            <div className="space-y-3">
                                <p className="text-gray-600 text-sm">
                                    The credential is issued by the AWS
                                    Community Day Kenya organisers and can be
                                    verified online.
                                </p>
                                <p className="text-xs uppercase font-bold text-gray-400 tracking-wider">
                                    Confirmation code
                                </p>
                                <Code>{CREDENTIAL_CODE}</Code>
                                <div>
                                    <a
                                        href={CREDENTIAL_URL}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-sm text-blue-600 hover:text-blue-800 font-medium"
                                    >
                                        Verify credential ↗
                                    </a>
                                </div>
                            </div>
                        </div>
                    </Section>
                </main>
            </div>
        </div>
    );
}
