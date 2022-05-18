import React from 'react'
import Footer from './Footer'
import Header from './Header'
import { BrowserRouter } from 'react-router-dom'

export default function Layout(props) {
    return (
        <BrowserRouter>
            <Header/>
            {props.children}
            <Footer/>
        </BrowserRouter>
    )
}
