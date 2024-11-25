export default function WhyChooseUs() {
  const features = [
    { title: "Seamless Experience", description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nisi possimus repudiandae, sint cumque quas odio nam sdssd quo ab?" },
    { title: "24/7 Service", description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nisi possimus repudiandae, sint cumque quas odio nam a eto ab?" },
    { title: "XYZ", description: "Lorem dfas dolor sit amet consectetur adipisicing elit. Nisi possimus repudiandae, sint cumque quas odio nam a et quo ab?" },
    { title: "ABC", description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nisi possimus repudiandae, sint cumque quas t quo ab?" }
  ];

  return (
    <section className="text-gray-600 body-font">
      <div className="flex justify-between items-center px-5 py-10 md:px-24">
        <h2 className="text-4xl text-center tracking-tight font-extrabold text-gray-900 dark:text-black">Why Choose Us?</h2>
      </div>
      <div className="container px-5 pb-10 mx-auto md:px-24">
        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-4">
          {features.map((feature, index) => (
            <div key={index} className="hover:cursor-pointer transform transition duration-700 ease-in-out hover:scale-105 hover:shadow-lg">
              <div className="p-4 border">
                <h3 className="text-darkorange text-lg tracking-widest title-font mb-1">{feature.title}</h3>
                <p className="mt-1 text-gray">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
