import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { CiFacebook, CiTwitter } from 'react-icons/ci';
import { FaInstagram } from 'react-icons/fa';

function About() {
  return (
    <section className="font-sans">

      {/* About Section */}
      <div className="max-w-[1440px] mx-auto px-5 lg:px-0">
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-10 max-w-[1050px] mx-auto">
          {/* Text */}
          <div>
            <p className="text-[#252B42]">About Company</p>
            <h2 className="text-[#252B42] font-bold text-[36px] lg:text-[58px] mt-4">ABOUT US</h2>
            <p className="text-[#737373] mt-4">
              We know how large objects will act, but things on a small scale.
            </p>
            <button className="rounded-md py-3 px-6 text-white text-sm bg-[#23A6F0] mt-6">
              Get Quote Now
            </button>
          </div>
          {/* Image */}
          <div className="flex justify-center">
            <Image src="/about.png" width={571} height={668} alt="About Us" />
          </div>
        </div>
      </div>

      {/* Problem Section */}
      <div className="max-w-[1440px] mx-auto px-5 lg:px-0 my-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center max-w-[1018px] mx-auto">
          <div>
            <p className="text-[#E74040] font-bold">Problems trying</p>
            <h1 className="text-[#252B42] font-bold text-xl lg:text-2xl mt-2">
              Met minim Mollie non desert Alamo est <br />
              sit cliquey dolor do met sent.
            </h1>
          </div>
          <p className="text-[#737373] text-sm">
            Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics.
          </p>
        </div>
      </div>

      {/* Stats Section */}
      <div className="max-w-[1440px] mx-auto px-5 lg:px-0 my-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 text-center">
          {[
            { value: '15K', label: 'Happy Customers' },
            { value: '150K', label: 'Monthly Visitors' },
            { value: '15', label: 'Countries Worldwide' },
            { value: '100+', label: 'Top Partners' },
          ].map((stat, index) => (
            <div key={index}>
              <h2 className="text-[#252B42] font-bold text-3xl">{stat.value}</h2>
              <p className="text-[#737373] text-sm mt-2">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Team Section */}
      <div className="max-w-[1440px] mx-auto px-5 lg:px-0 my-16">
        <h2 className="text-[#252B42] font-bold text-center text-[36px] lg:text-[58px]">Meet Our Team</h2>
        <p className="text-[#737373] text-center mt-4">
          Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-16">
          {[1, 2, 3].map((i) => (
            <div key={i} className="text-center">
              <Image src={`/t${i}.jpg`} width={316} height={383} alt={`Team Member ${i}`} />
              <p className="mt-4 text-[#252B42] font-bold">Username</p>
              <p className="text-[#737373] text-sm">Profession</p>
              <div className="flex justify-center gap-4 mt-4">
                <CiFacebook size={30} fill="#23A6F0" />
                <FaInstagram size={30} fill="#23A6F0" />
                <CiTwitter size={30} fill="#23A6F0" />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Companies Section */}
      <div className="max-w-[1440px] mx-auto px-5 lg:px-0 my-16">
        <h2 className="text-[#252B42] font-bold text-center text-[36px] lg:text-[58px]">Big Companies Are Here</h2>
        <p className="text-[#737373] text-center mt-4">
          Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics.
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8 mt-10 items-center justify-center">
          {[1, 2, 3, 4, 5].map((i) => (
            <div key={i} className="flex justify-center">
              <Image src={`/v${i}.png`} width={100} height={50} alt={`Logo ${i}`} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default About;
