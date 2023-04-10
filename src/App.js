import NavbarHeader from "./components/navbar";
import 'bootstrap/dist/css/bootstrap.min.css';
import Landing from "./components/landing";
import About from "./components/about";
import Offers from "./components/offers";
import Orders from "./components/orders";
import Story from "./components/story";
import Footer from "./components/footer";


function App() {
  return (
    <div className="App">
      {/* <NavbarHeader /> */}
      <Landing />
      <About />
      <Offers />
      <Orders />
      <Story />
      <Footer />
    </div>
  );
}

export default App;
