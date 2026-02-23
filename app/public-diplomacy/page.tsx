import Image from 'next/image';
import Link from 'next/link';
import userImg from '../Assets/user.png';

export default function PublicDiplomacyPage() {
  return (
    <main className="bg-[#F5EBEB] flex-grow p-8 flex flex-col items-center gap-12">
      {/* About the Division Section */}
      <div className="bg-white rounded-[60px] p-16 w-full max-w-6xl shadow-sm min-h-[450px] flex flex-col items-center justify-center">
        <h2 className="text-3xl font-bold mb-16 text-black">About the Division</h2>

        <div className="flex flex-col md:flex-row gap-12 w-full justify-center items-center">
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
      <div className="bg-white rounded-[60px] p-16 w-full max-w-6xl shadow-sm flex flex-col md:flex-row justify-around items-center gap-12">
        {[1, 2, 3].map((num) => (
          <div key={num} className="flex flex-col items-center gap-6">
            <div className="w-40 h-40 rounded-full overflow-hidden border-8 border-[#9DD9D2] flex items-center justify-center bg-[#9DD9D2]">
              <Image
                src={userImg}
                alt={`Contact ${num}`}
                width={160}
                height={160}
                className="object-cover"
              />
            </div>
            <span className="text-2xl font-bold text-black">Contact {num}</span>
          </div>
        ))}
      </div>
    </main>
  );
}
