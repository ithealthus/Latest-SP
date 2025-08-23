import React from 'react';

const leaders = [
  {
    name: 'Dr. S P Asokan',
    role: 'Chairman & Managing Director',
    image: '/images/directors/1.png', // replace with actual image path
  },
  {
    name: 'S P Subramonion',
    role: 'Joint Chairman & Managing Director',
    image: '/images/directors/2.png',
  },
  {
    name: 'Dr. Aathithya S P',
    role: 'Executive Director',
    image: '/images/directors/3.png',
  },
  {
    name: 'Dr. Athulya A Bhagya',
    role: 'Executive Director',
    image: '/images/directors/4.png',
  },
  {
    name: 'Advaith A Bala',
    role: 'Executive Director',
    image: '/images/directors/5.png',
  },
];

const LeadershipSection = () => {
  return (
    <section className="bg-[#EFDAD9] py-12">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h2 data-aos="fade-up" className="text-3xl md:text-5xl font-bold text-[#870064] mb-2">
          Leadership at SP Medifort
        </h2>
        <p data-aos="fade-up" data-aos-delay="200" className="text-[#44002E] text-xl mb-8">
          Guided by Visionaries. Inspired by Healers.
        </p>

        <h3 data-aos="fade-right" className="text-black text-2xl font-semibold mb-6 text-left">Key Members Include :</h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 mb-6 ">
          {leaders.map((leader, index) => (
            <div
              key={index}
              data-aos="fade-up"
              data-aos-delay={index * 200}
              className="bg-white rounded-xl shadow-md overflow-hidden text-left"
            >
              <div className="p-3 flex justify-center mt-2">
                <div className="w-48 h-48 rounded-full overflow-hidden shadow">
                  <img
                    src={leader.image}
                    alt={leader.name}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              <div className="px-4 pb-5 text-center">
                <p className="font-semibold text-[#002D39] text-xl">{leader.name}</p>
                <p className="text-base text-[#002D39] mt-1">{leader.role}</p>
              </div>
            </div>
          ))}
        </div>


        <p data-aos="fade-up" className="text-lg text-black mx-auto text-left">
          Behind every milestone at SP Medifort is a leadership team committed to integrity,
          innovation, and transformation in healthcare. Our panel includes renowned doctors,
          administrators, and strategic visionaries who drive clinical outcomes, operational
          efficiency, and continuous improvement across departments.
        </p>
      </div>
    </section>
  );
};

export default LeadershipSection;
