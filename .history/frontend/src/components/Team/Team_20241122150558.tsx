import { FaFacebook, FaLinkedin, FaInstagram } from "react-icons/fa";

export default function Team() {
  return (
    <>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-20">
            <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-black">
              Meet Our Team
            </h2>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
              Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify, subway tile poke farm-to-table. Franzen you probably haven't heard of them.
            </p>
          </div>
          <div className="flex flex-wrap -m-4">
            {[
              {
                name: "Alper Kamu",
                role: "UI Developer",
                description: "DIY tote bag drinking vinegar cronut adaptogen squid fanny pack vaporware.",
                img: "https://dummyimage.com/200x200",
                facebook: "https://facebook.com/alperkamu",
                linkedin: "https://linkedin.com/in/alperkamu",
                instagram: "https://instagram.com/alperkamu",
              },
              {
                name: "Holden Caulfield",
                role: "UI Developer",
                description: "DIY tote bag drinking vinegar cronut adaptogen squid fanny pack vaporware.",
                img: "https://dummyimage.com/201x201",
                facebook: "https://facebook.com/holdencaulfield",
                linkedin: "https://linkedin.com/in/holdencaulfield",
                instagram: "https://instagram.com/holdencaulfield",
              },
              {
                name: "Atticus Finch",
                role: "UI Developer",
                description: "DIY tote bag drinking vinegar cronut adaptogen squid fanny pack vaporware.",
                img: "https://dummyimage.com/202x202",
                facebook: "https://facebook.com/atticusfinch",
                linkedin: "https://linkedin.com/in/atticusfinch",
                instagram: "https://instagram.com/atticusfinch",
              },
              {
                name: "Henry Letham",
                role: "UI Developer",
                description: "DIY tote bag drinking vinegar cronut adaptogen squid fanny pack vaporware.",
                img: "https://dummyimage.com/203x203",
                facebook: "https://facebook.com/henryletham",
                linkedin: "https://linkedin.com/in/henryletham",
                instagram: "https://instagram.com/henryletham",
              },
            ].map((teamMember, index) => (
              <div key={index} className="p-4 lg:w-1/4 md:w-1/2">
                <div className="h-full flex flex-col items-center text-center">
                  <img
                    alt="team"
                    className="flex-shrink-0 rounded-lg w-full h-56 object-cover object-center mb-4"
                    src={teamMember.img}
                  />
                  <div className="w-full">
                    <h2 className="title-font font-medium text-lg text-gray-900">{teamMember.name}</h2>
                    <h3 className="text-gray-500 mb-3">{teamMember.role}</h3>
                    <p className="mb-4">{teamMember.description}</p>
                    <span className="inline-flex">
                      <a className="text-gray-500" href={teamMember.facebook} aria-label="Facebook">
                        <FaFacebook size={24} />
                      </a>
                      <a className="ml-2 text-gray-500" href={teamMember.linkedin} aria-label="LinkedIn">
                        <FaLinkedin size={24} />
                      </a>
                      <a className="ml-2 text-gray-500" href={teamMember.instagram} aria-label="Instagram">
                        <FaInstagram size={24} />
                      </a>
                    </span>

                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
