import React from 'react'
import { useGlobalContext } from '../context/global'
import album_1 from '/images/album-1.jpg'
import heart from '/svgs/heart.svg'
export default function TopSongs({ song, index }) {
    const { handleSelect } = useGlobalContext()
    return (
        <div className='bg-secondary w-full p-4 flex justify-between items-start flex-shrink-0 basis-3/5 shadow-md rounded-xl cursor-pointer active:scale-110' onClick={() => handleSelect({ type: 'topSongs', index })}>
            <div className=" sm:flex-row sm:flex flex-col sm:gap-2">
                <div className=''><img className='rounded-lg w-24 sm:w-16 max-w-full' src={song.cover} alt="album-1" /></div>
                <div className='flex-1 flex flex-col justify-between px-2'>
                    <div className="text-xl font-semi-bold">
                        {song.title}
                    </div>
                    <div className="text-sm text-gray-500">
                        {song.artist}
                    </div>
                    <div className="text-sm mt-4 sm:mt-0">
                        N/A
                    </div>
                </div>
            </div>
            <div className='rounded-full p-2 ring-1 ring-primary-yellow'>
                <img classname="" src={heart} alt="" />
            </div>
        </div>
    )
}
