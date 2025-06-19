import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import { useState } from 'react'
import './App.css'
import Header from './layout/Header';
import Footer from './layout/Footer';
import Shop from './components/Shop';
import Home from './pages/Home';



function App() {
 
  return (
    <Router>
     <Header />
     <Switch>
      <Route exact path='/' component={Home} />
      <Route path="/shop" component={Shop} />
     </Switch>
     <Footer />
    </Router>
  )
}

export default App
