import React from 'react'
import {
    Next,
    Play,
    Pause,
    Previous,
    RepeateOne,
    Shuffle,
    VolumeHigh,
} from 'iconsax-react'
import { useGlobalContext } from '../context/global'
// import { Layout } from 'antd'
export default function Footer() {
    const {
        isPlaying,
        setPlaying,
        trackingPercentage, duration,
        trackProgress, track, onScrub, onVolumeChange,
        volumePercentage, volume, nextSong, previousSong,
        isRepeat, isShuffle, setIsShuffle,
        setIsRepeat } = useGlobalContext()
    console.log({ duration, trackProgress })
    const minutes = Math.floor(trackProgress / 60)
    const seconds = Math.floor(trackProgress % 60)
    return (

        <footer className='fixed py-4 px-8 bottom-0 col-span-12 w-full row-start-3 row-end-4 lg:h-28 lg:p-4 bg-black z-[3]  bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border-t border-gray-100'>
            <div className='flex items-center justify-between'>
                <div className='sm:w-1/5  flex'>
                    <div className='w-16'>
                        <img src={track.cover} className='w-16 rounded-md' alt="album 7" />
                    </div>
                    <div className='px-2'>
                        <div className="font-bold">{track.title}</div>
                        <div className="text-sm ">{track.artist}</div>
                    </div>
                </div>
                <div className='sm:flex-grow'>
                    <div className='flex justify-center'>
                        <span className={`${isShuffle ? "bg-primary-yellow text-secondary" : ""} p-2 rounded-full cursor-pointer`} onClick={() => setIsShuffle(!isShuffle)}><Shuffle size={22} /></span>
                        <span className='p-2 rounded-full cursor-pointer' onClick={() => previousSong()}><Previous size={22} /></span>
                        <span className='rounded-full p-2 bg-primary-yellow cursor-pointer grow-animation' onClick={() => setPlaying(!isPlaying)}>{isPlaying ? <Pause size={22} /> : <Play size={22} />}</span>
                        <span className='p-2 rounded-full cursor-pointer' onClick={() => nextSong()}><Next size={22} /></span>
                        <span className={`${isRepeat ? "bg-primary-yellow text-secondary" : ""} p-2 rounded-full cursor-pointer`} onClick={() => setIsRepeat(!isRepeat)}><RepeateOne size={22} /></span>
                    </div>
                    <div className='hidden sm:flex items-center mt-2'>
                      <span>{`${minutes}:${seconds}`} </span> &nbsp; <input type="range" step="1" min="0" value={trackProgress} onChange={(e) => onScrub(e.target.value)} max={duration ? duration : ""} className='w-full rounded bg-primary-yellow' name="range" id="" style={{ backgroundSize: trackingPercentage }} />
                    </div>
                </div>
                <div className='hidden sm:w-1/5  sm:flex items-center justify-center'>
                    <span className='p-2'><VolumeHigh size={27} /></span>
                    <span className=' '>
                        <input type="range" value={volume} min="0" max="100" onChange={(e) => onVolumeChange(e.target.value)} name="volume" id="" style={{ backgroundSize: volumePercentage }} />
                    </span>
                </div>
            </div>
        </footer>

    )
}
