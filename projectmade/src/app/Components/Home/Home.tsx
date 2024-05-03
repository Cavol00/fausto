"use client"
import Image from "next/image";
import { useState } from "react";
import "./Home.css";

export default function Home() {
    const [startImageIndex, setStartImageIndex] = useState(0);
    const [currentImageIndexSecond, setCurrentImageIndexSecond] = useState(0);
    const foto = ['foto1.png', 'foto2.png', 'foto3.png', 'foto4.png', 'foto5.png', 'foto6.png', 'foto7.png', 'foto8.png', 'foto9.png', 'foto10.png', 'foto11.png', 'foto12.png'];
    const secondFoto = ['foto1.png', 'foto2.png', 'foto3.png', 'foto4.png', 'foto5.png', 'foto6.png', 'foto7.png', 'foto8.png', 'foto9.png', 'foto10.png', 'foto11.png', 'foto12.png'];

    const handleImageClick = (index: number) => {
        setStartImageIndex(index);
        setCurrentImageIndexSecond(index); // Imposta l'indice corrispondente nel secondo array
    };

    const handleImageClickSecond = (index: number) => {
        setCurrentImageIndexSecond(index);
    };

    return (
        <div className="container">
            <div className="image-container">
                <button onClick={() => setStartImageIndex(Math.max(startImageIndex - 1, 0))} disabled={startImageIndex === 0}>Previous</button>
                {foto.slice(startImageIndex, startImageIndex + 3).map((image, index) => (
                    <Image key={index} src={`/${image}`} alt="Current Image" width="300" height="200" onClick={() => handleImageClick(startImageIndex + index)} />
                ))}
                <button onClick={() => setStartImageIndex(Math.min(startImageIndex + 1, foto.length - 3))} disabled={startImageIndex + 3 >= foto.length}>Next</button>
            </div>
            <div className="image-container">
                <button onClick={() => setCurrentImageIndexSecond(Math.max(currentImageIndexSecond - 1, 0))} disabled={currentImageIndexSecond === 0}>Previous</button>
                <Image src={`/${secondFoto[currentImageIndexSecond]}`} alt="Current Image" width="300" height="200" onClick={() => handleImageClickSecond(currentImageIndexSecond)} />
                <button onClick={() => setCurrentImageIndexSecond(Math.min(currentImageIndexSecond + 1, secondFoto.length - 1))} disabled={currentImageIndexSecond === secondFoto.length - 1}>Next</button>
            </div>
        </div>
    );
}
