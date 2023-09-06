import React, { useContext } from "react";
import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";
import { Songs } from "../Context";
export default function Playing() {
    const {song,handleSetSong} = useContext(Songs)
    const handleClickNext =()=>{
        handleSetSong(song.id + 1)

    } 
    const handleClickPrev =()=>{
        handleSetSong(song.id - 1)

    }

  return (
    <AudioPlayer
      src={song.url}
      className="player"
      layout="stacked-reverse "showSkipControls={true} showJumpControls={false}
      onClickNext={handleClickNext}
      onClickPrevious={handleClickPrev}
    
    />
  );
}
