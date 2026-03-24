import { Routes, Route, Link } from "react-router-dom";
import BlogHome from "./pages/BlogHome";

function App() {
  return (
    <div className="bg-black min-h-screen text-white">

      <nav className="p-6 border-b border-gray-800">
        <Link to="/" className="text-2xl font-bold">
          📝 Blog App
        </Link>
      </nav>

      <Routes>
        <Route path="/" element={<BlogHome />} />
      </Routes>
    </div>
  );
}

export default App;