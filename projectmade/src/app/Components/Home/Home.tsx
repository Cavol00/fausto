import React, { useState } from 'react';
import foto1 from '../../assets/foto1.jpg';
import foto2 from '../../assets/foto2.jpg';
import foto3 from '../../assets/foto3.jpg';
import foto4 from '../../assets/foto4.jpg';
import styles from '../styles/Home.module.css';

export default function Home() {
    const [scrollPosition, setScrollPosition] = useState(0);
    const menuItems = ["foto1.jpg", "foto2.jpg", "foto3.jpg", "foto4.jpg"];

    const scrollLeft = () => {
        setScrollPosition((prevPosition) => Math.max(0, prevPosition - 1));
    };

    const scrollRight = () => {
        setScrollPosition((prevPosition) => Math.min(menuItems.length - 1, prevPosition + 1));
    };

    const handleImageClick = () => {
        const selectedPath = `/foto${scrollPosition + 1}`;
        console.log(selectedPath); // Puoi navigare alla pagina desiderata qui
    };

    return (
        <div className={styles.container}>
            <h1>ORIENTAMENTO</h1>
            <div className={styles.menuContainer}>
                <button className={styles.menuArrowLeft} onClick={scrollLeft} disabled={scrollPosition === 0}>
                    &lt;
                </button>
                <div className={styles.menuItemsContainer}>
                    {menuItems.map((item, index) => (
                        <button key={index} className={styles.menuItemButton} onClick={handleImageClick}>
                            <img src={item} alt={`Item ${index + 1}`} width={100} height={100} />
                        </button>
                    ))}
                </div>
                <button className={styles.menuArrowRight} onClick={scrollRight} disabled={scrollPosition === menuItems.length - 1}>
                    &gt;
                </button>
            </div>
        </div>
    );
}
