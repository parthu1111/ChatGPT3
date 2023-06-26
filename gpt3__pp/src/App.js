import React from 'react'

import {Navbar,Brand,CTA} from './componants/index';
import {Blog,Features,Possibility,WhatGPT3,Footer,Header} from './containers/index';

import './App.css'
import './index.css'

function App() {
  //testing
  return (
   <div className='App'>
     <div className='gradient__bg'>
        <Navbar/>
        <Header/>
     </div>
     <Brand/>
     <WhatGPT3/>
     <Features/>
     <Possibility/>
     <CTA/>
     <Blog/>
     <Footer/>
     
   </div>
  )
}

export default App