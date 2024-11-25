export default function WhyChooseUs() {
  return (
    <section className="text-gray-600 body-font">
            <div className="flex justify-between items-center px-5 py-10 md:px-24">
                <div>
                    <h2 className="text-4xl tracking-tight font-extrabold text-gray-900 dark:text-black">
                        Nepal Best Seller Trips
                    </h2>
                    <h4 className="text-lg text-orange-400 font-semibold mt-2">
                        Popular Things to do in Nepal.
                    </h4>
                </div>
            </div>

            <div className="container px-5 pb-10 mx-auto md:px-24">
                <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
                        <div
                            key=''
                            className="hover:cursor-pointer transform transition duration-700 ease-in-out hover:scale-105 hover:shadow-lg"
                        >
                            <a className="block relative h-80 overflow-hidden">
                                <img
                                    alt=''
                                    className="object-cover object-center w-full h-full block"
                                    src=''
                                />
                            </a>
                            <div className="p-4 border">
                                <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
                                    
                                </h3>
                                <h2 className="text-gray-900 title-font text-lg font-medium">
                                 
                                </h2>
                                <p className="mt-1 text-darkorange">{pkg.price}</p>
                            </div>
                        </div>
                </div>
            </div>
        </section>
  )
}
