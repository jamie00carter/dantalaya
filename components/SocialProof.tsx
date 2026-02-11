
import React from 'react';
import { Quote, Star } from 'lucide-react';

const SocialProof: React.FC = () => {
  const reviews = [
    {
      text: "Dr. Lakshit Gupta is very friendly and gives the best treatment. The environment is extremely clean.",
      author: "Pooja Sharma",
      stars: 5,
    },
    {
      text: "Best patient counselling for decided treatments. They explain every step clearly without rushing.",
      author: "Amit Verma",
      stars: 5,
    },
    {
      text: "I was scared of dentists but Dr. Lakshit made me feel comfortable. The 24-hour service saved me during a midnight ache.",
      author: "Sneha Kapoor",
      stars: 5,
    }
  ];

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-5 gap-12 items-center">
          <div className="md:col-span-2 space-y-6">
            <div className="inline-block px-3 py-1 bg-amber-100 text-[#C8A24D] text-xs font-bold uppercase tracking-widest rounded">
              Doctor Spotlight
            </div>
            <h2 className="text-4xl md:text-5xl font-bold">
              Trusted Excellence under <span className="gold-gradient">Dr. Lakshit Gupta</span>
            </h2>
            <p className="text-gray-600 leading-relaxed text-lg">
              Known for being a friendly, patient-focused, and highly skilled dentist, Dr. Lakshit leads our studio with a commitment to pain-free treatments and absolute transparency.
            </p>
            <div className="flex items-center gap-4">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <img
                    key={i}
                    src={`https://i.pravatar.cc/100?img=${i + 10}`}
                    alt="Patient"
                    className="w-10 h-10 rounded-full border-2 border-white"
                  />
                ))}
                <div className="w-10 h-10 rounded-full bg-amber-500 border-2 border-white flex items-center justify-center text-white text-[10px] font-bold">
                  +120
                </div>
              </div>
              <div className="flex flex-col">
                <div className="flex text-amber-500">
                  {[1, 2, 3, 4, 5].map((i) => <Star key={i} size={14} fill="currentColor" />)}
                </div>
                <span className="text-sm font-bold">4.8 Rating on Google</span>
              </div>
            </div>
          </div>

          <div className="md:col-span-3 grid sm:grid-cols-2 gap-6">
            {reviews.map((review, idx) => (
              <div
                key={idx}
                className={`p-8 rounded-2xl border-2 gold-border bg-[#FDFBF7] shadow-lg relative transition-transform hover:-translate-y-2 ${idx === 2 ? 'sm:col-span-2' : ''}`}
              >
                <Quote className="absolute top-4 right-4 text-amber-200" size={40} />
                <div className="flex text-amber-500 mb-4">
                  {[1, 2, 3, 4, 5].map((i) => <Star key={i} size={16} fill="currentColor" />)}
                </div>
                <p className="text-gray-700 italic mb-6">"{review.text}"</p>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full gold-bg flex items-center justify-center text-white text-xs font-bold uppercase">
                    {review.author[0]}
                  </div>
                  <span className="font-bold text-sm">{review.author}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialProof;
