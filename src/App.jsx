import React from 'react';

export default function App() {
  const namaLengkap = "Abdullah Azzam"; 
  const inisialLogo = "AA";
  const profesi = "Frontend Developer";
  const deskripsi = "Saya adalah seorang developer yang berfokus pada pembuatan antarmuka web yang modern, responsif, dan interaktif menggunakan teknologi terbaru seperti React dan Tailwind CSS.";

  return (
    <div className="min-h-screen bg-black text-white font-['Plus_Jakarta_Sans',sans-serif] flex flex-col justify-between">
      <nav className="w-full max-w-5xl mx-auto px-6 py-5 flex justify-between items-center">
        <div className="text-xl font-bold tracking-wider">
          {inisialLogo}<span className="text-amber-400">.</span>
        </div>
        <div className="hidden md:flex space-x-8 text-sm text-zinc-400">
          <a href="#home" className="hover:text-amber-400 transition-colors">Home</a>
          <a href="#projects" className="hover:text-amber-400 transition-colors">Projects</a>
          <a href="#contact" className="hover:text-amber-400 transition-colors">Contact</a>
        </div>
      </nav>

      <main className="flex-grow flex flex-col items-center justify-center text-center px-4 py-12 max-w-3xl mx-auto">
        <div className="relative mb-8 group">
          <div className="absolute inset-0 bg-amber-400 rounded-[40%_60%_70%_30%_/_40%_50%_60%_55%] blur-xl opacity-20 group-hover:opacity-40 transition-opacity duration-500"></div>
          <img 
            src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&h=400&q=80" 
            alt={`Foto Profil Resmi ${namaLengkap}`} 
            className="w-40 h-40 object-cover border-2 border-amber-400/50 bg-zinc-900 shadow-2xl transition-all duration-500 hover:scale-105
                       rounded-[40%_60%_70%_30%_/_40%_50%_60%_55%]" 
          />
        </div>
        <p className="text-amber-400 font-medium tracking-widest text-xs uppercase mb-3">
          {profesi}
        </p>
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-white mb-4">
          Halo, Saya <span className="text-amber-400">{namaLengkap}</span>
        </h1>
        <p className="text-zinc-400 text-base md:text-lg leading-relaxed max-w-xl mb-8">
          {deskripsi}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button className="px-6 py-3 bg-amber-400 text-black font-semibold rounded-lg hover:bg-amber-500 transition-colors shadow-lg shadow-amber-400/20 w-full sm:w-auto">
            Hubungi Saya
          </button>
          <button className="px-6 py-3 border border-zinc-700 text-zinc-300 font-medium rounded-lg hover:bg-zinc-900 hover:text-white transition-colors w-full sm:w-auto">
            Lihat Portofolio
          </button>
        </div>
      </main>
      <footer className="w-full max-w-5xl mx-auto px-6 py-6 border-t border-zinc-900 text-center text-xs text-zinc-500">
        <p>© {new Date().getFullYear()} {namaLengkap}. All rights reserved.</p>
      </footer>

    </div>
  );
}