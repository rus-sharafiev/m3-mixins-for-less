import React from "react";

const Buttons = () => {

    return (
        <div className="container">
            <a href='#buttons'>Buttons</a>
            <div>
                <div>
                    <span>Elevated</span>
                    <div>
                        <button type="button" className="elevated-button">Elevated button</button>
                        <code>.m3-elevated-button()</code>
                    </div>
                    <div>
                        <button type="button" className="elevated-button-with-icon"><span className="material-symbols-rounded">add</span>Elevated button</button>
                        <code>.m3-elevated-button-with-icon()</code>
                    </div>
                </div>
                <div>
                    <span>Filled</span>
                    <div>
                        <button type="button" className="filled-button">Filled button</button>
                        <code>.m3-filled-button()</code>
                    </div>
                    <div>
                        <button type="button" className="filled-button-with-icon"><span className="material-symbols-rounded">add</span>Filled button</button>
                        <code>.m3-filled-button-with-icon()</code>
                    </div>
                </div>
                <div>
                    <span>Filled tonal</span>
                    <div>
                        <button type="button" className="filled-tonal-button">Filled tonal button</button>
                        <code>.m3-filled-tonal-button()</code>
                    </div>
                    <div>
                        <button type="button" className="filled-tonal-button-with-icon"><span className="material-symbols-rounded">add</span>Filled tonal button</button>
                        <code>.m3-filled-tonal-button-with-icon()</code>
                    </div>
                </div>
                <div>
                    <span>Outlined</span>
                    <div>
                        <button type="button" className="outlined-button">Outlined button</button>
                        <code>.m3-outlined-button()</code>
                    </div>
                    <div>
                        <button type="button" className="outlined-button-with-icon"><span className="material-symbols-rounded">add</span>Outlined button</button>
                        <code>.m3-outlined-button-with-icon()</code>
                    </div>
                </div>
                <div>
                    <span>Text</span>
                    <div>
                        <button type="button" className="text-button">Text button</button>
                        <code>.m3-text-button()</code>
                    </div>
                    <div>
                        <button type="button" className="text-button-with-icon"><span className="material-symbols-rounded">add</span>Text button</button>
                        <code>.m3-text-button-with-icon()</code>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Buttons;