export default function Page() {
  return (
    <>
      <div>About Us</div>

      <main className="flex-grow container mx-auto px-4 py-8 space-y-8 text-black">
        {/* Tabs Row */}
        <div className="flex flex-wrap justify-center gap-4">
          {['Overview', 'Vision', 'Mission'].map((tab) => (
            <div
              key={tab}
              className="bg-white border border-gray-200 shadow-sm px-8 py-2 rounded-md font-medium text-center min-w-[120px]"
            >
              {tab}
            </div>
          ))}
        </div>

        {/* History/Info Container */}
        <div className="bg-teal-100 rounded-3xl p-8 text-lg leading-relaxed shadow-sm">
          <p>
            The Ministry of Foreign Affairs, Foreign Employment and Tourism coordinates and carries out the foreign policy of the Government of Sri Lanka. The Ministry consists of the Ministry headquarters in Colombo and Sri Lanka Missions abroad. The Ministry was formally established in 1948 following the independence of Ceylon as the Ministry of External Affairs and Defence, coming under the direct control of the Prime Minister of Ceylon. In 1977, the government divided the ministry in two, forming the Ministry of Defence and the Ministry of Foreign Affairs. A.C.S Hameed was appointed as the first Minister of Foreign Affairs on 4 February 1978.
          </p>
        </div>

        {/* Profiles */}
        <div className="bg-gray-100 p-6 rounded-lg">
          <h2 className="text-2xl font-bold mb-4">Profiles</h2>
          <ul className="space-y-2 list-none">
            <li>Minister</li>
            <li>Deputy Minister of Foreign Affairs and Foreign Employment</li>
            <li>Deputy Minister of Tourism</li>
            <li>Secretary</li>
            <li>Additional Secretaries</li>
          </ul>
        </div>

        {/* Bottom Action Buttons */}
        <div className="flex flex-col gap-4">
          <button className="bg-gray-300 hover:bg-gray-400 text-black font-semibold py-3 px-6 rounded-md w-full transition-colors text-center">
            Organizational Structure
          </button>
          <button className="bg-gray-300 hover:bg-gray-400 text-black font-semibold py-3 px-6 rounded-md w-full transition-colors text-center">
            History
          </button>
        </div>
      </main>
    </>
  );
}
