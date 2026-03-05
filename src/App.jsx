import { Routes, Route, Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { FiSearch } from "react-icons/fi";
import Home from "./pages/Home";
import Favorites from "./pages/Favorites";

function App() {
  const [searchTerm, setSearchTerm] = useState("");
 const navigate = useNavigate();

   useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") {
        setSearchTerm("");   
        navigate("/");       
      }
    };

    window.addEventListener("keydown", handleEsc);

    return () => {
      window.removeEventListener("keydown", handleEsc);
    };
  }, [navigate]);

  return (
    <div className="bg-black min-h-screen text-white">
<nav className="sticky top-0 z-50 flex justify-between items-center p-6 border-b border-gray-800 bg-black/80 backdrop-blur">
        <Link 
        to="/" 
        onClick={() => setSearchTerm("")} 
        className="text-2xl font-bold">
          🎬 CineStream
        </Link>

    <div className="flex items-center gap-4">
  
  <div className="relative">
    <FiSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-lg" />

    <input
      type="search"
      placeholder="Search movies..."
      className="w-64 pl-10 pr-4 py-2 rounded-lg bg-gray-800 text-white 
      placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500"
      value={searchTerm}
      onChange={(e) => setSearchTerm(e.target.value)}
    />
  </div>

  <Link
    to="/favorites"
    className="bg-red-600 px-4 py-2 rounded-lg hover:bg-red-700 transition"
  >
    ❤️ My Favorites
  </Link>

</div>
      </nav>

      <Routes>
        <Route path="/" element={<Home searchTerm={searchTerm} />} />
        <Route path="/favorites" element={<Favorites />} />
      </Routes>
    </div>
  );
}

export default App;