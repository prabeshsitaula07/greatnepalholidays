import React from "react";

export default function Testimonial() {
  return (
    <section className="bg-[#231834] h-[380px]">
      <div className="container-fluid">
        <div className="row flex justify-center relative top-6">
          <div className="col-md-12 pt-4 flex justify-center">
            <h3 className="text-orange-500 text-sm font-medium uppercase">Testimonials</h3>
          </div>
          <div className="col-md-12 flex justify-center">
            <h2 className="text-white text-3xl font-extrabold">Explore the students experience</h2>
          </div>
        </div>
      </div>

      <section className="bg-[#f8f8f8] transition-all duration-300 mt-5 mb-0 relative h-[130px] top-[190px]">
        <div className="container mx-auto relative top-[-174px]">
          <div className="row flex justify-center">
            <div className="col-md-4 p-4">
              <div className="tour-item">
                <div className="tour-desc bg-white rounded-xl p-10">
                  <div className="tour-text text-gray-500 text-center">
                    &ldquo;At this School, our mission is to balance a rigorous comprehensive college preparatory curriculum with healthy social and emotional development.&rdquo;
                  </div>
                  <div className="flex justify-center pt-2 pb-2">
                    <img className="w-15 h-15 rounded-full object-cover" src="https://images.pexels.com/photos/6625914/pexels-photo-6625914.jpeg" alt="Testimonial 1" />
                  </div>
                  <div className="link-name text-center text-gray-500">Balbir Kaur</div>
                  <div className="link-position text-center text-sm text-gray-500">Student</div>
                </div>
              </div>
            </div>

            <div className="col-md-4 p-4">
              <div className="tour-item">
                <div className="tour-desc bg-white rounded-xl p-10">
                  <div className="tour-text text-gray-500 text-center">
                    &ldquo;At this School, our mission is to balance a rigorous comprehensive college preparatory curriculum with healthy social and emotional development.&rdquo;
                  </div>
                  <div className="flex justify-center pt-2 pb-2">
                    <img className="w-15 h-15 rounded-full object-cover" src="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="Testimonial 2" />
                  </div>
                  <div className="link-name text-center text-gray-500">Balbir Kaur</div>
                  <div className="link-position text-center text-sm text-gray-500">Student</div>
                </div>
              </div>
            </div>

            <div className="col-md-4 p-4">
              <div className="tour-item">
                <div className="tour-desc bg-white rounded-xl p-10">
                  <div className="tour-text text-gray-500 text-center">
                    &ldquo;At this School, our mission is to balance a rigorous comprehensive college preparatory curriculum with healthy social and emotional development.&rdquo;
                  </div>
                  <div className="flex justify-center pt-2 pb-2">
                    <img className="w-15 h-15 rounded-full object-cover" src="https://images.pexels.com/photos/4946604/pexels-photo-4946604.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="Testimonial 3" />
                  </div>
                  <div className="link-name text-center text-gray-500">Balbir Kaur</div>
                  <div className="link-position text-center text-sm text-gray-500">Student</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
}
