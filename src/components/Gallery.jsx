import "../Stylesheets/gallery.scss";
import highlight from "../Assets/about/highlight.svg";
import img1 from "../Assets/gallery/gallery-1.jpg";
import img2 from "../Assets/gallery/gallery-2.jpg";
import img3 from "../Assets/gallery/gallery-3.jpg";
import img4 from "../Assets/gallery/gallery-4.jpg";
import img5 from "../Assets/gallery/gallery-5.jpg";

function Gallery(){
  return(
    <section id="gallery-section">
      <div className="gallery-container">
        <div className="gallery-title">
          <p>GALLERY</p>
          <img src={highlight} />
          <h3>Our Workplace Gallery</h3>
          <p>Our Workplace Gallery features modern office, team collaboration, and fun culture. <br/>
          Attracts talents and showcases company's work atmosphere.</p>
        </div>

        <div className="gallery-grid">

          <div className="gallery-item-1">
            <img src={img1} alt="gallery-image-1" className="gallery-img img-1" />  
          </div>

          <div className="gallery-item-2">
           <img src={img2} alt="gallery-image-2" className="gallery-img img-2" />
          </div>

          <div className="gallery-item-3">
            <img src={img3} alt="gallery-image-3" className="gallery-img img-3" />
          </div>

          <div className="gallery-item-4">
            <img src={img4} alt="gallery-image-4" className="gallery-img img-4" />
          </div>

          <div className="gallery-item-5">
            <img src={img5} alt="gallery-image-5" className="gallery-img img-5" />
          </div>

        </div>
      </div>
    </section>
  )
}

export default Gallery;