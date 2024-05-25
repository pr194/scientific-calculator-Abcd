import { React, useState } from "react"
import './App.css'
import WbSunnyIcon from '@mui/icons-material/WbSunny'
import Calculator from "./components/Calculator"

function App() {
  const [mode, setMode] = useState(false)
  const [color,setcolor]=useState("secondary")
  const handleclick=()=>{
    if(mode==false){
      setcolor("primary")
      setMode(true)
    }
    else{
      setcolor("secondry")
      setMode(false)
    }
    
    

  }
  return (
    <div className={mode ?'Main' : 'Main2'}>
      <div className="mode-change">
        <button onClick={handleclick}> <WbSunnyIcon color={color} /></button>
      </div>
      <Calculator />
    </div>
  )
}

export default App
