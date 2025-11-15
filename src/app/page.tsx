// src/app/page.tsx

import { fetchPopular, fetchTrending, getGenres } from '@/lib/tmdb';
import HeroBanner from './components/HeroBanner/HeroBanner';
import MovieRow from './components/MovieRow/MovieRow';
import GenreSection from './components/GenreSection/GenreSection';
import SearchSection from './components/SearchSection/SearchSection';

export default async function HomePage() {
  const [popularData, trendingData, genreData] = await Promise.all([
    fetchPopular(),
    fetchTrending(),
    getGenres(),
  ]);

  const popularMovies = popularData.results;
  const trendingMovies = trendingData.results;
  const genres = genreData.genres;

  return (
    <main className="space-y-8 px-4">
      <HeroBanner movie={popularMovies[0]} />
      <SearchSection />
      <GenreSection genres={genres} />
      <MovieRow movies={popularMovies} categoryTitle="Popular Movies" />
      <MovieRow movies={trendingMovies} categoryTitle="Trending This Week" />
    </main>
  );
}