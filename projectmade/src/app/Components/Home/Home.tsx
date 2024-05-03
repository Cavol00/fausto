"use client";
import Image from "next/image";
import foto1 from "./image/foto1.jpg";
import foto2 from "./image/foto2.jpg";
import foto3 from "./image/foto3.jpg";
import foto4 from "./image/foto4.jpg";
import { useState } from "react";

export default function Home() {
    let [currentImageIndex,setCurrentImageIndex] = useState(0);
    const foto = [foto1, foto2, foto3, foto4];
    const handleNextImage = () => {
        setCurrentImageIndex((currentImageIndex + 1) % foto.length);
    };

    const handlePreviousImage = () => {
        setCurrentImageIndex((currentImageIndex - 1 + foto.length) % foto.length);
    };

    return (
        <div>
            <button onClick={handlePreviousImage}>Previous</button>
            <Image src={`/${foto[currentImageIndex]}`} alt="Current Image" width="300" height="500" />
            <button onClick={handleNextImage}>Next</button>
        </div>
    );
}