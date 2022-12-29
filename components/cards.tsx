import React from "react";
import { copyText } from '../app';

const Cards = () => {

    // Drag & Drop ---------------------------------------
    let el: HTMLButtonElement | null = null;
    let x: number = 0, 
        y: number = 0, 
        xPrev: number = 0, 
        yPrev = 0, 
        top: number = 0, 
        left: number = 0;
    
    const handleMouseDown = (e: any) => {
        el = e.currentTarget;
        if (el !== null) {        
            el.classList.add('drag');
            top = el.offsetTop;
            left = el.offsetLeft;
        }
        xPrev = e.clientX;
        yPrev = e.clientY;
    }
    const handleMouseMove = (e: any) => {
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

    const Card = (props: { class: string }) => {
        return(
            <div className={"card " + props.class} onMouseDown={handleMouseDown} onMouseMove={handleMouseMove} onMouseUp={handleMouseUp}>
                <div className="material-symbols-rounded">image</div>
                <div>Headline</div>
                <div>Subhead</div>
                <div>Explain more about the topic shown in the headline and subhead through supporting text</div>
                <button type="button" className="filled-button">Action</button>
            </div>
        )
    }

    return (
        <div className="container">
            <a href='#cards'>Cards</a>
            <div>
                <div>
                    <span>
                        Elevated
                    </span>
                    <div>
                        <Card class="elevated-card" />
                        <code onClick={(e) => copyText(e)}>.m3-elevated-card()</code>
                    </div>
                </div>
                <div>
                    <span>
                        Filled
                    </span>
                    <div>
                        <Card class="filled-card" />
                        <code onClick={(e) => copyText(e)}>.m3-filled-card()</code>
                    </div>
                </div>
                <div>
                    <span>
                        Outlined
                    </span>
                    <div>
                        <Card class="outlined-card" />
                        <code onClick={(e) => copyText(e)}>.m3-outlined-card()</code>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cards;