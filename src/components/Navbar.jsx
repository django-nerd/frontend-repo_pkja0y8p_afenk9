import { Menu } from "lucide-react";

export default function Navbar() {
  return (
    <header className="fixed top-0 inset-x-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-white/60 bg-white/80 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2">
          <span className="h-9 w-9 rounded-lg bg-gradient-to-tr from-blue-600 to-indigo-500 text-white grid place-items-center font-bold shadow-sm">DM</span>
          <span className="font-semibold text-slate-900">Digital Immo</span>
        </a>
        <nav className="hidden md:flex items-center gap-8 text-sm text-slate-700">
          <a href="#services" className="hover:text-blue-600 transition">Services</a>
          <a href="#atouts" className="hover:text-blue-600 transition">Pourquoi nous</a>
          <a href="#contact" className="hover:text-blue-600 transition">Contact</a>
        </nav>
        <button className="md:hidden p-2 rounded-md hover:bg-slate-100" aria-label="Menu">
          <Menu className="h-6 w-6 text-slate-700" />
        </button>
      </div>
    </header>
  );
}
