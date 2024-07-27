import Header from "../components/Header"
import Navbar from "../components/Navbar"
import Hero from "../components/Hero"
import Money from "../components/Money"
import Savings from "../components/Savings"



const Homepage = () => {
  return (
    <>
      <Navbar />
      <Header />
      <Hero />
      <Money />
      <Savings />
    </>
  );
}

export default Homepage;