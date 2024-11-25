import { FaRegCompass, FaHeadset, FaTag, FaSuitcaseRolling } from 'react-icons/fa';

export default function WhyChooseUs() {
  const features = [
    { 
      title: "Expert Travel Planning", 
      description: "Our team of experienced travel experts ensures your journey is perfectly planned, from flights to accommodations and local experiences.",
      icon: <FaRegCompass className="text-4xl text-darkorange" />
    },
    { 
      title: "24/7 Customer Support", 
      description: "We’re here for you around the clock, providing immediate assistance for any travel-related issues or questions you may have.",
      icon: <FaHeadset className="text-4xl text-darkorange" />
    },
    { 
      title: "Exclusive Deals & Offers", 
      description: "Enjoy access to exclusive discounts and deals, ensuring that you get the best value for your dream vacation.",
      icon: <FaTag className="text-4xl text-darkorange" />
    },
    { 
      title: "Personalized Itineraries", 
      description: "Every traveler is unique, and we offer tailor-made itineraries that match your preferences, ensuring an unforgettable experience.",
      icon: <FaSuitcaseRolling className="text-4xl text-darkorange" />
    }
  ];

  return (
    <section className="text-gray-600 body-font">
      <div className="flex justify-between items-center px-5 py-10 md:px-24">
        <h2 className="text-4xl text-center tracking-tight font-extrabold text-gray-900 dark:text-black">Why Choose Us?</h2>
      </div>
      <div className="container px-5 pb-10 mx-auto md:px-24">
        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-4">
          {features.map((feature, index) => (
            <div key={index} className="hover:cursor-pointer transform transition duration-700 ease-in-out hover:scale-105 hover:shadow-lg bg-primary">
              <div className="p-4">
                <h3 className="text-darkorange text-lg tracking-widest title-font mb-1 flex gap-2 py-">{feature.icon}{feature.title}</h3>
                <p className="mt-1 text-gray-900">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
