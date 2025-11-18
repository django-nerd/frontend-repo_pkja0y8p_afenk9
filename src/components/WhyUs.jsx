export default function WhyUs() {
  const items = [
    {
      title: "Expertise immobilière",
      desc: "Nous comprenons vos cycles de vente et les attentes de vos acquéreurs.",
    },
    {
      title: "Rapidité d'exécution",
      desc: "De la prise de brief au lancement des campagnes en moins d'une semaine.",
    },
    { title: "Transparence", desc: "Tableaux de bord clairs et rapports mensuels." },
  ];

  return (
    <section id="atouts" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">Pourquoi nous choisir</h2>
          <p className="mt-3 text-slate-600">Des résultats concrets, mesurables et rapides.</p>
        </div>

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((item) => (
            <div key={item.title} className="rounded-2xl p-6 ring-1 ring-slate-200 bg-white">
              <h3 className="font-semibold text-slate-900">{item.title}</h3>
              <p className="mt-2 text-slate-600 text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
