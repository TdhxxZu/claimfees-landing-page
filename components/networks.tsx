type Network = {
  name: string
  gas: string
  trend: string
  status: "live" | "testnet" | "pre-tge"
}

const networks: Network[] = [
  { name: "Ethereum", gas: "31.2", trend: "-4%", status: "live" },
  { name: "Arbitrum", gas: "0.12", trend: "-1%", status: "live" },
  { name: "Optimism", gas: "0.08", trend: "+2%", status: "live" },
  { name: "Base", gas: "0.05", trend: "-8%", status: "live" },
  { name: "Polygon", gas: "42.6", trend: "+3%", status: "live" },
  { name: "BNB Chain", gas: "3.1", trend: "0%", status: "live" },
  { name: "Avalanche", gas: "25.0", trend: "-2%", status: "live" },
  { name: "zkSync", gas: "0.25", trend: "-5%", status: "live" },
  { name: "Monad", gas: "TBA", trend: "", status: "testnet" },
  { name: "MegaETH", gas: "TBA", trend: "", status: "testnet" },
  { name: "Eclipse", gas: "TBA", trend: "", status: "pre-tge" },
  { name: "Doma Protocol", gas: "TBA", trend: "", status: "pre-tge" },
  { name: "Robinhood Chain", gas: "TBA", trend: "", status: "pre-tge" },
]

const statusStyles: Record<Network["status"], { label: string; className: string }> = {
  live: { label: "Live", className: "bg-accent/15 text-accent" },
  testnet: { label: "Testnet", className: "bg-primary/15 text-primary" },
  "pre-tge": { label: "Pre-TGE", className: "bg-muted text-muted-foreground" },
}

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
              Live chains and the next wave, in one view
            </h2>
            <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
              Track gas across major mainnets today, and get ready for upcoming chains.
              Pre-TGE and testnet networks show{" "}
              <span className="font-mono text-foreground">TBA</span> until they launch a
              tradable native token.
            </p>
          </div>
          <p className="font-mono text-xs text-muted-foreground">
            * figures are illustrative
          </p>
        </div>

        <div className="mt-12 grid gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
          {networks.map((n) => {
            const isLive = n.status === "live"
            const down = n.trend.startsWith("-")
            const status = statusStyles[n.status]
            return (
              <div key={n.name} className="bg-card p-6">
                <div className="flex items-center justify-between gap-2">
                  <span className="text-sm font-medium">{n.name}</span>
                  {isLive ? (
                    <span
                      className={`font-mono text-xs ${
                        down
                          ? "text-accent"
                          : n.trend === "0%"
                            ? "text-muted-foreground"
                            : "text-destructive"
                      }`}
                    >
                      {n.trend}
                    </span>
                  ) : (
                    <span
                      className={`rounded-full px-2 py-0.5 font-mono text-[10px] uppercase tracking-wider ${status.className}`}
                    >
                      {status.label}
                    </span>
                  )}
                </div>
                <div className="mt-4 flex items-baseline gap-1.5">
                  <span
                    className={`font-mono text-3xl font-semibold tabular-nums ${
                      isLive ? "" : "text-muted-foreground"
                    }`}
                  >
                    {n.gas}
                  </span>
                  {isLive && (
                    <span className="font-mono text-xs text-muted-foreground">Gwei</span>
                  )}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
