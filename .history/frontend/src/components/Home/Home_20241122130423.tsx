import bgvideo from '../'
import Contact from "../Contact/Contact";
import Gallery from "../Gallery/Gallery";
import InternationalPackage from "../Package/InternationalPackage";
import NepalPackage from "../Package/NepalPackage";
import Team from "../Team/Team";
import Testimonial from "../Testimonial/Testimonial";

export default function Home() {
  return (
    <>
    <div className="h-screen">
    <div className="relative w-full h-screen">
      {/* Video Background */}
      <video
        autoPlay
        loop
        muted
        className="absolute inset-0 w-full h-full object-cover"
        style={{ opacity: 0.3 }} // Adjust opacity here
      >
        <source
          src="path/to/your/video.mp4" // Replace with your video path
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>

      {/* Content over the video */}
      <div className="relative z-10 flex items-center justify-center w-full h-full">
        <h1 className="text-white text-4xl font-bold">Welcome to My Website</h1>
      </div>
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
