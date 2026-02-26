import reactdom from "react-dom/client"
import App from "./App.jsx"
import "./index.css"

const root = reactdom.createRoot(document.getElementById("root"))


root.render(
  <div>
    <App/>
  </div>
)