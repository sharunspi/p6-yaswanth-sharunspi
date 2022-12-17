import "./App.css";
import Header from "./Components/Header";
import Banner from "./Components/Banner";
import URLCard from "./Components/Card/URLCard";
import Card from "./Components/Card/Card";
import Footer from "./Components/Footer/inex";
import { Button } from "./Components/Button/Button";

function App() {
  return (
    <>
      <Header />
      <div className="main">
        <Banner />
        <div className="card-area">
          <URLCard />
          <Card>
            <div className="copy-card">
              <span></span>
              <Button>copy url</Button>
            </div>
          </Card>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default App;
