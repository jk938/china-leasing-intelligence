import Link from 'next/link'

const reports = [
  {
    id: 1,
    title: 'China Leasing Q1 2026 Market Overview',
    category: 'Market Overview',
    date: 'March 1, 2026',
    excerpt: 'Comprehensive analysis of lease origination trends, asset quality metrics, and sector allocation for Q1 2026.',
    premium: false,
    readTime: '8 min'
  },
  {
    id: 2,
    title: 'HNA Group: Post-Restructuring Credit Analysis',
    category: 'Credit Case Study',
    date: 'Feb 25, 2026',
    excerpt: 'Detailed assessment of HNA asset disposal progress, creditor recovery expectations, and timeline for full resolution.',
    premium: true,
    readTime: '12 min'
  },
  {
    id: 3,
    title: 'CBRC New Capital Rules: Impact Analysis',
    category: 'Regulatory Analysis',
    date: 'Feb 20, 2026',
    excerpt: 'Implications of the new leverage ratio requirements on leasing company operations and capital planning.',
    premium: true,
    readTime: '10 min'
  },
  {
    id: 4,
    title: 'China Leasing ABS Market: February 2026',
    category: 'ABS Market',
    date: 'Feb 15, 2026',
    excerpt: 'Monthly issuance data, investor demand analysis, and pricing trends in the China leasing ABS market.',
    premium: false,
    readTime: '6 min'
  },
  {
    id: 5,
    title: 'Aviation Leasing Sector Outlook 2026',
    category: 'Sector Report',
    date: 'Feb 10, 2026',
    excerpt: 'Analysis of aircraft leasing exposure, fleet utilization rates, and recovery prospects for major players.',
    premium: true,
    readTime: '15 min'
  },
  {
    id: 6,
    title: 'Top 20 China Lessors: Credit Rankings Q1 2026',
    category: 'Credit Rankings',
    date: 'Feb 5, 2026',
    excerpt: 'Annual credit assessment of the 20 largest leasing companies in China with updated risk scores.',
    premium: true,
    readTime: '20 min'
  },
]

export default function ReportsPage() {
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
            <Link href="/reports" className="text-blue-400 font-semibold">Reports</Link>
            <Link href="/subscribe" className="text-slate-300 hover:text-white transition">Subscribe</Link>
            <Link href="/dashboard" className="text-slate-300 hover:text-white transition">Dashboard</Link>
          </nav>
        </div>
      </header>

      {/* Reports */}
      <div className="container mx-auto px-4 py-12">
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-4">Intelligence Reports</h1>
          <p className="text-slate-400 text-lg">
            In-depth analysis and research on China's leasing industry
          </p>
        </div>

        {/* Filters */}
        <div className="flex gap-4 mb-8 flex-wrap">
          {['All', 'Market Overview', 'Credit Case Study', 'Regulatory Analysis', 'ABS Market', 'Sector Report'].map((filter, i) => (
            <button
              key={filter}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition ${
                i === 0
                  ? 'bg-blue-500 text-white'
                  : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {reports.map((report) => (
            <div key={report.id} className="bg-slate-800 rounded-lg p-6 border border-slate-700 hover:border-blue-500 transition group">
              <div className="flex items-center gap-3 mb-3">
                <span className="bg-blue-500/20 text-blue-400 px-3 py-1 rounded-full text-sm font-medium">
                  {report.category}
                </span>
                <span className="text-slate-500 text-sm">{report.date}</span>
                <span className="text-slate-500 text-sm">· {report.readTime} read</span>
              </div>
              <h2 className="text-xl font-bold mb-3 group-hover:text-blue-400 transition">
                {report.title}
              </h2>
              <p className="text-slate-400 mb-4 line-clamp-2">{report.excerpt}</p>
              <div className="flex justify-between items-center">
                {report.premium ? (
                  <span className="flex items-center gap-1 text-yellow-400 text-sm font-medium">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    Premium
                  </span>
                ) : (
                  <span className="text-green-400 text-sm font-medium">Free</span>
                )}
                {report.premium ? (
                  <Link
                    href="/subscribe?plan=professional"
                    className="bg-yellow-500 text-white px-4 py-2 rounded-lg hover:bg-yellow-600 transition text-sm font-medium"
                  >
                    Subscribe to Read
                  </Link>
                ) : (
                  <Link
                    href={`/reports/${report.id}`}
                    className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition text-sm font-medium"
                  >
                    Read Now
                  </Link>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
