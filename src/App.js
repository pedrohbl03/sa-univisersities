import React from 'react'
import Home from '../src/pages/Home/index'
import Username from '../src/pages/Username/index'
import ErrorPage from './pages/Error'
import { Route, Routes } from 'react-router-dom'
import PrivateRoute from './Routes/PrivateRoute'
import PublicRoute from './Routes/PublicRoute'
import AppWrapper from '../src/components/AppWrapper/index'

const App = () => {
  return (
    <AppWrapper p={3}>
      <Routes>
        <Route exact path="/"
          element=
          {
            <PublicRoute>
              <Username />
            </PublicRoute>
          }
        />

        <Route exact path="/app"
          element=
          {
            <PrivateRoute>
              <Home />
            </PrivateRoute>
          }
        />

        <Route exact path="app/result"
          element=
          {
            <PrivateRoute>
              <div className="result">
                Teste
              </div>
            </PrivateRoute>
          }
        />


        <Route
          path="*"
          element=
          {
            <ErrorPage />
          }
        />
      </Routes>
    </AppWrapper>
  )
}

export default App;
