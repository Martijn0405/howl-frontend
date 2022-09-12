import WrapperRouter from "components/wrapper/WrapperRouter"
import React from "react"
import { BrowserRouter as Router } from "react-router-dom"
import RoutesPages from "router/routes/RoutesPages"
import ScrollToTop from "utils/elements/ScrollToTop"

const App = () => {
  return (
    <>
      <div className="w-full min-w-[300px]">
        <div className="fixed top-0 left-0 h-screen w-full bg-grey"></div>
        <div className="relative w-full">
          <Router>
            <ScrollToTop />
            <WrapperRouter>{RoutesPages.map((props) => props.component)}</WrapperRouter>
          </Router>
        </div>
      </div>
    </>
  )
}

export default App
