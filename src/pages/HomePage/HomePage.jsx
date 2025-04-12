import "./HomePage.scss";
import { useState, useEffect } from "react";
import imageData from "./../../data/images.json";

export default function HomePage() {
  const [query, setQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [filteredImages, setFilteredImages] = useState(imageData);

const carouselImages = [
  { src: "images/frogmaze-c.jpg", alt: "Image 1" },
  { src: "images/pika-ic-c.jpg", alt: "Image 2" },
  { src: "images/raikou-c.jpg", alt: "Image 3" },
  { src: "images/agu-c.jpg", alt: "Image 4" },
  { src: "images/kera-c.jpg", alt: "Image 5" },
  { src: "images/terrier-c.jpg", alt: "Image 6" },
  { src: "images/lop-c.jpg", alt: "Image 7" },
  { src: "images/gato-c.jpg", alt: "Image 8" },
];


  useEffect(() => {
    const filtered = imageData.filter((image) => {
      const matchesSearch = image.name
        .toLowerCase()
        .includes(query.toLowerCase());
      const matchesCategory =
        selectedCategory === "All" ||
        image.category.toLowerCase() === selectedCategory.toLowerCase();
      return matchesSearch && matchesCategory;
    });
    setFilteredImages(filtered);
  }, [query, selectedCategory]);

  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  return (
    <main className="home">
      <h1 className="home__title">Munchkinland Designs</h1>

      <div className="home__carousel">
        <div className="home__carousel-group">
          {carouselImages.map((image, index) => (
            <div className="home__carousel-card" key={index}>
              <img
                className="home__carousel-image"
                src={image.src}
                alt={image.alt}
              />
            </div>
          ))}
        </div>
        <div aria-hidden="true" className="home__carousel-group">
          {carouselImages.map((image, index) => (
            <div className="home__carousel-card" key={index}>
              <img
                className="home__carousel-image"
                src={image.src}
                alt={image.alt}
              />
            </div>
          ))}
        </div>
      </div>
      
      <h2 className="home__subtitle">Products</h2>
      <div className="home__search">
        <div className="home__search-bar">
          <input
            type="text"
            placeholder="Search..."
            value={query}
            onChange={handleInputChange}
            className="home__search-input"
          />
        </div>

        <select
          value={selectedCategory}
          onChange={handleCategoryChange}
          className="home__dropdown"
        >
          <option value="All">All Categories</option>
          <option value="Digimon">Digimon</option>
          <option value="Pokemon">Pokemon</option>
          <option value="The Last of Us">The Last of Us</option>
          <option value="Animal">Animal</option>
          <option value="Vegetable">Vegetable</option>
        </select>
      </div>

      <div className="home__gallery">
        {filteredImages.length > 0 ? (
          filteredImages.map((image, index) => (
            <div key={index} className="home__card">
              <img src={image.src} alt={image.alt} className="home__image" />
              <div className="home__info">
                <span className="home__name">{image.name}</span>
                <a className="home__link" href={image.link} target="_blank">
                  Buy
                </a>
              </div>
            </div>
          ))
        ) : (
          <p className="home__text">No results found.</p>
        )}
      </div>
    </main>
  );
}
