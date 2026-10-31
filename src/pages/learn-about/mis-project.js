import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";

const FARM_PHOTO = "/meadow/IMG-20260830-WA0034 (1).jpg";
const DATA_REPO = "https://github.com/VictorCodebase/meadow-ai-data";

const SECTIONS = [
    ["skills", "Skills in practice"],
    ["glance", "At a glance"],
    ["users", "Who it was for"],
    ["v1", "Model 1: Stress-testing the model"],
    ["v2", "Model 2: A white-box scoring engine"],
    ["v3", "Model 3: Deigning validation first approach"],
    ["llm", "The LLM layer"],
    ["status", "Where it stands"],
    ["reproduce", "Reproduce it"],
];

// ---------- helpers (same patterns as the /doc pages) ----------
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

function CodeBlock({ children }) {
    return (
        <pre className="bg-gray-900 text-gray-100 rounded-lg p-4 overflow-x-auto text-sm font-mono leading-relaxed">
            <code>{children}</code>
        </pre>
    );
}

function Section({ id, title, children }) {
    const copyLink = () =>
        navigator.clipboard.writeText(
            window.location.origin + window.location.pathname + "#" + id,
        );
    return (
        <section id={id} className="scroll-mt-28 space-y-5 py-2">
            <div className="flex items-center justify-between">
                <h2 className="text-2xl font-bold text-gray-900 border-b pb-2 flex-1">
                    {title}
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

function Callout({ title, children, tone = "orange" }) {
    const tones = {
        orange: "bg-orange-50 border-orange-700 text-orange-900 [&_h4]:text-orange-800",
        blue: "bg-blue-50 border-blue-600 text-blue-900 [&_h4]:text-blue-800",
    };
    return (
        <div className={`border-l-4 p-4 rounded-r ${tones[tone]}`}>
            <h4 className="font-bold text-sm mb-1">{title}</h4>
            <div className="text-sm leading-relaxed">{children}</div>
        </div>
    );
}

function Stat({ value, label }) {
    return (
        <div className="bg-white border border-gray-200 rounded-lg p-4">
            <p className="text-2xl font-extrabold text-gray-900 font-mono">
                {value}
            </p>
            <p className="text-xs text-gray-500 mt-1 leading-snug">{label}</p>
        </div>
    );
}

function Bar({ label, value, color, note }) {
    return (
        <div className="space-y-1">
            <div className="flex justify-between text-sm">
                <span className="text-gray-700">
                    {label}{" "}
                    {note && (
                        <span className="text-gray-400 text-xs">{note}</span>
                    )}
                </span>
                <span className="font-mono font-semibold text-gray-900">
                    {value}%
                </span>
            </div>
            <div className="h-3 bg-gray-100 rounded-full overflow-hidden">
                <div
                    className={`h-full rounded-full ${color}`}
                    style={{ width: `${value}%` }}
                />
            </div>
        </div>
    );
}

function GenCard({ gen, name, badge, badgeClass, children }) {
    return (
        <div className="border border-gray-200 rounded-lg p-5 bg-white space-y-2">
            <div className="flex items-center gap-2 flex-wrap">
                <span className="font-mono font-bold text-blue-700">{gen}</span>
                <span className={`text-xs px-2 py-0.5 rounded ${badgeClass}`}>
                    {badge}
                </span>
            </div>
            <p className="font-semibold text-gray-800 text-sm">{name}</p>
            <p className="text-gray-600 text-sm leading-relaxed">{children}</p>
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
                            className={`border-t border-gray-100 align-top ${i % 2 === 0 ? "bg-white" : "bg-gray-50"}`}
                        >
                            {r.map((c, j) => (
                                <td
                                    key={j}
                                    className={`px-3 py-2 ${j === 0 ? "font-semibold text-gray-900" : "text-gray-600"}`}
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

function Steps({ items, color = "bg-orange-700" }) {
    return (
        <div className="space-y-2">
            {items.map(([title, desc], i) => (
                <div key={i} className="flex gap-4 items-start">
                    <span
                        className={`flex-shrink-0 w-6 h-6 ${color} text-white text-xs font-bold rounded-full flex items-center justify-center mt-0.5`}
                    >
                        {i + 1}
                    </span>
                    <p className="text-gray-600 text-sm">
                        <span className="font-semibold text-gray-800">
                            {title}
                        </span>
                        : {desc}
                    </p>
                </div>
            ))}
        </div>
    );
}

// ---------- page ----------
export default function MISArticle() {
    const [activeSection, setActiveSection] = useState("");

    useEffect(() => {
        const handleScroll = () => {
            let current = "";
            document.querySelectorAll("section[id]").forEach((s) => {
                if (window.scrollY >= s.offsetTop - 150)
                    current = s.getAttribute("id");
            });
            setActiveSection(current);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <div className="min-h-screen bg-gray-50 text-gray-800 font-sans selection:bg-blue-100">
            <Head>
                <title>Meadow Intelligence Suite | Technical record</title>
                <meta
                    name="description"
                    content="A crop-planning tool for African farm managers, built through three engineering iterations. Technical record by Mark Kithinji."
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
                            Meadow Intelligence Suite
                        </h1>
                    </div>
                    <span className="text-xs font-mono bg-gray-100 px-2 py-1 rounded text-gray-500">
                        Technical record
                    </span>
                </div>
            </header>

            <div className="max-w-7xl mx-auto px-6 py-12 flex flex-col lg:flex-row gap-12">
                <aside className="hidden lg:block w-64 flex-shrink-0">
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
                    {/* Intro */}
                    <div className="space-y-5">
                        <h1 className="text-4xl font-extrabold text-gray-900 tracking-tight">
                            Meadow Intelligence Suite
                        </h1>
                        <p className="text-lg text-gray-600 leading-relaxed">
                            A crop-planning tool for African farm managers,
                            shaped by field research and refined through three
                            engineering iterations.
                        </p>
                        <p className="text-gray-600 leading-relaxed">
                            Replaced a ML approach that needed ~67,500
                            hand-collected samples with climate envelope
                            modelling on freely available historical weather
                            data,{" "}
                            <b>
                                making crop-suitability prediction viable where
                                African agricultural data barely exists.
                            </b>{" "}
                            <br />
                            Included a LLM layer (Llama via Groq) to turn model
                            output into interpratable insights.
                        </p>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                            <Stat
                                value="3"
                                label="model generations, each driven by evidence"
                            />
                            <Stat
                                value="4"
                                label="diagnostic tests run before trusting a result"
                            />
                            <Stat
                                value="6"
                                label="climate variables scored per planting window"
                            />
                            <Stat
                                value="3"
                                label="field visit groups that redirected the product"
                            />
                        </div>
                    </div>
                    {/* SKILLS */}
                    <Section id="skills" title="Skills in practice">
                        <div className="grid sm:grid-cols-2 gap-4">
                            {[
                                [
                                    "Model evaluation",
                                    "Shuffled-label controls, grouped validation, error anatomy, duplicate audits, sensitivity design.",
                                ],
                                [
                                    "Backend and data services",
                                    "Node/Express endpoints, JSON contracts, retrying and caching API client, NaN handling, structured logging.",
                                ],
                                [
                                    "LLM applications",
                                    "Llama via Groq grounded on model output, prompt design for token economy, a planned faithfulness test.",
                                ],
                                [
                                    "Product research",
                                    "Field visits, requirement pivots, low-connectivity constraints, Figma hi-fi design.",
                                ],
                                [
                                    "Climate and agri data",
                                    "CMIP6 vs observation, bias correction, EcoCrop limiting-factor logic.",
                                ],
                            ].map(([t, d]) => (
                                <div
                                    key={t}
                                    className="border border-gray-200 bg-white rounded-lg p-4 space-y-1"
                                >
                                    <p className="font-semibold text-gray-800 text-sm">
                                        {t}
                                    </p>
                                    <p className="text-gray-600 text-sm leading-relaxed">
                                        {d}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </Section>

                    {/* GLANCE */}
                    <Section id="glance" title="At a glance">
                        <div className="grid sm:grid-cols-2 gap-x-8 gap-y-3 text-sm">
                            {[
                                [
                                    "Role",
                                    "Team lead and architect. Field research, LLM integration, UI design (Figma), v3 design",
                                ],
                                ["Period", "2024 – 2026, JKUAT"],
                                [
                                    "Stack",
                                    "Python, scikit-learn, XGBoost, Node/Express, Open-Meteo API, Llama via Groq",
                                ],
                                [
                                    "Origin",
                                    "Call for Code 2024, an IBM Watson ML farm-management concept",
                                ],
                            ].map(([k, v]) => (
                                <div key={k}>
                                    <p className="font-semibold text-gray-900">
                                        {k}
                                    </p>
                                    <p className="text-gray-600">{v}</p>
                                </div>
                            ))}
                        </div>

                        <div className="grid md:grid-cols-3 gap-4">
                            <GenCard
                                gen="v1"
                                name="Baseline classifier"
                                badge="Evaluated"
                                badgeClass="bg-stone-100 text-stone-700"
                            >
                                A 198-variety Random Forest, XGBoost and KNN
                                baseline, stress-tested with four diagnostics.
                                Its findings set the direction for everything
                                after.
                            </GenCard>
                            <GenCard
                                gen="v2"
                                name="Scoring engine"
                                badge="Working prototype"
                                badgeClass="bg-blue-50 text-blue-700"
                            >
                                White-box planting-window scoring over six
                                climate variables, served over REST with
                                per-variable logs.
                            </GenCard>
                            <GenCard
                                gen="v3"
                                name="Suitability model"
                                badge="Design ready"
                                badgeClass="bg-blue-600 text-white"
                            >
                                A limiting-factor model built on sourced
                                tolerance ranges, with uncertainty bands and a
                                validation plan written first.
                            </GenCard>
                        </div>
                    </Section>

                    {/* USERS */}
                    <Section id="users" title="Who it was for">
                        <p className="text-gray-600 leading-relaxed">
                            We went to the fields before building further: the
                            JKUAT farm manager and farmers, then Shabangu Farms
                            in Juja. Two findings reshaped the product, and we
                            followed them.
                        </p>

                        <div className="relative w-full h-122 bg-gray-200 rounded-lg overflow-hidden">
                            <Image
                                src={FARM_PHOTO}
                                alt="Smallholder farmers explaining the realities of farming to the team"
                                fill
                                className="object-cover"
                            />
                        </div>
                        <p className="text-gray-500 text-xs italic -mt-2">
                            Smallholder farmers walking us through farming from
                            their side.
                        </p>

                        <div className="grid sm:grid-cols-2 gap-4">
                            <div className="border border-gray-200 bg-white rounded-lg p-4 space-y-2">
                                <p className="font-semibold text-gray-800 text-sm">
                                    Smallholders: a different delivery problem
                                </p>
                                <ul className="list-disc pl-5 text-sm text-gray-600 space-y-1">
                                    <li>Mostly no smartphones</li>
                                    <li>
                                        No reliable connectivity; roaming data
                                        is costly
                                    </li>
                                    <li>Limited tech familiarity</li>
                                </ul>
                            </div>
                            <div className="border border-blue-200 bg-blue-50 rounded-lg p-4 space-y-2">
                                <p className="font-semibold text-blue-800 text-sm">
                                    Farm managers: the right fit
                                </p>
                                <ul className="list-disc pl-5 text-sm text-gray-700 space-y-1">
                                    <li>Default to data-driven decisions</li>
                                    <li>
                                        Ask about market price and return, not
                                        only survival
                                    </li>
                                    <li>
                                        Plan far ahead for buyers who expect
                                        consistency
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <p className="text-gray-600 leading-relaxed">
                            The product moved with them: farm managers as the
                            audience, financial framing, long-term planning.
                            Because managers need to trust and challenge the
                            output, every scoring engine here is white-box.
                        </p>
                    </Section>

                    {/* V1 */}
                    <Section
                        id="v1"
                        title="Model 1:Stress-testing the first model"
                    >
                        <p className="text-gray-600 leading-relaxed">
                            The first model classified 198 crop varieties from
                            28 quarterly climate features (3,037 rows, 49
                            crops). Random Forest reached 66.12% and XGBoost
                            66.94%. <br />
                            The numbers seemed too good for 198 classes, so
                            before building on them we ran diagnostics designed
                            to find where the model would break.
                        </p>

                        <Table
                            head={["Test", "Result", "What it told me"]}
                            rows={[
                                [
                                    "Shuffled labels",
                                    "0.66% vs 0.51% chance",
                                    "The pipeline is sound: no leakage bug",
                                ],
                                [
                                    "Error anatomy",
                                    "Same-crop confusions 5.8% vs 1.8% expected",
                                    "Errors cross crops, which sharpened my picture of what the features capture",
                                ],
                                [
                                    "Collapse to crop level",
                                    "66.1% → 67.3%",
                                    "Variety-level labelling was not the bottleneck",
                                ],
                                [
                                    "Leave-sites-out",
                                    "70.3% → 5.4% (baseline 5.2%)",
                                    "Generalising to unseen sites needs a different approach",
                                ],
                            ]}
                        />

                        <div className="bg-white border border-gray-200 rounded-lg p-5 space-y-4">
                            <p className="font-semibold text-gray-800 text-sm">
                                Crop prediction, 35 crops with at least 4
                                varieties
                            </p>
                            <Bar
                                label="Random 5-fold split"
                                value={70.3}
                                color="bg-blue-500"
                            />
                            <Bar
                                label="Unseen varieties and sites"
                                value={5.4}
                                color="bg-blue-300"
                            />
                            <Bar
                                label="Majority-class baseline"
                                value={5.2}
                                color="bg-gray-400"
                            />
                        </div>

                        <p className="text-gray-600 leading-relaxed">
                            The diagnostics pointed at the data. 188 of 198
                            varieties have exactly 15 rows, (a results of one
                            site across about 15 seasons). <br />{" "}
                            <strong>The Problem: </strong>A classifier at 500
                            samples per class would need roughly 99,000 rows.
                            Only 3,037 were available.
                        </p>

                        <Callout tone="blue" title="The decision this drove">
                            Rather than collect 99,000 labelled rows, I moved
                            from learning crop requirements to encoding them: a
                            knowledge-based approach that needs no labelled
                            data.
                        </Callout>
                    </Section>

                    {/* V2 */}
                    <Section
                        id="v2"
                        title="Model 2: A white-box scoring engine"
                    >
                        <p className="text-gray-600 leading-relaxed">
                            With the approach changed, v2 compares a
                            region&rsquo;s climate against each crop&rsquo;s
                            reference conditions across planting windows. It is
                            config-driven, served through Node/Express
                            endpoints, fed by a cached, retrying Open-Meteo
                            client, and logs every variable of every window so
                            any score can be traced.
                        </p>

                        <Steps
                            color="bg-blue-600"
                            items={[
                                [
                                    "Reference",
                                    "a daily six-variable trajectory per crop (temperature, soil moisture, rainfall, humidity, wind)",
                                ],
                                [
                                    "Weights",
                                    "per-variable weights from importance and in-window variation",
                                ],
                                [
                                    "Match",
                                    "30-day sliding windows, 10-day smoothing, exponential-decay scoring",
                                ],
                                [
                                    "Rank and log",
                                    "ranked windows with k, weight, NaN counts and score per variable",
                                ],
                                ["Explain", "results passed to the LLM layer"],
                            ]}
                        />

                        <Callout
                            tone="blue"
                            title="What v2 taught the v3 design"
                        >
                            v2 scores each region against one reference
                            trajectory per crop (22 crops, 11 locations), which
                            made it the right way to prove the pipeline end to
                            end. It returns similarity scores. v3 replaces
                            reference points with tolerance ranges, adds
                            uncertainty, and lets the worst factor limit the
                            result. I name v2 for what it is, window
                            pattern-matching, and reserve &ldquo;climate
                            envelope&rdquo; for v3.
                        </Callout>
                    </Section>

                    {/* V3 */}
                    <Section id="v3" title="Designing v3: validation first">
                        <p className="text-gray-600 leading-relaxed">
                            v3 is specified end to end: model, inputs,
                            algorithm, validation plan and work breakdown. It
                            predicts crop-level suitability (0 to 1) with the
                            limiting variable and an uncertainty range, from
                            published tolerance ranges (FAO EcoCrop, with
                            Recocrop as reference implementation). Release one
                            covers about 10 Kenyan crops.
                        </p>

                        <CodeBlock>{`S_T = trapezoid(T over season, Tmin, Topt_lo, Topt_hi, Tmax)
S_P = trapezoid(P over season, Pmin, Popt_lo, Popt_hi, Pmax)
S   = 0                if min(T over season) < Tkill
    = min(S_T, S_P)    otherwise        # the worst factor limits
limiting = argmin(S_T, S_P)
uncertainty: repeat over N years of monthly data -> quantiles, P(S >= threshold)`}</CodeBlock>

                        <p className="text-gray-600 leading-relaxed">
                            The validation plan is written before the engine:
                        </p>
                        <ul className="list-disc pl-5 text-sm text-gray-600 space-y-1.5">
                            <li>
                                Reproduce Recocrop outputs for 5 crops at 10
                                locations.
                            </li>
                            <li>
                                Beat an elevation-only baseline, a
                                constant-climate baseline and a
                                shuffled-parameter control.
                            </li>
                            <li>
                                Check about 10 crops at 10 locations against
                                agro-ecological references, reporting AUC and
                                rank agreement.
                            </li>
                            <li>
                                Hindcast the 2011, 2017 and 2022 drought years.
                            </li>
                            <li>
                                Perturb parameters ±15% and report rank
                                stability.
                            </li>
                        </ul>

                        <Callout
                            tone="blue"
                            title="Success criteria, fixed before results"
                        >
                            AUC clearly above baselines; at least 80% of known
                            cases correct; rank correlation of 0.8 or higher
                            under perturbation; zero invented numbers across 50
                            LLM outputs.
                        </Callout>
                    </Section>

                    {/* LLM */}
                    <Section id="llm" title="The LLM layer">
                        <p className="text-gray-600 leading-relaxed">
                            Llama, via the Groq API, turns the model&rsquo;s
                            scores, crop, location and supporting context into
                            plain language a manager can act on. The prompt is
                            engineered to carry enough context at low token
                            cost.
                        </p>
                        <p className="text-gray-600 leading-relaxed">
                            Its evaluation is already designed: about 50 cases
                            measuring the unsupported-claim rate. Does every
                            number in the text appear in the input, are crop and
                            location right, and is every recommendation
                            supported.
                        </p>
                    </Section>

                    {/* STATUS */}
                    <Section id="status" title="Where it stands">
                        <div className="grid sm:grid-cols-2 gap-4">
                            <div className="border border-blue-200 bg-blue-50 rounded-lg p-4 space-y-2">
                                <p className="font-semibold text-blue-800 text-sm">
                                    Delivered
                                </p>
                                <ul className="list-disc pl-5 text-sm text-gray-700 space-y-1">
                                    <li>
                                        Baseline classifier with a full
                                        diagnostic suite
                                    </li>
                                    <li>
                                        White-box scoring engine with REST
                                        endpoints and per-variable logs
                                    </li>
                                    <li>Llama (Groq) explanation prototype</li>
                                    <li>
                                        Field research that set the product
                                        direction
                                    </li>
                                    <li>
                                        v3 design with validation plan and
                                        success criteria
                                    </li>
                                </ul>
                            </div>
                            <div className="border border-gray-200 bg-white rounded-lg p-4 space-y-2">
                                <p className="font-semibold text-gray-800 text-sm">
                                    Next
                                </p>
                                <ul className="list-disc pl-5 text-sm text-gray-700 space-y-1">
                                    <li>
                                        Implement v3 in Python with Recocrop
                                        unit tests
                                    </li>
                                    <li>
                                        Run the validation plan against known
                                        cases
                                    </li>
                                    <li>
                                        Run the 50-case LLM faithfulness test
                                    </li>
                                    <li>
                                        Add the price layer for return-based
                                        planning
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </Section>

                    {/* REPRODUCE */}
                    <Section id="reproduce" title="Reproduce it">
                        <p className="text-gray-600 leading-relaxed">
                            The training data and crop file live in{" "}
                            <a
                                href={DATA_REPO}
                                className="text-blue-600 underline"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                meadow-ai-data
                            </a>
                            . The diagnostics script reproduces the 66.12%
                            baseline and every number in the table above.
                        </p>
                        <CodeBlock>{`pip install pandas numpy scikit-learn scipy
python variety_classifier_diagnostics.py`}</CodeBlock>
                    </Section>

                    <footer className="border-t border-gray-200 pt-6 text-sm text-gray-500 flex flex-wrap gap-x-6 gap-y-2">
                        <Link
                            href="/"
                            className="text-blue-600 hover:underline"
                        >
                            Back to products
                        </Link>
                        <a
                            href="https://creds.awscommunityday.com/c/ACD-ACDKEN-2026-SPK-0003"
                            className="text-blue-600 hover:underline"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            AWS Community Day Kenya talk credential
                        </a>
                    </footer>
                </main>
            </div>
        </div>
    );
}
