import { useState } from 'react';
import { UserPlus, CheckCircle2, Shield, ArrowRight, Loader2, Sparkles } from 'lucide-react';
import { supabase } from '../lib/supabase';

export default function Register() {
  const [formData, setFormData] = useState({
    full_name: '',
    email: '',
    phone: '',
    education_level: '',
    needs: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const { error } = await supabase.from('registrations').insert([formData]);
      if (error) throw error;
      setSubmitStatus('success');
      setFormData({ full_name: '', email: '', phone: '', education_level: '', needs: '' });
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const educationLevels = [
    'Lycée - Seconde', 'Lycée - Première', 'Lycée - Terminale',
    'Licence 1', 'Licence 2', 'Licence 3', 'Master', 'Autre'
  ];

  return (
    <div className="min-h-screen bg-gray-50/50 font-sans">
      {/* --- HEADER --- */}
      <section className="bg-[#0F6B3F] text-white pt-20 pb-32 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-10">
          <svg width="100%" height="100%"><pattern id="dots" width="20" height="20" patternUnits="userSpaceOnUse"><circle cx="2" cy="2" r="1" fill="white" /></pattern><rect width="100%" height="100%" fill="url(#dots)" /></svg>
        </div>
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-black mb-6 tracking-tighter uppercase italic">
              Prenez votre <span className="text-green-400 underline">envol</span>
            </h1>
            <p className="text-xl text-green-50 leading-relaxed">
              Inscrivez-vous en 2 minutes pour bénéficier d'un accompagnement sur mesure.
            </p>
          </div>
        </div>
      </section>

      {/* --- CONTENU PRINCIPAL --- */}
      <section className="pb-24 -mt-16 relative z-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-12 gap-12 items-start">
            
            {/* COLONNE INFOS (Gauche) */}
            <div className="lg:col-span-5 space-y-8">
              <div className="bg-white p-10 rounded-[30px] shadow-sm border border-gray-100">
                <h2 className="text-2xl font-bold text-gray-900 mb-8">Votre futur commence ici</h2>
                
                <div className="space-y-8">
                  {[
                    { icon: <UserPlus />, title: "Accès Prioritaire", desc: "Soyez les premiers informés des bourses et opportunités." },
                    { icon: <CheckCircle2 />, title: "Expert Dédié", desc: "Un conseiller qui connaît votre dossier sur le bout des doigts." },
                    { icon: <Shield />, title: "Données Sécurisées", desc: "Confidentialité totale garantie selon les normes en vigueur." }
                  ].map((item, i) => (
                    <div key={i} className="flex gap-5 group">
                      <div className="w-12 h-12 bg-[#0F6B3F]/5 rounded-[15px] flex items-center justify-center text-[#0F6B3F] shrink-0 group-hover:bg-[#0F6B3F] group-hover:text-white transition-all duration-300">
                        {item.icon}
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-900 mb-1">{item.title}</h4>
                        <p className="text-sm text-gray-500 leading-relaxed">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Petit Bonus/Timeline */}
              <div className="bg-gradient-to-br from-[#0F6B3F] to-[#0a4d2e] text-white p-10 rounded-[30px] shadow-xl">
                <div className="flex items-center gap-3 mb-6">
                  <Sparkles className="h-6 w-6 text-green-400" />
                  <h3 className="font-bold text-xl uppercase tracking-tighter">Prochaines étapes</h3>
                </div>
                <div className="space-y-4">
                  {["Analyse de votre profil", "Premier appel de 30 min", "Plan de réussite personnalisé"].map((step, i) => (
                    <div key={i} className="flex items-center gap-4 text-sm font-medium">
                      <span className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center text-[10px]">{i+1}</span>
                      {step}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* FORMULAIRE (Droite) */}
            <div className="lg:col-span-7">
              <div className="bg-white p-10 md:p-12 rounded-[30px] shadow-2xl shadow-gray-200/50 border border-gray-100">
                {submitStatus === 'success' ? (
                  <div className="text-center py-12">
                    <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                      <CheckCircle2 className="h-10 w-10 text-green-600" />
                    </div>
                    <h2 className="text-3xl font-black text-gray-900 mb-4 tracking-tighter">INSCRIPTION RÉUSSIE !</h2>
                    <p className="text-gray-500 mb-8 max-w-sm mx-auto">
                      Merci pour votre confiance. Un conseiller OPENWAY vous contactera dans les prochaines 24 heures.
                    </p>
                    <button onClick={() => setSubmitStatus('idle')} className="text-[#0F6B3F] font-bold uppercase text-xs tracking-[0.2em] border-b-2 border-[#0F6B3F]">
                      Envoyer une autre demande
                    </button>
                  </div>
                ) : (
                  <>
                    <div className="mb-10">
                      <h2 className="text-3xl font-black text-gray-900 tracking-tighter uppercase mb-2">Formulaire</h2>
                      <p className="text-gray-400 text-sm">Les champs marqués d'une étoile (*) sont obligatoires.</p>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <label className="text-[10px] font-black uppercase tracking-widest text-gray-400 ml-1">Nom Complet *</label>
                          <input required type="text" name="full_name" value={formData.full_name} onChange={handleChange} 
                            placeholder="Jean Dupont" className="w-full px-5 py-4 bg-gray-50 border-none rounded-[15px] focus:ring-2 focus:ring-[#0F6B3F] transition-all outline-none text-sm font-medium" />
                        </div>
                        <div className="space-y-2">
                          <label className="text-[10px] font-black uppercase tracking-widest text-gray-400 ml-1">Email *</label>
                          <input required type="email" name="email" value={formData.email} onChange={handleChange}
                            placeholder="jean@exemple.com" className="w-full px-5 py-4 bg-gray-50 border-none rounded-[15px] focus:ring-2 focus:ring-[#0F6B3F] transition-all outline-none text-sm font-medium" />
                        </div>
                      </div>

                      <div className="grid md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <label className="text-[10px] font-black uppercase tracking-widest text-gray-400 ml-1">Téléphone *</label>
                          <input required type="tel" name="phone" value={formData.phone} onChange={handleChange}
                            placeholder="+229 00 00 00 00" className="w-full px-5 py-4 bg-gray-50 border-none rounded-[15px] focus:ring-2 focus:ring-[#0F6B3F] transition-all outline-none text-sm font-medium" />
                        </div>
                        <div className="space-y-2">
                          <label className="text-[10px] font-black uppercase tracking-widest text-gray-400 ml-1">Niveau d'études *</label>
                          <select required name="education_level" value={formData.education_level} onChange={handleChange}
                            className="w-full px-5 py-4 bg-gray-50 border-none rounded-[15px] focus:ring-2 focus:ring-[#0F6B3F] transition-all outline-none text-sm font-medium appearance-none">
                            <option value="">Sélectionnez</option>
                            {educationLevels.map(lvl => <option key={lvl} value={lvl}>{lvl}</option>)}
                          </select>
                        </div>
                      </div>

                      <div className="space-y-2">
                        <label className="text-[10px] font-black uppercase tracking-widest text-gray-400 ml-1">Vos besoins / Objectifs *</label>
                        <textarea required name="needs" value={formData.needs} onChange={handleChange} rows={4}
                          placeholder="Décrivez votre projet en quelques mots..." 
                          className="w-full px-5 py-4 bg-gray-50 border-none rounded-[15px] focus:ring-2 focus:ring-[#0F6B3F] transition-all outline-none text-sm font-medium resize-none" />
                      </div>

                      {submitStatus === 'error' && (
                        <div className="p-4 bg-red-50 text-red-600 rounded-[15px] text-xs font-bold flex items-center gap-2">
                          Une erreur est survenue. Veuillez réessayer.
                        </div>
                      )}

                      <button type="submit" disabled={isSubmitting}
                        className="w-full bg-[#0F6B3F] text-white py-5 rounded-[15px] font-bold text-sm uppercase tracking-[0.2em] shadow-xl shadow-green-900/20 hover:bg-[#0a4d2e] hover:-translate-y-1 transition-all disabled:opacity-50 flex items-center justify-center gap-3">
                        {isSubmitting ? <Loader2 className="h-5 w-5 animate-spin" /> : <>Confirmer l'inscription <ArrowRight className="h-5 w-5" /></>}
                      </button>

                      <p className="text-center text-[10px] text-gray-400 px-8">
                        En cliquant sur "Confirmer", vous acceptez d'être contacté par notre équipe.
                      </p>
                    </form>
                  </>
                )}
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}