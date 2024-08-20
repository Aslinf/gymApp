import Footer from "../components/Footer";
import PageHeader from "../components/PageHeader";
import WhoWeAre from "../components/AboutPage/WhoWeAre";
import History from "../components/AboutPage/History";

function AboutPage(){

  return(
    <>
      <PageHeader pageTitle={"About Us"} />
      <div className="about-page-container">
        <WhoWeAre />
        <History />
      </div>
      <Footer />
    </>
  )
}

export default AboutPage;