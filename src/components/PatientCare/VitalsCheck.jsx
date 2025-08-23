import React from 'react'

const VitalsCheck = () => {
    return (
        <section className="bg-[#EFDAD952] py-10">
            <div className="max-w-7xl mx-auto px-4 text-left">
                <h2
                    data-aos="fade-up"
                    className="text-3xl md:text-5xl font-bold text-[#870064] mb-5 lg:mb-8"
                >
                   Vitals Check
                </h2>
                <div className='rounded-lg'>
                    <video className='rounded-3xl lg:rounded-[60px]' src="/videos/vid2.mp4" controls onPause={true}></video>
                </div>
            </div>
        </section>
    )
}

export default VitalsCheck