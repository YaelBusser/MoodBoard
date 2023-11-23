// import React from "react";
import "./index.css"
import {useNavigate} from "react-router-dom";
import {useEffect, useState} from "react";
import {useMediaQuery, useTheme} from "@mui/material";

const Header = () => {
    const navigate = useNavigate();
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
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("md"));
    return (
        <div className={`header${isSrolled ? ' header-scrolled' : ''}`}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="back-arrow" onClick={() => navigate("/")}>
                <g>
                    <path
                        d="M13.83 19a1 1 0 0 1-.78-.37l-4.83-6a1 1 0 0 1 0-1.27l5-6a1 1 0 0 1 1.54 1.28L10.29 12l4.32 5.36a1 1 0 0 1-.78 1.64z"></path>
                </g>
            </svg>
            {
                !isMobile && (
                    <h1>
                        <span className={"mood"}>Mood</span>
                        <span className={"c"}> C</span>
                        <span className={"r"}>r</span>
                        <span className={"a"}>a</span>
                        <span className={"f"}>f</span>
                        <span className={"t"}>t</span>
                    </h1>

                )
            }
            <button
                onClick={() => navigate("/play")}
                style={isMobile ? {position: "relative", right: "0"} : {}}
            >
                Play
            </button>


        </div>
    );
}

export default Header;