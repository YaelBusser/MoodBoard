// App.jsx
import { useEffect, useState } from 'react';
import {Routes, Route, useLocation } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import './App.css';  // Importez également le fichier transitions.css
import Home from './pages/Home';
import Header from './modules/Header';
import Japan from './pages/Theme/Japan';
import Street from './pages/Theme/Street';
import Luxe from './pages/Theme/Luxe';
import Future from './pages/Theme/Future';
import Play from "./pages/Play";

const App = () => {
    const [showSplash, setShowSplash] = useState(true);
    const location = useLocation();

    useEffect(() => {
        const removeSplashScreen = () => {
            setShowSplash(false);
            document.body.style.overflow = 'auto'; // Réactivez le défilement après l'animation
        };

        setTimeout(removeSplashScreen, 1000);
    }, []);
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };
    useEffect(() => {
        scrollToTop();
    }, [location.pathname]);
    return (
        <div className={'app'}>
            <div className={'container-app'}>
                {showSplash && (
                    <div id="splash-screen">
                        <div className="loader"></div>
                    </div>
                )}
                <Header />
                <div className="transition-container">
                    <TransitionGroup>
                        <CSSTransition
                            key={location.key}
                            classNames="page"
                            timeout={500}
                            onEnter={() => {
                                document.body.style.overflow = 'hidden'; // Désactivez le défilement pendant l'animation
                            }}
                            onExited={() => {
                                document.body.style.overflow = 'auto'; // Réactivez le défilement après l'animation
                            }}
                        >
                            <Routes location={location}>
                                <Route path={'/'} element={<Home />} />
                                <Route path={'/theme/japan'} element={<Japan />} />
                                <Route path={'/theme/street'} element={<Street />} />
                                <Route path={'/theme/luxe'} element={<Luxe />} />
                                <Route path={'/theme/future'} element={<Future />} />
                                <Route path={'/play'} element={<Play />} />
                            </Routes>
                        </CSSTransition>
                    </TransitionGroup>
                </div>
            </div>
        </div>
    );
}

export default App;
