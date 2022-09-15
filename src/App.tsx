import AnimationLoading from "components/animations/AnimationLoading"
import Modals from "components/modals/general/Modals"
import WrapperRouter from "components/wrapper/WrapperRouter"
import { useProps } from "contexts/PropsContext"
import React from "react"
import { BrowserRouter as Router } from "react-router-dom"
import RoutesPages from "router/routes/RoutesPages"
import RoutesUser from "router/routes/RoutesUser"
import ScrollToTop from "utils/elements/ScrollToTop"

const App = () => {
  const { loading } = useProps()

  if (loading) {
    return <AnimationLoading />
  }

  return (
    <>
      <div className="w-full min-w-[300px]">
        <div className="fixed top-0 left-0 h-screen w-full bg-grey"></div>
        <div className="relative w-full">
          <Router>
            <ScrollToTop />
            <WrapperRouter>
              {RoutesUser.map((props) => props.component)}
              {RoutesPages.map((props) => props.component)}
            </WrapperRouter>
            <Modals />
          </Router>
        </div>
      </div>
    </>
  )
}

export default App
