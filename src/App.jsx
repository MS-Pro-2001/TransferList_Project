import { useState } from 'react'
import './App.css'

function App() {
  let [box1arr, setbox1arr] = useState(["item1", "item2", "item3"]);
  let [box2arr, setbox2arr] = useState([]);
  const [temp, setTemp] = useState([]);


  const checked = (e) => {

    if (e.target.checked === true) {
      setTemp([...temp, e.target.name]);
    }
    else {
      setTemp(temp.filter((item) => item !== e.target.name))
    }

  }

  // console.log(temp)

  const transerRight = () => {
    setbox2arr([...box2arr,...temp]);
    setbox1arr(box1arr.filter((item) => !temp.includes(item)))
    
    setTemp([])


  }

  const transferLeft = ()=>{
    setTemp([])
    setbox1arr([...box1arr,...temp]);
    setbox2arr(box2arr.filter((item) => !temp.includes(item)))

    
  }

  console.log(temp)




  return (
    <>
      <div style={{ display: 'flex', position:'relative',left:'35%' }}>

        <div style={{ border: '2px solid red', width: '300px', height: '300px', display: 'flex', flexDirection: 'column', marginRight: '20px' }} >
          {
            box1arr.map((item) =>


              <div key={item + "leftBox"} > <input type="checkbox" name={item} onChange={checked} /> {item}</div>


            )
          }

        </div>

        <div style={{ display: 'flex', flexDirection: 'column', margin: '20px' }}>
          <button onClick={transerRight} style={{ marginBottom: '30px' }} > &#x2192;  </button>
          <button onClick={transferLeft} >   &#x2190;</button>
        </div>

        <div style={{ border: '2px solid red', width: '300px', height: '300px', display: 'flex', flexDirection: 'column' }}>
          {
            
            box2arr.map((item) =>
              
                <div key={item + "rightBox"} > <input type="checkbox" name={item} onChange={checked} /> {item}</div>
              
            )
          }

        </div>
      </div>
    </>
  )
}

export default App
