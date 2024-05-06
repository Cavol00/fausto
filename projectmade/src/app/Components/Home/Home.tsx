"use client"
import { useState } from "react";
import Image from "next/image";
import "./Home.css";

interface Box {
    image: string;
    text: string;
    color: string;
}

export default function Home() {
    const [startImageIndex, setStartImageIndex] = useState(0);
    const [currentImageIndexSecond, setCurrentImageIndexSecond] = useState(0);

    const foto: Box[] = [
        { image: 'foto1.png', text: 'Liceo "A. Rosmini"', color: '#FF5733' },
        { image: 'foto2.png', text: 'Liceo Artistico "Fortunato Depero"', color: '#33FF57' },
        { image: 'foto3.png', text: 'Liceo delle Scienze Umane "F. Filzi"', color: '#3366FF' },
        { image: 'foto4.png', text: 'Liceo internazionale Arcivescovile', color: '#FF3366' },
        { image: 'foto5.png', text: 'Liceo Stem international', color: '#66FF33' },
        { image: 'foto6.png', text: 'Istituto Istruzione Don Milani', color: '#FF6633' },
        { image: 'foto7.png', text: 'Istituto Tecnico Tecnologico gmarconi', color: '#33FFFF' },
        { image: 'foto8.png', text: 'ITET Fontana', color: '#FFFF33' },
        { image: 'foto9.png', text: 'Polo Giuseppe Veronesi CFP MADE', color: '#9933FF' },
        { image: 'foto10.png', text: 'CFP Barelli', color: '#FF9933' },
        { image: 'foto11.png', text: 'Istituto di formazione professionale Alberghiero', color: '#33FF99' },
        { image: 'foto12.png', text: 'CFP UPT Scuola per il Terziario', color: '#FF3399' },
    ];

    const handleImageClick = (index: number) => {
        setStartImageIndex(index);
        setCurrentImageIndexSecond(index);
    };

    const handleImageClickFirst = (index: number) => {
        setCurrentImageIndexSecond(index);
    };

    return (
        <div className="sfondo">
            <h1>ORIENTAMENTO</h1>
            <div className="ciao">
                <div className="container">

                    <div className="image-container">
                        <button className="sdrogo" onClick={() => setStartImageIndex(Math.max(startImageIndex - 1, 0))} disabled={startImageIndex === 0}>
                            <span className="iconP"></span>
                        </button>
                        {foto.slice(startImageIndex, startImageIndex + 5).map((box, index) => (
                            <div key={index} className={`imageBox darkBox`} style={{ backgroundColor: box.color }}>
                                <div className="zoomBox">
                                    <Image src={`/${box.image}`} alt="Current Image" width={230} height={230} className="circleImage" onClick={() => handleImageClick(startImageIndex + index)} />
                                </div>
                                <div className="second-image-container">
                                    <Image src={`/${box.image}`} alt="Current Image" width={230} height={230} className="circleImage" />
                                </div>
                                <p>{box.text}</p>
                            </div>
                        ))}
                        <button className="sdrogo" onClick={() => setStartImageIndex(Math.min(startImageIndex + 1, foto.length - 5))} disabled={startImageIndex + 5 >= foto.length}>
                            <span className="iconN"></span>
                        </button>
                    </div>



                    <div className="video">
                        <button onClick={() => setCurrentImageIndexSecond(Math.max(currentImageIndexSecond - 1, 0))} disabled={currentImageIndexSecond === 0}>Previous</button>
                        <div className="darkBox" style={{ backgroundColor: foto[currentImageIndexSecond].color }}>
                            <div className="second-image-container ">
                                <Image src={`/${foto[currentImageIndexSecond].image}`} alt="Current Image" width={230} height={230} className={"circleImage"} onClick={() => handleImageClickFirst(currentImageIndexSecond)} />
                            </div>
                            <Image src={`/${foto[currentImageIndexSecond].image}`} alt="Current Image" width={230} height={230} className={"circleImage"} />
                            <p>{foto[currentImageIndexSecond].text}</p>
                        </div>
                        <button onClick={() => setCurrentImageIndexSecond(Math.min(currentImageIndexSecond + 1, foto.length - 1))} disabled={currentImageIndexSecond === foto.length - 1}>Next</button>
                    </div>
                </div>
            </div>
        </div>
    );
}
