import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";

const iconsLoaded = (event: any) => {
    event.fontfaces.map( (font: any) => {
        if (font.family == 'Material Symbols Rounded') {
            document.getElementById("root")?.classList.remove('icons-hidden');
            document.fonts.removeEventListener("loadingdone", iconsLoaded);
        }
    })
}
document.fonts.addEventListener("loadingdone", iconsLoaded);

const Buttons = () => {

    // Drag & Drop ---------------------------------------
    let el: HTMLButtonElement | null = null;
    let x: number, y: number, top: number, left: number;
    const handleMouseDown = (event: any) => {
        el = event.currentTarget;
        el?.classList.add('drag');
        x = event.nativeEvent.offsetX;
        y = event.nativeEvent.offsetY;
        top = event.clientY - y;
        left = event.clientX - x;
    }
    const handleMouseMove = (event: any) => {
        if (el !== null) {
            el.style.position = 'absolute';
            el.style.top = (event.clientY - y) + 'px';
            el.style.left = (event.clientX - x) + 'px';
        }
    }
    const handleMouseUp = () => {
        if (el !== null) {
            el.style.transition = 'all 0.3s ease-in';
            setTimeout(() => {
                if (el !== null) {
                    el.style.top = top + 'px';
                    el.style.left = left + 'px';
                }
                setTimeout(() => {
                    x = y = top = left = 0;
                    el?.classList.remove('drag');
                    el?.removeAttribute('style');
                    el = null;
                }, 300);
            }, 100);
        }
    }

    return (
        <div className="buttons">
            <div>
                <button type="button" className="elevated">Elevated button</button>
                <button type="button" className="elevated-icon"><span className="material-symbols-rounded">add</span>Elevated button</button>
                
            </div>
            <div>
                <button type="button" className="filled">Filled button</button>
                <button type="button" className="filled-icon"><span className="material-symbols-rounded">add</span>Filled button</button>
            </div>
            <div>
                <button type="button" className="filled-tonal">Filled tonal button</button>
                <button type="button" className="filled-tonal-icon"><span className="material-symbols-rounded">add</span>Filled tonal button</button>
            </div>
            <div>
                <button type="button" className="outlined">Outlined button</button>
                <button type="button" className="outlined-icon"><span className="material-symbols-rounded">add</span>Outlined button</button>
            </div>
        </div>
    )
}
const NavButton = (props: { id: string; symbol: string; name: string}) => {
    return (
        <NavLink to={`/${props.id}`} className={ ({ isActive }) => isActive ? 'nav-active' : undefined }>
            <span className='material-symbols-rounded'>{props.symbol}</span>
            {props.name}
        </NavLink> 
    )
}
const App = () => {

    return ( 
        <>
            <main>
                <div className='title'>Material Design 3 Componets<div>mixins for <div className='less'>{`{less}`}</div></div></div>
                <Buttons />
            </main>
            <nav>
                <a href='#buttons' id='buttons'><span className='material-symbols-rounded'>radio_button_unchecked</span>Buttons</a>
                <a href='#cards' id='cards' className='nav-active'><span className='material-symbols-rounded'>dashboard</span>Cards</a>
            </nav>
            <footer></footer>
        </>
    );
}

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(<BrowserRouter><App /></BrowserRouter>);