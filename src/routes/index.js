import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Main from '../components/Main'
import History from '../components/History'

const Routes = (props) => {
  return (
    <Switch>
      <Route exact path="/" render={() => <Main {...props} />} />
      <Route exact path="/history" render={() => <History {...props} />} />
    </Switch>
  )
}

export default Routes
