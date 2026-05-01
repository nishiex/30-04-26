import { Metadata } from "next"
import { PageLayout } from "@/components/page-layout"
import { TrustBar } from "@/components/page-parts"
import { Faq } from "@/components/faq"
import PricingClient from "./pricing-client"

export const metadata: Metadata = {
  title: "Twiching Pricing · Starter $7.99 | Professional $15.99 | Enterprise $25.99",
  description: "Simple SaaS pricing with a 14-day free trial.",
}

export default function PricingPage() {
  return (
    <PageLayout>
      {/* HERO */}
      <section className="max-w-[1100px] mx-auto px-4 pt-14 pb-4 text-center">
        <h1 className="text-[42px] font-bold text-gray-900">
          Simple pricing. No surprises.
        </h1>
        <p className="mt-3 text-gray-500 text-lg">
          Start free for 14 days. Upgrade anytime.
        </p>
        <TrustBar items={["No setup fees", "Cancel anytime", "14-day trial"]} />
      </section>

      <PricingClient />

      <Faq />
    </PageLayout>
  )
}
