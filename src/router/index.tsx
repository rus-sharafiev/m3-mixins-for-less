import React, { ReactNode } from "react"
import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom"
import App from "../App"

export const AppRoutes: ReactNode =
    <Route path="/*" element={<App />} />

const router = createBrowserRouter(
    createRoutesFromElements(AppRoutes)
)

export default router