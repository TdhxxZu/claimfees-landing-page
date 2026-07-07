"use client"

import { useEffect, useState } from "react"
import { ArrowDown, ArrowUp } from "lucide-react"
import { cn } from "@/lib/utils"

type Speed = {
  label: string
  base: number
  eta: string
  tone: "primary" | "accent" | "muted"
}

const chains = [
  { name: "Ethereum", symbol: "ETH", unit: "Gwei" },
  { name: "Polygon", symbol: "MATIC", unit: "Gwei" },
  { name: "Arbitrum", symbol: "ARB", unit: "Gwei" },
  { name: "Base", symbol: "BASE", unit: "Gwei" },
]

const speeds: Speed[] = [
  { label: "Fast", base: 42, eta: "~15 sec", tone: "primary" },
  { label: "Normal", base: 31, eta: "~45 sec", tone: "accent" },
  { label: "Economy", base: 22, eta: "~3 min", tone: "muted" },
]

function jitter(base: number) {
  return Math.max(1, base + (Math.random() - 0.5) * base * 0.28)
}

export function GasPanel() {
  const [activeChain, setActiveChain] = useState(0)
  const [values, setValues] = useState(() => speeds.map((s) => s.base))
  const [prev, setPrev] = useState(() => speeds.map((s) => s.base))

  useEffect(() => {
    const id = setInterval(() => {
      setValues((current) => {
        setPrev(current)
        return speeds.map((s) => jitter(s.base))
      })
    }, 2200)
    return () => clearInterval(id)
  }, [])

  return (
    <div className="rounded-2xl border border-border bg-card p-5 shadow-2xl shadow-black/40">
      <div className="mb-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="relative flex size-2">
            <span className="absolute inline-flex size-full animate-ping rounded-full bg-primary opacity-75" />
            <span className="relative inline-flex size-2 rounded-full bg-primary" />
          </span>
          <span className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
            Live gas
          </span>
        </div>
        <span className="font-mono text-xs text-muted-foreground">updates every 2s</span>
      </div>

      <div className="mb-4 flex flex-wrap gap-1.5">
        {chains.map((chain, i) => (
          <button
            key={chain.symbol}
            onClick={() => setActiveChain(i)}
            className={cn(
              "rounded-full px-3 py-1 font-mono text-xs transition-colors",
              i === activeChain
                ? "bg-primary text-primary-foreground"
                : "bg-secondary text-muted-foreground hover:text-foreground",
            )}
          >
            {chain.name}
          </button>
        ))}
      </div>

      <div className="space-y-2">
        {speeds.map((speed, i) => {
          const value = values[i]
          const up = value >= prev[i]
          return (
            <div
              key={speed.label}
              className="flex items-center justify-between rounded-xl border border-border/60 bg-background/40 px-4 py-3"
            >
              <div>
                <p className="text-sm font-medium">{speed.label}</p>
                <p className="font-mono text-xs text-muted-foreground">{speed.eta}</p>
              </div>
              <div className="flex items-baseline gap-2 text-right">
                <span
                  className={cn(
                    "flex items-center gap-0.5 font-mono text-xs",
                    up ? "text-destructive" : "text-accent",
                  )}
                >
                  {up ? <ArrowUp className="size-3" /> : <ArrowDown className="size-3" />}
                </span>
                <span className="font-mono text-2xl font-semibold tabular-nums">
                  {value.toFixed(1)}
                </span>
                <span className="font-mono text-xs text-muted-foreground">
                  {chains[activeChain].unit}
                </span>
              </div>
            </div>
          )
        })}
      </div>

      <div className="mt-4 flex items-center justify-between border-t border-border/60 pt-4">
        <span className="font-mono text-xs text-muted-foreground">Est. ETH transfer</span>
        <span className="font-mono text-sm font-medium text-primary">
          ${(values[1] * 0.09).toFixed(2)}
        </span>
      </div>
    </div>
  )
}
