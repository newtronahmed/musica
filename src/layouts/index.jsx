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
import { useGlobalContext } from '../context/global'


function Layout({ children }) {
    const { mobileNav } = useGlobalContext()
    return (
        <main className="lg:grid lg:grid-cols-12 lg:pr-10 ">
            <nav className={`fixed left-0 ${mobileNav ? "translate-x-0" : "-translate-x-full"} transition  md:translate-x-0  col-span-1 row-start-1 row-end-3`}>
                <header className='sm:mb-6 pt-2'>
                    <div className='px-4 flex lg:flex-none'>
                        <div className="mr-4 cursor-pointer sm:hidden" onClick={mobileNav}>
                            <div className="w-5 h-[2px] bg-white"></div>
                            <div className="w-5 h-[2px] mt-1 bg-white"></div>
                            <div className="w-5 h-[2px] mt-1 bg-white"></div>
                        </div>
                        <img src="/svgs/logo.svg" alt="logo" />
                    </div>
                </header>
                <div className="nav-links-container bg-secondary sm:bg-transparent sm:ml-4 flex flex-col items-center ">
                    <div className="flex flex-col mb-6 rounded-[2rem] max-w-fit bg-secondary nav-svg-container-1">
                        <div className='flex gap-4 items-center'>
                            <NavLink to={"/"} className={({ isActive }) => `nav-link ${isActive ? "text-primary-yellow" : ''}`}>
                                <Home3 variant="Bold" size={27} />
                            </NavLink>
                            <div className='sm:hidden px-4'>Home</div>
                        </div>
                        <div className='flex gap-4 items-center'>
                            <NavLink to="music" className={({ isActive }) => `nav-link ${isActive ? "text-primary-yellow" : ''}`} >
                                <MusicLibrary2 variant="Bold" size={27} />
                            </NavLink>
                            <div className='sm:hidden px-4'>Collections </div>
                        </div>
                        <div className='flex gap-4 items-center'>
                            <NavLink to="/radio" className={({ isActive }) => `nav-link ${isActive ? "text-primary-yellow" : ''}`} >
                                <Radio variant="Bold" size={27} />
                            </NavLink>
                            <div className='sm:hidden px-4'>Radio</div>
                        </div>
                        <div className='flex gap-4 items-center'>
                            <NavLink to="/video" className={({ isActive }) => `nav-link ${isActive ? "text-primary-yellow" : ''}`} >
                                <VideoHorizontal variant="Bold" size={27} />
                            </NavLink>
                            <div className='sm:hidden px-4'>Videos</div>
                        </div>

                    </div>
                    <div className="flex flex-col flex-none max-w-fit bg-secondary rounded-[2rem] py-2">
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
                <div className='mt-16 mb-[80px]'>
                    {children}
                </div>
            </div>
            <Footer />

        </main>


    )
}

export default Layout