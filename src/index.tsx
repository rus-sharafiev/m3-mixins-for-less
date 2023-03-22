import React from 'react'
import { createRoot } from 'react-dom/client'

import { RouterProvider } from 'react-router-dom'
import router from './router'

document.querySelector('body')?.classList.add('icons-hidden')
document.fonts.load("24px Material Symbols Rounded")
    .then(() => { document.querySelector('body')?.removeAttribute('class') });

createRoot(document.getElementById('root') as HTMLElement)
    .render(<RouterProvider router={router} />)