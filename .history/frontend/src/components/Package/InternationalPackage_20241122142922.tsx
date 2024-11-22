export default function InternationalPackage() {
  const packages = [
    { imgSrc: "https://dummyimage.com/420x260", category: "CATEGORY", title: "The Catalyzer", price: "$16.00" },
    { imgSrc: "https://dummyimage.com/421x261", category: "CATEGORY", title: "Shooting Stars", price: "$21.15" },
    { imgSrc: "https://dummyimage.com/422x262", category: "CATEGORY", title: "Neptune", price: "$12.00" },
    { imgSrc: "https://dummyimage.com/423x263", category: "CATEGORY", title: "The 400 Blows", price: "$18.40" },
    { imgSrc: "https://dummyimage.com/424x264", category: "CATEGORY", title: "The Catalyzer", price: "$16.00" },
    { imgSrc: "https://dummyimage.com/425x265", category: "CATEGORY", title: "Shooting Stars", price: "$21.15" },
    { imgSrc: "https://dummyimage.com/427x267", category: "CATEGORY", title: "Neptune", price: "$12.00" },
    { imgSrc: "https://dummyimage.com/428x268", category: "CATEGORY", title: "The 400 Blows", price: "$18.40" },
  ];

  return (
    <section className="text-gray-600 body-font">
      <h2 className="my-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-black text-center">International Packages</h2>
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-wrap -m-4">
          {packages.map((pkg, index) => (
            <div key={index} className="lg:w-1/4 md:w-1/2 m- w-full">
              <a className="block relative h-48 rounded overflow-hidden">
                <img alt={pkg.title} className="object-cover object-center w-full h-full block" src={pkg.imgSrc} />
              </a>
              <div className="mt-4">
                <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">{pkg.category}</h3>
                <h2 className="text-gray-900 title-font text-lg font-medium">{pkg.title}</h2>
                <p className="mt-1">{pkg.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
