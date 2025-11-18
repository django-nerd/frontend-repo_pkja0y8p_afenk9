import { Megaphone, Share2, PenTool, Printer, Video } from "lucide-react";

const services = [
  {
    icon: Megaphone,
    title: "Marketing digital",
    desc: "Campagnes ciblées Google & Meta Ads, référencement et landing pages optimisées pour la conversion.",
  },
  {
    icon: Share2,
    title: "Gestion des réseaux sociaux",
    desc: "Calendrier éditorial, community management et reporting pour faire grandir votre audience locale.",
  },
  {
    icon: PenTool,
    title: "Création de contenu",
    desc: "Photos pro, articles SEO, brochures et visuels percutants adaptés à vos biens et à votre marque.",
  },
  {
    icon: Printer,
    title: "Impression",
    desc: "Flyers, panneaux, kakemonos et supports grand format pour vos lancements commerciaux.",
  },
  {
    icon: Video,
    title: "Vidéo appartement témoin & drone",
    desc: "Tournage 4K, visites virtuelles et prises de vues aériennes pour valoriser vos programmes.",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">Nos services</h2>
          <p className="mt-3 text-slate-600">Tout ce qu'il faut pour accélérer vos ventes immobilières.</p>
        </div>

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="group rounded-2xl ring-1 ring-slate-200 p-6 hover:shadow-lg transition bg-white">
              <div className="h-12 w-12 rounded-lg bg-blue-50 text-blue-600 grid place-items-center group-hover:scale-105 transition">
                <Icon className="h-6 w-6" />
              </div>
              <h3 className="mt-4 font-semibold text-slate-900">{title}</h3>
              <p className="mt-2 text-slate-600 text-sm">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
