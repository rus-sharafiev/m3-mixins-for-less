import React from "react"
import { Link } from "react-router-dom"
import { copyText } from "../helpers/copyText"

const Card: React.FC<{ className: string }> = ({ className }) => {

    // Drag & Drop ---------------------------------------
    let el: HTMLDivElement | null = null;
    let x: number = 0,
        y: number = 0,
        xPrev: number = 0,
        yPrev: number = 0,
        top: number = 0,
        left: number = 0;

    const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
        el = e.currentTarget;
        if (el !== null) {
            el.classList.add('drag');
            top = el.offsetTop;
            left = el.offsetLeft;
        }
        xPrev = e.clientX;
        yPrev = e.clientY;
    }
    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (el !== null) {
            el.style.position = 'absolute';
            x = xPrev - e.clientX;
            y = yPrev - e.clientY;
            xPrev = e.clientX;
            yPrev = e.clientY;
            el.style.top = (el.offsetTop - y) + "px";
            el.style.left = (el.offsetLeft - x) + "px";
        }
    }
    const handleMouseUp = () => {
        if (el !== null) {
            setTimeout(() => {
                if (el !== null && top !== el.offsetTop && left !== el.offsetLeft) {
                    el.style.transition = 'all 0.3s ease-in';
                    el.style.top = top + 'px';
                    el.style.left = left + 'px';
                }
                setTimeout(() => {
                    el?.classList.remove('drag');
                    el?.removeAttribute('style');
                    el = null;
                }, 300);
            }, 100);
        }
    }
    // ---------------------------------------------------

    return (
        <div className={`card ${className}`} onMouseDown={handleMouseDown} onMouseMove={handleMouseMove} onMouseUp={handleMouseUp}>
            <div className="material-symbols-rounded">image</div>
            <div>Headline</div>
            <div>Subhead</div>
            <div>Explain more about the topic shown in the headline and subhead through supporting text</div>
            <button type="button" className="filled-button">Action</button>
        </div>
    )
}


const Cards: React.FC = () => {

    return (
        <div className="container" id="cards">
            <Link to={'cards'}>Cards</Link>
            <div>
                <div>
                    <span>Elevated</span>
                    <div>
                        <Card className="elevated-card" />
                        <code onClick={(e) => copyText(e)}>.m3-elevated-card()</code>
                    </div>
                </div>
                <div>
                    <span>Filled</span>
                    <div>
                        <Card className="filled-card" />
                        <code onClick={(e) => copyText(e)}>.m3-filled-card()</code>
                    </div>
                </div>
                <div>
                    <span>Outlined</span>
                    <div>
                        <Card className="outlined-card" />
                        <code onClick={(e) => copyText(e)}>.m3-outlined-card()</code>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cards