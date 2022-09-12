import { URL } from "libs/constants"
import React from "react"
import { Route } from "react-router-dom"
import Home from "views/Home"
import NotFound from "views/NotFound"

export default [
  {
    component: (
      <Route key={"home"} path={URL.HOME} exact>
        <Home />
      </Route>
    )
  },
  {
    component: (
      <Route key={"not found"}>
        <NotFound />
      </Route>
    )
  }
]
