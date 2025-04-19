import "./HomePage.scss";
import { useState, useEffect } from "react";
import Scroll from "../../components/Scroll/Scroll";
import axios from "axios";

export default function HomePage() {
  const [query, setQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [imageData, setImageData] = useState([]);
  const [carouselData, setCarouselData] = useState([]);
  const [filteredImages, setFilteredImages] = useState([]);

  const [modalOpen, setModalOpen] = useState(false);
  const [modalImage, setModalImage] = useState(null);

  const baseUrl = import.meta.env.VITE_API_URL;

  const fetchImages = async () => {
    try {
      const response = await axios.get(`${baseUrl}/images`);
      setImageData(response.data);
    } catch (error) {
      console.error("There was a problem retrieving the images.", error);
    }
  };

  const fetchCarousel = async () => {
    try {
      const response = await axios.get(`${baseUrl}/carousel`);
      setCarouselData(response.data);
      console.log(response.data);
    } catch (error) {
      console.error(
        "There was a problem retrieving the carousel images.",
        error
      );
    }
  };

  useEffect(() => {
    fetchImages();
    fetchCarousel();
  }, []);

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

  const openModal = (image) => {
    setModalImage(image);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setModalImage(null);
  };

  const preventRightClick = (e) => {
    e.preventDefault();
  };

  return (
    <main className="home">
      <h1 className="home__title">Munchkinlander Designs</h1>

      <div className="home__carousel">
        <div className="home__carousel-group">
          {carouselData.map((image, index) => (
            <div className="home__carousel-card" key={index}>
              <img
                className="home__carousel-image"
                src={`${baseUrl}${image.src}`}
                alt={image.alt}
                onContextMenu={preventRightClick}
                draggable="false"
              />
            </div>
          ))}
        </div>
        <div aria-hidden="true" className="home__carousel-group">
          {carouselData.map((image, index) => (
            <div className="home__carousel-card" key={index}>
              <img
                className="home__carousel-image"
                src={`${baseUrl}${image.src}`}
                alt={image.alt}
                onContextMenu={preventRightClick}
                draggable="false"
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
          <option value="Other">Other</option>
        </select>
      </div>

      <div className="home__gallery">
        {filteredImages.length > 0 || imageData.length > 0 ? (
          (filteredImages.length > 0 ? filteredImages : imageData).map(
            (image, index) => (
              <div key={index} className="home__card">
                <img
                  src={`${baseUrl}${image.src}`}
                  alt={image.alt}
                  className="home__image"
                  onClick={() => openModal(image)}
                  onContextMenu={preventRightClick}
                  draggable="false"
                />
                <div className="home__watermark home__watermark--gallery">
                  © Munchkinlander Designs
                </div>

                <div className="home__info">
                  <span className="home__name">{image.name}</span>
                  <a className="home__link" href={image.link} target="_blank">
                    Buy
                  </a>
                </div>
              </div>
            )
          )
        ) : (
          <p className="home__text">No results found.</p>
        )}
      </div>
      {modalOpen && (
        <div className="home__modal" onClick={closeModal}>
          <div className="home__modal-content">
            <button className="home__modal-close" onClick={closeModal}>
              &times;
            </button>
            <img
              className="home__modal-image"
              src={`${baseUrl}${modalImage.src}`}
              alt={modalImage.alt}
              onContextMenu={preventRightClick}
              draggable="false"
            />
            <div className="home__watermark">© Munchkinlander Designs</div>
          </div>
        </div>
      )}
      <Scroll />
    </main>
  );
}
