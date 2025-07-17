import "../../index.css"
import Layout from "../../components/layout/DefaultLayout"
import Jumbotron from "../../components/modules/LandingPage/Jumbotron";
import SectionEnjoy from "../../components/modules/LandingPage/SectionContent/sectionEnjoy";
import SectionDwonload from "../../components/modules/LandingPage/SectionContent/sectionDwonload";
import SectionWatch from "../../components/modules/LandingPage/SectionContent/sectionWatch";
import SectionProfile from "../../components/modules/LandingPage/SectionContent/sectionProfile";
import SectionFAQ from "../../components/modules/LandingPage/SectionContent/sectionFAQ";
import Footer from "../../components/modules/LandingPage/Footer";
function Landing() {
  return (
    <Layout>
      <Jumbotron />
      <SectionEnjoy />
      <SectionDwonload />
      <SectionWatch />
      <SectionProfile/>
      <SectionFAQ />
      <Footer />

    </Layout>
  )
}

export default Landing;