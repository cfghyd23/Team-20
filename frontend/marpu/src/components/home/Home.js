import React from 'react'
import './Home.css'
import { Button } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'


function Home() {
  let navigate = useNavigate()
  let nav = () => {
    navigate('/about')
  }
  return (
    <div className='hero-container'>
      <video src='/videos/video-1.mp4' autoPlay loop muted />
      <h1>MARPU Foundation</h1>
      <h5 style={{padding:"0px 200px"}}>Individually, we are drops. Together, we are an ocean of change.
        Let's join hands and create ripples of hope, compassion, and empowerment that will transform our world.</h5>
      <p>What are you waiting for?</p>
      <div className='hero-btns'>
        <Button
          className='btns'
          onClick={nav}
        >
          know more <i className='far fa-play-circle' />
        </Button>
      </div>
    </div>
  )
}

export default Home