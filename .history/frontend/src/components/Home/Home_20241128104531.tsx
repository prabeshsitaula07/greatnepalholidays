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

interface Activity {
  id: number;
  activity: string;
  place: string;
  price: number;
  country: string;
  imageurl: string;
  description: string;
}

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

  const [activities, setActivities] = useState<Activity[]>([]);
  const displayedActivities = nepalpackages.slice(0, 3);

    useEffect(() => {
        // Fetch the activities from the backend
        axios.get<Activity[]>('http://localhost:5000/api/activities')
            .then(response => {
                setActivities(response.data);
            })
            .catch(error => {
                console.error('There was an error fetching the activities!', error);
            });
    }, []);


  const [nepalpackages, setNepalPackages] = useState<NepalPackage[]>([]);
  const displayedPackages = nepalpackages.slice(0, 3);

  useEffect(() => {
    // Fetch the activities from the backend
    axios.get<NepalPackage[]>('http://localhost:5000/api/nepalpackages')
      .then(response => {
        setNepalPackages(response.data);
      })
      .catch(error => {
        console.error('There was an error fetching the activities!', error);
      });
  }, []);


  return (
    <>
      <div className="relative w-full h-screen">
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

        <div
          className="absolute inset-0 bg-black opacity-50"
          style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}
        ></div>

        {/* Content over the video */}
        <div className="relative z-10 flex items-center justify-center w-full h-full">
          <h1 className="text-white text-6xl font-bold text-center font-parkinsans absolute bottom-1/2"><span className='font-fira font-normal'>Time for your</span> <br />Next Adventure</h1>
        </div>
      </div>

      <WhyChooseUs />
      <section className="text-gray-600 body-font">
            <div className="flex justify-between items-center px-5 py-10 md:px-24">
                <div>
                    <h2 className="text-4xl tracking-tight font-extrabold text-gray-900 dark:text-black">
                        Nepal Best Seller Trips
                    </h2>
                    <h4 className="text-lg text-orange-400 font-semibold mt-2">
                        Popular Things to do in Nepal.
                    </h4>
                </div>
                <Link to='/activities'>
                <button className="inline-flex items-center text-primary bg-darkorange border px-4 py-0 border-darkorange focus:outline-none hover:bg-primary text-lg hover:text-darkorange rounded-3xl h-10 md:mt-0 transition duration-300">
                    See All Packages
                    <FaArrowRight className="ml-2 text-lg" />
                </button>
                </Link>
            </div>

            <div className="container px-5 pb-10 mx-auto md:px-24">
                <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
                    {activities.map((activity, id) => (
                        <Link to={`/activity/${activity.id}`}>
                        <div
                            key={id}
                            className="hover:cursor-pointer transform transition shadow-md duration-700 ease-in-out hover:scale-105 hover:shadow-lg"
                        >
                            <a className="block relative h-80 overflow-hidden">
                                <img
                                    alt={activity.place}
                                    className="object-cover object-center w-full h-full block"
                                    src={activity.imageurl}
                                />
                            </a>
                            <div className="p-4 border">
                                <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
                                    {activity.country}
                                </h3>
                                <h2 className="text-gray-900 title-font text-lg font-medium">
                                    {activity.activity}
                                </h2>
                                <p className="mt-1 text-darkorange">$ {activity.price}</p>
                            </div>
                        </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>

      <div className='bg-primary'>
        <InternationalPackage />
      </div>

      {/* Nepal Packages */}
      <section className="text-gray-600 body-font">
        <div className="flex justify-between items-center px-5 py-10 md:px-24">
          <div>
            <h2 className="text-4xl tracking-tight font-extrabold text-gray-900 dark:text-black">
              Nepal Best Seller Trips
            </h2>
            <h4 className="text-lg text-orange-400 font-semibold mt-2">
              Popular Things to do in Nepal.
            </h4>
          </div>
          <Link to='/nepalpackages'>
            <button className="inline-flex items-center text-primary bg-darkorange border px-4 py-0 border-darkorange focus:outline-none hover:bg-primary text-lg hover:text-darkorange rounded-3xl h-10 md:mt-0 transition duration-300">
              See All Packages
              <FaArrowRight className="ml-2 text-lg" />
            </button>
          </Link>
        </div>

        <div className="container px-5 pb-10 mx-auto md:px-24">
          <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
            {displayedPackages.map((nepalpackage, id) => (
              <Link to={`/nepalpackage/${nepalpackage.id}`}>
                <div
                  key={id}
                  className="hover:cursor-pointer transform shadow-md transition duration-700 ease-in-out hover:scale-105 hover:shadow-lg"
                >
                  <a className="block relative h-80 overflow-hidden">
                    <img
                      alt={nepalpackage.place}
                      className="object-cover object-center w-full h-full block"
                      src={nepalpackage.imageurl}
                    />
                  </a>
                  <div className="p-4 border">
                    <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
                      {nepalpackage.country}
                    </h3>
                    <h2 className="text-gray-900 title-font text-lg font-medium">
                      {nepalpackage.package_name}
                    </h2>
                    <p className="mt-1 text-darkorange">$ {nepalpackage.price}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <TripHandling />
      <Testimonial />
      <Contact />
      <PartnerSection />
      <Team />
      <Gallery />

    </>
  )
}