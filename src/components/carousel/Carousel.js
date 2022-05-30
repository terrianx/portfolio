// ==========================================
// COMPONENT: Carousel
// OVERVIEW:  
// USAGE:     Project,
//            Art
// ==========================================

import { useState } from 'react';

import './Carousel.css';

export default function Carousel(props) {
  const [imgNum, setImgNum] = useState(0);

  const imgs = props.imgs;

  return (
    <div className="carousel">
      <img src={"./assets/" + props.component 
                + "/" + props.name 
                + "-" + (imgNum % imgs) 
                + ".webp"} 
            alt={props.alt} 
            width={props.width}
            height={props.height}/>

      <div className="next-btn btn-r"
            onClick={() => {setImgNum(
            (imgNum + 1) % imgs)}}>
          &rsaquo;
      </div>

      <div className="next-btn btn-l"
            onClick={() => {setImgNum(
            (imgNum + 2 * imgs - imgs - 1) % imgs)}}>
          &lsaquo;
      </div>
    </div>
  );
}
