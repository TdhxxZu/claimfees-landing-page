const networks = [
  { name: "Ethereum", gas: "31.2", trend: "-4%" },
  { name: "Arbitrum", gas: "0.12", trend: "-1%" },
  { name: "Optimism", gas: "0.08", trend: "+2%" },
  { name: "Base", gas: "0.05", trend: "-8%" },
  { name: "Polygon", gas: "42.6", trend: "+3%" },
  { name: "BNB Chain", gas: "3.1", trend: "0%" },
  { name: "Avalanche", gas: "25.0", trend: "-2%" },
  { name: "zkSync", gas: "0.25", trend: "-5%" },
]

export function Networks() {
  return (
    <section id="networks" className="border-b border-border py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
          <div className="max-w-2xl">
            <span className="font-mono text-xs uppercase tracking-widest text-primary">
              Networks
            </span>
            <h2 className="mt-3 text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
              14+ networks in a single view
            </h2>
          </div>
          <p className="font-mono text-xs text-muted-foreground">
            * figures are illustrative
          </p>
        </div>

        <div className="mt-12 grid gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
          {networks.map((n) => {
            const down = n.trend.startsWith("-")
            return (
              <div key={n.name} className="bg-card p-6">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium">{n.name}</span>
                  <span
                    className={`font-mono text-xs ${
                      down ? "text-accent" : n.trend === "0%" ? "text-muted-foreground" : "text-destructive"
                    }`}
                  >
                    {n.trend}
                  </span>
                </div>
                <div className="mt-4 flex items-baseline gap-1.5">
                  <span className="font-mono text-3xl font-semibold tabular-nums">{n.gas}</span>
                  <span className="font-mono text-xs text-muted-foreground">Gwei</span>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
