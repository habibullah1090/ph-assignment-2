export default function MovieCard({ show, onSeeDetails }) {
  const poster = show.image?.medium || "https://placehold.co/210x295";
  const year = show.premiered ? new Date(show.premiered).getFullYear() : "N/A";
  const rating = show.rating?.average ?? "N/A";

  return (
    <div className="border-teal-200 border rounded-lg overflow-hidden shadow-sm hover:shadow-md transition flex flex-col">
      <img src={poster} alt={show.name} className="w-full h-72 object-cover" />
      <div className="p-4 flex flex-col gap-2 flex-1">
        <h3 className="font-semibold text-lg truncate">{show.name}</h3>
        <p className="text-sm text-gray-500">
          ⭐ {rating} • 📅 {year}
        </p>
        <button
          onClick={() => onSeeDetails(show)}
          className="mt-auto bg-teal-500 text-white py-3 rounded hover:bg-teal-600 transition text-base"
        >
          See Details
        </button>
      </div>
    </div>
  );
}