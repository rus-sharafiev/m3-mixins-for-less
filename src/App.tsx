import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import Buttons from './components/Buttons'
import Cards from './components/Cards'
import Nav from './components/Nav'
import TextFields from './components/TextFields'

const App: React.FC = () => {
    let location = useLocation()

    useEffect(() => {
        let current = location.pathname.split('/')[1]
        document.getElementById(`${current}`)?.scrollIntoView({ behavior: "smooth", block: "start" })
    }, [location])

    return (
        <>
            <main>
                <div className='title'>Material Design 3 Componets<div>mixins for <div className='less'>{`{less}`}</div></div></div>
                <Buttons />
                <Cards />
                <TextFields />
            </main>
            <Nav />
            <footer></footer>
        </>
    );
}

export default App