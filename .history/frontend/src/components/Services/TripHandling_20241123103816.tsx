import img2 from '../../assets/2.png';
import img3 from '../../assets/3.png';
import img4 from '../../assets/4.png';

export default function TripHandling() {
    const services = [
      { title: "Flight Booking", imgSrc: img2, description: "Share your service offerings here. Give your prospective clients an overview of why they should use it." },
      { title: "Hotel Booking", imgSrc: img2, description: "Share your service offerings here. Give your prospective clients an overview of why they should use it." },
      { title: "Car Rental", imgSrc: img3, description: "Share your service offerings here. Give your prospective clients an overview of why they should use it." },
      { title: "Tour Packages", imgSrc: img4, description: "Share your service offerings here. Give your prospective clients an overview of why they should use it." },
    ];
  
    return (
      <div className="bg-navbarbg h-fit flex justify-center flex-col items-center p-10">
          <h2 className="mb-10 text-4xl tracking-tight font-extrabold text-white text-center font-parkinsans">We Will Handle Trip For You</h2>
          <div className="grid grid-cols-2 gap-8">
              {services.map((service, index) => (
                <div key={index} className="flex gap-10 items-center">
                  <img className="h-40 w-40" src={service.imgSrc} alt={service.title} />
                  <div>
                      <h3 className="font-semibold pb-2 text-2xl text-primary">{service.title}</h3>
                      <p className="font-parkinsans text-white">{service.description}</p>
                  </div>
                </div>
              ))}
          </div>
      </div>
    );
  }
  