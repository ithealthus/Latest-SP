import Image from "next/image";

const data = {
  whyChoose: [
    "A complete review of your medical history and reports.",
    "Discussion with a senior specialist to understand your goals and concerns.",
    "Detailed explanation of treatment options based on the latest protocols.",
    "Personalized recommendations and an opportunity to clear all doubts.",
  ],
};

const Admission = () => {
  return (
    <>
      {data.whyChoose?.length > 0 && (
        <section className="py-12 px-4 md:px-20">
          <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-start ">
            <div data-aos="fade-right">
              <h2 className="text-[32px] sm:text-[40px] md:text-[48px] font-bold text-[#870064] leading-[50px] mb-8">
              What to Expect in Your Consultation

              </h2>
              <ul className="space-y-4">
                {data.whyChoose.map((item, idx) => (
                  <li
                    key={idx}
                    className="flex justify-center items-center gap-5 text-base md:text-lg text-black leading-relaxed"
                  >
                    <Image
                      src="/images/patient/group.svg"
                      alt=""
                      width={50}
                      height={50}
                    />
                    <span className="text-2xl">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div data-aos="fade-left" className="relative lg:ml-auto">
              <div className="relative rounded-2xl overflow-hidden w-full max-w-[427px] mx-auto ">
                <img
                  src="/images/second/6.webp"
                  alt="Why Choose SP Medifort"
                  className="w-full h-auto object-cover rounded-2xl"
                />
              </div>
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default Admission;
