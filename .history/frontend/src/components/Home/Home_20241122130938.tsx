import bgvideo from '../../assets/bgvideo.mp4';
import Contact from "../Contact/Contact";
import Gallery from "../Gallery/Gallery";
import InternationalPackage from "../Package/InternationalPackage";
import NepalPackage from "../Package/NepalPackage";
import Team from "../Team/Team";
import Testimonial from "../Testimonial/Testimonial";

export default function Home() {
  return (
    <>
    <div className="relative w-full h-screen">
      <video
        autoPlay
        loop
        muted
        className="absolute inset-0 w-full h-full object-cover"
        style={{ opacity: 0.9 }} // Adjust opacity here
      >
        <source
          src={bgvideo}
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>

      {/* Content over the video */}
      <div className="relative z-10 flex items-center justify-center w-full h-full">
        <h1 className="text-white text-4xl font-bold">Welcome to My Website</h1>
      </div>
    </div>
    <NepalPackage/>
    <InternationalPackage/>
    <Testimonial/>
    <Contact/>
    <Team/>
    <Gallery/>

    </>
  )
}
