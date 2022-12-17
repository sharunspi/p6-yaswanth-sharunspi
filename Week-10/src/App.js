import React, { useState } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "./App.css";
import Header from "./Components/Header";
import Banner from "./Components/Banner";
import URLCard from "./Components/Card/URLCard";
import Card from "./Components/Card/Card";
import Footer from "./Components/Footer/inex";
import { Button } from "./Components/Button/Button";

function App() {
  const [load, setLoad] = useState(false);
  const [url, setMainUrl] = useState("");
  const [shortenUrlLink, setShortenUrl] = useState("");
  const [copy, setCopied] = useState(false);
  const [list, setList] = useState([]);

  const loadStarter = (val) => {
    setLoad(val);
  };
  const setUrl = (val) => {
    setMainUrl(val);
  };
  const shortenUrl = (val) => {
    setShortenUrl(val);
    setList((old) => [
      ...old,
      {
        main: url,
        short: val,
      },
    ]);
  };
  const copyUrl = () => {
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 2000);
    navigator.clipboard.writeText(shortenUrlLink);
  };
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <div className="main">
          <Banner />
          <div className="card-area">
            <URLCard
              loadStarter={loadStarter}
              setUrl={setUrl}
              shortenUrl={shortenUrl}
            />
            <Card>
              <div className="copy-card">
                {url && <span>{url}</span>}

                {load && <span>Loading</span>}
                <span className="text-blue">{shortenUrlLink}</span>
                <div>
                  <Button onClick={copyUrl}>copy url</Button>
                  {copy && <span className="copied">Copied</span>}
                </div>
              </div>
            </Card>
            <div>
              <ul>
                {list &&
                  list.map((l, i) => (
                    <li key={i}>
                      {l.main}
                      {"-"}
                      {l.short}
                    </li>
                  ))}
              </ul>
            </div>
          </div>
        </div>
      ),
    },
    {
      path: "/about",
      element: <div>asdasd</div>,
    },
  ]);
  return (
    <>
      <Header />
      <RouterProvider router={router} />
      <Footer />
    </>
  );
}

export default App;
