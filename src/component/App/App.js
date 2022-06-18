import "./App.css";
import React, { useState, useEffect } from "react";
import CatFetch from "../Fetch/FetchApi";
import GetButton from "../Button/button";
import TextArea from "../TextArea/TextArea";

function App() {
  const [catUrl, setCatUrl] = useState("");
  const [catFact, setCatFact] = useState("");

  useEffect(() => {
    getCat();
  }, []);

  async function getCat() {
    let responseCat = await fetch("https://api.thecatapi.com/v1/images/search");
    let dataCat = await responseCat.json();
    setCatUrl(dataCat[0].url);

    let responseQuote = await fetch("https://catfact.ninja/fact");
    let dataQuote = await responseQuote.json();
    setCatFact(dataQuote.fact);
  }

  return (
    <div className="main-photo">
      <h1>Cat Facts</h1>
      <CatFetch src={catUrl} alt="Cat" />
      <GetButton id="next-button" onClick={getCat} text="Next cat, please" />
      <div className="main-quote">
        <h2>
          <i>Did you know?</i>
        </h2>
        <TextArea id="quote-box" type={TextArea} value={catFact} />
      </div>
    </div>
  );
}

export default App;
