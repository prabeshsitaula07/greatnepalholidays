export default function InternationalPackage() {
  const packages = [
    { imgSrc: "https://cdn.pixabay.com/photo/2015/10/06/18/26/eiffel-tower-975004_1280.jpg", category: "CATEGORY", title: "The Catalyzer", price: "$16.00" },
    { imgSrc: "https://cdn.pixabay.com/photo/2019/04/09/05/36/england-4113666_1280.jpg", category: "CATEGORY", title: "Shooting Stars", price: "$21.15" },
    { imgSrc: "https://cdn.pixabay.com/photo/2023/11/16/05/02/mountains-8391433_640.jpg", category: "CATEGORY", title: "Neptune", price: "$12.00" },
    { imgSrc: "https://cdn.pixabay.com/photo/2020/08/10/01/28/castle-5476737_640.jpg", category: "CATEGORY", title: "The 400 Blows", price: "$18.40" },
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
            <div key={index} className="lg:w-1/4 md:w-1/2 p-4 w-full">
              <a className="block relative h-48 overflow-hidden">
                <img alt={pkg.title} className="object-cover object-center w-full h-full block" src={pkg.imgSrc} />
              </a>
              <div className="p-4 border">
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
