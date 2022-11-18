import "./App.scss";
import { About, Footer, Header, Skills, Testimonial, Work } from "./container";
import { SocialMedia } from "./components";
import { Navbar } from "./components";

function App() {
  return (
    <div className="app">
      <Navbar />
      <SocialMedia />
      <Header />
      <About />
      <Work />
      {/* <Skills /> */}
      <Testimonial />
      <Footer />
    </div>
  );
}

export default App;
