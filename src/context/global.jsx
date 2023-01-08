import { Shuffle } from "iconsax-react";
import React from "react";
import { createContext, useContext, useEffect, useRef } from "react";
import { useState } from "react";
import { newReleases, albums, playlist, topSongs, allUniqueSongs } from "../data";
const GlobalContext = createContext();
function GlobalContextProvider({ children }) {
    // const [helloworld, setHelloworld] = useState('hello world')



    const ALLTRACKS = {
        newReleases,
        albums,
        playlist,
        topSongs
    }
    //Controls state
    const [mobileNav, setMobileNav] = useState(false)
    const [isPlaying, setPlaying] = useState(false);
    const [tracks, setTracks] = useState({
        type: "default",
        trackList:allUniqueSongs
     });
    const [trackIndex, setTrackIndex] = useState(0);
    const [trackProgress, setTrackProgress] = useState(0);
    const [isRepeat, setIsRepeat] = useState(false);
    const [isShuffle, setIsShuffle] = useState(false);
    const [volume, setVolume] = useState(100);

    const [searchTracklist, setSearchTracklist] = useState([])
    const [searchQuery, setSearchQuery] = useState('')
    const [openSearch, setOpenSearch] = useState(false)

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
        console.info('album song src' + audioSrc)
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
        if (type === "search") {
            setTracks({type, trackList: searchTracklist})
        } else if (albumOrPlaylist) {
            setTracks({ type, trackList: ALLTRACKS[type][albumOrPlaylist]["trackList"] })
        } else {
            setTracks({ type, trackList: ALLTRACKS[type] })
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
    const openNav = () => {
        setMobileNav(true)
        console.log('Open Nav')
    }
    const closeNav = () => {
        setMobileNav(false)
    }

    const handleSearch = ({target: { value }}) => {
        setSearchQuery(value)
        setOpenSearch(true)
        const filtered = allUniqueSongs.filter((each, i) => {
            return each.title.toLowerCase().includes(value.toLowerCase()) || each.artist.toLowerCase().includes(value.toLowerCase())
        })
        console.log({ filtered, value })
        if (value !== "") {
            setSearchTracklist(filtered)
        } else {
            setSearchTracklist([])
        }
        // setTracks(filtered)
    }

    return (
        <GlobalContext.Provider
            value={{
                setPlaying,
                isPlaying,
                mobileNav,
                openNav,
                closeNav,
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
                trackIndex,
                topSongs,
                handleSearch,
                searchQuery,
                searchTracklist,
                openSearch,
                setOpenSearch,
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
