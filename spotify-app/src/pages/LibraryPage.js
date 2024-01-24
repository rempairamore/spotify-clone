import React from 'react'
import CreateArtistComp from '../components/CreateArtistComp'

export default function LibraryPage() {
  return (
    <div className="col-12 col-md-9 offset-md-3 mainPage">
      <div className="row">
        <div className="col-10">
          <div id="rock">
            <h2>Your favorite artists: </h2>
            <div
              className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 imgLinks py-3"
              id="rockSection"
            >
              <CreateArtistComp />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
