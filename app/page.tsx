export default function Home() {
  const checkoutUrl = process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#";

  return (
    <main className="max-w-3xl mx-auto px-6 py-20">
      {/* Hero */}
      <section className="text-center mb-20">
        <span className="inline-block bg-[#161b22] border border-[#30363d] text-[#58a6ff] text-xs font-semibold px-3 py-1 rounded-full mb-6 uppercase tracking-widest">
          GDPR Compliance
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-5">
          Scan Email Lists for{" "}
          <span className="text-[#58a6ff]">GDPR Violations</span>
        </h1>
        <p className="text-lg text-[#8b949e] max-w-xl mx-auto mb-8">
          Upload your CSV or Excel email lists and instantly surface missing consent records,
          expired permissions, and compliance gaps — before regulators do.
        </p>
        <a
          href={checkoutUrl}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-8 py-3 rounded-lg text-base transition-colors"
        >
          Start Scanning — $19/mo
        </a>
        <p className="text-xs text-[#6e7681] mt-3">Cancel anytime. No credit card surprises.</p>
      </section>

      {/* Features strip */}
      <section className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-20">
        {[
          { icon: "📋", title: "Consent Gaps", desc: "Detect emails with no valid consent record on file." },
          { icon: "⏰", title: "Expired Permissions", desc: "Flag contacts whose consent has lapsed past legal limits." },
          { icon: "📊", title: "Compliance Dashboard", desc: "Visual breakdown of your list's GDPR health score." }
        ].map((f) => (
          <div key={f.title} className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
            <div className="text-2xl mb-2">{f.icon}</div>
            <h3 className="text-white font-semibold mb-1">{f.title}</h3>
            <p className="text-sm text-[#8b949e]">{f.desc}</p>
          </div>
        ))}
      </section>

      {/* Pricing */}
      <section className="mb-20" id="pricing">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Simple Pricing</h2>
        <div className="bg-[#161b22] border border-[#58a6ff] rounded-2xl p-8 max-w-sm mx-auto text-center">
          <p className="text-[#58a6ff] font-semibold uppercase tracking-widest text-xs mb-3">Pro Plan</p>
          <p className="text-5xl font-bold text-white mb-1">$19</p>
          <p className="text-[#8b949e] text-sm mb-6">/month</p>
          <ul className="text-sm text-[#c9d1d9] space-y-2 mb-8 text-left">
            {[
              "Unlimited CSV / Excel uploads",
              "Consent record validation",
              "Expired permission detection",
              "Compliance gap dashboard",
              "Export compliance reports",
              "Email support"
            ].map((item) => (
              <li key={item} className="flex items-center gap-2">
                <span className="text-[#58a6ff]">✓</span> {item}
              </li>
            ))}
          </ul>
          <a
            href={checkoutUrl}
            className="block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-6 py-3 rounded-lg transition-colors"
          >
            Get Started
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="mb-20" id="faq">
        <h2 className="text-2xl font-bold text-white text-center mb-8">FAQ</h2>
        <div className="space-y-4">
          {[
            {
              q: "What file formats are supported?",
              a: "You can upload CSV and Excel (.xlsx) files. We auto-detect column headers for email addresses and consent timestamps."
            },
            {
              q: "How does consent validation work?",
              a: "We cross-reference your uploaded list against your stored consent records, flagging any email that lacks a valid, non-expired opt-in entry."
            },
            {
              q: "Is my data stored securely?",
              a: "Uploaded files are processed in-memory and not retained beyond your session. Consent records are stored encrypted in our EU-region database."
            }
          ].map((item) => (
            <div key={item.q} className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
              <h3 className="text-white font-semibold mb-2">{item.q}</h3>
              <p className="text-sm text-[#8b949e]">{item.a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="text-center text-xs text-[#6e7681] border-t border-[#21262d] pt-8">
        <p>© {new Date().getFullYear()} GDPR Email Scanner. Built for EU-facing marketing teams.</p>
      </footer>
    </main>
  );
}
