import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { useNavigate, useParams } from 'react-router-dom';
import TracksCreatorComp from '../components/TracksCreatorComp';

export default function AlbumPage() {

  const { albumID } = useParams();
  const [singleAlbum, setSingleAlbum] = useState();
  const navigate = useNavigate();

  useEffect(()  => {
    axios.get('https://striveschool-api.herokuapp.com/api/deezer/album/'+albumID,
    )
    .then(function (response) {
        // handle success
        setSingleAlbum(response.data);
        
    })
    .catch(function (error) {
        // handle error
        console.log(error);
    })

  },[])

  console.log(singleAlbum)
  return (
    <div className="col-12 col-md-9 offset-md-3 mainPage">
      {singleAlbum &&
          <Container className="py-5">
            <Row>
              <Col md={3} className="pt-5 text-center" id="img-container">
                <Card className="img-fluid">
                  <Card.Img src={singleAlbum.cover_medium} alt="Album" />
                  <div className="mt-4 text-center">
                    <p className="album-title">{singleAlbum.title}</p>
                  </div>
                  <div className="text-center">
                    <p className="artist-name" onClick={() => navigate('/artist_page/' + singleAlbum.artist.id)}>{singleAlbum.artist.name}</p>
                  </div>
                  <div className="mt-4 text-center">
                    <Button id="btnPlay" variant="success" type="button">
                      Play
                    </Button>
                  </div>
                </Card>
              </Col>
              <Col md={8} className="p-5">
                <Row>
                  <Col md={10} className="mb-5" id="trackList">
                    <TracksCreatorComp album={singleAlbum.tracks}/>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Container>
    }
    </div>
  )
}
