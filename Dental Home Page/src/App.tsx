import React from 'react';
import { Languages } from 'lucide-react';

function App() {
  const handleLanguageSelect = (lang: string) => {
    // Placeholder URLs - replace these with actual URLs
    const urls = {
      english: 'https://dental-learning-english.netlify.app/',
      hindi: 'https://dental-learning-hindi.netlify.app/',
      marathi: 'https://dental-learning-marathi.netlify.app/'
    };
    window.location.href = urls[lang as keyof typeof urls];
  };

  return (
    <div 
      className="min-h-screen flex items-center justify-center p-4 bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: 'url("/assets/College photo.jpg")',
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/30 via-blue-900/30 to-teal-900/30"></div>
      
      <div className="gradient-border">
        <div className="max-w-md w-full glassmorphism rounded-xl p-8 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 via-blue-500/10 to-teal-500/10"></div>
          
          <div className="relative">
            <div className="flex items-center justify-center mb-8">
              <Languages className="w-12 h-12 text-white animate-pulse" />
            </div>
            
            <div className="space-y-4 text-center mb-8">
              <h1 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-blue-200">
                Choose Your Language
              </h1>
              <p className="text-2xl font-semibold text-white/90">भाषा चुनें</p>
              <p className="text-2xl font-semibold text-white/90">तुमची भाषा निवडा</p>
            </div>

            <div className="space-y-4">
              <button
                onClick={() => handleLanguageSelect('english')}
                className="group w-full py-3 px-4 bg-gradient-to-r from-rose-500/30 via-pink-500/30 to-purple-500/30 hover:from-rose-500/50 hover:via-pink-500/50 hover:to-purple-500/50 text-white rounded-lg transition-all duration-500 font-semibold backdrop-blur-sm border border-white/20 hover:border-white/40 hover:scale-[1.02] hover:shadow-[0_0_20px_rgba(255,0,128,0.3)] relative overflow-hidden"
              >
                <span className="relative z-10 group-hover:animate-pulse">English</span>
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1),transparent_50%)]"></div>
              </button>
              
              <button
                onClick={() => handleLanguageSelect('hindi')}
                className="group w-full py-3 px-4 bg-gradient-to-r from-amber-500/30 via-orange-500/30 to-red-500/30 hover:from-amber-500/50 hover:via-orange-500/50 hover:to-red-500/50 text-white rounded-lg transition-all duration-500 font-semibold backdrop-blur-sm border border-white/20 hover:border-white/40 hover:scale-[1.02] hover:shadow-[0_0_20px_rgba(255,128,0,0.3)] relative overflow-hidden"
              >
                <span className="relative z-10 group-hover:animate-pulse">हिंदी</span>
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1),transparent_50%)]"></div>
              </button>
              
              <button
                onClick={() => handleLanguageSelect('marathi')}
                className="group w-full py-3 px-4 bg-gradient-to-r from-emerald-500/30 via-teal-500/30 to-cyan-500/30 hover:from-emerald-500/50 hover:via-teal-500/50 hover:to-cyan-500/50 text-white rounded-lg transition-all duration-500 font-semibold backdrop-blur-sm border border-white/20 hover:border-white/40 hover:scale-[1.02] hover:shadow-[0_0_20px_rgba(0,255,128,0.3)] relative overflow-hidden"
              >
                <span className="relative z-10 group-hover:animate-pulse">मराठी</span>
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1),transparent_50%)]"></div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;