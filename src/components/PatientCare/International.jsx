import Image from "next/image";

const data = {
    whyChoose: [
        "Priority appointment scheduling & medical opinion before travel",
        "Visa invitation letter & travel assistance",
        "Airport pickup/drop off and accommodation guidance",
        "Language translator support (Arabic, French, Hindi, Divehi, Tamil, Malayalam, etc.)",
        "Dedicated International Coordinator throughout the stay",
        "International counselling desk",
        "Currency exchange services",
        "Prayer Room/ Spiritual support",
        "Second Opinion",
        "International Desk : Contact:- +91 7593899135 Mail:-  internationaldesk@spmedifort.com"
    ],
};

const International = () => {
    return (
        <>
            {data.whyChoose?.length > 0 && (
                <section className="py-12 px-4 md:px-20">
                    <h2 data-aos="fade-up" className="text-2xl sm:text-3xl md:text-5xl font-bold text-[#870064] mb-8 sm:mb-10 text-center">
                        International Patient Care
                    </h2>
                    <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center ">
                        <div data-aos="fade-right">
                            <ul className="space-y-4">
                                {data.whyChoose.map((item, idx) => (
                                    <li
                                        key={idx}
                                        className="flex justify-start items-start text-base md:text-lg text-black leading-relaxed gap-1"
                                    >
                                        <div className="w-[5%]">
                                            <div className="w-2 h-2 lg:w-3 lg:h-3 mt-1.5 bg-[#D95DB0] rounded-full"></div>
                                        </div>
                                        <span className="text-base lg:text-2xl w-[90%]">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div data-aos="fade-left" className="relative lg:ml-auto">
                            <div className="relative rounded-2xl overflow-hidden w-full max-w-[427px] mx-auto ">
                                <img
                                    src="/images/patient/Medical-Records(why-choose).jpg"
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

export default International;
