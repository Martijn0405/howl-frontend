import { URL } from "libs/constants"
import React from "react"
import { Route } from "react-router-dom"
import Account from "views/Account"
import Blog from "views/Blog"
import Fair from "views/Fair"
import Faq from "views/Faq"
import Home from "views/Home"
import NotFound from "views/NotFound"
import Privacy from "views/Privacy"
import Support from "views/Support"

export default [
  {
    component: (
      <Route key={"account"} path={URL.ACCOUNT} exact>
        <Account />
      </Route>
    )
  },
  {
    component: (
      <Route key={"blog"} path={URL.BLOG} exact>
        <Blog />
      </Route>
    )
  },
  {
    component: (
      <Route key={"fair"} path={URL.FAIR} exact>
        <Fair />
      </Route>
    )
  },
  {
    component: (
      <Route key={"faq"} path={URL.FAQ} exact>
        <Faq />
      </Route>
    )
  },
  {
    component: (
      <Route key={"home"} path={URL.HOME} exact>
        <Home />
      </Route>
    )
  },
  {
    component: (
      <Route key={"jackpot"} path={URL.JACKPOT} exact>
        <Home />
      </Route>
    )
  },
  {
    component: (
      <Route key={"home"} path={URL.HOME} exact>
        <Home />
      </Route>
    )
  },
  {
    component: (
      <Route key={"privacy"} path={URL.PRIVACY} exact>
        <Privacy />
      </Route>
    )
  },
  {
    component: (
      <Route key={"support"} path={URL.SUPPORT} exact>
        <Support />
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
