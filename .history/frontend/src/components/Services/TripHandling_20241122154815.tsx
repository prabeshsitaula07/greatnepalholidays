export default function TripHandling() {
    const services = [
      { title: "Flight Booking", imgSrc: "https://dummyimage.com/428x268", description: "Share your service offerings here. Give your prospective clients an overview of why they should use it." },
      { title: "Hotel Booking", imgSrc: "https://dummyimage.com/428x268", description: "Share your service offerings here. Give your prospective clients an overview of why they should use it." },
      { title: "Car Rental", imgSrc: "https://dummyimage.com/428x268", description: "Share your service offerings here. Give your prospective clients an overview of why they should use it." },
      { title: "Tour Packages", imgSrc: "https://dummyimage.com/428x268", description: "Share your service offerings here. Give your prospective clients an overview of why they should use it." },
    ];
  
    return (
      <div className="bg-primary h-fit flex justify-center flex-col items-center px-10">
          <h2 className="my-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-black text-center">We Will Handle Trip For You</h2>
          <div className="grid grid-cols-2 gap-8 w-full">
              {services.map((service, index) => (
                <div key={index} className="flex gap-4">
                  <img className="h-24 w-24" src={service.imgSrc} alt={service.title} />
                  <div>
                      <h3>{service.title}</h3>
                      <p>{service.description}</p>
                  </div>
                </div>
              ))}
          </div>
      </div>
    );
  }
  