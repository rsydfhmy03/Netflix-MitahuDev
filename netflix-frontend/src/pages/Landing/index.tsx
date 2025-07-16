import "../../index.css"
import Layout from "../../components/layout/DefaultLayout"
import Jumbotron from "../../components/modules/LandingPage/Jumbotron";
import SectionEnjoy from "../../components/modules/LandingPage/SectionContent/sectionEnjoy";
import SectionDwonload from "../../components/modules/LandingPage/SectionContent/sectionDwonload";
import SectionWatch from "../../components/modules/LandingPage/SectionContent/sectionWatch";
function Landing() {
  return (
    <Layout>
      <Jumbotron />
      <SectionEnjoy />
      <SectionDwonload />
      <SectionWatch />
    </Layout>
  )
}

export default Landing;