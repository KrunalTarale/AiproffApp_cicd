import React, { useState, useRef, useEffect } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faDownload,
  faPlay,
  faPause,
  faTimes,
} from '@fortawesome/free-solid-svg-icons';

import logoimg from '../assets/AiProff X Profile.png';

function formatTime(time) {
  const minutes = Math.floor(time / 60);
  const seconds = Math.floor(time % 60);
  return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
}

function AudioPlayer(props) {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);

  const audioFile = props.audio;

  const togglePlay = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const handleTimeUpdate = () => {
    setCurrentTime(audioRef.current.currentTime);
  };

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.addEventListener('timeupdate', handleTimeUpdate);
      audioRef.current.addEventListener('loadedmetadata', () => {
        setDuration(audioRef.current.duration);
      });

      return () => {
        if (audioRef.current) {
          audioRef.current.removeEventListener('timeupdate', handleTimeUpdate);
        }
      };
    }
  }, []);

  const handleClose = () => {
    if (props.onClose) {
      props.onClose();
    }
  };

  return (
    <div className="p-2 pb-5 bg-gray-100 border-2  rounded-lg fixed bottom-4 md:right-56  lg:right-2 min-w-[16rem] lg:min-h-[15rem]" style={{width: '350px', height: 'auto'}}>
      <div className="flex flex-col items-center mb-2 w-25 ">
        <div className="lg:w-32 lg:h-32  rounded-full overflow-hidden mb-3">
          <img
            src={logoimg}
            alt="this is img"
            className="hidden lg:flex  object-cover w-full h-full"
          />
        </div>
        <h2 className="font-medium mb-1" style={{textAlign: 'center'}}>{props.Title}</h2>
        <p className="text-sm text-gray-500">{`Duration | ${formatTime(
          duration
        )} mins`}</p>
      </div>
      <div className="flex justify-center gap-4 mb-2">
        <button onClick={togglePlay} className=" p-2 flex items-center py-1 ">
          {isPlaying ? (
            <FontAwesomeIcon
              icon={faPause}
              className=" p-1 text-xl text-blue-600 rounded-full hover:bg-blue-600 hover:text-white"
            />
          ) : (
            <FontAwesomeIcon
              icon={faPlay}
              className=" p-1 text-xl text-blue-600 rounded-full hover:bg-blue-600 hover:text-white"
            />
          )}
          {isPlaying ? '' : ''}
        </button>
        <a
          href={audioFile}
          download
          className="p-1 text-xl text-blue-600 rounded-full hover:bg-blue-600 hover:text-white"
        >
          <FontAwesomeIcon icon={faDownload} />
        </a>
        <button
          onClick={handleClose}
          className="p-1 text-xl text-blue-600 rounded-full hover:bg-blue-600 hover:text-white"
        >
          <FontAwesomeIcon icon={faTimes} />
        </button>
      </div>

      <div className="w-full relative">
        <input
          type="range"
          min="0"
          max={duration}
          value={currentTime}
          className="w-full appearance-none bg-gray-300 focus:outline-none "
          onChange={(e) => {
            setCurrentTime(e.target.value);
            audioRef.current.currentTime = e.target.value;
          }}
        />
        {/* Remaining Time Text */}
        <span className="absolute right-2 bottom-[-15px] text-s text-gray-500">
          {formatTime(duration - currentTime)}
        </span>
      </div>
      <audio ref={audioRef} src={audioFile} />
    </div>
  );
}

export default AudioPlayer;
