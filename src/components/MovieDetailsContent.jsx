export default function MovieDetailsContent({ show, onClose }) {
  const backdrop =
    show.image?.original ||
    show.image?.medium ||
    "https://placehold.co/210x295";

  const releaseDate = show.premiered
    ? new Date(show.premiered).getFullYear()
    : "N/A";

  return (
    <div>
      <img
        src={backdrop}
        alt={show.name}
        className="w-full h-56 sm:h-64 lg:h-80 object-cover "
      />

      <div className="p-4 sm:p-6">
        <h2 className="text-xl sm:text-2xl font-bold mb-2">{show.name}</h2>

        <p className="text-gray-600 mb-2">
          ⭐ Rating: {show.rating?.average ?? "N/A"} &nbsp;|&nbsp; 📅 Release:{" "}
          {releaseDate}
        </p>

        {show.genres?.length > 0 && (
          <p className="text-sm text-gray-500 mb-4">
            🎭 Genre: {show.genres.join(", ")}
          </p>
        )}

        <h3 className="font-semibold mb-1">Overview:</h3>
        <div
          className="text-gray-700 leading-relaxed mb-6"
          dangerouslySetInnerHTML={{
            __html: show.summary || "No summary available.",
          }}
        />

        <div className="flex justify-end">
          <button
            onClick={onClose}
            className="px-4 py-3 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded transition"
          >
            ❌ Close
          </button>
        </div>
      </div>
    </div>
  );
}
