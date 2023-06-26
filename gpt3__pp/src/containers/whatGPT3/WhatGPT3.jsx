import React from 'react'
import './whatGPT3.css'
import { Feature } from '../../componants'

const WhatGPT3 = () => {
  return (
    <div className='gpt3_whatgpt3 section__margin' id='whgpt3'>
      <div className='gpt3_whatgpt3-feature'>
        <Feature/>
      </div>
      <div className='gpt3_whatgpt3-heading'>
        <h1 className='gradient__text'>The possibilities are beyond your imagination</h1>
        <p>Explore The Library</p>
      </div>
      <div className='gpt3_whatgpt3-container'>
        <Feature/>
        <Feature/>
        <Feature/>
      </div>
    </div>
  )
}

export default WhatGPT3