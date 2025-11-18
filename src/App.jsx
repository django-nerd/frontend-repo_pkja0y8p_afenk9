import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import WhyUs from "./components/WhyUs";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <WhyUs />
        <Contact />
        <footer className="py-10 bg-slate-900 text-slate-300">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p>© {new Date().getFullYear()} Digital Immo — Tous droits réservés.</p>
            <div className="text-sm">
              <a href="#" className="hover:text-white">Mentions légales</a>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}

export default App;
