// ==========================================
// COMPONENT: Art component
// OVERVIEW:  carousel of digital illustrations
// USAGE:     GalleryPage
// ==========================================

import Carousel from '../carousel/Carousel';

import './Art.css';

export default function Art(props) {
  return (
    <div className="art">
      
      <div className="art-text-container">
        <h1>{props.title}</h1>

        <p>{props.children}</p>

        <h2>{props.tools}</h2>
      </div>

      <div className="art-img-container">
        <span className="art-outline"></span>

        <Carousel component="art"
                  name={props.name}
                  alt={props.alt}
                  width={props.width}
                  height={props.height}
                  imgs={props.imgs}>
        </Carousel>
      </div>
    </div>
  );
}
