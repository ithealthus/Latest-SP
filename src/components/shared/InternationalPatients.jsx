import {
  Plane,
  UserCircle,
  CalendarCheck2,
  Languages,
  BedDouble,
  Video,
  CreditCard,
} from 'lucide-react';

const InternationalPatients = () => {
  const services = [
    { icon: <CreditCard className="w-6 h-6 text-[#6E2452]" />, label: 'Visa & Travel Assistance' },
    { icon: <UserCircle className="w-6 h-6 text-[#6E2452]" />, label: 'Personal Medical Coordinator' },
    { icon: <CalendarCheck2 className="w-6 h-6 text-[#6E2452]" />, label: 'Priority Appointments & Second Opinions' },
    { icon: <Languages className="w-6 h-6 text-[#6E2452]" />, label: 'Language Interpretation (Arabic, French, Tamil, English, etc.)' },
    { icon: <BedDouble className="w-6 h-6 text-[#6E2452]" />, label: 'Economical Accommodation & Guest Services' },
    { icon: <Video className="w-6 h-6 text-[#6E2452]" />, label: 'Tele-follow-up After Discharge' },
  ];

  return (
    <section className="bg-white py-12 px-4 md:px-12 ">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12">
        
        {/* Left Side */}
        <div className="md:w-1/2">
          <h2 className="text-3xl font-semibold text-gray-800 mb-4">
            Recommended by Patients from 100+ Countries
          </h2>
          <p className="text-gray-600 mb-6">
            SP Medifort is a Top Healthcare Destination for International Patients, offering:
          </p>

          <ul className="space-y-4 text-gray-700">
            {services.map((item, idx) => (
              <li key={idx} className="flex items-start gap-3">
                {item.icon}
                <span>{item.label}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Right Side Image */}
        <div className="md:w-2/3 flex justify-center ">
          <img
            src="/images/Homepage/int.webp"
            alt="International Medical Services"
            className="max-w-2xl w-full h-full"
          />
        </div>
      </div>
    </section>
  );
};

export default InternationalPatients;
