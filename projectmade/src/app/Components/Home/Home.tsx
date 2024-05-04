/*questo componente è stato creatoi dal puzzo del porco dio e non credo sarà mai utile a qualcuno ma grazie lo stesso della visione*/

"use client"

import Image from "next/image";
import { useState } from "react";
import "./Home.css";

interface Box {
    image: string;
}

export default function Home() {
    const [startImageIndex, setStartImageIndex] = useState(0);
    const [currentImageIndexSecond, setCurrentImageIndexSecond] = useState(0);
    interface Box {
        image: string;
        text: string;
    }
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
        setCurrentImageIndexSecond(index); // Imposta l'indice corrispondente nel secondo array
    };

    const handleImageClickSecond = (index: number) => {
        setCurrentImageIndexSecond(index);
    };

    return (
        <div className="sfondo">
            <div className="container">
                <div className="ciao">
                    <h1>ORIENTAMENTO</h1>
                    <div className="image-container">
                        <button onClick={() => setStartImageIndex(Math.max(startImageIndex - 1, 0))} disabled={startImageIndex === 0}>Previous</button>
                        {foto.slice(startImageIndex, startImageIndex + 5).map((box, index) => (
                            <div key={index} className="image-box dark-box">
                                <div className="zoom-box">
                                    <Image src={`/${box.image}`} alt="Current Image" width="230" height="230" className="circle-image" />
                                </div>
                                <Image src={`/${box.image}`} alt="Current Image" width="230" height="230" className="circle-image" onClick={() => handleImageClick(startImageIndex + index)} />
                                <p>{box.text}</p>
                            </div>
                        ))}
                        <button onClick={() => setStartImageIndex(Math.min(startImageIndex + 1, foto.length - 5))} disabled={startImageIndex + 5 >= foto.length}>Next</button>
                    </div>
                    <div className="image-container">
                        <button onClick={() => setCurrentImageIndexSecond(Math.max(currentImageIndexSecond - 1, 0))} disabled={currentImageIndexSecond === 0}>Previous</button>
                        <div className="image-box dark-box">
                            <div className="zoom-box">
                                <Image src={`/${secondFoto[currentImageIndexSecond]}`} alt="Current Image" width="230" height="230" className="circle-image" />
                            </div>
                            <Image src={`/${secondFoto[currentImageIndexSecond]}`} alt="Current Image" width="230" height="230" className="circle-image" onClick={() => handleImageClickSecond(currentImageIndexSecond)} />
                            <p>{foto[currentImageIndexSecond].text}</p> {/* Add the text of the image */}
                        </div>
                        <button onClick={() => setCurrentImageIndexSecond(Math.min(currentImageIndexSecond + 1, secondFoto.length - 1))} disabled={currentImageIndexSecond === secondFoto.length - 1}>Next</button>
                    </div>
                </div>
            </div>
        </div>
    );
}
