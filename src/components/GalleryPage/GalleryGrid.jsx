import { Link } from "react-router-dom";
import imgg1 from "../../Assets/gallery/gallery-1.jpg";
import img2 from "../../Assets/gallery/gallery-2.jpg";
import img3 from "../../Assets/gallery/gallery-3.jpg";
import img4 from "../../Assets/gallery/gallery-4.jpg";
import img5 from "../../Assets/gallery/gallery-5.jpg";
import img6 from "../../Assets/gallery/gallery-6.jpg";
import img7 from "../../Assets/gallery/gallery-7.jpg";
import img8 from "../../Assets/gallery/gallery-8.jpg";
import img9 from "../../Assets/gallery/gallery-9.jpg";
import img10 from "../../Assets/gallery/gallery-10.jpg";
import img11 from "../../Assets/gallery/gallery-11.jpg";
import img12 from "../../Assets/gallery/gallery-12.jpg";

function GalleryGrid(){
  return(
    <section id="gallery-grid-section">
      <div className="gallery-grid-container">

        <div className="galleryPage-grid">
          <div className="galleryPage-img">
            <img src={imgg1} alt="" />
          </div>
          <div className="galleryPage-img">
            <img src={img2} alt="" />
          </div>
          <div className="galleryPage-img">
            <img src={img3} alt="" />
          </div>
          <div className="galleryPage-img">
            <img src={img4} alt="" />
          </div>
          <div className="galleryPage-img">
            <img src={img5} alt="" />
          </div>
          <div className="galleryPage-img">
            <img src={img6} alt="" />
          </div>
          <div className="galleryPage-img">
            <img src={img7} alt="" />
          </div>
          <div className="galleryPage-img">
            <img src={img8} alt="" />
          </div>
          <div className="galleryPage-img">
            <img src={img9} alt="" />
          </div>
          <div className="galleryPage-img">
            <img src={img10} alt="" />
          </div>
          <div className="galleryPage-img">
            <img src={img11} alt="" />
          </div>
          <div className="galleryPage-img">
            <img src={img12} alt="" />
          </div>
        </div>

        <div className="gallery-pagination">
          <button>SHOW MORE</button>
        </div>

      </div>
    </section>
  )
}

export default GalleryGrid;