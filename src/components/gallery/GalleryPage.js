// ==========================================
// COMPONENT: Gallery page
// OVERVIEW:  gallery view of all digital illustrations
// USAGE:     App
// ==========================================

import Art from './Art';
import Button from '../button/Button';

import './GalleryPage.css';

export default function GalleryPage() {
  return (
    <section className="gallery-page">
      <div className="gallery-intro">

        <span className="diag-line"></span>

        <h1>Gallery</h1>

      </div>

      <div className="gallery-container">
      <Art name="moon"
             imgs="2"
             title="Moon and Lily"
             alt="Moon and Lily illustration"
             tools="Affinity Designer"
             width="450px"
             height="auto">
            A crescent moon slowly dripping
            its light onto a water lily.
            I wanted to try a new style 
            without line art to create a 
            softer and brighter flower. 
            Illustrating the moonlight dripping 
            across and down the petals 
            was a new and difficult challenge.
        </Art>

        <Art name="astro"
             imgs="7"
             title="Astro Playing Cards"
             alt="Astro playing cards"
             tools="Affinity Designer, Adobe Illustrator"
             width="450px"
             height="auto">
            A fully custom designed deck
            of poker sized playing cards
            including an original tuck box
            design. Each card has a unique face
            and all share a back design
            inspired by Michelangelo's
            'The Creation of Adam'. This has been
            my largest design project yet,
            spanning the length of 1.5 years
            from brainstorming to distribution
            and taking nearly 300 hours to complete.
            I plan on creating another deck with
            a different theme and will be selling
            them in 2024!
        </Art>

        <Art name="jelly"
             imgs="3"
             title="Jelly Heart"
             alt="Jelly heart illustration"
             tools="Affinity Designer"
             width="450px"
             height="auto">
            An aquatic illustration
            of a mechanical jellyfish.
            Note the dichotomy
            between the soft nature of
            natural jellyfish and the
            fantastical hardness of
            the metallic tentacles. 
            One challenge I faced during
            the illustration of 'Jelly 
            Heart' was drawing the
            organic and soft shape of
            the jellyfish head.
        </Art>

        <Art name="samurai"
             imgs="3"
             title="Samurai"
             alt="Samurai illustration"
             tools="Affinity Designer"
             width="450px"
             height="auto">
            The cybernetic head of an
            ancient Japanese warrior. 
            I followed several reference
            helmets from museums to 
            craft a fictional blend of
            robotics and ancient culture.
            The spine and wires trailing
            out of the head was the most
            complex section to illustrate,
            given all the overlapping and
            intertwining that I wanted to add.
        </Art>

        <Art name="jackal"
             imgs="3"
             title="Jackal of Spades"
             alt="Jackal of spades illustration"
             tools="Affinity Designer"
             width="450px"
             height="auto">
            Egyptian inspired face for
            the Jack of Spades. A lesson
            learned from designing this
            was how to create a metallic
            surface by using highlights
            and overlays. This piece
            would eventually inspire me
            to create the Astro Playing
            Cards deck.
        </Art>

        <Art name="koi"
             imgs="3"
             title="Mech-koi"
             alt="Mech koi illustration"
             tools="Affinity Designer"
             width="450px"
             height="auto">
            Another Japanese inspired
            design. I focused heavily
            on the choice of colors and
            wanted a piece that would pop.
            Much like other illustrations,
            I blended robotic parts with
            flesh.
        </Art>

        <Art name="whale"
             imgs="3"
             title="Whale of Wood"
             alt="Wooden whale illustration"
             tools="Affinity Designer"
             width="450px"
             height="auto">
            A whale with wooden body
            parts. I wanted to learn
            how to draw a new surface other
            than metal. Figuring out
            how to draw the grains and
            patterns in wood was a
            quite the challenge.
        </Art>

        <Art name="deer"
             imgs="3"
             title="Blossom"
             alt="Deer illustration"
             tools="Affinity Designer"
             width="450px"
             height="auto">
            A mechanical deer with
            blooming flowers on its antlers.
            I learned how to use colored
            edge highlights to make
            certain parts look more defined.
        </Art>

        <Art name="owl"
             imgs="3"
             title="Steampunk Wings"
             alt="Owl illustration"
             tools="Affinity Designer"
             width="450px"
             height="auto">
            A regal owl split to reveal
            steam punk innards. This is my
            first illustration using Affinity
            Designer and I learned how to
            digitally illustrate using 
            layers, highlights, and shading.
        </Art>
      </div>

      <Button to="/gallery#">Back to Top</Button>

    </section>
  );
}
