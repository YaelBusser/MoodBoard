import "./index.css";
import {useEffect, useState} from "react";

const ScrollDown = () => {
    const [isSrolled, setIsScrolled] = useState<boolean>(false);
    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.scrollY;
            setIsScrolled(scrollTop > 0);
        };
        // Ajoutez un écouteur d'événement de défilement lors de la montée du composant
        window.addEventListener('scroll', handleScroll);
        // Nettoyez l'écouteur d'événement lorsque le composant est démonté
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    return (
        <div className={`container_mouse${isSrolled ? ' container_mouse-scrolled' : ''}`}>
            <span className="mouse-btn">
                <span className="mouse-scroll"></span>
            </span>
            <span className={"scroll-down-text"}>Scroll Down</span>
        </div>
    )
}
export default ScrollDown;