import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Hero.css";
import photo from "../../Assets/logo.png";
import { useNavigate } from "react-router-dom";
import { Footer } from "../Footer/Footer";
import { Category } from "../Category/Category";

export function Hero() {
  const Navigate = useNavigate();
  const [items, setItems] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:1433/api/getMovie");
        setItems(response.data.data.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);
  console.log("selecteItmes", items);
  const itemsPerPage = 8;
  const totalPages = Math.ceil(items.length / itemsPerPage);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const startIndex = (currentPage - 1) * itemsPerPage;
  const selectedItems = items.slice(startIndex, startIndex + itemsPerPage);

  const handleItem = (id) => {
    Navigate("/item", { state: { selectedItem: id } });
  };
  const [tempImg, setTempImg] = useState("https://image.tmdb.org/t/p/w500/3w84hCFJATpiCO5g8hpdWVPBbmq.jpg");
  const [movienamee] = useState("Here is there is something new");
  
  if (loading) {
    return <div>Loading...</div>;
  }
  return (
    <>
      <Category />
      <div className="hero">
        <div className="movie-container">
          {selectedItems.map((item) => (
            <div
              key={item.id}
              className="main-item-list"
              onClick={() => handleItem(item.id)}
            >
              <div className="item-content">
                <img src={tempImg} className="banner" alt={item.name} />
                <h5 className="banner-name">{movienamee}</h5>
              </div>
            </div>
          ))}
        </div>
        <div className="pagination">
          {Array.from({ length: totalPages }, (_, index) => (
            <button
              key={index + 1}
              className={`page-button ${
                currentPage === index + 1 ? "active" : ""
              }`}
              onClick={() => handlePageChange(index + 1)}
            >
              {index + 1}
            </button>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
}
