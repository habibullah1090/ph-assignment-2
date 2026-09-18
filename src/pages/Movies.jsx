import { useState, useEffect } from "react";
import MovieCard from "../components/MovieCard";
import Modal from "../components/Modal";
import MovieDetailsContent from "../components/MovieDetailsContent";

export default function Movies() {
  const [query, setQuery] = useState("");
  const [shows, setShows] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedShow, setSelectedShow] = useState(null);

  useEffect(() => {

    const url = query.trim()
      ? `https://api.tvmaze.com/search/shows?q=${encodeURIComponent(query)}`
      : `https://api.tvmaze.com/shows`;

    fetch(url)
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch shows");
        return res.json();
      })
      .then((data) => {
        const normalized = query.trim() ? data.map((item) => item.show) : data;
        setShows(normalized);
      })
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, [query]);

  return (
    <div className="max-w-7xl mx-auto px-4 lg:px-8 py-8">
      {/* Search bar */}
      <div className="mb-8">
        <div className="flex items-center gap-3 border border-gray-300 rounded-full px-5 py-3 shadow-sm focus-within:ring-2 focus-within:ring-teal-500">
          <span>🔍</span>
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search for a movie..."
            className="w-full outline-none text-gray-700"
          />
        </div>
      </div>

      {loading && <p className="text-center text-gray-500">Loading...</p>}
      {error && <p className="text-center text-red-500">{error}</p>}
      {!loading && !error && shows.length === 0 && (
        <p className="text-center text-gray-500">No results found.</p>
      )}

      {/* Responsive grid: 1 col mobile → 2 → 3 → 4 desktop */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {shows.map((show) => (
          <MovieCard key={show.id} show={show} onSeeDetails={setSelectedShow} />
        ))}
      </div>

      {selectedShow && (
        <Modal onClose={() => setSelectedShow(null)}>
          <MovieDetailsContent show={selectedShow} onClose={() => setSelectedShow(null)} />
        </Modal>
      )}
    </div>
  );
}