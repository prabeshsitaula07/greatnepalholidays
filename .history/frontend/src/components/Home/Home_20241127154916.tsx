import bgvideo from '../../assets/bgvideo.mp4';
import Contact from "../Contact/Contact";
import Gallery from "../AboutUs/Gallery";
import InternationalPackage from "../Package/InternationalPackage";
import NepalPackage from "../Package/NepalPackage";
import TripHandling from '../Services/TripHandling';
import Team from "../Team/Team";
import Testimonial from "../Testimonial/Testimonial";
import Activities from '../Package/Activities';
import WhyChooseUs from '../AboutUs/WhyChooseUs';
import PartnerSection from '../AboutUs/PartnerSection';
import { FaArrowRight } from "react-icons/fa";
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';


interface NepalPackage {
  id: number;
  package_name: string;
  place: string;
  price: number;
  country: string;
  imageurl: string;
  description: string;
}


export default function Home() {
  return (
    <>
      <div className="relative w-full h-screen">
      {/* Video Background */}
      <video
        autoPlay
        loop
        muted
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source
          src={bgvideo}
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>
{/* <img src={homebg} alt="" className='w-full object-cover h-full' /> */}
      {/* Dark Overlay */}
      <div
        className="absolute inset-0 bg-black opacity-50"
        style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }} // Adjust opacity for darkness
      ></div>

      {/* Content over the video */}
      <div className="relative z-10 flex items-center justify-center w-full h-full">
        <h1 className="text-white text-6xl font-bold text-center font-parkinsans absolute bottom-1/2"><span className='font-fira font-normal'>Time for your</span> <br />Next Adventure</h1>
      </div>
    </div>
    <WhyChooseUs/>
      <Activities />
      <div className='bg-primary'>
      <InternationalPackage />
      </div>
      <NepalPackage />
      <TripHandling />
      <Testimonial />
      <Contact />
      <PartnerSection/>
      <Team />
      <Gallery />

    </>
  )
}
