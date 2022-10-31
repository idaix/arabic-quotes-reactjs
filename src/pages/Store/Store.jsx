import { useEffect, useState } from 'react'
import { categories } from '../../assets/categories'
import './styles.css'

import { getQuote } from '../../utils/functions'

const Store = ({ qFont }) => {

  const [slectedCategory, setSlectedCategory] = useState('love')
  const [data, setData] = useState([])

  useEffect(()=>{
    setData([])
    const fetchData = async () => {
      const getdata = await getQuote(slectedCategory)
      setData(getdata)
    }
    fetchData()
  }, [slectedCategory])
  
  return (
    <div className='store'>
      <ul className="categories">
        {categories?.map(category=>(
          <li 
            key={category.link}
            className="categories__category"
            onClick={() => setSlectedCategory(category.link)}
          >{category.name}</li>
        ))}
      </ul>
      <div className="quotes">
        {data?.map((item,i)=>(
          <div className={`${qFont} quotes__quote`} key={i}>
            <p>{item.text}</p>
            <span className='quotes__quote-author'>-{item.author}-</span>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Store