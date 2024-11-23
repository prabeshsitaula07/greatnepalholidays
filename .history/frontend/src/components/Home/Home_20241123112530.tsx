import bgvideo from '../../assets/bgvideo.mp4';
import Contact from "../Contact/Contact";
import Gallery from "../AboutUs/Gallery";
import InternationalPackage from "../Package/InternationalPackage";
import NepalPackage from "../Package/NepalPackage";
import TripHandling from '../Services/TripHandling';
import Team from "../Team/Team";
import Testimonial from "../Testimonial/Testimonial";
import Activities from '../Package/Activities';

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

      {/* Dark Overlay */}
      <div
        className="absolute inset-0 bg-black opacity-50"
        style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }} // Adjust opacity for darkness
      ></div>

      {/* Content over the video */}
      <div className="relative z-10 flex items-center justify-center w-full h-full">
        <h1 className="text-white text-6xl font-bold">Welcome to My Website</h1>
      </div>
    </div>
      <Activities />
      <div c>
      <InternationalPackage />
      </div>
      <NepalPackage />
      <TripHandling />
      <Testimonial />
      <Contact />
      <Team />
      <Gallery />

    </>
  )
}
