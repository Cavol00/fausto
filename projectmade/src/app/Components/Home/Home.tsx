"use client"
import { useState } from "react";
import Image from "next/image";
import "./Home.css";

interface Box {
    image?: string;
    video?: string;
    text: string;
    color: string;
    indirizzo?: string;
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

    const video: Box[] = [
        { video: 'video1.mp4', text: 'Liceo "A. Rosmini"', indirizzo: 'da inserire', color: '#FF5733' },
        { video: 'video2.mp4', text: 'Liceo Artistico "Fortunato Depero"', indirizzo: 'da inserire', color: '#33FF57' },
        { video: 'video3.mp4', text: 'Liceo delle Scienze Umane "F. Filzi"', indirizzo: 'da inserire', color: '#3366FF' },
        { video: 'video4.mp4', text: 'Liceo internazionale Arcivescovile', indirizzo: 'da inserire', color: '#FF3366' },
        { video: 'video5.mp4', text: 'Liceo Stem international', indirizzo: 'da inserire', color: '#66FF33' },
        { video: 'video6.mp4', text: 'Istituto Istruzione Don Milani', indirizzo: 'da inserire', color: '#FF6633' },
        { video: 'video7.mp4', text: 'Istituto Tecnico Tecnologico gmarconi', indirizzo: 'da inserire', color: '#33FFFF' },
        { video: 'video8.mp4', text: 'ITET Fontana', indirizzo: 'da inserire', color: '#FFFF33' },
        { video: 'video9.mp4', text: 'Polo Giuseppe Veronesi CFP MADE', indirizzo: 'da inserire', color: '#9933FF' },
        { video: 'video10.mp4', text: 'CFP Barelli', indirizzo: 'da inserire', color: '#FF9933' },
        { video: 'video11.mp4', text: 'Istituto di formazione professionale Alberghiero', indirizzo: 'da inserire', color: '#33FF99' },
        { video: 'video12.mp4', text: 'CFP UPT Scuola per il Terziario', indirizzo: 'da inserire', color: '#FF3399' },
    ];

    const handleImageClick = (index: number) => {
        setStartImageIndex(index);
        setCurrentImageIndexSecond(index);
    };

    const handleVideoClick = () => {
        const videoElement = document.getElementById('videoPlayer') as HTMLVideoElement;

        if (videoElement.paused) {
            videoElement.play();
            videoElement.controls = true;
        } else {
            videoElement.pause();
            videoElement.controls = false;
        }
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
                                    <img src={`/${box.image}`} alt="Current Image" width={230} height={230} className="circleImage" onClick={() => handleImageClick(startImageIndex + index)} />
                                </div>
                                <div className="second-image-container">
                                    <img src={`/${box.image}`} alt="Current Image" width={230} height={230} className="circleImage" />
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
                        <div className="video-container" onClick={() => handleVideoClick()}>
                            <video id="videoPlayer" src={`/${video[currentImageIndexSecond].video}`} type="video/mp4" />
                            <p>{video[currentImageIndexSecond].text}</p>
                        </div>
                        <button onClick={() => setCurrentImageIndexSecond(Math.min(currentImageIndexSecond + 1, video.length - 1))} disabled={currentImageIndexSecond === video.length - 1}>Next</button>
                    </div>
                </div>
            </div>
        </div>
    );
}
