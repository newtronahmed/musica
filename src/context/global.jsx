import { Shuffle } from "iconsax-react";
import React from "react";
import { createContext, useContext, useEffect, useRef } from "react";
import { useState } from "react";
const GlobalContext = createContext();
function GlobalContextProvider({ children }) {
    // const [helloworld, setHelloworld] = useState('hello world')

    const [newReleases, setNewReleases] = useState([
        {
            title: "Mellisa",
            audioSrc: "/audio/audio_9.mp3",
            artist: "Shatta wale",
            cover: "/images/album-1.png",
        },
        {
            title: "Ofeets)n",
            audioSrc: "/audio/audio_10.mp3",
            artist: "Sarkodie",
            cover: "/images/album-2.png",
        },
        {
            title: "Thunder",
            audioSrc: "/audio/audio_11.mp3",
            artist: "Kidi",
            cover: "/images/album-3.png",
        },
        {
            title: "Mellisa",
            audioSrc: "/audio/audio_9.mp3",
            artist: "Shatta wale",
            cover: "/images/album-4.png",
        },
        {
            title: "Ofeets)n",
            audioSrc: "/audio/audio_10.mp3",
            artist: "Sarkodie",
            cover: "/images/album-5.png",
        },
        {
            title: "Thunder",
            audioSrc: "/audio/audio_11.mp3",
            artist: "Kidi",
            cover: "/images/album-6.png",
        },
        {
            title: "Mellisa",
            audioSrc: "/audio/audio_9.mp3",
            artist: "Shatta wale",
            cover: "/images/album-5.png",
        },
        {
            title: "Ofeets)n",
            audioSrc: "/audio/audio_10.mp3",
            artist: "Sarkodie",
            cover: "/images/album-1.png",
        },
        {
            title: "Thunder",
            audioSrc: "/audio/audio_11.mp3",
            artist: "Kidi",
            cover: "/images/album-2.png",
        },
    ]);
    const [albums, setAlbums] = useState([
        {
            title: "Stonebwoy 2017 album",
            trackList: [
                {
                    title: "Mane me",
                    audioSrc: "/audio/audio_8.mp3",
                    artist: "Stonebwoy",
                    cover: "/images/album-1.png",
                },
                {
                    title: "Shuga",
                    audioSrc: "/audio/audio_12.mp3",
                    artist: "Stonebwoy",
                    cover: "/images/album-2.png",
                },
            ],
            cover: "/asset/Lead-image.png",
        },
        {
            title: "Another Stonebwoy 2017 album",
            trackList: [
                {
                    title: "Mane me",
                    audioSrc: "/audio/audio_8.mp3",
                    artist: "Stonebwoy",
                    cover: "/images/album-1.png",
                },
                {
                    title: "Shuga",
                    audioSrc: "/audio/audio_12.mp3",
                    artist: "Stonebwoy",
                    cover: "/images/album-2.png",
                },
            ],
            cover: "/asset/Lead-image.png",
        },
    ]);
    const [playlist, setPlaylist] = useState([
        {
            title: "Shatta wale 2018",
            trackList: [
                {
                    title: "Gringo",
                    audioSrc: "/audio/audio_6.mp3",
                    artist: "Shatta wale",
                    cover: "/images/album-3.png",
                },
                {
                    title: "Bullet proof",
                    audioSrc: "/audio/audio_7.mp3",
                    artist: "Shatta wale",
                    cover: "/images/album-4.png",
                },
            ],
            cover: "/images/album-1.jpg",
        },
    ]);
    const ALLTRACKS = {
        newReleases,
        albums,
        playlist
    }
    //Controls state
    const [mobileNav,setMobileNav] = useState(true)
    const [isPlaying, setPlaying] = useState(false);
    const [tracks, setTracks] = useState({
        type: "default",
        trackList: [
            {
                title: "Alkaline-mirage",
                audioSrc: "/audio/audio.mp3",
                artist: "Alkaline",
                cover: "/images/album-5.png",
            },
            {
                title: "Strongest Soldier",
                audioSrc: "/audio/audio_1.mp3",
                artist: "Jahmiel",
                cover: "/images/album-6.png",
            },
            {
                title: "One more night",
                audioSrc: "/audio/audio_3.mp3",
                artist: "Busy signal",
                cover: "/images/album-5.png",
            },
            { title: "God Mc", audioSrc: "/audio/audio_4.mp3", artist: "Manifest", cover: "/images/album-1.png", },
            { title: "Progress", audioSrc: "/audio/audio_5.mp3", artist: "Mavado", cover: "/images/album-2.png", },
        ],
    });
    const [trackIndex, setTrackIndex] = useState(0);
    const [trackProgress, setTrackProgress] = useState(0);
    const [isRepeat, setIsRepeat] = useState(false);
    const [isShuffle, setIsShuffle] = useState(false);
    const [volume, setVolume] = useState(100);

    //refs
    const track = tracks.trackList[trackIndex];
    const { title, audioSrc } = track;
    const audioRef = useRef(new Audio(audioSrc));
    const isReady = useRef(false);
    const intervalRef = useRef();
    // const intervalRef = useRef(null)
    const { duration } = audioRef.current;
    
    const trackingPercentage = duration
        ? `${(trackProgress / duration) * 100}% 100%`
        : `0% 100%`;
    const volumePercentage = `${volume}% 100%`;
    console.log(volumePercentage);
    // console.log({trackingPercentage, duration, trackProgress})
    useEffect(() => {
        console.log(`is playing ${isPlaying}`);

        if (isPlaying) {
            audioRef.current.play();
            startTimer();
        } else {
            clearInterval(intervalRef.current);
            audioRef.current.pause();
        }
    }, [isPlaying]);
    useEffect(() => {
        return () => {
            clearInterval(intervalRef.current);
            audioRef.current ? audioRef.current.pause() : "";
        };
    }, []);

    useEffect(() => {
        playMusic();
        console.log("played music");
        console.log(track)
    }, [trackIndex, tracks]);
    const playMusic = () => {
        audioRef.current.pause();
        audioRef.current = new Audio(audioSrc);
        console.info('album song src'+audioSrc)
        setTrackProgress(audioRef.current.currentTime);
        if (isReady.current) {
            audioRef.current.play();
            setPlaying(true);
            startTimer();
            console.log("isReady is true and isPlaying was set to true, why tf");
        } else {
            isReady.current = true;
        }
    };
    const startTimer = () => {
        clearInterval(intervalRef.current);
        intervalRef.current = setInterval(() => {
            if (audioRef.current.ended) {
                if (isRepeat) {
                    console.log("isRepeat");
                    playMusic();
                } else if (isShuffle) {
                    shuffle()
                } else {
                    nextSong();
                }
                console.log("track has ended");
            } else {
                console.log("track progress " + trackProgress);
                setTrackProgress(audioRef.current.currentTime);
                console.log(audioRef.current.currentTime);
            }
        }, 1000);
    };
    const playtracks = (tracks) => {
        setTracks(tracks);
        setTrackIndex(0);
    };
    const shuffle = () => {
        const _tracks = [...tracks.trackList];
        let shuffled = shuffleArray(_tracks);
        console.log({ tracks, shuffled })
        setTracks((prev) => ({ ...prev, trackList: shuffled }));
        console.log("will shuffle");
    }
    const nextSong = () => {
        console.log("next song");
        if (trackIndex < tracks.trackList.length - 1) {
            setTrackIndex(trackIndex + 1);
        } else {
            setTrackIndex(0);
        }

    };
    const previousSong = () => {
        console.log("previous song");
        if (trackIndex - 1 < 0) {
            setTrackIndex(tracks.trackList.length - 1);
        } else {
            setTrackIndex(trackIndex - 1);
        }
    };
    const handleSelect = ({ type, albumOrPlaylist, index }) => {
        // console.log(type,index)
        
        setTrackIndex(index)
        if (albumOrPlaylist) {
            setTracks({ type, trackList: ALLTRACKS[type][albumOrPlaylist]["trackList"] })
        }else {
            setTracks({type, trackList: ALLTRACKS[type]})
        }
    }
    const onScrub = (value) => {
        // clearInterval(intervalRef.current)
        //set audioref.current.currentTime = value
        audioRef.current.currentTime = value;
        // setTrackingprogress to current time
        setTrackProgress(audioRef.current.currentTime);
        startTimer();
    };
    const onVolumeChange = (value) => {
        audioRef.current.volume = value / 100;
        setVolume(value);
    };
    const shuffleArray = (array) => {
        return array.sort((a, b) => Math.random() - 0.5);
    };

    return (
        <GlobalContext.Provider
            value={{
                setPlaying,
                isPlaying,
                mobileNav,
                trackingPercentage,
                duration,
                trackProgress,
                track,
                onScrub,
                onVolumeChange,
                volumePercentage,
                volume,
                nextSong,
                previousSong,
                isShuffle,
                isRepeat,
                setIsShuffle,
                setIsRepeat,
                newReleases,
                setTrackIndex,
                setTracks,
                handleSelect,
                ALLTRACKS,
                albums,
                playlist,
                tracks,
                trackIndex
            }}
        >
            {children}
        </GlobalContext.Provider>
    );
}

export const useGlobalContext = () => {
    console.log("rended");
    return useContext(GlobalContext);
};
export default GlobalContextProvider;
