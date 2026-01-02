import { MessageCircle } from 'lucide-react';

export default function WhatsAppButton() {
  const phoneNumber = '22990250704';
  const message = encodeURIComponent('Bonjour, je souhaite en savoir plus sur vos services d\'orientation.');
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 bg-[#25D366] text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all hover:scale-110 z-50"
      aria-label="Contactez-nous sur WhatsApp"
    >
      <MessageCircle className="h-6 w-6" />
    </a>
  );
}
