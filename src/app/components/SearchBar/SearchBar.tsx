'use client';

import { useState } from 'react';

export default function SearchBar({ onSearch }: { onSearch: (query: string) => void }) {
  const [input, setInput] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(input.trim());
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-2 py-4">
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Search movies..."
        className="flex-1 px-4 py-2 rounded bg-gray-900 text-white border border-gray-700"
      />
      <button
        type="submit"
        className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
      >
        Search
      </button>
    </form>
  );
}