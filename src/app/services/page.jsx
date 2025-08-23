import Link from "next/link";

const allServices = [
  {
    title: "Audiology & Speech Therapy at SP Medifort Hospital",
    link: "/services/audioSpeech",
    icon: "Audiology-&-Speech-Therapy.svg",
  },
  {
    title: "Blood Centre at SP Medifort Hospital",
    link: "/services/bloodCentre",
    icon: "Blood-Centre.svg",
  },
  {
    title: "Cath Lab at SP Medifort Hospital",
    link: "/services/cathLab",
    icon: "Cath-Lab.svg",
  },
  {
    title: "Clinical Laboratory at SP Medifort Hospital",
    link: "/services/clinicalLaboratory",
    icon: "Clinical-Laboratory.svg",
  },
  {
    title: "CSSD at SP Medifort Hospital",
    link: "/services/cssd",
    icon: "CSSD-(Central-Sterile-Services-Department).svg",
  },
  {
    title: "Dietetics & Nutrition at SP Medifort Hospital",
    link: "/services/dieteticsNutrition",
    icon: "Dietetics-&-Nutrition.svg",
  },
  {
    title: "EMG / EEG / ECG Services at SP Medifort Hospital",
    link: "/services/emgEeGEcg",
    icon: "EMG-EEG-ECG.svg",
  },
  {
    title: "Imaging Services at SP Medifort Hospital",
    link: "/services/imaging",
    icon: "Imaging-Services.svg",
  },
  {
    title: "Medical Records at SP Medifort Hospital",
    link: "/services/medicalRecords",
    icon: "Medical-RecordsMedical-Records.svg",
  },
  {
    title: "Nursing Services at SP Medifort Hospital",
    link: "/services/nursingServices",
    icon: "Nursing-Services.svg",
  },
  {
    title: "Pharmacy at SP Medifort Hospital",
    link: "/services/pharmacy",
    icon: "Pharmacy.svg",
  },
  {
    title: "Physiotherapy & Rehabilitation at SP Medifort Hospital",
    link: "/services/physiotherapyRehabilitation",
    icon: "Physiotherapy-&-Rehabilitation.svg",
  },
];

export default function AllServicesPage() {
  return (
    <div className="max-w-7xl mx-auto py-10 px-6">
      <h1 className="text-3xl sm:text-4xl font-bold text-primary mb-10 text-center">
        Explore All Services
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {allServices.map((service, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-all p-6 flex flex-col justify-between items-center text-center"
          >
            <div className="flex flex-col items-center">
              <div className="bg-primary text-white rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <img
                  src={`/images/services-icons/${service.icon}`}
                  alt={service.title}
                  className="w-6 h-6"
                />
              </div>
              <h2 className="text-xl font-semibold text-theme-dark">
                {service.title}
              </h2>
            </div>

            <div className="mt-4">
              <Link
                href={service.link}
                className="inline-block bg-primary text-white text-sm font-semibold px-4 py-2 rounded-full hover:bg-primary-dark transition"
              >
                Learn More →
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
