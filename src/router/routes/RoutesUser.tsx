import { URL } from "libs/constants"
import React from "react"
import { Route } from "react-router-dom"
import Affiliates from "views/Affiliates"
import History from "views/History"
import Logout from "views/Logout"
import Settings from "views/Settings"
import Transactions from "views/Transactions"

export default [
  {
    component: (
      <Route key={"affiliates"} path={URL.AFFILIATES} exact>
        <Affiliates />
      </Route>
    )
  },
  {
    component: (
      <Route key={"history"} path={URL.HISTORY} exact>
        <History />
      </Route>
    )
  },
  {
    component: (
      <Route key={"logout"} path={URL.LOGOUT} exact>
        <Logout />
      </Route>
    )
  },
  {
    component: (
      <Route key={"settings"} path={URL.SETTINGS} exact>
        <Settings />
      </Route>
    )
  },
  {
    component: (
      <Route key={"transactions"} path={URL.TRANSACTIONS} exact>
        <Transactions />
      </Route>
    )
  }
]
