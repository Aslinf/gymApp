import Footer from "../components/Footer";
import PageHeader from "../components/PageHeader";
import Contact from "../components/ContactPage/Contact";

function ContactPage(){

  return(
    <>
      <PageHeader pageTitle={"Contact"} />
      <Contact />
      <Footer />
    </>
  )
}

export default ContactPage;