import React from "react";
import "./App.css";
import { Lotto } from "./components/Lotto";

function App() {
  return (
    <div className="AppHeader">
      <div className="App">
        <p>
          Checkin sin
          <br></br>
          GirlTech lotto-trekning!
        </p>
        <p className="mindreTekst">
          Lag deg 2 rekker med 7 tall i hver (fra 1 - 21)
          <br></br> - Sett ring rundt tallene som trekkes ut,
          <br></br> og x på tilleggstallet.
          <br></br>
          <br></br> - Trykk på "nytt tall" for å få et nytt tall.
          <br></br> - Etter 7 tall, trykk på "tilleggstall" for å få et
          tilleggstall.
          <br></br> - Trykk på tilleggstallet for å sortere tallene.
          <br></br> - Trykk på -X- for å fjerne alt og starte på ny.
        </p>
        <Lotto />
      </div>
    </div>
  );
}

export default App;
