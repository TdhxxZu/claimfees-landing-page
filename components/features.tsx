import { Activity, BellRing, LineChart, Layers, ShieldCheck, Wallet } from "lucide-react"

const features = [
  {
    icon: Activity,
    title: "Real-Time Tracking",
    desc: "Gas fee data refreshed every second straight from each network's mempool.",
  },
  {
    icon: BellRing,
    title: "Smart Alerts",
    desc: "Get Telegram, email, or push notifications when gas drops to your target threshold.",
  },
  {
    icon: LineChart,
    title: "Fee Prediction",
    desc: "Our model forecasts the lowest-cost windows over the next 1–24 hours.",
  },
  {
    icon: Layers,
    title: "Multi-Chain",
    desc: "Monitor Ethereum, L2s, and other popular chains from a single dashboard.",
  },
  {
    icon: Wallet,
    title: "Per-Action Estimates",
    desc: "See estimated costs for swaps, mints, transfers, and approvals all at once.",
  },
  {
    icon: ShieldCheck,
    title: "No Private Keys",
    desc: "We only read on-chain data. We never touch your wallet.",
  },
]

export function Features() {
  return (
    <section id="features" className="border-b border-border py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <span className="font-mono text-xs uppercase tracking-widest text-primary">
            Features
          </span>
          <h2 className="mt-3 text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
            Everything you need to time your transactions
          </h2>
          <p className="mt-4 text-pretty text-lg leading-relaxed text-muted-foreground">
            A precision toolkit built for traders, builders, and anyone tired of
            overpaying for gas.
          </p>
        </div>

        <div className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f) => (
            <div key={f.title} className="group bg-card p-8 transition-colors hover:bg-secondary">
              <div className="flex size-11 items-center justify-center rounded-lg bg-secondary text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                <f.icon className="size-5" aria-hidden="true" />
              </div>
              <h3 className="mt-5 text-lg font-medium">{f.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
