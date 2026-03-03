const MovieCard = ({ movie }) => {
  const imageBase = "https://image.tmdb.org/t/p/w500";

  return (
    <div className="bg-gray-900 rounded-xl overflow-hidden shadow-lg hover:scale-105 transition-transform duration-300">
      {movie.poster_path ? (
        <img
          src={`${imageBase}${movie.poster_path}`}
          alt={movie.title}
          className="w-full h-72 object-cover"
        />
      ) : (
        <div className="w-full h-72 flex items-center justify-center bg-gray-700 text-white">
          No Image
        </div>
      )}

      <div className="p-4">
        <h2 className="text-white font-semibold text-lg truncate">
          {movie.title}
        </h2>
        <p className="text-gray-400 text-sm">
          {movie.release_date?.slice(0, 4)}
        </p>
        <p className="text-yellow-400 font-bold">
          ⭐ {movie.vote_average}
        </p>
      </div>
    </div>
  );
};

export default MovieCard;