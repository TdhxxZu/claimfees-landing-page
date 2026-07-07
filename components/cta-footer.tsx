import { ArrowRight, Fuel } from "lucide-react"
import { Button } from "@/components/ui/button"

export function CtaFooter() {
  return (
    <>
      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="relative overflow-hidden rounded-3xl border border-border bg-card px-6 py-16 text-center sm:px-16">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 opacity-[0.12]"
              style={{
                backgroundImage:
                  "linear-gradient(to right, var(--border) 1px, transparent 1px), linear-gradient(to bottom, var(--border) 1px, transparent 1px)",
                backgroundSize: "40px 40px",
              }}
            />
            <div className="relative">
              <h2 className="mx-auto max-w-2xl text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
                Mulai hemat gas fee hari ini
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-pretty text-lg leading-relaxed text-muted-foreground">
                Gratis untuk memulai, tanpa kartu kredit. Pantau gas real-time dalam kurang
                dari satu menit.
              </p>
              <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
                <Button size="lg" className="gap-2">
                  Buat Akun Gratis
                  <ArrowRight className="size-4" />
                </Button>
                <Button size="lg" variant="outline">
                  Baca Dokumentasi
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-border">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <div className="flex flex-col justify-between gap-8 md:flex-row">
            <div className="max-w-xs">
              <div className="flex items-center gap-2">
                <span className="flex size-8 items-center justify-center rounded-md bg-primary text-primary-foreground">
                  <Fuel className="size-5" aria-hidden="true" />
                </span>
                <span className="text-lg font-semibold tracking-tight">ClaimFees</span>
              </div>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                Pelacak gas fee kripto real-time untuk membantumu bertransaksi lebih hemat.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-8 sm:grid-cols-3">
              <FooterCol
                title="Produk"
                links={["Fitur", "Jaringan", "Harga", "API"]}
              />
              <FooterCol
                title="Sumber Daya"
                links={["Dokumentasi", "Blog", "Status", "Panduan Gas"]}
              />
              <FooterCol
                title="Perusahaan"
                links={["Tentang", "Kontak", "Privasi", "Ketentuan"]}
              />
            </div>
          </div>

          <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-border pt-8 sm:flex-row">
            <p className="font-mono text-xs text-muted-foreground">
              © {new Date().getFullYear()} ClaimFees. Semua hak dilindungi.
            </p>
            <p className="font-mono text-xs text-muted-foreground">
              Dibuat untuk komunitas Web3.
            </p>
          </div>
        </div>
      </footer>
    </>
  )
}

function FooterCol({ title, links }: { title: string; links: string[] }) {
  return (
    <div>
      <h3 className="font-mono text-xs uppercase tracking-widest text-foreground">{title}</h3>
      <ul className="mt-4 space-y-2.5">
        {links.map((link) => (
          <li key={link}>
            <a href="#" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
              {link}
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}
