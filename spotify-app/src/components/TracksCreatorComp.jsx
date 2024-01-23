import React from 'react'

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
  return (
    <>
        {album && album.data.map((e, index) => (
            <div key={index}>
            <div className="py-3 trackHover">
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
