// src/app/movie/[id]/not-found.tsx

export default function MovieNotFound() {
  return (
    <div className="px-4 py-6 text-center text-gray-300">
      <h1 className="text-2xl font-bold text-red-500">Movie Not Found</h1>
      <p>Sorry, we couldn’t find the movie you’re looking for.</p>
    </div>
  );
}