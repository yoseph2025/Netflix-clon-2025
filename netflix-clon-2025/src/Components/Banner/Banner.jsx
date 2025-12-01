import { useEffect, useState } from "react";
import "./Banner.css";

const Banner = () => {
  const [movie, setMovie] = useState(null);

  const API_KEY = import.meta.env.VITE_TMDB_API_KEY;

  useEffect(() => {
    const fetchBanner = async () => {
      try {
        const response = await fetch(
          `https://api.themoviedb.org/3/discover/tv?api_key=${API_KEY}&with_networks=213`
        );

        const data = await response.json();
        setMovie(data.results[Math.floor(Math.random() * data.results.length)]);
      } catch (error) {
        console.error("Banner Fetch Error:", error);
      }
    };

    fetchBanner();
  }, [API_KEY]);

  return (
    <header
      className="banner"
      style={{
        backgroundSize: "cover",
        backgroundImage: movie
          ? `url("https://image.tmdb.org/t/p/original/${movie.backdrop_path}")`
          : "none",
        backgroundPosition: "center center",
      }}
    >
      <div className="banner-contents">
        <h1 className="banner-title">
          {movie?.name || movie?.title || movie?.original_name}
        </h1>

        <div className="banner-buttons">
          <button className="banner-button">Play</button>
          <button className="banner-button">My List</button>
        </div>

        <p className="banner-description">
          {movie?.overview?.length > 150
            ? movie.overview.substring(0, 150) + "..."
            : movie?.overview}
        </p>
      </div>

      <div className="banner-fadeBottom"></div>
    </header>
  );
};

export default Banner;
