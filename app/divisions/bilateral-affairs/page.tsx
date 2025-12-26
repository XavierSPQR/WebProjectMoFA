import Link from 'next/link';

export default function DivisionPage() {
  return (
    <main className="flex-grow p-8 container mx-auto">
      <nav className="mb-6 text-sm">
        <Link href="/" className="text-gray-500 hover:underline">Home</Link>
        <span className="mx-2">/</span>
        <Link href="/divisions" className="text-gray-500 hover:underline">Divisions</Link>
      </nav>
      <h1 className="text-3xl font-bold text-navy border-b-4 border-yellow inline-block mb-8">
        Bilateral Affairs
      </h1>
      <div className="bg-white p-10 rounded shadow-md border border-gray-100">
        <p className="text-gray-700">Detailed information for this division will be updated soon.</p>
      </div>
    </main>
  );
}
