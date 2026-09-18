import { Link } from "react-router-dom";
export default function Footer() {
  return (
    <footer className="w-screen text-white text-center bg-blue-950">
      <div className="pt-5 pb-3">
        {" "}
        <Link className="hover:text-amber-300 transition-colors" to="/">
          MovieExplorer
        </Link>{" "}
        |{" "}
        <Link className="hover:text-amber-300 transition-colors" to="/movies">
          Movies
        </Link>
      </div>
      <div className="mb-2">
        <p>
          <a
            href="https://www.facebook.com/habibullah1090"
            className="hover:text-amber-600 hover:bg-amber-100 transition-colors mb-3"
            target="_blank"
          >
            Facebook
          </a>{" "}
          <a
            href="https://www.github.com/habibullah1090"
            className="hover:text-amber-600 hover:bg-amber-100 transition-colors mb-3"
            target="_blank"
          >
            Github
          </a>
        </p>
      </div>
      <p className="pb-5"> © 2026 MovieExplorer </p>
    </footer>
  );
}
