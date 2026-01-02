import { Mail, Phone, MapPin, Clock, MessageCircle, ArrowRight, ChevronRight, Globe, Share2 } from 'lucide-react';

export default function Contact() {
  const phoneNumber = '2290190250704';
  const email = 'rolandeazk@gmail.com';
  const whatsappMessage = encodeURIComponent('Bonjour, je souhaite en savoir plus sur vos services d\'orientation.');
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${whatsappMessage}`;

  return (
    <div className="min-h-screen bg-white font-sans text-gray-900">
      
      {/* --- HERO SECTION --- */}
      <section className="relative pt-20 pb-32 overflow-hidden bg-white">
        {/* Cercles décoratifs subtils en fond */}
        <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-[600px] h-[600px] bg-[#0F6B3F]/5 rounded-full blur-3xl"></div>
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="max-w-3xl">
            <span className="inline-block px-4 py-1.5 mb-6 text-[10px] font-black tracking-[0.2em] text-[#0F6B3F] uppercase bg-[#0F6B3F]/10 rounded-full">
              Contact & Support
            </span>
            <h1 className="text-5xl md:text-7xl font-black mb-8 leading-[1.1] tracking-tighter">
              Parlons de votre <span className="text-[#0F6B3F]">avenir.</span>
            </h1>
            <p className="text-xl text-gray-500 leading-relaxed max-w-xl">
              Une question sur nos programmes ? Besoin d'un conseil immédiat ? Notre équipe est prête à vous accompagner.
            </p>
          </div>
        </div>
      </section>

      {/* --- CARTES DE CONTACT --- */}
      <section className="pb-24 -mt-16 relative z-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* WhatsApp - Carte Mise en avant */}
            <div className="bg-[#25D366] p-10 rounded-[30px] shadow-2xl shadow-green-200/40 text-white transform hover:-translate-y-2 transition-all duration-300">
              <div className="bg-white/20 w-14 h-14 rounded-[15px] flex items-center justify-center mb-10">
                <MessageCircle className="h-7 w-7" />
              </div>
              <h3 className="text-2xl font-bold mb-4">WhatsApp</h3>
              <p className="text-green-50/80 mb-8 text-sm leading-relaxed">
                Le moyen le plus efficace pour obtenir une réponse rapide à vos questions.
              </p>
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" 
                 className="inline-flex items-center justify-center w-full bg-white text-[#25D366] py-4 rounded-[15px] font-bold text-sm uppercase tracking-widest hover:bg-green-50 transition-colors">
                Démarrer le chat
              </a>
            </div>

            {/* Téléphone */}
            <div className="bg-white p-10 rounded-[30px] shadow-xl shadow-gray-100 border border-gray-100 transform hover:-translate-y-2 transition-all duration-300">
              <div className="bg-[#0F6B3F]/10 w-14 h-14 rounded-[15px] flex items-center justify-center text-[#0F6B3F] mb-10">
                <Phone className="h-7 w-7" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">Téléphone</h3>
              <p className="text-gray-500 mb-8 text-sm">Appelez-nous directement pour un échange personnalisé.</p>
              <a href={`tel:+${phoneNumber}`} className="text-[#0F6B3F] text-xl font-black hover:opacity-70 transition-opacity">
                +229 01 90 25 07 04
              </a>
            </div>

            {/* Email */}
            <div className="bg-white p-10 rounded-[30px] shadow-xl shadow-gray-100 border border-gray-100 transform hover:-translate-y-2 transition-all duration-300">
              <div className="bg-[#0F6B3F]/10 w-14 h-14 rounded-[15px] flex items-center justify-center text-[#0F6B3F] mb-10">
                <Mail className="h-7 w-7" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">Email</h3>
              <p className="text-gray-500 mb-8 text-sm">Envoyez-nous vos documents ou demandes de devis.</p>
              <a href={`mailto:${email}`} className="text-[#0F6B3F] text-lg font-black break-all hover:opacity-70 transition-opacity">
                {email}
              </a>
            </div>

          </div>
        </div>
      </section>

      {/* --- INFOS COMPLÉMENTAIRES & FAQ --- */}
      <section className="py-24 bg-gray-50/50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            
            {/* Bloc Horaires & Localisation */}
            <div className="bg-white p-12 rounded-[30px] shadow-sm border border-gray-100">
              <h2 className="text-3xl font-bold mb-10 tracking-tight">Informations de service</h2>
              
              <div className="space-y-10">
                <div className="flex gap-6">
                  <div className="w-12 h-12 bg-gray-50 rounded-[15px] flex items-center justify-center shrink-0 border border-gray-100">
                    <Clock className="h-5 w-5 text-[#0F6B3F]" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 text-lg mb-2">Disponibilité</h4>
                    <div className="grid grid-cols-2 gap-x-8 gap-y-2 text-sm text-gray-500">
                      <span>Lundi - Vendredi</span><span className="font-bold text-gray-700">08:00 - 18:00</span>
                      <span>Samedi</span><span className="font-bold text-gray-700">09:00 - 13:00</span>
                      <span>Dimanche</span><span className="text-red-400 font-bold uppercase text-[10px] tracking-widest flex items-center">Fermé</span>
                    </div>
                  </div>
                </div>

                <div className="flex gap-6">
                  <div className="w-12 h-12 bg-gray-50 rounded-[15px] flex items-center justify-center shrink-0 border border-gray-100">
                    <MapPin className="h-5 w-5 text-[#0F6B3F]" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 text-lg mb-2">Bureau principal</h4>
                    <p className="text-sm text-gray-500 leading-relaxed">
                      Cotonou, République du Bénin.<br />
                      Séances disponibles en présentiel ou en ligne.
                    </p>
                  </div>
                </div>
              </div>

              {/* Petit badge de réseaux */}
              <div className="mt-12 pt-10 border-t border-gray-50 flex items-center justify-between">
                <span className="text-xs font-bold uppercase tracking-widest text-gray-400">Suivez-nous</span>
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center text-gray-400 hover:text-[#0F6B3F] cursor-pointer transition-colors"><Globe className="h-4 w-4" /></div>
                  <div className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center text-gray-400 hover:text-[#0F6B3F] cursor-pointer transition-colors"><Share2 className="h-4 w-4" /></div>
                </div>
              </div>
            </div>

            {/* Bloc FAQ Dynamique */}
            <div className="space-y-6">
              <h2 className="text-3xl font-bold mb-10 tracking-tight">Questions fréquentes</h2>
              {[
                { q: "Le premier rendez-vous est-il vraiment gratuit ?", a: "Oui, nous offrons une séance de découverte de 30 minutes sans engagement pour évaluer vos besoins." },
                { q: "Quelles sont les modalités de paiement ?", a: "Nous acceptons les virements bancaires et les paiements mobiles locaux pour faciliter vos transactions." },
                { q: "Faites-vous de l'accompagnement post-admission ?", a: "Absolument. Notre mission continue jusqu'à votre installation et vos premiers pas dans votre nouvelle école." }
              ].map((faq, i) => (
                <div key={i} className="group bg-white p-6 rounded-[20px] border border-gray-100 hover:border-[#0F6B3F]/30 transition-all cursor-pointer">
                  <div className="flex justify-between items-center mb-3">
                    <h4 className="font-bold text-gray-900 group-hover:text-[#0F6B3F] transition-colors">{faq.q}</h4>
                    <ChevronRight className="h-4 w-4 text-gray-300 group-hover:text-[#0F6B3F] group-hover:translate-x-1 transition-all" />
                  </div>
                  <p className="text-sm text-gray-500 leading-relaxed">{faq.a}</p>
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* --- CTA FINAL --- */}
      <section className="py-32 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <div className="bg-[#0F6B3F] rounded-[30px] p-12 md:p-20 text-center relative overflow-hidden shadow-2xl shadow-green-900/20">
            {/* Décoration d'arrière-plan */}
            <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
              <svg width="100%" height="100%"><pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse"><path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="1"/></pattern><rect width="100%" height="100%" fill="url(#grid)" /></svg>
            </div>

            <h2 className="text-3xl md:text-5xl font-black text-white mb-8 relative z-10 italic">
              Un projet d'études ambitieux ?
            </h2>
            <p className="text-green-100 text-lg mb-12 max-w-2xl mx-auto relative z-10">
              Ne laissez pas vos doutes freiner votre succès. Contactez-nous maintenant et obtenez une réponse claire.
            </p>
            <div className="flex flex-col sm:flex-row gap-5 justify-center relative z-10">
              <a href={whatsappUrl} className="bg-[#25D366] text-white px-10 py-5 rounded-[15px] font-bold text-sm uppercase tracking-widest hover:scale-105 transition-all shadow-xl shadow-green-900/40">
                WhatsApp Direct
              </a>
              <a href={`mailto:${email}`} className="bg-white text-[#0F6B3F] px-10 py-5 rounded-[15px] font-bold text-sm uppercase tracking-widest hover:scale-105 transition-all shadow-xl">
                Envoyer un Email
              </a>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}