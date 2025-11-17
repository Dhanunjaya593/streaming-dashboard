// src/app/components/ClientSections.tsx
'use client';

import SearchSection from './SearchSection/SearchSection';
import GenreSection from './GenreSection/GenreSection';
import { Genre } from '@/types/genre';

export default function ClientSections({ genres }: { genres: Genre[] }) {
  return (
    <>
      <SearchSection />
      <GenreSection genres={genres} />
    </>
  );
}