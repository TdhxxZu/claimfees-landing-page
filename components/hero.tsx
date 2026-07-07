import { ArrowRight, BellRing } from "lucide-react"
import { Button } from "@/components/ui/button"
import { GasPanel } from "@/components/gas-panel"

export function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-border">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.15]"
        style={{
          backgroundImage:
            "linear-gradient(to right, var(--border) 1px, transparent 1px), linear-gradient(to bottom, var(--border) 1px, transparent 1px)",
          backgroundSize: "56px 56px",
        }}
      />
      <div className="relative mx-auto grid max-w-7xl gap-12 px-4 py-20 sm:px-6 lg:grid-cols-2 lg:items-center lg:gap-8 lg:px-8 lg:py-28">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1">
            <BellRing className="size-3.5 text-primary" aria-hidden="true" />
            <span className="font-mono text-xs text-muted-foreground">
              Peringatan gas rendah kini tersedia
            </span>
          </div>

          <h1 className="mt-6 text-balance text-4xl font-semibold leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl">
            Berhenti membakar uang untuk{" "}
            <span className="text-primary">gas fee</span> kripto.
          </h1>

          <p className="mt-6 max-w-lg text-pretty text-lg leading-relaxed text-muted-foreground">
            ClaimFees memantau gas fee di seluruh jaringan blockchain secara real-time,
            memprediksi jendela biaya terendah, dan mengingatkanmu saat waktunya bertransaksi.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button size="lg" className="gap-2">
              Lacak Gas Sekarang
              <ArrowRight className="size-4" />
            </Button>
            <Button size="lg" variant="outline">
              Lihat Demo Langsung
            </Button>
          </div>

          <dl className="mt-12 grid max-w-md grid-cols-3 gap-6 border-t border-border pt-8">
            <div>
              <dt className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
                Hemat
              </dt>
              <dd className="mt-1 text-2xl font-semibold tabular-nums">38%</dd>
            </div>
            <div>
              <dt className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
                Jaringan
              </dt>
              <dd className="mt-1 text-2xl font-semibold tabular-nums">14+</dd>
            </div>
            <div>
              <dt className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
                Pengguna
              </dt>
              <dd className="mt-1 text-2xl font-semibold tabular-nums">92K</dd>
            </div>
          </dl>
        </div>

        <div className="lg:pl-8">
          <GasPanel />
        </div>
      </div>
    </section>
  )
}
