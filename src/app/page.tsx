'use client'

import { useState } from 'react'
import Link from 'next/link'

// Translation dictionary
const translations = {
  en: {
    nav: { services: 'Services', sample: 'Sample Reports', pricing: 'Pricing', subscribe: 'Subscribe' },
    hero: {
      updated: 'Updated Daily',
      title: 'Exclusive Intelligence on China\'s',
      titleHighlight: '$2.5 Trillion',
      titleEnd: 'Leasing Industry',
      desc: 'Get insider insights on Chinese finance leasing, shadow banking, and alternative lending. Make informed investment decisions with data-driven analysis from a veteran industry professional.',
      cta: 'Subscribe Now',
      viewSample: 'View Sample'
    },
    trust: 'Trusted by analysts at',
    why: {
      title: 'Why China Leasing Intelligence?',
      desc: 'The China leasing market is complex, opaque, and often misunderstood by Western analysts. We bring you the ground truth.',
      cards: [
        { title: 'Macro-to-Micro Coverage', desc: 'From macroeconomic trends and policy analysis to individual lessor credit assessments. Actionable insights for leasing executives, investors, and cross-border finance managers.' },
        { title: 'Industry Expertise', desc: 'Built by a veteran with 15+ years in Chinese financial leasing. We understand the nuances that Western analysts miss.' },
        { title: 'Proprietary Intelligence', desc: 'Exclusive access to industry data from the China Financing Leasing Association and direct sources. No secondhand information.' }
      ]
    },
    what: { title: 'What You Get', items: [
      { title: 'Monthly Market Overview', desc: 'Comprehensive data on lease origination, asset quality, and sector allocation' },
      { title: 'Credit Risk Analysis', desc: 'Individual lessor credit assessments and early warning signals' },
      { title: 'Regulatory Watch', desc: 'Real-time updates on CBRC, CSRC, and NDRC policy changes' },
      { title: 'ABS Market Deep Dive', desc: 'China leasing ABS issuance trends and investor guidance' },
      { title: 'Sector Reports', desc: 'Aviation, shipping, equipment, and auto leasing sector analysis' },
      { title: 'Weekly Newsletter', desc: 'Curated highlights delivered to your inbox every Monday' }
    ]},
    sample: { title: 'Sample Reports', desc: 'Preview our recent analysis', readMore: 'Read More →', reports: [
      { title: 'China Leasing Q1 2026 Outlook', date: 'March 1, 2026', tag: 'Market Overview', preview: 'Analysis of lease origination trends and asset quality metrics for the first quarter...' },
      { title: 'HNA Group: Post-Restructuring Analysis', date: 'Feb 25, 2026', tag: 'Credit Case Study', preview: 'Detailed assessment of HNA asset disposal progress and creditor recovery expectations...' },
      { title: 'CBRC New Capital Rules Impact', date: 'Feb 20, 2026', tag: 'Regulatory Analysis', preview: 'Implications of the new leverage ratio requirements on leasing company operations...' }
    ]},
    pricing: { title: 'Simple, Transparent Pricing', desc: 'Choose the plan that fits your needs', monthly: 'Monthly', yearly: 'Yearly', save: 'Save 20%', plans: [
      { name: 'Free', desc: 'Get started', price: 0, features: ['Weekly newsletter', 'Public reports'], no: ['Market reports', 'Credit analysis'], btn: 'Sign Up Free', href: '/subscribe?plan=free' },
      { name: 'Individual', desc: 'For analysts and researchers', price: 49, features: ['Monthly market reports', 'Weekly newsletter', 'Regulatory updates', 'Email support'], btn: 'Subscribe', href: '/subscribe?plan=individual' },
      { name: 'Professional', desc: 'For portfolio managers', price: 149, popular: true, features: ['Everything in Individual', 'Quarterly deep-dive reports', 'Credit risk alerts', 'Priority support'], btn: 'Subscribe', href: '/subscribe?plan=professional' },
      { name: 'Enterprise', desc: 'For institutional investors', price: 499, features: ['Everything in Professional', 'Custom research requests', 'API access', 'Dedicated account manager'], btn: 'Contact Sales', href: '/subscribe?plan=enterprise' }
    ]},
    cta: { title: 'Ready to get started?', desc: 'Join 500+ analysts and investors who rely on China Leasing Intelligence for their China market research.', btn: 'Subscribe Now', noCard: 'No credit card required • Cancel anytime' },
    footer: '© 2026 China Leasing Intelligence. All rights reserved.'
  },
  zh: {
    nav: { services: '服务', sample: '示例报告', pricing: '价格', subscribe: '订阅' },
    hero: {
      updated: '每日更新',
      title: '中国',
      titleHighlight: '2.5万亿美元',
      titleEnd: '租赁行业深度情报',
      desc: '获取中国金融租赁、影子银行和替代性借贷的内部洞察。基于资深行业专业人士的数据驱动分析，助您做出明智的投资决策。',
      cta: '立即订阅',
      viewSample: '查看示例'
    },
    trust: '分析师信赖之选',
    why: {
      title: '为什么选择中国租赁情报？',
      desc: '中国租赁市场复杂、不透明，西方分析师往往误解。我们为您呈现真实情况。',
      cards: [
        { title: '宏观到微观全覆盖', desc: '从宏观经济趋势、政策分析到租赁公司信用评估。为租赁高管、投资人和跨境融资经理提供可操作的洞察。' },
        { title: '行业专业经验', desc: '由拥有15年以上中国金融租赁经验的资深人士创立。我们理解西方分析师忽略的细微差别。' },
        { title: '独家情报来源', desc: '独家获取中国融资租赁协会及直接来源的行业数据。不使用二手信息。' }
      ]
    },
    what: { title: '您将获得', items: [
      { title: '月度市场概览', desc: '租赁投放、资产质量和行业配置的全面数据' },
      { title: '信用风险分析', desc: '租赁公司信用评估和预警信号' },
      { title: '监管动态', desc: '及时更新银保监会、证监会和发改委政策变化' },
      { title: 'ABS市场深度研究', desc: '中国租赁ABS发行趋势和投资者指南' },
      { title: '行业报告', desc: '航空、航运、设备和汽车租赁行业分析' },
      { title: '每周通讯', desc: '每周一发送到您邮箱的精选要点' }
    ]},
    sample: { title: '示例报告', desc: '预览近期分析', readMore: '阅读更多 →', reports: [
      { title: '中国租赁2026年Q1展望', date: '2026年3月1日', tag: '市场概览', preview: '第一季度租赁投放趋势和资产质量指标分析...' },
      { title: '海航集团：重组后分析', date: '2026年2月25日', tag: '信用案例研究', preview: '海航资产处置进展和债权人回收预期详细评估...' },
      { title: '银保监会新资本规则影响', date: '2026年2月20日', tag: '监管分析', preview: '新杠杆率要求对租赁公司运营的影响...' }
    ]},
    pricing: { title: '简单透明的定价', desc: '选择适合您的方案', monthly: '月付', yearly: '年付', save: '省20%', plans: [
      { name: '免费版', desc: '开始使用', price: 0, features: ['每周通讯', '公开报告'], no: ['市场报告', '信用分析'], btn: '免费注册', href: '/subscribe?plan=free' },
      { name: '个人版', desc: '适合分析师和研究人员', price: 49, features: ['月度市场报告', '每周通讯', '监管动态', '邮件支持'], btn: '订阅', href: '/subscribe?plan=individual' },
      { name: '专业版', desc: '适合投资组合经理', price: 149, popular: true, features: ['个人版全部内容', '季度深度报告', '信用风险提醒', '优先支持'], btn: '订阅', href: '/subscribe?plan=professional' },
      { name: '企业版', desc: '适合机构投资者', price: 499, features: ['专业版全部内容', '定制研究需求', 'API接口', '专属客户经理'], btn: '联系销售', href: '/subscribe?plan=enterprise' }
    ]},
    cta: { title: '准备好开始了吗？', desc: '加入500多位依赖中国租赁情报进行中国市场研究的分析师和投资人。', btn: '立即订阅', noCard: '无需信用卡 • 随时取消' },
    footer: '© 2026 中国租赁情报。保留所有权利。'
  }
}

type Lang = 'en' | 'zh'

export default function Home() {
  const [lang, setLang] = useState<Lang>('en')
  const [billing, setBilling] = useState<'monthly' | 'yearly'>('monthly')
  const t = translations[lang]

  return (
    <>
    <div className="min-h-screen bg-slate-900 text-white">
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
              {t.nav.services}
            </Link>
            <Link href="#sample" className="text-slate-300 hover:text-white transition">
              {t.nav.sample}
            </Link>
            <Link href="#pricing" className="text-slate-300 hover:text-white transition">
              {t.nav.pricing}
            </Link>
            <Link
              href="/subscribe"
              className="bg-blue-500 hover:bg-blue-600 px-5 py-2 rounded-lg font-medium transition"
            >
              {t.nav.subscribe}
            </Link>
            <button
              onClick={() => setLang(lang === 'en' ? 'zh' : 'en')}
              className="flex items-center gap-1 text-sm text-slate-400 hover:text-white transition"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
              </svg>
              {lang === 'en' ? '中文' : 'EN'}
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-slate-800 px-4 py-2 rounded-full text-sm text-slate-300 mb-6">
              <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
              {t.hero.updated}
            </div>
            <h1 className="text-5xl font-bold mb-6 leading-tight">
              {t.hero.title}
              <span className="text-blue-400"> {t.hero.titleHighlight}</span> {t.hero.titleEnd}
            </h1>
            <p className="text-xl text-slate-300 mb-10 leading-relaxed">
              {t.hero.desc}
            </p>
            <div className="flex justify-center gap-4">
              <Link
                href="/subscribe"
                className="bg-blue-500 hover:bg-blue-600 px-8 py-4 rounded-lg font-semibold text-lg transition"
              >
                {t.hero.cta}
              </Link>
              <Link
                href="#sample"
                className="border border-slate-600 hover:border-slate-500 px-8 py-4 rounded-lg font-semibold text-lg transition"
              >
                {t.hero.viewSample}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="py-12 border-y border-slate-800">
        <div className="container mx-auto px-4">
          <p className="text-center text-slate-400 mb-8">{t.trust}</p>
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
            <h2 className="text-3xl font-bold mb-4">{t.why.title}</h2>
            <p className="text-slate-400 text-lg max-w-2xl mx-auto">
              {t.why.desc}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {t.why.cards.map((card, i) => (
              <div key={i} className="bg-slate-800/50 p-8 rounded-xl border border-slate-700">
                <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    {i === 0 && <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />}
                    {i === 1 && <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />}
                    {i === 2 && <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />}
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3">{card.title}</h3>
                <p className="text-slate-400">{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What You Get */}
      <section className="py-20 bg-slate-800/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">{t.what.title}</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {t.what.items.map((item, i) => (
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
            <h2 className="text-3xl font-bold mb-4">{t.sample.title}</h2>
            <p className="text-slate-400">{t.sample.desc}</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {t.sample.reports.map((report, i) => (
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
                    {t.sample.readMore}
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
            <h2 className="text-3xl font-bold mb-4">{t.pricing.title}</h2>
            <p className="text-slate-400">{t.pricing.desc}</p>
          </div>

          {/* Billing Toggle */}
          <div className="flex justify-center mb-12">
            <div className="bg-slate-800 rounded-lg p-1 flex">
              <button
                onClick={() => setBilling('monthly')}
                className={`px-6 py-2 rounded-md font-medium transition ${billing === 'monthly' ? 'bg-blue-500 text-white' : 'text-slate-400 hover:text-white'}`}
              >
                {t.pricing.monthly}
              </button>
              <button
                onClick={() => setBilling('yearly')}
                className={`px-6 py-2 rounded-md font-medium transition ${billing === 'yearly' ? 'bg-blue-500 text-white' : 'text-slate-400 hover:text-white'}`}
              >
                {t.pricing.yearly} <span className="text-green-400 text-sm ml-1">{t.pricing.save}</span>
              </button>
            </div>
          </div>

          <div className="grid md:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {t.pricing.plans.map((plan, i) => (
              <div key={i} className={`bg-slate-800 rounded-xl p-8 border ${plan.popular ? 'border-2 border-blue-500 relative' : 'border-slate-700'}`}>
                {plan.popular && (
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-blue-500 px-4 py-1 rounded-full text-sm font-medium">
                    Most Popular
                  </div>
                )}
                <h3 className="text-xl font-bold mb-2">{plan.name}</h3>
                <p className="text-slate-400 text-sm mb-4">{plan.desc}</p>
                <div className="mb-6">
                  <span className="text-4xl font-bold">
                    ${billing === 'yearly' && plan.price > 0 ? Math.round(plan.price * 12 * 0.8) : plan.price}
                  </span>
                  <span className="text-slate-400">/{billing === 'yearly' ? 'year' : 'month'}</span>
                </div>
                <ul className="space-y-3 mb-8 text-slate-300">
                  {plan.features.map((feat, j) => (
                    <li key={j} className="flex items-center gap-2">
                      <svg className="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {feat}
                    </li>
                  ))}
                  {plan.no?.map((no, j) => (
                    <li key={j} className="flex items-center gap-2 opacity-50">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                      {no}
                    </li>
                  ))}
                </ul>
                <Link href={plan.href} className={`block w-full py-3 rounded-lg font-semibold text-center transition ${plan.popular ? 'bg-blue-500 text-white hover:bg-blue-600' : 'border border-slate-600 text-slate-300 hover:bg-slate-700'}`}>
                  {plan.btn}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">{t.cta.title}</h2>
          <p className="text-slate-400 mb-8 max-w-xl mx-auto">
            {t.cta.desc}
          </p>
          <Link
            href="/subscribe"
            className="inline-block bg-blue-500 hover:bg-blue-600 px-8 py-4 rounded-lg font-semibold text-lg transition"
          >
            {t.cta.btn}
          </Link>
          <p className="text-slate-500 text-sm mt-4">{t.cta.noCard}</p>
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
              {t.footer}
            </p>
          </div>
        </div>
      </footer>
    </div>
    </>
  )
}
