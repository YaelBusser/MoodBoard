import {useEffect, useState} from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Header from './modules/Header';
import Japan from './pages/Theme/Japan';
import Street from './pages/Theme/Street';
import Luxe from './pages/Theme/Luxe';
import Future from './pages/Theme/Future';

function App() {
    const [showSplash, setShowSplash] = useState(true);

    useEffect(() => {
        // Supprimez le splash screen après un certain délai (par exemple, 2 secondes)
        const removeSplashScreen = () => {
            setShowSplash(false);
            document.body.style.overflow = 'auto';
        };

        // Utilisez setTimeout pour simuler une attente
        setTimeout(removeSplashScreen, 1000);
    }, []);

    return (
        <div className={'app'}>
            <div className={'container-app'}>
                {showSplash && (
                    <div id="splash-screen">
                        <div className="loader"></div>
                    </div>
                )}

                <BrowserRouter>
                    <Header/>
                    <div className="transition-container">

                        <Routes location={location}>
                            <Route path={'/'} element={<Home/>}/>
                            <Route path={'/theme/japan'} element={<Japan/>}/>
                            <Route path={'/theme/street'} element={<Street/>}/>
                            <Route path={'/theme/luxe'} element={<Luxe/>}/>
                            <Route path={'/theme/future'} element={<Future/>}/>
                        </Routes>
                    </div>
                </BrowserRouter>
            </div>
        </div>
    )
        ;
}

export default App;
