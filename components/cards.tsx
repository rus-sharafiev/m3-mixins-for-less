import React from "react";

const Cards = () => {

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

    const Card = (props: { class: string }) => {
        return(
            <div className={"card " + props.class}>
                <div></div>
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
                        <code>.m3-elevated-card()</code>
                    </span>
                    <div>
                        <Card class="elevated-card" />
                    </div>
                </div>
                <div>
                    <span>
                        Filled
                        <code>.m3-filled-card()</code>
                    </span>
                    <div>
                        <Card class="filled-card" />
                    </div>
                </div>
                <div>
                    <span>
                        Outlined
                        <code>.m3-outlined-card()</code>
                    </span>
                    <div>
                        <Card class="outlined-card" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cards;