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
    const {openNav, closeNav, mobileNav} = useGlobalContext()
    return (
        <main className="lg:grid lg:grid-cols-12 lg:pr-10 relative">
            <header className='sm:mb-6 py-4 z-10 flex gap-8 items-center bg:transparent w-full bg-opacity-90 backdrop-blur-sm fixed top-0  col-start-1 col-span-12 '>
                <div className='px-4 flex items-center'>
                    <div className="mr-4 cursor-pointer sm:hidden" onClick={()=>openNav()}>
                        <div className="w-5 h-[2px] bg-white"></div>
                        <div className="w-5 h-[2px] mt-1 bg-white"></div>
                        <div className="w-5 h-[2px] mt-1 bg-white"></div>
                    </div>
                    <img src="/svgs/logo.svg" alt="logo" />
                </div>
                <div className='bg-opacity-90  flex items-center flex-grow  backdrop-blur-md '>
                    <div>
                        <SearchNormal1 size={18} />
                    </div>
                    <input type="text" className=' px-4 border-none bg-transparent ' placeholder='Search artist' />
                </div>

            </header>
            <nav className={` fixed left-0 top-0 bottom-0 h-screen sm:w-max right-0  transition ${mobileNav ? "translate-x-0":"-translate-x-full"} sm:top-[5rem] z-20  md:translate-x-0  sm:col-span-1 `}>
                <div className="nav-links-container h-full py-4 sm:py-0 sm:h-auto w-full sm:w-auto  bg-secondary sm:bg-transparent  sm:ml-4 flex flex-col items-center ">
                    <div className="flex flex-col mb-6 rounded-[2rem] w-full bg-secondary nav-svg-container-1">
                        <div className='flex gap-4 items-center cursor-pointer' onClick={()=>closeNav()}>
                            <NavLink to={"/"} className={({ isActive }) => `nav-link ${isActive ? "text-primary-yellow" : ''}`}>
                                <Home3 variant="Bold" size={27} />
                            </NavLink>
                            <div className='sm:hidden px-4'>Home</div>
                        </div>
                        <div className='flex gap-4 items-center cursor-pointer' onClick={()=>closeNav()}>
                            <NavLink to="music" className={({ isActive }) => `nav-link ${isActive ? "text-primary-yellow" : ''}`} >
                                <MusicLibrary2 variant="Bold" size={27} />
                            </NavLink>
                            <div className='sm:hidden px-4'>Collections </div>
                        </div>
                        <div className='flex gap-4 items-center cursor-pointer' onClick={()=>closeNav()}>
                            <NavLink to="/radio" className={({ isActive }) => `nav-link ${isActive ? "text-primary-yellow" : ''}`} >
                                <Radio variant="Bold" size={27} />
                            </NavLink>
                            <div className='sm:hidden px-4'>Radio</div>
                        </div>
                        <div className='flex gap-4 items-center cursor-pointer' onClick={()=>closeNav()}>
                            <NavLink to="/video" className={({ isActive }) => `nav-link ${isActive ? "text-primary-yellow" : ''}`} >
                                <VideoHorizontal variant="Bold" size={27} />
                            </NavLink>
                            <div className='sm:hidden px-4'>Videos</div>
                        </div>

                    </div>
                    <div className="flex flex-col flex-none w-full bg-secondary rounded-[2rem] py-2">
                        <div className='flex gap-4 items-center cursor-pointer' onClick={()=>closeNav()}>
                            <NavLink to="/profile" className={({ isActive }) => `nav-link ${isActive ? "text-primary-yellow" : ''}`} >
                                <Profile variant="Bold" size={27} />
                            </NavLink>
                            <div className='sm:hidden px-4'>Profile</div>
                        </div>
                        <div className='flex gap-4 items-center cursor-pointer' onClick={()=>closeNav()}>
                            <NavLink to="/logout" className={({ isActive }) => `nav-link ${isActive ? "text-primary-yellow" : ''}`} >
                                <LogoutCurve variant="Bold" size={27} />
                            </NavLink>
                            <div className='sm:hidden px-4'>Logout</div>
                        </div>


                    </div>
                </div>
            </nav>
            <div className='col-start-2 col-span-11 pt-4 lg:pr-6'>
                <div className='sm:mt-[4rem] mb-[80px]'>
                    {children}
                </div>
            </div>
            <Footer />

        </main>


    )
}

export default Layout