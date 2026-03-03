import { useEffect,useState } from "react";
import { fetchPopularMovies, searchMovies } from "./services/tmdb";
import MovieCard from "./components/MovieCard";

function App() {
   const [movies, setMovies] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadMovies = async () => {
      setLoading(true);
      const data = searchTerm
      ? await fetchPopularMovies(searchTerm)
      :await fetchPopularMovies();

      setMovies(data);
      setLoading(false);
    };

    loadMovies();
  }, [searchTerm]);

 return (
    <div className="bg-black min-h-screen text-white p-6">
      <h1 className="text-4xl font-bold text-center mb-6">
        🎬 CineStream
      </h1>

      {/* Search Bar */}
      <div className="flex justify-center mb-8">
        <input
          type="text"
          placeholder="Search movies..."
          className="w-full max-w-md px-4 py-2 rounded-lg bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-red-500"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      {loading ? (
        <p className="text-center">Loading movies...</p>
      ) : (
        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
          {movies.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
      )}
    </div>
  );
}

export default App;