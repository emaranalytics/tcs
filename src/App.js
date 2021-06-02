import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom"

import Home from './pages/Home'
import AboutPage from './pages/AboutPage'
import BlogPage from './pages/BlogPage'
import HireMePage from './pages/HireMePage'
import PortfolioPage from './pages/PortfolioPage'
import ServicePage from './pages/ServicePage'
import SkillsPage from './pages/SkillsPage'

const App = () => {
  return (
    <div>
      <Router>
        <Switch>
              <Route exact path="/" component= {Home} />
              <Route path = "/about" component = {AboutPage} />
              <Route path = "/blog" component = {BlogPage} />
              <Route path = "/hireme" component = {HireMePage} />
              <Route path = "/portfolio" component = {PortfolioPage} />
              <Route path = "/service" component = {ServicePage} />
              <Route path = "/skill" component = {SkillsPage} />
        </Switch>        
      </Router>
    </div>
  )
}

export default App