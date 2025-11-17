// src/app/components/MovieRow/MovieRow.tsx


import Image from 'next/image';
import Link from 'next/link';

export default function MovieRow({
  movies,
  categoryTitle,
}: {
  movies: any[];
  categoryTitle: string;
}) {
  return (
    <section className="space-y-3">
      <h2 className="text-xl font-semibold text-white">{categoryTitle}</h2>
      <div className="flex gap-4 overflow-x-auto pb-2">
        {movies.map((movie) => (
          <Link href={`/movie/${movie.id}`} key={movie.id}>
            <Image
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              alt={movie.title}
              width={150}
              height={225}
              className="rounded hover:scale-105 transition"
            />
          </Link>
        ))}
      </div>
    </section>
  );
}