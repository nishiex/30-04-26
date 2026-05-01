"use client"

import { useState } from "react"
import { Metadata } from "next"
import { PageLayout } from "@/components/page-layout"
import { TrustBar, SectionHeading } from "@/components/page-parts"
import { Faq } from "@/components/faq"
import { Check, Minus, ArrowRight } from "lucide-react"

export const metadata: Metadata = {
  title: "Twiching Pricing · Starter $7.99 | Professional $15.99 | Enterprise $25.99",
  description: "Simple SaaS pricing with a 14-day free trial.",
}

const PLANS = [
  {
    name: "Starter",
    price: "$7.99",
    monthlyPrice: "$12.99",
    period: "/user/mo",
    best: "Freelancers, small teams",
    highlight: false,
    highlights: [
      "Unlimited calling",
      "Business SMS",
      "Mobile apps",
      "AI receptionist",
      "IVR system",
    ],
  },
  {
    name: "Professional",
    price: "$15.99",
    monthlyPrice: "$19.99",
    period: "/user/mo",
    best: "Growing teams",
    highlight: true,
    highlights: [
      "Everything in Starter",
      "Call recording",
      "Omnichannel",
      "CRM integrations",
      "Analytics dashboard",
    ],
  },
  {
    name: "Enterprise",
    price: "$25.99",
    monthlyPrice: "$29.99",
    period: "/user/mo",
    best: "Large teams",
    highlight: false,
    highlights: [
      "Everything in Professional",
      "Advanced dialers",
      "1-year recordings",
      "AI voice tools",
      "Dedicated manager",
    ],
  },
]

export default function PricingPage() {
  const [annual, setAnnual] = useState(true)

  return (
    <PageLayout>
      
      {/* HERO */}
      <section className="max-w-[1100px] mx-auto px-4 pt-14 pb-10 text-center">
        <h1 className="text-[42px] font-bold text-gray-900">
          Simple pricing. No surprises.
        </h1>

        <p className="mt-3 text-gray-500 text-lg">
          Start free for 14 days. Upgrade anytime.
        </p>

        <TrustBar items={["No setup fees", "Cancel anytime", "14-day trial"]} />

        {/* TOGGLE */}
        <div className="flex items-center justify-center gap-3 mt-6">
          <span className={annual ? "text-black" : "text-gray-400"}>Annual</span>

          <button
            onClick={() => setAnnual(!annual)}
            className="w-12 h-6 bg-gray-200 rounded-full relative"
          >
            <span
              className={`absolute top-1 left-1 w-4 h-4 bg-white rounded-full shadow transition ${
                annual ? "translate-x-6" : ""
              }`}
            />
          </button>

          <span className={!annual ? "text-black" : "text-gray-400"}>
            Monthly
          </span>
        </div>
      </section>

      {/* PRICING CARDS */}
      <section className="max-w-[1100px] mx-auto px-4 pb-20">
        <div className="grid md:grid-cols-3 gap-6">
          {PLANS.map((plan) => {
            const price = annual ? plan.price : plan.monthlyPrice

            return (
              <div
                key={plan.name}
                className={`relative rounded-2xl p-[1px] transition-all duration-300 ${
                  plan.highlight
                    ? "bg-gradient-to-b from-blue-500/40 to-transparent scale-[1.04]"
                    : "bg-gray-100 hover:bg-blue-100/30"
                }`}
              >
                <div className="bg-white rounded-2xl p-6 flex flex-col h-full hover:shadow-xl transition">
                  
                  {plan.highlight && (
                    <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-blue-600 text-white text-xs px-4 py-1 rounded-full">
                      Most Popular
                    </span>
                  )}

                  <p className="text-xs text-gray-400 mb-2">{plan.best}</p>

                  <div className="flex items-end gap-1 mb-2">
                    <span className="text-4xl font-bold">{price}</span>
                    <span className="text-sm text-gray-400">{plan.period}</span>
                  </div>

                  <ul className="space-y-2 mb-6 flex-1">
                    {plan.highlights.map((f) => (
                      <li key={f} className="flex gap-2 text-sm">
                        <Check className="w-4 h-4 text-blue-500 mt-0.5" />
                        {f}
                      </li>
                    ))}
                  </ul>

                  <button
                    className={`w-full py-2.5 rounded-full font-semibold transition ${
                      plan.highlight
                        ? "bg-blue-600 text-white hover:bg-blue-700"
                        : "border border-gray-200 hover:border-blue-500 hover:text-blue-600"
                    }`}
                  >
                    Start Free Trial
                  </button>
                </div>
              </div>
            )
          })}
        </div>
      </section>

      {/* COMPARISON */}
      <section className="max-w-[1100px] mx-auto px-4 pb-20">
        <SectionHeading eyebrow="Compare" h2="All features included" />

        <div className="border rounded-2xl overflow-hidden mt-6">
          <table className="w-full text-sm">
            <tbody>
              {["Calling", "SMS", "CRM", "Analytics", "Recording"].map((f, i) => (
                <tr key={f} className={i % 2 ? "bg-gray-50" : ""}>
                  <td className="p-4">{f}</td>
                  <td className="text-center">
                    <Check className="mx-auto text-blue-500" />
                  </td>
                  <td className="text-center">
                    <Check className="mx-auto text-blue-500" />
                  </td>
                  <td className="text-center">
                    {f === "CRM" ? (
                      <Minus className="mx-auto text-gray-300" />
                    ) : (
                      <Check className="mx-auto text-blue-500" />
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-blue-600 py-16 text-center text-white">
        <h2 className="text-3xl font-bold mb-3">Start your free trial</h2>
        <p className="mb-6 text-white/80">
          No setup fees. Cancel anytime.
        </p>

        <button className="bg-white text-blue-600 px-6 py-3 rounded-full font-semibold flex items-center gap-2 mx-auto">
          Get Started <ArrowRight className="w-4 h-4" />
        </button>
      </section>

      <Faq />

    </PageLayout>
  )
}