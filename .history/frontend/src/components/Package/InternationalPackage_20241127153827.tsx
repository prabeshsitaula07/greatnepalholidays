import { FaArrowRight } from "react-icons/fa";
export default function InternationalPackage() {
  const packages = [
    { imgSrc: "https://cdn.pixabay.com/photo/2015/10/06/18/26/eiffel-tower-975004_1280.jpg", category: "CATEGORY", title: "Paris", price: "$16.00" },
    { imgSrc: "https://cdn.pixabay.com/photo/2019/04/09/05/36/england-4113666_1280.jpg", category: "CATEGORY", title: "England", price: "$21.15" },
    { imgSrc: "https://cdn.pixabay.com/photo/2023/11/16/05/02/mountains-8391433_640.jpg", category: "CATEGORY", title: "Switzerland", price: "$12.00" },
    { imgSrc: "https://cdn.pixabay.com/photo/2020/06/13/17/58/mount-everest-5295184_640.jpg", category: "CATEGORY", title: "Mt Everest", price: "$21.15" },
    { imgSrc: "https://cdn.pixabay.com/photo/2020/08/10/01/28/castle-5476737_640.jpg", category: "CATEGORY", title: "Japan", price: "$18.40" },
    { imgSrc: "https://cdn.pixabay.com/photo/2023/10/18/00/59/mountain-8322610_640.jpg", category: "CATEGORY", title: "USA", price: "$16.00" },
  ];

  return (
    <section className="text-gray-600 body-font">
    <div className="flex justify-between items-center px-5 py-10 md:px-24">
        <div>
            <h2 className="text-4xl tracking-tight font-extrabold text-gray-900 dark:text-black">
                Best Selling International Packages
            </h2>
            <h4 className="text-lg text-orange-400 font-semibold mt-2">
            Enjoy the exclusive package tours with us.
            </h4>
        </div>
        <button className="inline-flex items-center text-primary bg-darkorange border px-4 py-0 border-darkorange focus:outline-none hover:bg-primary text-lg hover:text-darkorange rounded-3xl h-10 md:mt-0 transition duration-300">
            See All Packages
            <FaArrowRight className="ml-2 text-lg" />
        </button>
    </div>

    <div className="container px-5 pb-10 mx-auto md:px-24">
        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
            {packages.map((pkg, index) => (
                <div
                    key={index}
                    className="hover:cursor-pointer transform transition shad duration-700 ease-in-out hover:scale-105 hover:shadow-lg"
                >
                    <a className="block relative h-80 overflow-hidden">
                        <img
                            alt={pkg.title}
                            className="object-cover object-center w-full h-full block"
                            src={pkg.imgSrc}
                        />
                    </a>
                    <div className="p-4 border border-darkorange">
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
