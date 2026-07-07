import { Activity, BellRing, LineChart, Layers, ShieldCheck, Wallet } from "lucide-react"

const features = [
  {
    icon: Activity,
    title: "Pelacakan Real-Time",
    desc: "Data gas fee diperbarui setiap detik langsung dari mempool tiap jaringan.",
  },
  {
    icon: BellRing,
    title: "Peringatan Pintar",
    desc: "Dapat notifikasi Telegram, email, atau push saat gas turun ke ambang targetmu.",
  },
  {
    icon: LineChart,
    title: "Prediksi Biaya",
    desc: "Model kami memprediksi jendela biaya terendah dalam 1–24 jam ke depan.",
  },
  {
    icon: Layers,
    title: "Multi-Chain",
    desc: "Pantau Ethereum, L2, dan chain populer lainnya dalam satu dasbor.",
  },
  {
    icon: Wallet,
    title: "Estimasi per Aksi",
    desc: "Lihat perkiraan biaya untuk swap, mint, transfer, dan approve sekaligus.",
  },
  {
    icon: ShieldCheck,
    title: "Tanpa Kunci Privat",
    desc: "Hanya membaca data on-chain. Kami tidak pernah menyentuh dompetmu.",
  },
]

export function Features() {
  return (
    <section id="features" className="border-b border-border py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <span className="font-mono text-xs uppercase tracking-widest text-primary">
            Fitur
          </span>
          <h2 className="mt-3 text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
            Semua yang kamu butuhkan untuk waktui transaksi
          </h2>
          <p className="mt-4 text-pretty text-lg leading-relaxed text-muted-foreground">
            Rangkaian alat presisi yang dibuat untuk trader, builder, dan siapa pun yang
            lelah bayar gas mahal.
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
