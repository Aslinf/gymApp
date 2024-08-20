import Footer from "../components/Footer";
import GalleryGrid from "../components/GalleryPage/GalleryGrid";
import PageHeader from "../components/PageHeader";

function GalleryPage(){

  return(
    <>
      <PageHeader pageTitle={"Gallery"} />
        <GalleryGrid />
      <Footer />
    </>
  )
}

export default GalleryPage;