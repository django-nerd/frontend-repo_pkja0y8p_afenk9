import { useState } from "react";

export default function Contact() {
  const [status, setStatus] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const name = form.get("name");
    setStatus(`Merci ${name}, nous vous contactons sous 24h.`);
    e.currentTarget.reset();
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">Parlons de votre projet</h2>
          <p className="mt-3 text-slate-600">Un expert vous répond sous 24 heures.</p>
        </div>

        <form onSubmit={handleSubmit} className="mt-8 grid sm:grid-cols-2 gap-4 max-w-3xl">
          <input name="name" required placeholder="Nom complet" className="px-4 py-3 rounded-lg ring-1 ring-slate-200 focus:ring-2 focus:ring-blue-500 outline-none" />
          <input name="email" required type="email" placeholder="Email" className="px-4 py-3 rounded-lg ring-1 ring-slate-200 focus:ring-2 focus:ring-blue-500 outline-none" />
          <input name="phone" placeholder="Téléphone" className="px-4 py-3 rounded-lg ring-1 ring-slate-200 focus:ring-2 focus:ring-blue-500 outline-none sm:col-span-2" />
          <textarea name="message" required rows="4" placeholder="Décrivez votre besoin" className="px-4 py-3 rounded-lg ring-1 ring-slate-200 focus:ring-2 focus:ring-blue-500 outline-none sm:col-span-2" />
          <div className="sm:col-span-2 flex items-center justify-between">
            <p className="text-sm text-slate-500">En envoyant ce formulaire, vous acceptez notre politique de confidentialité.</p>
            <button className="px-5 py-3 rounded-lg bg-blue-600 text-white font-medium shadow hover:bg-blue-700 transition">Envoyer</button>
          </div>
        </form>

        {status && (
          <div className="mt-4 text-green-700 bg-green-50 ring-1 ring-green-200 rounded-lg px-4 py-3 max-w-3xl">
            {status}
          </div>
        )}
      </div>
    </section>
  );
}
