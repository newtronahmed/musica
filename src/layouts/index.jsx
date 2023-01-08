import React from 'react'
import {
    Home3, Radio,
    MusicLibrary2,
    VideoHorizontal,
    Profile,
    LogoutCurve,
    SearchNormal1,
    VolumeCross,
    CloseCircle
} from 'iconsax-react'
import Footer from '../components/footer'
import { NavLink } from 'react-router-dom'
import { useGlobalContext } from '../context/global'
import { motion } from 'framer-motion'
import animation from '../animations/motion'
import { useState } from 'react'

function Layout({ children }) {
    const { openNav, closeNav, mobileNav, handleSearch, searchQuery, searchTracklist,openSearch,setOpenSearch, handleSelect } = useGlobalContext()
    // const [searchQuery,setSearchQuery] = useState('')
    return (

        <motion.main {...animation.fadeIn} className="lg:grid lg:grid-cols-12 lg:pr-10 relative">
            <header className={`${openSearch? "hidden" : "flex"}  sm:mb-6 py-4 z-10 sm:flex sm:gap-10 items-center bg:transparent w-full bg-opacity-90 backdrop-blur-sm fixed top-0  col-start-1 col-span-12 `}>
                <div className='px-4 flex items-center gap-2'>
                    <div className="px-4 py-2 cursor-pointer sm:hidden" onClick={() => openNav()}>
                        <div className="w-5 h-[2px] mt-1 bg-white"></div>
                        <div className="w-5 h-[2px] mt-1 bg-white"></div>
                    </div>
                    <img src="/svgs/logo.svg" alt="logo" />
                </div>
                <div className='bg-opacity-90 justify-end sm:justify-start   flex items-center flex-grow  backdrop-blur-md '>
                    <div className='pr-8 pl-4 cursor-pointer'>
                        <SearchNormal1 size={18} onClick={() => setOpenSearch(true)} />
                    </div>
                    <input type="text" onChange={(e) => handleSearch(e)} className='hidden sm:block px-4 border-none bg-transparent ' value={searchQuery} placeholder='Search artist' />
                </div>

            </header>
            <div className={`${openSearch ? "block" : "hidden"} px-6 transition-all ease  sm:right-0  absolute z-30  top-0 sm:top-[4.5rem] left-0 `}>
                <div className={`h-16 w-full py-4 flex items-center sm:hidden`}>
                    <input type="text" onChange={(e) => handleSearch(e)} className=' h-14  sm:block px-4 border-none bg-secondary p-4' value={searchQuery} placeholder='Search artist' /> <span className='p-2 cursor-pointer' onClick={()=>setOpenSearch(false)}><CloseCircle /></span> 
                </div>
                <div className=' bg-secondary '>
                    {
                        searchTracklist.map((each,i)=>{
                            return <li onClick={()=>handleSelect({type:"search",index:i})} className='p-2 list-none bg-secondary cursor-pointer text-xl' key={i}>{` ${each.title} - ${each.artist}`}</li>
                            
                        })
                    }
                </div>
            </div>

            <nav className={` fixed left-0 top-0 bottom-0 h-screen sm:w-max right-0  transition ${mobileNav ? "translate-x-0" : "-translate-x-full"} sm:top-[5rem] z-20  md:translate-x-0  sm:col-span-1 `}>
                <div className="nav-links-container h-full py-8 sm:py-0 sm:h-auto w-full sm:w-auto  bg-secondary sm:bg-transparent  sm:ml-4 flex flex-col items-center relative">
                    <div onClick={() => closeNav()} className=" sm:hidden pr-8" style={{ alignSelf: "flex-end" }}><CloseCircle className="text-primary-yellow cursor-pointer" /> </div>
                    <div className="flex flex-col mb-6 rounded-[2rem] w-full bg-secondary nav-svg-container-1">
                        <div className='flex gap-4 items-center cursor-pointer' onClick={() => closeNav()}>
                            <NavLink to={"/"} className={({ isActive }) => `nav-link ${isActive ? "text-primary-yellow" : ''}`}>
                                <Home3 variant="Bold" size={27} />
                            </NavLink>
                            <div className='sm:hidden px-4'>Home</div>
                        </div>
                        <div className='flex gap-4 items-center cursor-pointer' onClick={() => closeNav()}>
                            <NavLink to="music" className={({ isActive }) => `nav-link ${isActive ? "text-primary-yellow" : ''}`} >
                                <MusicLibrary2 variant="Bold" size={27} />
                            </NavLink>
                            <div className='sm:hidden px-4'>Collections </div>
                        </div>
                        <div className='flex gap-4 items-center cursor-pointer' onClick={() => closeNav()}>
                            <NavLink to="/radio" className={({ isActive }) => `nav-link ${isActive ? "text-primary-yellow" : ''}`} >
                                <Radio variant="Bold" size={27} />
                            </NavLink>
                            <div className='sm:hidden px-4'>Radio</div>
                        </div>
                        <div className='flex gap-4 items-center cursor-pointer' onClick={() => closeNav()}>
                            <NavLink to="/video" className={({ isActive }) => `nav-link ${isActive ? "text-primary-yellow" : ''}`} >
                                <VideoHorizontal variant="Bold" size={27} />
                            </NavLink>
                            <div className='sm:hidden px-4'>Videos</div>
                        </div>

                    </div>
                    <div className="flex flex-col flex-none w-full bg-secondary rounded-[2rem] py-2">
                        <div className='flex gap-4 items-center cursor-pointer' onClick={() => closeNav()}>
                            <NavLink to="/profile" className={({ isActive }) => `nav-link ${isActive ? "text-primary-yellow" : ''}`} >
                                <Profile variant="Bold" size={27} />
                            </NavLink>
                            <div className='sm:hidden px-4'>Profile</div>
                        </div>
                        <div className='flex gap-4 items-center cursor-pointer' onClick={() => closeNav()}>
                            <NavLink to="/logout" className={({ isActive }) => `nav-link ${isActive ? "text-primary-yellow" : ''}`} >
                                <LogoutCurve variant="Bold" size={27} />
                            </NavLink>
                            <div className='sm:hidden px-4'>Logout</div>
                        </div>


                    </div>
                </div>
            </nav>
            <div className='col-start-2 col-span-11 pt-4 lg:pr-6'>
                <div className='sm:mt-[4rem] '>
                    {children}
                </div>
            </div>
            <Footer />

        </motion.main>


    )
}

export default Layout