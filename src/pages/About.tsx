import { GraduationCap, Heart, Users, Target, Award, BookOpen, ShieldCheck, Sparkles } from 'lucide-react';

export default function About() {
  return (
    <div className="min-h-screen bg-white font-sans">
      
      {/* --- 1. HEADER HERO --- */}
      <section className="relative bg-gradient-to-br from-[#0F6B3F] to-[#0a4d2e] text-white py-20 overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -mr-20 -mt-20"></div>
        <div className="relative max-w-7xl mx-auto px-6 text-center md:text-left">
          <span className="inline-block px-4 py-1.5 mb-4 text-xs font-bold tracking-widest text-green-300 uppercase bg-white/10 rounded-full">
            Notre Identité
          </span>
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight">À propos de OPENWAY</h1>
          <p className="text-xl text-green-50 max-w-2xl leading-relaxed mx-auto md:mx-0">
            Plus qu'un centre d'orientation, un véritable partenaire pour tracer votre chemin vers l'excellence académique.
          </p>
        </div>
      </section>

      {/* --- 2. HISTOIRE (Fond Blanc) --- */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="space-y-6 text-center md:text-left">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                Une vision née d'une <span className="text-[#0F6B3F]">conviction profonde</span>
              </h2>
              <div className="w-20 h-1.5 bg-[#0F6B3F] mx-auto md:mx-0 rounded-full"></div>
              <div className="space-y-4 text-gray-600 text-lg leading-relaxed">
                <p>
                  OPENWAY est né du constat que de nombreux talents s'égarent faute d'informations fiables et d'un accompagnement personnalisé.
                </p>
                <p>
                  Nous croyons que chaque étudiant possède un potentiel unique qui ne demande qu'à être orienté vers la bonne filière pour s'épanouir.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-6">
              {[
                { 
                  icon: <Heart className="h-6 w-6" />, 
                  title: "Notre Passion", 
                  desc: "Révéler les ambitions cachées et transformer les doutes en projets d'avenir concrets." 
                },
                { 
                  icon: <Target className="h-6 w-6" />, 
                  title: "Notre Objectif", 
                  desc: "Démocratiser l'expertise en orientation pour la rendre accessible à chaque famille." 
                }
              ].map((item, i) => (
                <div key={i} className="flex flex-col md:flex-row items-center md:items-start gap-5 p-6 bg-gray-50 rounded-[20px] border border-gray-100 shadow-sm hover:shadow-md transition-all">
                  <div className="bg-white p-4 rounded-xl shadow-sm text-[#0F6B3F]">
                    {item.icon}
                  </div>
                  <div className="text-center md:text-left">
                    <h3 className="font-bold text-gray-900 text-xl mb-2">{item.title}</h3>
                    <p className="text-gray-600">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* --- 3. VISION & MISSION (Fond Gris très clair pour distinguer) --- */}
      <section className="py-24 bg-gray-50 border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-10 rounded-[30px] shadow-sm border border-gray-100 relative group overflow-hidden">
              <div className="bg-[#0F6B3F]/10 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 text-[#0F6B3F]">
                <Target className="h-8 w-8" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Notre Vision</h3>
              <p className="text-gray-600 leading-relaxed text-lg">
                Devenir la référence incontournable de l'orientation académique en Afrique, en créant un pont solide entre les aspirations des jeunes et les réalités du marché.
              </p>
            </div>

            <div className="bg-white p-10 rounded-[30px] shadow-sm border border-gray-100 relative group overflow-hidden">
              <div className="bg-[#0F6B3F]/10 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 text-[#0F6B3F]">
                <Award className="h-8 w-8" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Notre Mission</h3>
              <p className="text-gray-600 leading-relaxed text-lg">
                Accompagner les familles par des conseils experts, des outils d'évaluation innovants et un suivi rigoureux pour garantir une insertion académique réussie.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* --- 4. PUBLIC CIBLE (Cartes Vertes) --- */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-16 text-gray-900">À qui s'adresse OPENWAY ?</h2>
          <div className="grid md:grid-cols-3 gap-8 px-4">
            {[
              { 
                icon: <BookOpen className="h-8 w-8" />, 
                title: "Étudiants", 
                desc: "Lycéens ou universitaires cherchant une voie alignée avec leurs talents." 
              },
              { 
                icon: <Users className="h-8 w-8" />, 
                title: "Parents", 
                desc: "Besoin de conseils stratégiques pour l'avenir et l'investissement de vos enfants." 
              },
              { 
                icon: <ShieldCheck className="h-8 w-8" />, 
                title: "Nouveaux Bacheliers", 
                desc: "Un accompagnement intensif pour ne pas rater le virage de l'après-bac." 
              }
            ].map((target, i) => (
              <div key={i} className="group bg-gradient-to-br from-[#0F6B3F] to-[#0a4d2e] p-10 rounded-[25px] text-white hover:scale-105 transition-all duration-300 shadow-xl flex flex-col items-center">
                <div className="bg-white/10 w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:bg-white group-hover:text-[#0F6B3F] transition-colors">
                  {target.icon}
                </div>
                <h3 className="text-xl font-bold mb-4">{target.title}</h3>
                <p className="text-green-50/80 leading-relaxed">{target.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- 5. VALEURS (DERNIÈRE SECTION - VARIE POUR LE FOOTER) --- */}
      {/* Ici, on utilise un fond blanc ou gris très léger pour ne pas "fusionner" avec le vert du footer qui suit */}
      <section className="py-24 bg-gray-50 border-t border-gray-200 text-center">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-16 text-gray-900">Nos valeurs fondamentales</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
            {[
              { val: "Écoute", desc: "Comprendre avant de conseiller." },
              { val: "Expertise", desc: "La rigueur du savoir académique." },
              { val: "Bienveillance", desc: "Le respect de chaque parcours." },
              { val: "Excellence", desc: "Viser le meilleur pour vous." }
            ].map((v, i) => (
              <div key={i} className="space-y-4">
                <div className="w-16 h-16 rounded-full border-4 border-[#0F6B3F] flex items-center justify-center mx-auto text-2xl font-black text-[#0F6B3F]">
                  {i + 1}
                </div>
                <h3 className="text-xl font-bold text-gray-900">{v.val}</h3>
                <p className="text-sm text-gray-500 font-medium">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}