import React from 'react';
import { Check } from 'lucide-react';

const Tier = ({ name, price, description, features, isFeatured = false }: { name: string, price: string, description: string, features: string[], isFeatured?: boolean }) => (
  <div className={`relative p-10 border ${isFeatured ? 'border-brand-gold bg-[#151515]' : 'border-white/5 bg-[#0F1110]'} flex flex-col items-center text-center transition-all duration-300 hover:border-brand-gold/50 group`}>
    
    {isFeatured && (
      <span className="absolute -top-3 bg-brand-gold text-black text-[9px] font-bold tracking-[0.2em] px-4 py-1 uppercase">
        Most Exclusive
      </span>
    )}

    <h3 className="text-brand-gold font-serif text-2xl mb-2">{name}</h3>
    <div className="flex items-baseline gap-1 mb-6">
      <span className="text-white/40 text-sm">$</span>
      <span className="text-4xl text-white font-serif">{price}</span>
      <span className="text-white/40 text-[10px] uppercase tracking-widest">/ Month</span>
    </div>
    
    <p className="text-white/60 font-sans font-light text-sm leading-relaxed mb-8 min-h-[60px]">
      {description}
    </p>

    <div className="w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent mb-8"></div>

    <ul className="space-y-4 mb-10 text-left w-full pl-4">
      {features.map((feature, i) => (
        <li key={i} className="flex items-start gap-3 text-sm text-white/80 font-light">
          <Check className="w-4 h-4 text-brand-gold shrink-0 mt-0.5" />
          <span className="tracking-wide">{feature}</span>
        </li>
      ))}
    </ul>

    <button className={`mt-auto w-full py-4 text-[10px] uppercase tracking-[0.25em] transition-all duration-300 ${
      isFeatured 
      ? 'bg-brand-gold text-black hover:bg-brand-goldHover' 
      : 'border border-white/20 text-white hover:border-brand-gold hover:text-brand-gold'
    }`}>
      Request Allocation
    </button>
  </div>
);

export const Memberships: React.FC = () => {
  return (
    <section className="py-32 px-4 bg-[#0a0a0a] relative overflow-hidden">
       {/* Background decorative elements */}
       <div className="absolute top-0 left-0 w-full h-[500px] bg-gradient-to-b from-[#0F1110] to-transparent pointer-events-none"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-20">
          <span className="text-brand-gold text-xs tracking-[0.3em] uppercase block mb-4">Membership</span>
          <h2 className="text-4xl md:text-5xl font-serif text-white">Join the Legacy</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Tier 
            name="Patron"
            price="250"
            description="Essential access to the sanctuary floor and general locker amenities during standard operating hours."
            features={[
              "Full Floor Access",
              "Complimentary Towel Service",
              "Standard Locker Access",
              "1 Guest Pass Monthly"
            ]}
          />
          
          <Tier 
            name="Elite"
            price="450"
            description="The definitive experience for the dedicated. Includes full class access and recovery suite privileges."
            features={[
              "Unlimited Signature Classes",
              "Cryotherapy & Sauna Access",
              "Executive Locker Service",
              "Laundry Service",
              "Priority Booking"
            ]}
          />

          <Tier 
            name="Founding Member"
            price="850"
            description="Limit 50. The ultimate expression of commitment. All-access, private training, and biometric monitoring."
            isFeatured={true}
            features={[
              "24/7 Biometric Access",
              "Weekly Private Training Session",
              "Nutrition Concierge",
              "Private Changing Suite",
              "Invites to 'Members Only' Galas",
              "Dedicated Parking"
            ]}
          />
        </div>
      </div>
    </section>
  );
};