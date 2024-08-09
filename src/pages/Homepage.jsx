import Header from "../components/Header"
import Navbar from "../components/Navbar"
import Hero from "../components/Hero"
import Money from "../components/Money"
import Savings from "../components/Finance"
import Build from "../components/Build"
import Client from "../components/Client"
import Phone from "../components/Download"
import Footer from "../components/Footer"



const Homepage = () => {
  return (
    <>
      <Navbar />
      <Header />
      <Hero />
      <Money />
      {/* <Savings /> */}
      <Build />
      <Phone />
      {/* <Client/> */}
      <Footer/>
    </>
  );
}

export default Homepage;