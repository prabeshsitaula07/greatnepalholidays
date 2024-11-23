export default function Activities() {
    const packages = [
      { imgSrc: "https://cdn.pixabay.com/photo/2015/10/06/18/26/eiffel-tower-975004_1280.jpg", category: "CATEGORY", title: "Paris", price: "$16.00" },
      { imgSrc: "https://cdn.pixabay.com/photo/2019/04/09/05/36/england-4113666_1280.jpg", category: "CATEGORY", title: "England", price: "$21.15" },
      { imgSrc: "https://cdn.pixabay.com/photo/2023/11/16/05/02/mountains-8391433_640.jpg", category: "CATEGORY", title: "Switzerland", price: "$12.00" },
    ];
  
    return (
      <section className="text-gray-600 body-font">
        <div className="flex justify-between px-5 py-10">
        <div>
        <h2 className="text-4xl tracking-tight font-extrabold text-gray-900 dark:text-black">
          Nepal Best Seller Trips
        </h2>
        <h4 className="text-xl text-orange-400 font-semibold mt-2">
          Popular Things to do in Nepal.
        </h4>
        </div>
        <button className="inline-flex items-center text-primary bg-darkorange border border-darkorange py-1 px-3 focus:outline-none hover:bg-primary text-lg hover:text-darkorange rounded-3xl md:mt-0">
                        See More
                    </button>
        </div>
        <div className="container px-5 py-10 mx-auto">
          <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {packages.map((pkg, index) => (
              <div
                key={index}
                className="hover:cursor-pointer transform transition duration-300 ease-in-out hover:scale-105 hover:shadow-lg"
              >
                <a className="block relative h-80 overflow-hidden">
                  <img
                    alt={pkg.title}
                    className="object-cover object-center w-full h-full block"
                    src={pkg.imgSrc}
                  />
                </a>
                <div className="p-4 border">
                  <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
                    {pkg.category}
                  </h3>
                  <h2 className="text-gray-900 title-font text-lg font-medium">
                    {pkg.title}
                  </h2>
                  <p className="mt-1 text-darkorange">{pkg.price}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }
  