import paypartner1 from '../../assets/paypartner1.png';
import paypartner2 from '../../assets/paypartner2.png';
import paypartner3 from '../../assets/paypartner3.png';
import paypartner4 from '../../assets/paypartner4.png';

export default function PartnerSection() {
  const features = [
    { 
      alt
      description: "Our team of experienced travel experts ensures your journey is perfectly planned, from flights to accommodations and local experiences.",
      imgSrc: paypartner1
    },
  ];

  return (
    <section className="text-gray-600 body-font">
      <div className="flex items-center px-5 py-10 md:px-24">
        <h2 className="text-4xl text-center tracking-tight font-extrabold text-gray-900 dark:text-black">Our Trusted Partners?</h2>
      </div>
      <div className="container px-5 pb-10 mx-auto md:px-24">
        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-4">
          {features.map((feature, index) => (
            <div key={index} className="hover:cursor-pointer transform transition duration-700 ease-in-out hover:scale-105 hover:shadow-lg bg-primary">
              <div className="p-4">
                <h3 className="text-darkorange text-lg tracking-widest title-font mb-1 flex gap-2 pb-4">{feature.icon}{feature.title}</h3>
                <p className="mt-1 text-gray-900">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
        <p className='italic pt-7 text-xl text-center text-gray-500'>"Travel is not just about the destination,<br />it's about the journey we create together."</p>
      </div>
    </section>
  );
}
