"use client";

import Image from "next/image";
import Link from "next/link";

export default function Page() {
  const contacts = [
    {
      position: "Actg. Director General",
      name: "Mr. Thushara Rodrigo",
      email: "dgpd(at)mfa.gov.lk",
      phone: "+94 11 2 345678",
      image: "/assets/user.png", // path from public folder
    },
    {
      position: "Director",
      name: "Mr. Chathura Weerasekara",
      email: "chathura.weerasekara(at)mfa.gov.lk",
      phone: "+94 112 473 944",
      image: "/assets/user.png",
    },
    {
      position: "Assistant Director",
      name: "Ms. Arosha Kariyawasam",
      email: "arosha.kariyawasam(at)mfa.gov.lk",
      phone: "+94 112 473 946",
      image: "/assets/user.png",
    },
    {
      position: "Assistant Director",
      name: "Mr. Maharoof Murshid",
      email: "maharoof.murshid(at)mfa.gov.lk",
      phone: "+94 112 473 946",
      image: "/assets/user.png",
    },
    {
      position: "Head of Branch",
      name: "Ms. Sripathmini Konamalai",
      email: "publicity(at)mfa.gov.lk",
      phone: "+94 112 437 633",
      image: "/assets/user.png",
    },
  ];

  return (
    <main className="bg-[#F5EBEB] flex-grow p-8 flex flex-col items-center gap-12">

      {/* About the Division Section */}
      <div className="bg-white rounded-[60px] p-16 w-full max-w-6xl shadow-sm min-h-[450px] flex flex-col items-center justify-center">
        
        {/* Section Title */}
        <h1 className="text-3xl font-bold mb-8 text-black">Public Diplomacy</h1>
        
        {/* Justified Paragraph */}
        <p className="text-lg font-medium text-black text-justify leading-relaxed">
          The Public Diplomacy Division (PD) acts as the Ministry’s interface between the Government and external actors in terms of information dissemination and projection of Sri Lanka’s image as well as promotion of its interests abroad through the Sri Lanka Missions and the international media. 
          <br /><br />
          The Division also covers events/situations that take place in the Ministry and the country in general, related to Sri Lanka’s foreign policy and also coverage in international media.
          <br /><br />
          The main subjects that come under the purview of the Public Diplomacy Division include projection of the Government viewpoint and the position on relevant issues of national interest, responding to media queries on aspects related to the Ministry and matters related to Sri Lanka’s foreign policy / international relations, liaising with local and foreign media and monitoring and countering adverse news items related to Sri Lanka in foreign media/social media and compilation of Local News Round-up through local print media to be disseminated among all Missions and officials.
        </p>

        {/* Buttons */}
        <div className="flex flex-col md:flex-row gap-12 w-full justify-center items-center mt-8">
          <Link
            href="/public-diplomacy/media-briefings"
            className="bg-[#D9D9D9] px-16 py-6 rounded-md text-2xl font-bold hover:bg-gray-400 transition-colors text-black text-center min-w-[300px]"
          >
            Media Briefings
          </Link>

          <Link
            href="/public-diplomacy/guideline-for-foreign-media"
            className="bg-[#D9D9D9] px-16 py-6 rounded-md text-2xl font-bold hover:bg-gray-400 transition-colors text-black text-center min-w-[300px]"
          >
            Guideline For Foreign Media
          </Link>
        </div>
      </div>

      {/* Contacts Section */}
      <div className="bg-white rounded-[100px] p-16 w-full max-w-10xl shadow-sm flex flex-col md:flex-row flex-wrap justify-around items-center gap-12">
        {contacts.map((contact, index) => (
          <div key={index} className="flex flex-col items-center gap-4 text-center max-w-[250px]">

            {/* Profile Image */}
            <div className="w-40 h-40 rounded-full overflow-hidden border-8 border-[#9DD9D2] flex items-center justify-center bg-[#9DD9D2]">
              <Image
                src={contact.image}
                alt={contact.name}
                width={160}
                height={160}
                className="object-cover"
              />
            </div>

            {/* Contact Details */}
            <h3 className="text-2xl font-bold text-black">{contact.position}</h3>
            <p className="text-gray-700">{contact.name}</p>
            <a href={`mailto:${contact.email}`} className="text-gray-500 text-sm hover:underline">
              {contact.email}
            </a>
            <a href={`tel:${contact.phone}`} className="text-gray-500 text-sm hover:underline">
              {contact.phone}
            </a>

          </div>
        ))}
      </div>

    </main>
  );
}