import React from 'react'
import { Outlet } from 'react-router-dom'
import NavbarComponent from '../components/Navbar/NavbarComponent'
import FooterComponent from '../components/Footer/FooterComponent'
const HomeLayout = () => {
    return (
        <div>
            <NavbarComponent />
            <main>
                <Outlet /> {/* This will render protected pages like Dashboard, etc. */}
            </main>
            <FooterComponent/>
        </div>

    )
}

export default HomeLayout
