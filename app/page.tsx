import { SiteHeader } from "@/components/site-header"
import { Hero } from "@/components/hero"
import { Features } from "@/components/features"
import { Networks } from "@/components/networks"
import { HowItWorks } from "@/components/how-it-works"
import { Pricing } from "@/components/pricing"
import { CtaFooter } from "@/components/cta-footer"

export default function Page() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />
      <main>
        <Hero />
        <Features />
        <Networks />
        <HowItWorks />
        <Pricing />
        <CtaFooter />
      </main>
    </div>
  )
}
