import { useState } from 'react';
import { Calendar, Clock, Shield, CheckCircle2, Phone, Mail, User, MessageSquare, ArrowRight, Sparkles } from 'lucide-react';
import { supabase } from '../lib/supabase';

export default function Booking() {
  const [formData, setFormData] = useState({
    full_name: '',
    email: '',
    phone: '',
    preferred_date: '',
    preferred_time: '',
    reason: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const { error } = await supabase.from('bookings').insert([formData]);
      if (error) throw error;
      setSubmitStatus('success');
      setFormData({
        full_name: '',
        email: '',
        phone: '',
        preferred_date: '',
        preferred_time: '',
        reason: '',
      });
    } catch (error) {
      console.error('Error submitting booking:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const timeSlots = [
    '08:00 - 09:00', '09:00 - 10:00', '10:00 - 11:00', '11:00 - 12:00',
    '14:00 - 15:00', '15:00 - 16:00', '16:00 - 17:00', '17:00 - 18:00',
  ];

  return (
    <div className="min-h-screen bg-white font-sans">
      {/* --- HEADER HERO --- */}
      <section className="bg-gradient-to-br from-[#0F6B3F] to-[#0a4d2e] text-white py-20 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl -mr-32 -mt-32"></div>
        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center md:text-left">
          <span className="inline-block px-4 py-1 mb-4 text-xs font-bold tracking-widest text-green-300 uppercase bg-white/10 rounded-full">
            Consultation Gratuite
          </span>
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight uppercase">Réserver un appel</h1>
          <p className="text-xl text-green-50 max-w-2xl leading-relaxed">
            Prenez 30 minutes pour transformer votre avenir académique avec l'un de nos experts.
          </p>
        </div>
      </section>

      {/* --- MAIN CONTENT --- */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-12 gap-16 items-start">
            
            {/* --- LEFT COLUMN: INFO (4 cols) --- */}
            <div className="lg:col-span-5 space-y-8">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Comment ça se passe ?</h2>
                <p className="text-gray-600 mb-10 text-lg leading-relaxed">
                  Un échange privilégié pour comprendre vos besoins et tracer les premières pistes de votre réussite.
                </p>
              </div>

              <div className="space-y-6">
                {[
                  { icon: <Calendar />, title: "Durée flexible", desc: "30 à 45 minutes d'échange approfondi." },
                  { icon: <Phone />, title: "Format direct", desc: "Appel téléphonique ou visio selon votre choix." },
                  { icon: <Shield />, title: "100% Confidentiel", desc: "Vos données et projets restent protégés." }
                ].map((item, i) => (
                  <div key={i} className="flex gap-5 p-6 bg-white rounded-[15px] border border-gray-100 shadow-sm hover:shadow-md transition-all group">
                    <div className="bg-[#0F6B3F]/10 p-4 rounded-[15px] text-[#0F6B3F] group-hover:bg-[#0F6B3F] group-hover:text-white transition-colors">
                      {item.icon}
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 mb-1">{item.title}</h3>
                      <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="bg-gradient-to-br from-[#0F6B3F] to-[#0a4d2e] p-8 rounded-[30px] text-white shadow-xl relative overflow-hidden">
                <Sparkles className="absolute top-4 right-4 text-white/20 h-12 w-12" />
                <h3 className="font-bold text-xl mb-4">Points abordés :</h3>
                <ul className="space-y-3">
                  {["Analyse de votre parcours", "Identification des blocages", "Options stratégiques"].map((text, i) => (
                    <li key={i} className="flex items-center gap-3 text-sm text-green-50">
                      <CheckCircle2 className="h-5 w-5 text-green-400" /> {text}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* --- RIGHT COLUMN: FORM (7 cols) --- */}
            <div className="lg:col-span-7">
              <div className="bg-white rounded-[30px] shadow-2xl shadow-gray-200/50 p-8 md:p-12 border border-gray-100 relative">
                
                {/* SUCCESS OVERLAY */}
                {submitStatus === 'success' && (
                  <div className="absolute inset-0 z-50 bg-white rounded-[30px] flex flex-col items-center justify-center text-center p-8 animate-in fade-in zoom-in duration-300">
                    <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mb-6">
                      <CheckCircle2 className="h-12 w-12 text-[#0F6B3F]" />
                    </div>
                    <h2 className="text-3xl font-bold text-gray-900 mb-4">C'est réservé !</h2>
                    <p className="text-gray-600 max-w-xs mx-auto mb-8">
                      Votre demande a bien été enregistrée. Un conseiller OPENWAY vous contactera sous 24h.
                    </p>
                    <button 
                      onClick={() => setSubmitStatus('idle')}
                      className="bg-[#0F6B3F] text-white px-8 py-4 rounded-[15px] font-bold hover:bg-[#0a4d2e] transition-all"
                    >
                      Nouvelle réservation
                    </button>
                  </div>
                )}

                <h2 className="text-2xl font-black text-gray-900 mb-8 uppercase tracking-tight">Formulaire de réservation</h2>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-xs font-bold uppercase text-gray-400 ml-1">Nom Complet</label>
                      <div className="relative">
                        <User className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-300" />
                        <input
                          type="text" name="full_name" required
                          placeholder="Ex: Jean Dupont"
                          value={formData.full_name} onChange={handleChange}
                          className="w-full pl-12 pr-4 py-4 bg-gray-50 border border-gray-100 rounded-[15px] focus:ring-2 focus:ring-[#0F6B3F] focus:bg-white outline-none transition-all"
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-bold uppercase text-gray-400 ml-1">Email</label>
                      <div className="relative">
                        <Mail className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-300" />
                        <input
                          type="email" name="email" required
                          placeholder="votre@email.com"
                          value={formData.email} onChange={handleChange}
                          className="w-full pl-12 pr-4 py-4 bg-gray-50 border border-gray-100 rounded-[15px] focus:ring-2 focus:ring-[#0F6B3F] focus:bg-white outline-none transition-all"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-xs font-bold uppercase text-gray-400 ml-1">Téléphone</label>
                      <div className="relative">
                        <Phone className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-300" />
                        <input
                          type="tel" name="phone" required
                          placeholder="+229 00 00 00 00"
                          value={formData.phone} onChange={handleChange}
                          className="w-full pl-12 pr-4 py-4 bg-gray-50 border border-gray-100 rounded-[15px] focus:ring-2 focus:ring-[#0F6B3F] focus:bg-white outline-none transition-all"
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-bold uppercase text-gray-400 ml-1">Date souhaitée</label>
                      <input
                        type="date" name="preferred_date" required
                        min={new Date().toISOString().split('T')[0]}
                        value={formData.preferred_date} onChange={handleChange}
                        className="w-full px-4 py-4 bg-gray-50 border border-gray-100 rounded-[15px] focus:ring-2 focus:ring-[#0F6B3F] focus:bg-white outline-none transition-all"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase text-gray-400 ml-1">Créneau horaire</label>
                    <div className="relative">
                      <Clock className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-300 pointer-events-none" />
                      <select
                        name="preferred_time" required
                        value={formData.preferred_time} onChange={handleChange}
                        className="w-full pl-12 pr-4 py-4 bg-gray-50 border border-gray-100 rounded-[15px] focus:ring-2 focus:ring-[#0F6B3F] focus:bg-white outline-none appearance-none transition-all"
                      >
                        <option value="">Sélectionnez une heure</option>
                        {timeSlots.map(slot => <option key={slot} value={slot}>{slot}</option>)}
                      </select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase text-gray-400 ml-1">Motif de consultation</label>
                    <div className="relative">
                      <MessageSquare className="absolute left-4 top-4 h-5 w-5 text-gray-300" />
                      <textarea
                        name="reason" required rows={4}
                        placeholder="Parlez-nous brièvement de votre projet..."
                        value={formData.reason} onChange={handleChange}
                        className="w-full pl-12 pr-4 py-4 bg-gray-50 border border-gray-100 rounded-[15px] focus:ring-2 focus:ring-[#0F6B3F] focus:bg-white outline-none transition-all resize-none"
                      />
                    </div>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-[#0F6B3F] text-white py-5 rounded-[15px] font-bold text-lg hover:bg-[#0a4d2e] shadow-xl shadow-green-900/10 transition-all flex items-center justify-center gap-3 disabled:opacity-70 group"
                  >
                    {isSubmitting ? (
                      <span className="flex items-center gap-2">
                        <RotateCw className="h-5 w-5 animate-spin" /> Traitement...
                      </span>
                    ) : (
                      <>
                        Confirmer ma réservation
                        <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                      </>
                    )}
                  </button>
                  
                  <p className="text-center text-[10px] text-gray-400 uppercase tracking-widest mt-4">
                    Respect de la confidentialité des données garanti
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* SECTION DE TRANSITION AVANT FOOTER */}
      <section className="py-12 bg-white"></section>
    </div>
  );
}

// Icone Rotate pour le chargement
function RotateCw(props: any) {
  return (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 12a9 9 0 1 1-9-9c2.52 0 4.93 1 6.74 2.74L21 8" />
      <path d="M21 3v5h-5" />
    </svg>
  );
}