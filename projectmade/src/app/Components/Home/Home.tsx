import React from 'react';
import './Home.css';

function Immagini() {
    return (
        <div className="box">
            <h2>Immagini</h2>
            {/* Aggiungi qui le tue immagini */}
            <img src="image1.jpg" alt="Immagine 1" />
            <img src="image2.jpg" alt="Immagine 2" />
            <img src="image3.jpg" alt="Immagine 3" />
        </div>
    );
}

function Video() {
    return (
        <div className="box">
            <h2>Video</h2>
            {/* Aggiungi qui i tuoi video */}
            <video controls>
                <source src="video1.mp4" type="video/mp4" />
                Il tuo browser non supporta il tag video.
            </video>
            <video controls>
                <source src="video2.mp4" type="video/mp4" />
                Il tuo browser non supporta il tag video.
            </video>
            <video controls>
                <source src="video3.mp4" type="video/mp4" />
                Il tuo browser non supporta il tag video.
            </video>
        </div>
    );
}

export default function Home() {
    return (
        <div>
            <h1>ORIENTAMENTO</h1>
            {/* Aggiungi le box delle foto */}
            <Immagini />
            {/* Aggiungi le box dei video */}
            <Video />
        </div>
    );
}
