import React from "react"
import { Link } from "react-router-dom"
import { copyText } from "../helpers/copyText"



const TextFields: React.FC = () => {

    return (
        <div className="container" id="text-fields">
            <Link to={'text-fields'}>Text fields</Link>
            <div>
                <div>
                    <span>Outlined text field</span>
                    <div>
                        <fieldset className="outlined-text-field">
                            <input type='text' id="chbx" placeholder=" " />
                            <legend>Label text</legend>
                            <label htmlFor="chbx" className="material-symbols-rounded">search</label>
                        </fieldset>
                        <code onClick={(e) => copyText(e)}>.m3-elevated-card()</code>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TextFields