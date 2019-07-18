import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import ImageGrid from "./components/body/imageGrid";

function App() {

    return (
        <div>
            <h1>NASA APOD</h1>
            <h2>Beautiful Images of our world</h2>

            <section>
                <b>Build a card list here!</b>
                <ImageGrid />
            </section>
        </div>
    );
}

ReactDOM.render(<App />, document.getElementById("root"));
