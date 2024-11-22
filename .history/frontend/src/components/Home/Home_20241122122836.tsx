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
