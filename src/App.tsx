import React from "react"
import Home from "views/Home"

const App = () => {
  return (
    <>
      <div className="w-full min-w-[300px]">
        <div className="fixed top-0 left-0 h-screen w-full bg-grey"></div>
        <div className="relative w-full">
          <Home />
        </div>
      </div>
    </>
  )
}

export default App
