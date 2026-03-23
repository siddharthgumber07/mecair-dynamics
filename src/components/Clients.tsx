import Marquee from "react-fast-marquee";
import finolexLogo from "@/assets/clients/Finolex-Logo.jpg";
import wiproLogo from "@/assets/clients/Wipro-logo.png";
import itcLogo from "@/assets/clients/itc-limited-logo-black-and-white.png";
import mahindraLogo from "@/assets/clients/mahindra_logo.png";
import panasonicLogo from "@/assets/clients/panasonic.png";
import sgsLogo from "@/assets/clients/sgs_pharma.png";

type Client = {
  name: string;
  logo?: string;
};

const clients: Client[] = [
  { name: "Ashai Glass" },
  { name: "Finolex", logo: finolexLogo },
  { name: "SGS Pharmaceutical", logo: sgsLogo },
  { name: "SR Fastner" },
  { name: "Mahindra & Mahindra", logo: mahindraLogo },
  { name: "ITC Limited", logo: itcLogo },
  { name: "C&S Pvt ltd" },
  { name: "Panasonic", logo: panasonicLogo },
  { name: "Natural Herbs Pvt Ltd" },
  { name: "Apis India Pvt Ltd" },
  { name: "Belrize Industries limited" },
  { name: "Eurolife Pharma" },
  { name: "Aganize lifescince" },
  { name: "Aps Biotech pvt ltd." },
  { name: "Wipro enterprises limited", logo: wiproLogo }
];

export const Clients = () => {
  return (
    <section className="py-24 bg-white dark:bg-gray-950 overflow-hidden">
      <div className="container mx-auto px-4 mb-16">
        <div className="text-center max-w-3xl mx-auto">
          <h3 className="text-4xl md:text-5xl font-extrabold text-primary mb-6 leading-tight">
            Brands that trust our expertise
          </h3>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            We are proud to have partnered with and provided our specialized services to these leading organizations across various industries.
          </p>
        </div>
      </div>

      <div className="relative w-full max-w-screen-2xl mx-auto">
        {/* Soft edge fade using gradient masks rather than Marquee's built-in gradient for better control */}
        <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-24 md:w-40 z-10 bg-gradient-to-r from-white to-transparent dark:from-gray-950"></div>
        <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-24 md:w-40 z-10 bg-gradient-to-l from-white to-transparent dark:from-gray-950"></div>
        
        <Marquee gradient={false} speed={45} pauseOnHover={true} className="py-8">
          {clients.map((client, index) => (
            <div 
              key={index} 
              className="mx-12 md:mx-20 flex items-center justify-center h-24 hover:scale-110 transition-transform duration-300 cursor-pointer"
            >
              {client.logo ? (
                <img 
                  src={client.logo} 
                  alt={client.name} 
                  className="max-h-[70px] max-w-[200px] object-contain" 
                  style={{ filter: 'drop-shadow(0 4px 6px rgba(0,0,0,0.05))' }}
                />
              ) : (
                <span className="text-2xl md:text-3xl font-black text-gray-600 dark:text-gray-400 tracking-tighter whitespace-nowrap">
                  {client.name}
                </span>
              )}
            </div>
          ))}
        </Marquee>
      </div>
    </section>
  );
};

export default Clients;
