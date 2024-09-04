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
  const [director, setDirector] = useState("");
  const [actor, setActor] = useState("");
  const [movieAndQualityDes, setMovieAndQualityDes] = useState("");
  const [movieName, setMovieName] = useState("");
  const [duration, setDuration] = useState("");
  const [language, setLanguage] = useState("");
  const [subtitles, setSubtitles] = useState("");
  const [size, setSize] = useState("");
  const [quality, setQuality] = useState([]);
  const [format, setFormat] = useState("");
  const [poster, setPoster] = useState("");
  const [storyline, setStoryline] = useState("");
  const [urls, setUrls] = useState([""]);
  const [entries, setEntries] = useState([{ title: "", url: "" }]);
  const [buttonText, setButtonText] = useState("Copy");

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
        setReleaseDate(data.data.release_date);
        setOverview(data.data.overview);
        setDirector(data.data.hero.director.map((item) => item));
        setActor(data.data.hero.actor.map((item) => item));
      } else {
        console.error("Error generating URL:", data.message);
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const handleUrlChange = (index, event) => {
    const newUrls = [...urls];
    newUrls[index] = event.target.value;
    setUrls(newUrls);
  };

  const addUrlInput = () => {
    setUrls([...urls, ""]);
  };

  // Download functions
  const handleInputChange = (index, field, value) => {
    const newEntries = [...entries];
    newEntries[index] = { ...newEntries[index], [field]: value };
    setEntries(newEntries);
  };

  const addEntry = () => {
    setEntries([...entries, { title: "", url: "" }]);
  };

  const submitAll = async () => {
    const data = {
      imgId,
      generateLink,
      movieHeading,
      selectedDate,
      description,
      aboutSite,
      title,
      genres,
      releaseDate,
      rating,
      overview,
      director,
      actor,
      movieAndQualityDes,
      movieName,
      duration,
      language,
      subtitles,
      size,
      quality,
      format,
      storyline,
      urls,
      entries,
    };

    try {
      const response = await fetch("http://localhost:1433/api/addMovie", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      console.log("responseee", response);
      if (response) {
        console.log("Data submitted successfully");
        // Optionally handle success, e.g., show a message or reset the form
      } else {
        console.error("Submission failed");
        // Optionally handle failure, e.g., show an error message
      }
    } catch (error) {
      console.error("Error:", error);
      // Optionally handle network errors
    }
  };

  const qualityOptions = ["4k", "2k", "1080p", "720p", "480p"];

  // Handle checkbox change
  const handleQualityChange = (event) => {
    const { value, checked } = event.target;

    if (checked) {
      // Add selected quality to the array
      setQuality((prevQuality) => [...prevQuality, value]);
    } else {
      // Remove unselected quality from the array
      setQuality((prevQuality) => prevQuality.filter((q) => q !== value));
    }
  };

  const copyToClipboard = () => {
    navigator.clipboard
      .writeText(generateLink)
      .then(() => {
        setButtonText("Copied");
        setTimeout(() => {
          setButtonText("Copy");
        }, 2000);
      })
      .catch((err) => {
        console.error("Failed to copy: ", err);
      });
  };

  return (
    <div className="main-container">
      <div className="hero-dashboard">
        <div className="tmtb-link-generator">
          <div className="tmdb-link">
            <input
              id="tmdb-link"
              className="input"
              type="imgId"
              value={imgId}
              placeholder="Enter TMDB ID"
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
                id="generatedUrl"
                type="text"
                className="input"
                value={generateLink}
                readOnly
                onFocus={(e) => e.target.select()}
              />
              <button className="copy-tmdb-url" onClick={copyToClipboard}>
                {buttonText}
              </button>
            </div>
          )}
        </div>
        <div className="movie-item-list">
          <div className="heading-upload-date">
            <div className="movie-main-heading head-with-date">
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
            <div className="uploaded-date head-with-date">
              <label htmlFor="date">Upload Date:</label>
              <DatePicker
                selected={selectedDate}
                onChange={(date) => setSelectedDate(date)}
                dateFormat="dd/MM/yyyy"
                placeholderText="Select a date"
                className="date-picker-input"
              />
            </div>
          </div>
          <div className="des-and-about-site-main">
            <div className="description des-with-about-site">
              <label htmlFor="description des-with-about-site">
                Description:
              </label>
              <textarea
                id="description"
                className="input"
                type="text"
                value={description}
                placeholder="Enter Movie Description"
                onChange={(e) => setDescription(e.target.value)}
                required
                rows="1"
              />
            </div>
            <div className="about-site des-with-about-site">
              <label htmlFor="about-site">About Site:</label>
              <textarea
                id="about-site"
                className="input"
                type="text"
                value={aboutSite}
                placeholder="Enter About Site"
                onChange={(e) => setAboutSite(e.target.value)}
                required
                rows="1"
              />
            </div>
          </div>
          <div className="movie-overview-card">
            <div className="card-one default-one-card">
              <div className="title one-all-card">
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
              </div>

              <div className="one-all-card">
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
              </div>
            </div>

            <div className="card-two default-one-card">
              <div className="one-all-card">
                <label htmlFor="title">Release Data:</label>
                <input
                  id="Release-date"
                  className="input"
                  type="text"
                  value={releaseDate}
                  placeholder="Enter Release Date"
                  onChange={(e) => setReleaseDate(e.target.value)}
                  required
                />
              </div>

              <div className="one-all-card">
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
              </div>
            </div>

            <div className="card-three default-one-card">
              <div className="one-all-card">
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

              <div className="one-all-card">
                <label htmlFor="title">Director :</label>
                <input
                  id="Director"
                  className="input"
                  type="text"
                  value={director}
                  placeholder="Enter Overview"
                  onChange={(e) => setDirector(e.target.value)}
                  required
                />
              </div>
            </div>

            <div className="card-four default-one-card">
              <div className="one-all-card">
                <label htmlFor="title">Actor :</label>
                <input
                  id="actor"
                  className="input"
                  type="text"
                  value={actor}
                  placeholder="Enter Overview"
                  onChange={(e) => setActor(e.target.value)}
                  required
                />
              </div>
            </div>
          </div>
          <div className="movie-core-details">
            <div className="default-one-card">
              <div className="one-all-card">
                <label htmlFor="t2-1">Movie and Quality:</label>
                <textarea
                  id="movieAndQuality"
                  className="input"
                  type="text"
                  value={movieAndQualityDes}
                  placeholder="Enter Movie Description"
                  onChange={(e) => setMovieAndQualityDes(e.target.value)}
                  required
                  rows="1"
                />
              </div>
            </div>
            <div className="movie-info">
              <div className="movieName one-all-card">
                <label htmlFor="item-info">Movie Name:</label>
                <textarea
                  id="movieName"
                  className="input"
                  type="text"
                  value={movieName}
                  placeholder="Enter Movie Description"
                  onChange={(e) => setMovieName(e.target.value)}
                  required
                  rows="1"
                />
              </div>
              <div className="duration-language default-one-card">
                <div className="one-all-card">
                  <label htmlFor="item-info">Duration:</label>
                  <input
                    id="duration"
                    className="input"
                    type="text"
                    value={duration}
                    placeholder="Enter Duration"
                    onChange={(e) => setDuration(e.target.value)}
                    required
                  />
                </div>
                <div className="one-all-card">
                  <label htmlFor="item-info">Language:</label>
                  <input
                    id="language"
                    className="input"
                    type="text"
                    value={language}
                    placeholder="Enter Language"
                    onChange={(e) => setLanguage(e.target.value)}
                    required
                  />
                </div>
              </div>
              <div className="default-one-card">
                <div className="one-all-card">
                  <label htmlFor="item-info">Subtitles:</label>
                  <input
                    id="subtitles"
                    className="input"
                    type="text"
                    value={subtitles}
                    placeholder="Enter Subtitles"
                    onChange={(e) => setSubtitles(e.target.value)}
                    required
                  />
                </div>
                <div className="one-all-card">
                  <label htmlFor="item-info">Size:</label>
                  <input
                    id="size"
                    className="input"
                    type="text"
                    value={size}
                    placeholder="Enter Size"
                    onChange={(e) => setSize(e.target.value)}
                    required
                  />
                </div>
              </div>
              <div className="quality one-all-card">
                <div className="quality-option">
                  {qualityOptions.map((option) => (
                    <div key={option}>
                      <label>
                        <input
                          type="checkbox"
                          value={option}
                          checked={quality.includes(option)}
                          onChange={handleQualityChange}
                        />
                        {option}
                      </label>
                    </div>
                  ))}
                </div>
              </div>
              <div className="default-one-card">
                <div className="one-all-card">
                  <label htmlFor="item-info">Format:</label>
                  <input
                    id="format"
                    className="input"
                    type="text"
                    value={format}
                    placeholder="Enter Format"
                    onChange={(e) => setFormat(e.target.value)}
                    required
                  />
                </div>
                <div className="one-all-card">
                  <label htmlFor="item-info">Poster:</label>
                  <input
                    id="poster"
                    className="input"
                    type="text"
                    value={poster}
                    placeholder="Enter poster url"
                    onChange={(e) => setPoster(e.target.value)}
                    required
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="movie-core-details">
            <div className="default-one-card">
              <div className="one-all-card">
                <div className="storyline">
                  <label htmlFor="story-line">Storyline:</label>
                  <textarea
                    id="storyline"
                    className="input"
                    type="text"
                    value={storyline}
                    placeholder="Enter Movie Description"
                    onChange={(e) => setStoryline(e.target.value)}
                    required
                    rows="1"
                  />
                </div>
              </div>
            </div>

            <div className="one-all-card">
              <div className="screenshot">
                <label htmlFor="Screenshot">Screenshot</label>
                <div className="url-index">
                  {urls.map((url, index) => (
                    <div key={index} className="url-input-container">
                      <label htmlFor={`url-${index}`}>URL {index + 1}:</label>
                      <input
                        id={`url-${index}`}
                        className="url-input"
                        type="text"
                        value={url}
                        placeholder="Enter URL"
                        onChange={(e) => handleUrlChange(index, e)}
                      />
                    </div>
                  ))}
                  <button
                    type="button"
                    onClick={addUrlInput}
                    className="add-screenshot-url-button"
                  >
                    Add More
                  </button>
                </div>
              </div>
            </div>
          </div>
          {/* Download URLs */}

          <div className="movie-core-details">
            <div className="download-urls">
              <h2>Add Download URLs</h2>
              {entries.map((entry, index) => (
                <div key={index} className="entry-input-container">
                  <div className="one-all-card">
                    <label htmlFor={`title-${index}`}>Title {index + 1}:</label>
                    <input
                      id={`title-${index}`}
                      className="new-url-input"
                      type="text"
                      value={entry.title}
                      placeholder="Enter title"
                      onChange={(e) =>
                        handleInputChange(index, "title", e.target.value)
                      }
                    />
                  </div>
                  <div className="one-all-card">
                  <label htmlFor={`url-${index}`}>URL {index + 1}:</label>
                  <input
                    id={`url-${index}`}
                    className="new-url-input"
                    type="text"
                    value={entry.url}
                    placeholder="Enter URL"
                    onChange={(e) =>
                      handleInputChange(index, "url", e.target.value)
                    }
                  />
                  </div>
                </div>
              ))}
              <button
                type="button"
                onClick={addEntry}
                className="add-url-entry-button"
              >
                Add More
              </button>
            </div>
          </div>

          <button type="button" onClick={submitAll} className="add-new-movie-btn">
            Submit All
          </button>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
