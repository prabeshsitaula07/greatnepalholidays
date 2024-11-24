import gallery1 from '../../assets/gallery1.jpg';
import gallery2 from '../../assets/gallery2.jpg';
import gallery3 from '../../assets/gallery3.jpg';
import gallery4 from '../../assets/gallery4.jpg';
import gallery5 from '../../assets/gallery5.jpg';
import gallery6 from '../../assets/gallery6.jpg';
import gallery7 from '../../assets/gallery7.jpg';
import gallery8 from '../../assets/gallery8.jpg';

export default function Gallery() {
  const images = [gallery1, gallery2, gallery3, gallery4, gallery5, gallery6, gallery7, gallery8];
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
            <div key={index} className={`md:p-2 p-1 ${index === 3 || index === 4 ? 'w-1/2' : 'w-1/3'}`}>
              <img alt="gallery" className="w-full h-full object-cover object-center block" src={src} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
