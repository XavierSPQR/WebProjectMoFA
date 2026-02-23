export default function Page() {
  return (
    <main className="flex-grow bg-[#FDF2F2] min-h-screen">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row gap-8 items-start">
          {/* Sidebar */}
          <aside className="w-full md:w-1/4 bg-[#DCD9D9] rounded-[40px] p-10 shadow-sm">
            <nav>
              <ul className="space-y-6 text-xl font-bold text-black">
                <li><a href="#" className="hover:text-navy transition-colors block">H.E.President</a></li>
                <li><a href="#" className="hover:text-navy transition-colors block">Hon.Prime Minister</a></li>
                <li><a href="#" className="hover:text-navy transition-colors block">Hon.Minister</a></li>
                <li><a href="#" className="hover:text-navy transition-colors block">Hon.Deputy Minister</a></li>
                <li><a href="#" className="hover:text-navy transition-colors block">Foreign Secretary</a></li>
                <li className="space-y-4">
                  <span className="block">Mission</span>
                  <ul className="pl-8 space-y-4">
                    <li><a href="#" className="hover:text-navy transition-colors block">Geneva</a></li>
                    <li><a href="#" className="hover:text-navy transition-colors block">New York</a></li>
                    <li><a href="#" className="hover:text-navy transition-colors block">Other</a></li>
                  </ul>
                </li>
              </ul>
            </nav>
          </aside>

          {/* Main Content */}
          <div className="w-full md:w-3/4 bg-white rounded-[40px] px-16 py-8 shadow-md min-h-[600px] flex flex-col">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div key={i} className="flex-1 flex flex-col justify-center">
                <div className="py-8">
                  <h2 className="text-2xl font-bold text-black text-center">Statement Topic {i}</h2>
                </div>
                {i < 6 && <hr className="border-gray-400" />}
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
