import paypartner1 from '../../assets/paypartner1.png';
import paypartner1 from '../../assets/paypartner1.png';
import paypartner1 from '../../assets/paypartner1.png';
import paypartner1 from '../../assets/paypartner1.png';

export default function PartnerSection() {
    return (
      <section className="bg-gray-100 py-16">
        <div className="container mx-auto px-5 md:px-24">
          <h2 className="text-3xl font-extrabold text-center text-gray-900 mb-8">Our Trusted Partners</h2>
          <p className="text-center text-gray-600 mb-16">We work with trusted organizations and payment providers to ensure a seamless experience for you.</p>
  
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8">
            {/* Payment Partners */}
            <div className="flex justify-center items-center">
              <img 
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/PayPal_logo_2014.svg/1200px-PayPal_logo_2014.svg.png" 
                alt="PayPal" 
                className="h-12 object-contain hover:scale-105 transition duration-300" 
              />
            </div>
            <div className="flex justify-center items-center">
              <img 
                src="https://upload.wikimedia.org/wikipedia/commons/4/46/Visa_Logo.svg" 
                alt="Visa" 
                className="h-12 object-contain hover:scale-105 transition duration-300" 
              />
            </div>
            <div className="flex justify-center items-center">
              <img 
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Stripe_logo.svg/1200px-Stripe_logo.svg.png" 
                alt="Stripe" 
                className="h-12 object-contain hover:scale-105 transition duration-300" 
              />
            </div>
            <div className="flex justify-center items-center">
              <img 
                src="https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard_logo.svg" 
                alt="MasterCard" 
                className="h-12 object-contain hover:scale-105 transition duration-300" 
              />
            </div>
  
            {/* Organizations */}
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
      </section>
    );
  }
  