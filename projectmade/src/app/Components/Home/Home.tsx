"use client";
import Image from "next/image";
export default function Home() {
    const foto = ["foto1.jpg", "foto2.jpg", "foto3.jpg", "foto4.jpg"];
    let currentImageIndex = 0;

    const handleNextImage = () => {
        currentImageIndex = (currentImageIndex + 1) % foto.length;
    };

    const handlePreviousImage = () => {
        currentImageIndex = (currentImageIndex - 1 + foto.length) % foto.length;
    };

    return (
        <div>
            <button onClick={handlePreviousImage}>Previous</button>
            <Image src={foto[currentImageIndex]} alt="Current Image" />
            <button onClick={handleNextImage}>Next</button>
        </div>
    );
}