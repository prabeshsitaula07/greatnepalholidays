import paypartner1 from '../../assets/paypartner1.png';
import paypartner2 from '../../assets/paypartner2.png';
import paypartner3 from '../../assets/paypartner3.png';
import paypartner4 from '../../assets/paypartner4.png';

export default function PartnerSection() {
    return (
      <section className="bg-primary py-16">
        <div className="container mx-auto px-5 md:px-24 flex">
            <div className='w-1/2'>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 w-full">
            {/* Payment Partners */}
            <div className="flex justify-center items-center">
              <img 
                src={paypartner1}
                alt="PayPal" 
                className="h-12 object-contain hover:scale-105 transition duration-300" 
              />
            </div>
            <div className="flex justify-center items-center">
              <img 
                src={paypartner2} 
                alt="MasterCard" 
                className="h-12 object-contain hover:scale-105 transition duration-300" 
              />
            </div>
            <div className="flex justify-center items-center">
              <img 
                src={paypartner3} 
                alt="IME Pay" 
                className="h-12 object-contain hover:scale-105 transition duration-300" 
              />
            </div>
            <div className="flex justify-center items-center">
              <img 
                src={paypartner4} 
                alt="Visa" 
                className="h-12 object-contain hover:scale-105 transition duration-300" 
              />
            </div>
            </div>
            {/* Organizations */}
            <div>
            <div className="flex justify-center items-center">
              <img 
                src="https://via.placeholder.com/150x50?text=Org+1" 
                alt="Organization 1" 
                className="h-12 object-contain hover:scale-105 transition duration-300" 
              />
            </div>
            <div className="flex justify-center items-center">
              <img 
                src="https://via.placeholder.com/150x50?text=Org+2" 
                alt="Organization 2" 
                className="h-12 object-contain hover:scale-105 transition duration-300" 
              />
            </div>
            <div className="flex justify-center items-center">
              <img 
                src="https://via.placeholder.com/150x50?text=Org+3" 
                alt="Organization 3" 
                className="h-12 object-contain hover:scale-105 transition duration-300" 
              />
            </div>
            <div className="flex justify-center items-center">
              <img 
                src="https://via.placeholder.com/150x50?text=Org+4" 
                alt="Organization 4" 
                className="h-12 object-contain hover:scale-105 transition duration-300" 
              />
            </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
  