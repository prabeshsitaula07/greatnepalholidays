import { FaFacebook, FaLinkedin, FaInstagram } from "react-icons/fa";
import member1 from '../../assets/member1.png';
import member2 from '../../assets/member2.png';
import member3 from '../../assets/member3.png';
import member4 from '../../assets/member4.png';
import member5 from '../../assets/member5.png';
import member6 from '../../assets/member6.png';
import member7 from '../../assets/member7.png';

export default function Team() {
  return (
    <>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 lg:px-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-20">
            <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-black">
              Meet Our <span className="text-darkorange">Team</span>
            </h2>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
              Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify, subway tile poke farm-to-table. Franzen you probably haven't heard of them.
            </p>
          </div>
          <div className="flex flex-wrap -m-4">
            {[
              {
                name: "Damodar Ghimire",
                role: "Chairman",
                description: "",
                img: member1,
                facebook: "https://www.facebook.com/@greatnepalholidayspvt",
                linkedin: "https://www.linkedin.com/company/great-nepal-holidays-pvt-ltd/posts/?feedView=all",
                instagram: "https://www.instagram.com/_greatnepalholiday/",
              },
              {
                name: "Sarala Ghimire",
                role: "Managing Director",
                description: "DIY tote bag drinking vinegar cronut adaptogen squid fanny pack vaporware.",
                img: member7,
                facebook: "https://www.facebook.com/@greatnepalholidayspvt",
                linkedin: "https://www.linkedin.com/company/great-nepal-holidays-pvt-ltd/posts/?feedView=all",
                instagram: "https://www.instagram.com/_greatnepalholiday/",
              },
              {
                name: "Srijana Acharya",
                role: "Department Head",
                description: "DIY tote bag drinking vinegar cronut adaptogen squid fanny pack vaporware.",
                img: member6,
                facebook: "https://www.facebook.com/@greatnepalholidayspvt",
                linkedin: "https://www.linkedin.com/company/great-nepal-holidays-pvt-ltd/posts/?feedView=all",
                instagram: "https://www.instagram.com/_greatnepalholiday/",
              },
              {
                name: "Riti Bista",
                role: "Visa Assistant",
                description: "DIY tote bag drinking vinegar cronut adaptogen squid fanny pack vaporware.",
                img: member3,
                facebook: "https://www.facebook.com/@greatnepalholidayspvt",
                linkedin: "https://www.linkedin.com/company/great-nepal-holidays-pvt-ltd/posts/?feedView=all",
                instagram: "https://www.instagram.com/_greatnepalholiday/",
              },
              {
                name: "Niraj Karki (Ritij)",
                role: "Ticketing Head",
                description: "DIY tote bag drinking vinegar cronut adaptogen squid fanny pack vaporware.",
                img: member2,
                facebook: "https://www.facebook.com/@greatnepalholidayspvt",
                linkedin: "https://www.linkedin.com/company/great-nepal-holidays-pvt-ltd/posts/?feedView=all",
                instagram: "https://www.instagram.com/_greatnepalholiday/",
              },
              {
                name: "Donika Limbu",
                role: "Visa Assistant",
                description: "DIY tote bag drinking vinegar cronut adaptogen squid fanny pack vaporware.",
                img: member4,
                facebook: "https://www.facebook.com/@greatnepalholidayspvt",
                linkedin: "https://www.linkedin.com/company/great-nepal-holidays-pvt-ltd/posts/?feedView=all",
                instagram: "https://instagram.com/henryletham",
              },
              {
                name: "Bhintuna Maharjan",
                role: "Visa Assistant",
                description: "DIY tote bag drinking vinegar cronut adaptogen squid fanny pack vaporware.",
                img: member5,
                facebook: "https://www.facebook.com/@greatnepalholidayspvt",
                linkedin: "https://www.linkedin.com/company/great-nepal-holidays-pvt-ltd/posts/?feedView=all",
                instagram: "https://instagram.com/henryletham",
              },
              
            ].map((teamMember, index) => (
              <div key={index} className="p-4 lg:w-1/4 md:w-1/2">
                <div className="h-full flex flex-col items-center text-center group relative">
                  <div className="w-full h-60 mb-4 overflow-hidden rounded-lg relative">
                    <img
                      alt="team"
                      className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-110 group-hover:brightness-75"
                      src={teamMember.img}
                    />
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      <span className="inline-flex space-x-4">
                        <a
                          className="text-white transition-transform duration-300 hover:scale-125"
                          href={teamMember.facebook}
                          aria-label="Facebook"
                        >
                          <FaFacebook size={24} />
                        </a>
                        <a
                          className="text-white transition-transform duration-300 hover:scale-125"
                          href={teamMember.linkedin}
                          aria-label="LinkedIn"
                        >
                          <FaLinkedin size={24} />
                        </a>
                        <a
                          className="text-white transition-transform duration-300 hover:scale-125"
                          href={teamMember.instagram}
                          aria-label="Instagram"
                        >
                          <FaInstagram size={24} />
                        </a>
                      </span>
                    </div>
                  </div>
                  <div className="w-full border">
                    <h2 className="title-font font-medium text-lg text-gray-900">{teamMember.name}</h2>
                    <h3 className="text-darkorange mb-3">{teamMember.role}</h3>
                    <p className="mb-4">{teamMember.description}</p>
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