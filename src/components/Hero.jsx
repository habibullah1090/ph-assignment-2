import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <div
      className="text-center h-screen"
      style={{
        background:
          "linear-gradient(130deg, rgba(2, 0, 36, 1) 0%, rgba(9, 9, 121, 1) 35%, rgba(0, 212, 255, 1) 100%)",
      }}
    >
      <h1 className="title md:text-5xl text-3xl mb-8 text-amber-50 md:pt-50 pt-30 ">
        DISCOVER MOVIES
      </h1>
      <h2 className="title text-amber-50">
        Explore and discover your favorite movies from around the world.
      </h2>
      <Link
        className="mt-4 inline-block px-6 py-2 bg-teal-500 text-white uppercase tracking-wider rounded hover:bg-teal-600 transition"
        to="/movies"
      >
        Explore Now
      </Link>
    </div>
  );
}
