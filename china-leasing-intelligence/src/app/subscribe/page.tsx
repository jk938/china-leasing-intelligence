'use client'

import { useState } from 'react'
import { loadStripe } from '@stripe/stripe-js'
import Link from 'next/link'

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY || '')

const plans = {
  individual: {
    name: 'Individual',
    price: 49,
    priceId: 'price_individual_monthly',
    desc: 'For analysts and researchers',
    features: [
      'Monthly market reports',
      'Weekly newsletter',
      'Regulatory updates',
      'Email support'
    ]
  },
  professional: {
    name: 'Professional',
    price: 149,
    priceId: 'price_professional_monthly',
    desc: 'For portfolio managers',
    popular: true,
    features: [
      'Everything in Individual',
      'Quarterly deep-dive reports',
      'Credit risk alerts',
      'Priority support'
    ]
  },
  enterprise: {
    name: 'Enterprise',
    price: 499,
    priceId: 'price_enterprise_monthly',
    desc: 'For institutional investors',
    features: [
      'Everything in Professional',
      'Custom research requests',
      'API access',
      'Dedicated account manager'
    ]
  },
}

export default function SubscribePage() {
  const [loading, setLoading] = useState<string | null>(null)
  const [selectedPlan, setSelectedPlan] = useState('professional')

  const handleSubscribe = async (priceId: string) => {
    setLoading(priceId)

    try {
      const response = await fetch('/api/create-checkout-session', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ priceId }),
      })

      const { sessionId } = await response.json()
      const stripe = await stripePromise
      await stripe?.redirectToCheckout({ sessionId })
    } catch (error) {
      console.error('Error:', error)
      alert('Subscription failed. Please try again.')
    } finally {
      setLoading(null)
    }
  }

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
            <Link href="/" className="text-slate-300 hover:text-white transition">
              Home
            </Link>
            <Link href="/#pricing" className="text-slate-300 hover:text-white transition">
              Pricing
            </Link>
          </nav>
        </div>
      </header>

      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Choose Your Plan</h1>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Get exclusive intelligence on China's $2.5 trillion leasing industry.
            Start with a 14-day free trial.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {Object.entries(plans).map(([key, plan]) => (
            <div
              key={key}
              className={`bg-slate-800 rounded-xl p-8 cursor-pointer transition ${
                selectedPlan === key
                  ? 'border-2 border-blue-500 relative'
                  : 'border border-slate-700 hover:border-slate-600'
              }`}
              onClick={() => setSelectedPlan(key)}
            >
              {plan.popular && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-blue-500 px-4 py-1 rounded-full text-sm font-medium">
                  Most Popular
                </div>
              )}
              <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
              <p className="text-slate-400 text-sm mb-4">{plan.desc}</p>
              <div className="mb-6">
                <span className="text-5xl font-bold">${plan.price}</span>
                <span className="text-slate-400">/month</span>
              </div>
              <ul className="text-left space-y-3 mb-8">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-2 text-slate-300">
                    <svg className="w-5 h-5 text-green-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
              <button
                onClick={(e) => {
                  e.stopPropagation()
                  handleSubscribe(plan.priceId)
                }}
                disabled={loading === plan.priceId}
                className={`w-full py-3 rounded-lg font-semibold transition ${
                  plan.popular
                    ? 'bg-blue-500 text-white hover:bg-blue-600'
                    : 'border border-slate-600 text-slate-300 hover:bg-slate-700'
                } disabled:opacity-50 disabled:cursor-not-allowed`}
              >
                {loading === plan.priceId ? 'Processing...' : 'Start Free Trial'}
              </button>
            </div>
          ))}
        </div>

        <div className="text-center mt-12 text-slate-400">
          <p className="flex items-center justify-center gap-2">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
            </svg>
            Secure payment via Stripe • 7-day money-back guarantee
          </p>
          <p className="mt-2">Accepts Visa, Mastercard, American Express</p>
        </div>

        {/* FAQ */}
        <div className="max-w-3xl mx-auto mt-20">
          <h2 className="text-2xl font-bold text-center mb-8">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {[
              {
                q: 'Can I cancel anytime?',
                a: 'Yes, you can cancel your subscription at any time. No questions asked.'
              },
              {
                q: 'Do you offer annual billing?',
                a: 'Yes! Save 20% with annual billing. Contact us to switch.'
              },
              {
                q: 'What payment methods do you accept?',
                a: 'We accept all major credit cards through Stripe. Wire transfer available for Enterprise plans.'
              },
              {
                q: 'Can I get a sample report first?',
                a: 'Absolutely. Sign up for the free trial and you&apos;ll get immediate access to our reports.'
              }
            ].map((faq, i) => (
              <div key={i} className="bg-slate-800/50 rounded-lg p-6 border border-slate-700">
                <h3 className="font-bold mb-2">{faq.q}</h3>
                <p className="text-slate-400">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
