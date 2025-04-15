import "./AboutPage.scss";
import video from "./../../assets/videos/frog-cat.mp4";
import cat1 from "./../../assets/images/the-council.jpg";
import cat2 from "./../../assets/images/the-nose.jpg";
import cat3 from "./../../assets/images/the-destroyer.jpg";
import cat4 from "./../../assets/images/the-watchers.jpg";
import art1 from "./../../assets/images/digi-babies.png";
import art2 from "./../../assets/images/rubberhose.jpg";
import art3 from "./../../assets/images/custom-card.jpg";
import art4 from "./../../assets/images/digimon-evos.png";


export default function AboutPage() {
  return (
    <main className="about">
      <h1 className="about__title">About Me</h1>
      <p className="about__text">
        Hi there! I’m Katie Lagace, the creative mind behind Munchkinland
        Designs. I’m a Canadian designer with a background in visualizations and
        2D/3D renderings. By day, I work as a data specialist, but by night (and
        weekends, and coffee breaks...), I love creating cute designs for my
        favorite fandoms! When I’m not making art, you’ll find me building
        GunPla kits, organizing my ever-growing collection of Pokémon cards, or
        hanging out with my wife and our many cats.
      </p>
      <div className="about__gallery">
        <img src={cat1} className="about__image" />
        <img src={cat2} className="about__image" />
        <img src={cat3} className="about__image" />
        <img src={cat4} className="about__image" />
      </div>
      <p className="about__text">
        I also take on custom commissions — some of my past favorites include OC
        portraits, custom Pokémon cards, and{" "}
        <a className="about__link" href="https://icy-nova.com/" target="_blank">cozy sweater designs</a> inspired by
        Yu-Gi-Oh!, Digimon, and more. Munchkinland is all about celebrating
        creativity, nostalgia, and fun, and I’m so excited to share my designs
        with you.
      </p>
      <div className="about__gallery">
        <img src={art1} className="about__image" />
        <img src={art2} className="about__image" />
        <img src={art3} className="about__image" />
        <img src={art4} className="about__image" />
      </div>
      <p className="about__text">
        Fun fact: our logo design was inspired by one of our cats, Maze (aka
        Mazikeen, aka MazeMaze, aka Mazey). She kind of has a frog face so...
        the work speaks for itself.
      </p>
      <video autoPlay loop muted playsInline className="about__video">
        <source src={video} type="video/mp4" className="about__source" />
        Your browser does not support the video tag.
      </video>
    </main>
  );
}
