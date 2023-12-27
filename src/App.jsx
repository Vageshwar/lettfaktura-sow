import 'react-app-polyfill/ie11';
import 'react-app-polyfill/stable';
import {Switch, Route } from 'react-router-dom';
import PriceList from './components/pages/PriceList';
import Login from './components/pages/Login';
import Terms from './components/pages/Terms';
import NavBar from './components/molecules/NavBar';
import {BrowserRouter as Router} from 'react-router-dom';
function App() {

  return (
    <main className='main-container'>
      <NavBar />
      <div className="main-container-img-bg-container">
        <img alt='bg' className='main-container-img-bg' src='https://storage.123fakturere.no/public/wallpapers/geiranger.jpg'/>
      </div>
      <section className='relative'>
        <Router>
          <Switch>
            <Route path="/" exact component={Login}/>
            {/* Idealy this should be inside protected route but since its SOW skiping authentication */}
            <Route path="/dashboard/pricelist" exact component={PriceList} />
            <Route path="/terms" exact component={Terms} />
          </Switch>
        </Router>
      </section>
    </main>
  )
}

export default App
