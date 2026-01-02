import { Link } from 'react-router-dom';
import { Compass, Users, Target, Shield, CheckCircle2, ArrowRight, Calendar, BookOpen } from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-screen font-sans bg-white text-gray-900">
      
      {/* --- SECTION HERO --- */}
      <section className="relative bg-gradient-to-br from-[#0F6B3F] to-[#0a4d2e] text-white py-20 md:py-32 overflow-hidden">
        {/* Cercles décoratifs en arrière-plan */}
        <div className="absolute top-0 right-0 -mt-20 -mr-20 w-64 h-64 bg-white/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 -mb-20 -ml-20 w-64 h-64 bg-black/10 rounded-full blur-3xl"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center md:text-left">
          <div className="max-w-3xl mx-auto md:mx-0">
            <h1 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight">
              Réussir son orientation académique avec méthode
            </h1>
            <p className="text-lg md:text-2xl text-green-50 mb-10 leading-relaxed">
              OPENWAY vous guide vers les meilleures décisions pour votre avenir académique et professionnel.
            </p>
            <div className="flex flex-col sm:flex-row gap-5 justify-center md:justify-start">
              <Link
                to="/booking"
                className="bg-white text-[#0F6B3F] px-8 py-4 rounded-[15px] font-bold hover:bg-gray-100 transition-all shadow-xl text-center flex items-center justify-center gap-2"
              >
                <Calendar className="h-5 w-5" />
                Réserver un appel
              </Link>
              <Link
                to="/register"
                className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-[15px] font-bold hover:bg-white/10 transition-all text-center"
              >
                S'inscrire maintenant
              </Link>
            </div>
          </div>
        </div>
        {/* Transition vers le bas */}
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent"></div>
      </section>

      {/* --- SECTION QUI SOMMES-NOUS --- */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Qui sommes-nous ?</h2>
            <div className="w-20 h-1.5 bg-[#0F6B3F] mx-auto rounded-full mb-6"></div>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto italic px-4">
              OPENWAY est un centre d'orientation et d'accompagnement académique dédié à la réussite des étudiants.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="text-center md:text-left space-y-6 px-4">
              <p className="text-gray-700 text-lg leading-relaxed">
                Dans un monde où les parcours académiques sont de plus en plus diversifiés,
                bénéficier d'un accompagnement personnalisé est devenu essentiel.
              </p>
              <p className="text-gray-700 text-lg leading-relaxed font-medium">
                Notre mission : vous fournir les outils et les conseils pour prendre des décisions éclairées.
              </p>
            </div>
            
            {/* Carte Focus */}
            <div className="bg-gray-50 p-8 md:p-10 rounded-[25px] border border-gray-200 shadow-sm mx-4">
              <h3 className="text-xl font-bold text-[#0F6B3F] mb-6 flex items-center justify-center md:justify-start gap-2">
                <BookOpen className="h-6 w-6" />
                L'essentiel de l'orientation
              </h3>
              <ul className="space-y-4">
                {[
                  "Éviter les erreurs de parcours coûteuses",
                  "Maximiser vos chances de réussite académique",
                  "Accéder à des opportunités internationales"
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3 text-left">
                    <CheckCircle2 className="h-6 w-6 text-[#0F6B3F] flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700 font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* --- SECTION SERVICES (CARTES VISIBLES) --- */}
      <section className="py-20 bg-gray-50 border-y border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Nos services clés</h2>
            <p className="text-gray-600">Un accompagnement complet pour votre succès</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 px-4">
            {services.map((service, index) => (
              <div key={index} className="bg-white p-8 rounded-[20px] border border-gray-100 shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-300 text-center flex flex-col items-center">
                <div className="bg-[#0F6B3F]/10 p-4 rounded-2xl mb-6 text-[#0F6B3F]">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- SECTION POURQUOI CHOISIR --- */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Pourquoi choisir OPENWAY ?</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-12 px-4">
            {reasons.map((reason, index) => (
              <div key={index} className="flex flex-col items-center text-center group">
                <div className="bg-[#0F6B3F]/10 w-20 h-20 rounded-full flex items-center justify-center mb-6 transition-colors group-hover:bg-[#0F6B3F]/20">
                  {reason.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{reason.title}</h3>
                <p className="text-gray-600 leading-relaxed">{reason.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- SECTION FINALE (CTA CARTE DÉGRADÉ) --- */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative overflow-hidden bg-gradient-to-br from-[#0F6B3F] to-[#0a4d2e] rounded-[30px] p-10 md:p-16 text-center shadow-2xl">
            
            {/* Décoration de carte */}
            <div className="absolute top-0 right-0 -mt-10 -mr-10 w-40 h-40 bg-white/10 rounded-full blur-3xl"></div>

            <div className="relative z-10">
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 italic leading-tight">
                Prêt à construire votre avenir ?
              </h2>
              <p className="text-lg md:text-xl text-green-50 mb-10 max-w-2xl mx-auto">
                Prenez rendez-vous dès aujourd'hui pour un entretien d'orientation personnalisé.
              </p>
              
              <Link
                to="/booking"
                className="
                  inline-flex items-center gap-3 
                  bg-white text-[#0F6B3F] 
                  px-10 py-5 rounded-[15px] 
                  font-bold text-lg
                  transition-all duration-300
                  border-4 border-transparent
                  hover:bg-transparent hover:text-white hover:border-double hover:border-white
                  shadow-xl
                "
              >
                Réserver mon appel gratuit
                <ArrowRight className="h-6 w-6" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

// Configuration des données pour la propreté du code
const services = [
  {
    icon: <Compass className="h-8 w-8" />,
    title: "Orientation académique",
    desc: "Nous identifions les filières et établissements qui correspondent le mieux à votre profil et vos ambitions."
  },
  {
    icon: <Users className="h-8 w-8" />,
    title: "Accompagnement personnalisé",
    desc: "Un suivi individualisé adapté à votre situation unique, vos besoins et vos objectifs personnels."
  },
  {
    icon: <Target className="h-8 w-8" />,
    title: "Suivi étudiant",
    desc: "Un accompagnement continu tout au long de votre parcours pour garantir votre réussite académique."
  }
];

const reasons = [
  {
    icon: <Users className="h-10 w-10 text-[#0F6B3F]" />,
    title: "Approche humaine",
    desc: "Nous prenons le temps de vous connaître et de comprendre vos aspirations profondes."
  },
  {
    icon: <Target className="h-10 w-10 text-[#0F6B3F]" />,
    title: "Expertise académique",
    desc: "Une connaissance approfondie des systèmes éducatifs et des opportunités disponibles."
  },
  {
    icon: <Shield className="h-10 w-10 text-[#0F6B3F]" />,
    title: "Confidentialité",
    desc: "Vos informations et échanges restent strictement confidentiels et sécurisés."
  }
];