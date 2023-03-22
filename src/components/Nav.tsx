import React from 'react'
import { NavLink } from "react-router-dom"

const Nav: React.FC = () => {

    const NavBtn: React.FC<{ to: string, icon: string, name: string }> = ({ to, icon, name }) => {

        return (
            <NavLink to={to} className={({ isActive }) => isActive ? 'nav-active' : undefined} >
                <span className='material-symbols-rounded'>{icon}</span>
                {name}
            </NavLink>
        )
    }

    return (
        <nav>
            <NavBtn to='/buttons' icon='radio_button_unchecked' name='Buttons' />
            <NavBtn to='/cards' icon='dashboard' name='Cards' />
            <NavBtn to='/text-fields' icon='dashboard' name='Text fields' />
        </nav>
    )
}

export default Nav