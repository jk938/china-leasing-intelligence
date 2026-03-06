import Link from 'next/link'

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-900 text-white">
      {/* Navigation */}
      <nav className="border-b border-slate-800">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center font-bold">
              CL
            </div>
            <span className="text-xl font-bold">China Leasing Intelligence</span>
          </div>
          <div className="flex items-center gap-8">
            <Link href="#services" className="text-slate-300 hover:text-white transition">
              Services
            </Link>
            <Link href="#sample" className="text-slate-300 hover:text-white transition">
              Sample Reports
            </Link>
            <Link href="#pricing" className="text-slate-300 hover:text-white transition">
              Pricing
            </Link>
            <Link
              href="/subscribe"
              className="bg-blue-500 hover:bg-blue-600 px-5 py-2 rounded-lg font-medium transition"
            >
              Subscribe
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-slate-800 px-4 py-2 rounded-full text-sm text-slate-300 mb-6">
              <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
              Updated Daily
            </div>
            <h1 className="text-5xl font-bold mb-6 leading-tight">
              Exclusive Intelligence on China's
              <span className="text-blue-400"> $2.5 Trillion</span> Leasing Industry
            </h1>
            <p className="text-xl text-slate-300 mb-10 leading-relaxed">
              Get insider insights on Chinese finance leasing, shadow banking, and alternative lending.
              Make informed investment decisions with data-driven analysis from a veteran industry professional.
            </p>
            <div className="flex justify-center gap-4">
              <Link
                href="/subscribe"
                className="bg-blue-500 hover:bg-blue-600 px-8 py-4 rounded-lg font-semibold text-lg transition"
              >
                Start Free Trial
              </Link>
              <Link
                href="#sample"
                className="border border-slate-600 hover:border-slate-500 px-8 py-4 rounded-lg font-semibold text-lg transition"
              >
                View Sample
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="py-12 border-y border-slate-800">
        <div className="container mx-auto px-4">
          <p className="text-center text-slate-400 mb-8">Trusted by analysts at</p>
          <div className="flex justify-center items-center gap-12 flex-wrap opacity-60">
            {['Goldman Sachs', 'Morgan Stanley', 'JP Morgan', 'Citi', 'BlackRock'].map((bank) => (
              <span key={bank} className="text-xl font-semibold text-slate-400">
                {bank}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Why China Leasing */}
      <section id="services" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Why China Leasing Intelligence?</h2>
            <p className="text-slate-400 text-lg max-w-2xl mx-auto">
              The China leasing market is complex, opaque, and often misunderstood by Western analysts.
              We bring you the ground truth.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-slate-800/50 p-8 rounded-xl border border-slate-700">
              <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">First-Hand Data</h3>
              <p className="text-slate-400">
                Access proprietary data from the China Financing Leasing Association and direct industry sources.
                No二手信息.
              </p>
            </div>

            <div className="bg-slate-800/50 p-8 rounded-xl border border-slate-700">
              <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Industry Expertise</h3>
              <p className="text-slate-400">
                Built by a veteran with 15+ years in Chinese financial leasing.
                We understand the nuances that Western analysts miss.
              </p>
            </div>

            <div className="bg-slate-800/50 p-8 rounded-xl border border-slate-700">
              <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Bilingual Coverage</h3>
              <p className="text-slate-400">
                All reports available in English and Chinese.
                Stay ahead of regulatory changes from CBRC and CSRC.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What You Get */}
      <section className="py-20 bg-slate-800/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">What You Get</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {[
              { title: 'Monthly Market Overview', desc: 'Comprehensive data on lease origination, asset quality, and sector allocation' },
              { title: 'Credit Risk Analysis', desc: 'Individual lessor credit assessments and early warning signals' },
              { title: 'Regulatory Watch', desc: 'Real-time updates on CBRC, CSRC, and NDRC policy changes' },
              { title: 'ABS Market Deep Dive', desc: 'China leasing ABS issuance trends and investor guidance' },
              { title: 'Sector Reports', desc: 'Aviation, shipping, equipment, and auto leasing sector analysis' },
              { title: 'Weekly Newsletter', desc: 'Curated highlights delivered to your inbox every Monday' },
            ].map((item, i) => (
              <div key={i} className="flex gap-4 p-6 bg-slate-800/50 rounded-lg border border-slate-700">
                <div className="w-6 h-6 bg-green-500/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <svg className="w-4 h-4 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold mb-1">{item.title}</h3>
                  <p className="text-slate-400 text-sm">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sample Reports */}
      <section id="sample" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Sample Reports</h2>
            <p className="text-slate-400">Preview our recent analysis</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: 'China Leasing Q1 2026 Outlook',
                date: 'March 1, 2026',
                tag: 'Market Overview',
                preview: 'Analysis of lease origination trends and asset quality metrics for the first quarter...'
              },
              {
                title: 'HNA Group: Post-Restructuring Analysis',
                date: 'Feb 25, 2026',
                tag: 'Credit Case Study',
                preview: 'Detailed assessment of HNA asset disposal progress and creditor recovery expectations...'
              },
              {
                title: 'CBRC New Capital Rules Impact',
                date: 'Feb 20, 2026',
                tag: 'Regulatory Analysis',
                preview: 'Implications of the new leverage ratio requirements on leasing company operations...'
              },
            ].map((report, i) => (
              <div key={i} className="bg-slate-800 rounded-lg overflow-hidden border border-slate-700 hover:border-blue-500 transition group">
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="bg-blue-500/20 text-blue-400 px-2 py-1 rounded text-xs font-medium">
                      {report.tag}
                    </span>
                    <span className="text-slate-500 text-sm">{report.date}</span>
                  </div>
                  <h3 className="text-lg font-bold mb-2 group-hover:text-blue-400 transition">
                    {report.title}
                  </h3>
                  <p className="text-slate-400 text-sm mb-4">{report.preview}</p>
                  <Link href="/subscribe" className="text-blue-400 text-sm font-medium hover:underline">
                    Read More →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-20 bg-slate-800/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Simple, Transparent Pricing</h2>
            <p className="text-slate-400">Choose the plan that fits your needs</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {/* Individual */}
            <div className="bg-slate-800 rounded-xl p-8 border border-slate-700">
              <h3 className="text-xl font-bold mb-2">Individual</h3>
              <p className="text-slate-400 text-sm mb-4">For analysts and researchers</p>
              <div className="mb-6">
                <span className="text-4xl font-bold">$49</span>
                <span className="text-slate-400">/month</span>
              </div>
              <ul className="space-y-3 mb-8 text-slate-300">
                <li className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Monthly market reports
                </li>
                <li className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Weekly newsletter
                </li>
                <li className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Regulatory updates
                </li>
                <li className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Email support
                </li>
              </ul>
              <Link href="/subscribe?plan=individual" className="block w-full border border-blue-500 text-blue-400 py-3 rounded-lg font-semibold text-center hover:bg-blue-500 hover:text-white transition">
                Get Started
              </Link>
            </div>

            {/* Professional */}
            <div className="bg-slate-800 rounded-xl p-8 border-2 border-blue-500 relative">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-blue-500 px-4 py-1 rounded-full text-sm font-medium">
                Most Popular
              </div>
              <h3 className="text-xl font-bold mb-2">Professional</h3>
              <p className="text-slate-400 text-sm mb-4">For portfolio managers</p>
              <div className="mb-6">
                <span className="text-4xl font-bold">$149</span>
                <span className="text-slate-400">/month</span>
              </div>
              <ul className="space-y-3 mb-8 text-slate-300">
                <li className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Everything in Individual
                </li>
                <li className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Quarterly deep-dive reports
                </li>
                <li className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Credit risk alerts
                </li>
                <li className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Priority support
                </li>
              </ul>
              <Link href="/subscribe?plan=professional" className="block w-full bg-blue-500 text-white py-3 rounded-lg font-semibold text-center hover:bg-blue-600 transition">
                Get Started
              </Link>
            </div>

            {/* Enterprise */}
            <div className="bg-slate-800 rounded-xl p-8 border border-slate-700">
              <h3 className="text-xl font-bold mb-2">Enterprise</h3>
              <p className="text-slate-400 text-sm mb-4">For institutional investors</p>
              <div className="mb-6">
                <span className="text-4xl font-bold">$499</span>
                <span className="text-slate-400">/month</span>
              </div>
              <ul className="space-y-3 mb-8 text-slate-300">
                <li className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Everything in Professional
                </li>
                <li className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Custom research</li>
                <li className="flex items-center gap requests
                -2">
                  <svg className="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  API access
                </li>
                <li className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Dedicated account manager
                </li>
              </ul>
              <Link href="/subscribe?plan=enterprise" className="block w-full border border-slate-600 text-slate-300 py-3 rounded-lg font-semibold text-center hover:bg-slate-700 transition">
                Contact Sales
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to get started?</h2>
          <p className="text-slate-400 mb-8 max-w-xl mx-auto">
            Join 500+ analysts and investors who rely on China Leasing Intelligence
            for their China market research.
          </p>
          <Link
            href="/subscribe"
            className="inline-block bg-blue-500 hover:bg-blue-600 px-8 py-4 rounded-lg font-semibold text-lg transition"
          >
            Start Your Free Trial
          </Link>
          <p className="text-slate-500 text-sm mt-4">No credit card required • Cancel anytime</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-800 py-12">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center font-bold">
                CL
              </div>
              <span className="text-lg font-bold">China Leasing Intelligence</span>
            </div>
            <p className="text-slate-500 text-sm">
              © 2026 China Leasing Intelligence. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </main>
  )
}
