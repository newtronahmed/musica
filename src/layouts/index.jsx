import React from 'react'
import search from '/svgs/search.svg'
import home from '/svgs/home.svg'
import {
    Home3, Radio,
    MusicLibrary2,
    VideoHorizontal,
    Profile,
    LogoutCurve,
    SearchNormal1,
} from 'iconsax-react'
import Footer from '../components/footer'
import { NavLink } from 'react-router-dom'


function Layout({ children }) {
    return (
        <main className="lg:grid lg:grid-cols-12 lg:pr-10 ">
            <nav className="fixed col-span-1 row-start-1 row-end-3">
                <header className='mb-6 pt-2'>
                    <div className='px-4 flex-none'>
                        <img src="/svgs/logo.svg" alt="logo" />
                    </div>
                </header>
                <div className="nav-links-container ml-4 flex flex-col items-center">
                    <div className="flex flex-col mb-6 rounded-[2rem] max-w-fit bg-secondary nav-svg-container-1">
                        <NavLink to={"/"} className={({ isActive }) => `nav-link ${isActive ? "text-primary-yellow" : ''}`}>
                            <Home3 variant="Bold" size={27} />
                        </NavLink>
                        <NavLink to="music" className={({ isActive }) => `nav-link ${isActive ? "text-primary-yellow" : ''}`} >
                            <MusicLibrary2 variant="Bold" size={27} />
                        </NavLink>
                        <NavLink to="/radio" className={({ isActive }) => `nav-link ${isActive ? "text-primary-yellow" : ''}`} >
                            <Radio variant="Bold" size={27} />
                        </NavLink>
                        <NavLink to="/video" className={({ isActive }) => `nav-link ${isActive ? "text-primary-yellow" : ''}`} >
                            <VideoHorizontal variant="Bold" size={27} />
                        </NavLink>
                    </div>
                    <div className="flex flex-col max-w-fit bg-secondary rounded-[2rem] py-2">
                        <NavLink to="/profile" className={({ isActive }) => `nav-link ${isActive ? "text-primary-yellow" : ''}`} >
                            <Profile variant="Bold" size={27} />
                        </NavLink>
                        <NavLink to="/logout" className={({ isActive }) => `nav-link ${isActive ? "text-primary-yellow" : ''}`} >
                            <LogoutCurve variant="Bold" size={27} />
                        </NavLink>
                    </div>
                </div>
            </nav>
            <div className='col-start-2 col-span-11 lg:pr-6 row-start-1 row-end-3'>
                <div className='fixed top-0 bg-opacity-90 w-full flex items-center pt-4  backdrop-blur-md z-[2]'>
                    <div>
                        <SearchNormal1 size={18} />
                    </div>
                    <input type="text" className=' px-4 border-none bg-transparent ' placeholder='Search artist' />
                </div>
                <div className='mt-16'>
                    {children}
                </div>
            </div>
            <Footer />

        </main>


    )
}

export default Layout