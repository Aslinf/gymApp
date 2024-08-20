import Footer from "../components/Footer";
import PageHeader from "../components/PageHeader";
import ScheduleDays from "../components/SchedulePage/ScheduleDays";

function Schedule(){

  return(
    <>
      <PageHeader pageTitle={"Schedule"} />
      <ScheduleDays />
      <Footer />
    </>
  )
}

export default Schedule;