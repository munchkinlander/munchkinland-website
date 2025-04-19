import "./AboutPage.scss";
import { useEffect, useState } from "react";

import videoMP4 from "./../../assets/videos/frog-cat.mp4";
import videoWebP from "./../../assets/videos/frog-cat-web.webm";
import cat1WebP from "./../../assets/images/the-council.webp";
import cat1JPG from "./../../assets/images/the-council.jpg";
import cat2WebP from "./../../assets/images/the-nose.webp";
import cat2JPG from "./../../assets/images/the-nose.jpg";
import cat3WebP from "./../../assets/images/the-destroyer.webp";
import cat3JPG from "./../../assets/images/the-destroyer.jpg";
import cat4WebP from "./../../assets/images/the-watchers.webp";
import cat4JPG from "./../../assets/images/the-watchers.jpg";
import art1WebP from "./../../assets/images/digi-babies.webp";
import art1PNG from "./../../assets/images/digi-babies.png";
import art2WebP from "./../../assets/images/rubberhose.webp";
import art2JPG from "./../../assets/images/rubberhose.jpg";
import art3WebP from "./../../assets/images/custom-card.webp";
import art3JPG from "./../../assets/images/custom-card.jpg";
import art4WebP from "./../../assets/images/digimon-evos.webp";
import art4PNG from "./../../assets/images/digimon-evos.png";

export default function AboutPage() {
  const [useWebP, setUseWebP] = useState(true);

function supportsWebP() {
  return document
    .createElement("canvas")
    .toDataURL("image/webp")
    .startsWith("data:image/webp");
}

  useEffect(() => {
    setUseWebP(supportsWebP());
  }, []);

  const cats = [
    { webp: cat1WebP, fallback: cat1JPG, alt: "Cats on stairs" },
    { webp: cat2WebP, fallback: cat2JPG, alt: "Cat face closeup" },
    { webp: cat3WebP, fallback: cat3JPG, alt: "Cat chewing on string" },
    { webp: cat4WebP, fallback: cat4JPG, alt: "Cats at window" },
  ];

  const art = [
    { webp: art1WebP, fallback: art1PNG, alt: "Stickers on cards" },
    { webp: art2WebP, fallback: art2JPG, alt: "Rubberhose style drawing" },
    {
      webp: art3WebP,
      fallback: art3JPG,
      alt: "Custom card design on tablet",
    },
    { webp: art4WebP, fallback: art4PNG, alt: "Sticker line on cards" },
  ];

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
        {/* <img src={cat1JPG} className="about__image" alt="Cats on stairs" />
        <img src={cat2JPG} className="about__image" alt="Cat face closeup" />
        <img src={cat3JPG} className="about__image" alt="Cat chewing on string" />
        <img src={cat4JPG} className="about__image" alt="Cats at window" /> */}
        {cats.map((img, i) => (
          <img
            key={i}
            src={useWebP ? img.webp : img.fallback}
            className="about__image"
            alt={img.alt}
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
        {/* <img src={art1WebP} className="about__image" alt="Stickers on cards" />
        <img
          src={art2WebP}
          className="about__image"
          alt="Rubberhose style drawing"
        />
        <img
          src={art3WebP}
          className="about__image"
          alt="Custom card design on tablet"
        />
        <img
          src={art4WebP}
          className="about__image"
          alt="Sticker line on cards"
        /> */}
        {art.map((img, i) => (
          <img
            key={i}
            src={useWebP ? img.webp : img.fallback}
            className="about__image"
            alt={img.alt}
          />
        ))}
      </div>
      <p className="about__text">
        Fun fact: our logo design was inspired by one of our cats, Maze (aka
        Mazikeen, aka MazeMaze, aka Mazey). She kind of has a frog face so...
        the work speaks for itself.
      </p>
      <video autoPlay loop muted playsInline className="about__video">
        <source src={videoWebP} type="video/webm" />
        <source src={videoMP4} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </main>
  );
}
