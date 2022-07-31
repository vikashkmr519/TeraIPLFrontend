import './App.scss'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { TeamPage } from './pages/TeamPage'
import { MatchPage } from './pages/MatchPage'
import { HomePage } from './pages/HomePage'
import { AboutUs } from './pages/AboutUs'
import { SingleMatch } from './pages/SingleMatch'

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route
            path="/teams/:teamName/matches/:year"
            element={<MatchPage />}
          />
          <Route path="/teams/:teamName" element={<TeamPage />} />
          <Route path="/aboutus" element={<AboutUs />}></Route>
          <Route path="/match/:matchId" element={<SingleMatch />}></Route>

          <Route path="/" element={<HomePage />}></Route>
        </Routes>
      </Router>
    </div>
  )
}

export default App
