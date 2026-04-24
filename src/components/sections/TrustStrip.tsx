import { Container } from "@/src/components/ui/Container";

const items = [
  "Satu aplikasi untuk pembayaran pajak kendaraan",
  "Cek status",
  "Bayar online",
  "Panduan dokumen",
  "Akses dari HP",
];

export function TrustStrip() {
  return (
    <section className="border-y border-neutral-200/80 bg-white py-6">
      <Container>
        <div className="flex flex-col gap-3 md:flex-row md:flex-wrap md:items-center md:justify-between">
          {items.map((item, index) => (
            <div key={item} className="flex items-center gap-3 text-sm font-medium text-text-secondary">
              <span className="h-2 w-2 rounded-full bg-primary-600" />
              <span>{item}</span>
              {index < items.length - 1 ? (
                <span className="hidden text-neutral-300 md:inline">/</span>
              ) : null}
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
