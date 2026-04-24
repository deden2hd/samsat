import { ArrowRight, Bell, CarFront, CreditCard, FileText, ShieldCheck } from "lucide-react";

export function PhoneMockup() {
  return (
    <div className="relative mx-auto w-full max-w-[320px]">
      <div className="rounded-[2.75rem] border border-white/70 bg-white p-3 shadow-card">
        <div className="overflow-hidden rounded-[2.2rem] border border-neutral-200 bg-neutral-50">
          <div className="bg-primary-600 px-5 pb-6 pt-5 text-white">
            <div className="mb-5 flex items-center justify-between text-sm font-medium">
              <span>SIGNAL</span>
              <Bell className="h-4 w-4" />
            </div>
            <div className="space-y-2">
              <p className="text-sm text-primary-100">Pembayaran pajak kendaraan</p>
              <h3 className="text-2xl font-medium leading-tight tracking-[-0.02em]">
                Siap lanjut bayar
              </h3>
            </div>
          </div>

          <div className="space-y-4 p-4">
            <div className="rounded-3xl bg-white p-4 shadow-soft">
              <div className="mb-3 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="rounded-2xl bg-primary-50 p-2 text-primary-700">
                    <CarFront className="h-4 w-4" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-text-primary">B 1234 SIGNAL</p>
                    <p className="text-xs text-text-muted">Pajak tahunan</p>
                  </div>
                </div>
                <span className="rounded-full bg-green-50 px-3 py-1 text-xs font-medium text-green-700">
                  Aktif
                </span>
              </div>
              <div className="rounded-2xl bg-primary-50 px-4 py-3">
                <p className="text-xs font-medium uppercase tracking-[0.08em] text-primary-700">
                  Estimasi
                </p>
                <p className="mt-1 text-xl font-medium tracking-[-0.02em] text-text-primary">
                  Rp742.000
                </p>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-3">
              {[
                { icon: FileText, label: "Dokumen" },
                { icon: ShieldCheck, label: "Status" },
                { icon: CreditCard, label: "Bayar" },
              ].map(({ icon: Icon, label }) => (
                <div key={label} className="rounded-2xl bg-white p-3 text-center shadow-soft">
                  <div className="mx-auto mb-2 flex h-9 w-9 items-center justify-center rounded-full bg-primary-50 text-primary-700">
                    <Icon className="h-4 w-4" />
                  </div>
                  <p className="text-xs font-medium text-text-primary">{label}</p>
                </div>
              ))}
            </div>

            <button className="flex w-full items-center justify-center gap-2 rounded-full bg-primary-600 px-5 py-4 text-sm font-medium text-white shadow-floating transition duration-200 hover:bg-primary-700">
              Bayar sekarang
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
