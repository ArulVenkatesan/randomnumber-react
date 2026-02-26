import { useState } from "react"


function Card(){
    const [rnumber,setrnumber] = useState(0)
   const generatenumber = ()=>{
     let tnumber = Math.floor(Math.random()*100)+1
     setrnumber(tnumber)
   }
    return(
        <div className="p-3 flex flex-col gap-5 items-center">
            <h1 className="text-[#23BCC1] text-2xl font-bold" >R A N D O M N U M B E R</h1>
           <div style={{border:"dotted 2px black"}} className="bg-[#EEF2FF] p-10 rounded capitalize">
           {rnumber==0? <p>no number yet generated</p> : <p className="text-[#E95070] w-48 text-center text-4xl font-bold">{rnumber}</p>}
           </div>
           <button onClick={generatenumber} className="bg-[#2563EB] text-white w-62 p-2 font-medium rounded">Generate Random Number</button>
        </div>
    )
}

export default Card