import React from 'react'
import './Home.css'
import {Button} from 'react-bootstrap'
import {useNavigate} from 'react-router-dom'

function Home() {
  let navigate = useNavigate()
  let navi = ()=>{
    navigate('/about')
  }
  return (
    <div>
      <div className='hero-container'>
      <video src='/videos/video-1.mp4' autoPlay loop muted />
      <h1>ADVENTURE AWAITS</h1>
      <p>What are you waiting for?</p>
      <div className='hero-btns'>
        <Button
          className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--large'
          onClick={navi}
        >
          About Us<i className='far fa-play-circle' />
        </Button>
      </div>
    </div>
    </div>
  )
}

export default Home