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
                    Lag deg 3 rekker med 7 tall i hver (fra 1 - 21)
                    <br></br> - Sett ring rundt tallene som trekkes ut
                </p>
                {/*     <img
                    className="rabbitPhoto"
                    src={"/lotto" + require("./components/photos/kanin.jpg")}
                    alt="rabbit"
                /> */}
                <Lotto />
            </div>
        </div>
    );
}

export default App;
