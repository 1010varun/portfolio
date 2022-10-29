import React from "react";
import Card from "./bootstrapCard";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "./App.css"
import Data from "./data"


const App = () => {

  return(
    <div>
      <div className="mb-5 pb-5 mt-5 pt-5">
        <h2 className="text-center">My Blog Page</h2>
      </div>
      <div className="mt-5 pt-5">
      {Data.map((indData) => (
        <Card cardHeading={indData.heading} cardData={indData.data} index={indData.id}/>
      ))}
      </div>
    </div>
  )

}

export default App;