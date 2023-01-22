import React,{useState} from 'react'
import Layout from '../Components/Layout'

const HomePage = () => {
  const [color, setColor] = useState("white");
    
    
    const changeColor = (e) =>{
        setColor(e.target.value);
        console.log(e.target.value);
    }
  return (
    <Layout>
    <h1 >Home page</h1>
    <h1>{color}</h1>
            <div style={{backgroundColor:color ,height:"65vh" ,width:"100%"}}>
            <h1>Hey Here You Can Pick Your Colour !</h1>
            <div >
                <label htmlFor="exampleColorInput" className="form-label">Click here to pick Color</label>
                <input onChange={changeColor} type="color" className="form-control form-control-color" id="exampleColorInput" defaultValue="#563d7c" title="Choose your color" />
            </div>
            </div>
    </Layout>
  )
}

export default HomePage