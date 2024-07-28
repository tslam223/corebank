import Header from "../components/Header"
import Navbar from "../components/Navbar"
import Hero from "../components/Hero"
import Money from "../components/Money"
import Savings from "../components/Savings"
import {Build} from "../components/Build"



const Homepage = () => {
  return (
    <>
      <Navbar />
      <Header />
      <Hero />
      <Money />
      <Savings />
      <Build />
    </>
  );
}

export default Homepage;