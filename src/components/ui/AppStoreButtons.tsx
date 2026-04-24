export function AppStoreButtons() {
  const stores = [
    { eyebrow: "Download on the", label: "App Store" },
    { eyebrow: "Get it on", label: "Google Play" },
  ];

  return (
    <div className="flex flex-col gap-3 sm:flex-row">
      {stores.map((store) => (
        <div
          key={store.label}
          className="flex min-w-[176px] items-center gap-3 rounded-full bg-neutral-900 px-5 py-3 text-white shadow-soft"
        >
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-sm font-medium">
            {store.label.slice(0, 2)}
          </div>
          <div className="leading-tight">
            <p className="text-[11px] font-medium text-neutral-300">{store.eyebrow}</p>
            <p className="text-sm font-medium">{store.label}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
