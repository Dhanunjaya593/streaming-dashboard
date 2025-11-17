
'use client';

import { Genre } from '@/types/genres';

type Props = {
  genres: Genre[];
  onSelect: React.Dispatch<React.SetStateAction<number | null>>;
};

export default function GenreFilter({ genres, onSelect }: Props) {
  return (
    <div className="flex flex-wrap gap-2">
      {genres.map((genre) => (
        <button
          key={genre.id}
          onClick={() => onSelect(genre.id)}
          className="px-4 py-2 bg-gray-800 text-white rounded hover:bg-gray-700 transition"
        >
          {genre.name}
        </button>
      ))}
    </div>
  );
}