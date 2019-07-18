import React, { useEffect, useState } from "react";
import axios from "axios";

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
        <div>

            <img src={images.url} alt={images.title} />
            <div>Description: {images.title} </div>

        </div>
    );
}
