import { Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const plans = [
  {
    name: "Free",
    price: "$0",
    period: "/mo",
    desc: "For casual users.",
    features: ["3 networks", "Real-time data", "1 active alert", "24-hour history"],
    cta: "Get Started",
    featured: false,
  },
  {
    name: "Pro",
    price: "$12",
    period: "/mo",
    desc: "For active traders.",
    features: [
      "All 14+ networks",
      "Unlimited alerts",
      "24-hour fee prediction",
      "Telegram & API notifications",
      "90-day history",
    ],
    cta: "Try Pro",
    featured: true,
  },
  {
    name: "Team",
    price: "$49",
    period: "/mo",
    desc: "For protocols & teams.",
    features: ["Everything in Pro", "5 team members", "Webhooks & full API access", "Priority support"],
    cta: "Contact Us",
    featured: false,
  },
]

export function Pricing() {
  return (
    <section id="pricing" className="border-b border-border py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="font-mono text-xs uppercase tracking-widest text-primary">Pricing</span>
          <h2 className="mt-3 text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
            Pay a little once, save again and again
          </h2>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={cn(
                "flex flex-col rounded-2xl border bg-card p-8",
                plan.featured ? "border-primary shadow-2xl shadow-primary/10" : "border-border",
              )}
            >
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-medium">{plan.name}</h3>
                {plan.featured && (
                  <span className="rounded-full bg-primary px-2.5 py-0.5 font-mono text-xs text-primary-foreground">
                    Popular
                  </span>
                )}
              </div>
              <p className="mt-2 text-sm text-muted-foreground">{plan.desc}</p>
              <div className="mt-6 flex items-baseline gap-1">
                <span className="text-4xl font-semibold tracking-tight">{plan.price}</span>
                <span className="text-sm text-muted-foreground">{plan.period}</span>
              </div>
              <ul className="mt-6 flex-1 space-y-3">
                {plan.features.map((feat) => (
                  <li key={feat} className="flex items-center gap-2.5 text-sm">
                    <Check className="size-4 shrink-0 text-accent" aria-hidden="true" />
                    <span className="text-muted-foreground">{feat}</span>
                  </li>
                ))}
              </ul>
              <Button
                className="mt-8 w-full"
                variant={plan.featured ? "default" : "outline"}
              >
                {plan.cta}
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
