import React from 'react'
import { useDispatch } from 'react-redux';
import { setBranoCorrente, setCurrentSrc } from '../slice/currentSrc';

export default function TracksCreatorComp({ album }) {

    function formatTime(seconds) {
        const minutes = Math.floor(seconds / 60);
        const remainingSeconds = seconds % 60;
      
        const formattedMinutes = String(minutes).padStart(2, '0');
        const formattedSeconds = String(remainingSeconds).padStart(2, '0');
      
        return `${formattedMinutes}:${formattedSeconds}`;
      }

      let durataArray = []

      album.data.map((e, index) => {
        durataArray.push(formatTime(e.duration))
      })
      const dispatch = useDispatch();
      // console.log(album.data)

      const handlerSingleTrack = (e, index) => {
        dispatch(setCurrentSrc(e.preview))
        dispatch(setBranoCorrente(index))
        // console.log(index)
      }


  return (
    <>
        {album && album.data.map((e, index) => (
            <div key={index}>
            <div className="py-3 trackHover" onClick={() => handlerSingleTrack(e, index)}>
            <a href="#" className="card-title trackHover px-3" style={{ color: 'white' }}>
                {e.title}
            </a>
            <small className="duration" style={{ color: 'white' }}>
                {durataArray[index]}
            </small>
            </div>
        </div>
        ))} 
    </>
  )
}
