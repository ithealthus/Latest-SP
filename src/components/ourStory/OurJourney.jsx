import React from 'react'

const OurJourney = () => {
    const cardData = [
        {
            heading: '2021',
            para: 'Conceptualized and envisioned by S Pottivelu'
        },
        {
            heading: '2022',
            para: 'Construction of flagship facility begins in Thiruvananthapuram'
        },
        {
            heading: '2024',
            para: 'Soft launch of select departmentsSoft launch of select departments'
        },
        {
            heading: '2025',
            para: 'Grand opening with all specialties and robotic systems in place'
        },
        {
            heading: '2026',
            para: 'Satellite clinics and telemedicine expansion across Kerala'
        },
        {}]
    return (
        <>
            <section className='pb-12 px-3'>
                <div className='max-w-6xl mx-auto'>
                    <div className='pb-5'>
                        <h2 className='text-4xl font-bold text-[#870064]'>
                            Key Milestones in Our Journey
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
                        {cardData.map((item, index) => {
                            if (!item.heading || !item.para) return null;

                            return (
                                <div
                                key={index}
                                data-aos="fade-up"
                                data-aos-delay={index * 200}
                                    className="bg-white p-4 rounded-2xl border border-[#870064]"
                                >
                                    <h3 className="text-4xl text-center font-bold text-[#870064] ">
                                        {item.heading}
                                    </h3>
                                    {item.heading === '2026' ? <span className='block text-center text-[#870064] text-sm'>(Upcoming)</span> : ''}

                                    <p className={`text-[#002D39] text-[13px]  ${item.heading === '2026' ? 'mt-0' : 'mt-4'}`}>{item.para}</p>
                                </div>
                            );
                        })}
                    </div>

                </div>
            </section>

            <section className='bg-[#870064] px-3'>
                <div className='max-w-6xl mx-auto py-12'>
                    <div data-aos="fade-up" className='pb-5 text-center'>
                        <h2 className='text-4xl pb-4 font-bold text-[#fff]'>
                            Our Vision & Mission
                        </h2>
                        <p className='text-white text-base lg:text-left '>Our vision is to build a healthier future for all by making high-quality healthcare accessible to everyone. We are committed to continuous improvement in care delivery through ethical practices, modern infrastructure, and a skilled, compassionate team. Our mission is to foster a culture of trust, transparency, and excellence. We ensure that every individual who walks through our doors receives care that is not only clinically advanced but also deeply human</p>
                    </div>
                  
                </div>
            </section>
        </>
    )
}

export default OurJourney