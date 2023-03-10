import React from 'react'
import banner_1 from '/images/banner-1.png'
import album_1 from '/images/album-1.jpg'

import Layout from '../layouts'
import { useGlobalContext } from '../context/global'
import TopSongs from '../components/topSongs'
import { NavLink } from 'react-router-dom'

function Index() {
    const { newReleases, handleSelect, albums, topSongs, playlists  } = useGlobalContext()
    // console.log(helloworld)
    console.log(topSongs)
    return (
        <Layout>
            <div className="container lg:grid lg:grid-cols-3 mt-[4rem] sm:mt-0 px-8 sm:px-0 gap-4 ">
                <div className="col-span-2 w-full relative bg-blue shadow-current overflow-hidden h-[80vw] sm:h-auto  sm:pr-0 px-8 rounded-[2rem]">
                    <div className="grid grid-cols-5 h-full relative">
                        <div className="left col-span-4 sm:col-span-2 py-6 flex flex-col sm:justify-between">
                            <div className='basis-2/3'>Curated playlist</div>
                            <div className='basis-1/3'>
                                <h3 className='text-lg lg:text-4xl font-bold'>R & B Hits</h3>
                                <div className='text-sm lg:text-md'>
                                <span className='block sm:inline'>All mine, Lie again, Petty call me everyday,</span>
                                <span className='block sm:inline'>Out of time, No love, Bad habit, and so much more</span> 
                                </div>
                            </div>
                            <div className='flex items-center mt-2 sm:mt-0 '>
                                <div className='ml-4 flex justify-between'>
                                    <img className=' -ml-[0.7rem]' src="/asset/avatar_sm.png" alt="avatar" />
                                    <img className=' -ml-[0.7rem]' src="/asset/avatar_sm.png" alt="avatar" />
                                    <img className=' -ml-[0.7rem]' src="/asset/avatar_sm.png" alt="avatar" />
                                    <img className=' -ml-[0.7rem]' src="/asset/avatar_sm.png" alt="avatar" />
                                    <img className=' -ml-[0.7rem]' src="/asset/avatar_sm.png" alt="avatar" />
                                </div>
                                <div className='mx-4'>
                                    <img src="/asset/like.svg" alt="like" />
                                </div>
                                <div>
                                    <span className='text-xs sm:text-lg flex'>33k likes</span>
                                </div>
                            </div>
                        </div>
                        <div className="right relative sm:relative sm:col-span-3 col-span-1 " >
                            <img src="/asset/wave.svg" className=' absolute top-0 -right-[2.5rem] sm:top-0 sm:right-0 sm:h-full sm:w-full rotate-90 sm:rotate-0' alt="wave" />
                            <img className=' z-[1] bottom-0 hidden sm:block sm:absolute right-[-1rem]' src={banner_1} alt="banner-1" />
                        </div>
                    </div>

                </div>
                <div className="py-4 sm:py-0 col-span-1">
                    <h3 className="my-2 text-2xl font-bold light-primary-font-color">
                        Top Songs
                    </h3>
                    <div className="flex sm:flex-col overflow-x-scroll py-4 gap-4 scrollbar">
                        {
                            topSongs.map((each, i) => (
                                <TopSongs song={each} index={i} key={i} />
                            ))
                        }
                        
                    </div>
                </div>
            </div>
            <div className="container flex flex-col gap-4 py-4  px-8 lg:px-0">
                <section className="py-4">
                    <h3 className="text-2xl font-bold leading-relaxed">
                        New Releases
                    </h3>
                    <div className="flex overflow-x-scroll gap-4 py-4 scrollbar">
                        {
                            newReleases.map((each, i) => {
                                return (<div className=' shrink-0 cursor-pointer active:scale-110' onClick={() => handleSelect({ type: 'newReleases', index: i })} key={each.title + '-' + i}>
                                    <img src={each.cover} className="w-[9rem]" alt="album" />
                                    <div className='my-2'>
                                        {each.title}
                                    </div>
                                </div>)
                            })
                        }
                    </div>
                </section>
                <section className="py-4">
                    <div className="text-2xl font-bold leading-relaxed">Albums</div>
                    <div className="flex overflow-x-scroll gap-3 py-4 scrollbar">
                        {
                            albums.map((each, i) => {
                                return (<NavLink to={`/album/albums/${i}`} className='col-span-1 shrink-0 cursor-pointer w-[9rem] active:scale-110' key={each.title + '-' + i}>
                                    <img src={each.cover} className="rounded-[1rem] w-[9rem]" alt="album" />
                                    <div className='my-2 max-w-full'>
                                        {each.title}
                                    </div>
                                </NavLink>)
                            })
                        }
                    </div>
                </section>
                <section className="py-4 mb-14">
                    <div className="text-2xl font-bold leading-relaxed">Playlists</div>
                    <div className="flex overflow-x-scroll gap-3 py-4 scrollbar">
                        {
                            playlists.map((each, i) => {
                                return (<NavLink to={`/album/playlists/${i}`} className='col-span-1 shrink-0 cursor-pointer w-[9rem] active:scale-110' key={each.title + '-' + i}>
                                    <img src={each.cover} className="rounded-[1rem] w=[9rem]" alt="playlist" />
                                    <div className='my-2 max-w-full'>
                                        {each.title}
                                    </div>
                                </NavLink>)
                            })
                        }
                    </div>
                </section>
            </div>
        </Layout>
    )
}

export default Index