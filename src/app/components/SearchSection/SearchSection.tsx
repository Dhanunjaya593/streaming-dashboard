'use client';

import { useState } from 'react';
import SearchBar from '../SearchBar/SearchBar';
import MovieRow from '../MovieRow/MovieRow';

export default function SearchSection() {
  const [movies, setMovies] = useState<any[]>([]);
  const [query, setQuery] = useState('');

  const handleSearch = async (term: string) => {
    setQuery(term);
    if (!term) {
      setMovies([]);
      return;
    }

    const res = await fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=56731bef912a184dc5e7a53b70e43810&query=${encodeURIComponent(term)}`
    );
    const data = await res.json();
    setMovies(data.results);
  };

  return (
    <div className="space-y-6">
      <SearchBar onSearch={handleSearch} />
      {movies.length > 0 && (
        <MovieRow movies={movies} categoryTitle={`Search Results for "${query}"`} />
      )}
    </div>
  );
}