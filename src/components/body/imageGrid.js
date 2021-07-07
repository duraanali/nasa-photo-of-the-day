import React, { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";

const MainSection = styled.div`
    max-width: 75%;
    background-color: green;
    color: white;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    border-radius: 5px;
    margin-bottom: 20px;
    `

const OurImage = styled.img`
    max-height: 100vh;
    max-width: 95%;
    margin: 1rem auto;
    border-radius: 5px;
    `

const ImageDescription = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    font-size: 2rem;
`

const ImageTitle = styled.h2`
    font-size: 3rem;
    margin: 1rem 0;

`

const ImgDesc = styled.p`
    margin: 1rem 2.5rem;
    text-align: justify;
`


export default function ImageGrid() {
    const [images, setImages] = useState({});

    useEffect(() => {
        axios.get(`https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY`)
            .then(response => {
                setImages(response.data);
            })
            .catch(error => {
                console.log('Sorry Error! ', error);
            });
    }, []);


    return (
        <MainSection>
            <OurImage src={images.url} alt={images.title} />
            <ImageDescription>
                <ImageTitle>Description: {images.title}  </ImageTitle>
                <h4>Photo date: {images.date}</h4>
                <ImgDesc>{images.explanation}</ImgDesc>
            </ImageDescription>
        </MainSection>
    );
}
