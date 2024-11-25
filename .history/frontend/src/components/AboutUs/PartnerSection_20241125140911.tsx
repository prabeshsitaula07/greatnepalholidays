import paypartner1 from '../../assets/paypartner1.png';
import paypartner2 from '../../assets/paypartner2.png';
import paypartner3 from '../../assets/paypartner3.png';
import paypartner4 from '../../assets/paypartner4.png';

export default function PartnerSection() {
  const paymentpartners = [
    { 
      alt: '',
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
          {paymentpartners.map((paymentpartner, index) => (
            <div key={index} className="hover:cursor-pointer transform transition duration-700 ease-in-out hover:scale-105 hover:shadow-lg bg-primary">
              <img src={} alt="" />
            </div>
          ))}
        </div>
        <p className='italic pt-7 text-xl text-center text-gray-500'>"Travel is not just about the destination,<br />it's about the journey we create together."</p>
      </div>
    </section>
  );
}
