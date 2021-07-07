import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import ImageGrid from "./components/body/imageGrid";
import styled from "styled-components";

const WrapperDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    `


function App() {

    return (
        <WrapperDiv>
            <h1>NASA APOD</h1>
            <h2>Beautiful Images of our Universe</h2>

            <section>

                <ImageGrid />
            </section>
        </WrapperDiv>
    );
}

ReactDOM.render(<App />, document.getElementById("root"));
