import "../../index.css"
import Layout from "../../components/layout/DefaultLayout"
import Jumbotron from "../../components/modules/LandingPage/Jumbotron";
import InputMembership from "../../components/modules/LandingPage/InputMembership";

function Landing() {
  return (
    <Layout>
      <Jumbotron />
      <InputMembership />
    </Layout>
  )
}

export default Landing;