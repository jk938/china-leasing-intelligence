import Link from 'next/link'

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-slate-900 text-white">
      {/* Header */}
      <header className="border-b border-slate-800">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center font-bold">
              CL
            </div>
            <span className="text-xl font-bold">China Leasing Intelligence</span>
          </Link>
          <nav className="flex gap-6">
            <Link href="/" className="text-slate-300 hover:text-white transition">Home</Link>
            <Link href="/reports" className="text-slate-300 hover:text-white transition">Reports</Link>
            <Link href="/subscribe" className="text-slate-300 hover:text-white transition">Subscribe</Link>
            <Link href="/dashboard" className="text-blue-400 font-semibold">Dashboard</Link>
          </nav>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8">Your Dashboard</h1>

        {/* User Info */}
        <div className="bg-slate-800 rounded-lg p-6 mb-8 border border-slate-700">
          <h2 className="text-xl font-bold mb-4">Account Overview</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div>
              <p className="text-slate-400 text-sm">Current Plan</p>
              <p className="font-semibold text-lg text-blue-400">Professional</p>
            </div>
            <div>
              <p className="text-slate-400 text-sm">Next Billing Date</p>
              <p className="font-semibold text-lg">April 4, 2026</p>
            </div>
            <div>
              <p className="text-slate-400 text-sm">Subscription Status</p>
              <p className="font-semibold text-lg text-green-400">✓ Active</p>
            </div>
            <div>
              <p className="text-slate-400 text-sm">Reports Read</p>
              <p className="font-semibold text-lg">12</p>
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <Link href="/reports" className="bg-slate-800 rounded-lg p-6 border border-slate-700 hover:border-blue-500 transition">
            <h3 className="text-xl font-bold mb-2">📊 Latest Reports</h3>
            <p className="text-slate-400">Browse and download all intelligence reports</p>
          </Link>
          <Link href="/subscribe?plan=professional" className="bg-slate-800 rounded-lg p-6 border border-slate-700 hover:border-blue-500 transition">
            <h3 className="text-xl font-bold mb-2">💳 Manage Subscription</h3>
            <p className="text-slate-400">Upgrade, downgrade, or update payment method</p>
          </Link>
          <Link href="mailto:support@chinaleasingintel.com" className="bg-slate-800 rounded-lg p-6 border border-slate-700 hover:border-blue-500 transition">
            <h3 className="text-xl font-bold mb-2">💬 Contact Support</h3>
            <p className="text-slate-400">Get help from our team</p>
          </Link>
        </div>

        {/* Recent Reports */}
        <div className="bg-slate-800 rounded-lg p-6 border border-slate-700">
          <h2 className="text-xl font-bold mb-4">Recently Accessed</h2>
          <div className="space-y-4">
            {[
              { title: 'China Leasing Q1 2026 Market Overview', date: 'March 1, 2026', type: 'Market Overview' },
              { title: 'HNA Group: Post-Restructuring Credit Analysis', date: 'Feb 25, 2026', type: 'Credit Case Study' },
              { title: 'CBRC New Capital Rules: Impact Analysis', date: 'Feb 20, 2026', type: 'Regulatory Analysis' },
            ].map((report, i) => (
              <div key={i} className="flex justify-between items-center py-3 border-b border-slate-700 last:border-0">
                <div>
                  <p className="font-semibold">{report.title}</p>
                  <p className="text-sm text-slate-400">{report.type} · {report.date}</p>
                </div>
                <button className="text-blue-400 hover:underline">Read</button>
              </div>
            ))}
          </div>
        </div>

        {/* Upcoming Content */}
        <div className="mt-8 bg-slate-800/50 rounded-lg p-6 border border-slate-700">
          <h2 className="text-xl font-bold mb-4">📅 Upcoming Reports</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              { title: 'Monthly Leasing Data Release', date: 'March 10, 2026' },
              { title: 'Equipment Leasing Sector Deep Dive', date: 'March 15, 2026' },
              { title: 'Q1 2026 Credit Risk Update', date: 'March 20, 2026' },
              { title: 'Regulatory Policy Summary Q1', date: 'March 25, 2026' },
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-3 p-3 bg-slate-800 rounded-lg">
                <div className="w-10 h-10 bg-blue-500/20 rounded-lg flex items-center justify-center text-blue-400">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <p className="font-medium text-sm">{item.title}</p>
                  <p className="text-slate-400 text-xs">{item.date}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
