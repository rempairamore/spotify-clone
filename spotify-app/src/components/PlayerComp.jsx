import React from 'react'
import { Container } from 'react-bootstrap';
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import { useDispatch, useSelector } from 'react-redux';
import { plusOneBrano, prendiSrcDaBrano } from '../slice/currentSrc';

export default function PlayerComp() {

  const canzoneAttuale = useSelector(state => state.currentSrc.currentSrc)
  const numeroBranoAttuale = useSelector(state => state.currentSrc.branoCorrente)
 
  const dispatch = useDispatch()

  const handlerNextTrack = () => {
    dispatch(plusOneBrano(1))
    dispatch(prendiSrcDaBrano())

  }

  const handlePreviousTrack = () => {
    dispatch(plusOneBrano(0))
    dispatch(prendiSrcDaBrano())

  }
  
  return (
    <Container fluid className="fixed-bottom bg-container pt-1">
      <div className="col-12 col-md-8 offset-md-3 mainPage mt-2">
      <AudioPlayer
      src={canzoneAttuale}
      onPlay={e => console.log("onPlay")}
      onClickNext={() => handlerNextTrack()}
      onClickPrevious={() => handlePreviousTrack()}
      showSkipControls 
      // other props here
      /> 
      </div>
  </Container>
  )
}
