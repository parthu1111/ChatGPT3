import React from 'react'
import './header.css'
import people from "../../Assests/People.png";
import AI from "../../Assests/AI.png";

const Header = () => {
  return (
    <div className='gpt3__header section__padding' id='header'>
      <div className='gpt3__header-content'>
        <h1 className='gradient__text'>Let’s Build Something amazing with GPT-3 OpenAI</h1>
        <p>Yet bed any for travelling assistance indulgence unpleasing. Not thoughts all exercise blessing. Indulgence way everything joy alteration boisterous the attachment. Party we years to order allow asked of.</p>
        <div className='gpt3__header-content_input'>
          <input type='email' placeholder='Your Email Adress' />
          <button type='button'>Get Started</button>
        </div>
        <div className='gpt3__header-content_people'>
          <img src={people} alt='gpt-3' />
          <p>1,600 people requested access a visit in last 24 hours</p>
        </div>

      </div>
      <div className='gpt3__header-image'>
        <img src={AI} alt='header img' />
      </div>
    </div>
  )
}

export default Header