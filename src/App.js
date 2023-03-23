import React from "react"
import Header from "./components/common/header/Header"
import "./App.css"
import Homepages from "./components/home/Homepages"
import Footer from "./components/common/footer/Footer"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import SinglePage from "./components/singlePage/SinglePage"
import Culture from "./components/culture/Culture"
import Politics from "./components/politics/Politics"
import Memes from "./components/memes/Memes"
import Tech from "./components/technologies/Tech"
import Sports from "./components/sports/Sports"
import Featured from "./components/Featured/Featured"


const App = () => {
  return (
    <>
      <Router>
        <Header />
        <Switch>
          <Route path='/' exact component={Homepages} />
          <Route path='/singlePage' exact component={SinglePage} />
          <Route path='/culture' component={Culture} />
          <Route path='/featured' component={Featured} />
          <Route path='/sports' component={Sports} />
          <Route path='/memes' component={Memes} />
          <Route path='/technologies' component={Tech} />
          <Route path='/politics' component={Politics} />
        </Switch>
        <Footer/>
      </Router>
    </>
  )
}

export default App
