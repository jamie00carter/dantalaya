import React from 'react';
import { MessageCircle } from 'lucide-react';

const ChatBot: React.FC = () => {

  const phoneNumber = "919992111743";
  const message = "Hello Dantalaya, I would like to book an appointment.";
  const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={whatsappURL}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-24 md:bottom-10 right-6 z-50 w-16 h-16 rounded-full bg-black shadow-2xl flex items-center justify-center transition-transform hover:scale-110 active:scale-95 border border-[#C8A24D]/30"
    >
      <MessageCircle size={28} className="text-[#C8A24D]" />
    </a>
  );
};

export default ChatBot;
