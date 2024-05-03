"use client";
import Image from "next/image";
import { useState } from "react";

export default function Home() {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [currentImageIndexSecond, setCurrentImageIndexSecond] = useState(0);
    const foto = ['foto1.png', 'foto2.png', 'foto3.png', 'foto4.png','foto5.png', 'foto6.png', 'foto7.png', 'foto8.png', 'foto9.png', 'foto10.png', 'foto11.png', 'foto12.png'];
    const secondFoto = ['foto1.png', 'foto2.png', 'foto3.png', 'foto4.png','foto5.png', 'foto6.png', 'foto7.png', 'foto8.png', 'foto9.png', 'foto10.png', 'foto11.png', 'foto12.png'];

    const handleNextImage = () => {
        setCurrentImageIndex((currentImageIndex + 1) % foto.length);
    };

    const handlePreviousImage = () => {
        setCurrentImageIndex((currentImageIndex - 1 + foto.length) % foto.length);
    };

    const handleNextImageSecond = () => {
        setCurrentImageIndexSecond((currentImageIndexSecond + 1) % secondFoto.length);
    };

    const handlePreviousImageSecond = () => {
        setCurrentImageIndexSecond((currentImageIndexSecond - 1 + secondFoto.length) % secondFoto.length);
    };

    const handleImageClick = (index: number) => {
        setCurrentImageIndex(index);
    };

    const handleImageClickFirst = (index: number) => {
        setCurrentImageIndex(index);
        setCurrentImageIndexSecond(index);
    }
    const handleImageClickSecond = (index: number) => {
        setCurrentImageIndexSecond(index);
    };
    

    return (
        <div>
            <button onClick={handlePreviousImage}>Previous</button>
            <Image src={`/${foto[currentImageIndex]}`} alt="Current Image" width="500" height="300" onClick={() => handleImageClick(currentImageIndex)} />
            <button onClick={handleNextImage}>Next</button>
            <button onClick={handlePreviousImageSecond}>Previous</button>
            <Image src={`/${secondFoto[currentImageIndexSecond]}`} alt="Current Image" width="500" height="300" onClick={() => handleImageClickSecond(currentImageIndexSecond)} />
            <button onClick={handleNextImageSecond}>Next</button>
        </div>
    );
}