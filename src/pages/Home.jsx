import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { getRandomQuate } from '../utils/functions'

const Home = ({ qFont }) => {

  const [randomQuate, setRandomQuate] = useState('')
  const [counter, setCounter] = useState(0)

  useEffect(()=>{
    setRandomQuate(getRandomQuate)
  }, [counter])

  return (
    <div className='home-main'>
      <div className={`quate ${qFont}`}>
        <p className="quate__text">
          "{randomQuate.text}"
        </p>
        <span className='quate__author'>- {randomQuate.author} -</span>
      
        <div
          className="quate__footer"
          onClick={()=>setCounter(prev=>(prev+1)%10)}
        >
          <span>&#8594;</span>
          <span>&#8592;</span>
        </div>
      </div>


      <Link to="/store"><span className="home-footer">See more</span></Link>
    </div>
  )
}

export default Home