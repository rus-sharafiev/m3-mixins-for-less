import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import Buttons from './components/buttons';
import Cards from './components/cards';

const iconsLoaded = (event: any) => {
    event.fontfaces.map( (font: any) => {
        if (font.family == 'Material Symbols Rounded') {
            document.getElementById("root")?.classList.remove('icons-hidden');
            document.fonts.removeEventListener("loadingdone", iconsLoaded);
        }
    })
}
document.fonts.addEventListener("loadingdone", iconsLoaded);

export const copyText = (e: any) => {
    let text = e.currentTarget.outerText;
    navigator.clipboard.writeText(text).then(
        () => {
          console.log('copied to clipboard');
        },
        () => {
            console.log('clipboard write failed');
        }
      );
}

const App = () => {

    return ( 
        <>
            <main>
                <div className='title'>Material Design 3 Componets<div>mixins for <div className='less'>{`{less}`}</div></div></div>
                <Buttons />
                <Cards />
            </main>
            <nav>
                <a id='buttons'><span className='material-symbols-rounded'>radio_button_unchecked</span>Buttons</a>
                <a id='cards' className='nav-active'><span className='material-symbols-rounded'>dashboard</span>Cards</a>
            </nav>
            <footer></footer>
        </>
    );
}

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(<BrowserRouter><App /></BrowserRouter>);