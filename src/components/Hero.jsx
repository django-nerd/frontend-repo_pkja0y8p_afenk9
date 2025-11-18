export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-blue-50 via-white to-indigo-50" />
      <div className="absolute -top-24 -right-24 h-72 w-72 rounded-full bg-blue-200/30 blur-3xl" />
      <div className="absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-indigo-200/30 blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-blue-50 text-blue-700 ring-1 ring-blue-200">Agence digitale pour l'immobilier</span>
          <h1 className="mt-4 text-4xl sm:text-5xl font-bold tracking-tight text-slate-900">
            Attirez plus d'acheteurs avec un marketing digital sur-mesure
          </h1>
          <p className="mt-4 text-lg text-slate-600">
            Nous aidons les promoteurs et agences à vendre plus vite grâce à des campagnes performantes,
            des contenus premium et des vidéos immersives (appartements témoins et drones).
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <a href="#contact" className="inline-flex items-center justify-center px-5 py-3 rounded-lg bg-blue-600 text-white font-medium shadow hover:bg-blue-700 transition">
              Demander un devis
            </a>
            <a href="#services" className="inline-flex items-center justify-center px-5 py-3 rounded-lg bg-white text-slate-900 font-medium ring-1 ring-slate-200 hover:bg-slate-50 transition">
              Découvrir nos services
            </a>
          </div>
          <div className="mt-8 grid grid-cols-3 gap-6 text-center">
            <div>
              <p className="text-3xl font-bold text-slate-900">+120</p>
              <p className="text-slate-600 text-sm">Biens promus</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-slate-900">+35%</p>
              <p className="text-slate-600 text-sm">Leads qualifiés</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-slate-900">7j</p>
              <p className="text-slate-600 text-sm">Mise en route</p>
            </div>
          </div>
        </div>
        <div className="relative">
          <div className="aspect-[4/3] rounded-2xl bg-gradient-to-br from-slate-900 to-slate-800 p-1 shadow-xl ring-1 ring-slate-200/60">
            <div className="h-full w-full rounded-xl overflow-hidden bg-white">
              <img src="https://images.unsplash.com/photo-1523217582562-09d0def993a6?q=80&w=1200&auto=format&fit=crop" alt="Immeuble moderne" className="h-full w-full object-cover" />
            </div>
          </div>
          <div className="absolute -bottom-6 -left-6 bg-white rounded-xl p-4 shadow ring-1 ring-slate-200">
            <p className="text-sm text-slate-600">Reportage drone 4K • Montage inclus</p>
          </div>
        </div>
      </div>
    </section>
  );
}
