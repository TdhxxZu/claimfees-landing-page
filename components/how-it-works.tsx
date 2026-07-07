const steps = [
  {
    step: "01",
    title: "Hubungkan dompet",
    desc: "Tambahkan alamat dompet atau pilih jaringan yang ingin kamu pantau. Cukup baca-saja, tanpa izin transaksi.",
  },
  {
    step: "02",
    title: "Atur ambang batas",
    desc: "Tentukan target gas fee dan jenis transaksi. ClaimFees akan mengawasi mempool 24/7 untukmu.",
  },
  {
    step: "03",
    title: "Bertransaksi saat murah",
    desc: "Terima peringatan begitu gas turun ke targetmu, lalu eksekusi transaksi di harga terbaik.",
  },
]

export function HowItWorks() {
  return (
    <section id="how" className="border-b border-border py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <span className="font-mono text-xs uppercase tracking-widest text-primary">
            Cara kerja
          </span>
          <h2 className="mt-3 text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
            Tiga langkah untuk mulai berhemat
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
