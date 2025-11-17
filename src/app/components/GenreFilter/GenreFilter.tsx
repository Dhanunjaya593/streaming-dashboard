
import { useState } from 'react';

export default function GenreFilter({ genres }: { genres: { id: number; name: string }[] }) {
  const [selected, setSelected] = useState<number | null>(null);

  return (
    <div className="flex gap-3 overflow-x-auto py-2">
      {genres.map((genre) => (
        <button
          key={genre.id}
          onClick={() => setSelected(genre.id)}
          className={`px-4 py-2 rounded-full border ${
            selected === genre.id ? 'bg-blue-500 text-white' : 'bg-gray-800 text-gray-300'
          }`}
        >
          {genre.name}
        </button>
      ))}
    </div>
  );
}