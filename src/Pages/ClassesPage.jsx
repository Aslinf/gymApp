import Footer from "../components/Footer";
import PageHeader from "../components/PageHeader";
import Classes from "../components/ClassesPage/Classes";

function ClassesPage(){

  return(
    <>
      <PageHeader pageTitle={"Classes"} />
      <Classes />
      <Footer />
    </>
  )
}

export default ClassesPage;