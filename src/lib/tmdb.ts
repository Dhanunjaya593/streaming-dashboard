// src/lib/tmdb.ts

const BASE_URL = 'https://api.themoviedb.org/3';
const API_KEY = process.env.TMDB_API_KEY;

console.log('🔑 TMDB API KEY:', API_KEY);

export async function fetchPopular() {
  try {
    const url = `${BASE_URL}/movie/popular?api_key=${API_KEY}`;
    console.log(`🔍 Fetching popular movies: ${url}`);

    const res = await fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
      cache: 'no-store',
    });

    if (!res.ok) {
      console.error(`❌ TMDB error: ${res.status} ${res.statusText}`);
      throw new Error('Failed to fetch popular movies');
    }

    return res.json();
  } catch (error) {
    console.error('❌ Error in fetchPopular:', error);
    throw error;
  }
}

export async function fetchMovieById(id: string) {
  try {
    const url = `${BASE_URL}/movie/${id}?api_key=${API_KEY}`;
    console.log(`🔍 Fetching: ${url}`);

    const res = await fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
      cache: 'no-store',
    });

    if (!res.ok) {
      console.error(`❌ TMDB error: ${res.status} ${res.statusText}`);
      throw new Error('Failed to fetch movie details');
    }

    return res.json();
  } catch (error) {
    console.error(`❌ Error fetching movie ${id}:`, error);
    throw error;
  }
}

export async function fetchTrending() {
  try {
    const url = `${BASE_URL}/trending/movie/week?api_key=${API_KEY}`;
    console.log(`🔥 Fetching trending movies: ${url}`);

    const res = await fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
      cache: 'no-store',
    });

    if (!res.ok) {
      console.error(`❌ TMDB error: ${res.status} ${res.statusText}`);
      throw new Error('Failed to fetch trending movies');
    }

    return res.json();
  } catch (error) {
    console.error('❌ Error in fetchTrending:', error);
    throw error;
  }
}

export async function getGenres() {
  try {
    const url = `${BASE_URL}/genre/movie/list?api_key=${API_KEY}`;
    console.log(`🎭 Fetching genres: ${url}`);

    const res = await fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
      cache: 'no-store',
    });

    if (!res.ok) {
      console.error(`❌ TMDB error: ${res.status} ${res.statusText}`);
      throw new Error('Failed to fetch genres');
    }

    return res.json();
  } catch (error) {
    console.error('❌ Error in getGenres:', error);
    throw error;
  }
}