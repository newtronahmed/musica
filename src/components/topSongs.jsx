import React from 'react'
import album_1 from '/images/album-1.jpg'
import heart from '/svgs/heart.svg'
export default function TopSongs() {
    return (
        <div className='bg-secondary w-full p-2 rounded-xl'>
            <div className="flex items-center">
                <div className='flex-none'><img className='rounded-lg' src={album_1} alt="album-1" /></div>
                <div className='flex-1 flex flex-col justify-between px-2'>
                    <div className="text-xl">
                        Hello world
                    </div>
                    <div className="text-sm">
                        Hello world
                    </div>
                    <div className="text-lg">
                        Hello world
                    </div>
                </div>
                <div className='flex-none'>
                    <img src={heart} alt="" />
                </div>
            </div>
        </div>
    )
}
