// src/app/movie/[id]/page.tsx

import { fetchMovieById } from '@/lib/tmdb';
import Image from 'next/image';
import { notFound } from 'next/navigation';

export default async function MovieDetail({ params }: { params: { id: string } }) {
  const movie = await fetchMovieById(params.id);

  if (!movie || movie.success === false || movie.status_code === 34) {
    notFound();
  }

  return (
    <div className="px-4 py-6 space-y-6">
      <h1 className="text-3xl font-bold text-white">{movie.title}</h1>

      {movie.backdrop_path && (
        <Image
          src={`https://image.tmdb.org/t/p/w1280${movie.backdrop_path}`}
          alt={movie.title}
          width={1280}
          height={720}
          className="rounded-lg"
        />
      )}

      <p className="text-gray-300">{movie.overview}</p>

      <div className="text-sm text-gray-400 space-y-1">
        <p>Release Date: {movie.release_date}</p>
        <p>Rating: {movie.vote_average} / 10</p>
        <p>Runtime: {movie.runtime} mins</p>
      </div>
    </div>
  );
}