// src/app/components/HeroBanner/HeroBanner.tsx
import Image from 'next/image';
import { Movie } from '@/types/movie';

export default function HeroBanner({ movie }: { movie: Movie }) {
  return (
    <section className="relative h-72 md:h-96">
      <Image
        src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
        alt={movie.title}
        fill
        priority
        style={{ objectFit: 'cover' }}
      />
      <div className="absolute bottom-4 left-4 text-white text-xl font-bold">
        {movie.title}
      </div>
    </section>
  );
}