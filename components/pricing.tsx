import { Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const plans = [
  {
    name: "Gratis",
    price: "$0",
    period: "/bln",
    desc: "Untuk pengguna kasual.",
    features: ["3 jaringan", "Data real-time", "1 peringatan aktif", "Riwayat 24 jam"],
    cta: "Mulai Gratis",
    featured: false,
  },
  {
    name: "Pro",
    price: "$12",
    period: "/bln",
    desc: "Untuk trader aktif.",
    features: [
      "Semua 14+ jaringan",
      "Peringatan tak terbatas",
      "Prediksi biaya 24 jam",
      "Notifikasi Telegram & API",
      "Riwayat 90 hari",
    ],
    cta: "Coba Pro",
    featured: true,
  },
  {
    name: "Tim",
    price: "$49",
    period: "/bln",
    desc: "Untuk protokol & tim.",
    features: ["Semua fitur Pro", "5 anggota tim", "Webhook & akses API penuh", "Dukungan prioritas"],
    cta: "Hubungi Kami",
    featured: false,
  },
]

export function Pricing() {
  return (
    <section id="pricing" className="border-b border-border py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="font-mono text-xs uppercase tracking-widest text-primary">Harga</span>
          <h2 className="mt-3 text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
            Bayar sekali murah, hemat berkali-kali
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
                    Populer
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
