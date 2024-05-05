"use client"
import { useState } from "react";
import Image from "next/image";
import "./Home.css";
import { disableCursor } from "@fullcalendar/common";

interface Box {
    image: string;
    text: string;
}

export default function Home() {
    const [startImageIndex, setStartImageIndex] = useState(0);
    const [currentImageIndexSecond, setCurrentImageIndexSecond] = useState(0);

    const foto: Box[] = [
        { image: 'foto1.png', text: 'Text 1' },
        { image: 'foto2.png', text: 'Liceo Fortunato Depero' },
        { image: 'foto3.png', text: 'Text 3' },
        { image: 'foto4.png', text: 'Text 4' },
        { image: 'foto5.png', text: 'Text 5' },
        { image: 'foto6.png', text: 'Text 6' },
        { image: 'foto7.png', text: 'Text 7' },
        { image: 'foto8.png', text: 'Text 8' },
        { image: 'foto9.png', text: 'Text 9' },
        { image: 'foto10.png', text: 'Text 10' },
        { image: 'foto11.png', text: 'Text 11' },
        { image: 'foto12.png', text: 'Text 12' },
    ];
    const secondFoto = ['foto1.png', 'foto2.png', 'foto3.png', 'foto4.png', 'foto5.png', 'foto6.png', 'foto7.png', 'foto8.png', 'foto9.png', 'foto10.png', 'foto11.png', 'foto12.png'];

    const handleImageClick = (index: number) => {
        setStartImageIndex(index);
        setCurrentImageIndexSecond(index);
    };

    const handleImageClickFirst = (index: number) => {
        setCurrentImageIndexSecond(index);
    };

    return (
            <div className="sfondo">
        <div className="ciao">
                <div className="container">
                    <div className="image-container">
                        <button onClick={() => setStartImageIndex(Math.max(startImageIndex - 1, 0))} disabled={startImageIndex === 0}>Previous</button>
                        {foto.slice(startImageIndex, startImageIndex + 5).map((box, index) => (
                            <div key={index} className={`imageBox darkBox`}>
                                <div className="zoomBox">
ù                                </div>
                                <Image src={`/${box.image}`} alt="Current Image" width={230} height={230} className="circleImage" onClick={() => handleImageClick(startImageIndex + index)} />
                                <p>{box.text}</p>
                            </div>
                        ))}
                        <button onClick={() => setStartImageIndex(Math.min(startImageIndex + 1, foto.length - 5))} disabled={startImageIndex + 5 >= foto.length}>Next</button>
                    </div>
                    <div className="image-container">
                        <button onClick={() => setCurrentImageIndexSecond(Math.max(currentImageIndexSecond - 1, 0))} disabled={currentImageIndexSecond === 0}>Previous</button>
                        <div className="darkBox">
                            <div className="zoomBox">
                                <Image src={`/${secondFoto[currentImageIndexSecond]}`} alt="Current Image" width={230} height={230} className={"circleImage"} />
                            </div>
                            <p>{foto[currentImageIndexSecond].text}</p>
                        </div>
                        <button onClick={() => setCurrentImageIndexSecond(Math.min(currentImageIndexSecond + 1, secondFoto.length - 1))} disabled={currentImageIndexSecond === secondFoto.length - 1}>Next</button>
                    </div>
                </div>
            </div>
        </div>
    );
}


