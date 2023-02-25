import Banner from "./components/banner/Banner";
import Navbar from "./components/navbar/Navbar";
import Work from "./components/work/Work";
import Project from "./components/project/Project";
import Feature from "./components/feature/Feature";
import Client from "./components/client/Client";
import FAQ from "./components/faq/FAQ";
import Inquiry from "./components/inquiry/Inquiry";
import Blog from "./components/blog/Blog";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>
      <Navbar/>
      <Banner/>
      <Work/>
      <Project/>
      <Feature/>
      <Client/>
      <FAQ/>
      <Inquiry/>
      <Blog/>
      <Footer/>
    </>
  );
}

export default App;
