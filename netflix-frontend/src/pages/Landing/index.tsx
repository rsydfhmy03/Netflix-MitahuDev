import "../../index.css"
import Layout from "../../components/layout/DefaultLayout"
import Jumbotron from "../../components/modules/LandingPage/Jumbotron";
import SectionEnjoy from "../../components/modules/LandingPage/SectionEnjoy";
function Landing() {
  return (
    <Layout>
      <Jumbotron />
      <SectionEnjoy />
    </Layout>
  )
}

export default Landing;