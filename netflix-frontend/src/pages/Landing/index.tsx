import "../../index.css"
import Layout from "../../components/layout/DefaultLayout"
import Jumbotron from "../../components/modules/LandingPage/Jumbotron";
import SectionEnjoy from "../../components/modules/LandingPage/SectionContent/sectionEnjoy";
import SectionDwonload from "../../components/modules/LandingPage/SectionContent/sectionDwonload";
import SectionWatch from "../../components/modules/LandingPage/SectionContent/sectionWatch";
import SectionProfile from "../../components/modules/LandingPage/SectionContent/sectionProfile";
function Landing() {
  return (
    <Layout>
      <Jumbotron />
      <SectionEnjoy />
      <SectionDwonload />
      <SectionWatch />
      <SectionProfile/>
    </Layout>
  )
}

export default Landing;