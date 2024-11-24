import React, { useState } from "react";
import gallery1 from "../../assets/gallery1.jpg";
import gallery2 from "../../assets/gallery2.jpg";
import gallery3 from "../../assets/gallery3.jpg";
import gallery4 from "../../assets/gallery4.jpg";
import gallery5 from "../../assets/gallery5.jpg";
import gallery6 from "../../assets/gallery6.jpg";
import gallery7 from "../../assets/gallery7.jpg";
import gallery8 from "../../assets/gallery8.jpg";

export default function Gallery() {
  const images = [gallery1, gallery2, gallery3, gallery4, gallery5, gallery6, gallery7, gallery8];
  const [isOpen, setIsOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openModal = (index) => {
    setCurrentIndex(index);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const goToNextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const goToPreviousImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <section className="text-gray-600 body-font">
      <h2 className="mt-10 text-4xl font-extrabold text-gray-900 dark:text-black text-center">Gallery</h2>
      <div className="container px-5 py-10 mx-auto md:px-24">
        <div className="mb-20">
          <h1 className="sm:text-3xl text-2xl font-medium text-gray-900">Master Cleanse Reliac Heirloom</h1>
          <p className="lg:pl-6 lg:w-2/3 mx-auto text-base leading-relaxed">
            Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify, subway tile poke farm-to-table.
          </p>
        </div>
        <div className="flex flex-wrap md:-m-2 -m-1">
          {images.map((src, index) => (
            <div key={index} className={`md:p-2 p-1 ${index === 3 || index === 4 ? "w-1/2" : "w-1/3"}`}>
              <img
                alt="gallery"
                className="w-full h-full object-cover object-center block cursor-pointer"
                src={src}
                onClick={() => openModal(index)}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-80 flex justify-center items-center z-50"
          onClick={closeModal}
        >
          <div className="relative w-11/12 md:w-3/4 lg:w-1/2" onClick={(e) => e.stopPropagation()}>
            <img src={images[currentIndex]} alt="Current" className="w-full h-auto hover:scale-50 transition" />
            <button
              className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-white text-black rounded-full p-2"
              onClick={goToPreviousImage}
            >
              &larr;
            </button>
            <button
              className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-white text-black rounded-full p-2"
              onClick={goToNextImage}
            >
              &rarr;
            </button>
            <button
  className="fixed top-4 right-4 text-white text-4xl font-bold hover:scale-110 transition-transform rounded-[100%] h-10 w-10 hover:border bg-transparent border-none shadow-lg"
  onClick={closeModal}
>
  X
</button>

          </div>
        </div>
      )}
    </section>
  );
}
