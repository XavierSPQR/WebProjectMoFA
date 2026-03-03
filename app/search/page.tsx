"use client";

import React, { Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import { SEARCH_INDEX, SearchResult } from '@/lib/search-index';
import { Search, ChevronRight } from 'lucide-react';

const SearchResults = () => {
  const searchParams = useSearchParams();
  const query = searchParams.get('q') || '';

  const results = query
    ? SEARCH_INDEX.filter((item) =>
        item.title.toLowerCase().includes(query.toLowerCase()) ||
        item.content.toLowerCase().includes(query.toLowerCase())
      )
    : [];

  const getSnippet = (content: string, query: string) => {
    if (!query) return content.substring(0, 160) + '...';

    const index = content.toLowerCase().indexOf(query.toLowerCase());
    if (index === -1) return content.substring(0, 160) + '...';

    const start = Math.max(0, index - 60);
    const end = Math.min(content.length, index + 100);
    let snippet = content.substring(start, end);

    if (start > 0) snippet = '...' + snippet;
    if (end < content.length) snippet = snippet + '...';

    return snippet;
  };

  return (
    <main className="flex-grow container mx-auto px-4 py-8 max-w-4xl">
      <nav className="mb-8 text-sm flex items-center gap-2 text-slate-400">
        <Link href="/" className="hover:text-navy transition-colors">Home</Link>
        <ChevronRight size={14} />
        <span className="text-navy font-semibold">Search Results</span>
      </nav>

      <div className="mb-12">
        <h1 className="text-4xl font-extrabold text-navy tracking-tight mb-4 flex items-center gap-3">
          <Search className="text-yellow w-8 h-8" />
          Search Results
        </h1>
        <p className="text-slate-600 text-lg">
          {query ? (
            <>Showing results for &quot;<span className="font-bold text-navy">{query}</span>&quot;</>
          ) : (
            "Please enter a search term."
          )}
        </p>
      </div>

      <div className="space-y-8">
        {results.length > 0 ? (
          results.map((result, index) => (
            <div key={index} className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
              <Link href={result.path} className="group">
                <h2 className="text-2xl font-bold text-navy group-hover:text-blue-600 transition-colors mb-2">
                  {result.title}
                </h2>
              </Link>
              <p className="text-slate-600 leading-relaxed">
                {getSnippet(result.content, query)}
              </p>
              <div className="mt-4 flex items-center text-blue-600 font-medium">
                <Link href={result.path} className="hover:underline flex items-center gap-1">
                  Visit Page <ChevronRight size={16} />
                </Link>
              </div>
            </div>
          ))
        ) : query ? (
          <div className="bg-slate-50 p-12 rounded-3xl text-center border-2 border-dashed border-slate-200">
            <p className="text-slate-500 text-xl font-medium">No results found for &quot;{query}&quot;.</p>
            <p className="text-slate-400 mt-2">Try searching for different keywords or check your spelling.</p>
          </div>
        ) : null}
      </div>
    </main>
  );
};

export default function SearchPage() {
  return (
    <Suspense fallback={<div className="container mx-auto px-4 py-8 text-center">Loading search results...</div>}>
      <SearchResults />
    </Suspense>
  );
}
