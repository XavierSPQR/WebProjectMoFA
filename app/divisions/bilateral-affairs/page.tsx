import Link from 'next/link';

export default function BilateralAffairsPage() {
  const subDivisions = [
    "Africa Affairs",
    "East Asia and Oceania",
    "Europe and North America",
    "Latin America and Caribbean Division",
    "Middle East",
    "South Asia and SAARC",
    "Southeast Asia and Central Asia"
  ];

  const mainDivisions = [
    { name: "Multilateral Affairs", path: "/divisions/multilateral-affairs" },
    { name: "Economic Affairs", path: "/divisions/economic-affairs" },
    { name: "Protocols", path: "/divisions/protocols" },
    { name: "Consular Affairs", path: "/divisions/consular-affairs" }
  ];

  return (
    <main className="flex-grow bg-[#F5EBEB] pb-12">
      {/* Breadcrumb Bar */}
      <div className="container mx-auto px-4 pt-8">
        <div className="bg-[#6F5C5C] text-white py-3 px-6 rounded-xl text-xl font-semibold mb-8 flex items-center justify-center gap-2">
          <Link href="/divisions" className="hover:underline">Division</Link>
          <span>&gt;</span>
          <span className="cursor-default">Bilateral Affairs</span>
          <span>&gt;</span>
          <span className="cursor-default text-gray-300">Africa Affairs</span>
        </div>
      </div>

      <div className="container mx-auto px-4 flex flex-col md:flex-row gap-8">
        {/* Sidebar */}
        <div className="w-full md:w-1/3 lg:w-1/4">
          <div className="bg-[#D9D9D9] rounded-[40px] p-8 min-h-[600px] relative">
            {/* Small circular image placeholder */}
            <div className="absolute top-6 right-6 w-12 h-12 rounded-full overflow-hidden border-2 border-white">
              <div className="w-full h-full bg-gray-400"></div>
            </div>

            <div className="space-y-4">
              <div>
                <h3 className="text-navy font-bold text-xl mb-4">Bilateral Affairs</h3>
                <ul className="space-y-3 pl-6">
                  {subDivisions.map((sub) => (
                    <li key={sub} className="text-navy font-semibold text-lg cursor-pointer hover:underline">
                      {sub}
                    </li>
                  ))}
                </ul>
              </div>

              <ul className="space-y-4 pt-4 border-t border-gray-400">
                {mainDivisions.map((division) => (
                  <li key={division.name}>
                    <Link
                      href={division.path}
                      className="text-navy font-bold text-xl cursor-pointer hover:underline block"
                    >
                      {division.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Main Content Area */}
        <div className="w-full md:w-2/3 lg:w-3/4 space-y-8">
          {/* About the Division Box */}
          <div className="bg-white rounded-[40px] p-16 min-h-[300px] flex items-center justify-center border border-gray-100 shadow-sm">
            <h2 className="text-3xl font-bold text-black">About the Division</h2>
          </div>

          {/* Contact Section Box */}
          <div className="bg-white rounded-[40px] p-12 border border-gray-100 shadow-sm">
            <div className="flex flex-wrap justify-around gap-8">
              {["Contact 1", "Contact 2", "Contact 3"].map((label) => (
                <div key={label} className="flex flex-col items-center gap-4">
                  <div className="w-16 h-16 rounded-full bg-[#8ED9D9]"></div>
                  <span className="text-xl font-bold text-black">{label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
