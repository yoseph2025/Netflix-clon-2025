import React, { useState, useEffect } from "react";
import "./Banner.css";

const Banner = () => {
  const [videos, setVideos] = useState([]);

  const API_KEY = "AIzaSyBewKP0F5b4PztkV6kGCGBiq6L6Swq-L2I";
  const CHANNEL_ID = "UCVls1GmFKf6WlTraIb_IaJg";
  const MAX_RESULTS = 8;

  useEffect(() => {
    const fetchVideos = async () => {
      const url = `https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=${CHANNEL_ID}&maxResults=${MAX_RESULTS}&order=viewCount&type=video&key=${API_KEY}`;
      try {
        const res = await fetch(url);
        const data = await res.json();
        setVideos(data.items);
      } catch (error) {
        console.error("Error fetching YouTube videos:", error);
      }
    };

    fetchVideos();
  }, []);

  return (
    <div className="netflix-section">
      <h2 className="netflix-title">Apple Official Videos</h2>

      <div className="netflix-row">
        {videos.map((video) => (
          <div key={video.id.videoId} className="netflix-card">
            <img
              className="netflix-thumbnail"
              src={video.snippet.thumbnails.high.url}
              alt={video.snippet.title}
            />
            <div className="netflix-overlay">
              <h3>{video.snippet.title}</h3>
              <p>{video.snippet.description}</p>
              <span>
                {new Date(video.snippet.publishedAt).toLocaleDateString()}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Banner;
