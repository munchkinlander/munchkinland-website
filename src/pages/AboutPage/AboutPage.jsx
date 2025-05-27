import "./AboutPage.scss";
// import { useState, useEffect } from "react";
import axios from "axios";

import videoMP4 from "./../../assets/videos/frog-cat-comp.mp4";

export default function AboutPage({ aboutData }) {
  // const [aboutData, setAboutData] = useState(null);

  const baseUrl = import.meta.env.VITE_API_URL;

  // const fetchPictures = async () => {
  //   try {
  //     const response = await axios.get(`${baseUrl}/pictures`);
  //     setAboutData(response.data);
  //   } catch (error) {
  //     console.error("There was a problem retrieving the pictures.", error);
  //   }
  // };

  // useEffect(() => {
  //   fetchPictures();
  // }, []);

  if (!aboutData) {
    return <div>Loading...</div>;
  }

  return (
    <main className="about">
      <h1 className="about__title">About Me</h1>
      <p className="about__text">
        Hi there! I’m Katie Lagace, the creative mind behind Munchkinlander
        Designs. I’m a Canadian designer with a background in visualizations and
        2D/3D renderings. By day, I work as a data specialist, but by night (and
        weekends, and coffee breaks...), I love creating cute designs for my
        favorite fandoms! When I’m not making art, you’ll find me building
        GunPla kits, organizing my ever-growing collection of Pokémon cards, or
        hanging out with my wife and our many cats.
      </p>
      <div className="about__gallery">
        {aboutData.cats.map((image, i) => (
          <img
            key={i}
            src={`${baseUrl}/images/${image.src}`}
            className="about__image"
            alt={image.alt}
            onError={(e) => {
              if (image.fallback) {
                e.target.onerror = null;
                e.target.src = `${baseUrl}/images/${image.fallback}`;
              }
            }}
          />
        ))}
      </div>
      <p className="about__text">
        I also take on custom commissions — some of my past favorites include OC
        portraits, custom Pokémon cards, and{" "}
        <a
          className="about__link"
          href="https://icy-nova.com/products/magician-lady-hoodie"
          target="_blank"
        >
          cozy
        </a>{" "}
        <a
          className="about__link"
          href="https://icy-nova.com/products/angel-cat-sweater"
          target="_blank"
        >
          sweater
        </a>{" "}
        <a
          className="about__link"
          href="https://icy-nova.com/products/angel-potato-hoodie"
          target="_blank"
        >
          designs
        </a>{" "}
        inspired by Yu-Gi-Oh!, Digimon, and more. Munchkinlander is all about
        celebrating creativity, nostalgia, and fun, and I’m so excited to share
        my designs with you.
      </p>
      <div className="about__gallery">
        {aboutData.art.map((image, i) => (
          <img
            key={i}
            src={`${baseUrl}/images/${image.src}`}
            className="about__image"
            alt={image.alt}
            onError={(e) => {
              if (image.fallback) {
                e.target.onerror = null;
                e.target.src = `${baseUrl}/images/${image.fallback}`;
              }
            }}
          />
        ))}
      </div>
      <p className="about__text">
        Fun fact: our logo design was inspired by one of our cats, Maze (aka
        Mazikeen, aka MazeMaze, aka Mazey). She kind of has a frog face so...
        the work speaks for itself.
      </p>
      <video autoPlay loop muted playsInline className="about__video">
        <source src={videoMP4} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </main>
  );
}
