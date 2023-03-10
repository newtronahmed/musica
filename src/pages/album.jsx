import { Heart, Menu, More, Play } from 'iconsax-react'
import React from 'react'
import { useParams } from 'react-router-dom'
import { useGlobalContext } from '../context/global'
import Layout from '../layouts'
export default function Album() {
    const { type, id } = useParams()
    const { ALLTRACKS, handleSelect, tracks, trackIndex } = useGlobalContext()
    const album = ALLTRACKS[type][id]
    console.log({ tracks, trackIndex })
    return (
        <Layout>
            <section className=' px-8 absolute top-0 left-0 -z-10 sm:static pt-[5rem]' style={{ background: `linear-gradient(180deg, rgba(29, 33, 35, 0.8) 0%, #1D2123 61.48%), url('/images/lead-image.jpg')`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}>
                <div className='flex flex-wrap md:flex-nowrap gap-4 mb-8'>
                    <img className='h-2/3 w-full sm:max-w-fit rounded-[1.5rem]' src={album.cover} />
                    <div className='self-end'>
                        <h3 className='text-4xl font-extrabold leading-loose'>{album.title}</h3>
                        <div className='leading-relaxed w-2/3'>Lorem ipsum dolor sit amet, consectetur  adipisicing elit. Iste ab quos delectus debitis odit ad cum ut expedita assumenda! Suscipit </div>
                        <div className='leading-relaxed'>
                            <span className="text-white text-sm">{album.trackList.length} songs</span> &nbsp; <span className="text-gray-500">N/A</span>
                        </div>
                        <div className='mt-6 flex gap-2'>
                            <div onClick={() => handleSelect({ type, index: 0, albumOrPlaylist: id })} className='glassmorphism  py-1 cursor-pointer rounded-[1rem] z-0 active:bg-primary active:text-white px-2 flex items-center gap-2'><span className='text-primary-yellow ' ><Play variant='Bold' size={16} /></span> <span>Play All</span></div>
                            <div className='glassmorphism px-2 py-1 cursor-pointer rounded-[1rem]'>Add to collection</div>
                            <div className='glassmorphism p-2 cursor-pointer flex items-center rounded-full'><Heart variant='Bold' size={18} /> </div>
                        </div>
                    </div>
                </div>
                <div className='container flex flex-col gap-2'>
                    {
                        album.trackList.map((each, i) => {
                            return (
                                <>
                                    <div key={i} className={` group bg-secondary shadow-md cursor-pointer sm:grid sm:grid-cols-5 rounded-[1rem] p-2 sm:p-4 flex items-center flex-1`} onClick={() => handleSelect({ type, index: i, albumOrPlaylist: id })}>
                                        <div className='flex sm:col-span-1  items-center mr-4'>
                                            <img src="/images/album-6.png" className='w-10 sm:w-14 ' alt="album-6.png" />
                                            <Heart className='ml-8 hidden sm:block group-hover:text-primary-yellow' />
                                        </div>
                                        <div className='grow sm:flex sm:col-span-2'>
                                            <div className=' group-hover:text-primary-yellow font-semibold flex-1'>{each.title}</div>
                                            <div className=' group-hover:text-primary-yellow flex-1 text-xs sm:text-base'>{album.title}</div>

                                        </div>
                                        <div className='sm:flex sm:justify-between sm:col-span-2'>
                                            <div className=' group-hover:text-primary-yellow mb-1    sm:order-2 text-primary-yellow '><More className='transform rotate-90' /> </div>
                                            <div className=' group-hover:text-primary-yellow text-sm  sm:mx-auto sm:order-1 sm:text-base text-ellipsis'>{`3:2`}</div>
                                        </div>
                                    </div>

                                </>
                            )
                        })
                    }
                    <div className="h-28">

                    </div>
                </div>

            </section>
        </Layout>
    )
}
//try out group hover
//opacity-0 -> group-hover:opacity-100
//scale-95 -> group-hover:scale-100
