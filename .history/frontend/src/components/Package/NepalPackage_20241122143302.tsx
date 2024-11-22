export default function NepalPackage() {
  const packages = [
    { imgSrc: "https://dummyimage.com/420x260", category: "Adventure", title: "The Catalyzer", price: "$16.00" },
    { imgSrc: "https://dummyimage.com/421x261", category: "Nature", title: "Shooting Stars", price: "$21.15" },
    { imgSrc: "https://dummyimage.com/422x262", category: "Beach", title: "Neptune", price: "$12.00" },
    { imgSrc: "https://dummyimage.com/423x263", category: "Cultural", title: "The 400 Blows", price: "$18.40" },
    { imgSrc: "https://dummyimage.com/424x264", category: "Adventure", title: "The Catalyzer", price: "$16.00" },
    { imgSrc: "https://dummyimage.com/425x265", category: "Nature", title: "Shooting Stars", price: "$21.15" },
    { imgSrc: "https://dummyimage.com/427x267", category: "Beach", title: "Neptune", price: "$12.00" },
    { imgSrc: "https://dummyimage.com/428x268", category: "Cultural", title: "The 400 Blows", price: "$18.40" },
  ];

  return (
    <section className="text-green body-font bg-gradient-to-r from-green-100 to-blue-100 py-24">
      <h2 className="text-5xl font-extrabold text-center text-indigo-900 mb-10">Nepal Packages</h2>
      <div className="container px-6 mx-auto">
        <div className="flex flex-wrap -m-4">
          {packages.map((pkg, index) => (
            <div key={index} className="lg:w-1/4 md:w-1/2 p-4 w-full transition-transform transform hover:scale-105">
              <a className="block relative h-64 rounded-lg overflow-hidden shadow-lg hover:shadow-2xl">
                <img alt={pkg.title} className="object-cover object-center w-full h-full block rounded-lg" src={pkg.imgSrc} />
              </a>
              <div className="p-4 border-t-4 border-indigo-500 bg-white rounded-b-lg">
                <h3 className="text-lg font-semibold text-indigo-600 tracking-widest mb-2">{pkg.category}</h3>
                <h2 className="text-2xl font-bold text-gray-900 mb-3">{pkg.title}</h2>
                <p className="text-xl font-medium text-indigo-700">{pkg.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
