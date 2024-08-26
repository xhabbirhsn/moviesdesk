import React, { useState } from "react";
import "./Dashboard.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const Dashboard = () => {
  const [generateLink, setGenerateLink] = useState("");
  const [imgId, setimgId] = useState("");
  const [movieHeading, setMovieHeading] = useState("");
  const [description, setDescription] = useState("");
  const [aboutSite, setAboutSite] = useState("");
  const [selectedDate, setSelectedDate] = useState(null);
  const [title, setTitle] = useState("");
  const [genres, setGenres] = useState("");
  const [releaseDate, setReleaseDate] = useState("");
  const [rating, setRating] = useState("");
  const [overview, setOverview] = useState("");

  const handleSubmit = async () => {
    try {
      // Replace this with your actual API call
      const response = await fetch("http://localhost:1433/api/generateBanner", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ imgId: imgId }),
      });
      const data = await response.json();
      console.log("daattta", data.data);
      if (data) {
        setGenerateLink(data.data.poster);
        setTitle(data.data.original_title);
        setGenres(data.data.genres.map((item) => item.name));
        setReleaseDate(data.data.release_date)
        setOverview(data.data.overview)
      } else {
        console.error("Error generating URL:", data.message);
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className="main-container">
      <div className="hero-dashboard">
        <div className="admin-form">
          <input
            id="email"
            className="input"
            type="email"
            value={imgId}
            onChange={(e) => setimgId(e.target.value)}
            required
          />
          <button className="img-generate-btn" onClick={handleSubmit}>
            Generate Url
          </button>
        </div>
        {generateLink && (
          <div>
            <input
              id="generateLink"
              type="text"
              className="input"
              value={generateLink}
              readOnly
              onFocus={(e) => e.target.select()}
            />
          </div>
        )}
        <div className="movie-details">
          <div className="movie-main-heading">
            <label htmlFor="movieHeading">Movie Heading:</label>
            <input
              id="movieHeading"
              className="input"
              type="text"
              value={movieHeading}
              placeholder="Enter Movie Heading"
              onChange={(e) => setMovieHeading(e.target.value)}
              required
            />
          </div>
          <div className="uploaded-date">
            <label htmlFor="date">Upload Date:</label>
            <DatePicker
              selected={selectedDate}
              onChange={(date) => setSelectedDate(date)}
              dateFormat="dd/MM/yyyy"
              placeholderText="Select a date"
              className="date-picker-input"
            />
          </div>
          <div className="description">
            <label htmlFor="description">Description:</label>
            <input
              id="description"
              className="input"
              type="text"
              value={description}
              placeholder="Enter Movie Description"
              onChange={(e) => setDescription(e.target.value)}
              required
            />
          </div>
          <div className="about-site">
            <label htmlFor="miniDescription">About Site:</label>
            <input
              id="miniDescription"
              className="input"
              type="text"
              value={aboutSite}
              placeholder="Enter About Site"
              onChange={(e) => setAboutSite(e.target.value)}
              required
            />
          </div>
          <div className="movie-overview-card">
            <label htmlFor="title">Title:</label>
            <input
              id="title"
              className="input"
              type="text"
              value={title}
              placeholder="Enter Title"
              onChange={(e) => setTitle(e.target.value)}
              required
            />

            <label htmlFor="title">genres:</label>
            <input
              id="genres"
              className="input"
              type="text"
              value={genres}
              placeholder="Enter genres"
              onChange={(e) => setGenres(e.target.value)}
              required
            />

            <label htmlFor="title">Release Data:</label>
            <input
              id="Release-datae"
              className="input"
              type="text"
              value={releaseDate}
              placeholder="Enter Release Data"
              onChange={(e) => setReleaseDate(e.target.value)}
              required
            />

<label htmlFor="title">Rating :</label>
            <input
              id="Rating"
              className="input"
              type="text"
              value={rating}
              placeholder="Enter Rating"
              onChange={(e) => setRating(e.target.value)}
              required
            />

<label htmlFor="title">Overview :</label>
            <input
              id="Overview"
              className="input"
              type="text"
              value={overview}
              placeholder="Enter Overview"
              onChange={(e) => setOverview(e.target.value)}
              required
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
