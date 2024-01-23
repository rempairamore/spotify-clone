import React from 'react'
import CreateAlbumsComp from '../components/CreateAlbumsComp'

export default function HomePage() {

  let rockArtists = [
    'queen',
    'u2',
    'thepolice',
    'eagles',
    'thedoors',
    'oasis',
    'thewho',
    'bonjovi',
  ]

  let popArtists = [
    'maroon5',
    'coldplay',
    'onerepublic',
    'jamesblunt',
    'katyperry',
    'arianagrande',
  ]

  let hipHopArtists = [
    'eminem',
    'snoopdogg',
    'lilwayne',
    'drake',
    'kanyewest',
  ]

  return (
    <div className="col-12 col-md-9 offset-md-3 mainPage">
    {/* <div className="row">
      <div className="col-9 col-lg-11 mainLinks d-none d-md-flex">
        <a href="#">TRENDING</a>
        <a href="#">PODCAST</a>
        <a href="#">MOODS AND GENRES</a>
        <a href="#">NEW RELEASES</a>
        <a href="#">DISCOVER</a>
      </div>
    </div>
    <div className="row">
      <div className="col-10">
        <div id="searchResults" style={{ display: 'none' }}>
          <h2>Search Results</h2>
          <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 imgLinks py-3"></div>
        </div>
      </div>
    </div> */}
    <div className="row">
      <div className="col-10">
        <div id="rock">
          <h2>Rock Classics</h2>
          <div
            className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 imgLinks py-3"
            id="rockSection"
          >
            <CreateAlbumsComp  albums={rockArtists} />
          </div>
        </div>
      </div>
    </div>
    <div className="row">
      <div className="col-10">
        <div id="pop">
          <h2>Pop Culture</h2>
          <div
            className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 imgLinks py-3"
            id="popSection"
          >
            <CreateAlbumsComp  albums={popArtists} />
          </div>
        </div>
      </div>
    </div>
    <div className="row">
      <div className="col-10">
        <div id="hiphop">
          <h2>#HipHop</h2>
          <div
            className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 imgLinks py-3"
            id="hipHopSection"
          >
            <CreateAlbumsComp  albums={hipHopArtists} />
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}