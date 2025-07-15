import "../../index.css"
import Layout from "../../components/layout/DefaultLayout"
import Jumbotron from "../../components/modules/LandingPage/Jumbotron";
import SectionEnjoy from "../../components/modules/LandingPage/SectionContent/sectionEnjoy";
import SectionDwonload from "../../components/modules/LandingPage/SectionContent/sectionDwonload";
function Landing() {
  return (
    <Layout>
      <Jumbotron />
      <SectionEnjoy />
      <SectionDwonload />
    </Layout>
  )
}

export default Landing;