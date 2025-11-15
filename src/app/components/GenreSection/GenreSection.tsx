'use client';

import { useEffect, useState } from 'react';
import GenreFilter from '../GenreFilter/GenreFilter';
import MovieRow from '../MovieRow/MovieRow';

export default function GenreSection({
  genres,
}: {
  genres: { id: number; name: string }[];
}) {
  const [selectedGenre, setSelectedGenre] = useState<number | null>(null);
  const [movies, setMovies] = useState<any[]>([]);

  useEffect(() => {
    if (selectedGenre === null) {
      setMovies([]);
      return;
    }

    const fetchByGenre = async () => {
      const res = await fetch(
        `https://api.themoviedb.org/3/discover/movie?api_key=56731bef912a184dc5e7a53b70e43810&with_genres=${selectedGenre}`
      );
      const data = await res.json();
      setMovies(data.results);
    };

    fetchByGenre();
  }, [selectedGenre]);

  return (
    <div className="space-y-6">
      <GenreFilter genres={genres} onSelect={setSelectedGenre} />
      {movies.length > 0 && (
        <MovieRow movies={movies} categoryTitle="Filtered by Genre" />
      )}
    </div>
  );
}