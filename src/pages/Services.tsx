import { Compass, Users, BookOpen, TrendingUp, CheckCircle2, MessageSquare, ArrowRight, RotateCw } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useState } from 'react';

export default function Services() {
  const services = [
    {
      icon: <Compass className="h-10 w-10" />,
      title: 'Orientation académique',
      description: 'Identification des filières et établissements adaptés à votre profil.',
      benefits: [
        'Analyse de profil académique',
        'Filières à fort potentiel',
        'Choix d\'établissements ciblés',
        'Débouchés professionnels',
      ],
    },
    {
      icon: <BookOpen className="h-10 w-10" />,
      title: 'Conseils de parcours',
      description: 'Stratégie pour optimiser votre cursus et vos admissions.',
      benefits: [
        'Planification de cursus',
        'Choix de spécialisations',
        'Dossiers d\'admission',
        'Optimisation académique',
      ],
    },
    {
      icon: <TrendingUp className="h-10 w-10" />,
      title: 'Aide à la décision',
      description: 'Accompagnement dans les moments clés du parcours.',
      benefits: [
        'Évaluation d\'options',
        'Analyse forces/faiblesses',
        'Clarification objectifs',
        'Support aux choix',
      ],
    },
    {
      icon: <Users className="h-10 w-10" />,
      title: 'Accompagnement Mixte',
      description: 'Dialogue constructif entre parents et étudiants.',
      benefits: [
        'Séances familiales',
        'Facilitation dialogue',
        'Conseils aux parents',
        'Attentes alignées',
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-white font-sans">
      
      {/* --- HEADER --- */}
      <section className="bg-gradient-to-br from-[#0F6B3F] to-[#0a4d2e] text-white py-20">
        <div className="max-w-7xl mx-auto px-6 text-center md:text-left">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight uppercase tracking-tight">Nos services</h1>
          <p className="text-xl text-green-50 max-w-2xl leading-relaxed">
            Un accompagnement d'excellence avec une méthodologie rigoureuse.
          </p>
        </div>
      </section>

      {/* --- SECTION DES CARTES 3D --- */}
      <section className="py-24 bg-gray-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Solutions d'orientation</h2>
            <div className="flex justify-center items-center gap-2 text-[#0F6B3F] font-bold">
              <RotateCw className="h-5 w-5 animate-spin-slow" />
              <span className="text-sm uppercase tracking-widest">Cliquez pour retourner les cartes</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            {services.map((service, index) => (
              <ServiceCard3D key={index} service={service} />
            ))}
          </div>
        </div>
      </section>

      {/* --- SECTION MÉTHODOLOGIE (ARRONDIS 30PX) --- */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="bg-gray-50 rounded-[30px] border border-gray-100 p-8 md:p-16 shadow-sm">
            <div className="max-w-4xl mx-auto text-center">
              <div className="bg-[#0F6B3F]/10 w-20 h-20 rounded-[15px] flex items-center justify-center mx-auto mb-8 text-[#0F6B3F]">
                <MessageSquare className="h-10 w-10" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Notre approche personnalisée</h2>
              <p className="text-lg text-gray-600 mb-12">
                Chaque parcours est unique. Nous adaptons nos outils pour un succès sur mesure.
              </p>
              
              <div className="grid md:grid-cols-3 gap-10 text-left">
                {[
                  { step: "1", title: "Écoute", desc: "Analyse de profil." },
                  { step: "2", title: "Planification", desc: "Plan stratégique." },
                  { step: "3", title: "Réussite", desc: "Suivi continu." }
                ].map((item, i) => (
                  <div key={i} className="relative p-6 bg-white rounded-[15px] border border-gray-100 shadow-sm">
                    <div className="text-4xl font-black text-[#0F6B3F]/10 absolute top-4 right-6">{item.step}</div>
                    <h3 className="font-bold text-gray-900 mb-2">{item.title}</h3>
                    <p className="text-sm text-gray-500">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- SECTION FINALE (BORDURES & COULEURS RESPECTÉES) --- */}
      <section className="py-24 bg-gray-50 border-t border-gray-200">
        <div className="max-w-5xl mx-auto px-6">
          {/* Carte CTA avec rounded-30px */}
          <div className="bg-gradient-to-br from-[#0F6B3F] to-[#0a4d2e] rounded-[30px] p-12 text-center text-white shadow-2xl relative overflow-hidden group">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 italic">Prêt à faire le bon choix ?</h2>
            <p className="text-xl text-green-50 mb-10 max-w-2xl mx-auto">
              Réservez votre appel d'orientation gratuit dès maintenant.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              {/* Bouton CTA avec rounded-15px */}
              <Link
                to="/booking"
                className="bg-white text-[#0F6B3F] px-10 py-5 rounded-[15px] font-bold text-lg hover:shadow-xl transition-all flex items-center gap-2"
              >
                Réserver un appel
                <ArrowRight className="h-5 w-5" />
              </Link>
              <Link
                to="/register"
                className="bg-transparent border-2 border-white/50 text-white px-10 py-5 rounded-[15px] font-bold text-lg hover:bg-white/10 transition-all"
              >
                S'inscrire en ligne
              </Link>
            </div>
          </div>
        </div>
      </section>

      <style>{`
        .perspective-1000 { perspective: 1200px; }
        .preserve-3d { transform-style: preserve-3d; transition: transform 0.8s cubic-bezier(0.4, 0, 0.2, 1); }
        .backface-hidden { backface-visibility: hidden; }
        .rotate-y-180 { transform: rotateY(180deg); }
        .animate-spin-slow { animation: spin 8s linear infinite; }
        @keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
      `}</style>
    </div>
  );
}

// COMPOSANT CARTE 3D AVEC RESPECT DES BORDURES
function ServiceCard3D({ service }: { service: any }) {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div 
      className="h-[420px] w-full perspective-1000 group cursor-pointer"
      onClick={() => setIsFlipped(!isFlipped)}
    >
      <div className={`relative w-full h-full preserve-3d ${isFlipped ? 'rotate-y-180' : ''}`}>
        
        {/* FACE AVANT - Rounded 30px */}
        <div className="absolute inset-0 backface-hidden bg-white border border-gray-100 rounded-[30px] p-8 flex flex-col items-center justify-center text-center shadow-lg group-hover:shadow-2xl transition-all">
          {/* Icon Box - Rounded 15px */}
          <div className="bg-[#0F6B3F]/10 p-6 rounded-[15px] text-[#0F6B3F] mb-6">
            {service.icon}
          </div>
          <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
          <p className="text-gray-500 text-sm leading-relaxed">{service.description}</p>
          {/* Badge - Rounded 15px */}
          <div className="mt-8 px-6 py-2 bg-gray-50 rounded-[15px] text-[10px] font-bold uppercase tracking-widest text-[#0F6B3F] border border-gray-200">
            Détails
          </div>
        </div>

        {/* FACE ARRIÈRE - Rounded 30px */}
        <div className="absolute inset-0 backface-hidden bg-[#0F6B3F] text-white rounded-[30px] p-8 flex flex-col rotate-y-180 shadow-2xl overflow-hidden border-4 border-white/10">
          <div className="relative z-10">
            <h3 className="text-xl font-bold mb-8 border-b border-white/10 pb-4 flex items-center gap-2">
              <CheckCircle2 className="h-6 w-6 text-green-400" />
              Inclus
            </h3>
            <ul className="space-y-4">
              {service.benefits.map((benefit: string, i: number) => (
                <li key={i} className="flex items-center gap-3 text-sm font-medium">
                  <div className="w-1.5 h-1.5 bg-green-400 rounded-full"></div>
                  {benefit}
                </li>
              ))}
            </ul>
          </div>
          <div className="mt-auto text-center text-[10px] uppercase font-bold text-green-300">
            Retourner
          </div>
        </div>

      </div>
    </div>
  );
}