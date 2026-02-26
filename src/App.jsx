import Card from "./components/Card.jsx"

function App(){

  return(
    <div style={{height:"100vh"}} className="bg-[#23ADCF] flex justify-center items-center p-5 sm:p-10">
      <div className="bg-white rounded-md p-3 sm:p-10">
        <Card/>
      </div>
    </div>
  )
}

export default App