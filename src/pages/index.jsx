import React from 'react'
import banner_1 from '/images/banner-1.png'
import album_1 from '/images/album-1.jpg'

import Layout from '../layouts'
import { useGlobalContext } from '../context/global'
import TopSongs from '../components/topSongs'
import { NavLink } from 'react-router-dom'


function Index() {
    const { newReleases, handleSelect, albums } = useGlobalContext()
    // console.log(helloworld)
    return (
        <Layout>
            <div className="container lg:grid lg:grid-cols-3 gap-4">
                <div className="col-span-2 w-full bg-blue py-6 px-8 rounded-[2rem]">
                    <div className="grid grid-cols-2">
                        <div className="left col-span-1 flex flex-col justify-between">
                            <div>Curated playlist</div>
                            <div>
                                <h3 className='text-lg lg:text-4xl font-bold'>R & B Hits</h3>
                                <div className='text-sm lg:text-md'>
                                    All mine, Lie again, Petty call me everyday, Out of time, No love, Bad habit, and so much moreF
                                </div>
                            </div>
                            <div className='flex items-center '>
                                <div className='ml-4 flex justify-between'>
                                    <img className=' -ml-[1rem]' src="/asset/avatar_sm.png" alt="avatar" />
                                    <img className=' -ml-[1rem]' src="/asset/avatar_sm.png" alt="avatar" />
                                    <img className=' -ml-[1rem]' src="/asset/avatar_sm.png" alt="avatar" />
                                    <img className=' -ml-[1rem]' src="/asset/avatar_sm.png" alt="avatar" />
                                    <img className=' -ml-[1rem]' src="/asset/avatar_sm.png" alt="avatar" />
                                </div>
                                <div className='mx-4'>
                                    <img src="/asset/like.svg" alt="like" />
                                </div>
                                <div>
                                    <span className='lg:text-lg'>33k likes</span>
                                </div>
                            </div>
                        </div>
                        <div className="right relative col-span-1" >
                            <img src="/asset/wave.svg" className='absolute right-0 w-full' style={{ height: '100%' }} alt="wave" />
                            <img className='rounded-sm z-[1] relative right-0' src={banner_1} alt="banner-1" />
                        </div>
                    </div>

                </div>
                <div className="col-span-1">
                    <h3 className="my-2 text-2xl light-primary-font-color">
                        Top Songs
                    </h3>
                    <div className="container grid grid-rows-3 gap-2">
                        {
                            [1, 2, 3].map((each, i) => (
                                <TopSongs key={i} />
                            ))
                        }
                        <div></div>
                        <div></div>
                    </div>
                </div>
            </div>
            <div className="container flex flex-col gap-4 pt-4">
                <section>

                    <h3 className="text-2xl font-bold ">
                        New Releases
                    </h3>
                    <div className="flex overflow-x-scroll gap-3 py-4 scrollbar">
                        {
                            newReleases.map((each, i) => {
                                return (<div className='col-span-1 shrink-0 cursor-pointer active:scale-110' onClick={() => handleSelect({ type: 'newReleases', index: i })} key={each.title + '-' + i}>
                                    <img src={each.cover} alt="album" />
                                    <div className='my-2'>
                                        {each.title}
                                    </div>
                                </div>)
                            })
                        }
                    </div>
                </section>
                <section>
                    <div className="text-2xl font-bold">Albums</div>
                    <div className="flex overflow-x-scroll gap-3 py-4 scrollbar">
                        {
                            albums.map((each, i) => {
                                return (<NavLink to={`/album/albums/${i}`} className='col-span-1 shrink-0 cursor-pointer active:scale-110'  key={each.title + '-' + i}>
                                    <img src={each.cover} alt="album" />
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