import React from "react";
import "./App.css";
import { Lotto } from "./components/Lotto";

function App() {
    return (
        <div className="AppHeader">
            <div className="App">
                <p>Velkommen til Påskelotto!</p>
                <img
                    className="rabbitPhoto"
                    src={"/lotto" + require("./components/photos/kanin.jpg")}
                    alt="rabbit"
                />
                <Lotto />
            </div>
        </div>
    );
}

export default App;
