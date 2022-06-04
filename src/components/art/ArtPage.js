// ==========================================
// COMPONENT: Art page
// OVERVIEW:  
// USAGE:     App
// ==========================================

import Art from './Art';
import Button from '../button/Button';

import './ArtPage.css';

export default function ArtPage() {
  return (
    <section className="art-page">
      <div className="art-intro">

        <span className="diag-line"></span>

        <h1>Art</h1>

      </div>

      <div className="art-container">
        <Art name="astro"
             imgs="3"
             title="Astro Playing Cards"
             alt="Astro playing cards"
             tools="Affinity Designer, Adobe Illustrator"
             width="400px"
             height="auto">
          Integer sapien nibh, 
          egestas ut, cursus sit amet, 
          faucibus a, sapien. 
          Vestibulum purus purus, elementum ac, 
          luctus ullamcorper, ornare vitae, massa. 
          Nullam posuere sem ut mauris. Nullam velit. 
          Quisque sodales. Donec
        </Art>

        <Art name="jelly"
             imgs="3"
             title="Jelly Heart"
             alt="Jelly heart illustration"
             tools="Affinity Designer"
             width="400px"
             height="auto">
          Integer sapien nibh, 
          egestas ut, cursus sit amet, 
          faucibus a, sapien. 
          Vestibulum purus purus, elementum ac, 
          luctus ullamcorper, ornare vitae, massa. 
          Nullam posuere sem ut mauris. Nullam velit. 
          Quisque sodales. Donec
        </Art>

        <Art name="samurai"
             imgs="3"
             title="Samurai"
             alt="Samurai illustration"
             tools="Affinity Designer"
             width="400px"
             height="auto">
          Integer sapien nibh, 
          egestas ut, cursus sit amet, 
          faucibus a, sapien. 
          Vestibulum purus purus, elementum ac, 
          luctus ullamcorper, ornare vitae, massa. 
          Nullam posuere sem ut mauris. Nullam velit. 
          Quisque sodales. Donec
        </Art>

        <Art name="jackal"
             imgs="3"
             title="Jackal of Spades"
             alt="Jackal of spades illustration"
             tools="Affinity Designer"
             width="400px"
             height="auto">
          Integer sapien nibh, 
          egestas ut, cursus sit amet, 
          faucibus a, sapien. 
          Vestibulum purus purus, elementum ac, 
          luctus ullamcorper, ornare vitae, massa. 
          Nullam posuere sem ut mauris. Nullam velit. 
          Quisque sodales. Donec
        </Art>

        <Art name="koi"
             imgs="3"
             title="Mech-koi"
             alt="Mech koi illustration"
             tools="Affinity Designer"
             width="400px"
             height="auto">
          Integer sapien nibh, 
          egestas ut, cursus sit amet, 
          faucibus a, sapien. 
          Vestibulum purus purus, elementum ac, 
          luctus ullamcorper, ornare vitae, massa. 
          Nullam posuere sem ut mauris. Nullam velit. 
          Quisque sodales. Donec
        </Art>

        <Art name="whale"
             imgs="3"
             title="Wooden"
             alt="Wooden whale illustration"
             tools="Affinity Designer"
             width="400px"
             height="auto">
          Integer sapien nibh, 
          egestas ut, cursus sit amet, 
          faucibus a, sapien. 
          Vestibulum purus purus, elementum ac, 
          luctus ullamcorper, ornare vitae, massa. 
          Nullam posuere sem ut mauris. Nullam velit. 
          Quisque sodales. Donec
        </Art>

        <Art name="deer"
             imgs="3"
             title="Blossom"
             alt="Deer illustration"
             tools="Affinity Designer"
             width="400px"
             height="auto">
          Integer sapien nibh, 
          egestas ut, cursus sit amet, 
          faucibus a, sapien. 
          Vestibulum purus purus, elementum ac, 
          luctus ullamcorper, ornare vitae, massa. 
          Nullam posuere sem ut mauris. Nullam velit. 
          Quisque sodales. Donec
        </Art>

        <Art name="owl"
             imgs="3"
             title="Owl"
             alt="Owl illustration"
             tools="Affinity Designer"
             width="400px"
             height="auto">
          Integer sapien nibh, 
          egestas ut, cursus sit amet, 
          faucibus a, sapien. 
          Vestibulum purus purus, elementum ac, 
          luctus ullamcorper, ornare vitae, massa. 
          Nullam posuere sem ut mauris. Nullam velit. 
          Quisque sodales. Donec
        </Art>
      </div>

      <Button to="/art#">Back to Top</Button>

    </section>
  );
}
