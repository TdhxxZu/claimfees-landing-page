const steps = [
  {
    step: "01",
    title: "Connect your wallet",
    desc: "Add a wallet address or pick the networks you want to monitor. Read-only, no transaction permissions.",
  },
  {
    step: "02",
    title: "Set your threshold",
    desc: "Define your target gas fee and transaction type. ClaimFees watches the mempool 24/7 for you.",
  },
  {
    step: "03",
    title: "Transact when it's cheap",
    desc: "Get alerted the moment gas drops to your target, then execute your transaction at the best price.",
  },
]

export function HowItWorks() {
  return (
    <section id="how" className="border-b border-border py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <span className="font-mono text-xs uppercase tracking-widest text-primary">
            How It Works
          </span>
          <h2 className="mt-3 text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
            Three steps to start saving
          </h2>
        </div>

        <div className="mt-14 grid gap-8 md:grid-cols-3">
          {steps.map((s) => (
            <div key={s.step} className="relative">
              <span className="font-mono text-5xl font-semibold text-primary/25">{s.step}</span>
              <h3 className="mt-4 text-xl font-medium">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
