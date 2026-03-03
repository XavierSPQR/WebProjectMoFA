'use client';

import { useState, useEffect } from 'react';
import { db } from '../firebase';
// Import Timestamp to correctly handle the date object from Firestore
import { collection, getDocs, query, orderBy, Timestamp } from 'firebase/firestore';
import { 
  ChevronDown, 
  User, 
  Mic2, 
  Globe, 
  FileText, 
  Users, 
  Award, 
  BookOpen, 
  Calendar, 
  ChevronUp 
} from 'lucide-react';

interface Statement {
  id: string;
  title: string;
  date: string;
  excerpt: string;
  fullContent: string;
  category: string;
  subCategory?: string;
}

const categories = [
  { id: 'president', name: 'H.E. President', icon: User },
  { id: 'pm', name: 'Hon. Prime Minister', icon: Award },
  { id: 'minister', name: 'Hon. Minister', icon: Mic2 },
  { id: 'deputy-minister', name: 'Hon. Deputy Minister', icon: Users },
  { id: 'secretary', name: 'Foreign Secretary', icon: BookOpen },
  { id: 'mission', name: 'Mission', icon: Globe },
];

const missionSubCategories = ['Geneva', 'New York', 'Other'];

export default function StatementsPage() {
  const [allStatements, setAllStatements] = useState<Statement[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedCat, setSelectedCat] = useState(categories[0]);
  const [isMissionExpanded, setIsMissionExpanded] = useState(false);
  const [selectedSubCat, setSelectedSubCat] = useState(missionSubCategories[0]);
  const [expandedIds, setExpandedIds] = useState<Set<string>>(new Set());

  useEffect(() => {
    const fetchData = async () => {
      try {
        console.log("Fetching statements from Firestore...");
        const statementsCollection = collection(db, 'statements');
        const q = query(statementsCollection, orderBy('date', 'desc'));
        const querySnapshot = await getDocs(q);

        const fetchedStatements = querySnapshot.docs.map(doc => {
          const data = doc.data();

          // FINAL CORRECTION: Manually construct a Timestamp from the raw seconds/nanoseconds object
          const firestoreTimestamp = new Timestamp(data.date.seconds, data.date.nanoseconds);
          const jsDate = firestoreTimestamp.toDate();
          const date = jsDate.toLocaleDateString('en-GB', {
            day: '2-digit',
            month: '2-digit',
            year: 'numeric'
          }).replace(/\//g, '.');

          return {
            id: doc.id,
            title: data.title,
            date: date,
            excerpt: data.excerpt,
            fullContent: data.fullContent,
            category: data.category,
            subCategory: data.subCategory
          } as Statement;
        });

        console.log(`Successfully fetched ${fetchedStatements.length} statements.`);
        setAllStatements(fetchedStatements);
      } catch (err) {
        console.error("Firebase fetch error:", err);
        setError('Failed to load statements from the database.');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const toggleExpand = (id: string) => {
    const newExpanded = new Set(expandedIds);
    if (newExpanded.has(id)) {
      newExpanded.delete(id);
    } else {
      newExpanded.add(id);
    }
    setExpandedIds(newExpanded);
  };

  const handleCategoryClick = (cat: typeof categories[0]) => {
    setSelectedCat(cat);
    if (cat.id === 'mission') {
      if(!isMissionExpanded) setIsMissionExpanded(true);
    } else {
      setIsMissionExpanded(false);
    }
    setExpandedIds(new Set()); 
  };

  const activeStatements = allStatements.filter(statement => {
    if (selectedCat.id === 'mission') {
      return statement.category === 'mission' && statement.subCategory === selectedSubCat;
    }
    return statement.category === selectedCat.id;
  });

  return (
    <main className="flex-grow p-6 md:p-10 container mx-auto bg-[#fdfdfd]">
      <div className="flex flex-col lg:flex-row gap-10">
        <aside className="w-full lg:w-1/4">
          <div className="sticky top-8 bg-white border border-slate-200 rounded-3xl shadow-sm overflow-hidden">
            <div className="p-6 bg-navy text-white flex items-center gap-3">
              <FileText className="text-yellow" size={22} />
              <h2 className="text-lg font-bold">Statements</h2>
            </div>
            <nav className="p-3 flex flex-col gap-1">
              {categories.map((cat) => (
                <div key={cat.id}>
                  <button
                    onClick={() => handleCategoryClick(cat)}
                    className={`w-full flex items-center justify-between px-4 py-4 rounded-2xl transition-all ${
                      selectedCat.id === cat.id ? 'bg-blue-50 text-navy font-bold' : 'text-slate-600 hover:bg-slate-50'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <cat.icon size={20} className={selectedCat.id === cat.id ? 'text-navy' : 'text-slate-400'} />
                      <span className="text-base">{cat.name}</span>
                    </div>
                    {cat.id === 'mission' && <ChevronDown size={16} className={`transition-transform ${isMissionExpanded ? 'rotate-180' : ''}`} />}
                  </button>
                  {cat.id === 'mission' && isMissionExpanded && (
                    <div className="ml-11 my-1 flex flex-col gap-1 border-l-2 border-slate-100 pl-3">
                      {missionSubCategories.map((sub) => (
                        <button
                          key={sub}
                          onClick={() => { setSelectedCat(cat); setSelectedSubCat(sub); }}
                          className={`text-left px-3 py-2 text-base rounded-lg ${selectedCat.id === 'mission' && selectedSubCat === sub ? 'text-navy font-bold bg-slate-100' : 'text-slate-500'}`}
                        >
                          {sub}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </nav>
          </div>
        </aside>

        <section className="w-full lg:w-3/4">
          <div className="mb-8">
            <h1 className="text-4xl font-extrabold text-navy tracking-tight">
              {selectedCat.id === 'mission' ? `${selectedSubCat} Mission` : selectedCat.name}
            </h1>
            <div className="h-1.5 w-24 bg-yellow mt-4 rounded-full"></div>
          </div>

          {loading && <p>Loading statements...</p>}
          {error && <p className="text-red-500">{error}</p>}

          <div className="space-y-6">
            {!loading && !error && activeStatements.length > 0 ? (
              activeStatements.map((item) => {
                const isExpanded = expandedIds.has(item.id);
                return (
                  <div key={item.id} className="bg-white rounded-[32px] shadow-sm border border-slate-100 overflow-hidden transition-all duration-300">
                    <div className="p-8">
                      <div className="flex flex-col md:flex-row justify-between gap-4 mb-4">
                        <h3 className="text-xl md:text-2xl font-bold text-navy leading-tight">{item.title}</h3>
                        <div className="flex items-center gap-2 text-slate-400 bg-slate-50 px-3 py-1 rounded-full text-base h-fit whitespace-nowrap">
                          <Calendar size={14} /> {item.date}
                        </div>
                      </div>
                      
                      {!isExpanded && <p className="text-slate-600 leading-relaxed mb-6 line-clamp-2 italic">{item.excerpt}</p>}

                      <div className={`transition-all duration-500 ease-in-out overflow-hidden ${isExpanded ? 'max-h-[2000px] opacity-100 mb-8' : 'max-h-0 opacity-0'}`}>
                        <div className="prose prose-slate max-w-none text-slate-700 leading-relaxed border-t border-slate-100 pt-6">
                          {item.fullContent}
                        </div>
                      </div>

                      <button onClick={() => toggleExpand(item.id)} className="inline-flex items-center gap-2 text-navy font-bold hover:text-blue-700 transition-colors text-base">
                        {isExpanded ? (<>Show Less <ChevronUp size={16} /></>) : (<>Read Full Statement <ChevronDown size={16} /></>)}
                      </button>
                    </div>
                  </div>
                );
              })
            ) : (
              !loading && !error && (
                <div className="bg-white p-20 rounded-[40px] border border-dashed border-slate-200 text-center">
                  <FileText className="text-slate-300 mx-auto mb-4" size={32} />
                  <p className="text-slate-400">No statements found for this category.</p>
                </div>
              )
            )}
          </div>
        </section>
      </div>

      <style jsx global>{`
        .text-navy { color: #002B5B; }
        .bg-navy { background-color: #002B5B; }
        .bg-yellow { background-color: #FFCC00; }
      `}</style>
    </main>
  );
}
