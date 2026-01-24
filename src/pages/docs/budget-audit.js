import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";

export default function BudgetAuditDocs() {
	const [activeSection, setActiveSection] = useState("");

	// Simple scroll spy to highlight active section in sidebar
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

	return (
		<div className="min-h-screen bg-gray-50 text-gray-800 font-sans selection:bg-blue-100">
			<Head>
				<title>Budget Audit | Documentation</title>
				<meta name="description" content="User guide and documentation for Budget Audit." />
			</Head>

			{/* --- Header --- */}
			<header className="bg-white border-b border-gray-200 sticky top-0 z-50">
				<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
					<div className="flex items-center gap-3">
						<Link href="/" className="font-bold text-xl text-blue-600 hover:opacity-80">
							VictorCodebase
						</Link>
						<span className="text-gray-300">/</span>
						<h1 className="font-semibold text-gray-700">Budget Audit Docs</h1>
					</div>
					<span className="text-xs font-mono bg-gray-100 px-2 py-1 rounded text-gray-500">v1.0.0</span>
				</div>
			</header>

			<div className="max-w-7xl mx-auto px-6 py-12 flex flex-col lg:flex-row gap-12">
				{/* --- Sidebar Navigation (Desktop) --- */}
				<aside className="hidden lg:block w-64 flex-shrink-0">
					<nav className="sticky top-24 space-y-1">
						<p className="uppercase text-xs font-bold text-gray-400 mb-4 tracking-wider">Contents</p>
						<NavLink id="account-setup" active={activeSection}>
							Account Setup
						</NavLink>
						<NavLink id="creating-budget" active={activeSection}>
							Creating a Budget
						</NavLink>
						<NavLink id="Adding-Documents-analytics" active={activeSection}>
							Adding Docs for Analytics
						</NavLink>
						<NavLink id="financial-analytics" active={activeSection}>
							Data & Analytics
						</NavLink>
						<NavLink id="settings" active={activeSection}>
							Settings & Management
						</NavLink>
						<NavLink id="data-handling" active={activeSection}>
							How Data is Handled
						</NavLink>
						<NavLink id="troubleshooting" active={activeSection}>
							Troubleshooting & FAQ
						</NavLink>
						<NavLink id="glossary" active={activeSection}>
							Glossary
						</NavLink>
						<NavLink id="privacy" active={activeSection}>
							Privacy Notice
						</NavLink>
					</nav>
				</aside>

				{/* --- Main Content --- */}
				<main className="flex-1 max-w-4xl space-y-16">
					{/* Introduction */}
					<div className="space-y-4">
						<h1 className="text-4xl font-extrabold text-gray-900 tracking-tight">Getting Started with Budget Audit</h1>
						<p className="text-lg text-gray-600 leading-relaxed">
							Welcome to Budget Audit! <br />
							This documentation should get you started on all you need to start managing your finances better.
						</p>
						{/* Screenshot Placeholder */}
						<div className="relative w-full h-64 bg-gray-200 rounded-lg border-2 border-dashed border-gray-300 flex items-center justify-center overflow-hidden text-gray-500">
							<Image
								src="/budget-audit/documentation-banner.png"
								alt="Budget Audit documentation banner"
								fill
								className="object-cover rounded-lg p-2"
							/>
						</div>
					</div>

					{/* SECTION A: Account Setup */}
					<section id="account-setup" className="scroll-mt-28 space-y-6">
						<div className="flex items-center justify-between">
							<h2 className="text-2xl font-bold text-gray-900 border-b pb-2 flex-1">A. Setting Up Accounts</h2>
							<button
								onClick={() => {
									navigator.clipboard.writeText(
										window.location.origin + window.location.pathname + "#account-setup",
									);
								}}
								className="text-gray-400 hover:text-blue-600 transition-colors text-sm px-3 py-1 rounded hover:bg-gray-100"
								title="Copy link to this section"
							>
								🔗 Copy Link
							</button>
						</div>

						<div className="space-y-4">
							<h3 className="font-semibold text-xl text-gray-800">1. First Time Setup</h3>
							<p className="text-gray-600">
								When you launch Budget Audit for the first time, you'll be prompted to create your initial
								account.
								<span className="font-medium text-gray-900"> Note:</span> This first account automatically
								becomes the <strong>Manager Account</strong>, giving you full administrative privileges.
							</p>
							<p className="text-gray-600">
								After account creation, you'll be automatically directed to the budgeting page. To add
								additional users or manage existing ones, navigate to the settings menu via the{" "}
								<strong>menu bar at the top-left</strong> of the application.
							</p>
						</div>

						<div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded-r">
							<h4 className="font-bold text-blue-700 text-sm uppercase mb-1">Manager Privileges</h4>
							<p className="text-blue-800 text-sm mb-2">As a Manager, you have the authority to:</p>
							<ul className="list-disc pl-5 text-sm text-blue-800 space-y-1">
								<li>Edit all user accounts and their details</li>
								<li>Add and remove participants</li>
								<li>Delete budgets you've authored</li>
								<li>Manage all vendor-account associations</li>
							</ul>
							<p className="text-blue-800 text-sm mt-3">
								<strong>Important:</strong> A Manager account cannot be deleted. To transfer manager rights,
								update the manager's profile details to reflect the new owner's information—this effectively
								hands over administrative control.
							</p>
						</div>

						<div className="space-y-4 mt-6">
							<h3 className="font-semibold text-xl text-gray-800">2. Adding Additional Participants</h3>
							<p className="text-gray-600">
								If multiple people will be using Budget Audit (household members, roommates, etc.):
							</p>
							<ol className="list-decimal pl-5 space-y-2 text-gray-600">
								<li>
									Open the <strong>menu bar</strong> (top-left corner)
								</li>
								<li>
									Select <strong>Settings</strong>
								</li>
								<li>
									Navigate to <strong>Manage Participants</strong>
								</li>
								<li>
									Click <strong>Add Participant</strong> and fill in their details
								</li>
							</ol>
							<p className="text-sm text-gray-500 italic">
								Participants can have transactions and budgets assigned to them specifically, allowing you to
								track individual spending within shared budgets.
							</p>
						</div>
					</section>

					{/* SECTION B: Creating a Budget */}
					<section id="creating-budget" className="scroll-mt-28 space-y-6">
						<div className="flex items-center justify-between">
							<h2 className="text-2xl font-bold text-gray-900 border-b pb-2 flex-1">B. Creating a Budget</h2>
							<button
								onClick={() => {
									navigator.clipboard.writeText(
										window.location.origin + window.location.pathname + "#creating-budget",
									);
								}}
								className="text-gray-400 hover:text-blue-600 transition-colors text-sm px-3 py-1 rounded hover:bg-gray-100"
								title="Copy link to this section"
							>
								🔗 Copy Link
							</button>
						</div>

						<p className="text-gray-600">
							You can start a budget in three ways: create one manually, use a pre-built template, or import a
							previous budget.
						</p>

						<div className="space-y-4">
							<h3 className="font-semibold text-xl text-gray-800">Option 1: Manual Creation</h3>

							<div className="bg-gray-50 border border-gray-200 rounded-lg p-5 space-y-3">
								<h4 className="font-bold text-gray-800">Step-by-Step Process:</h4>

								<div className="space-y-4">
									<div>
										<p className="font-semibold text-gray-800 mb-1">1. Select a Budget Period</p>
										<p className="text-sm text-gray-600">
											Choose how long this budget will cover. This is crucial for accurate
											analytics and spending tracking.
										</p>
										<div className="bg-white p-3 rounded mt-2 border">
											<p className="text-sm font-medium text-gray-700 mb-1">
												Available Periods:
											</p>
											<ul className="text-xs text-gray-600 space-y-1 pl-4">
												<li>• Monthly</li>
												<li>• Quarterly (3 months)</li>
												<li>• Semi-annually (6 months)</li>
												<li>• Annually (12 months)</li>
												<li>• Custom (specify number of months)</li>
											</ul>
										</div>
									</div>

									<div>
										<p className="font-semibold text-gray-800 mb-1">2. Create Categories</p>
										<p className="text-sm text-gray-600">
											Categories are broad groupings of related expenses. Examples:{" "}
											<em>"Groceries," "Transportation," "Entertainment," "Utilities."</em>
										</p>
									</div>

									<div>
										<p className="font-semibold text-gray-800 mb-1">
											3. Create Accounts Within Categories
										</p>
										<p className="text-sm text-gray-600">
											Accounts are specific line items within each category. For example,
											under "Transportation" you might have accounts for "Fuel," "Public
											Transit," and "Ride-sharing."
										</p>
									</div>

									<div>
										<p className="font-semibold text-gray-800 mb-1">4. Assign Budget Amounts</p>
										<p className="text-sm text-gray-600">
											For each account, enter how much money you plan to allocate over the
											selected period.
										</p>
									</div>

									<div>
										<p className="font-semibold text-gray-800 mb-1">
											5. (Optional) Associate Participants
										</p>
										<p className="text-sm text-gray-600">
											If you've added multiple users, you can assign specific accounts to
											individuals to track their personal spending.
										</p>
									</div>
								</div>
							</div>

							<div className="bg-gray-100 p-4 rounded-lg text-sm space-y-2">
								<p>
									<strong>Budget Creation Rules:</strong>
								</p>
								<ul className="list-disc pl-5 space-y-1">
									<li>Each Category must have at least one account and cannot use the default name</li>
									<li>Each Account must have a budgeted amount greater than 0.00</li>
									<li>Associating accounts with participants is optional</li>
								</ul>
								<p className="mt-3">
									<strong>Keyboard Shortcuts:</strong>
								</p>
								<ul className="list-disc pl-5 space-y-1">
									<li>
										Press <kbd className="px-2 py-0.5 bg-white rounded border text-xs">Enter</kbd>{" "}
										to jump to the next field
									</li>
									<li>
										Pressing{" "}
										<kbd className="px-2 py-0.5 bg-white rounded border text-xs">Enter</kbd> on an
										empty participant field will skip it
									</li>
								</ul>
							</div>

							<div className="relative w-full h-90 bg-gray-200 rounded-lg border-2 border-dashed border-gray-300 flex items-center justify-center text-gray-500 mt-4">
								<div className="relative w-full h-90">
									<Image
										src="/budget-audit/manual-bgt-1.png"
										alt="Manual budget creation interface"
										fill
										className="object-cover p-2"
									/>
								</div>
								<div className="relative w-full h-90">
									<Image
										src="/budget-audit/manual-bgt-2.png"
										alt="Budget category and account creation"
										fill
										className="object-contain p-2"
									/>
								</div>
							</div>

							<div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 rounded-r">
								<h4 className="font-bold text-yellow-700 text-sm uppercase mb-1">💡 Pro Tip</h4>
								<p className="text-yellow-800 text-sm mb-2">
									<strong>Always collapse categories after completing them!</strong> A yellow banner will
									appear below your budget if anything is incomplete.
								</p>
								<p className="text-yellow-800 text-sm">
									When you minimize a category, an <em>"incomplete"</em> tag will appear if any account
									within it needs attention. This helps you avoid missing required fields before saving.
								</p>
							</div>
						</div>
						<div className="grid md:grid-cols-2 gap-6 mt-8">
							<div className="border border-gray-200 rounded-lg p-5">
								<h3 className="font-semibold text-xl text-gray-800 mb-3">Option 2: Using Templates</h3>
								<ol className="text-sm text-gray-600 space-y-2 list-decimal pl-5">
									<li>
										Select <strong>Import</strong> on the budget template screen
									</li>
									<li>Browse the available preset budgets</li>
									<li>Adjust the budget period if needed</li>
									<li>
										Click <strong>Adopt</strong> to load the template
									</li>
								</ol>
								<p className="text-xs text-gray-500 mt-3 italic">
									Note: Adopting a template will overwrite any draft work currently in your budgeting
									canvas.
								</p>
							</div>
							<div className="border border-gray-200 rounded-lg p-5">
								<h3 className="font-semibold text-xl text-gray-800 mb-3">
									Option 3: Importing Previous Budgets
								</h3>
								<ol className="text-sm text-gray-600 space-y-2 list-decimal pl-5">
									<li>
										Select <strong>Import</strong> to view previously created budgets
									</li>
									<li>Expand a budget to see its details</li>
									<li>
										Click <strong>Adopt</strong> to restore that configuration
									</li>
								</ol>
								<p className="text-xs text-gray-500 mt-3 italic">
									Note: This will replace any unsaved draft work in your current canvas.
								</p>
							</div>
						</div>

						<div className="bg-orange-50 border- l-4 border-orange-500 p-4 rounded-r mt-6">
							<h4 className="font-bold text-orange-700 text-sm uppercase mb-2">
								Critical: Budget Management Best Practice
							</h4>
							<p className="text-orange-800 text-sm mb-2">
								<strong>Always update existing budgets rather than creating new ones from scratch.</strong>
							</p>
							<p className="text-orange-800 text-sm">
								Here's why: Budget Audit learns vendor-to-account associations over time to automate transaction
								labeling. When you delete a budget and create a new one, all these learned associations are
								lost, and you'll need to re-train the system from scratch. Instead, modify your existing budget
								to preserve this valuable automation.
							</p>
						</div>

						<div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mt-6">
							<h4 className="font-bold text-blue-800 text-sm mb-2"> What Happens When You Change Budgets?</h4>
							<p className="text-blue-800 text-sm">
								Switching to a different budget affects your analytics view. Since budgets are tied to specific
								time periods and transactions, changing your active budget will update all analytics to show
								data from that budget's period. You cannot mix analytics from multiple budgets in a single view.
							</p>
						</div>
					</section>

					{/* SECTION C: Financial Docs */}
					<section id="Adding-Documents-analytics" className="scroll-mt-28 space-y-8">
						<div className="flex items-center justify-between">
							<h2 className="text-2xl font-bold text-gray-900 border-b pb-2 flex-1">
								C. Financial Documents & Analytics
							</h2>
							<button
								onClick={() => {
									navigator.clipboard.writeText(
										window.location.origin + window.location.pathname + "#financial-analytics",
									);
								}}
								className="text-gray-400 hover:text-blue-600 transition-colors text-sm px-3 py-1 rounded hover:bg-gray-100"
								title="Copy link to this section"
							>
								🔗 Copy Link
							</button>
						</div>

						<div className="bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200 rounded-lg p-5">
							<h4 className="font-bold text-green-800 mb-2">Complete Privacy Guarantee</h4>
							<p className="text-sm text-green-800">
								All transaction extraction and processing happens <strong>100% offline on your device</strong>.
								Your bank statements never leave your computer. No data is sent to external servers during this
								process.
							</p>
						</div>

						{/* Step 1: Upload */}
						<div className="space-y-4">
							<h3 className="font-semibold text-xl text-gray-800">1. Adding Transaction Statements</h3>
							<p className="text-gray-600">
								Before you can generate analytics, you need to import your bank or credit card transaction
								statements. Navigate to the{" "}
								<a href="budgetaudit://HomeView">
									<span className="bg-clip-text text-grey-500 border">
										<strong>Home Page</strong>{" "}
									</span>{" "}
								</a>
								to begin. <br /> PS: Ensure you have created and are using the correct budget before running
								this.
							</p>

							<div className="bg-gray-50 border border-gray-200 rounded-lg p-5">
								<h4 className="font-bold text-gray-800 mb-3">Step-by-Step Upload Process:</h4>
								<ol className="space-y-3">
									<li className="flex gap-3">
										<span className="flex-shrink-0 w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-xs font-bold">
											1
										</span>
										<div>
											<p className="font-semibold text-gray-800">
												Select Your Financial Institution
											</p>
											<p className="text-sm text-gray-600 mt-1">
												Choose your bank from the list. If your bank isn't listed,
												select <strong>"More"</strong> to upload generic OFX or CSV
												files. <br />
												If the your bank is listed, the <strong>PDF</strong> type
												document is expected.
											</p>
										</div>
									</li>
									<li className="flex gap-3">
										<span className="flex-shrink-0 w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-xs font-bold">
											2
										</span>
										<div>
											<p className="font-semibold text-gray-800">Browse for Your Document</p>
											<p className="text-sm text-gray-600 mt-1">
												This will allow you to explore <strong>PDF</strong> if you chose
												a specific bank. Should a generic institution was chosen using
												the <strong>Custom option</strong> you shall be able to choose a
												document matching the type you chose e.g., CSV
											</p>
										</div>
									</li>
									<li className="flex gap-3">
										<span className="flex-shrink-0 w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-xs font-bold">
											3
										</span>
										<div>
											<p className="font-semibold text-gray-800">
												Enter Document Password (if required)
											</p>
											<p className="text-sm text-gray-600 mt-1">
												Some banks protect statements with passwords. Enter it when
												prompted.
											</p>
										</div>
									</li>
									<li className="flex gap-3">
										<span className="flex-shrink-0 w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-xs font-bold">
											4
										</span>
										<div>
											<p className="font-semibold text-gray-800">Assign a Document Owner</p>
											<p className="text-sm text-gray-600 mt-1">
												Select which participant this statement belongs to. This helps
												track individual spending in shared budgets.
											</p>
										</div>
									</li>
									<li className="flex gap-3">
										<span className="flex-shrink-0 w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-xs font-bold">
											5
										</span>
										<div>
											<p className="font-semibold text-gray-800">
												Verify & Add More (It is optional to add more, this is only
												meant to verify and allow you to add more)
											</p>
											<p className="text-sm text-gray-600 mt-1">
												Review the document details. You can add multiple documents
												before proceeding to extraction.
											</p>
										</div>
									</li>
									<li className="flex gap-3">
										<span className="flex-shrink-0 w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-xs font-bold">
											6
										</span>
										<div>
											<p className="font-semibold text-gray-800">Run Audit</p>
											<p className="text-sm text-gray-600 mt-1">
												Click <strong>Run Audit</strong> to begin extracting all
												transactions from your statement(s). This happens entirely on
												your device.
												<br />
												<br />
												<i>
													If you realize that <strong>run audit</strong> is grey
													and inactive at this point, please ensure you have an
													active budget created and selected.{" "}
												</i>
											</p>
										</div>
									</li>
								</ol>
								<div className="relative w-full h-120 bg-gray-200 rounded-lg border-2 border-dashed border-gray-300 flex items-center justify-center text-gray-500 mt-4">
									<Image
										src="/budget-audit/document-ingestion.png"
										alt="Document entering interface showing steps"
										fill
										className="object-cover p-2"
									/>
								</div>
							</div>

							<div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 rounded-r">
								<h4 className="font-bold text-yellow-700 text-sm uppercase mb-1">
									Alternative Formats Supported File Formats (Beta)
								</h4>
								<p className="text-yellow-800 text-sm mb-2">
									OFX and CSV support is currently in <strong>beta testing</strong>. Formatting varies
									significantly between banks.
								</p>
								<p className="text-yellow-800 text-sm">
									<strong>If upload fails:</strong> Please report the issue to{" "}
									<a href="mailto:victorkithinji@outlook.com" className="underline font-semibold">
										victorkithinji@outlook.com
									</a>{" "}
									with your bank name. The parsers will be updated to support your institution.
								</p>
							</div>
						</div>
						{/* Step 2: Labelling */}
						<div className="space-y-4">
							<h3 className="font-semibold text-xl text-gray-800">2. Labeling Transactions</h3>
							<p className="text-gray-600">
								After extraction, you'll need to associate each transaction with an account in your budget.
								Budget Audit will remember your choices and automate future labeling.
							</p>

							<div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-4">
								<h4 className="font-bold text-blue-800 text-sm mb-2">How the Learning System Works</h4>
								<p className="text-sm text-blue-800">
									Budget Audit remembers vendor-to-account associations. The first time you label a
									transaction from "Starbucks" as "Coffee & Dining," future Starbucks transactions will
									automatically be suggested for that same account. The more you use the app, the more
									personalized Budget Audit becomes.
								</p>
							</div>

							<h4 className="font-bold text-gray-800 mb-3">Understanding Transaction Categories</h4>
							<p className="text-sm text-gray-600 mb-4">
								Transactions are organized into four intelligence levels based on how well the application
								recognizes them:
							</p>

							<div className="grid gap-4 md:grid-cols-2">
								<LabelCard
									title="🔴 Unrecognized"
									type="input"
									desc="Input Required. Budget Audit has never seen this vendor before. You must manually select the appropriate account."
								/>
								<LabelCard
									title="🟡 Semblance"
									type="auto"
									desc="Closely resembles a known vendor (e.g., 'Uber' vs 'Uber Eats'). The app makes an educated guess, but review is strongly advised."
								/>
								<LabelCard
									title="🟠 Ambiguous"
									type="auto"
									desc="Vendor is recognized but has been used for multiple different accounts in the past. App assigns the most recent association—verify it's correct."
								/>
								<LabelCard
									title="🟢 Sure"
									type="auto"
									desc="Vendor has only ever been associated with one specific account. High confidence—but you can still override if needed."
								/>
							</div>

							<div className="relative w-full h-90 bg-gray-200 rounded-lg border-2 border-dashed border-gray-300 flex items-center justify-center text-gray-500 mt-4">
								<Image
									src="/budget-audit/extracted-widget.png"
									alt="Transaction labeling interface showing categorized transactions"
									fill
									className="object-cover p-2"
								/>
							</div>
							<div className="bg-gray-50 border border-gray-200 rounded-lg p-5 mt-6">
								<h4 className="font-bold text-gray-800 mb-3">Advanced Transaction Features</h4>

								<div className="space-y-4">
									<div>
										<p className="font-semibold text-gray-800 mb-1">Auto-Update Vendors</p>
										<p className="text-sm text-gray-600 mb-2">
											When you assign an account to a transaction, Budget Audit checks if
											other unlabeled transactions from the same vendor exist.
										</p>
										<div className="bg-white border rounded p-3 text-xs text-gray-700 space-y-2">
											<p className="font-semibold">Example Pop-up:</p>
											<div className="bg-gray-100 p-2 rounded">
												<p className="font-bold">Update all vendors?</p>
												<p>You have assigned "Uber" to "Daily Commute"</p>
												<p className="text-orange-600">
													(!) Found 3 other transactions with "Uber" that haven't
													been labeled yet.
												</p>
												<p>Would you like to update all of them to this account?</p>
												<p className="mt-2">
													<label className="flex items-center gap-2">
														<input type="checkbox" className="rounded" />
														<span>
															Don't ask me again for all other vendors
														</span>
													</label>
												</p>
												<div className="flex gap-2 mt-3">
													<button className="px-3 py-1 bg-gray-200 rounded text-xs">
														Just this one
													</button>
													<button className="px-3 py-1 bg-blue-600 text-white rounded text-xs">
														Update all
													</button>
												</div>
											</div>
										</div>
										<p className="text-sm text-gray-600 mt-2">
											<strong>Tip:</strong> If you check "Don't ask me again," you can
											re-enable the prompt by toggling the{" "}
											<strong>"Auto-update Vendors"</strong> option at the top of the
											transaction list.
										</p>

										<div className="relative w-full h-90 bg-gray-200 rounded-lg border-2 border-dashed border-gray-300 flex items-center justify-center text-gray-500 mt-4">
											<Image
												src="/budget-audit/update-vendors.png"
												alt="Re-enable vendor recognition steps"
												fill
												className="object-cover p-2"
											/>
										</div>
									</div>

									<div>
										<p className="font-semibold text-gray-800 mb-1">Splitting Transactions</p>
										<p className="text-sm text-gray-600 mb-2">
											Need to divide a single transaction across multiple budget accounts? You
											can split any transaction indefinitely.
										</p>
										<div className="bg-white border rounded p-3 text-sm">
											<p className="font-semibold mb-2">How to Split:</p>
											<ol className="list-decimal pl-5 space-y-1 text-xs text-gray-600">
												<li>
													Expand the transaction (click the arrow on the far
													right)
												</li>
												<li>
													Click <strong>Split Transaction</strong>
												</li>
												<li>Enter the amount for the new split</li>
												<li>Select the account for this split portion</li>
												<li>The original transaction amount automatically adjusts</li>
											</ol>
											<div className="bg-yellow-50 border-l-4 border-yellow-400 p-2 mt-3 text-xs">
												<p className="font-bold text-yellow-800">⚠️ Known Bug:</p>
												<p className="text-yellow-700">
													After splitting, the new transaction may not show the
													assigned account. You'll need to manually select it
													again. A patch is coming soon.
												</p>
											</div>
										</div>
									</div>

									<div>
										<p className="font-semibold text-gray-800 mb-1">Ignoring Transactions</p>
										<p className="text-sm text-gray-600">
											Some transactions don't belong in your budget analysis (transfers
											between your own accounts, refunds, etc.). You can exclude them:
										</p>
										<ol className="list-decimal pl-5 text-xs text-gray-600 mt-2 space-y-1">
											<li>Expand the transaction</li>
											<li>
												Click <strong>Ignore Transaction</strong>
											</li>
											<li>The transaction will be excluded from all analytics</li>
										</ol>
									</div>

									<div>
										<p className="font-semibold text-gray-800 mb-1">
											Preventing Future Auto-Association
										</p>
										<p className="text-sm text-gray-600">
											If a vendor assignment is a one-time exception (e.g., you bought gas
											from a grocery store just once), you can prevent Budget Audit from
											remembering this association:
										</p>
										<ol className="list-decimal pl-5 text-xs text-gray-600 mt-2 space-y-1">
											<li>Expand the transaction</li>
											<li>
												Uncheck <strong>Remember this association</strong>
											</li>
											<li>This vendor-account link won't be saved for future transactions</li>
										</ol>
									</div>
								</div>
							</div>

							<div className="bg-gradient-to-r from-purple-50 to-pink-50 border border-purple-200 rounded-lg p-5 mt-4">
								<h4 className="font-bold text-purple-800 mb-2">💡 Power User Workflow</h4>
								<p className="text-sm text-purple-800 mb-3">
									For fastest labeling, work through transactions in this order:
								</p>
								<ol className="list-decimal pl-5 text-sm text-purple-800 space-y-1">
									<li>
										Review and correct <strong>Semblance</strong> transactions (similar vendor
										names)
									</li>
									<li>
										Verify <strong>Ambiguous</strong> assignments are appropriate
									</li>
									<li>
										Label all <strong>Unrecognized</strong> vendors
									</li>
									<li>
										Spot-check <strong>Sure</strong> transactions for accuracy
									</li>
									<li>Use the right arrow → to proceed to the next document</li>
									<li>
										Click <strong>Complete Audit</strong> when all documents are processed
									</li>
								</ol>
							</div>
						</div>
					</section>

					{/* Step 3: Analytics */}

					<section id="financial-analytics">
						<div className="space-y-6">
							<h3 className="font-semibold text-xl text-gray-800">3. Understanding Analytics</h3>
							<p className="text-gray-600">
								Once you've labeled your transactions, navigate to the <strong>Analytics tab</strong> from the
								menu to visualize your financial data. Budget Audit provides two main analysis views.
							</p>

							<div className="bg-gray-50 border border-gray-200 rounded-lg p-5 mb-6">
								<h4 className="font-bold text-gray-800 mb-3">Analytics Controls</h4>
								<p className="text-sm text-gray-600 mb-3">
									At the top of the Analytics page, you'll find powerful filtering options:
								</p>

								<div className="space-y-3">
									<div className="bg-white border rounded p-3">
										<p className="font-semibold text-sm text-gray-800 mb-1">Budget Selector</p>
										<p className="text-xs text-gray-600">
											Switch between different budgets you've created.{" "}
											<strong>Important:</strong> Changing budgets updates all graphs to show
											data from that budget's time period. You cannot mix data from multiple
											budgets in one view.
										</p>
									</div>

									<div className="bg-white border rounded p-3">
										<p className="font-semibold text-sm text-gray-800 mb-1">Period Navigation</p>
										<p className="text-xs text-gray-600 mb-2">
											Move forward or backward through time periods. By default, the view
											shows the most recent period with transaction data.
										</p>
										<p className="text-xs text-gray-600">
											<strong>Period Step Size:</strong> Choose how data is grouped (Daily,
											Weekly, Monthly, Quarterly, Semi-annually, Annually). Note: You cannot
											select a step size equal to or larger than your budget period.
										</p>
									</div>

									<div className="bg-white border rounded p-3">
										<p className="font-semibold text-sm text-gray-800 mb-1">Participant Filter</p>
										<p className="text-xs text-gray-600">
											<strong>All (Average):</strong> Shows combined data from all
											participants
											<br />
											<strong>Individual Participant:</strong> View spending data for just one
											person
										</p>
									</div>
								</div>
							</div>
							<div className="space-y-6">
								{/* Budget Analytics Tab */}
								<div className="border border-gray-300 rounded-lg overflow-hidden">
									<div className="bg-blue-600 text-white px-5 py-3">
										<h4 className="font-bold text-lg">Budget Analytics Tab</h4>
										<p className="text-sm text-blue-100 mt-1">
											Visualize your planned resource allocation and priorities
										</p>
									</div>
									<div className="p-5 space-y-4">
										<div>
											<p className="font-bold text-gray-800 mb-2">
												1. Budget by Category (Pie Chart)
											</p>
											<p className="text-sm text-gray-600 mb-2">
												This pie chart shows what percentage of your total budget is
												allocated to each category.
											</p>
											<div className="bg-gray-50 p-3 rounded text-xs text-gray-600">
												<p className="font-semibold mb-1">Example:</p>
												<ul className="space-y-1 pl-4">
													<li>• Groceries: 30% of total budget</li>
													<li>• Transportation: 20% of total budget</li>
													<li>• Entertainment: 15% of total budget</li>
													<li>• Utilities: 35% of total budget</li>
												</ul>
											</div>
										</div>

										<div>
											<p className="font-bold text-gray-800 mb-2">
												2. Account Breakdown (Bar Chart)
											</p>
											<p className="text-sm text-gray-600 mb-2">
												This companion chart shows the detailed breakdown of accounts{" "}
												<strong>within the selected category slice</strong> from the pie
												chart. By default, it displays the largest category.
											</p>
											<div className="bg-gray-50 p-3 rounded text-xs text-gray-600">
												<p className="font-semibold mb-1">How to use:</p>
												<ul className="space-y-1 pl-4">
													<li>• Click any slice of the pie chart</li>
													<li>
														• The bar chart updates to show all accounts in
														that category
													</li>
													<li>
														• Each bar represents the budgeted amount for
														that specific account
													</li>
												</ul>
											</div>
										</div>
									</div>
								</div>
								{/* Expenditure Analytics Tab */}
								<div className="border border-gray-300 rounded-lg overflow-hidden">
									<div className="bg-green-600 text-white px-5 py-3">
										<h4 className="font-bold text-lg">Expenditure Analytics Tab</h4>
										<p className="text-sm text-green-100 mt-1">
											Track actual spending against your planned budget
										</p>
									</div>
									<div className="p-5 space-y-6">
										<div>
											<p className="font-bold text-gray-800 mb-2">
												1. Expenditure vs Budget (Line Graph)
											</p>
											<p className="text-sm text-gray-600 mb-3">
												This graph tracks what percentage of your total budget has been
												consumed over time within the current period.
											</p>
											<div className="bg-gray-50 p-3 rounded text-xs text-gray-600 space-y-2">
												<p className="font-semibold">How it works:</p>
												<ul className="space-y-1 pl-4">
													<li>
														• Starts at 0% at the beginning of each budget
														period
													</li>
													<li>• Gradually increases toward 100% as you spend</li>
													<li>• Each budget period is treated independently</li>
													<li>
														• Helps you see if you're on track or
														overspending early
													</li>
												</ul>
											</div>
										</div>

										<div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded-r">
											<h5 className="font-bold text-blue-800 text-sm mb-2">
												📈 Two Analysis Views Available
											</h5>
											<p className="text-sm text-blue-800 mb-2">
												Toggle between these modes to see different perspectives on your
												spending:
											</p>
											<div className="grid md:grid-cols-2 gap-3 text-xs">
												<div className="bg-white p-3 rounded border border-blue-200">
													<p className="font-bold text-blue-900 mb-1">
														🔍 Spending Deep Dive
													</p>
													<p className="text-blue-800">
														Visual graphs and charts for pattern analysis
													</p>
												</div>
												<div className="bg-white p-3 rounded border border-blue-200">
													<p className="font-bold text-blue-900 mb-1">
														📝 Detailed Analysis
													</p>
													<p className="text-blue-800">
														Ordered lists ranked by usage percentage
													</p>
												</div>
											</div>
										</div>
										{/* Deep Dive Section */}
										<div className="border-t pt-4">
											<h5 className="font-bold text-gray-800 mb-3 bg-purple-50 px-3 py-2 rounded">
												Spending Deep Dive
											</h5>

											<div className="space-y-4 pl-3">
												<div>
													<p className="font-semibold text-gray-800 mb-2">
														A. Resource Allocation by Category
													</p>
													<p className="text-sm text-gray-600 mb-2">
														Similar to the Budget Analytics view, but shows{" "}
														<strong>actual spending</strong> rather than
														planned budgets.
													</p>
													<div className="bg-white border rounded p-3 text-xs text-gray-600 space-y-2">
														<p>
															<strong>
																Spending by Category (Pie
																Chart):
															</strong>
														</p>
														<ul className="pl-4 space-y-1">
															<li>
																• Takes your total expenditure
																for the period as 100%
															</li>
															<li>
																• Shows what portion went to
																each category
															</li>
															<li>
																• Example: If you spent $1,000
																total, and $300 went to
																groceries, the Groceries slice
																is 30%
															</li>
														</ul>
														<p className="mt-2">
															<strong>
																Account Breakdown (Bar Chart):
															</strong>
														</p>
														<ul className="pl-4 space-y-1">
															<li>
																• Shows accounts within the
																selected category
															</li>
															<li>
																•{" "}
																<strong>Key difference:</strong>{" "}
																Each bar represents the ratio of
																amount spent to amount budgeted
															</li>
															<li>
																• Bars can exceed 100% if you
																overspent that account
															</li>
															<li>
																• Each bar is independent
																(unlike budget view where they
																show absolute amounts)
															</li>
														</ul>
													</div>
												</div>

												<div>
													<p className="font-semibold text-gray-800 mb-2">
														B. Daily Spending Pattern (Bar Graph)
													</p>
													<p className="text-sm text-gray-600 mb-2">
														Shows what percentage of your total budget was
														consumed <strong>each day</strong> during the
														period.
													</p>
													<div className="bg-white border rounded p-3 text-xs text-gray-600">
														<p className="font-semibold mb-2">
															Insights you can gain:
														</p>
														<ul className="pl-4 space-y-1">
															<li>
																• Spot spending spikes (e.g.,
																high spending on weekends or
																payday)
															</li>
															<li>
																• Identify patterns like heavy
																spending early in the period
															</li>
															<li>
																• All daily bars together add up
																to 100% of your period's
																spending
															</li>
															<li>
																• Useful for understanding your
																spending rhythm and adjusting
																behavior
															</li>
														</ul>
													</div>
												</div>
											</div>
										</div>
										{/* Detailed Analysis Section */}
										<div className="border-t pt-4">
											<h5 className="font-bold text-gray-800 mb-3 bg-orange-50 px-3 py-2 rounded">
												Detailed Analysis
											</h5>

											<div className="space-y-4 pl-3">
												<div>
													<p className="font-semibold text-gray-800 mb-2">
														A. Categories by Usage
													</p>
													<p className="text-sm text-gray-600 mb-2">
														A ranked list of all budget categories sorted by{" "}
														<strong>usage percentage</strong> (ratio of
														expenditure to budget), highest first.
													</p>
													<div className="bg-white border rounded p-3 text-xs text-gray-600">
														<p className="font-semibold mb-2">
															What you'll see for each category:
														</p>
														<ul className="pl-4 space-y-1">
															<li>• Total amount spent</li>
															<li>• Total amount budgeted</li>
															<li>
																• Usage percentage (spent ÷
																budgeted × 100)
															</li>
															<li>
																•{" "}
																<strong>
																	Expandable details:
																</strong>{" "}
																List of all accounts within the
																category with their individual
																totals and percentages
															</li>
														</ul>
														<p className="mt-2 text-gray-700 italic">
															This helps you quickly identify which
															categories are consuming budget fastest
															and which specific accounts are driving
															those numbers.
														</p>
													</div>
												</div>

												<div>
													<p className="font-semibold text-gray-800 mb-2">
														B. Accounts by Usage
													</p>
													<p className="text-sm text-gray-600 mb-2">
														All budget accounts ranked by usage percentage,
														regardless of category.
													</p>
													<div className="bg-white border rounded p-3 text-xs text-gray-600">
														<p>
															Quickly see which individual line items
															are using the most budget, helping you
															prioritize where to cut spending if
															needed.
														</p>
													</div>
												</div>

												<div>
													<p className="font-semibold text-gray-800 mb-2">
														C. Vendors by Total Spending
													</p>
													<p className="text-sm text-gray-600 mb-2">
														A complete list of all vendors you've spent
														money with, sorted by total amount spent
														(highest first).
													</p>
													<div className="bg-white border rounded p-3 text-xs text-gray-600">
														<p className="font-semibold mb-2">
															Use this to:
														</p>
														<ul className="pl-4 space-y-1">
															<li>
																• Identify your most expensive
																vendors
															</li>
															<li>
																• Spot subscription services or
																recurring charges
															</li>
															<li>
																• Find opportunities to
																negotiate better rates or switch
																providers
															</li>
															<li>
																• Understand where your money
																actually goes beyond category
																abstractions
															</li>
														</ul>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>

							<div className="bg-gradient-to-r from-indigo-50 to-purple-50 border border-indigo-200 rounded-lg p-5 mt-6">
								<h4 className="font-bold text-indigo-800 mb-2">💡 Analytics Pro Tips</h4>
								<ul className="text-sm text-indigo-800 space-y-2">
									<li className="flex gap-2">
										<span className="flex-shrink-0">•</span>
										<span>
											Use <strong>Daily</strong> step size to spot exact dates of large
											purchases
										</span>
									</li>
									<li className="flex gap-2">
										<span className="flex-shrink-0">•</span>
										<span>
											Compare <strong>Budget Analytics</strong> with{" "}
											<strong>Expenditure Analytics</strong> to see where your priorities
											differ from your actual behavior
										</span>
									</li>
									<li className="flex gap-2">
										<span className="flex-shrink-0">•</span>
										<span>
											Check the <strong>Vendors by Total Spending</strong> list monthly to
											catch unwanted subscriptions
										</span>
									</li>
									<li className="flex gap-2">
										<span className="flex-shrink-0">•</span>
										<span>
											If you're consistently overspending in a category, expand it in{" "}
											<strong>Categories by Usage</strong> to find which specific accounts are
											the culprits
										</span>
									</li>
								</ul>
							</div>
						</div>
					</section>

					{/* SECTION D: Settings */}
					<section id="settings" className="scroll-mt-28 space-y-6">
						<h2 className="text-2xl font-bold text-gray-900 border-b pb-2">D. Settings & Management</h2>
						<p className="text-gray-600">Access settings via the top-left menu bar.</p>

						<div className="grid md:grid-cols-2 gap-4">
							<div className="border p-4 rounded-lg">
								<h4 className="font-bold text-gray-800">Profile & Participants</h4>
								<p className="text-sm text-gray-600 mt-2">
									Update your details. Managers can add/edit participants here. (Note: Handover admin
									rights by editing manager details).
								</p>
							</div>
							<div className="border p-4 rounded-lg">
								<h4 className="font-bold text-gray-800">Vendor Management</h4>
								<p className="text-sm text-gray-600 mt-2">
									View and delete Vendor-Account associations. Deleting here removes the "memory" for
									future audits.
								</p>
							</div>
						</div>
					</section>

					{/* SECTION E: How Data is Handled */}
					<section id="data-handling" className="scroll-mt-28 space-y-6">
						<div className="flex items-center justify-between">
							<h2 className="text-2xl font-bold text-gray-900 border-b pb-2 flex-1">E. How Data is Handled</h2>
							<button
								onClick={() => {
									navigator.clipboard.writeText(
										window.location.origin + window.location.pathname + "#data-handling",
									);
								}}
								className="text-gray-400 hover:text-blue-600 transition-colors text-sm px-3 py-1 rounded hover:bg-gray-100"
								title="Copy link to this section"
							>
								🔗 Copy Link
							</button>
						</div>

						<div className="space-y-5">
							{/* Principle 1 */}
							<div className="border-l-4 border-green-500 bg-white p-5 rounded-r-lg shadow-sm">
								<div className="flex items-start gap-3 mb-3">
									<span className="flex-shrink-0 w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center font-bold">
										1
									</span>
									<h4 className="font-bold text-lg text-gray-900">100% Local Processing</h4>
								</div>
								<p className="text-gray-700 ml-11">
									<strong>Your financial data never leaves your device.</strong> All transaction
									extraction, analysis, and processing happens entirely on your local machine. When you
									upload bank statements, they are analyzed using your device's computing power—no
									servers, no cloud storage, no external transmission.
								</p>
								<div className="ml-11 mt-3 bg-green-50 p-3 rounded text-sm text-green-800">
									<p className="font-semibold">What this means for you:</p>
									<ul className="list-disc pl-5 mt-1 space-y-1">
										<li>No risk of data breaches on remote servers</li>
										<li>Complete control over your financial information</li>
										<li>Works offline—no internet connection required for core features</li>
									</ul>
								</div>
							</div>

							{/* Principle 2 */}
							<div className="border-l-4 border-blue-500 bg-white p-5 rounded-r-lg shadow-sm">
								<div className="flex items-start gap-3 mb-3">
									<span className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">
										2
									</span>
									<h4 className="font-bold text-lg text-gray-900">Opt-In Online Features</h4>
								</div>
								<p className="text-gray-700 ml-11 mb-3">
									Any feature that requires online connectivity is <strong>completely optional</strong>{" "}
									and requires your explicit consent. You will always be informed about:
								</p>
								<ul className="text-sm text-gray-700 ml-11 space-y-2 list-disc pl-5">
									<li>
										<strong>What data</strong> is being shared
									</li>
									<li>
										<strong>Why</strong> it's needed for the feature to work
									</li>
									<li>
										<strong>Where</strong> it's being sent (third-party services)
									</li>
									<li>
										<strong>How</strong> to disable the feature if you change your mind
									</li>
								</ul>
								<div className="ml-11 mt-3 bg-blue-50 p-3 rounded text-sm text-blue-800">
									<p className="italic">
										Budget Audit will never enable online features without your knowledge or
										permission. If you choose to keep everything offline, all core functionality
										remains available.
									</p>
								</div>
							</div>
							{/* Principle 3 */}
							<div className="border-l-4 border-purple-500 bg-white p-5 rounded-r-lg shadow-sm">
								<div className="flex items-start gap-3 mb-3">
									<span className="flex-shrink-0 w-8 h-8 bg-purple-600 text-white rounded-full flex items-center justify-center font-bold">
										3
									</span>
									<h4 className="font-bold text-lg text-gray-900">Future Export Capabilities</h4>
								</div>
								<p className="text-gray-700 ml-11 mb-3">
									Planned future versions may support exporting your financial data to formats like Excel
									or Google Sheets for further analysis.
								</p>
								<div className="ml-11 bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded-r">
									<p className="text-sm text-yellow-900 font-semibold mb-2">⚠️ Important Disclosure</p>
									<p className="text-sm text-yellow-800">
										When you choose to export to third-party services like Google Sheets, your
										financial data will be shared with those providers according to{" "}
										<strong>their terms of service and privacy policies</strong>, not ours. Budget
										Audit acts only as a facilitator for this export—you are choosing to trust the
										third-party service with your data.
									</p>
								</div>
								<p className="text-sm text-gray-600 ml-11 mt-3 italic">
									Standard file exports (e.g., downloading a CSV to your device) remain completely private
									with no third-party involvement.
								</p>
							</div>

							{/* Principle 4 */}
							<div className="border-l-4 border-orange-500 bg-white p-5 rounded-r-lg shadow-sm">
								<div className="flex items-start gap-3 mb-3">
									<span className="flex-shrink-0 w-8 h-8 bg-orange-600 text-white rounded-full flex items-center justify-center font-bold">
										4
									</span>
									<h4 className="font-bold text-lg text-gray-900">Account Recovery Features (Future)</h4>
								</div>
								<p className="text-gray-700 ml-11 mb-3">
									Future versions may include optional cloud-based account recovery features (password
									reset, multi-device sync). If implemented, these features would require sharing minimal
									personal information with Budget Audit servers:
								</p>
								<ul className="text-sm text-gray-700 ml-11 space-y-1 list-disc pl-5 mb-3">
									<li>Username</li>
									<li>Email address</li>
								</ul>
								<div className="ml-11 bg-blue-50 p-3 rounded text-sm text-blue-800">
									<p className="font-semibold mb-1">Data Usage Promise:</p>
									<p>
										This information would be used{" "}
										<strong>exclusively for account recovery and authentication purposes</strong>.
										It would never be sold, shared with third parties for marketing, or used for any
										purpose other than enabling the specific features you've opted into.
									</p>
								</div>
								<p className="text-sm text-gray-600 ml-11 mt-3 italic">
									Note: These features do not currently exist and will be clearly marked as optional when
									introduced.
								</p>
							</div>
							{/* Principle 5 - AI Features */}
							<div className="border-l-4 border-red-500 bg-white p-5 rounded-r-lg shadow-sm">
								<div className="flex items-start gap-3 mb-3">
									<span className="flex-shrink-0 w-8 h-8 bg-red-600 text-white rounded-full flex items-center justify-center font-bold">
										5
									</span>
									<h4 className="font-bold text-lg text-gray-900">Future AI-Powered Budget Creation</h4>
								</div>
								<p className="text-gray-700 ml-11 mb-3">
									Future versions may include AI-powered features where you can describe your financial
									situation to an AI assistant (Large Language Model) to generate personalized budget
									recommendations.
								</p>

								<div className="ml-11 bg-blue-50 border border-blue-200 p-5 rounded-xl">
									<div className="flex items-center gap-2 mb-3">
										<span className="text-blue-600">ℹ️</span>
										<h3 className="text-blue-900 font-semibold text-lg">AI & Data Privacy</h3>
									</div>

									<p className="text-blue-800 mb-4 text-sm leading-relaxed">
										To generate your budget, we use industry-leading AI from providers like OpenAI
										and Anthropic. Before you start, please keep these privacy practices in mind:
									</p>

									<div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm">
										<div className="bg-white/50 p-3 rounded border border-blue-100">
											<p className="font-bold text-blue-900 mb-1">Data Processing</p>
											<p className="text-blue-800">
												AI providers may use shared data to improve their future models.
												Information shared here is permanent.
											</p>
										</div>
										<div className="bg-white/50 p-3 rounded border border-blue-100">
											<p className="font-bold text-blue-900 mb-1">Best Practices</p>
											<p className="text-blue-800 text-xs italic">"I spend $200 on gas"</p>
											<p className="text-blue-800 mt-1 text-xs uppercase tracking-wider font-bold">
												Never share account numbers or passwords.
											</p>
										</div>
									</div>
								</div>

								<p className="text-sm text-gray-600 ml-11 mt-3 italic">
									Note: These AI features do not currently exist. When introduced, they will be clearly
									labeled as experimental with prominent privacy warnings.
								</p>
							</div>
						</div>
					</section>

					{/* SECTION E: Privacy */}
					<section id="privacy" className="scroll-mt-28 space-y-6 pb-20">
						<h2 className="text-2xl font-bold text-gray-900 border-b pb-2">F. Privacy Notice</h2>

						<div className="bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden">
							{/* Header for the Privacy Box */}
							<div className="bg-gray-50 px-6 py-4 border-b border-gray-200">
								<h3 className="text-sm font-bold text-gray-700 uppercase tracking-wide">Legal Agreement</h3>
								<p className="text-xs text-gray-500 mt-1">Please review the full terms below.</p>
							</div>

							{/* The Actual Policy Content */}
							<div className="p-8 max-h-[800px] overflow-y-auto custom-scrollbar">
								{/* This div renders your raw HTML string. 
          The 'prose' class from Tailwind helps fix basic typography if the raw HTML lacks specific styles.
      */}
								<div
									className="prose prose-sm max-w-none text-gray-600 font-sans"
									dangerouslySetInnerHTML={{ __html: PRIVACY_POLICY_HTML }}
								/>
							</div>
						</div>
					</section>
				</main>
			</div>
		</div>
	);
}

// --- Helper Components ---

function NavLink({ id, active, children }) {
	const isActive = active === id;
	return (
		<Link
			href={`#${id}`}
			className={`block px-3 py-2 text-sm font-medium rounded-md transition-colors ${
				isActive ? "bg-blue-50 text-blue-700 border-l-4 border-blue-600" : "text-gray-600 hover:bg-gray-100 hover:text-gray-900"
			}`}
		>
			{children}
		</Link>
	);
}

function LabelCard({ title, type, desc }) {
	const isInput = type === "input";
	return (
		<div className={`p-4 rounded-lg border ${isInput ? "border-red-200 bg-red-50" : "border-green-200 bg-green-50"}`}>
			<div className="flex justify-between items-center mb-2">
				<span className="font-bold text-gray-800">{title}</span>
				<span className={`text-xs px-2 py-0.5 rounded ${isInput ? "bg-red-200 text-red-800" : "bg-green-200 text-green-800"}`}>
					{isInput ? "Input Needed" : "Auto"}
				</span>
			</div>
			<p className="text-xs text-gray-600 leading-relaxed">{desc}</p>
		</div>
	);
}


// Paste your full HTML string here inside the backticks
const PRIVACY_POLICY_HTML = `
<style>
  [data-custom-class='body'], [data-custom-class='body'] * {
          background: transparent !important;
        }
[data-custom-class='title'], [data-custom-class='title'] * {
          font-family: Arial !important;
font-size: 26px !important;
color: #000000 !important;
        }
[data-custom-class='subtitle'], [data-custom-class='subtitle'] * {
          font-family: Arial !important;
color: #595959 !important;
font-size: 14px !important;
        }
[data-custom-class='heading_1'], [data-custom-class='heading_1'] * {
          font-family: Arial !important;
font-size: 19px !important;
color: #000000 !important;
        }
[data-custom-class='heading_2'], [data-custom-class='heading_2'] * {
          font-family: Arial !important;
font-size: 17px !important;
color: #000000 !important;
        }
[data-custom-class='body_text'], [data-custom-class='body_text'] * {
          color: #595959 !important;
font-size: 14px !important;
font-family: Arial !important;
        }
[data-custom-class='link'], [data-custom-class='link'] * {
          color: #3030F1 !important;
font-size: 14px !important;
font-family: Arial !important;
word-break: break-word !important;
        }
</style>
      <span style="display: block;margin: 0 auto 3.125rem;width: 11.125rem;height: 2.375rem;background: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNzgiIGhlaWdodD0iMzgiIHZpZXdCb3g9IjAgMCAxNzggMzgiPgogICAgPGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj4KICAgICAgICA8cGF0aCBmaWxsPSIjRDFEMUQxIiBkPSJNNC4yODMgMjQuMTA3Yy0uNzA1IDAtMS4yNTgtLjI1Ni0xLjY2LS43NjhoLS4wODVjLjA1Ny41MDIuMDg2Ljc5Mi4wODYuODd2Mi40MzRILjk4NXYtOC42NDhoMS4zMzJsLjIzMS43NzloLjA3NmMuMzgzLS41OTQuOTUtLjg5MiAxLjcwMi0uODkyLjcxIDAgMS4yNjQuMjc0IDEuNjY1LjgyMi40MDEuNTQ4LjYwMiAxLjMwOS42MDIgMi4yODMgMCAuNjQtLjA5NCAxLjE5OC0uMjgyIDEuNjctLjE4OC40NzMtLjQ1Ni44MzMtLjgwMyAxLjA4LS4zNDcuMjQ3LS43NTYuMzctMS4yMjUuMzd6TTMuOCAxOS4xOTNjLS40MDUgMC0uNy4xMjQtLjg4Ni4zNzMtLjE4Ny4yNDktLjI4My42Ni0uMjkgMS4yMzN2LjE3N2MwIC42NDUuMDk1IDEuMTA3LjI4NyAxLjM4Ni4xOTIuMjguNDk1LjQxOS45MS40MTkuNzM0IDAgMS4xMDEtLjYwNSAxLjEwMS0xLjgxNiAwLS41OS0uMDktMS4wMzQtLjI3LTEuMzI5LS4xODItLjI5NS0uNDY1LS40NDMtLjg1Mi0uNDQzem01LjU3IDEuNzk0YzAgLjU5NC4wOTggMS4wNDQuMjkzIDEuMzQ4LjE5Ni4zMDQuNTEzLjQ1Ny45NTQuNDU3LjQzNyAwIC43NS0uMTUyLjk0Mi0uNDU0LjE5Mi0uMzAzLjI4OC0uNzUzLjI4OC0xLjM1MSAwLS41OTUtLjA5Ny0xLjA0LS4yOS0xLjMzOC0uMTk0LS4yOTctLjUxLS40NDUtLjk1LS40NDUtLjQzOCAwLS43NTMuMTQ3LS45NDYuNDQzLS4xOTQuMjk1LS4yOS43NDItLjI5IDEuMzR6bTQuMTUzIDBjMCAuOTc3LS4yNTggMS43NDItLjc3NCAyLjI5My0uNTE1LjU1Mi0xLjIzMy44MjctMi4xNTQuODI3LS41NzYgMC0xLjA4NS0uMTI2LTEuNTI1LS4zNzhhMi41MiAyLjUyIDAgMCAxLTEuMDE1LTEuMDg4Yy0uMjM3LS40NzMtLjM1NS0xLjAyNC0uMzU1LTEuNjU0IDAtLjk4MS4yNTYtMS43NDQuNzY4LTIuMjg4LjUxMi0uNTQ1IDEuMjMyLS44MTcgMi4xNi0uODE3LjU3NiAwIDEuMDg1LjEyNiAxLjUyNS4zNzYuNDQuMjUxLjc3OS42MSAxLjAxNSAxLjA4LjIzNi40NjkuMzU1IDEuMDE5LjM1NSAxLjY0OXpNMTkuNzEgMjRsLS40NjItMi4xLS42MjMtMi42NTNoLS4wMzdMMTcuNDkzIDI0SDE1LjczbC0xLjcwOC02LjAwNWgxLjYzM2wuNjkzIDIuNjU5Yy4xMS40NzYuMjI0IDEuMTMzLjMzOCAxLjk3MWguMDMyYy4wMTUtLjI3Mi4wNzctLjcwNC4xODgtMS4yOTRsLjA4Ni0uNDU3Ljc0Mi0yLjg3OWgxLjgwNGwuNzA0IDIuODc5Yy4wMTQuMDc5LjAzNy4xOTUuMDY3LjM1YTIwLjk5OCAyMC45OTggMCAwIDEgLjE2NyAxLjAwMmMuMDIzLjE2NS4wMzYuMjk5LjA0LjM5OWguMDMyYy4wMzItLjI1OC4wOS0uNjExLjE3Mi0xLjA2LjA4Mi0uNDUuMTQxLS43NTQuMTc3LS45MTFsLjcyLTIuNjU5aDEuNjA2TDIxLjQ5NCAyNGgtMS43ODN6bTcuMDg2LTQuOTUyYy0uMzQ4IDAtLjYyLjExLS44MTcuMzMtLjE5Ny4yMi0uMzEuNTMzLS4zMzguOTM3aDIuMjk5Yy0uMDA4LS40MDQtLjExMy0uNzE3LS4zMTctLjkzNy0uMjA0LS4yMi0uNDgtLjMzLS44MjctLjMzem0uMjMgNS4wNmMtLjk2NiAwLTEuNzIyLS4yNjctMi4yNjYtLjgtLjU0NC0uNTM0LS44MTYtMS4yOS0uODE2LTIuMjY3IDAtMS4wMDcuMjUxLTEuNzg1Ljc1NC0yLjMzNC41MDMtLjU1IDEuMTk5LS44MjUgMi4wODctLjgyNS44NDggMCAxLjUxLjI0MiAxLjk4Mi43MjUuNDcyLjQ4NC43MDkgMS4xNTIuNzA5IDIuMDA0di43OTVoLTMuODczYy4wMTguNDY1LjE1Ni44MjkuNDE0IDEuMDkuMjU4LjI2MS42Mi4zOTIgMS4wODUuMzkyLjM2MSAwIC43MDMtLjAzNyAxLjAyNi0uMTEzYTUuMTMzIDUuMTMzIDAgMCAwIDEuMDEtLjM2djEuMjY4Yy0uMjg3LjE0My0uNTkzLjI1LS45Mi4zMmE1Ljc5IDUuNzkgMCAwIDEtMS4xOTEuMTA0em03LjI1My02LjIyNmMuMjIyIDAgLjQwNi4wMTYuNTUzLjA0OWwtLjEyNCAxLjUzNmExLjg3NyAxLjg3NyAwIDAgMC0uNDgzLS4wNTRjLS41MjMgMC0uOTMuMTM0LTEuMjIyLjQwMy0uMjkyLjI2OC0uNDM4LjY0NC0uNDM4IDEuMTI4VjI0aC0xLjYzOHYtNi4wMDVoMS4yNGwuMjQyIDEuMDFoLjA4Yy4xODctLjMzNy40MzktLjYwOC43NTYtLjgxNGExLjg2IDEuODYgMCAwIDEgMS4wMzQtLjMwOXptNC4wMjkgMS4xNjZjLS4zNDcgMC0uNjIuMTEtLjgxNy4zMy0uMTk3LjIyLS4zMS41MzMtLjMzOC45MzdoMi4yOTljLS4wMDctLjQwNC0uMTEzLS43MTctLjMxNy0uOTM3LS4yMDQtLjIyLS40OC0uMzMtLjgyNy0uMzN6bS4yMyA1LjA2Yy0uOTY2IDAtMS43MjItLjI2Ny0yLjI2Ni0uOC0uNTQ0LS41MzQtLjgxNi0xLjI5LS44MTYtMi4yNjcgMC0xLjAwNy4yNTEtMS43ODUuNzU0LTIuMzM0LjUwNC0uNTUgMS4yLS44MjUgMi4wODctLjgyNS44NDkgMCAxLjUxLjI0MiAxLjk4Mi43MjUuNDczLjQ4NC43MDkgMS4xNTIuNzA5IDIuMDA0di43OTVoLTMuODczYy4wMTguNDY1LjE1Ni44MjkuNDE0IDEuMDkuMjU4LjI2MS42Mi4zOTIgMS4wODUuMzkyLjM2MiAwIC43MDQtLjAzNyAxLjAyNi0uMTEzYTUuMTMzIDUuMTMzIDAgMCAwIDEuMDEtLjM2djEuMjY4Yy0uMjg3LjE0My0uNTkzLjI1LS45MTkuMzJhNS43OSA1Ljc5IDAgMCAxLTEuMTkyLjEwNHptNS44MDMgMGMtLjcwNiAwLTEuMjYtLjI3NS0xLjY2My0uODIyLS40MDMtLjU0OC0uNjA0LTEuMzA3LS42MDQtMi4yNzggMC0uOTg0LjIwNS0xLjc1Mi42MTUtMi4zMDEuNDEtLjU1Ljk3NS0uODI1IDEuNjk1LS44MjUuNzU1IDAgMS4zMzIuMjk0IDEuNzI5Ljg4MWguMDU0YTYuNjk3IDYuNjk3IDAgMCAxLS4xMjQtMS4xOTh2LTEuOTIyaDEuNjQ0VjI0SDQ2LjQzbC0uMzE3LS43NzloLS4wN2MtLjM3Mi41OTEtLjk0Ljg4Ni0xLjcwMi44ODZ6bS41NzQtMS4zMDZjLjQyIDAgLjcyNi0uMTIxLjkyMS0uMzY1LjE5Ni0uMjQzLjMwMi0uNjU3LjMyLTEuMjR2LS4xNzhjMC0uNjQ0LS4xLTEuMTA2LS4yOTgtMS4zODYtLjE5OS0uMjc5LS41MjItLjQxOS0uOTctLjQxOWEuOTYyLjk2MiAwIDAgMC0uODUuNDY1Yy0uMjAzLjMxLS4zMDQuNzYtLjMwNCAxLjM1IDAgLjU5Mi4xMDIgMS4wMzUuMzA2IDEuMzMuMjA0LjI5Ni40OTYuNDQzLjg3NS40NDN6bTEwLjkyMi00LjkyYy43MDkgMCAxLjI2NC4yNzcgMS42NjUuODMuNC41NTMuNjAxIDEuMzEyLjYwMSAyLjI3NSAwIC45OTItLjIwNiAxLjc2LS42MiAyLjMwNC0uNDE0LjU0NC0uOTc3LjgxNi0xLjY5LjgxNi0uNzA1IDAtMS4yNTgtLjI1Ni0xLjY1OS0uNzY4aC0uMTEzbC0uMjc0LjY2MWgtMS4yNTF2LTguMzU3aDEuNjM4djEuOTQ0YzAgLjI0Ny0uMDIxLjY0My0uMDY0IDEuMTg3aC4wNjRjLjM4My0uNTk0Ljk1LS44OTIgMS43MDMtLjg5MnptLS41MjcgMS4zMWMtLjQwNCAwLS43LjEyNS0uODg2LjM3NC0uMTg2LjI0OS0uMjgzLjY2LS4yOSAxLjIzM3YuMTc3YzAgLjY0NS4wOTYgMS4xMDcuMjg3IDEuMzg2LjE5Mi4yOC40OTUuNDE5LjkxLjQxOS4zMzcgMCAuNjA1LS4xNTUuODA0LS40NjUuMTk5LS4zMS4yOTgtLjc2LjI5OC0xLjM1IDAtLjU5MS0uMS0xLjAzNS0uMy0xLjMzYS45NDMuOTQzIDAgMCAwLS44MjMtLjQ0M3ptMy4xODYtMS4xOTdoMS43OTRsMS4xMzQgMy4zNzljLjA5Ni4yOTMuMTYzLjY0LjE5OCAxLjA0MmguMDMzYy4wMzktLjM3LjExNi0uNzE3LjIzLTEuMDQybDEuMTEyLTMuMzc5aDEuNzU3bC0yLjU0IDYuNzczYy0uMjM0LjYyNy0uNTY2IDEuMDk2LS45OTcgMS40MDctLjQzMi4zMTItLjkzNi40NjgtMS41MTIuNDY4LS4yODMgMC0uNTYtLjAzLS44MzMtLjA5MnYtMS4zYTIuOCAyLjggMCAwIDAgLjY0NS4wN2MuMjkgMCAuNTQzLS4wODguNzYtLjI2Ni4yMTctLjE3Ny4zODYtLjQ0NC41MDgtLjgwM2wuMDk2LS4yOTUtMi4zODUtNS45NjJ6Ii8+CiAgICAgICAgPGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNzMpIj4KICAgICAgICAgICAgPGNpcmNsZSBjeD0iMTkiIGN5PSIxOSIgcj0iMTkiIGZpbGw9IiNFMEUwRTAiLz4KICAgICAgICAgICAgPHBhdGggZmlsbD0iI0ZGRiIgZD0iTTIyLjQ3NCAxNS40NDNoNS4xNjJMMTIuNDM2IDMwLjRWMTAuMzYzaDE1LjJsLTUuMTYyIDUuMDh6Ii8+CiAgICAgICAgPC9nPgogICAgICAgIDxwYXRoIGZpbGw9IiNEMkQyRDIiIGQ9Ik0xMjEuNTQ0IDE0LjU2di0xLjcyOGg4LjI3MnYxLjcyOGgtMy4wMjRWMjRoLTIuMjR2LTkuNDRoLTMuMDA4em0xMy43NDQgOS41NjhjLTEuMjkgMC0yLjM0MS0uNDE5LTMuMTUyLTEuMjU2LS44MS0uODM3LTEuMjE2LTEuOTQ0LTEuMjE2LTMuMzJzLjQwOC0yLjQ3NyAxLjIyNC0zLjMwNGMuODE2LS44MjcgMS44NzItMS4yNCAzLjE2OC0xLjI0czIuMzYuNDAzIDMuMTkyIDEuMjA4Yy44MzIuODA1IDEuMjQ4IDEuODggMS4yNDggMy4yMjQgMCAuMzEtLjAyMS41OTctLjA2NC44NjRoLTYuNDY0Yy4wNTMuNTc2LjI2NyAxLjA0LjY0IDEuMzkyLjM3My4zNTIuODQ4LjUyOCAxLjQyNC41MjguNzc5IDAgMS4zNTUtLjMyIDEuNzI4LS45NmgyLjQzMmEzLjg5MSAzLjg5MSAwIDAgMS0xLjQ4OCAyLjA2NGMtLjczNi41MzMtMS42MjcuOC0yLjY3Mi44em0xLjQ4LTYuNjg4Yy0uNC0uMzUyLS44ODMtLjUyOC0xLjQ0OC0uNTI4cy0xLjAzNy4xNzYtMS40MTYuNTI4Yy0uMzc5LjM1Mi0uNjA1LjgyMS0uNjggMS40MDhoNC4xOTJjLS4wMzItLjU4Ny0uMjQ4LTEuMDU2LS42NDgtMS40MDh6bTcuMDE2LTIuMzA0djEuNTY4Yy41OTctMS4xMyAxLjQ2MS0xLjY5NiAyLjU5Mi0xLjY5NnYyLjMwNGgtLjU2Yy0uNjcyIDAtMS4xNzkuMTY4LTEuNTIuNTA0LS4zNDEuMzM2LS41MTIuOTE1LS41MTIgMS43MzZWMjRoLTIuMjU2di04Ljg2NGgyLjI1NnptNi40NDggMHYxLjMyOGMuNTY1LS45NyAxLjQ4My0xLjQ1NiAyLjc1Mi0xLjQ1Ni42NzIgMCAxLjI3Mi4xNTUgMS44LjQ2NC41MjguMzEuOTM2Ljc1MiAxLjIyNCAxLjMyOC4zMS0uNTU1LjczMy0uOTkyIDEuMjcyLTEuMzEyYTMuNDg4IDMuNDg4IDAgMCAxIDEuODE2LS40OGMxLjA1NiAwIDEuOTA3LjMzIDIuNTUyLjk5Mi42NDUuNjYxLjk2OCAxLjU5Ljk2OCAyLjc4NFYyNGgtMi4yNHYtNC44OTZjMC0uNjkzLS4xNzYtMS4yMjQtLjUyOC0xLjU5Mi0uMzUyLS4zNjgtLjgzMi0uNTUyLTEuNDQtLjU1MnMtMS4wOS4xODQtMS40NDguNTUyYy0uMzU3LjM2OC0uNTM2Ljg5OS0uNTM2IDEuNTkyVjI0aC0yLjI0di00Ljg5NmMwLS42OTMtLjE3Ni0xLjIyNC0uNTI4LTEuNTkyLS4zNTItLjM2OC0uODMyLS41NTItMS40NC0uNTUycy0xLjA5LjE4NC0xLjQ0OC41NTJjLS4zNTcuMzY4LS41MzYuODk5LS41MzYgMS41OTJWMjRoLTIuMjU2di04Ljg2NGgyLjI1NnpNMTY0LjkzNiAyNFYxMi4xNmgyLjI1NlYyNGgtMi4yNTZ6bTcuMDQtLjE2bC0zLjQ3Mi04LjcwNGgyLjUyOGwyLjI1NiA2LjMwNCAyLjM4NC02LjMwNGgyLjM1MmwtNS41MzYgMTMuMDU2aC0yLjM1MmwxLjg0LTQuMzUyeiIvPgogICAgPC9nPgo8L3N2Zz4K) center no-repeat;"></span>

      <div data-custom-class="body">
      <div><strong><span style="font-size: 26px;"><span data-custom-class="title"><bdt class="block-component"></bdt><bdt class="question"><h1>PRIVACY NOTICE</h1></bdt><bdt class="statement-end-if-in-editor"></bdt></span></span></strong></div><div><span style="color: rgb(127, 127, 127);"><strong><span style="font-size: 15px;"><span data-custom-class="subtitle">Last updated <bdt class="question">January 22, 2026</bdt></span></span></strong></span></div><div><br></div><div><br></div><div><br></div><div style="line-height: 1.5;"><span style="color: rgb(127, 127, 127);"><span style="color: rgb(89, 89, 89); font-size: 15px;"><span data-custom-class="body_text">This Privacy Notice for <bdt class="question noTranslate">__________</bdt><bdt class="block-component"></bdt></bdt> (<bdt class="block-component"></bdt>'<strong>we</strong>', '<strong>us</strong>', or '<strong>our</strong>'<bdt class="else-block"></bdt></span><span data-custom-class="body_text">), describes how and why we might access, collect, store, use, and/or share (<bdt class="block-component"></bdt>'<strong>process</strong>'<bdt class="else-block"></bdt>) your personal information when you use our services (<bdt class="block-component"></bdt>'<strong>Services</strong>'<bdt class="else-block"></bdt>), including when you:</span></span></span><span style="font-size: 15px;"><span style="color: rgb(127, 127, 127);"><span data-custom-class="body_text"><span style="color: rgb(89, 89, 89);"><span data-custom-class="body_text"><bdt class="block-component"></bdt></span></span></span></span></span></span></span></span></li></ul><div><bdt class="block-component"><span style="font-size: 15px;"><span style="font-size: 15px;"><span style="color: rgb(127, 127, 127);"><span data-custom-class="body_text"><span style="color: rgb(89, 89, 89);"><span data-custom-class="body_text"><bdt class="block-component"></bdt></span></span></span></span></span></span></bdt></div><ul><li data-custom-class="body_text" style="line-height: 1.5;"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span data-custom-class="body_text">Download and use<bdt class="block-component"></bdt> our mobile application<bdt class="block-component"></bdt> (<bdt class="question">Budget Audit)<span style="font-size: 15px; color: rgb(89, 89, 89);"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span data-custom-class="body_text"><span style="font-size: 15px;"><span style="color: rgb(89, 89, 89);"><span data-custom-class="body_text"><span style="font-size: 15px;"><span style="color: rgb(89, 89, 89);"><bdt class="statement-end-if-in-editor">,</bdt></span></span></span></span></span></span></span></span></bdt></span><span data-custom-class="body_text"><span style="font-size: 15px;"><span style="color: rgb(89, 89, 89);"><span data-custom-class="body_text"><span style="font-size: 15px;"><span style="color: rgb(89, 89, 89);"><bdt class="statement-end-if-in-editor"><bdt class="block-component"> or any other application of ours that links to this Privacy Notice</bdt></bdt></span></span></span></span></span></span></span></span></li></ul><div style="line-height: 1.5;"><bdt class="block-component"><span style="font-size: 15px;"></span></bdt></div><ul><li data-custom-class="body_text" style="line-height: 1.5;"><span style="font-size: 15px;">Use <bdt class="question">Budget Audit</bdt>. <bdt class="question">A platform for budgeting and expenditure analysis</bdt></span><bdt class="statement-end-if-in-editor"><span style="font-size: 15px;"></span></bdt></li></ul><div style="line-height: 1.5;"><span style="font-size: 15px;"><span style="color: rgb(127, 127, 127);"><span data-custom-class="body_text"><span style="color: rgb(89, 89, 89);"><span data-custom-class="body_text"><bdt class="block-component"></bdt></span></span></span></span></span></div><ul><li data-custom-class="body_text" style="line-height: 1.5;"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span data-custom-class="body_text">Engage with us in other related ways, including any marketing or events<span style="font-size: 15px;"><span style="color: rgb(89, 89, 89);"><span data-custom-class="body_text"><span style="font-size: 15px;"><span style="color: rgb(89, 89, 89);"><bdt class="statement-end-if-in-editor"></bdt></span></span></span></span></span></span></span></span></li></ul><div style="line-height: 1.5;"><span style="font-size: 15px;"><span style="color: rgb(127, 127, 127);"><span data-custom-class="body_text"><strong>Questions or concerns? </strong>Reading this Privacy Notice will help you understand your privacy rights and choices. We are responsible for making decisions about how your personal information is processed. If you do not agree with our policies and practices, please do not use our Services.<bdt class="block-component"></bdt> If you still have any questions or concerns, please contact us at <bdt class="question noTranslate"><a target="_blank" data-custom-class="link" href="mailto:victorkithini@outlook.com">victorkithini@outlook.com</a></bdt>.</span></span></span></div><div style="line-height: 1.5;"><br></div><div style="line-height: 1.5;"><br></div><div style="line-height: 1.5;"><strong><span style="font-size: 15px;"><span data-custom-class="heading_1"><h2>SUMMARY OF KEY POINTS</h2></span></span></strong></div><div style="line-height: 1.5;"><span style="font-size: 15px;"><span data-custom-class="body_text"><strong><em>This summary provides key points from our Privacy Notice, but you can find out more details about any of these topics by clicking the link following each key point or by using our </em></strong></span></span><a data-custom-class="link" href="#toc"><span style="color: rgb(0, 58, 250); font-size: 15px;"><span data-custom-class="body_text"><strong><em>table of contents</em></strong></span></span></a><span style="font-size: 15px;"><span data-custom-class="body_text"><strong><em> below to find the section you are looking for.</em></strong></span></span></div><div style="line-height: 1.5;"><br></div><div style="line-height: 1.5;"><span style="font-size: 15px;"><span data-custom-class="body_text"><strong>What personal information do we process?</strong> When you visit, use, or navigate our Services, we may process personal information depending on how you interact with us and the Services, the choices you make, and the products and features you use. Learn more about </span></span><a data-custom-class="link" href="#personalinfo"><span style="color: rgb(0, 58, 250); font-size: 15px;"><span data-custom-class="body_text">personal information you disclose to us</span></span></a><span data-custom-class="body_text">.</span></div><div style="line-height: 1.5;"><br></div><div style="line-height: 1.5;"><span style="font-size: 15px;"><span data-custom-class="body_text"><strong>Do we process any sensitive personal information? </strong>Some of the information may be considered <bdt class="block-component"></bdt>'special' or 'sensitive'<bdt class="else-block"></bdt> in certain jurisdictions, for example your racial or ethnic origins, sexual orientation, and religious beliefs. <bdt class="block-component"></bdt>We may process sensitive personal information when necessary with your consent or as otherwise permitted by applicable law. Learn more about </span></span><a data-custom-class="link" href="#sensitiveinfo"><span style="color: rgb(0, 58, 250); font-size: 15px;"><span data-custom-class="body_text">sensitive information we process</span></span></a><span data-custom-class="body_text">.</span><span style="font-size: 15px;"><span data-custom-class="body_text"><bdt class="statement-end-if-in-editor"></bdt></span></span></div><div style="line-height: 1.5;"><br></div><div style="line-height: 1.5;"><span style="font-size: 15px;"><span data-custom-class="body_text"><strong>Do we collect any information from third parties?</strong> <bdt class="block-component"></bdt>We do not collect any information from third parties.<bdt class="else-block"></bdt></span></span></div><div style="line-height: 1.5;"><br></div><div style="line-height: 1.5;"><span style="font-size: 15px;"><span data-custom-class="body_text"><strong>How do we process your information?</strong> We process your information to provide, improve, and administer our Services, communicate with you, for security and fraud prevention, and to comply with law. We may also process your information for other purposes with your consent. We process your information only when we have a valid legal reason to do so. Learn more about </span></span><a data-custom-class="link" href="#infouse"><span style="color: rgb(0, 58, 250); font-size: 15px;"><span data-custom-class="body_text">how we process your information</span></span></a><span data-custom-class="body_text">.</span></div><div style="line-height: 1.5;"><br></div><div style="line-height: 1.5;"><span style="font-size: 15px;"><span data-custom-class="body_text"><strong>In what situations and with which <bdt class="block-component"></bdt>parties do we share personal information?</strong> We may share information in specific situations and with specific <bdt class="block-component"></bdt>third parties. Learn more about </span></span><a data-custom-class="link" href="#whoshare"><span style="color: rgb(0, 58, 250); font-size: 15px;"><span data-custom-class="body_text">when and with whom we share your personal information</span></span></a><span style="font-size: 15px;"><span data-custom-class="body_text">.<bdt class="block-component"></bdt></span></span></div><div style="line-height: 1.5;"><br></div><div style="line-height: 1.5;"><span style="font-size: 15px;"><span data-custom-class="body_text"><strong>How do we keep your information safe?</strong> We have adequate <bdt class="block-component"></bdt>organisational<bdt class="else-block"></bdt> and technical processes and procedures in place to protect your personal information. However, no electronic transmission over the internet or information storage technology can be guaranteed to be 100% secure, so we cannot promise or guarantee that hackers, cybercriminals, or other <bdt class="block-component"></bdt>unauthorised<bdt class="else-block"></bdt> third parties will not be able to defeat our security and improperly collect, access, steal, or modify your information. Learn more about </span></span><a data-custom-class="link" href="#infosafe"><span style="color: rgb(0, 58, 250); font-size: 15px;"><span data-custom-class="body_text">how we keep your information safe</span></span></a><span data-custom-class="body_text">.</span><span style="font-size: 15px;"><span data-custom-class="body_text"><bdt class="statement-end-if-in-editor"></bdt></span></span></div><div style="line-height: 1.5;"><br></div><div style="line-height: 1.5;"><span style="font-size: 15px;"><span data-custom-class="body_text"><strong>What are your rights?</strong> Depending on where you are located geographically, the applicable privacy law may mean you have certain rights regarding your personal information. Learn more about </span></span><a data-custom-class="link" href="#privacyrights"><span style="color: rgb(0, 58, 250); font-size: 15px;"><span data-custom-class="body_text">your privacy rights</span></span></a><span data-custom-class="body_text">.</span></div><div style="line-height: 1.5;"><br></div><div style="line-height: 1.5;"><span style="font-size: 15px;"><span data-custom-class="body_text"><strong>How do you exercise your rights?</strong> The easiest way to exercise your rights is by <bdt class="block-component">submitting a </bdt></span></span><a data-custom-class="link" href="https://app.termly.io/dsar/6c1fd8c3-cbc2-44ba-b413-5cae290d75a2" rel="noopener noreferrer" target="_blank"><span style="color: rgb(0, 58, 250); font-size: 15px;"><span data-custom-class="body_text">data subject access request</span></span></a><span style="font-size: 15px;"><span data-custom-class="body_text"><bdt class="block-component"></bdt>, or by contacting us. We will consider and act upon any request in accordance with applicable data protection laws.</span></span></div><div style="line-height: 1.5;"><br></div><div style="line-height: 1.5;"><span style="font-size: 15px;"><span data-custom-class="body_text">Want to learn more about what we do with any information we collect? </span></span><a data-custom-class="link" href="#toc"><span style="color: rgb(0, 58, 250); font-size: 15px;"><span data-custom-class="body_text">Review the Privacy Notice in full</span></span></a><span style="font-size: 15px;"><span data-custom-class="body_text">.</span></span></div><div style="line-height: 1.5;"><br></div><div style="line-height: 1.5;"><br></div><div id="toc" style="line-height: 1.5;"><span style="font-size: 15px;"><span style="color: rgb(127, 127, 127);"><span style="color: rgb(0, 0, 0);"><strong><span data-custom-class="heading_1"><h2>TABLE OF CONTENTS</h2></span></strong></span></span></span></div><div style="line-height: 1.5;"><span style="font-size: 15px;"><a data-custom-class="link" href="#infocollect"><span style="color: rgb(0, 58, 250);">1. WHAT INFORMATION DO WE COLLECT?</span></a></span></div><div style="line-height: 1.5;"><span style="font-size: 15px;"><a data-custom-class="link" href="#infouse"><span style="color: rgb(0, 58, 250);">2. HOW DO WE PROCESS YOUR INFORMATION?<bdt class="block-component"></bdt></span></a></span></div><div style="line-height: 1.5;"><span style="font-size: 15px;"><a data-custom-class="link" href="#legalbases"><span style="color: rgb(0, 58, 250);">3. <span style="font-size: 15px;"><span style="color: rgb(0, 58, 250);">WHAT LEGAL BASES DO WE RELY ON TO PROCESS YOUR PERSONAL INFORMATION?</span></span><bdt class="statement-end-if-in-editor"></bdt></span></a></span></div><div style="line-height: 1.5;"><span style="font-size: 15px;"><span style="color: rgb(0, 58, 250);"><a data-custom-class="link" href="#whoshare">4. WHEN AND WITH WHOM DO WE SHARE YOUR PERSONAL INFORMATION?</a></span><span data-custom-class="body_text"><bdt class="block-component"></bdt></a><span style="color: rgb(127, 127, 127);"><span style="color: rgb(89, 89, 89);"><span data-custom-class="body_text"><span style="color: rgb(89, 89, 89);"><bdt class="block-component"></bdt></span></span></span></span><bdt class="block-component"></bdt></span></div><div style="line-height: 1.5;"><a data-custom-class="link" href="#ai"><span style="color: rgb (0, 58, 250);">5. DO WE OFFER ARTIFICIAL INTELLIGENCE-BASED PRODUCTS?</span></a><span style="font-size: 15px;"><bdt class="statement-end-if-in-editor"></bdt></span></div><div style="line-height: 1.5;"><span style="font-size: 15px;"><span style="color: rgb(127, 127, 127);"><span style="color: rgb(89, 89, 89);"><span data-custom-class="body_text"><span style="color: rgb(89, 89, 89);"><span style="color: rgb(89, 89, 89);"><span style="color: rgb(89, 89, 89);"><bdt class="block-component"></bdt></span></span> <bdt class="block-component"></bdt></span></span></span></span></span></div><div style="line-height: 1.5;"><span style="font-size: 15px;"><a data-custom-class="link" href="#inforetain"><span style="color: rgb(0, 58, 250);">6. HOW LONG DO WE KEEP YOUR INFORMATION?</span></a><span style="color: rgb(127, 127, 127);"><span style="color: rgb(89, 89, 89);"><span data-custom-class="body_text"><span style="color: rgb(89, 89, 89);"><span style="color: rgb(89, 89, 89);"><bdt class="block-component"></bdt></span></span></span></span></span></span></div><div style="line-height: 1.5;"><span style="font-size: 15px;"><a data-custom-class="link" href="#infosafe"><span style="color: rgb(0, 58, 250);">7. HOW DO WE KEEP YOUR INFORMATION SAFE?</span></a><span style="color: rgb(127, 127, 127);"><span style="color: rgb(89, 89, 89);"><span data-custom-class="body_text"><span style="color: rgb(89, 89, 89);"><bdt class="statement-end-if-in-editor"></bdt><bdt class="block-component"></bdt></span></span></span></span></span></div><div style="line-height: 1.5;"><span style="font-size: 15px;"><a data-custom-class="link" href="#infominors"><span style="color: rgb(0, 58, 250);">8. DO WE COLLECT INFORMATION FROM MINORS?</span></a><span style="color: rgb(127, 127, 127);"><span style="color: rgb(89, 89, 89);"><span data-custom-class="body_text"><span style="color: rgb(89, 89, 89);"><bdt class="statement-end-if-in-editor"></bdt></span></span></span></span></span></div><div style="line-height: 1.5;"><span style="font-size: 15px;"><span style="color: rgb(0, 58, 250);"><a data-custom-class="link" href="#privacyrights">9. WHAT ARE YOUR PRIVACY RIGHTS?</a></span></span></div><div style="line-height: 1.5;"><span style="font-size: 15px;"><a data-custom-class="link" href="#DNT"><span style="color: rgb(0, 58, 250);">10. CONTROLS FOR DO-NOT-TRACK FEATURES<bdt class="block-component"></bdt></span></a></span></div><div style="line-height: 1.5;"><span style="font-size: 15px;"><a data-custom-class="link" href="#uslaws"><span style="color: rgb(0, 58, 250);">11. DO UNITED STATES RESIDENTS HAVE SPECIFIC PRIVACY RIGHTS?</span></a></span><bdt class="block-component"><span style="font-size: 15px;"><span data-custom-class="body_text"></span></bdt></span></div><div style="line-height: 1.5;"><bdt class="block-component"><span style="font-size: 15px;"></bdt><bdt class="block-component"></bdt><bdt class="block-component"></bdt><bdt class="block-component"></bdt><bdt class="block-component"></bdt><bdt class="block-component"></bdt><bdt class="block-component"></bdt><bdt class="block-component"></bdt><bdt class="block-component"></bdt><bdt class="block-component"></span></bdt></div><div style="line-height: 1.5;"><span style="font-size: 15px;"><a data-custom-class="link" href="#policyupdates"><span style="color: rgb(0, 58, 250);">12. DO WE MAKE UPDATES TO THIS NOTICE?</span></a></span></div><div style="line-height: 1.5;"><a data-custom-class="link" href="#contact"><span style="color: rgb(0, 58, 250); font-size: 15px;">13. HOW CAN YOU CONTACT US ABOUT THIS NOTICE?</span></a></div><div style="line-height: 1.5;"><a data-custom-class="link" href="#request"><span style="color: rgb(0, 58, 250);">14. HOW CAN YOU REVIEW, UPDATE, OR DELETE THE DATA WE COLLECT FROM YOU?</span></a></div><div style="line-height: 1.5;"><br></div><div style="line-height: 1.5;"><br></div><div id="infocollect" style="line-height: 1.5;"><span style="color: rgb(0, 0, 0);"><span style="color: rgb(0, 0, 0); font-size: 15px;"><span style="font-size: 15px; color: rgb(0, 0, 0);"><span style="font-size: 15px; color: rgb(0, 0, 0);"><span id="control" style="color: rgb(0, 0, 0);"><strong><span data-custom-class="heading_1"><h2>1. WHAT INFORMATION DO WE COLLECT?</h2></span></strong></span></span></span></span></span><span data-custom-class="heading_2" id="personalinfo" style="color: rgb(0, 0, 0);"><span style="font-size: 15px;"><strong><h3>Personal information you disclose to us</h3></strong></span></span><span style="color: rgb(127, 127, 127);"><span style="color: rgb(89, 89, 89); font-size: 15px;"><span data-custom-class="body_text"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span data-custom-class="body_text"><strong><em>In Short:</em></strong></span></span></span></span><span data-custom-class="body_text"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span data-custom-class="body_text"><strong><em> </em></strong><em>We collect personal information that you provide to us.</em></span></span></span></span></span></span></div><div style="line-height: 1.5;"><br></div><div style="line-height: 1.5;"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span data-custom-class="body_text">We collect personal information that you voluntarily provide to us when you <span style="font-size: 15px;"><bdt class="block-component"></bdt></span>register on the Services, </span><span style="font-size: 15px;"><span data-custom-class="body_text"><span style="font-size: 15px;"><bdt class="statement-end-if-in-editor"></bdt></span></span><span data-custom-class="body_text">express an interest in obtaining information about us or our products and Services, when you participate in activities on the Services, or otherwise when you contact us.</span></span></span></span></div><div style="line-height: 1.5;"><br></div><div style="line-height: 1.5;"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span data-custom-class="body_text"><span style="font-size: 15px;"><bdt class="block-component"></bdt></span></span></span></span></div><div style="line-height: 1.5;"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span data-custom-class="body_text"><strong>Personal Information Provided by You.</strong> The personal information that we collect depends on the context of your interactions with us and the Services, the choices you make, and the products and features you use. The personal information we collect may include the following:<span style="font-size: 15px;"><span data-custom-class="body_text"><bdt class="forloop-component"></bdt></span></span></span></span></span></div><ul><li data-custom-class="body_text" style="line-height: 1.5;"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span data-custom-class="body_text"><span style="font-size: 15px;"><span data-custom-class="body_text"><bdt class="question">names</bdt></span></span></span></span></span></li></ul><div style="line-height: 1.5;"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span data-custom-class="body_text"><span style="font-size: 15px;"><span data-custom-class="body_text"><bdt class="forloop-component"></bdt></span></span></span></span></span></div><ul><li data-custom-class="body_text" style="line-height: 1.5;"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span data-custom-class="body_text"><span style="font-size: 15px;"><span data-custom-class="body_text"><bdt class="question">email addresses</bdt></span></span></span></span></span></li></ul><div style="line-height: 1.5;"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span data-custom-class="body_text"><span style="font-size: 15px;"><span data-custom-class="body_text"><bdt class="forloop-component"></bdt></span></span></span></span></span></div><ul><li data-custom-class="body_text" style="line-height: 1.5;"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span data-custom-class="body_text"><span style="font-size: 15px;"><span data-custom-class="body_text"><bdt class="question">usernames</bdt></span></span></span></span></span></li></ul><div style="line-height: 1.5;"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span data-custom-class="body_text"><span style="font-size: 15px;"><span data-custom-class="body_text"><bdt class="forloop-component"></bdt></span></span></span></span></span></div><ul><li data-custom-class="body_text" style="line-height: 1.5;"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span data-custom-class="body_text"><span style="font-size: 15px;"><span data-custom-class="body_text"><bdt class="question">passwords</bdt></span></span></span></span></span></li></ul><div style="line-height: 1.5;"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span data-custom-class="body_text"><span style="font-size: 15px;"><span data-custom-class="body_text"><bdt class="forloop-component"></bdt></span></span></span></span></span></div><ul><li data-custom-class="body_text" style="line-height: 1.5;"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span data-custom-class="body_text"><span style="font-size: 15px;"><span data-custom-class="body_text"><bdt class="question">financial transactions</bdt></span></span></span></span></span></li></ul><div style="line-height: 1.5;"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span data-custom-class="body_text"><span style="font-size: 15px;"><span data-custom-class="body_text"><bdt class="forloop-component"></bdt></span><span data-custom-class="body_text"><bdt class="statement-end-if-in-editor"></bdt></span></span></span></span></span></div><div id="sensitiveinfo" style="line-height: 1.5;"><span style="font-size: 15px;"><span data-custom-class="body_text"><strong>Sensitive Information.</strong> <bdt class="block-component"></bdt>When necessary, with your consent or as otherwise permitted by applicable law, we process the following categories of sensitive information:<bdt class="forloop-component"></bdt></span></span></div><ul><li data-custom-class="body_text" style="line-height: 1.5;"><span style="font-size: 15px;"><span data-custom-class="body_text"><bdt class="question">financial data</bdt></span></span></li></ul><div><span style="font-size: 15px;"><span data-custom-class="body_text"><bdt class="forloop-component"></bdt></span><span data-custom-class="body_text"><bdt class="statement-end-if-in-editor"></bdt></span></span><span style="font-size: 15px; color: rgb(89, 89, 89);"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span data-custom-class="body_text"><span style="font-size: 15px;"><span data-custom-class="body_text"><bdt class="block-component"><bdt class="block-component"></bdt></bdt></span></span></span></span><bdt class="block-component"> <bdt class="block-component"></bdt></bdt></div><div style="line-height: 1.5;"><span data-custom-class="body_text"><span style="font-size: 15px;"><strong>Application Data.</strong> If you use our application(s), we also may collect the following information if you choose to provide us with access or permission:<bdt class="block-component"></bdt></span></span></li></ul><div style="line-height: 1.5;"><bdt class="block-component"><span style="font-size: 15px;"><span data-custom-class="body_text"></span></span></bdt></div><ul><li data-custom-class="body_text" style="line-height: 1.5;"><span style="font-size: 15px;"><span data-custom-class="body_text"><em>Mobile Device Access.</em> We may request access or permission to certain features from your mobile device, including your mobile device's <bdt class="forloop-component"></bdt><bdt class="question">storage</bdt>, <bdt class="forloop-component"></bdt>and other features. If you wish to change our access or permissions, you may do so in your device's settings.<bdt class="statement-end-if-in-editor"></bdt></span></span></li></ul><div style="line-height: 1.5;"><bdt class="block-component"><span style="font-size: 15px;"><span data-custom-class="body_text"></bdt></span></span></li></ul><div style="line-height: 1.5;"><bdt class="block-component"><span style="font-size: 15px;"><span data-custom-class="body_text"></span></span></bdt></div><ul><li data-custom-class="body_text" style="line-height: 1.5;"><span style="font-size: 15px;"><span data-custom-class="body_text"><em>Push Notifications.</em> We may request to send you push notifications regarding your account or certain features of the application(s). If you wish to opt out from receiving these types of communications, you may turn them off in your device's settings.<bdt class="statement-end-if-in-editor"></bdt></span></span></li></ul><div style="line-height: 1.5;"><span style="font-size: 15px;"><span data-custom-class="body_text">This information is primarily needed to maintain the security and operation of our application(s), for troubleshooting, and for our internal analytics and reporting purposes.</span></span></div><div style="line-height: 1.5;"><br></div><div style="line-height: 1.5;"><bdt class="statement-end-if-in-editor"><span style="font-size: 15px;"><span data-custom-class="body_text"></span></span></bdt></div><div style="line-height: 1.5;"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span data-custom-class="body_text">All personal information that you provide to us must be true, complete, and accurate, and you must notify us of any changes to such personal information.</span></span></span></div><div style="line-height: 1.5;"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span data-custom-class="body_text"><bdt class="block-component"></bdt></bdt></span></span></span><bdt class="block-component"><span style="font-size: 15px;"></span></bdt><span style="font-size: 15px; color: rgb(89, 89, 89);"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span data-custom-class="body_text"><span style="color: rgb(89, 89, 89); font-size: 15px;"><span data-custom-class="body_text"><span style="color: rgb(89, 89, 89); font-size: 15px;"><span data-custom-class="body_text"><bdt class="statement-end-if-in-editor"><bdt class="block-component"></bdt></bdt></span></span></span></span></bdt></span></span></span></span></span></span></span></span><span style="font-size: 15px;"><span data-custom-class="body_text"><bdt class="block-component"></bdt></span></span></div><div style="line-height: 1.5;"><br></div><div id="infouse" style="line-height: 1.5;"><span style="color: rgb(127, 127, 127);"><span style="color: rgb(89, 89, 89); font-size: 15px;"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span id="control" style="color: rgb(0, 0, 0);"><strong><span data-custom-class="heading_1"><h2>2. HOW DO WE PROCESS YOUR INFORMATION?</h2></span></strong></span></span></span><span data-custom-class="body_text"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span data-custom-class="body_text"><strong><em>In Short: </em></strong><em>We process your information to provide, improve, and administer our Services, communicate with you, for security and fraud prevention, and to comply with law.<bdt class="block-component"></bdt> We may also process your information for other purposes <bdt class="block-component"></bdt>with your<bdt class="statement-end-if-in-editor"></bdt> consent.</em></span></span></span></span></span></span></div><div style="line-height: 1.5;"><br></div><div style="line-height: 1.5;"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span data-custom-class="body_text"><strong>We process your personal information for a variety of reasons, depending on how you interact with our Services, including:</strong><bdt class="block-component"></bdt></span></span></span></div><ul><li data-custom-class="body_text" style="line-height: 1.5;"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span data-custom-class="body_text"><strong>To facilitate account creation and authentication and otherwise manage user accounts. </strong>We may process your information so you can create and log in to your account, as well as keep your account in working order.<span style="font-size: 15px; color: rgb(89, 89, 89);"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span data-custom-class="body_text"><span style="font-size: 15px;"><span style="color: rgb(89, 89, 89);"><span data-custom-class="body_text"><span style="font-size: 15px;"><span style="color: rgb(89, 89, 89);"><span data-custom-class="body_text"><bdt class="statement-end-if-in-editor"></bdt></span></span></span></span></span></span></span></span></span></span></span></span></li></ul><div style="line-height: 1.5;"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span data-custom-class="body_text"><bdt class="block-component"></bdt></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></li></ul><div style="line-height: 1.5;"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span data-custom-class="body_text"><bdt class="block-component"></bdt></span></span></span></div><ul><li data-custom-class="body_text" style="line-height: 1.5;"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span data-custom-class="body_text"><strong>To deliver and facilitate delivery of services to the user. </strong>We may process your information to provide you with the requested service.<span style="font-size: 15px;"><span style="color: rgb(89, 89, 89);"><span data-custom-class="body_text"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span data-custom-class="body_text"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span data-custom-class="body_text"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span data-custom-class="body_text"><span style="font-size: 15px;"><span style="color: rgb(89, 89, 89);"><span data-custom-class="body_text"><span style="font-size: 15px;"><span style="color: rgb(89, 89, 89);"><span data-custom-class="body_text"><bdt class="statement-end-if-in-editor"></bdt></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></li></ul><div style="line-height: 1.5;"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span data-custom-class="body_text"><bdt class="block-component"></bdt></span></span></span></span></span></span></span></span></span></span></span></span></li></ul><div style="line-height: 1.5;"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span data-custom-class="body_text"><bdt class="block-component"></bdt></span></span></span></li></ul><div style="line-height: 1.5;"><bdt class="block-component"><span style="font-size: 15px;"></bdt></span></span></span></span></span></span></li></ul><div style="line-height: 1.5;"><bdt class="block-component"><span style="font-size: 15px;"></bdt></span></span></span></span></span></span></span></span></span></li></ul><div style="line-height: 1.5;"><bdt class="block-component"><span style="font-size: 15px;"></bdt></span></span></span></span></span></span></span></span></span></span></span></span></li></ul><div style="line-height: 1.5;"><bdt class="block-component"><span style="font-size: 15px;"><span data-custom-class="body_text"></span></span></bdt></li></ul><p style="font-size: 15px; line-height: 1.5;"><bdt class="block-component"><span style="font-size: 15px;"></bdt></span></span></span></span></span></span></span></span></span></span></span></li></ul><p style="font-size: 15px; line-height: 1.5;"><bdt class="block-component"><span style="font-size: 15px;"></bdt></span></span></span></span></span></span></span></span></span></span></span></li></ul><p style="font-size: 15px; line-height: 1.5;"><bdt class="block-component"></bdt></span></span></span></span></span></span></span></span></span></span></span></li></ul><p style="font-size: 15px; line-height: 1.5;"><bdt class="block-component"></bdt></span></span></span></span></span></span></span></span></span></span></span></li></ul><div style="line-height: 1.5;"><bdt class="block-component"><span style="font-size: 15px;"><span data-custom-class="body_text"></span></bdt></span></li></ul><div style="line-height: 1.5;"><bdt class="block-component"><span style="font-size: 15px;"></bdt></span></span></span></li></ul><div style="line-height: 1.5;"><bdt class="block-component"><span style="font-size: 15px;"></bdt></span></span></span></li></ul><div style="line-height: 1.5;"><span style="font-size: 15px;"><bdt class="block-component"><span data-custom-class="body_text"></bdt></span></span></li></ul><div style="line-height: 1.5;"><bdt class="block-component"><span style="font-size: 15px;"><span data-custom-class="body_text"></bdt></span></span></li></ul><div style="line-height: 1.5;"><bdt class="block-component"><span style="font-size: 15px;"><span data-custom-class="body_text"></span></span></bdt></li></ul><div style="line-height: 1.5;"><bdt class="block-component"><span style="font-size: 15px;"><span data-custom-class="body_text"></span></span></bdt></li></ul><div style="line-height: 1.5;"><bdt class="block-component"><span style="font-size: 15px;"><span data-custom-class="body_text"></span></span></bdt></li></ul><div style="line-height: 1.5;"><bdt class="block-component"><span style="font-size: 15px;"><span data-custom-class="body_text"></span></span></bdt></li></ul><div style="line-height: 1.5;"><bdt class="block-component"><span style="font-size: 15px;"><span data-custom-class="body_text"></span></span></bdt></li></ul><div style="line-height: 1.5;"><bdt class="block-component"><span style="font-size: 15px;"><span data-custom-class="body_text"></span></span></bdt></li></ul><div style="line-height: 1.5;"><bdt class="block-component"><span style="font-size: 15px;"><span data-custom-class="body_text"></bdt></span></span></li></ul><div style="line-height: 1.5;"><bdt class="block-component"><span style="font-size: 15px;"><span data-custom-class="body_text"></bdt></span></span></li></ul><div style="line-height: 1.5;"><bdt class="block-component"><span style="font-size: 15px;"><span data-custom-class="body_text"></bdt></span></span></li></ul><div style="line-height: 1.5;"><bdt class="block-component"><span style="font-size: 15px;"><span data-custom-class="body_text"></span></span></bdt></div><ul><li data-custom-class="body_text" style="line-height: 1.5;"><span data-custom-class="body_text"><span style="font-size: 15px;"><strong>To save or protect an individual's vital interest.</strong> We may process your information when necessary to save or protect an individual’s vital interest, such as to prevent harm.</span></span><bdt class="statement-end-if-in-editor"><span style="font-size: 15px;"><span data-custom-class="body_text"></span></span></bdt></li></ul><div style="line-height: 1.5;"><bdt class="block-component"><span style="font-size: 15px;"><span data-custom-class="body_text"></span></span></bdt><bdt class="block-component"><span style="font-size: 15px;"><span data-custom-class="body_text"></bdt></span></span><bdt class="block-component"><span style="font-size: 15px;"><span data-custom-class="body_text"></span></span></bdt><bdt class="block-component"><span style="font-size: 15px;"><span data-custom-class="body_text"></span></span></bdt></div><div style="line-height: 1.5;"><br></div><div id="legalbases" style="line-height: 1.5;"><strong><span style="font-size: 15px;"><span data-custom-class="heading_1"><h2>3. WHAT LEGAL BASES DO WE RELY ON TO PROCESS YOUR INFORMATION?</h2></span></span></strong><em><span style="font-size: 15px;"><span data-custom-class="body_text"><strong>In Short: </strong>We only process your personal information when we believe it is necessary and we have a valid legal reason (i.e.<bdt class="block-component"></bdt> legal basis) to do so under applicable law, like with your consent, to comply with laws, to provide you with services to enter into or <bdt class="block-component"></bdt>fulfil<bdt class="else-block"></bdt> our contractual obligations, to protect your rights, or to <bdt class="block-component"></bdt>fulfil<bdt class="else-block"></bdt> our legitimate business interests.</span></span></em></div><div style="line-height: 1.5;"><span style="font-size: 15px;"><span data-custom-class="body_text"><bdt class="block-component"></bdt></span><span data-custom-class="body_text"><bdt class="block-component"></bdt></span></span></div><div style="line-height: 1.5;"><br></div><div style="line-height: 1.5;"><em><span style="font-size: 15px;"><span data-custom-class="body_text"><strong><u>If you are located in the EU or UK, this section applies to you.</u></strong></span></span></em></div><div style="line-height: 1.5;"><br></div><div style="line-height: 1.5;"><span style="font-size: 15px;"><span data-custom-class="body_text"><bdt class="statement-end-if-in-editor"></bdt></span></span></div><div style="line-height: 1.5;"><span style="font-size: 15px;"><span data-custom-class="body_text">The General Data Protection Regulation (GDPR) and UK GDPR require us to explain the valid legal bases we rely on in order to process your personal information. As such, we may rely on the following legal bases to process your personal information:</span></span></div><ul><li data-custom-class="body_text" style="line-height: 1.5;"><span style="font-size: 15px;"><span data-custom-class="body_text"><strong>Consent. </strong>We may process your information if you have given us permission (i.e.<bdt class="block-component"></bdt> consent) to use your personal information for a specific purpose. You can withdraw your consent at any time. Learn more about </span></span><a data-custom-class="link" href="#withdrawconsent"><span style="color: rgb(0, 58, 250); font-size: 15px;"><span data-custom-class="body_text">withdrawing your consent</span></span></a><span data-custom-class="body_text">.</span></li></ul><div style="line-height: 1.5;"><bdt class="block-component"><span style="font-size: 15px;"><span data-custom-class="body_text"></span></span></bdt></div><ul><li data-custom-class="body_text" style="line-height: 1.5;"><span data-custom-class="body_text"><span style="font-size: 15px;"><strong>Performance of a Contract.</strong> We may process your personal information when we believe it is necessary to <bdt class="block-component"></bdt>fulfil<bdt class="else-block"></bdt> our contractual obligations to you, including providing our Services or at your request prior to entering into a contract with you.</span></span><bdt class="statement-end-if-in-editor"><span style="font-size: 15px;"><span data-custom-class="body_text"></span></span></bdt></li></ul><div style="line-height: 1.5;"><bdt class="block-component"><span style="font-size: 15px;"><span data-custom-class="body_text"></span></span></bdt><bdt class="block-component"><span style="font-size: 15px;"><span data-custom-class="body_text"></span></span></bdt></div><ul><li data-custom-class="body_text" style="line-height: 1.5;"><span data-custom-class="body_text"><span style="font-size: 15px;"><strong>Legal Obligations.</strong> We may process your information where we believe it is necessary for compliance with our legal obligations, such as to cooperate with a law enforcement body or regulatory agency, exercise or defend our legal rights, or disclose your information as evidence in litigation in which we are involved.<bdt class="statement-end-if-in-editor"></bdt><br></span></span></li></ul><div style="line-height: 1.5;"><bdt class="block-component"><span style="font-size: 15px;"><span data-custom-class="body_text"></span></span></bdt></div><ul><li data-custom-class="body_text" style="line-height: 1.5;"><span data-custom-class="body_text"><span style="font-size: 15px;"><strong>Vital Interests.</strong> We may process your information where we believe it is necessary to protect your vital interests or the vital interests of a third party, such as situations involving potential threats to the safety of any person.</span></span><bdt class="statement-end-if-in-editor"><span style="font-size: 15px;"><span data-custom-class="body_text"></span></span></bdt></li></ul><div style="line-height: 1.5;"><bdt class="block-component"><span style="font-size: 15px;"><span data-custom-class="body_text"></span></span></bdt><span data-custom-class="body_text"><span style="font-size: 15px;"><bdt class="block-component"><bdt class="block-component"></span></span></bdt><bdt class="statement-end-if-in-editor"><span style="font-size: 15px;"><span data-custom-class="body_text"></span></span></bdt></div><div style="line-height: 1.5;"><br></div><div id="whoshare" style="line-height: 1.5;"><span style="color: rgb(127, 127, 127);"><span style="color: rgb(89, 89, 89); font-size: 15px;"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span id="control" style="color: rgb(0, 0, 0);"><strong><span data-custom-class="heading_1"><h2>4. WHEN AND WITH WHOM DO WE SHARE YOUR PERSONAL INFORMATION?</h2></span></strong></span></span></span></span></span><span style="font-size: 15px; color: rgb(89, 89, 89);"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span data-custom-class="body_text"><strong><em>In Short:</em></strong><em> We may share information in specific situations described in this section and/or with the following <bdt class="block-component"></bdt>third parties.</em></span></span></span></div><div style="line-height: 1.5;"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span data-custom-class="body_text"><bdt class="block-component"></span></div><div style="line-height: 1.5;"><br></div><div style="line-height: 1.5;"><span style="font-size: 15px;"><span data-custom-class="body_text">We <bdt class="block-component"></bdt>may need to share your personal information in the following situations:</span></span></div><ul><li data-custom-class="body_text" style="line-height: 1.5;"><span style="font-size: 15px;"><span data-custom-class="body_text"><strong>Business Transfers.</strong> We may share or transfer your information in connection with, or during negotiations of, any merger, sale of company assets, financing, or acquisition of all or a portion of our business to another company.</span></span></li></ul><div style="line-height: 1.5;"><span style="font-size: 15px;"><span data-custom-class="body_text"><bdt class="block-component"></bdt></span></span></li></ul><div style="line-height: 1.5;"><span style="font-size: 15px;"><bdt class="block-component"><span data-custom-class="body_text"></span></bdt></span></div><ul><li data-custom-class="body_text" style="line-height: 1.5;"><span style="font-size: 15px;"><span data-custom-class="body_text"><strong>Affiliates. </strong>We may share your information with our affiliates, in which case we will require those affiliates to <bdt class="block-component"></bdt>honour<bdt class="else-block"></bdt> this Privacy Notice. Affiliates include our parent company and any subsidiaries, joint venture partners, or other companies that we control or that are under common control with us.</span><bdt class="statement-end-if-in-editor"><span data-custom-class="body_text"></span></bdt></span></li></ul><div style="line-height: 1.5;"><bdt class="block-component"><span style="font-size: 15px;"><span data-custom-class="body_text"></span></span></bdt></li></ul><div style="line-height: 1.5;"><bdt class="block-component"><span style="font-size: 15px;"><span data-custom-class="body_text"></bdt></span></span></li></ul><div style="line-height: 1.5;"><bdt class="block-component"><span style="font-size: 15px;"><span data-custom-class="body_text"></span></span></bdt><span data-custom-class="body_text"><span style="font-size: 15px;"><bdt class="block-component"></bdt></span></span><bdt class="statement-end-if-in-editor"><span style="font-size: 15px;"><span data-custom-class="body_text"></span></span></bdt></li></ul><div style="line-height: 1.5;"><bdt class="block-component"><span style="font-size: 15px;"><span data-custom-class="body_text"></span></span></bdt><span style="color: rgb(89, 89, 89); font-size: 15px;"><span style="font-size: 15px;"><span style="color: rgb(89, 89, 89);"><span style="font-size: 15px;"><span style="color: rgb(89, 89, 89);"><bdt class="block-component"><span data-custom-class="heading_1"><bdt class="block-component"></bdt></span></span></span></span></span></span></span></span></span></span><span style="font-size: 15px;"><bdt class="block-component"></bdt></span></div><div style="line-height: 1.5;"><br></div><div id="ai" style="line-height: 1.5;"><span style="font-size: 15px;"><strong><span data-custom-class="heading_1"><h2>5. DO WE OFFER ARTIFICIAL INTELLIGENCE-BASED PRODUCTS?</h2></span></strong><strong><em><span data-custom-class="body_text">In Short:</span></em></strong><em><span data-custom-class="body_text"> We offer products, features, or tools powered by artificial intelligence, machine learning, or similar technologies.</span></em></span></div><div style="line-height: 1.5;"><br></div><div style="line-height: 1.5;"><span style="font-size: 15px;"><span data-custom-class="body_text">As part of our Services, we offer products, features, or tools powered by artificial intelligence, machine learning, or similar technologies (collectively, <bdt class="block-component"></bdt>'<bdt class="else-block"></bdt>AI Products<bdt class="block-component"></bdt>'<bdt class="else-block"></bdt>). These tools are designed to enhance your experience and provide you with innovative solutions. The terms in this Privacy Notice govern your use of the AI Products within our Services.</span><bdt class="block-component"></bdt></span></div><div style="line-height: 1.5;"><br></div><div style="line-height: 1.5;"><span style="font-size: 15px;"><strong><span data-custom-class="body_text">Use of AI Technologies</span></strong></span></div><div style="line-height: 1.5;"><br></div><div style="line-height: 1.5;"><span style="font-size: 15px;"><span data-custom-class="body_text">We provide the AI Products through third-party service providers (<bdt class="block-component"></bdt>'<bdt class="else-block"></bdt>AI Service Providers<bdt class="block-component"></bdt>'<bdt class="else-block"></bdt>), including <bdt class="forloop-component"></bdt><bdt class="block-component"></bdt><bdt class="question">Meta AI</bdt><bdt class="block-component"></bdt><bdt class="forloop-component"></bdt>. As outlined in this Privacy Notice, your input, output, and personal information will be shared with and processed by these AI Service Providers to enable your use of our AI Products for purposes outlined in <bdt class="block-component"></bdt>'<bdt class="else-block"></bdt><bdt class="block-component"></bdt></span></span><span data-custom-class="body_text"><a data-custom-class="link" href="#legalbases"><span style="color: rgb(0, 58, 250); font-size: 15px;">WHAT LEGAL BASES DO WE RELY ON TO PROCESS YOUR PERSONAL INFORMATION?</span></a><span style="font-size: 15px;"><bdt class="else-block"></bdt><bdt class="block-component"></bdt>'<bdt class="else-block"></bdt> You must not use the AI Products in any way that violates the terms or policies of any AI Service Provider.</span><bdt class="statement-end-if-in-editor"></bdt></span></div><div style="line-height: 1.5;"><span style="font-size: 15px;"><br></span></div><div style="line-height: 1.5;"><span style="font-size: 15px;"><strong><span data-custom-class="body_text">Our AI Products</span></strong></span></div><div style="line-height: 1.5;"><span style="font-size: 15px;"><br></span></div><div style="line-height: 1.5;"><span style="font-size: 15px;"><span data-custom-class="body_text">Our AI Products are designed for the following functions:</span><bdt class="forloop-component"></bdt></span></div><ul><li data-custom-class="body_text" style="line-height: 1.5;"><span style="font-size: 15px;"><bdt class="question"><span data-custom-class="body_text">AI automation</span></bdt></span></li></ul><div><span style="font-size: 15px;"><bdt class="forloop-component"></bdt><br></span></div><div style="line-height: 1.5;"><span style="font-size: 15px;"><strong><span data-custom-class="body_text">How We Process Your Data Using AI</span></strong></span></div><div style="line-height: 1.5;"><span style="font-size: 15px;"><br></span></div><div style="line-height: 1.5;"><span style="font-size: 15px;"><span data-custom-class="body_text">All personal information processed using our AI Products is handled in line with our Privacy Notice and our agreement with third parties. This ensures high security and safeguards your personal information throughout the process, giving you peace of mind about your data's safety.</span><bdt class="block-component"></bdt></span></div><div style="line-height: 1.5;"><br></div><div style="line-height: 1.5;"><span style="font-size: 15px;"><strong><span data-custom-class="body_text">How to Opt Out</span></strong></span></div><div style="line-height: 1.5;"><br></div><div style="line-height: 1.5;"><span style="font-size: 15px;"><span data-custom-class="body_text">We believe in giving you the power to decide how your data is used. To opt out, you can:</span><bdt class="forloop-component"></bdt></span></div><ul><li data-custom-class="body_text" style="line-height: 1.5;"><span style="font-size: 15px;"><bdt class="question"><span data-custom-class="body_text">Log in to your account settings and update your user account</span></bdt></span></li></ul><div><span style="font-size: 15px;"><bdt class="forloop-component"></bdt></span></div><ul><li data-custom-class="body_text" style="line-height: 1.5;"><span style="font-size: 15px;"><bdt class="question"><span data-custom-class="body_text">Refuse to opt in</span></bdt></span></li></ul><div><span style="font-size: 15px;"><bdt class="forloop-component"></bdt><bdt class="statement-end-if-in-editor"></bdt><bdt class="statement-end-if-in-editor"></bdt></span><span style="font-size: 15px; color: rgb(89, 89, 89);"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span data-custom-class="body_text"><span style="color: rgb(89, 89, 89); font-size: 15px;"><span style="color: rgb(89, 89, 89); font-size: 15px;"><span style="color: rgb(89, 89, 89); font-size: 15px;"><span style="font-size: 15px;"><span style="color: rgb(89, 89, 89);"><span style="font-size: 15px;"><span style="color: rgb(89, 89, 89);"><span data-custom-class="body_text"><bdt class="block-component"></bdt></span><bdt class="block-component"><span data-custom-class="body_text"><bdt class="block-component"></bdt></span></span></span></span></span></span></span></span></span></span></span></span></span></div><div style="line-height: 1.5;"><br></div><div id="inforetain" style="line-height: 1.5;"><span style="color: rgb(127, 127, 127);"><span style="color: rgb(89, 89, 89); font-size: 15px;"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span id="control" style="color: rgb(0, 0, 0);"><strong><span data-custom-class="heading_1"><h2>6. HOW LONG DO WE KEEP YOUR INFORMATION?</h2></span></strong></span></span></span></span></span><span style="font-size: 15px; color: rgb(89, 89, 89);"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span data-custom-class="body_text"><strong><em>In Short: </em></strong><em>We keep your information for as long as necessary to <bdt class="block-component"></bdt>fulfil<bdt class="else-block"></bdt> the purposes outlined in this Privacy Notice unless otherwise required by law.</em></span></span></span></div><div style="line-height: 1.5;"><br></div><div style="line-height: 1.5;"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span data-custom-class="body_text">We will only keep your personal information for as long as it is necessary for the purposes set out in this Privacy Notice, unless a longer retention period is required or permitted by law (such as tax, accounting, or other legal requirements).<bdt class="block-component"></bdt> No purpose in this notice will require us keeping your personal information for longer than <span style="font-size: 15px;"><span style="color: rgb(89, 89, 89);"><span data-custom-class="body_text"><bdt class="block-component"></bdt></span></span></span><bdt class="block-component"></bdt>the period of time in which users have an account with us<bdt class="block-component"></bdt><span style="font-size: 15px;"><span style="color: rgb(89, 89, 89);"><span data-custom-class="body_text"><bdt class="else-block"></bdt></span></span></span>.</span></span></span></div><div style="line-height: 1.5;"><br></div><div style="line-height: 1.5;"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span data-custom-class="body_text">When we have no ongoing legitimate business need to process your personal information, we will either delete or <bdt class="block-component"></bdt>anonymise<bdt class="else-block"></bdt> such information, or, if this is not possible (for example, because your personal information has been stored in backup archives), then we will securely store your personal information and isolate it from any further processing until deletion is possible.<span style="color: rgb(89, 89, 89);"><bdt class="block-component"></bdt></span></span></span></span></div><div style="line-height: 1.5;"><br></div><div id="infosafe" style="line-height: 1.5;"><span style="color: rgb(127, 127, 127);"><span style="color: rgb(89, 89, 89); font-size: 15px;"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span id="control" style="color: rgb(0, 0, 0);"><strong><span data-custom-class="heading_1"><h2>7. HOW DO WE KEEP YOUR INFORMATION SAFE?</h2></span></strong></span></span></span></span></span><span style="font-size: 15px; color: rgb(89, 89, 89);"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span data-custom-class="body_text"><strong><em>In Short: </em></strong><em>We aim to protect your personal information through a system of <bdt class="block-component"></bdt>organisational<bdt class="else-block"></bdt> and technical security measures.</em></span></span></span></div><div style="line-height: 1.5;"><br></div><div style="line-height: 1.5;"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span data-custom-class="body_text">We have implemented appropriate and reasonable technical and <bdt class="block-component"></bdt>organisational<bdt class="else-block"></bdt> security measures designed to protect the security of any personal information we process. However, despite our safeguards and efforts to secure your information, no electronic transmission over the Internet or information storage technology can be guaranteed to be 100% secure, so we cannot promise or guarantee that hackers, cybercriminals, or other <bdt class="block-component"></bdt>unauthorised<bdt class="else-block"></bdt> third parties will not be able to defeat our security and improperly collect, access, steal, or modify your information. Although we will do our best to protect your personal information, transmission of personal information to and from our Services is at your own risk. You should only access the Services within a secure environment.<span style="color: rgb(89, 89, 89);"><bdt class="statement-end-if-in-editor"></bdt></span><span style="color: rgb(89, 89, 89); font-size: 15px;"><span data-custom-class="body_text"><bdt class="block-component"></bdt></span></span></span></span></span></div><div style="line-height: 1.5;"><br></div><div id="infominors" style="line-height: 1.5;"><span style="color: rgb(127, 127, 127);"><span style="color: rgb(89, 89, 89); font-size: 15px;"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span id="control" style="color: rgb(0, 0, 0);"><strong><span data-custom-class="heading_1"><h2>8. DO WE COLLECT INFORMATION FROM MINORS?</h2></span></strong></span></span></span></span></span><span style="font-size: 15px; color: rgb(89, 89, 89);"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span data-custom-class="body_text"><strong><em>In Short:</em></strong><em> We do not knowingly collect data from or market to <bdt class="block-component"></bdt>children under 18 years of age<bdt class="block-component"></bdt><bdt class="else-block"></bdt>.</em><bdt class="block-component"></bdt></span></span></span></div><div style="line-height: 1.5;"><br></div><div style="line-height: 1.5;"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span data-custom-class="body_text">We do not knowingly collect, solicit data from, or market to children under 18 years of age<bdt class="block-component"></bdt>, nor do we knowingly sell such personal information. By using the Services, you represent that you are at least 18<bdt class="block-component"></bdt> or that you are the parent or guardian of such a minor and consent to such minor dependent’s use of the Services. If we learn that personal information from users less than 18 years of age<bdt class="block-component"></bdt> has been collected, we will deactivate the account and take reasonable measures to promptly delete such data from our records. If you become aware of any data we may have collected from children under age 18<bdt class="block-component"></bdt>, please contact us at <span style="color: rgb(89, 89, 89); font-size: 15px;"><span data-custom-class="body_text"><bdt class="block-component"></bdt><bdt class="question"><a target="_blank" data-custom-class="link" href="mailto:victorkithinji@outlook.com">victorkithinji@outlook.com</a></bdt><bdt class="else-block"></bdt></span></span>.</span><span data-custom-class="body_text"><bdt class="else-block"><bdt class="block-component"></bdt></span></span></span></span></span></span></div><div style="line-height: 1.5;"><br></div><div id="privacyrights" style="line-height: 1.5;"><span style="color: rgb(127, 127, 127);"><span style="color: rgb(89, 89, 89); font-size: 15px;"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span id="control" style="color: rgb(0, 0, 0);"><strong><span data-custom-class="heading_1"><h2>9. WHAT ARE YOUR PRIVACY RIGHTS?</h2></span></strong></span></span></span></span></span><span style="font-size: 15px; color: rgb(89, 89, 89);"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span data-custom-class="body_text"><strong><em>In Short:</em></strong><em> <span style="color: rgb(89, 89, 89);"><span style="font-size: 15px;"><span data-custom-class="body_text"><em><bdt class="block-component"></bdt></em></span></span></span><bdt class="block-component"></bdt>Depending on your state of residence in the US or in <bdt class="else-block"></bdt>some regions, such as <bdt class="block-component"></bdt>the European Economic Area (EEA), United Kingdom (UK), and Switzerland<bdt class="block-component"></bdt>, you have rights that allow you greater access to and control over your personal information.<span style="color: rgb(89, 89, 89);"><span style="font-size: 15px;"><span data-custom-class="body_text"><em><bdt class="statement-end-if-in-editor"></bdt></em></span></span> </span>You may review, change, or terminate your account at any time, depending on your country, province, or state of residence.</em><span style="color: rgb(89, 89, 89);"><span style="font-size: 15px;"><bdt class="block-component"></bdt></span></span></span></span></span></div><div style="line-height: 1.5;"><br></div><div style="line-height: 1.5;"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span data-custom-class="body_text">In some regions (like <bdt class="block-component"></bdt>the EEA, UK, and Switzerland<bdt class="block-component"></bdt>), you have certain rights under applicable data protection laws. These may include the right (i) to request access and obtain a copy of your personal information, (ii) to request rectification or erasure; (iii) to restrict the processing of your personal information; (iv) if applicable, to data portability; and (v) not to be subject to automated decision-making.<bdt class="block-component"></bdt> In certain circumstances, you may also have the right to object to the processing of your personal information. You can make such a request by contacting us by using the contact details provided in the section <bdt class="block-component"></bdt>'<bdt class="else-block"></bdt></span></span></span><a data-custom-class="link" href="#contact"><span style="font-size: 15px; color: rgb(0, 58, 250);"><span style="font-size: 15px; color: rgb(0, 58, 250);"><span data-custom-class="body_text">HOW CAN YOU CONTACT US ABOUT THIS NOTICE?</span></span></span></a><span style="font-size: 15px; color: rgb(89, 89, 89);"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span data-custom-class="body_text"><bdt class="block-component"></bdt>'<bdt class="else-block"></bdt> below.</span></span></span></div><div style="line-height: 1.5;"><br></div><div style="line-height: 1.5;"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span data-custom-class="body_text">We will consider and act upon any request in accordance with applicable data protection laws.<bdt class="block-component"></bdt></span></span></span></div><div style="line-height: 1.5;"><span style="font-size: 15px; color: rgb(89, 89, 89);"> </span></div><div style="line-height: 1.5;"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span data-custom-class="body_text">If you are located in the EEA or UK and you believe we are unlawfully processing your personal information, you also have the right to complain to your <span style="font-size: 15px;"><span style="color: rgb(0, 58, 250);"><span data-custom-class="body_text"><span style="color: rgb(0, 58, 250);"><span data-custom-class="body_text"><a data-custom-class="link" href="https://ec.europa.eu/justice/data-protection/bodies/authorities/index_en.htm" rel="noopener noreferrer" target="_blank"><span style="font-size: 15px;">Member State data protection authority</span></a></span></span></span></span></span> or </span></span></span><a data-custom-class="link" href="https://ico.org.uk/make-a-complaint/data-protection-complaints/data-protection-complaints/" rel="noopener noreferrer" target="_blank"><span style="font-size: 15px; color: rgb(0, 58, 250);"><span style="font-size: 15px; color: rgb(0, 58, 250);"><span data-custom-class="body_text">UK data protection authority</span></span></span></a><span style="font-size: 15px; color: rgb(89, 89, 89);"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span data-custom-class="body_text">.</span></span></span></div><div style="line-height: 1.5;"><br></div><div style="line-height: 1.5;"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span data-custom-class="body_text">If you are located in Switzerland, you may contact the <span style="font-size: 15px;"><span style="color: rgb(0, 58, 250);"><span data-custom-class="body_text"><span style="color: rgb(0, 58, 250);"><span data-custom-class="body_text"><span style="color: rgb(0, 58, 250); font-size: 15px;"><a data-custom-class="link" href="https://www.edoeb.admin.ch/edoeb/en/home.html" rel="noopener noreferrer" target="_blank">Federal Data Protection and Information Commissioner</a></span></span></span></span></span></span>.</span></span></span></div><div style="line-height: 1.5;"><br></div><div id="withdrawconsent" style="line-height: 1.5;"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span data-custom-class="body_text"><strong><u>Withdrawing your consent:</u></strong> If we are relying on your consent to process your personal information,<bdt class="block-component"></bdt> which may be express and/or implied consent depending on the applicable law,<bdt class="statement-end-if-in-editor"></bdt> you have the right to withdraw your consent at any time. You can withdraw your consent at any time by contacting us by using the contact details provided in the section <bdt class="block-component"></bdt>'<bdt class="else-block"></bdt></span></span></span><a data-custom-class="link" href="#contact"><span style="font-size: 15px; color: rgb(0, 58, 250);"><span style="font-size: 15px; color: rgb(0, 58, 250);"><span data-custom-class="body_text">HOW CAN YOU CONTACT US ABOUT THIS NOTICE?</span></span></span></a><span style="font-size: 15px; color: rgb(89, 89, 89);"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span data-custom-class="body_text"><bdt class="block-component"></bdt>'<bdt class="else-block"></bdt> below<bdt class="block-component"></bdt> or updating your preferences<bdt class="statement-end-if-in-editor"></bdt>.</span></span></span></div><div style="line-height: 1.5;"><br></div><div style="line-height: 1.5;"><span style="font-size: 15px;"><span data-custom-class="body_text">However, please note that this will not affect the lawfulness of the processing before its withdrawal nor,<bdt class="block-component"></bdt> when applicable law allows,<bdt class="statement-end-if-in-editor"></bdt> will it affect the processing of your personal information conducted in reliance on lawful processing grounds other than consent.<bdt class="block-component"></bdt></span></span><bdt class="block-component"><span style="font-size: 15px;"><span data-custom-class="body_text"></span></span></bdt><span style="font-size: 15px;"><span data-custom-class="heading_2"><strong><h3>Account Information</h3></strong></span></span><span data-custom-class="body_text"><span style="font-size: 15px;">If you would at any time like to review or change the information in your account or terminate your account, you can:<bdt class="forloop-component"></bdt></span></span></div><ul><li data-custom-class="body_text" style="line-height: 1.5;"><span data-custom-class="body_text"><span style="font-size: 15px;"><bdt class="question">Log in to your account settings and update your user account.</bdt></span></span></li></ul><div style="line-height: 1.5;"><span data-custom-class="body_text"><span style="font-size: 15px;"><bdt class="forloop-component"></bdt></span></span></div><div style="line-height: 1.5;"><span style="font-size: 15px;"><span data-custom-class="body_text">Upon your request to terminate your account, we will deactivate or delete your account and information from our active databases. However, we may retain some information in our files to prevent fraud, troubleshoot problems, assist with any investigations, enforce our legal terms and/or comply with applicable legal requirements.</span></span><bdt class="statement-end-if-in-editor"><span style="font-size: 15px;"><span data-custom-class="body_text"></span></span></bdt><span style="font-size: 15px; color: rgb(89, 89, 89);"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span data-custom-class="body_text"><span style="font-size: 15px;"><span style="color: rgb(89, 89, 89);"><span style="font-size: 15px;"><span style="color: rgb(89, 89, 89);"><span data-custom-class="body_text"><span style="font-size: 15px;"><span style="color: rgb(89, 89, 89);"><bdt class="block-component"></bdt></span></span></span></span></span></span></span></span></span></span></span></span><bdt class="block-component"><span style="font-size: 15px;"><span data-custom-class="body_text"></span></span></bdt></div><div style="line-height: 1.5;"><br></div><div style="line-height: 1.5;"><span data-custom-class="body_text"><span style="font-size: 15px;">If you have questions or comments about your privacy rights, you may email us at <bdt class="question noTranslate"><a target="_blank" data-custom-class="link" href="mailto:victorkithini@outlook.com">victorkithini@outlook.com</a></bdt>.</span></span><bdt class="statement-end-if-in-editor"><span style="font-size: 15px;"><span data-custom-class="body_text"></span></span></bdt></div><div style="line-height: 1.5;"><br></div><div id="DNT" style="line-height: 1.5;"><span style="color: rgb(127, 127, 127);"><span style="color: rgb(89, 89, 89); font-size: 15px;"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span id="control" style="color: rgb(0, 0, 0);"><strong><span data-custom-class="heading_1"><h2>10. CONTROLS FOR DO-NOT-TRACK FEATURES</h2></span></strong></span></span></span></span></span><span style="font-size: 15px; color: rgb(89, 89, 89);"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span data-custom-class="body_text">Most web browsers and some mobile operating systems and mobile applications include a Do-Not-Track (<bdt class="block-component"></bdt>'DNT'<bdt class="else-block"></bdt>) feature or setting you can activate to signal your privacy preference not to have data about your online browsing activities monitored and collected. At this stage, no uniform technology standard for <bdt class="block-component"></bdt>recognising<bdt class="else-block"></bdt> and implementing DNT signals has been <bdt class="block-component"></bdt>finalised<bdt class="else-block"></bdt>. As such, we do not currently respond to DNT browser signals or any other mechanism that automatically communicates your choice not to be tracked online. If a standard for online tracking is adopted that we must follow in the future, we will inform you about that practice in a revised version of this Privacy Notice.</span></span></span><bdt class="block-component"><span style="font-size: 15px;"></span></bdt></div><div style="line-height: 1.5;"><span style="font-size: 15px;"><br></span></div><div style="line-height: 1.5;"><span style="font-size: 15px;"><span data-custom-class="body_text">California law requires us to let you know how we respond to web browser DNT signals. Because there currently is not an industry or legal standard for <bdt class="block-component"></bdt>recognising<bdt class="else-block"></bdt> or <bdt class="block-component"></bdt>honouring<bdt class="else-block"></bdt> DNT signals, we do not respond to them at this time.</span></span><bdt class="statement-end-if-in-editor"><span style="font-size: 15px;"><bdt class="block-component"></bdt></span></span></span></div><div style="line-height: 1.5;"><br></div><div id="uslaws" style="line-height: 1.5;"><span style="color: rgb(127, 127, 127);"><span style="color: rgb(89, 89, 89); font-size: 15px;"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span id="control" style="color: rgb(0, 0, 0);"><strong><span data-custom-class="heading_1"><h2>11. DO UNITED STATES RESIDENTS HAVE SPECIFIC PRIVACY RIGHTS?</h2></span></strong></span></span></span></span></span><span style="font-size: 15px; color: rgb(89, 89, 89);"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span data-custom-class="body_text"><strong><em>In Short: </em></strong><em>If you are a resident of<bdt class="block-component"></bdt> California, Colorado, Connecticut, Delaware, Florida, Indiana, Iowa, Kentucky, Maryland, Minnesota, Montana, Nebraska, New Hampshire, New Jersey, Oregon, Rhode Island, Tennessee, Texas, Utah, or Virginia<bdt class="else-block"></bdt>, you may have the right to request access to and receive details about the personal information we maintain about you and how we have processed it, correct inaccuracies, get a copy of, or delete your personal information. You may also have the right to withdraw your consent to our processing of your personal information. These rights may be limited in some circumstances by applicable law. More information is provided below.</em></span><strong><span data-custom-class="heading_2"><h3>Categories of Personal Information We Collect</h3></span></strong><span data-custom-class="body_text">The table below shows the categories of personal information we have collected in the past twelve (12) months. The table includes illustrative examples of each category and does not reflect the personal information we collect from you. For a comprehensive inventory of all personal information we process, please refer to the section <bdt class="block-component"></bdt>'<bdt class="else-block"></bdt></span></span></span><a data-custom-class="link" href="#infocollect"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span style="font-size: 15px; color: rgb(0, 58, 250);"><span data-custom-class="body_text"><span data-custom-class="link">WHAT INFORMATION DO WE COLLECT?</span></span></span></span></a><span style="font-size: 15px; color: rgb(89, 89, 89);"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span data-custom-class="body_text"><bdt class="block-component"></bdt>'<bdt class="else-block"></bdt></span></span></span></div><div style="line-height: 1.5;"><br></div><table style="width: 100%;"><thead><tr><th style="width: 33.8274%; border-left: 1px solid black; border-right: 1px solid black; border-top: 1px solid black; text-align: left;"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span data-custom-class="body_text"><strong>Category</strong></span></span></span></th><th style="width: 51.4385%; border-top: 1px solid black; border-right: 1px solid black; text-align: left;"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span data-custom-class="body_text"><strong>Examples</strong></span></span></span></th><th style="width: 14.9084%; border-right: 1px solid black; border-top: 1px solid black; text-align: center; text-align: left;"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span data-custom-class="body_text"><strong>Collected</strong></span></span></span></th></tr></thead><tbody><tr><td style="width: 33.8274%; border-left: 1px solid black; border-right: 1px solid black; border-top: 1px solid black;"><div style="line-height: 1.5;"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span data-custom-class="body_text">A. Identifiers</span></span></span></div></td><td style="width: 51.4385%; border-top: 1px solid black; border-right: 1px solid black;"><div style="line-height: 1.5;"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span data-custom-class="body_text">Contact details, such as real name, alias, postal address, telephone or mobile contact number, unique personal identifier, online identifier, Internet Protocol address, email address, and account name</span></span></span></div></td><td style="width: 14.9084%; text-align: center; vertical-align: middle; border-right: 1px solid black; border-top: 1px solid black;"><div style="line-height: 1.5;"><br></div><div style="line-height: 1.5;"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span data-custom-class="body_text"><bdt class="block-component"><bdt class="block-component"></bdt></bdt>YES<bdt class="else-block"><bdt class="block-component"></bdt></span></span></span></div><div style="line-height: 1.5;"><br></div></td></tr></tbody></table><div style="line-height: 1.5;"><bdt class="block-component"></bdt></div><table style="width: 100%;"><tbody><tr><td style="width: 33.8274%; border-left: 1px solid black; border-right: 1px solid black; border-top: 1px solid black;"><div style="line-height: 1.5;"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span data-custom-class="body_text">B. Personal information as defined in the California Customer Records statute</span></span></span></div></td><td style="width: 51.4385%; border-right: 1px solid black; border-top: 1px solid black;"><div style="line-height: 1.5;"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span data-custom-class="body_text">Name, contact information, education, employment, employment history, and financial information</span></span></span></div></td><td style="width: 14.9084%; text-align: center; border-right: 1px solid black; border-top: 1px solid black;"><div style="line-height: 1.5;"><br></div><div style="line-height: 1.5;"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span data-custom-class="body_text"><bdt class="forloop-component"><bdt class="block-component"><bdt class="block-component"></bdt>YES<bdt class="block-component"></bdt></bdt></span></span></span></div><div style="line-height: 1.5;"><br></div></td></tr></tbody></table><div style="line-height: 1.5;"><bdt class="block-component"></bdt></div><table style="width: 100%;"><tbody><tr><td style="width: 33.8274%; border-left: 1px solid black; border-right: 1px solid black; border-top: 1px solid black;"><div style="line-height: 1.5;"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span data-custom-class="body_text"><bdt class="block-component"></bdt>C<bdt class="else-block"></bdt>. Protected classification characteristics under state or federal law</span></span></span></div></td><td style="width: 51.4385%; border-right: 1px solid black; border-top: 1px solid black;"><div style="line-height: 1.5;"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span data-custom-class="body_text">Gender, age, date of birth, race and ethnicity, national origin, marital status, and other demographic data</span></span></span></div></td><td style="width: 14.9084%; text-align: center; border-right: 1px solid black; border-top: 1px solid black;"><div style="line-height: 1.5;"><br></div><div data-custom-class="body_text" style="line-height: 1.5;"><bdt class="forloop-component"><span data-custom-class="body_text"><bdt class="block-component"></bdt><bdt class="block-component"></bdt>YES<bdt class="else-block"></bdt><bdt class="block-component"></span></bdt></div><div style="line-height: 1.5;"><br></div></td></tr><tr><td style="width: 33.8274%; border-left: 1px solid black; border-right: 1px solid black; border-top: 1px solid black;"><div style="line-height: 1.5;"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span data-custom-class="body_text"><bdt class="block-component"></bdt>D<bdt class="else-block"></bdt>. Commercial information</span></span></span></div></td><td style="width: 51.4385%; border-right: 1px solid black; border-top: 1px solid black;"><div style="line-height: 1.5;"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span data-custom-class="body_text">Transaction information, purchase history, financial details, and payment information</span></span></span></div></td><td style="width: 14.9084%; text-align: center; border-right: 1px solid black; border-top: 1px solid black;"><div style="line-height: 1.5;"><br></div><div data-custom-class="body_text" style="line-height: 1.5;"><bdt class="forloop-component"><span data-custom-class="body_text"><bdt class="block-component"></bdt><bdt class="block-component"></bdt>YES<bdt class="else-block"><bdt class="block-component"></span></bdt></div><div style="line-height: 1.5;"><br></div></td></tr><tr><td style="width: 33.8274%; border-left: 1px solid black; border-right: 1px solid black; border-top: 1px solid black;"><div style="line-height: 1.5;"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span data-custom-class="body_text"><bdt class="block-component"></bdt>E<bdt class="else-block"></bdt>. Biometric information</span></span></span></div></td><td style="width: 51.4385%; border-right: 1px solid black; border-top: 1px solid black;"><div style="line-height: 1.5;"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span data-custom-class="body_text">Fingerprints and voiceprints</span></span></span></div></td><td style="width: 14.9084%; text-align: center; border-right: 1px solid black; border-top: 1px solid black;"><div style="line-height: 1.5;"><br></div><div data-custom-class="body_text" style="line-height: 1.5;"><bdt class="forloop-component"><span data-custom-class="body_text"><bdt class="block-component"><bdt class="block-component">NO</bdt><bdt class="statement-end-if-in-editor"></bdt><bdt class="block-component"></span></bdt></div><div style="line-height: 1.5;"><br></div></td></tr><tr><td style="width: 33.8274%; border-left: 1px solid black; border-right: 1px solid black; border-top: 1px solid black;"><div style="line-height: 1.5;"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span data-custom-class="body_text"><bdt class="block-component"></bdt>F<bdt class="else-block"></bdt>. Internet or other similar network activity</span></span></span></div></td><td style="width: 51.4385%; border-right: 1px solid black; border-top: 1px solid black;"><div style="line-height: 1.5;"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span data-custom-class="body_text">Browsing history, search history, online <bdt class="block-component"></bdt>behaviour<bdt class="else-block"></bdt>, interest data, and interactions with our and other websites, applications, systems, and advertisements</span></span></span></div></td><td style="width: 14.9084%; text-align: center; border-right: 1px solid black; border-top: 1px solid black;"><div style="line-height: 1.5;"><br></div><div data-custom-class="body_text" style="line-height: 1.5;"><bdt class="forloop-component"><span data-custom-class="body_text"><bdt class="block-component"></bdt><bdt class="block-component"></bdt>NO<bdt class="statement-end-if-in-editor"></bdt><bdt class="block-component"></span></bdt></div><div style="line-height: 1.5;"><br></div></td></tr><tr><td style="width: 33.8274%; border-left: 1px solid black; border-right: 1px solid black; border-top: 1px solid black;"><div style="line-height: 1.5;"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span data-custom-class="body_text"><bdt class="block-component"></bdt>G<bdt class="else-block"></bdt>. Geolocation data</span></span></span></div></td><td style="width: 51.4385%; border-right: 1px solid black; border-top: 1px solid black;"><div style="line-height: 1.5;"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span data-custom-class="body_text">Device location</span></span></span></div></td><td style="width: 14.9084%; text-align: center; border-right: 1px solid black; border-top: 1px solid black;"><div style="line-height: 1.5;"><br></div><div data-custom-class="body_text" style="line-height: 1.5;"><bdt class="forloop-component"><span data-custom-class="body_text"><bdt class="block-component"></bdt><bdt class="block-component"></bdt>NO<bdt class="statement-end-if-in-editor"></bdt><bdt class="block-component"></span></bdt></div><div style="line-height: 1.5;"><br></div></td></tr><tr><td style="width: 33.8274%; border-left: 1px solid black; border-right: 1px solid black; border-top: 1px solid black;"><div style="line-height: 1.5;"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span data-custom-class="body_text"><bdt class="block-component"></bdt>H<bdt class="else-block"></bdt>. Audio, electronic, sensory, or similar information</span></span></span></div></td><td style="width: 51.4385%; border-right: 1px solid black; border-top: 1px solid black;"><div style="line-height: 1.5;"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span data-custom-class="body_text">Images and audio, video or call recordings created in connection with our business activities</span></span></span></div></td><td style="width: 14.9084%; text-align: center; border-right: 1px solid black; border-top: 1px solid black;"><div style="line-height: 1.5;"><br></div><div data-custom-class="body_text" style="line-height: 1.5;"><bdt class="forloop-component"><span data-custom-class="body_text"><bdt class="block-component"></bdt><bdt class="block-component"></bdt>NO<bdt class="statement-end-if-in-editor"></bdt><bdt class="block-component"></span></bdt></div><div style="line-height: 1.5;"><br></div></td></tr><tr><td style="width: 33.8274%; border-left: 1px solid black; border-right: 1px solid black; border-top: 1px solid black;"><div style="line-height: 1.5;"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span data-custom-class="body_text"><bdt class="block-component"></bdt>I<bdt class="else-block"></bdt>. Professional or employment-related information</span></span></span></div></td><td style="width: 51.4385%; border-right: 1px solid black; border-top: 1px solid black;"><div style="line-height: 1.5;"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span data-custom-class="body_text">Business contact details in order to provide you our Services at a business level or job title, work history, and professional qualifications if you apply for a job with us</span></span></span></div></td><td style="width: 14.9084%; text-align: center; border-right: 1px solid black; border-top: 1px solid black;"><div style="line-height: 1.5;"><br></div><div data-custom-class="body_text" style="line-height: 1.5;"><bdt class="forloop-component"><span data-custom-class="body_text"><bdt class="block-component"></bdt><bdt class="block-component"></bdt>NO<bdt class="statement-end-if-in-editor"></bdt><bdt class="block-component"></span></bdt></div><div style="line-height: 1.5;"><br></div></td></tr><tr><td style="border-left: 1px solid black; border-right: 1px solid black; border-top: 1px solid black; width: 33.8274%;"><div style="line-height: 1.5;"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span data-custom-class="body_text"><bdt class="block-component"></bdt>J<bdt class="else-block"></bdt>. Education Information</span></span></span></div></td><td style="border-right: 1px solid black; border-top: 1px solid black; width: 51.4385%;"><div style="line-height: 1.5;"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span data-custom-class="body_text">Student records and directory information</span></span></span></div></td><td style="text-align: center; border-right: 1px solid black; border-top: 1px solid black; width: 14.9084%;"><div style="line-height: 1.5;"><br></div><div data-custom-class="body_text" style="line-height: 1.5;"><bdt class="forloop-component"><span data-custom-class="body_text"><bdt class="block-component"></bdt><bdt class="block-component"></bdt>NO<bdt class="statement-end-if-in-editor"></bdt><bdt class="block-component"></span></bdt></div><div style="line-height: 1.5;"><br></div></td></tr><tr><td style="border-width: 1px; border-color: black; border-style: solid; width: 33.8274%;"><div style="line-height: 1.5;"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span data-custom-class="body_text"><bdt class="block-component"></bdt>K<bdt class="else-block"></bdt>. Inferences drawn from collected personal information</span></span></span></div></td><td style="border-bottom: 1px solid black; border-top: 1px solid black; border-right: 1px solid black; width: 51.4385%;"><div style="line-height: 1.5;"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span data-custom-class="body_text">Inferences drawn from any of the collected personal information listed above to create a profile or summary about, for example, an individual’s preferences and characteristics</span></span></span></div></td><td style="text-align: center; border-right: 1px solid black; border-bottom: 1px solid black; border-top: 1px solid black; width: 14.9084%;"><div style="line-height: 1.5;"><br></div><div data-custom-class="body_text" style="line-height: 1.5;"><span data-custom-class="body_text"><bdt class="block-component"></bdt>NO<span style="font-size: 15px; color: rgb(89, 89, 89);"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span data-custom-class="body_text"><span style="color: rgb(89, 89, 89);"><span data-custom-class="body_text"><bdt class="statement-end-if-in-editor"></bdt></span></span></span></span></span></span></span></span></div><div style="line-height: 1.5;"><br></div></td></tr><tr><td style="border-left: 1px solid black; border-right: 1px solid black; border-bottom: 1px solid black; line-height: 1.5;"><span data-custom-class="body_text"><bdt class="block-component"></bdt>L<bdt class="else-block"></bdt>. Sensitive personal Information</span></td><td style="border-right: 1px solid black; border-bottom: 1px solid black; line-height: 1.5;"><bdt class="block-component"><span data-custom-class="body_text"></span></bdt><span data-custom-class="body_text"><bdt class="forloop-component"></bdt><bdt class="block-component"></bdt><bdt class="question">Account login information</bdt><bdt class="else-block"></bdt><bdt class="forloop-component"></bdt></span><bdt class="statement-end-if-in-editor"><span data-custom-class="body_text"></span></bdt></td><td style="border-right: 1px solid black; border-bottom: 1px solid black;"><div data-empty="true" style="text-align: center;"><br></div><div data-custom-class="body_text" data-empty="true" style="text-align: center; line-height: 1.5;"><bdt class="block-component"><span data-custom-class="body_text"></span></bdt><span data-custom-class="body_text">YES<bdt class="else-block"></span></bdt></div><div data-empty="true" style="text-align: center;"><br></div></td></tr></tbody></table><div style="line-height: 1.5;"><bdt class="block-component"><span style="font-size: 15px;"></span></bdt></div><div style="line-height: 1.5;"><br></div><div style="line-height: 1.5;"><span style="font-size: 15px;"><span data-custom-class="body_text">We only collect sensitive personal information, as defined by applicable privacy laws or the purposes allowed by law or with your consent. Sensitive personal information may be used, or disclosed to a service provider or contractor, for additional, specified purposes. You may have the right to limit the use or disclosure of your sensitive personal information.<bdt class="block-component"></bdt> We do not collect or process sensitive personal information for the purpose of inferring characteristics about you.<bdt class="statement-end-if-in-editor"></bdt></span><bdt class="statement-end-if-in-editor"></bdt></span></div><div style="line-height: 1.5;"><br></div><div style="line-height: 1.5;"><span style="font-size: 15px;"><span data-custom-class="body_text">We may also collect other personal information outside of these categories through instances where you interact with us in person, online, or by phone or mail in the context of:</span><bdt class="block-component"></bdt></span></div><ul><li data-custom-class="body_text" style="line-height: 1.5;"><span style="font-size: 15px;">Receiving help through our customer support channels;<bdt class="statement-end-if-in-editor"></bdt></span></li></ul><div><span style="font-size: 15px;"><bdt class="block-component"></bdt></span></div><ul><li data-custom-class="body_text"><span style="font-size: 15px;">Participation in customer surveys or contests; and<bdt class="statement-end-if-in-editor"></bdt></span></li></ul><div><span style="font-size: 15px;"><bdt class="block-component"></bdt></span></div><ul><li data-custom-class="body_text"><span style="font-size: 15px;">Facilitation in the delivery of our Services and to respond to your inquiries.</span><bdt class="statement-end-if-in-editor"><span style="font-size: 15px;"></span></bdt></li></ul><div style="line-height: 1.5;"><bdt class="block-component"><span data-custom-class="body_text"></span></bdt><span data-custom-class="body_text">We will use and retain the collected personal information as needed to provide the Services or for:<bdt class="block-component"></bdt></span></div><ul><li data-custom-class="body_text" style="line-height: 1.5;"><span data-custom-class="body_text">Category A - <bdt class="question">As long as the user has an account with us</bdt><bdt class="statement-end-if-in-editor"></bdt></span></li></ul><div style="line-height: 1.5;"><span data-custom-class="body_text"><bdt class="block-component"><bdt class="block-component"></bdt></bdt></span></div><ul><li data-custom-class="body_text" style="line-height: 1.5;"><span data-custom-class="body_text">Category B - <bdt class="question">As long as the user has an account with us</bdt><bdt class="statement-end-if-in-editor"></bdt></span></li></ul><div style="line-height: 1.5;"><span data-custom-class="body_text"><bdt class="block-component"></bdt></span></div><ul><li data-custom-class="body_text" style="line-height: 1.5;"><span data-custom-class="body_text">Category <bdt class="block-component"></bdt>C<bdt class="else-block"></bdt> - <bdt class="question">As long as the user has an account with us</bdt><bdt class="statement-end-if-in-editor"></bdt></span></li></ul><div style="line-height: 1.5;"><span data-custom-class="body_text"><bdt class="block-component"></bdt></span></div><ul><li data-custom-class="body_text" style="line-height: 1.5;"><span data-custom-class="body_text">Category <bdt class="block-component"></bdt>D<bdt class="else-block"></bdt> - <bdt class="question">As long as the user has an account with us</bdt><bdt class="statement-end-if-in-editor"></bdt></span></li></ul><div style="line-height: 1.5;"><span data-custom-class="body_text"><bdt class="block-component"></bdt></span></li></ul><div style="line-height: 1.5;"><span data-custom-class="body_text"><bdt class="block-component"></bdt></span></li></ul><div style="line-height: 1.5;"><span data-custom-class="body_text"><bdt class="block-component"></bdt></span></li></ul><div style="line-height: 1.5;"><span data-custom-class="body_text"><bdt class="block-component"></bdt></span></li></ul><div style="line-height: 1.5;"><span data-custom-class="body_text"><bdt class="block-component"></bdt></span></li></ul><div style="line-height: 1.5;"><span data-custom-class="body_text"><bdt class="block-component"></bdt></span></li></ul><div style="line-height: 1.5;"><span data-custom-class="body_text"><bdt class="block-component"></bdt></span></li></ul><div style="line-height: 1.5;"><span data-custom-class="body_text"><bdt class="block-component"></bdt></span></div><ul><li data-custom-class="body_text" style="line-height: 1.5;"><span data-custom-class="body_text">Category <bdt class="block-component"></bdt>L<bdt class="else-block"></bdt> - <bdt class="question">As long as the user has an account with us</bdt><bdt class="statement-end-if-in-editor"></bdt></span><bdt class="statement-end-if-in-editor"><span data-custom-class="body_text"></span></bdt></li></ul><div style="line-height: 1.5;"><strong><span style="font-size: 15px;"><span data-custom-class="heading_2"><h3>Sources of Personal Information</h3></span></span></strong><span style="font-size: 15px;"><span data-custom-class="body_text">Learn more about the sources of personal information we collect in <bdt class="block-component"></bdt>'<bdt class="else-block"></bdt></span></span><span style="color: rgb(0, 58, 250);"><span data-custom-class="body_text"><a data-custom-class="link" href="#infocollect"><span style="color: rgb (0, 58, 250); font-size: 15px;">WHAT INFORMATION DO WE COLLECT?</span></a></span></span><span style="font-size: 15px;"><span data-custom-class="body_text"><bdt class="block-component"></bdt>'<bdt class="else-block"></span></bdt></span><span style="font-size: 15px; color: rgb(89, 89, 89);"><span style="font-size: 15px; color: rgb(89, 89, 89);"><strong><span data-custom-class="heading_2"><h3>How We Use and Share Personal Information</h3></span></strong></span></span><span data-custom-class="body_text" style="font-size: 15px;"><bdt class="block-component"></bdt>Learn more about how we use your personal information in the section, <bdt class="block-component"></bdt>'<bdt class="else-block"></bdt></span><a data-custom-class="link" href="#infouse"><span style="color: rgb(0, 58, 250); font-size: 15px;">HOW DO WE PROCESS YOUR INFORMATION?</span></a><span data-custom-class="body_text" style="font-size: 15px;"><bdt class="block-component"></bdt>'<bdt class="else-block"></span></bdt></div><div style="line-height: 1.5;"><br></div><div style="line-height: 1.5;"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span data-custom-class="body_text"><span style="color: rgb(89, 89, 89); font-size: 15px;"><span data-custom-class="body_text"><bdt class="block-component"></bdt></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></bdt></bdt></span></span></div><div style="line-height: 1.5;"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span data-custom-class="body_text"><strong>Will your information be shared with anyone else?</strong></span></span></span></div><div style="line-height: 1.5;"><br></div><div style="line-height: 1.5;"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span data-custom-class="body_text">We may disclose your personal information with our service providers pursuant to a written contract between us and each service provider. Learn more about how we disclose personal information to in the section, <bdt class="block-component"></bdt>'<bdt class="else-block"></bdt></span></span></span><a data-custom-class="link" href="#whoshare"><span style="font-size: 15px; color: rgb(0, 58, 250);"><span style="font-size: 15px; color: rgb(0, 58, 250);">WHEN AND WITH WHOM DO WE SHARE YOUR PERSONAL INFORMATION?</span></span></a><span style="font-size: 15px; color: rgb(89, 89, 89);"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span data-custom-class="body_text"><bdt class="block-component"></bdt>'<bdt class="else-block"></bdt></span></span></span></div><div style="line-height: 1.5;"><br></div><div style="line-height: 1.5;"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span data-custom-class="body_text">We may use your personal information for our own business purposes, such as for undertaking internal research for technological development and demonstration. This is not considered to be <bdt class="block-component"></bdt>'selling'<bdt class="else-block"></bdt> of your personal information.<span style="color: rgb(89, 89, 89); font-size: 15px;"><span data-custom-class="body_text"><bdt class="block-component"></bdt></span></span></span></span></span></div><div style="line-height: 1.5;"><br></div><div style="line-height: 1.5;"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span data-custom-class="body_text">We have not disclosed, sold, or shared any personal information to third parties for a business or commercial purpose in the preceding twelve (12) months. We<span style="color: rgb(89, 89, 89);"> </span>will not sell or share personal information in the future belonging to website visitors, users, and other consumers.<span style="color: rgb(89, 89, 89);"><span data-custom-class="body_text"><span style="color: rgb(89, 89, 89);"><span data-custom-class="body_text"><span style="color: rgb(89, 89, 89);"><span data-custom-class="body_text"><bdt class="statement-end-if-in-editor"></bdt></span></span></span></span><bdt class="block-component"></bdt></span></span></span></span></span></span></span></span></span></bdt></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span><span data-custom-class="body_text"><span style="color: rgb(0, 0, 0);"><span data-custom-class="body_text"><bdt class="block-component"></bdt></span></span></span></span></span></div><div style="line-height: 1.5;"><span style="font-size: 15px;"><strong><span data-custom-class="heading_2"><h3>Your Rights</h3></span></strong><span data-custom-class="body_text">You have rights under certain US state data protection laws. However, these rights are not absolute, and in certain cases, we may decline your request as permitted by law. These rights include:</span><bdt class="block-component"></bdt></span></div><ul><li data-custom-class="body_text" style="line-height: 1.5;"><span style="font-size: 15px;"><strong>Right to know</strong> whether or not we are processing your personal data<bdt class="statement-end-if-in-editor"></bdt></span></li></ul><div style="line-height: 1.5;"><span style="font-size: 15px;"><bdt class="block-component"></bdt></span></div><ul><li data-custom-class="body_text" style="line-height: 1.5;"><span style="font-size: 15px;"><strong>Right to access </strong>your personal data<bdt class="statement-end-if-in-editor"></bdt></span></li></ul><div style="line-height: 1.5;"><span style="font-size: 15px;"><bdt class="block-component"></bdt></span></div><ul><li data-custom-class="body_text" style="line-height: 1.5;"><span style="font-size: 15px;"><strong>Right to correct </strong>inaccuracies in your personal data<bdt class="statement-end-if-in-editor"></bdt></span></li></ul><div style="line-height: 1.5;"><span style="font-size: 15px;"><bdt class="block-component"></bdt></span></div><ul><li data-custom-class="body_text" style="line-height: 1.5;"><span style="font-size: 15px;"><strong>Right to request</strong> the deletion of your personal data<bdt class="statement-end-if-in-editor"></bdt></span></li></ul><div style="line-height: 1.5;"><span style="font-size: 15px;"><bdt class="block-component"></bdt></span></div><ul><li data-custom-class="body_text" style="line-height: 1.5;"><span style="font-size: 15px;"><strong>Right to obtain a copy </strong>of the personal data you previously shared with us<bdt class="statement-end-if-in-editor"></bdt></span></li></ul><div style="line-height: 1.5;"><span style="font-size: 15px;"><bdt class="block-component"></bdt></span></div><ul><li data-custom-class="body_text" style="line-height: 1.5;"><span style="font-size: 15px;"><strong>Right to non-discrimination</strong> for exercising your rights<bdt class="statement-end-if-in-editor"></bdt></span></li></ul><div style="line-height: 1.5;"><span style="font-size: 15px;"><bdt class="block-component"></bdt></span></div><ul><li data-custom-class="body_text" style="line-height: 1.5;"><span style="font-size: 15px;"><strong>Right to opt out</strong> of the processing of your personal data if it is used for targeted advertising<bdt class="block-component"></bdt> (or sharing as defined under California’s privacy law)<bdt class="statement-end-if-in-editor"></bdt>, the sale of personal data, or profiling in furtherance of decisions that produce legal or similarly significant effects (<bdt class="block-component"></bdt>'profiling'<bdt class="else-block"></bdt>)<bdt class="statement-end-if-in-editor"></bdt></span></li></ul><div style="line-height: 1.5;"><span style="font-size: 15px;"><bdt class="block-component"></bdt></span></div><div style="line-height: 1.5;"><span style="font-size: 15px;"><span data-custom-class="body_text">Depending upon the state where you live, you may also have the following rights:</span><bdt class="block-component"></bdt></span></div><ul><li data-custom-class="body_text" style="line-height: 1.5;"><span style="font-size: 15px;">Right to access the categories of personal data being processed (as permitted by applicable law, including the privacy law in Minnesota)<bdt class="statement-end-if-in-editor"></bdt></span></li></ul><div style="line-height: 1.5;"><span style="font-size: 15px;"><bdt class="block-component"></bdt></span></div><ul><li data-custom-class="body_text" style="line-height: 1.5;"><span style="font-size: 15px;">Right to obtain a list of the categories of third parties to which we have disclosed personal data (as permitted by applicable law, including the privacy law in<bdt class="block-component"></bdt> California, Delaware, and Maryland<bdt class="else-block"></bdt><bdt class="block-component"></bdt>)<bdt class="statement-end-if-in-editor"></bdt></span></li></ul><div style="line-height: 1.5;"><bdt class="block-component"><span style="font-size: 15px;"></span></bdt></div><ul><li data-custom-class="body_text" style="line-height: 1.5;"><span style="font-size: 15px;">Right to obtain a list of specific third parties to which we have disclosed personal data (as permitted by applicable law, including the privacy law in<bdt class="block-component"></bdt> Minnesota and Oregon<bdt class="else-block"></bdt>)</span><bdt class="statement-end-if-in-editor"><span style="font-size: 15px;"></span></bdt></li></ul><div style="line-height: 1.5;"><bdt class="block-component"><span style="font-size: 15px;"></span></bdt></div><ul><li data-custom-class="body_text" style="line-height: 1.5; font-size: 15px;">Right to obtain a list of third parties to which we have sold personal data (as permitted by applicable law, including the privacy law in Connecticut)<bdt class="statement-end-if-in-editor"></bdt></li></ul><div style="line-height: 1.5;"><span style="font-size: 15px;"><bdt class="block-component"></bdt></span></div><ul><li data-custom-class="body_text" style="line-height: 1.5;"><span style="font-size: 15px;">Right to review, understand, question, and depending on where you live, correct how personal data has been profiled (as permitted by applicable law, including the privacy law in <bdt class="block-component"></bdt>Connecticut and Minnesota<bdt class="else-block"></bdt>)<bdt class="statement-end-if-in-editor"></bdt></span></li></ul><div style="line-height: 1.5;"><bdt class="block-component"><span style="font-size: 15px;"></span></bdt></div><ul><li data-custom-class="body_text" style="line-height: 1.5;"><span style="font-size: 15px;">Right to limit use and disclosure of sensitive personal data (as permitted by applicable law, including the privacy law in California)</span><bdt class="statement-end-if-in-editor"><span style="font-size: 15px;"></span></bdt></li></ul><div style="line-height: 1.5;"><bdt class="block-component"><span style="font-size: 15px;"></span></bdt></div><ul><li data-custom-class="body_text" style="line-height: 1.5;"><span style="font-size: 15px;">Right to opt out of the collection of sensitive data and personal data collected through the operation of a voice or facial recognition feature (as permitted by applicable law, including the privacy law in Florida)</span><bdt class="statement-end-if-in-editor"><span style="font-size: 15px;"></span></bdt></li></ul><div style="line-height: 1.5;"><span style="font-size: 15px;"><bdt class="statement-end-if-in-editor"></bdt></span><strong><span style="font-size: 15px;"><span data-custom-class="heading_2"><h3>How to Exercise Your Rights</h3></span></span></strong><span style="font-size: 15px; color: rgb(89, 89, 89);"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span data-custom-class="body_text">To exercise these rights, you can contact us <bdt class="block-component"></bdt>by submitting a </span></span></span><a data-custom-class="link" href="https://app.termly.io/dsar/6c1fd8c3-cbc2-44ba-b413-5cae290d75a2" rel="noopener noreferrer" target="_blank"><span style="font-size: 15px; color: rgb(0, 58, 250);"><span style="font-size: 15px; color: rgb(0, 58, 250);">data subject access request</span></span></a><span style="font-size: 15px; color: rgb(89, 89, 89);"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span data-custom-class="body_text">, <bdt class="block-component"></bdt></span><span style="color: rgb(89, 89, 89); font-size: 15px;"><span data-custom-class="body_text"><span style="color: rgb(89, 89, 89); font-size: 15px;"><span data-custom-class="body_text"><bdt class="block-component"></bdt>by emailing us at <bdt class="question"><a target="_blank" data-custom-class="link" href="mailto:victorkithinji@outlook.com">victorkithinji@outlook.com</a></bdt>, <bdt class="statement-end-if-in-editor"></bdt><bdt class="block-component"></bdt></span><span data-custom-class="body_text"><bdt class="block-component"></bdt><bdt class="block-component"><span data-custom-class="body_text"><bdt class="block-component"></bdt></bdt></span></span></span></span></span></span></span></span></span></span></span></span><span data-custom-class="body_text">or by referring to the contact details at the bottom of this document.</span></span></span><bdt class="block-component"><span style="font-size: 15px;"></span></bdt><bdt class="block-component"><span style="font-size: 15px;"></span></bdt></div><div style="line-height: 1.5;"><br></div><div style="line-height: 1.5;"><span style="font-size: 15px;"><span data-custom-class="body_text">Under certain US state data protection laws, you can designate an <bdt class="block-component"></bdt>authorised<bdt class="else-block"></bdt> agent to make a request on your behalf. We may deny a request from an <bdt class="block-component"></bdt>authorised<bdt class="else-block"></bdt> agent that does not submit proof that they have been validly <bdt class="block-component"></bdt>authorised<bdt class="else-block"></bdt> to act on your behalf in accordance with applicable laws.</span> <br><strong><span data-custom-class="heading_2"><h3>Request Verification</h3></span></strong><span data-custom-class="body_text">Upon receiving your request, we will need to verify your identity to determine you are the same person about whom we have the information in our system. We will only use personal information provided in your request to verify your identity or authority to make the request. However, if we cannot verify your identity from the information already maintained by us, we may request that you provide additional information for the purposes of verifying your identity and for security or fraud-prevention purposes.</span></span></div><div style="line-height: 1.5;"><span style="font-size: 15px;"><br></span></div><div style="line-height: 1.5;"><span style="font-size: 15px;"><span data-custom-class="body_text">If you submit the request through an <bdt class="block-component"></bdt>authorised<bdt class="else-block"></bdt> agent, we may need to collect additional information to verify your identity before processing your request and the agent will need to provide a written and signed permission from you to submit such request on your behalf.</span></span><bdt class="block-component"><span style="font-size: 15px;"></span></bdt><span style="font-size: 15px;"><span data-custom-class="heading_2"><strong><h3>Appeals</h3></strong></span><span data-custom-class="body_text">Under certain US state data protection laws, if we decline to take action regarding your request, you may appeal our decision by emailing us at <bdt class="block-component"></bdt><bdt class="question noTranslate"><a target="_blank" data-custom-class="link" href="mailto:victorkithini@outlook.com">victorkithini@outlook.com</a></bdt><bdt class="else-block"></bdt>. We will inform you in writing of any action taken or not taken in response to the appeal, including a written explanation of the reasons for the decisions. If your appeal is denied, you may submit a complaint to your state attorney general.</span><bdt class="statement-end-if-in-editor"></bdt></span><span style="font-size: 15px; color: rgb(89, 89, 89);"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span style="color: rgb(89, 89, 89); font-size: 15px;"><span data-custom-class="body_text"><bdt class="block-component"><bdt class="block-component"></span></bdt></span></span></span></span></span></span></span></span></span></span><bdt class="block-component"><span style="font-size: 15px;"><bdt class="block-component"></span></bdt></span><bdt class="statement-end-if-in-editor"><span style="font-size: 15px;"></span></bdt><span style="font-size: 15px; color: rgb(89, 89, 89);"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span style="color: rgb(89, 89, 89); font-size: 15px;"><span data-custom-class="body_text"><span style="color: rgb(89, 89, 89); font-size: 15px;"><span data-custom-class="body_text"><span style="color: rgb(89, 89, 89); font-size: 15px;"><span data-custom-class="body_text"><span style="color: rgb(89, 89, 89); font-size: 15px;"><span data-custom-class="body_text"><bdt class="statement-end-if-in-editor"><span data-custom-class="body_text"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span style="color: rgb(89, 89, 89); font-size: 15px;"><span data-custom-class="body_text"><span style="color: rgb(89, 89, 89); font-size: 15px;"><span data-custom-class="body_text"><span style="color: rgb(89, 89, 89); font-size: 15px;"><span data-custom-class="body_text"><span style="color: rgb(89, 89, 89); font-size: 15px;"><span data-custom-class="body_text"><bdt class="statement-end-if-in-editor"><bdt class="statement-end-if-in-editor"></bdt></bdt></span></span></span></span></span></span></span></span></span></span></span></bdt></span></span></span></span></span></span></span></span></span></span><bdt class="block-component"><span style="font-size: 15px;"></bdt></span><bdt class="block-component"><span style="font-size: 15px;"></span></bdt></div><div style="line-height: 1.5;"><br></div><div id="policyupdates" style="line-height: 1.5;"><span style="color: rgb(127, 127, 127);"><span style="color: rgb(89, 89, 89); font-size: 15px;"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span id="control" style="color: rgb(0, 0, 0);"><strong><span data-custom-class="heading_1"><h2>12. DO WE MAKE UPDATES TO THIS NOTICE?</h2></span></strong></span></span></span></span></span><span style="font-size: 15px; color: rgb(89, 89, 89);"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span data-custom-class="body_text"><em><strong>In Short: </strong>Yes, we will update this notice as necessary to stay compliant with relevant laws.</em></span></span></span></div><div style="line-height: 1.5;"><br></div><div style="line-height: 1.5;"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span data-custom-class="body_text">We may update this Privacy Notice from time to time. The updated version will be indicated by an updated <bdt class="block-component"></bdt>'Revised'<bdt class="else-block"></bdt> date at the top of this Privacy Notice. If we make material changes to this Privacy Notice, we may notify you either by prominently posting a notice of such changes or by directly sending you a notification. We encourage you to review this Privacy Notice frequently to be informed of how we are protecting your information.</span></span></span></div><div style="line-height: 1.5;"><br></div><div id="contact" style="line-height: 1.5;"><span style="color: rgb(127, 127, 127);"><span style="color: rgb(89, 89, 89); font-size: 15px;"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span id="control" style="color: rgb(0, 0, 0);"><strong><span data-custom-class="heading_1"><h2>13. HOW CAN YOU CONTACT US ABOUT THIS NOTICE?</h2></span></strong></span></span></span></span></span><span style="font-size: 15px; color: rgb(89, 89, 89);"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span data-custom-class="body_text">If you have questions or comments about this notice, you may <span style="color: rgb(89, 89, 89); font-size: 15px;"><span data-custom-class="body_text"><bdt class="block-component"><bdt class="block-component"></bdt></bdt>email us at <bdt class="question noTranslate"><a target="_blank" data-custom-class="link" href="mailto:victorkithinji@outlook.com">victorkithinji@outlook.com</a> or </bdt><bdt class="statement-end-if-in-editor"><bdt class="block-component"></bdt></bdt></span></span><span style="font-size: 15px; color: rgb(89, 89, 89);"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span data-custom-class="body_text">contact us by post at:</span></span></span></span></span></span></div><div style="line-height: 1.5;"><br></div><div style="line-height: 1.5;"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span data-custom-class="body_text"><span style="font-size: 15px;"><span style="color: rgb(89, 89, 89);"><span style="color: rgb(89, 89, 89);"><span data-custom-class="body_text"><bdt class="question noTranslate">__________</bdt></span></span></span></span></span><span data-custom-class="body_text"><span style="color: rgb(89, 89, 89);"><span data-custom-class="body_text"><bdt class="block-component"></bdt></bdt></span></span></span></span></div><div style="line-height: 1.5;"><span style="font-size: 15px;"><span data-custom-class="body_text"><bdt class="question noTranslate">Kasarani</bdt><span style="color: rgb(89, 89, 89);"><span style="font-size: 15px;"><bdt class="block-component"></bdt></span></span></span></bdt></span></div><div style="line-height: 1.5;"><span style="font-size: 15px;"><span data-custom-class="body_text"><bdt class="question">Nairobi</bdt><span style="color: rgb(89, 89, 89);"><span style="font-size: 15px;"><bdt class="block-component"></bdt><bdt class="block-component"></bdt><bdt class="block-component"></bdt><bdt class="block-component"></bdt></span></span></span></bdt></span></div><div style="line-height: 1.5;"><span style="font-size: 15px;"><span data-custom-class="body_text"><span style="font-size: 15px;"><span data-custom-class="body_text"><span style="color: rgb(89, 89, 89);"><bdt class="block-component"></bdt></span></span></span><bdt class="question noTranslate">Kenya</bdt><span style="font-size: 15px;"><span data-custom-class="body_text"><span style="color: rgb(89, 89, 89);"><bdt class="statement-end-if-in-editor"><span style="font-size: 15px;"><span data-custom-class="body_text"><span style="color: rgb(89, 89, 89);"><bdt class="statement-end-if-in-editor"><span style="font-size: 15px;"><span data-custom-class="body_text"><span style="color: rgb(89, 89, 89);"><bdt class="statement-end-if-in-editor"></bdt></span></span></span></bdt><bdt class="statement-end-if-in-editor"></bdt></span></span></span><span data-custom-class="body_text"><span style="color: rgb(89, 89, 89);"><span style="font-size: 15px;"><bdt class="statement-end-if-in-editor"><bdt class="block-component"></bdt></bdt></span></span></span></bdt></span></span></span></span><span data-custom-class="body_text"><span style="font-size: 15px;"><span data-custom-class="body_text"><span style="color: rgb(89, 89, 89);"><bdt class="statement-end-if-in-editor"><span style="color: rgb(89, 89, 89);"><span style="font-size: 15px;"><span data-custom-class="body_text"><bdt class="block-component"><bdt class="block-component"></bdt></span></span></span></span></span></span><bdt class="block-component"><span style="font-size: 15px;"></span></bdt><span style="font-size: 15px;"><span data-custom-class="body_text"><span style="color: rgb(89, 89, 89); font-size: 15px;"><span style="font-size: 15px;"><span data-custom-class="body_text"><bdt class="statement-end-if-in-editor"><bdt class="block-component"></bdt></span></span></div><div style="line-height: 1.5;"><br></div><div id="request" style="line-height: 1.5;"><span style="color: rgb(127, 127, 127);"><span style="color: rgb(89, 89, 89); font-size: 15px;"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span id="control" style="color: rgb(0, 0, 0);"><strong><span data-custom-class="heading_1"><h2>14. HOW CAN YOU REVIEW, UPDATE, OR DELETE THE DATA WE COLLECT FROM YOU?</h2></span></strong></span></span></span></span></span><span style="font-size: 15px; color: rgb(89, 89, 89);"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span data-custom-class="body_text"><bdt class="block-component"></bdt>Based on the applicable laws of your country<bdt class="block-component"></bdt> or state of residence in the US<bdt class="statement-end-if-in-editor"></bdt>, you may<bdt class="else-block"><bdt class="block-component"> have the right to request access to the personal information we collect from you, details about how we have processed it, correct inaccuracies, or delete your personal information. You may also have the right to <bdt class="block-component"></bdt>withdraw your consent to our processing of your personal information. These rights may be limited in some circumstances by applicable law. To request to review, update, or delete your personal information, please <bdt class="block-component"></bdt>fill out and submit a </span><span style="color: rgb(0, 58, 250);"><span data-custom-class="body_text"><span style="color: rgb(0, 58, 250); font-size: 15px;"><a data-custom-class="link" href="https://app.termly.io/dsar/6c1fd8c3-cbc2-44ba-b413-5cae290d75a2" rel="noopener noreferrer" target="_blank">data subject access request</a></span></span></span><bdt class="block-component"><span data-custom-class="body_text"></bdt></span></span><span data-custom-class="body_text">.</span></span></span><div style="display: none;"><a class="privacy123" href="https://app.termly.io/dsar/6c1fd8c3-cbc2-44ba-b413-5cae290d75a2"></a></div></div><style>
      ul {
        list-style-type: square;
      }
      ul > li > ul {
        list-style-type: circle;
      }
      ul > li > ul > li > ul {
        list-style-type: square;
      }
      ol li {
        font-family: Arial ;
      }
    </style>
      </div>
      <br><div><span data-custom-class='body_text'>This Privacy Policy was created using Termly's </span><a href="https://termly.io/products/privacy-policy-generator/" target="_blank" data-custom-class='link'>Privacy Policy Generator</a></div>
`;
