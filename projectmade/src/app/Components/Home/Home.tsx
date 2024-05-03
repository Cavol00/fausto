import { useClient } from 'next/dist/client/router';
import Image from 'next/image';

const foto = ["foto1.jpg", "foto2.jpg", "foto3.jpg", "foto4.jpg"];
let currentImageIndex = 0;

export default function Home() {
    const router = useClient();

    const handleImageClick = (index) => {
        router.push(`/Op${index + 1}`);
    };

    const handlePrevClick = () => {
        currentImageIndex = (currentImageIndex === 0 ? foto.length - 1 : currentImageIndex - 1);
        updateImage();
    };

    const handleNextClick = () => {
        currentImageIndex = (currentImageIndex === foto.length - 1 ? 0 : currentImageIndex + 1);
        updateImage();
    };

    const updateImage = () => {
        const image = document.getElementById('current-image');
        image.src = `/image/${foto[currentImageIndex]}`;
    };

    return (
        <div>
            <h1>ORIENTAMENTO</h1>
            <div>
                <div>
                    <button onClick={handlePrevClick}>Prev</button>
                    <button onClick={handleNextClick}>Next</button>
                </div>
                <div>
                    <button onClick={() => handleImageClick(currentImageIndex)}>
                        <Image id="current-image" src={`/image/${foto[currentImageIndex]}`} alt={`Item ${currentImageIndex + 1}`} width={100} height={100} />
                    </button>
                </div>
            </div>
        </div>
    );
}
