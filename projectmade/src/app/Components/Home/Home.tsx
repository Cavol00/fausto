"use client";
import Image from "next/image";
import { useState } from "react";

export default function Home() {
    let [currentImageIndex, setCurrentImageIndex] = useState(0);
    const foto = ['foto1.jpg', 'foto2.jpg', 'foto3.jpg'];
    const secondFoto = ['foto1.jpg', 'foto2.jpg', 'foto3.jpg', 'foto4.jpg'];
    const handleNextImage = () => {
        setCurrentImageIndex((currentImageIndex + 1) % foto.length);
    };

    const handlePreviousImage = () => {
        setCurrentImageIndex((currentImageIndex - 1 + foto.length) % foto.length);
    };

    const handleImageClick = (index: number) => {
        setCurrentImageIndex(index);
    };

    const handleNextImageSecond = () => {
        setCurrentImageIndex((currentImageIndex + 1) % secondFoto.length);
    };

    const handlePreviousImageSecond = () => {
        setCurrentImageIndex((currentImageIndex - 1 + secondFoto.length) % secondFoto.length);
    };

    const handleImageClickSecond = (index: number) => {
        setCurrentImageIndex(index);
    };

    return (
        <div>
            <button onClick={handlePreviousImage}>Previous</button>
            <Image src={`/${foto[currentImageIndex]}`} alt="Current Image" width="500" height="300" />
            <button onClick={handleNextImage}>Next</button>

            <div>
                {secondFoto.map((image, index) => (
                    <img
                        key={index}
                        src={`/${image}`}
                        alt={`Image ${index}`}
                        width="100"
                        height="100"
                        onClick={() => handleImageClickSecond(index)}
                    />
                ))}
            </div>
        </div>
    );
}