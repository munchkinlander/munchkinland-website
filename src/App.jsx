import "./App.scss";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import HomePage from "./pages/HomePage/HomePage";
import AboutPage from "./pages/AboutPage/AboutPage";
import ContactPage from "./pages/ContactPage/ContactPage";

function App() {
  const [aboutData, setAboutData] = useState(null);
  const baseUrl = import.meta.env.VITE_API_URL;

  useEffect(() => {
    const fetchAndPreload = async () => {
      try {
        const response = await axios.get(`${baseUrl}/pictures`);
        const data = response.data;
        setAboutData(data);

        const imagesToPreload = [...data.cats, ...data.art];

        imagesToPreload.forEach((imgObj) => {
          const mainImg = new Image();
          mainImg.src = `${baseUrl}/images/${imgObj.src}`;

          if (imgObj.fallback) {
            const fallbackImg = new Image();
            fallbackImg.src = `${baseUrl}/images/${imgObj.fallback}`;
          }
        });
      } catch (error) {
        console.error("Failed to preload images:", error);
      }
    };

    fetchAndPreload();
  }, []);

  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage aboutData={aboutData} />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
