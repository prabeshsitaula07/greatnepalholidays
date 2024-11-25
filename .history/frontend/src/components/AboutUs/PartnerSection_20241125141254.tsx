import paypartner1 from '../../assets/paypartner1.png';
import paypartner2 from '../../assets/paypartner2.png';
import paypartner3 from '../../assets/paypartner3.png';
import paypartner4 from '../../assets/paypartner4.png';

export default function PartnerSection() {
  const paymentpartners = [
    { 
      alt: 'paypartner1',
      imgSrc: paypartner1
    },
    { 
      alt: 'paypartner2',
      imgSrc: paypartner2
    },
    { 
      alt: 'paypartner3',
      imgSrc: paypartner3
    },
    { 
      alt: 'paypartner4',
      imgSrc: paypartner4
    },
  ];

  return (
    <section className="text-gray-600 body-font bg-primary">
      <div className="flex items-center px-5 py-10 md:px-24">
        <h2 className="text-4xl text-center tracking-tight font-extrabold text-gray-900 dark:text-black">Our Trusted Partners?</h2>
      </div>
      <div className="container px-5 pb-10 mx-auto md:px-24">
        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-4">
          {paymentpartners.map((paymentpartner, index) => (
              <img key={index} src={paymentpartner.imgSrc} alt={paymentpartner.alt} className='hover:cursor-pointer transform transition duration-700 ease-in-out hover:scale-105 h-28 w-' />
          ))}
        </div>
        </div>
    </section>
  );
}
